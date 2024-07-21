const TelegramBot = require('node-telegram-bot-api');
const {initCommands} = require('./commands/commands');
const {initMessageEffect} = require('./effects/messegeEffect');

const token = '7365160249:AAFwBQd3hHr5upOSyHW5B1zDWV6ec7baG5Y';

const bot = new TelegramBot(token, {polling: true});


const start = () => {
    bot.setMyCommands(initCommands());
    bot.on('message', initMessageEffect(bot));
}

start()