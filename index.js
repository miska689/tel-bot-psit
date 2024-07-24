const TelegramBot = require('node-telegram-bot-api');
const {initCommands} = require('./commands/commands');
const {initMessageEffect} = require('./effects/messegeEffect');
const {initQueryDataEffect} = require('./effects/queryDataEffect');
const {initStartEffect} = require('./effects/startEffect');
const {initRegEffect} = require('./effects/regEffect');
const {initLogEffect} = require('./effects/logEffect');

require('dotenv').config({
    path: `.dev.env`,
});

const langConf = {
    langData: "",
    lang: "",
}

const token = process.env.TELEGRAM_BOT_TOKEN;

const url = process.env.TELEGRAM_BOT_URL;

const bot = new TelegramBot(token, {polling: true});

const start = () => {
    bot.setMyCommands(initCommands());

    bot.onText(/\/start/, initStartEffect(bot))

    bot.onText(/\/info/, async msg => bot.sendMessage(msg.chat.id, langConf.langData.lang.commands.info))

    bot.onText(/\/reg/, initRegEffect(bot, langConf, url))

    bot.onText(/\/log/, initLogEffect(bot, langConf, url))

    bot.on('callback_query',  initQueryDataEffect(bot, langConf))


}
start()