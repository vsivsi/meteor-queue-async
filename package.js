Package.describe({
  summary: 'Package to wrap queue-async, a very lightweight async library'
});

Package.on_use(function(api) {
  api.export('queueAsync');
  api.add_files(['queue/queue.js', 'meteor-queue-async.js'], ['server','client']);
});

Package.on_test(function (api) {
  api.use(['queue-async', 'tinytest']);
  api.add_files('queue-async-tests.js', ['server', 'client']);
});
