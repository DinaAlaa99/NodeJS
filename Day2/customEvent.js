const util = require('util')
const eventEmitter = require('events')

function login() {
       eventEmitter.call(this)
}

util.inherits(login,eventEmitter)

module.exports = login