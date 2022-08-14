import { WordList } from './wordList'
import fetch from 'node-fetch'

const wl = new WordList()
console.log(wl)

async function queryWord (word: string): Promise<any> {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  const data = await response.json()
  console.log(data)
  return data
}

queryWord('rest')
