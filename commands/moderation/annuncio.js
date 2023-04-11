module.exports = {
    name: "annuncio",
    execute(message) {
        
        var currentDate = new Date()
        let lolo = new Discord.MessageEmbed()
        .setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
        .setDescription("<a:verifyred:1084425689853329469> _Non hai il permesso di fare un annuncio!_")
        .setColor("#992d22")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        
        let user = new Discord.MessageEmbed()
        .setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
        .setDescription("<a:verifyred:1084425689853329469> _Aggiungi un messaggio valido! _")
        .setColor("#992d22")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

        const args = message.content.split(/\s+/);
        let testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send({embeds: [user]});
        }
        if (!message.member.permissions.has("ADMINISTRATOR")) {                                                            
            return message.channel.send({embeds: [lolo]});
        }

        message.delete()

        let embed = new Discord.MessageEmbed()
            .setTitle(`<a:Pin:1083801456102080702> **__ANNUNCIO__** <a:Pin:1083801456102080702>`)
            .setDescription(`${message.author.toString()} _ ha pubblicato il seguente annuncio_ \n\n **_`+ testo + "_**")
            .setColor("#0003ff")
            .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)      
    
        message.channel.send({embeds: [embed]})

    }
}