const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', message => {
   if (message.content === "my id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});
const d = require("discord.js");
const client = new d.Client();
var prefix ="@"
var colors = new Array(100);

client.on("message", (message) => {
    var command = message.content.split(" ")[0].slice(prefix.length);
    switch(command) {
        case "create-colors" :
        if (!message.channel.type == "text") return;
        if (!message.member.hasPermission("MANAGE_ROLES")) return
        for(var x = 0;x<colors.length;x++){
            message.guild.createRole({name : x, color : colors[x]});
        };
    };
}).login("NDgwNDc4NjI3NzI5NzY4NDU5.Dlx9RQ.zA1A3oSguA2XMSBgeTE_Xc0WDQg");
function sin_to_hex(i, phase) {
    var sin = Math.sin(Math.PI / size * 2 * i + phase);
    var int = Math.floor(sin * 127) + 128;
    var hex = int.toString(16);
  
    return hex.length === 1 ? '0'+hex : hex;
};
for(var x=0;x<colors.length;x++) {
    let r   = sin_to_hex(i, 0 * Math.PI * 2/3);
    let b  = sin_to_hex(i, 1 * Math.PI * 2/3);
    let g = sin_to_hex(i, 2 * Math.PI * 2/3);
    colors[x] = '#'+ r + g + b;
};
client.login(process.env.BOT_TOKEN);
