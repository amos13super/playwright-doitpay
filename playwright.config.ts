import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
    testDir: './src/tests/',
    timeout: 30_000,
    expect: { timeout: 5000 },
    fullyParallel: true,
    retries: 1,
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['junit', { outputFile: 'report/junit.xml' }],
        ['allure-playwright']
    ],
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10_000,
        trace: 'on-first-retry',
        baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com',
        extraHTTPHeaders: {
        'Content-Type': 'application/json'
        }
    }   
};


export default config;