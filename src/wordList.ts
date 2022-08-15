import * as fs from 'fs'

const DEFAULTFILEPATH = '../engmix.txt' // potentially will change

export class WordList {
  private readonly words: Map<number, string>
  private readonly usedWords: Set<string>
  constructor (filepath?: string) {
    this.words = new Map()
    this.usedWords = new Set()
    if (filepath) {
      if (!this.readFile(filepath)) throw new Error('File not read')
    } else {
      if (!this.readFile(DEFAULTFILEPATH)) throw new Error('File not read')
    }
  }

  private readFile (filename: string): boolean {
    // potentially move file to assets folder
    const file = fs.readFileSync(filename, 'utf8')
    if (file === undefined) return false // file unsuccesfully read
    let idx = 0
    for (const line of file.split(/[\r\n]+/)) {
      this.words.set(idx, line)
      ++idx
    }
    return true
  }

  public getWord (): string | undefined {
    let word, idx
    do {
      idx = Math.round(Math.random() * this.words.size)
      word = this.words.get(idx)
    }
    while (word && !(this.usedWords.has(word)))
    if (!word) return undefined // unexpected behavior at this point
    this.usedWords.add(word)
    this.words.delete(idx)
    return word
  }
}
