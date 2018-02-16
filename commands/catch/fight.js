const commando = require('discord.js-commando');
const jsonfile = require('jsonfile');

const file = './json/phrases.json';

class FightMeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fightme',
            aliases: ['fightMe'],
            group: 'catch',
            memberName: 'fightme',
            description: 'Tells a person to catch these hands',
            clientPermissions: ['MANAGE_MESSAGES']
        });
    }

    async run(message) {
        jsonfile.readFile(file, function(err, obj) {
            var size = obj.text.length;

            var index = Math.floor(Math.random()*size);

            message.channel.send(obj.text[index].message);
        })
        //return message.say(type);
    }
}

module.exports = FightMeCommand;
