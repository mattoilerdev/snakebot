const Discord = require("discord.js");
const client = new Discord.Client({ intents: 3276799 });
const config = require('./config.json')
const prefix = "!" 

client.on("ready", () => {
    console.log("BOT IS READY TO FUCK UR MOM")
    client.channels.cache.get("1091330042417664030").send("!wash 100")
    client.channels.cache.get("1091331491516129361").send("!wash 100")
    setTimeout(() => {
        client.channels.cache.get("1091330042417664030").send("!jki")
        client.channels.cache.get("1091331491516129361").send("!rrpanel")
        client.channels.cache.get("1091331491516129361").send("!rrpanel2")
    }, 16000); 
  })
  //
  const status_list = [
    "! server / ! user",
    " by 𝗠 𝗮 𝘁 𝘁 𝗼 𝗶 𝗹. / v. 13.14.0 ",
    "! server / ! user",
    ];
  
  client.on("ready", () => {
  setInterval(() => {
      const index_status = Math.floor(Math.random() * ((status_list.length - 1) + 1) - 1);
      client.user.setActivity(status_list[index_status], {type: 'WATCHING'})
  }, 5000);
})
    


.setMaxListeners(100)
//const logs = require('discord-logs');
//logs(client, {
   // debug: true
//});



//client.once('ready', async () => {
    //client.user.setActivity(`!help | by Matthji.js `, {
        //type: "WATCHING"
    //}) 
//});







//MODULE.EXPORTTT

global.Discord = require("discord.js");
global.client = new Discord.Client({
    intents: 32767
})
global.config = require('./config.json')
global.log = config.log
global.pingbot = client.ws.ping
global.moment = require('moment')
const fs = require('fs')
//const ms = require('ms')



// client.commands = new Discord.Collection();

// const commandsFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith(`.js`));
// for (const file of commandsFiles) {
//     const command = require(`./commands/${file}`);
//     client.commands.set(command.name, command);
// }

// const commandsFolder = fs.readdirSync(`./commands`);
// for (const folder of commandsFolder) {
//     const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(`.js`));
//     for (const file of commandsFiles) {
//         const command = require(`./commands/${folder}/${file}`);
//         client.commands.set(command.name, command);
//     }
// }

// const eventsFolders = fs.readdirSync('./events');
// for (const folder of eventsFolders) {
//     const eventsFiles = fs.readdirSync(`./events/${folder}`).filter(file => file.endsWith(`.js`));

//     for (const file of eventsFiles) {
//         if (file.endsWith(".js")) {
//             const event = require(`./events/${folder}/${file}`);
//             client.on(event.name, (...args) => event.execute(...args));
//         }
//         else {
//             const eventsFiles2 = fs.readdirSync(`./events/${folder}/${file}`)
//             for (const file2 of eventsFiles2) {
//                 const event = require(`./events/${folder}/${file}/${file2}`);
//                 client.on(event.name, (...args) => event.execute(...args));
//             }
//         }
//     }
// }

