import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const DEFAULTFILEPATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../engmix.txt');
export class WordList {
    words;
    usedWords;
    constructor(filepath) {
        this.words = new Map();
        this.usedWords = new Set();
        if (filepath) {
            if (!this.readFile(filepath))
                throw new Error('File not read');
        }
        else {
            if (!this.readFile(DEFAULTFILEPATH))
                throw new Error('File not read');
        }
    }
    readFile(filename) {
        // potentially move file to assets folder
        const file = fs.readFileSync(filename, 'utf8');
        if (file === undefined)
            return false; // file unsuccesfully read
        let idx = 0;
        for (const line of file.split(/[\r\n]+/)) {
            this.words.set(idx, line);
            ++idx;
        }
        return true;
    }
    getWord() {
        let word, idx;
        do {
            idx = Math.round(Math.random() * this.words.size);
            word = this.words.get(idx);
            console.log(word);
        } while (word && this.usedWords.has(word));
        console.log(word);
        if (!word) {
            // console.log(word)
            return undefined; // unexpected behavior at this point
        }
        this.usedWords.add(word);
        this.words.delete(idx);
        return word;
    }
}
