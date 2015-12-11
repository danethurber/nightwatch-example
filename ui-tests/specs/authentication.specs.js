export default {
  beforeEach(browser) {
    browser.signin()
  },

  'User Can Sign In' (browser) {
    browser.assert.urlEquals(`${browser.globals.baseUrl}/library/`)
    browser.end()
  }
}