client.commands = new Discord.Collection();
const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`);
    for (const file of commandsFiles) {
        if (file.endsWith(".js")) {
            const command = require(`./commands/${folder}/${file}`);
            client.commands.set(command.name, command);
        }
        else {
            const commandsFiles2 = fs.readdirSync(`./commands/${folder}/${file}`)
            for (const file2 of commandsFiles2) {
                const command = require(`./commands/${folder}/${file}/${file2}`);
                client.commands.set(command.name, command);
            }
        }
    }
}


client.on(`messageCreate`, message => {


    if (!message.content.startsWith(prefix) || !message.guild) return

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!client.commands.has(command) && !client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))) return

    var comando = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

    comando.execute(message, args);
})



var currentDate = new Date()


//MODULE.EXPORTTT




const { createCanvas, loadImage, registerFont } = require("canvas");
const { channel } = require("diagnostics_channel");


client.on("guildMemberAdd", async member => {
    //Creare un canvas
    let canvas = await createCanvas(1700, 600) //createCanvas(larghezza, altezza)
    let ctx = await canvas.getContext("2d")

    //Caricare un immagine
    let img = await loadImage("https://media.discordapp.net/attachments/1092203250679296030/1092744689125445673/phonto.jpg?width=1440&height=654")
    ctx.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 1024 - img.height / 500) //drawImage(immagine, posizioneX, posizioneY, larghezza, altezza)


    

    //Caricare un immagine rotonda
    ctx.save()
    ctx.beginPath()
    ctx.arc(150 + 300 / 2, canvas.height / 2, 150, 0, 2 * Math.PI, false) //arc(centroX, centroY, raggio, startAngolo, endAngolo, sensoOrario/Antiorario)
    ctx.clip()
    img = await loadImage(member.displayAvatarURL({ format: "png" }))
    ctx.drawImage(img, 150, canvas.height / 2 - 300 / 2, 300, 300)
    ctx.restore()


    //Mandare un canvas
    let channel = client.channels.cache.get("1089478587054297129")
    let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "canvas.png")

    let welcome = new Discord.MessageEmbed()

    .setTitle(`<:emoji_33:1084490486145884191> **__BENVENUTO ${member.toString()}__** <:emoji_33:1084490486145884191>`)
    .setDescription("Ciao " + member.toString() + " benvenuto in " + member.guild.name + "\r Sei il " + member.guild.memberCount + " ° membro")
    .setColor("#0003ff")
    .setFooter(`${member.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)

    channel.send({embeds: [welcome], files: [attachment]})


})

client.on("guildMemberRemove", async member => {
    //Creare un canvas
    let canvas = await createCanvas(1700, 600) //createCanvas(larghezza, altezza)
    let ctx = await canvas.getContext("2d")

    //Caricare un immagine
    let img = await loadImage("https://media.discordapp.net/attachments/1092203250679296030/1092744785833504778/phonto.jpg?width=1440&height=654")
    ctx.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 1024 - img.height / 500) //drawImage(immagine, posizioneX, posizioneY, larghezza, altezza)


    
    //Caricare un immagine rotonda
    ctx.save()
    ctx.beginPath()
    ctx.arc(150 + 300 / 2, canvas.height / 2, 150, 0, 2 * Math.PI, false) //arc(centroX, centroY, raggio, startAngolo, endAngolo, sensoOrario/Antiorario)
    ctx.clip()
    img = await loadImage(member.displayAvatarURL({ format: "png" }))
    ctx.drawImage(img, 150, canvas.height / 2 - 300 / 2, 300, 300)
    ctx.restore()

    //Creare le scritte

    //Mandare un canvas
   let channel = client.channels.cache.get("1089478739659853905")
   let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "canvas.png")

   let addio = new Discord.MessageEmbed()
   .setTitle(`<:emoji_33:1084490486145884191> **__ADDIO ${member.toString()}__** <:emoji_33:1084490486145884191>`)
   .setDescription("Ciao " + member.toString() + " addio dal " + member.guild.name + "\r Eri il " + member.guild.memberCount + " ° membro")
   .setColor("#0003ff")
   .setFooter(`${member.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
   
   channel.send({embeds: [addio], files: [attachment]})



})

/////////////////TICKET/////////////////////////////////////////







//////////////////TICKET/////////////////////////////////


client.on("guildMemberAdd", member => {
    if (member.user.bot) return

    member.roles.add("1091327417592860802");
    member.roles.add("1091327272717402122");

});





//"<:emoji_6:1066658111458385960>"
//Ciao e benvenuto all'interno del las vegas Full Rp , prima di superare la frontiera di las vegas ti chiediamo gentilmente di verificarti cliccando sulla reazione sottostante per garantirci cu tu non sia un robot , lo staff del las vegas Full Rp ti augura una buona permanenza nel serve
//<@&960106570639896589>"

//client.channels.cache.get("1089478739659853905")

client.on("messageCreate", message => {
    if (message.content == "!verifica") {


        let embed = new Discord.MessageEmbed()
            .setTitle("<a:greencheck:1083791192833142794>" + " **__$nake VERIFY SYSTEM__**" + " <a:greencheck:1083791192833142794>")
            .setDescription(`<:emoji_34:1091371229073653870> Ciao a tutti <@&1091327272717402122> e benvenuti all'interno di $nake Graphics, vi chiediamo gentilmente di verificarvi **cliccando sul bottone sottostante** per garantirci che tu non sia un robot , lo <@&1091323719164629032> vi augura una buona permanenza nel server!`) 
            .setColor("#0003ff")
            .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
        
        let verifigianz = new Discord.MessageButton()
                .setLabel(" ✅ ")
                .setStyle("SUCCESS")
                .setCustomId("verifigianz") //tua zia puttana
              
                
        let row = new Discord.MessageActionRow()
            .addComponents(verifigianz)

        message.channel.send({ embeds: [embed], components: [row] })

    }
})

 client.on("interactionCreate", interaction => {
     

    if (interaction.customId == "verifigianz") {
        

            interaction.member.roles.add("1091327135148417026")
            

    let embedverifigianz = new Discord.MessageEmbed()
         .setTitle("$nake Verify System")
         .setDescription("<a:verifygreen:1084425754554683402> Ti sei verificato con successo!")
         .setColor("#0003ff")
         .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
    interaction.reply({ embeds: [embedverifigianz], ephemeral: true }) 

    }
  }
)

