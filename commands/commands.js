function initCommands(commands = []) {
    return [
        {
            command: '/start',
            description: 'Start the bot',
        },
        {
            command: '/reg',
            description: 'Register user (you need admin key)',
        },
        {
            command: '/log',
            description: 'Log in user',
        },
        ...commands
    ]
}


module.exports = {
    initCommands
}