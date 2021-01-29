# Discord.js-Event-Handler
A tutorial on how to make a event handler using the Discord.js lib

First, let's require our all the module that we need
```js
const Discord = require('discord.js');
const { readdirSync } = require('fs');
```


Next, let's make a new `Discord.Client()` and export it so we can use in other files
```js
const client = new Discord.Client();
module.exports = client;
```


Now, the event handler
```js
readdirSync('./events/).forEach(file => {
    const event = requires(`./events/${file}`);
    
    console.log(`${event.name} event loaded`);
    client[event.emitter](event.name, (...params) => event.emit(...params));
});
```
We use the `readdirSync('./events/)` to read our current directory assuming you store all you event files in a folder called `events`.
Then, using `forEach` loop, we require each and every file that we just read in the `events` directory
