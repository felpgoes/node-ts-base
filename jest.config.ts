export default {
    testMatch: ['<rootDir>/tests/*.test.ts'],
    clearMocks: true,
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'node',
    maxWorkers: 1,
    collectCoverage: true,
    testTimeout: 5000,
    collectCoverageFrom: ['src/**/*.ts','!src/models/Model.ts', '!src/*', '!src/middlewares/*']
}