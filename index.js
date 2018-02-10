const Discord = require('discord.js');
const commando = require('discord.js-commando');
const path = require('path')

const bot = new commando.Client();

bot.registry
    .registerGroup('catch', 'Command Group')
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, "commands"));

bot.login('NDExMzQwNDQzMTQyMzI0MjI3.DWDa6w.eA9MSB3bbP6Bo31jwmu-a-yt5YI');
