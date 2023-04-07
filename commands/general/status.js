module.exports = {
    name: "status",
    execute(message) {
        var currentDate = new Date()
       
        let embed = new Discord.MessageEmbed()
        .setTitle("🤖 **__BOT STATUS__** 🤖")
        .setDescription(`_Il Bot è Online da:_\n${client.uptime / 1000 }`)
        .setColor("#0003ff")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        

        message.channel.send({ embeds: [embed] })

    }
}