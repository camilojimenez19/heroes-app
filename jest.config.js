export default {
    testEnvironment: 'jest-environment-jsdom',
    // setupFiles: ['./jest.setup.js']
    transformIgnorePatterns: [
        "/node_modules/(?!react-dnd|dnd-core|@react-dnd)",
    ],
}