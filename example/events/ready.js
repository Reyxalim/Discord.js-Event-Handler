//Require our 'client' that we exported earlier
const client = require('../index.js');

module.exports = {
    name: 'ready'    //Event name
    emitter: 'once'  //Emiiter option. 'once' or 'on' only
    emit: () => {    //This will run when the event is triggered
        console.log(`Logged in as ${client.user.tag}`);
    }
}
