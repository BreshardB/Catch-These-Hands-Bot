const commando = require('discord.js-commando');
const jsonfile = require('jsonfile');

const file = './json/phrases.json';

class CatchTheseHandsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'catch',
            group: 'catch',
            memberName: 'catch',
            description: 'Tells a person to catch these hands',
            clientPermissions: ['MANAGE_MESSAGES'],
            args: [
                {
                    key: 'type',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string'
                }//,
                // {
                //     key: 'user',
                //     prompt: 'Which user is about to get these hands?',
                //     type: 'user'
                // }
            ]
        });


    }

    async run(message, {type}) {
        jsonfile.readFile(file, function(err, obj) {
            var size = obj.text[2].message;

            message.channel.send(size);
        })
        //return message.say(type);
    }
}

module.exports = CatchTheseHandsCommand;
