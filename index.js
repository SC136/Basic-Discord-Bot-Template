//Starting
const { Client, Intents } = require('discord.js');

//Creating A New Client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//Defining A Prefix For The Bot Commands
const prefix = '$'

//Listening To ready Event
client.on('ready', () => {

  //Console Log That Bot Is Online
  console.log(`Logged In As ${client.user.tag}!`);
});

//Listening To messageCreate Event
client.on('messageCreate', message => {

  //To Avoid Command Usage in DMs And More...
  if (!message.content.startsWith(prefix) || !message.guild || message.author.bot) return;
  
  //Making Use Of Arguments Instead Of message.content Cuz Yes
  const args = message.content.slice(prefix.length).trim().split(/ +/);

  //For Making Command Easy
  const command = args.shift().toLowerCase();

  //If The Command Is Ping
  if (command === 'ping') {

    //We Send Message In The Channel
    message.channel.send('pong');
  }
});

//Bot Login Put Your Own Token
client.login('put your token here'); //Dont Forget To Put Token Or Bot No Work LOL