/////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
client.on("guildMemberAdd", (member) => {
    console.log(member.guild);
    let embed = new Discord.MessageEmbed()
    
    
const counter = client.channels.cache.get("1091384326085681322")

counter.setName(`| 👤 | Utenti : ${member.guild.memberCount}`)

   // setTimeout(() => {
    

   // client.channels.cache.get("1023182467068350484").send(`<@${member.id}>`).then((msg) => {
    //    setTimeout(() => {
    //        msg.delete()
     //   }, 2000);
    //})

})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    client.on("guildMemberRemove", (member) => {
        console.log(member.guild);
        

const counter = client.channels.cache.get("1091384326085681322")

counter.setName(`| 👤 | Utenti : ${member.guild.memberCount}`)

    })
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("interactionCreate", async interaction => {
    if (!interaction.isButton()) {
        return
}
    if (interaction.customId == "chiuditicket") {
        

        if(!interaction.member.permissions.has('MANAGE_CHANNELS')) {
            let lolo = new Discord.MessageEmbed()
            .setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
            .setDescription("<a:verifyred:1084425689853329469> _Non hai il permesso di chiudere il ticket_")
            .setColor("#992d22")
            .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)
        
            return await interaction.channel.send({embeds: [lolo], ephemeral: true})
        }
        
let embedverifigianz = new Discord.MessageEmbed()
.setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
.setDescription(`<a:verifygreen:1084425754554683402> **_Il ticket sta per essere chiuso in 5 secondi.\nAzionato da:_** ${interaction.user.toString()}`)
.setColor("#0003ff")
.setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
await interaction.channel.send({embeds: [embedverifigianz]})

setTimeout(async () => {
    
    interaction.channel.delete()
    
   }, 5000);

   interaction.deferUpdate()
    }
    if(interaction.customId == 'claimticket') {
interaction.deferUpdate()
if (!interaction.member.roles.cache.has("1091323090476220489")) {
    let lolo2 = new Discord.MessageEmbed()
    .setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
    .setDescription("<a:verifyred:1084425689853329469> _Non hai il permesso di claimare il ticket_")
    .setColor("#992d22")
    .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return await interaction.channel.send({embeds: [lolo2], ephemeral: true})

}

let embedverifigianz2 = new Discord.MessageEmbed()
.setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
.setDescription(`<a:verifygreen:1084425754554683402> **_Il ticket è stato claimato da:_** ${interaction.user.toString()}`)
.setColor("#0003ff")
.setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
await interaction.channel.send({embeds: [embedverifigianz2]})

interaction.channel.permissionOverwrites.edit("1091323090476220489", {
    VIEW_CHANNEL: true,
    SEND_MESSAGES: false,
    READ_MESSAGE_HISTORY: true,
    ATTACH_FILES: false
});
interaction.channel.permissionOverwrites.edit(interaction.user.id, {
    VIEW_CHANNEL: true,
    SEND_MESSAGES: true,
    READ_MESSAGE_HISTORY: true,
    ATTACH_FILES: false
});

    }
    
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const logs = require('discord-logs');
const interceptor = require("rest/interceptor");
logs(client, {
    debug: true
});

// Channel Topic Updating 
client.on("guildChannelTopicUpdate", (channel, oldTopic, newTopic) => {
    
    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const TopicUpdate = new Discord.MessageEmbed()
        .setTitle('**__Argomento Canale Aggiornato__**')
        .setColor('#0003ff')
        .setDescription(`Nel canale ${channel.toString()}*da:** \n${oldTopic} a \n${newTopic}**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [TopicUpdate]
    });

});

// Channel Permission Updating
client.on("guildChannelPermissionsUpdate", (channel, oldPermissions, newPermissions) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const PermissionUpdate = new Discord.MessageEmbed()
        .setTitle('**__Permessi Canale Aggiornati__**')
        .setColor('#0003ff')
        .setDescription(`Nel canale ${channel.toString()} da: \n**\n${oldPermissions} a \n${newPermissions}**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [PermissionUpdate]
    });

})

