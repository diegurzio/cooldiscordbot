const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('ready');
  client.user.setActivity(`BloxTube`);
});

client.on('message', message => {
  if (message.content === ("help") {
    message.channel.send("helps");
  }
  
});


client.login(process.env.BOT_TOKEN);
