exports.command = function(done) {
  const browser = this

  browser.url(browser.globals.authentication.signInUrl)

    .setValue('#nameOrEmail', browser.globals.backgroundLogin.userName)
    .setValue('input[type="password"]', browser.globals.backgroundLogin.password)
    .click('#login')

    .setValue('#Username', browser.globals.user.userName)
    .setValue('#Password', browser.globals.user.password)
    .click('#login')

  if(typeof done === 'function')
    done.call(this)

  return this
}
