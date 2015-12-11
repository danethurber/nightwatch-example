export default {
  'Demo Test: Google Second' (client) {
    client.url('http://google.no').pause(1000)

    client.expect.element('body').to.be.present.before(1000)
    client.expect.element('#lst-ib').to.have.css('display')
    client.expect.element('body').to.have.attribute('class').which.contains('vasq')
    client.expect.element('#lst-ib').to.be.an('input')
    client.expect.element('#lst-ib').to.be.visible

    client.end()
  }

}