// unhandled Guild Channel Update
client.on("unhandledGuildChannelUpdate", (oldChannel, newChannel) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const unhandledGuildChannelUpdate = new Discord.MessageEmbed()
        .setTitle('**__Canale Indefinito Aggiornato__**')
        .setColor('#0003ff')
        .setDescription(`Il canale ${oldChannel.id} è stato aggiornato,** ma non riesco a trovare i particolari**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [unhandledGuildChannelUpdate]
    });

});

// Member Started Boosting
client.on("guildMemberBoost", (member) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MemberBoost = new Discord.MessageEmbed()
        .setTitle('**__Boost Aggiunto__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} **ha iniziato a boostare il server**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)
    return LogChannel.send({
        embeds: [MemberBoost]
    });

})

// Member Unboosted
client.on("guildMemberUnboost", (member) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MemberUnboost = new Discord.MessageEmbed()
        .setTitle('**__Boost Rimosso__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} **ha smesso di boostare il server**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MemberUnboost]
    });

})

// Member Got Role
client.on("guildMemberRoleAdd", (member, role) => {
    
    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MemberRoleAdd = new Discord.MessageEmbed()
        .setTitle('**__Aggiunto Ruolo Utente__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} ha **ricevuto il ruolo:** ${role.toString()}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MemberRoleAdd]
    });

})

// Member Lost Role
client.on("guildMemberRoleRemove", (member, role) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MemberRoleRemove = new Discord.MessageEmbed()
        .setTitle('**__Rimosso Ruolo Utente__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} ha **perso il ruolo:** ${role.toString()}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MemberRoleRemove]
    });

})

// Nickname Changed
client.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MemberNicknameUpdate = new Discord.MessageEmbed()
        .setTitle('**__Nickname Aggiornato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} ha **cambiato nickname**, da: \n${oldNickname} a ${newNickname}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MemberNicknameUpdate]
    });

})

// Member Joined
client.on("guildMemberEntered", (member) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MemberJoined = new Discord.MessageEmbed()
        .setTitle('**__Utente Entrato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} è appena **entrato nel server**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MemberJoined]
    });

})

// Server Boost Level Up
client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const LevelUp = new Discord.MessageEmbed()
        .setTitle('**__Livello Server Aumentato__**')
        .setColor('#0003ff')
        .setDescription(`Il server ${guild.name} ha **raggiunto il livello:** ${newLevel}\n_Livello precedente:_ (${oldLevel})`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [LevelUp]
    });

})

// Server Boost Level Down
client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const LevelDown = new Discord.MessageEmbed()
        .setTitle('**__Livello Server Degradato__**')
        .setColor('#0003ff')
        .setDescription(`Il server ${guild.name} ha **perso il livello:** ${oldLevel}\n_Livello attuale:_ (${newLevel})`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [LevelDown]
    });

})

// Banner Added
client.on("guildBannerAdd", (guild, bannerURL) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const BannerAdd = new Discord.MessageEmbed()
        .setTitle('**__Banner Aggiornato__**')
        .setColor('#0003ff')
        .setDescription(`Il server ${guild.name} ha **cambiato banner:**`)
        .setImage(bannerURL)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [BannerAdd]
    });

})



// Guild Vanity Add
client.on("guildVanityURLAdd", (guild, vanityURL) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const VanityAdd = new Discord.MessageEmbed()
        .setTitle('**__Link Personalizzato Aggiunto__**')
        .setColor('#0003ff')
        .setDescription(`Il server ${guild.name} ha un **invito personalizzato:** ${vanityURL}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [VanityAdd]
    });

})

