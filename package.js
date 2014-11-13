/***************************************************************************
###     Copyright (C) 2014 by Vaughn Iverson
###     vsivsi:queue-async is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

Package.describe({
  summary: 'Package to wrap queue-async, a very lightweight async library',
  name: 'vsivsi:queue-async',
  version: '1.0.7',
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
