/*
 * grunt-json2csv
 * https://github.com/licaon/json2csv
 *
 * Copyright (c) 2015 Raul Macarie
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var path = require('path');
    var async = require('async');
    var csv = require('csv');

    grunt.registerMultiTask('json2csv', 'Simple JSON and CSV converter', function () {

        // Tell grunt this task is asynchronous.
        var done = this.async();

        var options = this.options({
            wrapper: '"',
            delimiter: ','
        });

        async.forEach(this.files, function (f, next) {

            grunt.file.defaultEncoding = 'utf8';

            var saveToFile = function (data) {
                // Write the destination file.
                grunt.file.write(f.dest, data);
                grunt.log.ok('converted ' + f.src + ' to ' + f.dest);
                next();
            };

            if (f.src.length < 1) {
                grunt.log.warn('Destination not written because no source files were found.');
                next();
                return;
            }

            var srcFiles = f.src.map(grunt.file.read).join(grunt.util.normalizelf(grunt.util.linefeed)),
                srcExt = options.type || path.extname(f.src[0]),
                data = srcFiles,
                convertedData = '';

            function  parseCSVData(i){
                csv.parse(data[i], function (err, elem) {
                    if (i + emptyData === data.length - 1) {
                        delimiter = '';
                    }
                    convertedData += '\t"' + elem[0][0] + '":"' + elem[0][1].replace(/"/g, '\\"') + '"' + delimiter + '\r\n';
                }).on('end', function () {
                    if (delimiter === '') {
                        convertedData += "}";
                        saveToFile(convertedData);
                    }
                });
            }

            if (srcExt === ".json") {
                data = JSON.parse(data);
                for (var key in data) {
                    convertedData += options.wrapper + key + options.wrapper + options.delimiter + options.wrapper + data[key].replace(/"/g, '""') + options.wrapper + '\r\n';
                }
                saveToFile(convertedData);
            } else if (srcExt === ".csv") {
                var delimiter = ',', emptyData = 0, notEmptyData = 0;
                data = data.split('\n');
                convertedData = "{\r\n";
                for (var i = 0; i < data.length; i++) {
                    if (data[i] === "") {
                        emptyData++;
                    } else {
                        notEmptyData++;
                    }
                    parseCSVData(i);
                }
            }
        },done);
    });

};
