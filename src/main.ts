import { TwitterApi } from 'twitter-api-v2'
import { apiconfig } from './apiconfig.js'
import { WordList } from './wordList.js'
import fetch from 'node-fetch'

const wl = new WordList()
const userClient = new TwitterApi({
  appKey: apiconfig.appKey,
  appSecret: apiconfig.appSecret,
  accessToken: apiconfig.accessToken,
  accessSecret: apiconfig.accessSecret
})
// const rwClient = userClient.readWrite
function delay (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function queryWord (word: string| undefined): Promise<string | undefined> {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  const data = await response.json()
  if (!data || !data[0] || !data[0].meanings[0] || !data[0].meanings[0].definitions[0]) {
    return undefined
  }
  return data[0].meanings[0].definitions[0].definition
}

async function chooseWord (): Promise<(string | undefined)[]> {
  const ret: (string | undefined)[] = []

  const word = wl.getWord()

  const definition = await queryWord(word)
  ret.push(word, definition)

  return ret
}

while (true) {
  let isItNull : boolean
  let data:(string|undefined)[]
  do {
    isItNull = false
    data = await chooseWord()
    for (const w of data) {
      if (!w) {
        isItNull = true
      }
    }
  } while (isItNull)

  userClient.v1.tweet('The Word Of The Day Is: ' + data[0] + '\n' + 'The Definition is: ' + data[1])
  await delay(24 * 60 * 60 * 1000)
}
