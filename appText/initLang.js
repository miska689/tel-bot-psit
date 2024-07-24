const fs = require('fs');

async function initBotLang(bot, chatId, data) {
    try {
       const langFile = fs.readFileSync(__dirname + `/${data}/lang.json`, 'utf8');

       const langData = JSON.parse(langFile)

       return langData;

    } catch (e) {
       console.error(e);
    }
}

module.exports = {initBotLang}
