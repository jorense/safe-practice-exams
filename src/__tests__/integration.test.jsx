import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import App from '../App';

// Mock CSS modules
vi.mock('../App.css', () => ({}));
vi.mock('../StudyMaterials.css', () => ({}));
vi.mock('../components/LeadingSAFe6/LeadingSAFe6Exam.module.css', () => ({}));
vi.mock('../components/LeadingSAFe6/LeadingSAFe6ExamQuiz.module.css', () => ({}));
vi.mock('../components/SAFeTeams6/SAFeTeams6ExamQuiz.module.css', () => ({}));
vi.mock('../components/shared/TimingAnalytics.module.css', () => ({}));
vi.mock('../components/shared/Results.module.css', () => ({}));

// Mock smaller question sets for faster testing
vi.mock('../components/LeadingSAFe6/LeadingSAFe6Questions.js', () => ({
  leadingSAFe6Questions: [
    {
      id: 1,
      question: "What is the primary goal of SAFe?",
      options: ["Business Agility", "Technical Excellence", "Team Performance", "Process Compliance"],
      correctAnswer: 0,
      explanation: "Business Agility is the primary goal of SAFe",
      domain: "Lean-Agile Leadership",
      difficulty: "Foundation"
    },
    {
      id: 2,
      questionType: "multiple",
      selectCount: 2,
      question: "Which are core SAFe values? (Select 2)",
      options: ["Alignment", "Built-in Quality", "Transparency", "Program Execution"],
      correctAnswers: [0, 2],
      explanation: "Alignment and Transparency are core SAFe values",
      domain: "Lean-Agile Leadership", 
      difficulty: "Foundation"
    }
  ]
}));

vi.mock('../components/SAFeTeams6/SAFeTeams6Questions.js', () => ({
  safeTeams6Questions: [
    {
      id: 1,
      question: "What is the recommended team size in SAFe?",
      options: ["5-9 people", "10-12 people", "13-15 people", "16-20 people"],
      correctAnswer: 0,
      explanation: "5-9 people is the recommended team size",
      domain: "Team and Technical Agility",
      difficulty: "Foundation"
    }
  ]
}));

