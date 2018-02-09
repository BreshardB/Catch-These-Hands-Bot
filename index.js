const Discord = require('discord.js');
const commando = require('discord.js-commando');
const path = require('path')

const bot = new commando.Client();

bot.registry
    .registerGroup('catch', 'Command Group')
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, "commands"));

bot.login('NDExMzQwNDQzMTQyMzI0MjI3.DV6SMA.ZdVOgNEOJsndyL1G8Txs1ui9CCU');
