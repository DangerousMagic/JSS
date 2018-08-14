# SJSS (SimpleJavaScriptStorage)

SJSS (SimpleJavaScriptStorage) is a simple way to store your data in memory and on disk!

## Initialization

Install package: ``npm install node-sjss`` 

    var SJSS = require('node-sjss');
    var storage = new SJSS({});

#### Options

* storageName
    * Change the name of your storage file (defaults to sjss, file extention added automatically)
* saveOnEdit
    * Turn on or off auto-saving after adding/removing/editing data (defaults to false, save manually when turned off)
    
    
Example: 
``var storage = new SJSS({storageName: 'myStorageFile', saveOnEdit: false});``

#### Methods

* save
    * Manually save your data from memory to disk
* dump
    * Return all data as an Object
* add(key, data)
    * Add data to file
* remove
    * remove data from file
* has(key)
    * Check if data (identified by key) exists in file
    
#### Example
    
    var SJSS = require('node-sjss');
    var storage = new SJSS({saveOnEdit: false});
    
    if(!storage.has("user1")){
        storage.add("user1", {name: 'John Doe', age: 17});
        storage.save();
    }