const {initBotLang} = require('../appText/initLang');
const {initStartOptions} = require('../options/startOptions');
const {initLangOptions} = require('../options/langOptions');


function initMessageEffect(bot) {
    return async (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;


        if(text === '/start'){
            bot.sendMessage(chatId, startText, initLangOptions());
        }
    }
}

module.exports = {initMessageEffect}