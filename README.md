# Discord.js-Event-Handler
A tutorial on how to make a event handler using the Discord.js lib

## index.js ##
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
Then, using `forEach` loop, we require each and every file that we just read in the `events` directory.
The second last line, or this line:
```js
client[event.emitter](event.name, (...params) => event.emit(...params));
```
This line will run when we run our bot but will also wait for other event

## event.js ##
Use this format in all your event files:
```js
module.exports = {
    name: 'event-name',    //Example: 'ready', 'message', 'guildCreate'
    emitter: 'on',         // Can also be 'once'. It depends on your event
    emit: (PARAMS) => {    //Your params. Example: 'emit: (message) => {...}', 'emit: (oldMember, newMember) => {...}'
        //Your code...
        //This will run when an event is triggered
    }
}
```
## Example ##
For example, you can read the [example folder](https://github.com/Reyxalim/Discord.js-Event-Handler/tree/main/example)

## Help ##
You can DM me on Discord. My tag is: `Reyxalim#8388`
You could also join [Javascript Universe](https://discord.gg/ZffDzBwdYN)
