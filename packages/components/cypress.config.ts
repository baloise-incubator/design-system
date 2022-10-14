import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'dnm1ky',
  video: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,

  env: {
    failSilently: false,
  },

  lighthouse: {
    options: {
      formFactor: 'mobile',
      skipAudits: ['uses-http2'],
      throttling: {
        rttMs: 40,
        throughputKbps: 10 * 1024,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0, // 0 means unset
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
      },
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: false,
      },
      emulatedUserAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Safari/537.36 Chrome-Lighthouse',
    },
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('./cypress/plugins/index.ts').default(on, config)
    },
    baseUrl: 'http://localhost:3333/',
    // excludeSpecPattern: '**/node_modules/**',
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
} as any)
