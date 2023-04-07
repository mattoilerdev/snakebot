const Discord = require("discord.js");
const client = new Discord.Client({ intents: 3276799 });
const config = require('./config.json')
const prefix = "!" 

client.on("ready", () => {
    console.log("BOT IS READY TO FUCK UR MOM")
  })
  
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



client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith(`.js`));
for (const file of commandsFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const commandsFolder = fs.readdirSync(`./commands`);
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(`.js`));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

const eventsFolders = fs.readdirSync('./events');
for (const folder of eventsFolders) {
    const eventsFiles = fs.readdirSync(`./events/${folder}`).filter(file => file.endsWith(`.js`));

    for (const file of eventsFiles) {
        if (file.endsWith(".js")) {
            const event = require(`./events/${folder}/${file}`);
            client.on(event.name, (...args) => event.execute(...args));
        }
        else {
            const eventsFiles2 = fs.readdirSync(`./events/${folder}/${file}`)
            for (const file2 of eventsFiles2) {
                const event = require(`./events/${folder}/${file}/${file2}`);
                client.on(event.name, (...args) => event.execute(...args));
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
        interaction.deferUpdate()

        if(!interaction.member.permissions.has('MANAGE_CHANNELS')) {
            let lolo = new Discord.MessageEmbed()
            .setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
            .setDescription("<a:verifyred:1084425689853329469> _Non hai il permesso di chiudere il ticket_")
            .setColor("#992d22")
            .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        
            return await interaction.channel.send({embeds: [lolo], ephemeral: true})
        }
        
let embedverifigianz = new Discord.MessageEmbed()
.setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
.setDescription(`<a:verifygreen:1084425754554683402> **_Il ticket sta per essere chiuso in 5 secondi.\nAzionato da:_** ${interaction.user.toString()}`)
.setColor("#0003ff")
.setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
await interaction.channel.send({embeds: [embedverifigianz]})

setTimeout(() => {
        
    interaction.channel.delete()
   }, 5000);


    }
    if(interaction.customId == 'claimticket') {
interaction.deferUpdate()
if (!interaction.member.roles.cache.has("1091323090476220489")) {
    let lolo2 = new Discord.MessageEmbed()
    .setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
    .setDescription("<a:verifyred:1084425689853329469> _Non hai il permesso di claimare il ticket_")
    .setColor("#992d22")
    .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

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
  //  .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
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
      //  .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
    //    await interaction.channel.send({ embeds: [egenerali], components: [row2]})
  //  }
//    if (interaction.customId == "comeback") {
      //  interaction.deferUpdate()

    //   
  //  }
//})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.login(config.token) 