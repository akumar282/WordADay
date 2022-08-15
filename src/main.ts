import { TwitterApi } from 'twitter-api-v2'
import { WordList } from './wordList.js'
import { apiconfig } from './apiconfig.js'
import fetch from 'node-fetch'

const wl = new WordList()

export {}
const userClient = new TwitterApi(apiconfig.bearer)
// const rwClient = userClient.readWrite

async function queryWord (word: string): Promise<string> {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  const data = await response.json()
  console.log(data[0].meanings[0].definitions[0].definition)
  return data[0].meanings[0].definitions[0].definition
}
let word
do {
  word = wl.getWord()
} while (!word)

const def = await queryWord(word)
// userClient.v1.tweet(def)
export {}
