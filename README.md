# grunt-json2csv

> Converts JSON to CSV, and CSV to JSON. It only supports the format below

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json2csv --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json2csv');
```

## The "json2csv" task

### Overview
In your project's Gruntfile, add a section named `json2csv` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json2csv: {

    //this applies to when you want to convert a JSON to a specific type of CSV
    options: {
        wrapper: '"',
        delimiter: ','
    },

    //this in an exmaple
    convert2json: {
        expand: true,
        flatten: true,
        src: ['test/fixtures/{,*/}*.csv'],
        dest: 'tmp/default_options',
        ext: '.json'
    }
  }
});
```

### Options

#### options.wrapper  
Type: `String`  
Default value: `'"'`

A string value that is used wrap keys and values.

#### options.delimiter
Type: `String`  
Default value: `','`

A string value that is used to separate the keys from the values.

### Usage Examples

1. Convert to CSV  
    This plugin I've created for a specific file format that i needed.  
    For example if you have a simple JSON:
    ```js
    {
        "line1": "value1",
        "line2": "value2"
    }
    ```

    the exported file will look like this, assuming you are using the default options:
    ```csv
    "line1","value1"
    "line2","value2"
    ```

2. Convert to JSON  
    From the same specific CSV format file
    ```csv
    "line1","value1"
    "line2","value2"
    ```

    It will be converted in a simple JSON file:
    ```js
    {
        "line1": "value1",
        "line2": "value2"
    }
    ```

## Release History
0.1.2 Update readme
0.1.1 First stable version  
0.1.0 First version