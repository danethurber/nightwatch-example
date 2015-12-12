exports.command = function(done) {
  const browser = this
  const signInPage = browser.page.signIn()

  signInPage.navigate()
    .attemptBackgroundSignin()
    .signIn()

  if(typeof done === 'function')
    done.call(this)

  return this
}
