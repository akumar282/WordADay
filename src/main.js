import { TwitterApi } from 'twitter-api-v2';
import { apiconfig } from './apiconfig.js';
// import { WordList } from './wordList'
import fetch from 'node-fetch';
// const wl = new WordList()
const userClient = new TwitterApi(apiconfig.bearer);
async function queryWord(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    console.log(data[0].meanings[0].definitions[0].definition);
    return data[0].meanings[0].definitions[0].definition;
}
const def = await queryWord('rest');
userClient.v1.tweet(def);
