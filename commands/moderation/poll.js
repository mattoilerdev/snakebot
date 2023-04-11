module.exports = {
    name: "poll",
    execute(message) {
        
        var currentDate = new Date()

        let user = new Discord.MessageEmbed()
        .setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
        .setDescription("<a:verifyred:1084425689853329469> _Aggiungi un messaggio valido! _")
        .setColor("#992d22")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)


        const args = message.content.split(/\s+/);
        let testo;
        testo = args.slice(1).join(" ");
        let lolo = new Discord.MessageEmbed()
        .setTitle("<a:Attenzione_Gif:1083801350481125459> **__PARIS FULL RP PS4 BOT__** <a:Attenzione_Gif:1083801350481125459>")
        .setDescription("<a:verifyred:1084425689853329469> _Non hai il permesso di fare un sondaggio_")
        .setColor("#992d22")
        .setFooter(`${message.author.username} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send({ embeds: [lolo] })
        }
        if (!testo) {
            return message.channel.send({embeds: [user]});
        }
        message.delete()


        let embed = new Discord.MessageEmbed()
        
        .setTitle("<:voto:1074396166617301003>**__SONDAGGIO__**<:voto:1074396166617301003>")
        .setDescription(`${message.author.toString()}  _ha pubblicato il seguente sondaggio_: \n\n**` +  testo + "**")
        .setColor("#0003ff")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        
        message.channel.send({embeds: [embed]})

        .then(msg => { 
                 
            msg.react(`<:emoji_1:1066059691240718367>`)
            msg.react(`<:emoji_3:1066060364841750609>`)
            msg.react(`<:emoji_3:1066059772601843854>`)
        }) 

    }
}