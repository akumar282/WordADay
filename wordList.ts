import * as fs from 'fs'

const WORDLISTFILEPATH = 'engmix.txt' // potentially will change

export class WordList {
  private readonly words: Map<number, string>
  private readonly usedWords: Set<string>

  constructor () {
    this.words = new Map()
    this.usedWords = new Set()
    this.readFile(WORDLISTFILEPATH)
  }

  readFile (filename: string): boolean {
    // potentially move file to assets folder
    const file = fs.readFileSync(filename, 'utf8')
    for (const line of file.split(/[\r\n]+/)) {
      console.log(line)
    }
    return false
  }
}
