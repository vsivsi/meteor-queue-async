/***************************************************************************
###     Copyright (C) 2014-2016 by Vaughn Iverson
###     vsivsi:queue-async is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

Package.describe({
  summary: 'DEPRECATED for Meteor 1.3, use d3-queue npm package directly instead!',
  name: 'vsivsi:queue-async',
  version: '1.0.7_1',
  git: 'https://github.com/vsivsi/meteor-queue-async.git'
});

Package.onUse(function(api) {
  api.export('QueueAsync');
  api.add_files(['queue/queue.js', 'meteor-queue-async.js'], ['server','client']);
});

Package.onTest(function (api) {
  api.use(['vsivsi:queue-async', 'tinytest']);
  api.add_files('queue-async-tests.js', ['server', 'client']);
});
