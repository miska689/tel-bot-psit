const {initBotLang} = require('../appText/initLang');

function initQueryDataEffect(bot, langConf) {
    return async (msg) => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        langConf.langData = (data === 'ro' || data === 'en' || data === 'ru') ? await initBotLang(bot, chatId, data) : await initBotLang(bot, chatId,"ro");

    }
}

module.exports = {initQueryDataEffect}