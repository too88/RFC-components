import '@testing-library/jest-dom'
import React from 'react'
global.React = React

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    onchange: null,
    media: query,
    matches: false,
    dispatchEvent: jest.fn(),
    removeListener: jest.fn(), // deprecated
    addListener: jest.fn(), // deprecated
    removeEventListener: jest.fn(),
    addEventListener: jest.fn()
  })
})
