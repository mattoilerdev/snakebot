module.exports = {
    name: "dm",
    execute(message) {
        
        var currentDate = new Date()
        if (!message.channel === '1093995345677140048') {
            let stuy = new Discord.MessageEmbed()
.setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
.setDescription("<a:verifyred:1084425689853329469> _Non hai il permesso di eseguire il comando in questa chat.\nPuoi usarlo __SOLO__ su <#1093995345677140048>_")
.setColor("#992d22")
.setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
return message.channel.send({embeds: [stuy]})
    }
        let user = new Discord.MessageEmbed()
        .setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
        .setDescription("<a:verifyred:1084425689853329469> _Aggiungi un utente valido_")
        .setColor("#992d22")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        
        let mtk = new Discord.MessageEmbed()
        .setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
        .setDescription("<a:verifyred:1084425689853329469> _Aggiungi un message valido_")
        .setColor("#992d22")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        

        let utente = message.mentions.members.first();
        const args = message.content.split(/\s+/);
        let testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send({embeds: [mtk]});
        }

        if (!utente) {
            return message.channel.send({embeds: [user]});
        }

        message.delete()
        let embed = new Discord.MessageEmbed()
            .setTitle(`⚕ **__DM MESSAGE__** ⚕`)
            .setDescription(testo)
            .setColor("#0003ff")
            .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
 
            
        utente.send({embeds: [embed]})
        

    }
}
