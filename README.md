# EthiopianCovidtrackerBot

## I created this bot for Telegram users.
   - [ ] If you wanna check my bot [Mybot](http://t.me/@covidguy_bot).
   - [ ] Framework used [Telegraf API](https://telegraf.js.org/#/).
   - [ ] My Telegram channel [I❤️TECH](https://t.me/ilovetech1).
   - [ ] My youtubechannel on [ILOVETECH](https://t.me/ilovetech1).
   
   
   

 To deploy my bot i used the following step ⬇️
# Steps to host your Telegram bot
## Heroku:

- [ ] Create a Telegram bot with Telegraf API.
- [ ] Create account on [Heroku](http://heroku.com/).
- [ ] Install [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).
- [ ] Install and [setup git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


- [ ] set the start command in **package.json**:
    ```javascript
    ...
    {
  "name": "cov",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "index.js"
  },
  "engines": {
    "node": "12.18.1",
    "npm": "6.14.5"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.20.0",
    "dateformat": "^3.0.3",
    "express": "^4.17.1",
    "telegraf": "^3.38.0"
  }
}

    ...
    ```
- [ ] Make cahnges in the code.
    - [ ] surround your code with express.JS server like BELOW:
         ```...
 const { Telegraf } = require('telegraf')          \
const express = require('express')         \
const expressApp = express()         \

const API_TOKEN = process.env.API_TOKEN || 'copy paste your Bot token given to you by fatherbot';  \
const PORT = process.env.PORT || 5000;   
const URL = process.env.URL || 'https://< your heroku app name >.herokuapp.com';   \

const bot = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
expressApp.use(bot.webhookCallback(`/bot${API_TOKEN}`));

// ALL your  bot command will be here                              \
// remove bot.launch() you wont use it! because your are using webhook             \

expressApp.get('/', (req, res) => {    \
  res.send('my bot is running!')     \
})

expressApp.listen(PORT, () => {   \
  console.log('Example app listening on port ${PORT}!')   \
})
         
         ...
         ```
   
  
- [ ] Init a new git repo:
    ```bash
    git init
    ```
- [ ] make **.gitignore** file with following content:
    ```
    node_modules
    ```
- [ ] Login to Heroku:
    ```bash
    heroku login
    ```
- [ ] Create a Heroku app:
    ```bash
    heroku create
    ```
- [ ] Update Heroku config
    ```bash
    heroku config:set --app YourAppId BOT_TOKEN='YOUR BOT TOKEN'
    heroku config:set --app YourAppId BOT_DOMAIN='https://YourAppId.herokuapp.com'
    ```
- [ ] Create a **Procfile** in the root of the bot with the following content:
    ```
   web: node index.js
    ```
- [ ] Finally use git to deploy:
    ```bash
    git add .
    git commit -m 'commit message'
    git push heroku master
    ```

## How to make changes and redeploy the code:
- [ ] Just save all changes.
- [ ] Run following commands:
    ```bash
    git add .
    git commit -m 'commit message'
    git push heroku master
    ```



