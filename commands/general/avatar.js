module.exports = {
    name: "avatar",
    execute(message) {
        
        var currentDate = new Date()

    
        let utente
        if (message.content == "!avatar") {
            utente = message.member;
        }
        else {
            utente = message.mentions.members.first();
        }
        if (!utente) {
            let user = new Discord.MessageEmbed()
.setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
.setDescription("<a:verifyred:1084425689853329469> _Aggiungi un utente valido_")
.setColor("#992d22")
.setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
            return message.channel.send({embeds: [user]})

        }

            let embed = new Discord.MessageEmbed()
            .setTitle('⚕ **__AVATAR INFO__** ⚕')
            .setDescription("Pic di: " + utente.toString())
            .setImage(utente.user.displayAvatarURL())
            .setColor("#0003ff")
            .setFooter(`${message.guild.id} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)      

            message.channel.send({embeds: [embed]})


    
  }
}