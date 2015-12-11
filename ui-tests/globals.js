export default {
  baseUrl: process.env.NIGHTWATCH_BASE_URL || '',

  authentication: {
    signInUrl: `${process.env.NIGHTWATCH_BASE_URL}/id/signin`,
    signOutUrl: `${process.env.NIGHTWATCH_BASE_URL}/id/signout`
  },

  backgroundLogin: {
    userName: process.env.NIGHTWATCH_BG_USER_NAME,
    password: process.env.NIGHTWATCH_BG_USER_PASSWORD
  },

  user: {
    userName: process.env.NIGHTWATCH_TEST_USER_NAME,
    password: process.env.NIGHTWATCH_TEST_USER_PASSWORD
  }
}
