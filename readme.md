# busride [![Build Status](https://travis-ci.org/ajoslin/busride.svg?branch=master)](https://travis-ci.org/ajoslin/busride)

> Immutable, namespaced EventBus

## Install

```
$ npm install --save busride
```

## Usage

```js
var Busride = require('busride')

var bus = Busride()

bus.namespace('airplane', {
  fly: (payload) => console.log('fly', payload)
})

bus.emit('airplane:fly', 'high') // => 'fly high'
```

## API

#### `Busride()` -> `bus`

Returns a new event bus.

#### `bus.namespace(name, events)`

##### name

*Required*
Type: `string`

The prefix used to call all of the events.

Each namespace can only be declared once.

##### events

*Required*
Type: `object

An object whose keys are the names of events to expose, and whose values are listeners.

#### `bus.emit(event, payload)`

##### event

*Required*
Type: `string`

Must follow the format `namespace:eventName`. It will give sane errors if you give a bad namespace or eventName.

##### payload

*Optional*
Type: `string`

One argument, passed into the event's listener.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
