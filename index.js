'use strict'

var assert = require('assert')
var extend = require('xtend')

module.exports = EventBus

function EventBus () {
  var namespaces = {}

  return {
    namespace: namespace,
    emit: emit
  }

  function namespace (name, events) {
    assert(!namespaces.hasOwnProperty(name), 'Namespace "' + name + '" already declared!')
    assert.equal(typeof events, 'object', 'expected object events')

    // Use an immutable clone of the events object
    namespaces[name] = extend(events)
  }

  function emit (event, payload) {
    assert.equal(typeof event, 'string', 'string event expected')

    var split = event.split(':')
    var name = split[0]
    var eventName = split[1]

    assert(name && eventName, 'expected format namespace:eventName')
    assert(namespaces.hasOwnProperty(name), 'Namespace "' + namespace + '" not declared!')
    assert(namespaces[name].hasOwnProperty(eventName), 'Namespace "' + name +
           '" does not have an event of type "' + eventName + '"!')

    namespaces[name][eventName](payload)
  }
}
