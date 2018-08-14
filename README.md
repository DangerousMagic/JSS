# SJSS

SJSS (SimpleJavaScriptStorage) is a simple way to store your data in memory and on disk!

## Initialization

    var SJSS = require('storage');
    var storage = new SJSS({});

#### Options

* storageName
    * Change the name of your storage file (defaults to sjss, file extention added automatically)
* saveOnEdit
    * Turn on or off auto-saving after adding/removing/editing data (defaults to false, save manually when turned off)
    

#### Methods

* save
    * Manually save your data to the configured file
* dump
    * Return all data as an Object
* add(key, data)
    * Add data to file
* remove
    * remove data from file
* has(key)
    * Check if data (identified by key) exists in file