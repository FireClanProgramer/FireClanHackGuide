const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`xiYoussef`,"http://twitch.tv/S-F")
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
client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info ✨
 اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
  حاله حمراء       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
  حاله صفراء:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
  الاوفلاين:     ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
   عدد الاعضاء:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
 البوتات: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
client.on('message', message => {/// الفا كود | Emoko#0001
     if (message.content === "-سيرفرات") {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM") /// الفا كود | Emoko#0001
  .addField("**سيرفرات يلي البوت موجود فيها: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }/// الفا كود | Emoko#0001
});
client.login(process.env.BOT_TOKEN);
