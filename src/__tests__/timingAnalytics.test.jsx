import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import TimingAnalytics from '../components/shared/TimingAnalytics';

// Mock CSS modules
vi.mock('../components/shared/TimingAnalytics.module.css', () => ({
  default: {}
}));

describe('TimingAnalytics Component Tests', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  describe('Component Rendering', () => {
    test('should render with no data message when localStorage is empty', () => {
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      expect(screen.getByText(/No timing data available yet/)).toBeInTheDocument();
      expect(screen.getByText(/Complete an exam to see your timing analytics/)).toBeInTheDocument();
    });

    test('should render close button and handle click', async () => {
      const user = userEvent.setup();
      
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      const closeButton = screen.getByText('✕');
      await user.click(closeButton);
      
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    test('should render exam sessions when data exists', () => {
      // Mock localStorage with exam timing data
      const mockExamData = {
        examType: 'Leading SAFe 6',
        date: '2021-01-01T00:00:00.000Z',
        totalTimeUsed: 3600, // 1 hour
        questionTimings: {
          1: 30000, // 30 seconds
          2: 45000, // 45 seconds
          3: 60000  // 1 minute
        },
        questions: [
          { id: 1, question: 'Test question 1...', domain: 'Domain A', difficulty: 'Foundation' },
          { id: 2, question: 'Test question 2...', domain: 'Domain B', difficulty: 'Intermediate' },
          { id: 3, question: 'Test question 3...', domain: 'Domain C', difficulty: 'Advanced' }
        ]
      };

      localStorage.setItem('examTiming_1609459200000', JSON.stringify(mockExamData));

      render(<TimingAnalytics onClose={mockOnClose} />);
      
      expect(screen.getByText(/Exam Sessions \(1\)/)).toBeInTheDocument();
      expect(screen.getByText(/Leading SAFe 6/)).toBeInTheDocument();
      expect(screen.getByText(/1\/1\/2021/)).toBeInTheDocument(); // Date formatting
    });
  });

  describe('Exam Session Display', () => {
    beforeEach(() => {
      const mockExamData = {
        examType: 'SAFe for Teams 6.0',
        date: '2021-01-01T00:00:00.000Z',
        totalTimeUsed: 2700, // 45 minutes
        questionTimings: {
          1: 120000, // 2 minutes
          2: 90000,  // 1.5 minutes
          3: 180000  // 3 minutes
        },
        questions: [
          { id: 1, question: 'Question about agile practices...', domain: 'Team Agility', difficulty: 'Foundation' },
          { id: 2, question: 'Question about SAFe principles...', domain: 'Lean-Agile Leadership', difficulty: 'Intermediate' },
          { id: 3, question: 'Question about PI planning...', domain: 'Program Execution', difficulty: 'Advanced' }
        ]
      };

      localStorage.setItem('examTiming_1609459200000', JSON.stringify(mockExamData));
    });

    test('should display exam statistics correctly', () => {
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      // Check for time formatting
      expect(screen.getByText(/Total: 45m 0s/)).toBeInTheDocument();
      expect(screen.getByText(/Avg\/Q: 2:10/)).toBeInTheDocument(); // Average of 2:00, 1:30, 3:00
      expect(screen.getByText(/Questions: 3/)).toBeInTheDocument();
    });

    test('should show detailed analysis when exam is selected', async () => {
      const user = userEvent.setup();
      
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      // Click on the exam session
      const examSession = screen.getByText(/SAFe for Teams 6.0/);
      await user.click(examSession);
      
      // Should show detailed analysis
      expect(screen.getByText(/SAFe for Teams 6.0 - Detailed Analysis/)).toBeInTheDocument();
      expect(screen.getByText(/Total Exam Time:/)).toBeInTheDocument();
      expect(screen.getByText(/45m 0s/)).toBeInTheDocument();
      expect(screen.getByText(/Questions Tracked: 3/)).toBeInTheDocument();
    });

    test('should display timing statistics in detailed view', async () => {
      const user = userEvent.setup();
      
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      // Select exam session
      const examSession = screen.getByText(/SAFe for Teams 6.0/);
      await user.click(examSession);
      
      // Check timing statistics
      expect(screen.getByText(/Average Time per Question:/)).toBeInTheDocument();
      expect(screen.getByText(/Fastest Question:/)).toBeInTheDocument();
      expect(screen.getByText(/Slowest Question:/)).toBeInTheDocument();
      expect(screen.getAllByText(/1:30/)).toHaveLength(2); // Fastest (90 seconds) - appears in both statistics and breakdown
      expect(screen.getByText(/3:00/)).toBeInTheDocument(); // Slowest (180 seconds)
    });

    test('should display per-question breakdown', async () => {
      const user = userEvent.setup();
      
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      // Select exam session
      const examSession = screen.getByText(/SAFe for Teams 6.0/);
      await user.click(examSession);
      
      // Should show per-question breakdown
      expect(screen.getByText(/Per-Question Breakdown/)).toBeInTheDocument();
      expect(screen.getByText(/Q1/)).toBeInTheDocument();
      expect(screen.getByText(/Q2/)).toBeInTheDocument();
      expect(screen.getByText(/Q3/)).toBeInTheDocument();
      
      // Check domains are shown
      expect(screen.getByText(/Team Agility/)).toBeInTheDocument();
      expect(screen.getByText(/Lean-Agile Leadership/)).toBeInTheDocument();
      expect(screen.getByText(/Program Execution/)).toBeInTheDocument();
    });
  });

  describe('Data Management', () => {
    beforeEach(() => {
      // Add multiple exam sessions
      const exam1 = {
        examType: 'Leading SAFe 6',
        date: '2021-01-01T00:00:00.000Z',
        totalTimeUsed: 3600,
        questionTimings: { 1: 30000, 2: 45000 },
        questions: [
          { id: 1, question: 'Question 1...', domain: 'Domain A', difficulty: 'Foundation' },
          { id: 2, question: 'Question 2...', domain: 'Domain B', difficulty: 'Intermediate' }
        ]
      };

      const exam2 = {
        examType: 'SAFe for Teams 6.0',
        date: '2021-01-02T00:00:00.000Z',
        totalTimeUsed: 2400,
        questionTimings: { 1: 40000, 2: 50000 },
        questions: [
          { id: 1, question: 'Question A...', domain: 'Domain X', difficulty: 'Foundation' },
          { id: 2, question: 'Question B...', domain: 'Domain Y', difficulty: 'Advanced' }
        ]
      };

      localStorage.setItem('examTiming_1609459200000', JSON.stringify(exam1));
      localStorage.setItem('examTiming_1609545600000', JSON.stringify(exam2));
    });

    test('should display multiple exam sessions', () => {
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      expect(screen.getByText(/Exam Sessions \(2\)/)).toBeInTheDocument();
      expect(screen.getByText(/Leading SAFe 6/)).toBeInTheDocument();
      expect(screen.getByText(/SAFe for Teams 6.0/)).toBeInTheDocument();
    });

    test('should delete individual exam session', async () => {
      const user = userEvent.setup();
      // Mock window.confirm to return true
      window.confirm = vi.fn().mockReturnValue(true);
      
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      // Find and click delete button for first exam
      const deleteButtons = screen.getAllByText('🗑️');
      await user.click(deleteButtons[0]);
      
      // Should show confirmation and delete
      expect(window.confirm).toHaveBeenCalledWith(
        'Are you sure you want to delete this exam timing data?'
      );
      
      // Should update the display (only 1 exam left)
      await waitFor(() => {
        expect(screen.getByText(/Exam Sessions \(1\)/)).toBeInTheDocument();
      });
    });

    test('should clear all data when clear all is clicked', async () => {
      const user = userEvent.setup();
      window.confirm = vi.fn().mockReturnValue(true);
      
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      const clearAllButton = screen.getByText('Clear All');
      await user.click(clearAllButton);
      
      expect(window.confirm).toHaveBeenCalledWith(
        'Are you sure you want to clear all timing data? This cannot be undone.'
      );
      
      // Should show no data message
      await waitFor(() => {
        expect(screen.getByText(/No timing data available yet/)).toBeInTheDocument();
      });
    });

    test('should cancel deletion when user clicks cancel', async () => {
      const user = userEvent.setup();
      window.confirm = vi.fn().mockReturnValue(false);
      
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      const clearAllButton = screen.getByText('Clear All');
      await user.click(clearAllButton);
      
      // Should still show 2 exam sessions
      expect(screen.getByText(/Exam Sessions \(2\)/)).toBeInTheDocument();
    });
  });

  describe('Time Formatting', () => {
    test('should format milliseconds correctly', () => {
      const mockExamData = {
        examType: 'Leading SAFe 6',
        date: '2021-01-01T00:00:00.000Z',
        totalTimeUsed: 3665, // 1 hour, 1 minute, 5 seconds
        questionTimings: {
          1: 125000, // 2 minutes 5 seconds (125 seconds)
          2: 65000   // 1 minute 5 seconds (65 seconds)
        },
        questions: [
          { id: 1, question: 'Question 1...', domain: 'Domain A', difficulty: 'Foundation' },
          { id: 2, question: 'Question 2...', domain: 'Domain B', difficulty: 'Intermediate' }
        ]
      };

      localStorage.setItem('examTiming_1609459200000', JSON.stringify(mockExamData));

      render(<TimingAnalytics onClose={mockOnClose} />);
      
      // Check time formatting
      expect(screen.getByText(/Total: 1h 1m 5s/)).toBeInTheDocument();
    });

    test('should handle edge cases in time formatting', () => {
      const mockExamData = {
        examType: 'Leading SAFe 6',
        date: '2021-01-01T00:00:00.000Z',
        totalTimeUsed: 59, // 59 seconds
        questionTimings: {
          1: 999, // Less than 1 second (0:00)
          2: 30500 // 30.5 seconds (0:30)
        },
        questions: [
          { id: 1, question: 'Question 1...', domain: 'Domain A', difficulty: 'Foundation' },
          { id: 2, question: 'Question 2...', domain: 'Domain B', difficulty: 'Intermediate' }
        ]
      };

      localStorage.setItem('examTiming_1609459200000', JSON.stringify(mockExamData));

      render(<TimingAnalytics onClose={mockOnClose} />);
      
      expect(screen.getByText(/0m 59s/)).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    test('should handle corrupted localStorage data gracefully', () => {
      // Add corrupted JSON to localStorage
      localStorage.setItem('examTiming_corrupted', 'invalid json');
      
      render(<TimingAnalytics onClose={mockOnClose} />);
      
      // Should still render without crashing
      expect(screen.getByText(/No timing data available yet/)).toBeInTheDocument();
    });

    test('should handle missing questionTimings data', async () => {
      const user = userEvent.setup();
      
      const incompleteExamData = {
        examType: 'Leading SAFe 6',
        date: '2021-01-01T00:00:00.000Z',
        totalTimeUsed: 3600,
        // Missing questionTimings
        questions: []
      };

      localStorage.setItem('examTiming_1609459200000', JSON.stringify(incompleteExamData));

      render(<TimingAnalytics onClose={mockOnClose} />);
      
      // Click on exam session
      const examSession = screen.getByText(/Leading SAFe 6/);
      await user.click(examSession);
      
      // Should show message about no timing data
      expect(screen.getByText(/No question timing data available for this exam/)).toBeInTheDocument();
    });
  });
});

