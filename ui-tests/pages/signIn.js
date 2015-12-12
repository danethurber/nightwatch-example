const signInPageCommands = {
  attemptBackgroundSignin() {
    const page = this
    const browser = this.api

    browser.url(function(res) {
      const hasBackgroundLogin = res.value.toLowerCase().indexOf('stagebackgroundlogin') > -1

      if(!hasBackgroundLogin) return

      page
        .setValue('@bgUserName', browser.globals.backgroundLogin.userName)
        .setValue('@bgPassword', browser.globals.backgroundLogin.password)
        .click('@submit')
    })

    return this
  },

  signIn() {
    const page = this
    const browser = this.api

    page
      .setValue('@userName', browser.globals.user.userName)
      .setValue('@password', browser.globals.user.password)
      .click('@submit')

    return this
  }
}

export default {
  commands: [signInPageCommands],

  elements: {
    bgUserName: '#nameOrEmail',
    bgPassword: '[type="password"]',
    userName: '#Username',
    password: '#Password',
    submit: '[type="submit"]'
  },

  url() {
    return this.api.globals.authentication.signInUrl
  }
}
