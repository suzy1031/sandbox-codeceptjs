const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://localhost",
      show: true,
    },
  },
  include: {
    I: "./steps_file.js",
  },
  plugins: {
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      screenshotsForAllureReport: true,
    },
    customLocator: {
      enabled: true,
      attribute: "data-qa",
    },
    // 参考: https://codecept.io/plugins/#coverage
    // coverage: {
    //   enabled: true,
    // },
  },
  name: "sandbox-codeceptjs",
};
