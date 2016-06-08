'use strict'

var test = require('tape')
var Bus = require('./')

test('zer0-bus', function (t) {
  t.test('errors for double-namespace declaration', function (t) {
    var bus = Bus()
    bus.namespace('foo', {})
    t.throws(function () {
      bus.namespace('foo', {})
    })
    t.end()
  })

  t.test('errors for emitting bad string', function (t) {
    var bus = Bus()
    bus.namespace('foo', {
      bar: function () {}
    })

    t.throws(function () {
      bus.emit('foobar')
    })
    t.throws(function () {
      bus.emit('foo:baz')
    })
    t.throws(function () {
      bus.emit('bar')
    })
    bus.emit('foo:bar')
    t.end()
  })

  t.test('calls a namespace function', function (t) {
    t.plan(1)

    var bus = Bus()
    bus.namespace('foo', {
      bar: function (payload) {
        t.equal(payload, 'payload!')
      }
    })

    bus.emit('foo:bar', 'payload!')
  })
})