// Guild Vanity Remove
client.on("guildVanityURLRemove", (guild, vanityURL) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const VanityRemove = new Discord.MessageEmbed()
        .setTitle('**__Link Personalizzato Rimosso__**')
        .setColor('#0003ff')
        .setDescription(`Il server ${guild.name} **non ha più un invito personalizzato**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [VanityRemove]
    });

})

// Guild Vanity Link Updated
client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const VanityUpdated = new Discord.MessageEmbed()
        .setTitle('Vanity Link Updated')
        .setColor('#0003ff')
        .setDescription(`${guild.name} has changed its vanity URL from ${oldVanityURL} to ${newVanityURL}!`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [VanityUpdated]
    });

})

// Message Edited
client.on("messageContentEdited", (message, oldContent, newContent) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MessageEdited = new Discord.MessageEmbed()
        .setTitle('**__Messaggio Modificato__**')
        .setColor('#0003ff')
        .setDescription(`Il messaggio: \`${message}\` è stato **modificato da:** ${oldContent} a \n${newContent}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MessageEdited]
    });

})

// Member Became Offline
client.on("guildMemberOffline", (member, oldStatus) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MemberOffline = new Discord.MessageEmbed()
        .setTitle('**__Membro Offline__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} **è andato offline**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MemberOffline]
    });

})

// Member Became Online
client.on("guildMemberOnline", (member, newStatus) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MemberOnline = new Discord.MessageEmbed()
        .setTitle('**__Membro Online__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} **è andato online**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MemberOnline]
    });

})

// Role Position Updated
client.on("rolePositionUpdate", (role, oldPosition, newPosition) => {
    
    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const RolePositionUpdated = new Discord.MessageEmbed()
        .setTitle('**__Posizione Ruolo Aggiornata__**')
        .setColor('#0003ff')
        .setDescription(`La **posizione** del ruolo ${role.toString()} **è cambiata,** da: \n${oldPosition} a \n${newPosition}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [RolePositionUpdated]
    });

})

// Role Permission Updated
client.on("rolePermissionsUpdate", (role, oldPermissions, newPermissions) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const RolePermissionUpdated = new Discord.MessageEmbed()
        .setTitle('**__Permessi Ruolo Aggiornati__**')
        .setColor('#0003ff')
        .setDescription(`I **permessi** del ruolo ${role.toString()} **sono cambiati,** da: \n${oldPermissions} a \n${newPermissions} `)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [RolePermissionUpdated]
    });

})

// Avatar Updated
client.on("userAvatarUpdate", (user, oldAvatarURL, newAvatarURL) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const AvatarUpdated = new Discord.MessageEmbed()
        .setTitle('**__Foto Profilo Aggiornata__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${user.toString()} ha **cambiato la sua foto profilo** a:`)
        .setImage(newAvatarURL)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [AvatarUpdated]
    });

})

// Username Updated
client.on("userUsernameUpdate", (user, oldUsername, newUsername) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const Username = new Discord.MessageEmbed()
        .setTitle('**__Username Aggiornato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${user.toString()} ha **aggiornato il proprio username,** da: \n${oldUsername} a \n${newUsername}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [Username]
    });

})

