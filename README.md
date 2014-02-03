## meteor-queue-async

A meteorite package for [Atmosphere](https://atmosphere.meteor.com), providing a wrapper for the [queue-async](https://github.com/mbostock/queue) library by [Mike Bostock](https://github.com/mbostock).

Quoting from the author:

> Queue.js is yet another asynchronous helper library for JavaScript.
> Think of it as a minimalist version of Async.js that allows fine-tuning over parallelism.
> Or, think of it as a version of TameJs that does not use code generation.

### How to install:
1. make sure you have [meteorite](https://github.com/oortcloud/meteorite) installed
    `$ npm install -g meteorite`
2. inside your project, run:
    `$ mrt add queue-async`

`meteor-queue-async` has no dependencies on the client or server.

### In your Meteor project:

Exposes the `queueAsync` object.

API documentation is available at the [queue-async page on github](https://github.com/mbostock/queue)
