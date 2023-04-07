module.exports = {
    name: "ping",
    execute(message) {
       
        var currentDate = new Date()
        let embed = new Discord.MessageEmbed()
        .setTitle("ItalyRoleplayPs4 Bot")
        .setDescription("Ecco la latenza del bot")
        .setColor("#0003ff")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        .addField("Ping", `${client.ws.ping}ms`)
        

    message.channel.send({embeds: [embed]})

    }
}