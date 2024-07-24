const setOptions = require('./options')

function initStartOptions() {
    return setOptions([
        [{text: "Apasama", callback_data: "Userul a apsat"}]
    ]);
}

module.exports = {initStartOptions}