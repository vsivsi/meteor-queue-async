## meteor-queue-async

**DEPRECATED!  This package is no longer works or is necessary for Meteor 1.3 and above, and will no longer be maintained!**

Beginning with Meteor 1.3, you can simply use the built-in npm support instead of using this package.

`meteor npm install --save d3-queue`

And then in your client and/or server code:

`import { QueueAsync } from 'd3-queue';`

The documentation below is for legacy purposes only!

= = = = =

A meteorite package for [Atmosphere](https://atmosphere.meteor.com), providing a wrapper for the [queue-async](https://github.com/mbostock/queue) library by [Mike Bostock](https://github.com/mbostock).

Quoting from the author:

> Queue.js is yet another asynchronous helper library for JavaScript.
> Think of it as a minimalist version of Async.js that allows fine-tuning over parallelism.
> Or, think of it as a version of TameJs that does not use code generation.

### How to install:
1. inside your project, run:
    `$ meteor add vsivsi:queue-async`

`queue-async` has no dependencies on the client or server.

### In your Meteor project:

Exposes the `QueueAsync` object.

API documentation is available at the [queue-async page on github](https://github.com/mbostock/queue)
