module.exports = {
    name: "role",
    execute(message) {
        let mtk = new Discord.MessageEmbed()
.setTitle("<a:Attenzione_Gif:1083801350481125459> **__$nake BOT__** <a:Attenzione_Gif:1083801350481125459>")
.setDescription("<a:verifyred:1084425689853329469> _Aggiungi un ruolo valido_")
.setColor("#992d22")
.setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)

        var currentDate = new Date()
        let ruolo = message.mentions.roles.first()
        if (!ruolo) {
            return message.channel.send({embeds: [mtk]})
        }

            let memberCount = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == ruolo)).size;
            let permessiRuolo = new Discord.Permissions(ruolo.permissions.bitfield);
            let elencoPermessi = "";
            if (permessiRuolo.has("ADMINISTRATOR")) {
                elencoPermessi = "ADMINISTRATOR";

            }
                else {
                    let permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS"]
                    for (let i = 0; i < permessi.length; i++) {
                        if (permessiRuolo.has(permessi[i])) {
                            elencoPermessi += `- ${permessi[i]}\n`
                        }
                    }
                }

                let jeans = new Discord.MessageEmbed()
                .setTitle('⚕ **__ROLE INFO__** ⚕')
                .setDescription("Tutte le statistiche di questo ruolo")
                .setColor("#0003ff")
                .setFooter(`${message.author.username} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
                .addField('💾 • Nome Ruolo', ruolo.name, true)
                .addField("💾 • ID Ruolo", ruolo.id, true)
                .addField("🎨 • Color", ruolo.hexColor, true)
                .addField("📅 • Ruolo Creato", ruolo.createdAt.toDateString(), true)
                .addField("🔐 • Permessi", elencoPermessi, true)
                .addField("👤 • Membri", memberCount, true)
            message.channel.send({ embeds: [jeans] })


        


    }
}