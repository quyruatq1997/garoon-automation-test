const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'internet explorer',
      restart: false,
      windowSize: 'maximize',
      desiredCapabilities: {
        ieOptions: {
          "ie.browserCommandLineSwitches": "-private",
          "ie.usePerProcessProxy": true,
          "ie.ensureCleanSession": true,
        },
          chromeOptions: {
            args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
          }
      },
      waitForTimeout: 3000
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  multiple: {
    chrome: {
      // run all tests in chrome and ie
      browsers: ["chrome"],
      keepBrowserState: true,
      keepCookies: true,
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        }
      },
    },
    ie: {
      browsers: ['internet explorer'],
      desiredCapabilities: {
        ieOptions: {
          "ie.browserCommandLineSwitches": "-private",
          "ie.usePerProcessProxy": true,
          "ie.ensureCleanSession": true,
        },
      },
      windowSize: '1920x1680',
    }
  }
};