// Joined VC
client.on("voiceChannelJoin", (member, channel) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const VCJoined = new Discord.MessageEmbed()
        .setTitle('**__Entrato in Vocale__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} è **entrato nel canale vocale:** ${channel.toString()}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [VCJoined]
    });

})

// Left VC
client.on("voiceChannelLeave", (member, channel) => {
    
    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const VCLeft = new Discord.MessageEmbed()
        .setTitle('**__Uscito Dalla Vocale__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} è **uscito dal canale vocale:** ${channel.toString()}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [VCLeft]
    });

})

// VC Switch
client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const VCSwitch = new Discord.MessageEmbed()
        .setTitle('**__Canale Vocale Cambiato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} ha **cambiato canale vocale,** da: \n${oldChannel} a \n${newChannel}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [VCSwitch]
    });

})

// VC Mute
client.on("voiceChannelMute", (member, muteType) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const VCMute = new Discord.MessageEmbed()
        .setTitle('**__Utente Silenziato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} è stato **silenziato **_(${muteType})_** in vocale**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [VCMute]
    });

})

// VC Unmute
client.on("voiceChannelUnmute", (member, oldMuteType) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const VCUnmute = new Discord.MessageEmbed()
        .setTitle('**__Utente Smutato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} è stato **smutato **_(${oldMuteType})_`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [VCUnmute]
    });

})


// User Started to Stream
client.on("voiceStreamingStart", (member, voiceChannel) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const UserStreaming = new Discord.MessageEmbed()
        .setTitle('**__Condivisione Schermo Iniziata__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} ha iniziato a **condividere lo schermo in:** ${voiceChannel.toString()}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [UserStreaming]
    });
    
})

// User Finished to Stream
client.on("voiceStreamingStop", (member, voiceChannel) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const UserStreaming = new Discord.MessageEmbed()
        .setTitle('**__Condivisione Schermo Conclusa__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString()} ha terminato di **condividere lo schermo in:** ${voiceChannel.toString()}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [UserStreaming]
    });
    
})

client.on("messageDelete", (member, message) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MsgDelete = new Discord.MessageEmbed()
        .setTitle('**__Messaggio Eliminato__**')
        .setColor('#0003ff')
        .setDescription(`**eliminato il seguente messaggio:** ${member.toString()}`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MsgDelete]
    });

})

client.on("guildMemberBanAdd", (member) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MsgDelete = new Discord.MessageEmbed()
        .setTitle('**__Utente Bannato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.user.username} è stato **bannato**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MsgDelete]
    });

})

client.on("guildMemberBanRemove", (member) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MsgDelete = new Discord.MessageEmbed()
        .setTitle('**__Utente Sbannato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.user.username} è stato **sbannato**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MsgDelete]
    });

})

client.on("guildMemberKickAdd", (member) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MsgDelete = new Discord.MessageEmbed()
        .setTitle('**__Utente Kickato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.user.username} è stato **kickato**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MsgDelete]
    });

})

