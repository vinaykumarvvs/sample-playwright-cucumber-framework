const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./reports",
  reportPath: "./reports",
  metadata: {
    browser: {
      name: 'chrome'
    },
    device: "Local",
    platform: {
      name: "MacOs Sonoma",
      version: "",
    },
  },
  customData: {
    title: "Sample Playwright Cucumber Framework",
    data: [
      { label: "Project", value: "Sample project" },
      { label: "Release", value: "1.0.0" }
    ]
  },
});