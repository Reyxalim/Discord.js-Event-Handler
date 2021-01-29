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
