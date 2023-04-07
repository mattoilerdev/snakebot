module.exports = {
    name: "user",
    execute(message) {
        var currentDate = new Date()
        let utente
        let user = new Discord.MessageEmbed()
        .setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
        .setDescription("<a:verifyred:1084425689853329469> _Aggiungi un utente valido_")
        .setColor("#992d22")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

        if (message.content == "!user") {
            utente = message.member;
        }
        else {
            utente = message.mentions.members.first();
        }
        if (!utente) {
            return message.channel.send({embeds: [user]})
        }

        let embed = new Discord.MessageEmbed()
            .setTitle('⚕ **__USER INFO__** ⚕')
            .setDescription("Tutte le info di questo utente")
            .setImage(utente.user.displayAvatarURL())
            .setColor("#0003ff")
            .setFooter(`${message.guild.id} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
            .addField("👤 • Nome Utente", utente.toString(), true)
            .addField("👤 • ID Utente", utente.user.id, true)
            .addField("♨️ • Stato", utente.presence ? utente.presence.status : "offline", true)
            .addField("🤖 • è un Bot?", utente.user.bot ? "Yes" : "No", true)
            .addField("📅 • Account Creato", utente.user.createdAt.toDateString(), true)
            .addField("📍 • Entrato nel server", utente.joinedAt.toDateString(), true)
            .addField("🧩 • Ruoli", utente.roles.cache.map(ruolo => ruolo.name).join("\n"))
            
            message.channel.send({ embeds: [embed] })
    
    }
}