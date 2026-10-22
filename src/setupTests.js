import '@testing-library/jest-dom';

const createStorageMock = () => {
  let store = {};

  return {
    getItem: jest.fn(key => Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null),
    setItem: jest.fn((key, value) => { store[key] = String(value); }),
    removeItem: jest.fn(key => { delete store[key]; }),
    clear: jest.fn(() => { store = {}; }),
    key: jest.fn(index => Object.keys(store)[index] ?? null),
    get length() { return Object.keys(store).length; }
  };
};

// Stateful storage mocks preserve browser behavior while retaining mock assertions.
const localStorageMock = createStorageMock();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  writable: true,
  value: localStorageMock
});

// Mock sessionStorage
const sessionStorageMock = createStorageMock();
Object.defineProperty(globalThis, 'sessionStorage', {
  configurable: true,
  writable: true,
  value: sessionStorageMock
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock Date.now for consistent timing tests
const mockDateNow = jest.spyOn(Date, 'now');
beforeEach(() => {
  mockDateNow.mockReturnValue(1609459200000); // 2021-01-01 00:00:00 UTC
  localStorage.clear();
  sessionStorage.clear();
});

afterEach(() => {
  jest.clearAllMocks();
});
