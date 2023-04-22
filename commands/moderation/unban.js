module.exports = {
    name: "unban",
    execute(message) {
        var currentDate = new Date()

        let lolo = new Discord.MessageEmbed()
        .setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
        .setDescription("<a:verifyred:1084425689853329469> _Non hai il permesso di bannare questo utente!_")
        .setColor("#992d22")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

        let user = new Discord.MessageEmbed()
.setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
.setDescription("<a:verifyred:1084425689853329469> _Aggiungi un utente valido_")
.setColor("#992d22")
.setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)




        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send({embeds: [lolo]});
        }

        let args = message.content.split(/\s+/);
        let idUtente = args[1]

        if (!idUtente) {
            return message.channel.send({embeds: [user]});
        }
        else {
           message.channel.send({embeds: [user]})
        }

        message.guild.members.unban(idUtente)
            .then(() => {
                let embed = new Discord.MessageEmbed()
                .setTitle("<a:banned:1083791739606810704> **__UTENTE BANNATO__** <a:banned:1083791739606810704>")
                .setDescription(idUtente + " _è stato bannato da_ " + message.author.toString())
                .setColor("#0003ff")
                .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1065531511404761158/1091371137331626156/28357D5E-502B-42F5-933E-2939278929A2.png?width=671&height=671`)
                message.channel.send({ embeds: [embed] })
            })
           

    }
}