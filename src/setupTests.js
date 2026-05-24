import "@testing-library/jest-dom";

class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
  }
  observe(target) {
    this.callback([
      {
        isIntersecting: true,
        intersectionRatio: 1,
        target: target || { id: "home" },
      },
    ]);
  }
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = IntersectionObserverMock;

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
