// =====  This is an example on how to make an event handler based on the Discord.js lib  =====


//Require the 'discord.js' module and the 'fs' module
const Discord = require('discord.js');
const { readdirSync } = require('fs');

//Your token
const Token = "YOUR-TOKEN";

//Create a new client
const client = new Discord.Client();

//Export your 'client' so we can use it in other files
module.exports = client

//Read the 'events' directory and using the 'forEach' loop to require each file
readdirSync('./events/).forEach(file => {
    //Require the file
    const event = require(`./events/${file}`);
    
    console.log(`${event.name} event loaded`);

    //Emit the event
    client[event.emitter](event.name, (...params) => event.emit(...params));
});

//Login your bot
client.login(Token);
