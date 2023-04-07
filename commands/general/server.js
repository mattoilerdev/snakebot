module.exports = {
    name: "server",
    async execute(message) {

        var currentDate = new Date()
       
        const owner = await message.guild.fetchOwner()
        let server = message.guild;
        let embed = new Discord.MessageEmbed()
            .setTitle('⚕ **__SERVER INFO__** ⚕')
            .setDescription("Tutte le info su questo server")
            .setImage(server.iconURL())
            .setColor("#0003ff")
            .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
            .addField("👑 • Owner", owner.toString(), true)
            .addField("💾 • Nome Server", server.name, true)
            .addField("💾 • ID Server", server.id, true)
            .addField("👤 • Membri", server.memberCount.toString())
            .addField("✏️ • Canali", server.channels.cache.size.toString())
            .addField("📅 • Server creato", server.createdAt.toDateString(), true)
            .addField("<a:CGE_Boost:1083791523222671461> • Boost ", server.premiumSubscriptionCount + " Boost, " + (server.premiumTier != "NONE" ? server.premiumTier : 0) , true)
          
       
        
        message.channel.send({ embeds: [embed] })
    }
}
