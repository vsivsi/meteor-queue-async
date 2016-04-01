/***************************************************************************
###     Copyright (C) 2014-2016 by Vaughn Iverson
###     vsivsi:queue-async is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

Tinytest.add('QueueAsync - Serial Test', function (test) {
  var q = QueueAsync(1);
  var f = function (a, b, cb) { cb(null, a+b); };

  q.defer(f, 5, 7)
   .defer(f, 1, 3)
   .defer(f, 2, 4)
   .defer(f, 6, 8)
   .await(function (e, r1, r2, r3, r4) {
      test.equal(
        [r1, r2, r3, r4],
        [12, 4, 6, 14],
        "QueueAsync Serial Test Failed"
      );
    });
});

Tinytest.add('queueAsync - Parallel Test', function (test) {
  var q = QueueAsync();
  var f = function (a, b, cb) { cb(null, a+b); };

  q.defer(f, 5, 7)
   .defer(f, 1, 3)
   .defer(f, 2, 4)
   .defer(f, 6, 8)
   .awaitAll(function (e, ra) {
      test.equal(
        ra,
        [12, 4, 6, 14],
        "QueueAsync Parallel Test Failed"
      );
    });
});
