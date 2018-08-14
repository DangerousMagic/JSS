var fs = require('fs');

var JSS = function (options) {
    this.defaults = {
        storageName: 'jss',
        saveOnEdit: true
    };

    this.opt = this.defaults;
    this.data = {};

    for (var k in options){
        this.opt[k] = options[k];
    }

    this.storagePath = __dirname + "/" + this.opt.storageName + '.storage';

    this.save = function(){
        console.log(this.data);
        console.log(' => ');
        console.log(this.storagePath);
        fs.writeFile(this.storagePath, JSON.stringify(this.data), function() { return true; });
    };

    this.dump = function () {
        return this.data;
    };

    this.add = function (k, v) {
        this.data[k] = v;
        if(this.opt.saveOnEdit){ this.save() }
    };

    this.remove = function (k) {
        if(this.data[k] != null){
            delete this.data[k];
            return true;
        } else {
            return false;
        }
    };

    this.has = function (k) {
        return (this.data.indexOf(k) > -1);
    };

    this.load = function () {
        this.data = JSON.parse(fs.readFileSync(this.storagePath).toString());
    };

    this.stj = function (j) {
        return JSON.parse(j);
    };

    this.jts = function (s) {
        return JSON.stringify(s);
    };

    if (!fs.existsSync(this.storagePath)) {
        this.save();
    } else {
        this.load();
    }
};

module.exports = JSS;