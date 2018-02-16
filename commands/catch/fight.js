const commando = require('discord.js-commando');
const jsonfile = require('jsonfile');
const fs = require('fs');

const path = './image/fight-me/';

class FightMeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fightme',
            group: 'catch',
            memberName: 'fightme',
            description: 'Tells a person to catch these hands',
            clientPermissions: ['MANAGE_MESSAGES']
        });
    }

    async run(message) {
        fs.readdir(path, function(err, items) {
            var size = items.length;

            var index = Math.floor(Math.random()*size);

            message.channel.send("",
            {
                files: [
                    path+items[index]
                ]
            });
        });
    }
}

module.exports = FightMeCommand;
