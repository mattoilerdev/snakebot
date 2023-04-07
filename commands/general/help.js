const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    name: "help",
    execute(message) {
     
/////////////////////////////////////////////////////////////

let generali = new MessageButton()
.setLabel("⚙️・Cmd Generali")
.setStyle("PRIMARY")
.setCustomId("generali") //tua zia puttana

let moderation = new MessageButton()
.setLabel("🔐・Cmd Moderation")
.setStyle("PRIMARY")
.setCustomId("moderation") //tua zia puttana

let shop = new MessageButton()
.setLabel("💰・Help Shop")
.setStyle("PRIMARY")
.setCustomId("shop") //tua zia puttana

let candidature = new MessageButton()
.setLabel("📝・Help Candidature")
.setStyle("PRIMARY")
.setCustomId("candidature") //tua zia puttana

let row3 = new MessageActionRow()
.addComponents(generali)
.addComponents(moderation)
.addComponents(shop)
.addComponents(candidature)

/////////////////////////////////////////////////////////////

let comeback = new MessageButton()
.setLabel("↩️・Pagina Iniziale")
.setStyle("PRIMARY")
.setCustomId("comeback") //tua zia puttana

let row2 = new MessageActionRow()
.addComponents(comeback)


////////////////////////////////////////////////////////////
      var currentDate = new Date()
    
        let embed = new Discord.MessageEmbed()
        .setTitle("⚕ **__LISTA COMANDI $nake__** ⚕")
        .setDescription('test')
        .setColor("#0003ff")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        message.channel.send({ embeds: [embed], components: [row3]})
    
      }
    
    }