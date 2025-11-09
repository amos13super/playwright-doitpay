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
        ['junit', { outputFile: 'report/junit.xml' }]
    ],
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10_000,
        trace: 'on-first-retry'
    }
};


export default config;