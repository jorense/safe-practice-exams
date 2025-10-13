import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import LeadingSAFe6ExamQuiz from '../components/LeadingSAFe6/LeadingSAFe6ExamQuiz';

// Mock the contexts
const mockRecordSession = vi.fn();
const mockUpdateSpacedRepetition = vi.fn();

vi.mock('../contexts/ProgressContext', () => ({
  useProgress: () => ({
    recordSession: mockRecordSession
  })
}));

vi.mock('../contexts/StudyIntelligenceContext', () => ({
  useStudyIntelligence: () => ({
    updateSpacedRepetition: mockUpdateSpacedRepetition
  })
}));

// Mock CSS modules
vi.mock('../components/LeadingSAFe6/LeadingSAFe6ExamQuiz.module.css', () => ({}));
vi.mock('../components/shared/Results.module.css', () => ({}));

describe('Timing System Tests', () => {
  const mockOnGoHome = vi.fn();
  const mockOnGoBackToExam = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    // Reset Date.now to known value
    vi.spyOn(Date, 'now').mockReturnValue(1609459200000); // 2021-01-01 00:00:00
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Per-Question Timing', () => {
    test('should display initial question timer', async () => {
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={5}
          examMode="practice"
        />
      );

      await waitFor(() => {
        expect(screen.getByText(/Time on question: 0:00/)).toBeInTheDocument();
      });
    });

    test('should update question timer every second', async () => {
      vi.useFakeTimers();
      const mockDateNow = vi.spyOn(Date, 'now');
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={5}
          examMode="practice"
        />
      );

      // Wait for component to load
      await waitFor(() => {
        expect(screen.getByText(/Time on question: 0:00/)).toBeInTheDocument();
      });

      // Simulate 5 seconds passing
      mockDateNow.mockReturnValue(1609459205000); // +5 seconds
      vi.advanceTimersByTime(5000);

      await waitFor(() => {
        expect(screen.getByText(/Time on question: 0:05/)).toBeInTheDocument();
      });

      vi.useRealTimers();
    });

    test('should track timing when navigating between questions', async () => {
      const user = userEvent.setup();
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={5}
          examMode="practice"
        />
      );

      // Wait for questions to load
      await waitFor(() => {
        expect(screen.getByText(/Question 1 of 5/)).toBeInTheDocument();
      });

      // Find and click next button
      const nextButton = screen.getByRole('button', { name: /Next →/ });
      await user.click(nextButton);

      // Verify we moved to question 2
      await waitFor(() => {
        expect(screen.getByText(/Question 2 of 5/)).toBeInTheDocument();
      });

      // Timer should reset for new question
      expect(screen.getByText(/Time on question: 0:00/)).toBeInTheDocument();
    });
  });

  describe('Timing Data Storage', () => {
    test('should store timing data in localStorage on exam submission', async () => {
      const user = userEvent.setup();
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={2}
          examMode="practice"
        />
      );

      // Wait for questions to load
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /Submit Exam/ })).toBeInTheDocument();
      });

      // Answer first question
      const firstOption = screen.getAllByRole('button')[0]; // First answer option
      if (firstOption && firstOption.className?.includes('option')) {
        await user.click(firstOption);
      }

      // Submit exam
      const submitButton = screen.getByRole('button', { name: /Submit Exam/ });
      await user.click(submitButton);

      // Check if timing data was stored
      await waitFor(() => {
        const storageKeys = Object.keys(localStorage.__STORE__ || {});
        const timingKeys = storageKeys.filter(key => key.startsWith('examTiming_'));
        expect(timingKeys.length).toBeGreaterThan(0);
      });
    });

    test('should store correct timing data structure', async () => {
      const user = userEvent.setup();
      localStorage.setItem = vi.fn();

      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={1}
          examMode="practice"
        />
      );

      // Wait and submit
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /Submit Exam/ })).toBeInTheDocument();
      });

      const submitButton = screen.getByRole('button', { name: /Submit Exam/ });
      await user.click(submitButton);

      // Verify localStorage.setItem was called with correct structure
      await waitFor(() => {
        expect(localStorage.setItem).toHaveBeenCalledWith(
          expect.stringMatching(/^examTiming_\d+$/),
          expect.stringMatching(/"examType":"Leading SAFe 6"/)
        );
      });
    });
  });

  describe('Timer Integration with Exam Modes', () => {
    test('should handle unlimited time in practice mode', async () => {
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={200} // Large number triggers unlimited time
          examMode="practice"
        />
      );

      await waitFor(() => {
        expect(screen.getByText(/Unlimited Time/)).toBeInTheDocument();
      });
    });

    test('should show countdown timer in exam mode', async () => {
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={45} // Standard exam size
          examMode="exam"
        />
      );

      await waitFor(() => {
        expect(screen.getByText(/Time Remaining:/)).toBeInTheDocument();
        expect(screen.getByText(/01:30:00/)).toBeInTheDocument(); // 90 minutes
      });
    });
  });

  describe('Question Timer Reset', () => {
    test('should reset timer when navigating between questions', async () => {
      const user = userEvent.setup();
      vi.useFakeTimers();
      const mockDateNow = vi.spyOn(Date, 'now');
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={3}
          examMode="practice"
        />
      );

      await waitFor(() => {
        expect(screen.getByText(/Question 1 of 3/)).toBeInTheDocument();
      });

      // Simulate 10 seconds on first question
      mockDateNow.mockReturnValue(1609459210000);
      vi.advanceTimersByTime(10000);

      await waitFor(() => {
        expect(screen.getByText(/Time on question: 0:10/)).toBeInTheDocument();
      });

      // Navigate to next question
      const nextButton = screen.getByRole('button', { name: /Next →/ });
      await user.click(nextButton);

      // Reset mock time for new question
      mockDateNow.mockReturnValue(1609459210000);

      // Timer should reset
      await waitFor(() => {
        expect(screen.getByText(/Time on question: 0:00/)).toBeInTheDocument();
      });

      vi.useRealTimers();
    });

    test('should reset all timing states on exam retake', async () => {
      const user = userEvent.setup();
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={1}
          examMode="practice"
        />
      );

      // Submit exam first
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /Submit Exam/ })).toBeInTheDocument();
      });

      const submitButton = screen.getByRole('button', { name: /Submit Exam/ });
      await user.click(submitButton);

      // Should show results page
      await waitFor(() => {
        expect(screen.getByText(/Exam Results/)).toBeInTheDocument();
      });

      // Find retake button
      const retakeButton = screen.getByRole('button', { name: /Retake/ });
      await user.click(retakeButton);

      // Should be back to question 1 with timer reset
      await waitFor(() => {
        expect(screen.getByText(/Question 1 of 1/)).toBeInTheDocument();
        expect(screen.getByText(/Time on question: 0:00/)).toBeInTheDocument();
      });
    });
  });
});

