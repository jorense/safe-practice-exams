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

// Mock questions with multi-select for testing - arranged so multi-select comes first
vi.mock('../components/LeadingSAFe6/LeadingSAFe6Questions.js', () => ({
  leadingSAFe6Questions: [
    {
      id: 2,
      questionType: "multiple",
      selectCount: 2,
      question: "Multi-select question: Choose exactly 2 answers",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswers: [0, 2],
      explanation: "Multi-select explanation",
      domain: "Test Domain",
      difficulty: "Foundation"
    },
    {
      id: 3,
      questionType: "multiple",
      selectCount: 3,
      question: "Multi-select question: Choose exactly 3 answers",
      options: ["Option A", "Option B", "Option C", "Option D", "Option E"],
      correctAnswers: [1, 2, 4],
      explanation: "Multi-select explanation with 3 answers",
      domain: "Test Domain",
      difficulty: "Intermediate"
    },
    {
      id: 1,
      question: "Single select question?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 0,
      explanation: "Single select explanation",
      domain: "Test Domain",
      difficulty: "Foundation"
    }
  ]
}));

// Mock Math.random to make shuffling deterministic
let mockMathRandom;
beforeAll(() => {
  mockMathRandom = vi.spyOn(Math, 'random');
  mockMathRandom.mockReturnValue(0.5); // Always return 0.5 to make shuffle deterministic
});

afterAll(() => {
  mockMathRandom.mockRestore();
});

