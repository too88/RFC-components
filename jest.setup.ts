import '@testing-library/jest-dom'
import React from 'react'
global.React = React

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        dispatchEvent: jest.fn(),
        removeListener: jest.fn(), // deprecated
        onchange: null,
        addListener: jest.fn(), // deprecated
        media: query,
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    })
})
