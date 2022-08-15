import { TwitterApi } from 'twitter-api-v2';
// import { WordList } from './wordList'
import fetch from 'node-fetch';
// const wl = new WordList()
const config = require('apiconfig');
const userClient = new TwitterApi({
    appKey: config.appKey,
    appSecret: config.appSecret,
    accessToken: config.appSecret,
    accessSecret: config.appSecret
});
// const rwClient = userClient.readWrite
async function queryWord(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    console.log(data[0].meanings[0].definitions[0].definition);
    return data[0].meanings[0].definitions[0].definition;
}
const def = await queryWord('rest');
userClient.v1.tweet(def);
