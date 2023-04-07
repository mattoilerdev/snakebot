module.exports = {
    name: "addrole",
    execute(message) {
        
        var currentDate = new Date()
    
        let utente = message.mentions.members.first();
        let ruolo1 = message.mentions.roles.first()
        let ruolo2 = message.mentions.roles.first(2)
        let ruolo3 = message.mentions.roles.first(3)
        let ruolo4 = message.mentions.roles.first(4)
        let ruolo5 = message.mentions.roles.first(5)
        let ruolo6 = message.mentions.roles.first(6)
        let ruolo7 = message.mentions.roles.first(7)
        let ruolo8 = message.mentions.roles.first(8)
        let ruolo9 = message.mentions.roles.first(9)
        let ruolo10 = message.mentions.roles.first(10)
        let ruolo104 = message.mentions.roles.first(11)

        message.delete()
let lolo = new Discord.MessageEmbed()
.setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
.setDescription("<a:verifyred:1084425689853329469> _Non hai il permesso di aggiungere quel ruolo_")
.setColor("#992d22")
.setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

let user = new Discord.MessageEmbed()
.setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
.setDescription("<a:verifyred:1084425689853329469> _Aggiungi un utente valido_")
.setColor("#992d22")
.setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

let mtk = new Discord.MessageEmbed()
.setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
.setDescription("<a:verifyred:1084425689853329469> _Aggiungi un ruolo valido_")
.setColor("#992d22")
.setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

if(ruolo1.permissions.has("MANAGE_ROLES")) {
return message.channel.send({ embeds: [lolo] })
}

if(ruolo1.permissions.has("BAN_MEMBERS")) {
return message.channel.send({ embeds: [lolo] })
}

if(ruolo1.permissions.has("MANAGE_CHANNELS")) {
return message.channel.send({ embeds: [lolo] })
}
if(ruolo1.permissions.has("KICK_MEMBERS")) {
return message.channel.send({ embeds: [lolo] })
}

if(ruolo1.permissions.has("ADMINISTRATOR")) {
return message.channel.send({ embeds: [lolo] })
}

        if (!message.member.roles.cache.has("1091327417592860802")) {
            return message.channel.send(lolo);
        }
    if (!utente) {
        return message.channel.send({ embeds: [user] })

    }
    if (!ruolo1) {
        return message.channel.send({ embeds: [mtk] })

    }

if (utente + ruolo1) {



    utente.roles.add(ruolo1)
    utente.roles.add(ruolo2)
    utente.roles.add(ruolo3)
    utente.roles.add(ruolo4)
    utente.roles.add(ruolo5)
    utente.roles.add(ruolo6)
    utente.roles.add(ruolo7)
    utente.roles.add(ruolo8)
    utente.roles.add(ruolo9)
    utente.roles.add(ruolo10)
    utente.roles.add(ruolo104)

        let negro = new Discord.MessageEmbed()
        .setTitle("<:emoji_28:1084434251480580106> **__RUOLO AGGIUNTO__** <:emoji_28:1084434251480580106>")
        .setDescription(`<a:verifygreen:1084425754554683402> _Tutti i ruoli sono stati aggiunti con successo a ${utente} da ${message.author.toString()} _`)
        .setColor("#0003ff")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

        message.channel.send({ embeds: [negro] })

       }
    }
}