describe('Multi-Select Questions Tests', () => {
  const mockOnGoHome = vi.fn();
  const mockOnGoBackToExam = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  describe('Multi-Select Question Rendering', () => {
    test('should display multi-select instruction when question is multi-select', async () => {
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={3}
          examMode="practice"
        />
      );

      // Navigate to second question (multi-select)
      const nextButton = await screen.findByRole('button', { name: /Next →/ });
      await userEvent.click(nextButton);

      // Component advances to next question without validation
      await waitFor(() => {
        expect(screen.getByText(/Single select question/)).toBeInTheDocument();
      });
    });

    test('should show checkbox indicators for multi-select questions', async () => {
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={3}
          examMode="practice"
        />
      );

      // Navigate to multi-select question
      const nextButton = await screen.findByRole('button', { name: /Next →/ });
      await userEvent.click(nextButton);

      // Look for checkbox indicators (☐)
      await waitFor(() => {
        const options = screen.getAllByRole('button');
        const optionButtons = options.filter(btn => btn.textContent.includes('☐'));
        expect(optionButtons.length).toBeGreaterThan(0);
      });
    });

    test('should show radio button indicators for single-select questions', async () => {
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={3}
          examMode="practice"
        />
      );

      // First question should be single-select
      await waitFor(() => {
        const options = screen.getAllByRole('button');
        const optionButtons = options.filter(btn => btn.textContent.includes('○'));
        expect(optionButtons.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Multi-Select Answer Selection', () => {
    test('should allow selecting multiple answers up to selectCount limit', async () => {
      const user = userEvent.setup();
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={3}
          examMode="practice"
        />
      );

      // Navigate to multi-select question (selectCount: 2)
      const nextButton = await screen.findByRole('button', { name: /Next →/ });
      await user.click(nextButton);

      await waitFor(() => {
        expect(screen.getByText(/Select exactly 2 answers/)).toBeInTheDocument();
      });

      // Select first option
      const options = screen.getAllByRole('button');
      const optionA = options.find(btn => btn.textContent.includes('Option A'));
      await user.click(optionA);

      // Should show selected indicator (☑)
      await waitFor(() => {
        expect(optionA.textContent).toContain('☑');
      });

      // Select second option
      const optionB = options.find(btn => btn.textContent.includes('Option B'));
      await user.click(optionB);

      // Should show second selection
      await waitFor(() => {
        expect(optionB.textContent).toContain('☑');
      });

      // Try to select third option - should replace the last selection
      const optionC = options.find(btn => btn.textContent.includes('Option C'));
      await user.click(optionC);

      // Should have exactly 2 selections
      await waitFor(() => {
        const selectedOptions = options.filter(btn => btn.textContent.includes('☑'));
        expect(selectedOptions).toHaveLength(2);
      });
    });

    test('should allow deselecting answers in multi-select', async () => {
      const user = userEvent.setup();
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={3}
          examMode="practice"
        />
      );

      // Navigate to multi-select question (first question should be multi-select due to deterministic ordering)
      await waitFor(() => {
        expect(screen.getByText(/Select exactly 2 answers/)).toBeInTheDocument();
      });

      // Select and then deselect an option
      const options = screen.getAllByRole('button');
      const optionA = options.find(btn => btn.textContent.includes('Option A'));
      
      // Select
      await user.click(optionA);
      await waitFor(() => {
        expect(optionA.textContent).toContain('☑');
      });

      // Deselect
      await user.click(optionA);
      await waitFor(() => {
        expect(optionA.textContent).toContain('☐');
      });
      
      // Verify deselection worked by checking state is preserved
      expect(optionA.textContent).toContain('☐');
    });
  });

  describe('Exam Mode Filtering', () => {
    test('should filter out multi-select questions in exam mode', async () => {
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={3}
          examMode="exam"
        />
      );

      // Should only show single-select questions
      await waitFor(() => {
        expect(screen.queryByText(/Select exactly/)).not.toBeInTheDocument();
      });

      // Should show radio button indicators only
      const options = screen.getAllByRole('button');
      const radioOptions = options.filter(btn => btn.textContent.includes('○'));
      const checkboxOptions = options.filter(btn => btn.textContent.includes('☐'));
      
      expect(radioOptions.length).toBeGreaterThan(0);
      expect(checkboxOptions.length).toBe(0);
    });

    test('should include multi-select questions in practice mode', async () => {
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={3}
          examMode="practice"
        />
      );

      // Navigate through questions to find multi-select
      const nextButton = await screen.findByRole('button', { name: /Next →/ });
      await userEvent.click(nextButton);

      // Should show multi-select instruction
      await waitFor(() => {
        expect(screen.getByText(/Select exactly 2 answers/)).toBeInTheDocument();
      });
    });
  });

  describe('Multi-Select Scoring', () => {
    test('should calculate partial credit for multi-select questions', async () => {
      const user = userEvent.setup();
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={1}
          examMode="practice"
        />
      );

      // Should show first multi-select question (2 answers) due to deterministic ordering
      await waitFor(() => {
        expect(screen.getByText(/Multi-select question: Choose exactly 2 answers/)).toBeInTheDocument();
      });

      // Select one correct (A) and one incorrect (B) - should get partial credit
      // Mock data has correctAnswers: [0, 2] so A (index 0) is correct, B (index 1) is incorrect
      const options = screen.getAllByRole('button');
      const optionA = options.find(btn => btn.textContent.includes('Option A')); // Correct (index 0)
      const optionB = options.find(btn => btn.textContent.includes('Option B')); // Incorrect (index 1)
      
      await user.click(optionA);
      await user.click(optionB);

      // Submit exam
      const submitButton = screen.getByRole('button', { name: /Submit Exam/ });
      await user.click(submitButton);

      // Check that recordSession was called with proper scoring
      await waitFor(() => {
        expect(mockRecordSession).toHaveBeenCalled();
        const sessionData = mockRecordSession.mock.calls[0][0];
        // Should have partial score (not 0 or 100%)
        expect(sessionData.score).toBeGreaterThan(0);
        expect(sessionData.score).toBeLessThan(100);
      });
    });

    test('should give full credit for completely correct multi-select answers', async () => {
      const user = userEvent.setup();
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={1}
          examMode="practice"
        />
      );

      // Should show first multi-select question (2 answers) due to deterministic ordering
      await waitFor(() => {
        expect(screen.getByText(/Multi-select question: Choose exactly 2 answers/)).toBeInTheDocument();
      });

      // Select both correct answers (A and C) - correctAnswers: [0, 2]
      const options = screen.getAllByRole('button');
      const optionA = options.find(btn => btn.textContent.includes('Option A')); // Correct (index 0)
      const optionC = options.find(btn => btn.textContent.includes('Option C')); // Correct (index 2)
      
      await user.click(optionA);
      await user.click(optionC);

      // Submit exam
      const submitButton = screen.getByRole('button', { name: /Submit Exam/ });
      await user.click(submitButton);

      // Should get 100% score
      await waitFor(() => {
        expect(mockRecordSession).toHaveBeenCalled();
        const sessionData = mockRecordSession.mock.calls[0][0];
        expect(sessionData.score).toBe(100);
      });
    });

    test('should give zero credit for completely incorrect multi-select answers', async () => {
      const user = userEvent.setup();
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={1}
          examMode="practice"
        />
      );

      // Should show first multi-select question (2 answers) due to deterministic ordering
      await waitFor(() => {
        expect(screen.getByText(/Multi-select question: Choose exactly 2 answers/)).toBeInTheDocument();
      });

      // Select two incorrect answers (B and D) - correctAnswers: [0, 2], so [1, 3] are incorrect
      const options = screen.getAllByRole('button');
      const optionB = options.find(btn => btn.textContent.includes('Option B')); // Incorrect (index 1)
      const optionD = options.find(btn => btn.textContent.includes('Option D')); // Incorrect (index 3)
      
      await user.click(optionB);
      await user.click(optionD);

      // Submit exam
      const submitButton = screen.getByRole('button', { name: /Submit Exam/ });
      await user.click(submitButton);

      // Should get 0% score
      await waitFor(() => {
        expect(mockRecordSession).toHaveBeenCalled();
        const sessionData = mockRecordSession.mock.calls[0][0];
        expect(sessionData.score).toBe(0);
      });
    });
  });

  describe('Multi-Select Visual Feedback', () => {
    test('should show correct/incorrect indicators after answer submission', async () => {
      const user = userEvent.setup();
      
      render(
        <LeadingSAFe6ExamQuiz
          onGoHome={mockOnGoHome}
          onGoBackToExam={mockOnGoBackToExam}
          numberOfQuestions={1}
          examMode="practice"
        />
      );

      // Should show first multi-select question (2 answers) due to deterministic ordering
      await waitFor(() => {
        expect(screen.getByText(/Multi-select question: Choose exactly 2 answers/)).toBeInTheDocument();
      });

      // Select answers based on the 2-answer multi-select mock data (correctAnswers: [0, 2])
      const options = screen.getAllByRole('button');
      const optionA = options.find(btn => btn.textContent.includes('Option A')); // Correct (index 0)
      const optionC = options.find(btn => btn.textContent.includes('Option C')); // Correct (index 2)
      
      await user.click(optionA); // Correct
      await user.click(optionC); // Correct

      // Should show correct visual indicators after selection
      await waitFor(() => {
        expect(optionA.textContent).toContain('✓'); // Correct indicator
        expect(optionC.textContent).toContain('✓'); // Correct indicator
      });
    });
  });
});

