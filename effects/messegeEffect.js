function initMessageEffect(bot) {
    return async (msg) => {
        const chatId = msg.chat.id;

        bot.sendMessage(chatId, msg.text)
    }
}

module.exports = {initMessageEffect}