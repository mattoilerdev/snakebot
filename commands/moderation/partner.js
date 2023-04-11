const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'partnership',
    async execute(message) {
        var currentDate = new Date()
        let gestore = new MessageButton()
            .setLabel("🔐・Esegui Partnership")
            .setStyle("PRIMARY")
            .setCustomId("partnerbutton")

        let row1 = new MessageActionRow()
            .addComponents(gestore)

        let lolo = new Discord.MessageEmbed()
            .setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
            .setDescription("<a:verifyred:1084425689853329469> _Non hai il permesso di fare partner_")
            .setColor("#992d22")
            .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString(), `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

        if (!message.member.roles.cache.has("1091773008957411329")) {
            return await message.reply({ embeds: [lolo], ephemeral: true })
        }

        let embedP = new Discord.MessageEmbed()
            .setTitle("🤝 **__$nake PARTNER__** 🤝")
            .setDescription("Ciao <@&1091327272717402122> !\nPer fare una partnership cliccare su questo bottone!")
            .setColor("#0003ff")
            .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString(), `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        message.channel.send({ embeds: [embedP], components: [row1] })



    }
}