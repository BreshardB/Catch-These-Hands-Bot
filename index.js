const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == "ping") {
        message.channel.send("pong");
    }
});

bot.login('NDExMzQwNDQzMTQyMzI0MjI3.DV6SMA.ZdVOgNEOJsndyL1G8Txs1ui9CCU');
