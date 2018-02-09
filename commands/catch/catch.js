const commando = require('discord.js-commando');

class CatchTheseHandsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'catch',
            group: 'catch',
            memberName: 'catch',
            description: 'Tells a person to catch these hands'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random()*6) + 1;
        message.channel.send("You rolled a " + roll);
    }
}

module.exports = DiceRollCommand;
