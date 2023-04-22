const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    name: "sito",
    execute (message) {

/////////////////////////////////////////////////////////////

let sito = new MessageButton()
.setLabel("🔗・Sito Web")
.setURL("https://mattoilerdev.github.io/mattoil/")
.setStyle("LINK")

let row = new MessageActionRow()
.addComponents(sito)

      var currentDate = new Date()
    
        let embed = new Discord.MessageEmbed()
        .setTitle("🔗 **__SITO WEB__** 🔗")
        .setDescription('Salve a tutti <@&1091327272717402122> , qui ' + message.member.toString() + ', Ecco a voi **il mio sito web, che descrive brevemente chi sono e mostra i miei lavori!**')
        .setColor("#0003ff")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        message.channel.send({ embeds: [embed], components: [row]})
message.delete()
    }
}