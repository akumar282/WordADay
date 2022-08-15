import { TwitterApi } from 'twitter-api-v2';
// import { WordList } from './wordList'
import fetch from 'node-fetch';
// const wl = new WordList()
const userClient = new TwitterApi({
    appKey: '8n0zGuCBYE4j2f7mYTOiVvUsq',
    appSecret: 'lWCW8hy9IMEgkj1uCbQyMnDEOub6JHBkab8JoPmc2GETkpiPAR',
    accessToken: '1076420126851751936-oxlUTyEZMo6HSFBWgVrxqz9vAvvzcH',
    accessSecret: 'Ulq7wg3jdyMoBwgpMaA1zYnqFqCruuFu04dMsAG8UknEi'
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