describe('Quiz Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  describe('Full Exam Flow with Timing', () => {
    test('should complete full exam with timing and analytics', async () => {
      const user = userEvent.setup();
      vi.useFakeTimers();
      const mockDateNow = vi.spyOn(Date, 'now');
      
      render(<App />);

      // Navigate to Leading SAFe 6 exam
      await waitFor(() => {
        expect(screen.getByText(/Leading SAFe 6/)).toBeInTheDocument();
      });

      const leadingSAFeButton = screen.getByRole('button', { name: /Leading SAFe 6/ });
      await user.click(leadingSAFeButton);

      // Set practice mode and start exam
      await waitFor(() => {
        expect(screen.getByText(/Practice Mode/)).toBeInTheDocument();
      });

      const practiceButton = screen.getByRole('button', { name: /Practice Mode/ });
      await user.click(practiceButton);

      // Should start exam with timing
      await waitFor(() => {
        expect(screen.getByText(/Question 1 of/)).toBeInTheDocument();
        expect(screen.getByText(/Time on question: 0:00/)).toBeInTheDocument();
      });

      // Simulate time passing on first question
      mockDateNow.mockReturnValue(1609459230000); // +30 seconds
      vi.advanceTimersByTime(30000);

      await waitFor(() => {
        expect(screen.getByText(/Time on question: 0:30/)).toBeInTheDocument();
      });

      // Answer first question
      const options = screen.getAllByRole('button');
      const firstOption = options.find(btn => 
        btn.textContent && btn.textContent.includes('Business Agility')
      );
      await user.click(firstOption);

      // Navigate to second question (multi-select)
      const nextButton = screen.getByRole('button', { name: /Next →/ });
      await user.click(nextButton);

      // Reset time for second question
      mockDateNow.mockReturnValue(1609459230000);

      await waitFor(() => {
        expect(screen.getByText(/Question 2 of 2/)).toBeInTheDocument();
        expect(screen.getByText(/Select exactly 2 answers/)).toBeInTheDocument();
        expect(screen.getByText(/Time on question: 0:00/)).toBeInTheDocument();
      });

      // Simulate time on second question
      mockDateNow.mockReturnValue(1609459275000); // +45 seconds
      vi.advanceTimersByTime(45000);

      await waitFor(() => {
        expect(screen.getByText(/Time on question: 0:45/)).toBeInTheDocument();
      });

      // Answer multi-select question
      const alignmentOption = options.find(btn => 
        btn.textContent && btn.textContent.includes('Alignment')
      );
      const transparencyOption = options.find(btn => 
        btn.textContent && btn.textContent.includes('Transparency')
      );
      
      await user.click(alignmentOption);
      await user.click(transparencyOption);

      // Submit exam
      const submitButton = screen.getByRole('button', { name: /Submit Exam/ });
      await user.click(submitButton);

      // Should show results with timing
      await waitFor(() => {
        expect(screen.getByText(/Exam Results/)).toBeInTheDocument();
      });

      // Go back to home
      const homeButton = screen.getByRole('button', { name: /Home/ });
      await user.click(homeButton);

      // Access timing analytics
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /Timing/ })).toBeInTheDocument();
      });

      const timingButton = screen.getByRole('button', { name: /Timing/ });
      await user.click(timingButton);

      // Should show timing analytics with exam data
      await waitFor(() => {
        expect(screen.getByText(/Exam Timing Analytics/)).toBeInTheDocument();
        expect(screen.getByText(/Leading SAFe 6/)).toBeInTheDocument();
        expect(screen.getByText(/Questions: 2/)).toBeInTheDocument();
      });

      vi.useRealTimers();
    });

    test('should handle exam mode filtering correctly', async () => {
      const user = userEvent.setup();
      
      render(<App />);

      // Navigate to Leading SAFe 6 exam
      await waitFor(() => {
        expect(screen.getByText(/Leading SAFe 6/)).toBeInTheDocument();
      });

      const leadingSAFeButton = screen.getByRole('button', { name: /Leading SAFe 6/ });
      await user.click(leadingSAFeButton);

      // Select exam mode (should filter out multi-select)
      await waitFor(() => {
        expect(screen.getByText(/Exam Mode/)).toBeInTheDocument();
      });

      const examButton = screen.getByRole('button', { name: /Exam Mode/ });
      await user.click(examButton);

      // Should start with only single-select questions
      await waitFor(() => {
        expect(screen.getByText(/Question 1 of 1/)).toBeInTheDocument(); // Only 1 single-select
        expect(screen.queryByText(/Select exactly/)).not.toBeInTheDocument();
      });

      // Verify radio button indicators
      const options = screen.getAllByRole('button');
      const radioOptions = options.filter(btn => 
        btn.textContent && btn.textContent.includes('○')
      );
      expect(radioOptions.length).toBeGreaterThan(0);
    });
  });

  describe('Multi-Component Integration', () => {
    test('should persist exam mode preference across sessions', async () => {
      const user = userEvent.setup();
      
      render(<App />);

      // Set exam mode preference
      const leadingSAFeButton = await screen.findByRole('button', { name: /Leading SAFe 6/ });
      await user.click(leadingSAFeButton);

      // Select Practice Mode
      const practiceButton = await screen.findByRole('button', { name: /Practice Mode/ });
      await user.click(practiceButton);

      // Go back and check if preference is saved
      const backButton = screen.getByRole('button', { name: /← Back/ });
      await user.click(backButton);

      const homeButton = screen.getByRole('button', { name: /← Home/ });
      await user.click(homeButton);

      // Re-enter exam
      await user.click(leadingSAFeButton);

      // Should remember Practice Mode selection
      await waitFor(() => {
        const practiceSelected = screen.getByRole('button', { name: /Practice Mode/ });
        expect(practiceSelected).toHaveClass('selected'); // Assuming CSS class for selected state
      });
    });

    test('should handle timing data persistence across app reloads', async () => {
      const user = userEvent.setup();

      // Set up timing data in localStorage
      const timingData = {
        examType: 'Leading SAFe 6',
        date: '2021-01-01T00:00:00.000Z',
        totalTimeUsed: 1200,
        questionTimings: { 1: 30000, 2: 45000 },
        questions: [
          { id: 1, question: 'Test question 1...', domain: 'Domain A', difficulty: 'Foundation' },
          { id: 2, question: 'Test question 2...', domain: 'Domain B', difficulty: 'Intermediate' }
        ]
      };
      localStorage.setItem('examTiming_1609459200000', JSON.stringify(timingData));

      render(<App />);

      // Access timing analytics
      const timingButton = await screen.findByRole('button', { name: /Timing/ });
      await user.click(timingButton);

      // Should load persisted timing data
      await waitFor(() => {
        expect(screen.getByText(/Exam Sessions \(1\)/)).toBeInTheDocument();
        expect(screen.getByText(/Leading SAFe 6/)).toBeInTheDocument();
      });

      // Select exam for details
      const examSession = screen.getByText(/Leading SAFe 6/);
      await user.click(examSession);

      // Should show detailed timing information
      await waitFor(() => {
        expect(screen.getByText(/Total Exam Time: 20m 0s/)).toBeInTheDocument();
        expect(screen.getByText(/Questions Tracked: 2/)).toBeInTheDocument();
      });
    });
  });

  describe('Error Handling and Edge Cases', () => {
    test('should handle empty question sets gracefully', async () => {
      // Mock empty question set
      vi.doMock('../components/LeadingSAFe6/LeadingSAFe6Questions.js', () => ({
        leadingSAFe6Questions: []
      }));

      const user = userEvent.setup();
      
      render(<App />);

      const leadingSAFeButton = await screen.findByRole('button', { name: /Leading SAFe 6/ });
      await user.click(leadingSAFeButton);

      const practiceButton = await screen.findByRole('button', { name: /Practice Mode/ });
      await user.click(practiceButton);

      // Should show loading or handle empty state
      await waitFor(() => {
        expect(screen.getByText(/Preparing your exam/)).toBeInTheDocument();
      });
    });

    test('should handle corrupt timing data gracefully', async () => {
      const user = userEvent.setup();

      // Add corrupt timing data
      localStorage.setItem('examTiming_corrupt', 'invalid json data');
      
      render(<App />);

      const timingButton = await screen.findByRole('button', { name: /Timing/ });
      await user.click(timingButton);

      // Should still render without crashing
      await waitFor(() => {
        expect(screen.getByText(/Exam Timing Analytics/)).toBeInTheDocument();
      });
    });

    test('should handle rapid question navigation without timing errors', async () => {
      const user = userEvent.setup();
      vi.useFakeTimers();
      
      render(<App />);

      // Start exam
      const leadingSAFeButton = await screen.findByRole('button', { name: /Leading SAFe 6/ });
      await user.click(leadingSAFeButton);

      const practiceButton = await screen.findByRole('button', { name: /Practice Mode/ });
      await user.click(practiceButton);

      await waitFor(() => {
        expect(screen.getByText(/Question 1 of/)).toBeInTheDocument();
      });

      // Rapidly navigate between questions
      const nextButton = screen.getByRole('button', { name: /Next →/ });
      const prevButton = screen.getByRole('button', { name: /← Previous/ });
      
      for (let i = 0; i < 5; i++) {
        await user.click(nextButton);
        vi.advanceTimersByTime(100);
        await user.click(prevButton);
        vi.advanceTimersByTime(100);
      }

      // Should still function correctly
      expect(screen.getByText(/Time on question:/)).toBeInTheDocument();

      vi.useRealTimers();
    });
  });

  describe('Performance and Memory', () => {
    test('should not cause memory leaks with timing intervals', async () => {
      const user = userEvent.setup();
      
      render(<App />);

      // Start and stop exam multiple times
      for (let i = 0; i < 3; i++) {
        const leadingSAFeButton = await screen.findByRole('button', { name: /Leading SAFe 6/ });
        await user.click(leadingSAFeButton);

        const practiceButton = await screen.findByRole('button', { name: /Practice Mode/ });
        await user.click(practiceButton);

        await waitFor(() => {
          expect(screen.getByText(/Question 1 of/)).toBeInTheDocument();
        });

        // Go back to home
        const backButton = screen.getByRole('button', { name: /← Back/ });
        await user.click(backButton);

        const homeButton = screen.getByRole('button', { name: /← Home/ });
        await user.click(homeButton);
      }

      // Should not accumulate timers or cause errors
      expect(screen.getByText(/LACE Studio/)).toBeInTheDocument();
    });

    test('should handle large amounts of timing data efficiently', async () => {
      const user = userEvent.setup();

      // Add many exam sessions to localStorage
      for (let i = 0; i < 50; i++) {
        const timingData = {
          examType: i % 2 === 0 ? 'Leading SAFe 6' : 'SAFe for Teams 6.0',
          date: new Date(2021, 0, i + 1).toISOString(),
          totalTimeUsed: 1200 + i * 60,
          questionTimings: { 1: 30000 + i * 1000 },
          questions: [{ id: 1, question: `Question ${i}...`, domain: 'Domain', difficulty: 'Foundation' }]
        };
        localStorage.setItem(`examTiming_${1609459200000 + i * 86400000}`, JSON.stringify(timingData));
      }

      render(<App />);

      const timingButton = await screen.findByRole('button', { name: /Timing/ });
      await user.click(timingButton);

      // Should load and display data efficiently
      await waitFor(() => {
        expect(screen.getByText(/Exam Sessions \(50\)/)).toBeInTheDocument();
      });

      // Should be able to scroll through sessions
      const examSessions = screen.getAllByText(/Leading SAFe 6|SAFe for Teams 6.0/);
      expect(examSessions.length).toBeGreaterThan(0);
    });
  });
});

