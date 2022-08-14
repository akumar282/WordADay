"use strict";
exports.__esModule = true;
exports.WordList = void 0;
var fs = require("fs");
var WORDLISTFILEPATH = 'engmix.txt'; // potentially will change
var WordList = /** @class */ (function () {
    function WordList() {
        this.words = new Map();
        this.usedWords = new Set();
        this.readFile(WORDLISTFILEPATH);
    }
    WordList.prototype.readFile = function (filename) {
        // potentially move file to assets folder
        var file = fs.readFileSync(filename, 'utf8');
        for (var _i = 0, _a = file.split(/[\r\n]+/); _i < _a.length; _i++) {
            var line = _a[_i];
            console.log(line);
        }
        return false;
    };
    return WordList;
}());
exports.WordList = WordList;
