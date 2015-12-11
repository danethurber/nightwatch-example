const launchUrl = "https://app-stage.pluralsight.com/library/"

export default {
  src_folders : ['ui-tests/specs'],
  output_folder : 'ui-tests/reports',

  selenium : {
    start_process : true,
    server_path : 'bin/selenium-server-standalone-2.48.2.jar'
  },

  test_workers: process.env.NIGHTWATCH_RUN_PARALLEL === 'true',

  test_settings : {
    default: {
      launch_url : launchUrl,
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true
      }
    },

    firefox: {
      launch_url : launchUrl,
      desiredCapabilities: {
        browserName: "firefox",
        javascriptEnabled: true
      }
    }
  }
}
