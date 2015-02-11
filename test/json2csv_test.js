'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */
exports.json2csv = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    convert2csv: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/convert2csv/test.csv');
        var expected = grunt.file.read('test/expected/convert2csv');
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    },
    convert2json: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/convert2json/test.json');
        var expected = grunt.file.read('test/expected/convert2json');
        test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

        test.done();
    }
};
