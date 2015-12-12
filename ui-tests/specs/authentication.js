export default {
  beforeEach(browser) {
    browser.authenticate()
  },

  'User Can Authenticate and View Dashboard' (browser) {
    const dashboard = browser.page.dashboard()

    dashboard.navigate()
    browser.assert.urlEquals(dashboard.url)

    browser.end()
  }
}
