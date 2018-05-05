const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('ready');
  client.user.setActivity(`BloxTube`);
});

client.on('message', message => {
  if (message.content.startsWith("!help")) {
    var authorr = (`@${message.author.id}`);
    message.author.send("hello there");
    message.channel.send(`<${authorr}>, sent!`);
  }
  
});


client.login(process.env.BOT_TOKEN);
