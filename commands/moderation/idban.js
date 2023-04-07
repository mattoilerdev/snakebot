module.exports = {
    name: "idban",
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
        message.delete()
        message.guild.members.ban(idUtente)
    
                let embed = new Discord.MessageEmbed()
                    .setTitle("<a:banned:1083791739606810704> **__UTENTE BANNATO__** <a:banned:1083791739606810704>")
                    .setDescription(idUtente.toString() + " è stato bannato")
                    .setColor("#0003ff")
                    .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
                    
                message.channel.send({ embeds: [embed] })


    }
}