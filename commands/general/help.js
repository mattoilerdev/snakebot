const { MessageActionRow, MessageSelectMenu } = require('discord.js');
var currentDate = new Date()
module.exports = {
    name: "help",
    async execute(message, interaction) {
      
/////////////////////////////////////////////////////////////

        let embedape = new Discord.MessageEmbed()
        .setTitle("🤖 **__$nake COMMANDS__** 🤖")
        .setDescription(`_Ciao ${message.member.toString()}!\nEcco a te i comandi del bot:_ <@1019215374841036801> !\n**Ricordiamo che il prefisso è sempre: \`!\`**\n_Inoltre le _**{}**_ significa che è obbligatorio, mentre _**[]**_ facoltativo_`)
        .setColor("#0003ff")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
    
      const row = new MessageActionRow()
      .addComponents(
          new MessageSelectMenu()
              .setCustomId('select')
              .setPlaceholder('Nothing selected')
              .setMinValues(1)
              .setMaxValues(1)
              .addOptions([
                  {
                      label: '🆘・Generali',
                      description: 'Comandi generali del bot',
                      value: 'first_option',
                      customId: 'gen',
                  },
                  {
                      label: '💰・Moderation',
                      description: 'Comandi moderation del bot',
                      value: 'second_option',
                      customId: 'mod',
                  },
                  {
                    label: '🤝・Musica',
                    description: 'Comandi musica del bot',
                    value: 'third_option',
                    customId: 'mus',
                },
                {
                    label: '📋・Funzionalità',
                    description: 'Funzionalità varie del bot, come logs,anti-nuke ecc.',
                    value: 'fourth_option',
                    customId: 'fun',
                },
              ]),
      );

  await message.channel.send({embeds: [embedape], components: [row] });

  client.on('interactionCreate', interaction => {
	if (!interaction.isSelectMenu()) return;
	console.log(interaction);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isSelectMenu()) return;
});

const collector = message.channel.createMessageComponentCollector({
    componentType: 'SELECT_MENU'
})

collector.on("collect", async (collected, i) => {
const value = collected.values[0]
const interaction = collected;

if(value === 'first_option')  {   
        let embed = new Discord.MessageEmbed()
        .setTitle("⚙️ **__COMANDI GENERALI__** ⚙️")
        .setDescription(`_Ecco i comandi generali del bot_ <@1019215374841036801> !\n**Ricordiamo che il prefisso è sempre: \`!\`**\n_Inoltre le {} significa che è obbligatorio, mentre [] facoltativo_\n\n**!avatar + [utente],** _ per ottenere un avatar_\n**!dm + {utente},** _ per scrivere un messaggio anonnimo a qualcuno_\n**!help,** _per sapere i comandi del server_\n**!meme,**_per un meme casuale_\n**!orario,** _per sapere l'orario attuale_\n**!ping,** _per sapere il ping del bot_\n**!role + {ruolo},** _per sapere le informazioni su un ruolo_\n**!server,** _per avere info sul server_\n**!status,** _per sapere info sul bot_\n**!user + [utente],** _per avere info su un utente_`)
        .setColor("#0003ff")
        .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        await interaction.reply({ embeds: [embed], ephemeral: true})
    
      }

      if(value === 'second_option')  {   
        let embed = new Discord.MessageEmbed()
        .setTitle("⚙️ **__COMANDI MODERATION__** ⚙️")
        .setDescription(`_Ecco i comandi moderation del bot_ <@1019215374841036801> !\n**Ricordiamo che il prefisso è sempre: \`!\`**\n_Inoltre le {} significa che è obbligatorio, mentre [] facoltativo_\n\n**!addrole + {utente} + {ruolo},** _ per aggiungere un ruolo ad un utente tramite il bot
        _\n**!dm + {utente},** _ per scrivere un messaggio anonnimo a qualcuno_\n**!help,** _per sapere i comandi del server_\n**!meme,**_per un meme casuale_\n**!orario,** _per sapere l'orario attuale_\n**!ping,** _per sapere il ping del bot_\n**!role + {ruolo},** _per sapere le informazioni su un ruolo_\n**!server,** _per avere info sul server_\n**!status,** _per sapere info sul bot_\n**!user + [utente],** _per avere info su un utente_`)
        .setColor("#0003ff")
        .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
        await interaction.reply({ embeds: [embed], ephemeral: true})
    
      }
    
    })

  }

}