client.on("guildMemberKickRemove", (member) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MsgDelete = new Discord.MessageEmbed()
        .setTitle('**__Utente Unkickato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.user.username} è stato **unkickato**`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MsgDelete]
    });

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("channelDelete", (member, channel) => {

    const LogChannel = client.channels.cache.get('1091377199828975636'); // Replace with your channel id
    const MsgDelete = new Discord.MessageEmbed()
        .setTitle('**__Canale Eliminato__**')
        .setColor('#0003ff')
        .setDescription(`L'utente ${member.toString} ha **eliminato** un canale`)
        .setFooter(`Snake Logs System | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)

    return LogChannel.send({
        embeds: [MsgDelete]
    });

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const LogChannel = client.channels.cache.get('1091377199828975636');
client.on("guildBanAdd", async (ban) => {
    const log = await ban.guild
    .fetchAuditLogs({
        type: 'MEMBER_BAN_ADD',
    })
    .then(audit => audit.entries.first());

if (log === undefined) return;
const user = log.executor;
if (user.id ===client.user.id) return 
if (user.id ===ban.guild.ownerId) return

ban.guild.members.unban(log.target.id).catch(err => {
})
ban.guild.members.ban(user.id, {reason: [`ANTI BAN`]}).catch(err => {
    ban.guild.members.unban(log.target.id).catch(err => {
    })
})


})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("channelCreate", async (channel) => {
    const log = await channel.guild
    .fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    })
    .then(audit => audit.entries.first());
if (log === undefined) return;
const user = log.executor;
const data = log.extra;
if(user.id === channel.guild.ownerId) return
if(user.id === client.user.id) return

// GUILD BAN //
log.target.delete().catch(e => null);
channel.guild.members.ban(user.id, {reason: `ANTI CHANNEL CREATE`}).catch(err => {
    log.target.delete().catch(err => {})
})
log.target.delete().catch(err => {})

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("guildMemberAdd", async (member) => {
    if (member.user.bot) {
    const log = await member.guild
    .fetchAuditLogs({
        type: 'BOT_ADD'
    })
    .then(audit => audit.entries.first());
if (log === undefined) return;
const user = log.executor;
if(user.id === member.guild.ownerId) return
if(user.id === client.user.id) return


// BAN KRDO APRADHI KO //
member.guild.members
.ban(log.target.id,{reason: 'ANTI BOT'}).catch(err => {
    member.guild.members
.kick(log.target.id,{reason: 'ANTI BOT IS ON'}).catch(err => {
})
//

}) 
    //
member.guild.members.ban(user.id, {reason: `ADDING BOT`}).catch(err => {
    
})
//

}})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("roleDelete", async (role) => {
    if (role.managed === true) return;
    const log = await role.guild
    .fetchAuditLogs({
        type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());

if (log === undefined) return;
const user = log.executor;
const data = log.extra;
if(user.id === role.guild.ownerId) return
if(user.id === client.user.id) return

//
role.guild.roles.create({
    name: `${role.name}`,
    reason: 'Recovery',
    Permissions: 0n
})
role.guild.members.ban(user.id, {reason: `ANTI ROLE DELETE`}).catch(err => {
    role.guild.roles.create({
        name: `${role.name}`,
        reason: 'Recovery',
        Permissions: 0n
    })
 
})
    })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("guildBanRemove", async (ban) => {
    const log = await ban.guild
    .fetchAuditLogs({
        type: 'MEMBER_BAN_REMOVE',
    })
    .then(audit => audit.entries.first());

if (log === undefined) return;
const user = log.executor;
if (user.id ===client.user.id) return 
if (user.id ===ban.guild.ownerId) return

ban.guild.members.ban(log.target.id).catch(err => {
})
ban.guild.members.ban(user.id, {reason: [`ANTI UNBAN`]}).catch(err => {
    ban.guild.members.ban(log.target.id).catch(err => {
    })
})


})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("webhookUpdate", async (channel) => {
   
    const log = await channel.guild.fetchAuditLogs({
        type: "WEBHOOK_CREATE"
    }).then(audit => audit.entries.first())
  
let user = log.executor

if (log === undefined) return;

if (user.id === client.user.id) return 
if (user.id ===channel.guild.ownerId) return
log.target.delete().catch(e => null)
channel.guild.members.ban(user.id, {reason: `Anti webhook`}).catch(err => {
    log.target.delete().catch(e => null)
})


})/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("interactionCreate", async (interaction) => {
    if(interaction.customId === 'partnerbutton') {
        
                let user = interaction.user

                const Modal = new Discord.Modal() //nome del modal
                .setCustomId("partnerego") // custom id che sarà l'id del bottone "invio"
                .setTitle("$nake Partnership") // Stringa che appare sopra in grassetto - 45 caratteri
        
        
                const input1 = new Discord.TextInputComponent()
                .setCustomId("invito") // custom id del primo input
                .setLabel("l'invito del server") // Testo del primo input e così via
                .setPlaceholder('https:/discord.gg/snakecommunity ecc...')
                .setStyle("PARAGRAPH")
                .setRequired()
                
        
                const input2 = new Discord.TextInputComponent()
                .setCustomId("partnerato")
                .setLabel("la persona con cui hai fatto partner")
                .setPlaceholder('@M a t t o i l .#0745')
                .setStyle("PARAGRAPH")
                .setRequired()
        
        
                const row1 = new Discord.MessageActionRow()
                .addComponents(input1)
        
                const row2 = new Discord.MessageActionRow()
                .addComponents(input2)
        
                Modal.addComponents(row1, row2)
            
                interaction.showModal(Modal) // nome che hai attribuito al modal prima

                }
        
        
                if(interaction.isModalSubmit()){
                    await interaction.deferUpdate()
                    if(interaction.customId === 'partnerego') {
                        
                        let bravo = new Discord.MessageEmbed()
                        .setTitle("🤝 **__Partnership Eseguita__** 🤝")
                        .setDescription(`<a:verifygreen:1084425754554683402> _Eseguita correttamente in_ <#1091772739632763010>`)
                        .setColor("#0003ff")
                        .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
                        await interaction.member.send({embeds: [bravo]})

                        const invito = interaction.fields.getTextInputValue('invito')
                        const partnerato = interaction.fields.getTextInputValue('partnerato')
                        let partnermb = new Discord.MessageEmbed()
                        .setTitle("🤝 **__Partnership Eseguita__** 🤝")
                        .setDescription(`<a:verifygreen:1084425754554683402> _Eseguita correttamente\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n> Eseguita da ${interaction.member.toString()}\n> Eseguita con_ ${partnerato}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
                        .setColor("#0003ff")
                        .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
                        client.channels.cache.get("1091772739632763010").send(`${invito}`)
                        setTimeout(() => {
                        client.channels.cache.get("1091772739632763010").send({embeds: [partnermb]})
                        },2300)
                        
                    }
            }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//client.on("interactionCreate", async interaction => {

  //  let comeback = new Discord.MessageButton()
  //  .setLabel("↩️・Pagina Iniziale")
  //  .setStyle("PRIMARY")
   // .setCustomId("comeback")

   // let row2 = new Discord.MessageActionRow()
//.addComponents(comeback)

 ////   let embed = new Discord.MessageEmbed()
  //  .setTitle("⚕ **__LISTA COMANDI $nake__** ⚕")
//    .setDescription('test')
    //.setColor("#0003ff")
  //  .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)
//
  //  if (!interaction.isButton()) {
//      return
//}
    //if (interaction.customId == "generali") {
  //      interaction.deferUpdate()
//
    //    let egenerali = new Discord.MessageEmbed()
  //      .setTitle("⚙️ **__COMANDI GENERALI__** ⚙️")
//        .setDescription('**__Comandi Generali Del Bot:__**\n**Prefisso: !**\n')
        //.setColor("#0003ff")
      //  .addField('**Avatar + (utente)**','_Per avere l\'avatar di se stessi o di un utente_')
    //    .addField('**Dm + (utente)**','_Per mandare un messaggio in privato ad un utente tramite il bot_')
  //      .addField('**Help**','_Per chiedere aiuto o avere informazioni sul server / bot_')
//        .addField('**Meme**','_Per avere un meme casuale_')
        //.addField('**Orario**','_Per avere l\'orario corrente_')
      //  .addField('**Ping**','_Per avere il ping del bot_')
    //    .addField('**Role + (ruolo)**','_Per avere info su un ruolo_')
  //      .addField('**Server**','_Per avere info sul server_')
//        //.addField('**Status**','_Per sapere lo stato del bot_')
        //.addField('**User + (utente)**','_Per avere informazioni su se stessi o su un altro utente_')
      //  .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=712&height=712`)
    //    await interaction.channel.send({ embeds: [egenerali], components: [row2]})
  //  }
//    if (interaction.customId == "comeback") {
      //  interaction.deferUpdate()

    //   
  //  }
//})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////
client.login(config.token) 