const launchUrl = `${process.env.NIGHTWATCH_BASE_URL}/library/`

export default {
  src_folders: ['ui-tests/specs'],
  output_folder: 'ui-tests/reports',

  globals_path: 'ui-tests/globals',
  custom_commands_path: 'ui-tests/commands',
  custom_assertions_path: 'ui-tests/assertions',

  selenium: {
    start_process : true,
    server_path : 'bin/selenium-server-standalone-2.48.2.jar'
  },

  test_workers: process.env.NIGHTWATCH_RUN_PARALLEL === 'true',

  test_settings : {
    default: {
      launch_url: launchUrl,
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true
      }
    },

    firefox: {
      launch_url: launchUrl,
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true
      }
    }
  }
}
