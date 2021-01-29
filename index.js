// =====  This is an example on how to make an event handler based on the Discord.js lib  =====


//Require the 'discord.js' module and the 'fs' module
const Discord = require('discord.js');
const { readdirSync } = require('fs');

//Your token
const Token = "YOUR-TOKEN";

//Create a new client
const client = new Discord.Client();


readdirSync('./events/).forEach(file => {
    const event = requires(`./events/${file}`);
    
    console.log(`${event.name} event loaded`);
    client[event.emitter](event.name, (...params) => event.emit(...params));
});

client.login(Token);
