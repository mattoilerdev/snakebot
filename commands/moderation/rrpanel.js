
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
module.exports = {
    name: "rrpanel",
    async execute(message) {
    message.delete()
        var currentDate = new Date()

        let embedape = new Discord.MessageEmbed()
        .setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
        .setDescription(`Salve a tutti <@&1091327272717402122> ! , Questi sono gli autoruoli del server ${message.guild.name} . \n**Per sceglierne uno vi basterà cliccare sul menù sottostante, e scegliere un colore!**`)
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
                      label: '🟢・Verde',
                      description: 'Il tuo nome diventerà verde!',
                      value: 'verde',
                      customId: 'verde',
                  },
                  {
                      label: '🟡・Giallo',
                      description: 'Il tuo nome diventerà giallo!',
                      value: 'giallo',
                      customId: 'giallo',
                  },
                  {
                    label: '🔴・Rosso',
                    description: 'Il tuo nome diventerà rosso!',
                    value: 'rosso',
                    customId: 'rosso',
                },
                {
                    label: '🟣・Viola',
                    description: 'Il tuo nome diventerà viola!',
                    value: 'viola',
                    customId: 'viola',
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

collector.on("collect", async (collected) => {
const value = collected.values[0]

const verde = "1094993509594976278"
const giallo =  "1094993523457142905"
const rosso =  "1094993526879699068"
const viola = "1094993530004455444"
const negro = "1094999813080219698"
const marrone =  "1094999823159132190"
const arancione =  "1094999826573312000"
const bianco = "1094999829601599599"


if(value === 'verde')  {
const interaction = collected

    let ggt = new Discord.MessageEmbed()

    .setTitle("<:emoji_28:1084434251480580106> **__$nake RR-PANEL__** <:emoji_28:1084434251480580106>")
    .setDescription(`<a:verifygreen:1084425754554683402> Congratulazioni ${interaction.user.toString()} hai ricevuto il ruolo <@&${verde}> \n_(di conseguenza gli altri sono stati tolti)_`)
    .setColor("#0003ff")
    .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
    interaction.reply({embeds: [ggt], ephemeral: true})

    interaction.member.roles.add(verde)
    interaction.member.roles.remove(giallo)
    interaction.member.roles.remove(rosso)
    interaction.member.roles.remove(viola)
    interaction.member.roles.remove(negro)
    interaction.member.roles.remove(marrone)
    interaction.member.roles.remove(arancione)
    interaction.member.roles.remove(bianco)
    
 }

 if(value === 'giallo')  {
    const interaction = collected
    
        let ggt = new Discord.MessageEmbed()
    
        .setTitle("<:emoji_28:1084434251480580106> **__$nake RR-PANEL__** <:emoji_28:1084434251480580106>")
        .setDescription(`<a:verifygreen:1084425754554683402> Congratulazioni ${interaction.user.toString()} hai ricevuto il ruolo <@&${giallo}> \n_(di conseguenza gli altri sono stati tolti)_`)
        .setColor("#0003ff")
        .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
        interaction.reply({embeds: [ggt], ephemeral: true})
    
        interaction.member.roles.add(giallo)
        interaction.member.roles.remove(verde)
        interaction.member.roles.remove(rosso)
        interaction.member.roles.remove(viola)
        interaction.member.roles.remove(negro)
        interaction.member.roles.remove(marrone)
        interaction.member.roles.remove(arancione)
        interaction.member.roles.remove(bianco)
     }

     if(value === 'rosso')  {
        const interaction = collected
        
            let ggt = new Discord.MessageEmbed()
        
            .setTitle("<:emoji_28:1084434251480580106> **__$nake RR-PANEL__** <:emoji_28:1084434251480580106>")
            .setDescription(`<a:verifygreen:1084425754554683402> Congratulazioni ${interaction.user.toString()} hai ricevuto il ruolo <@&${rosso}> \n_(di conseguenza gli altri sono stati tolti)_`)
            .setColor("#0003ff")
            .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
            interaction.reply({embeds: [ggt], ephemeral: true})
        
            interaction.member.roles.add(rosso)
            interaction.member.roles.remove(giallo)
            interaction.member.roles.remove(verde)
            interaction.member.roles.remove(viola)
            interaction.member.roles.remove(negro)
            interaction.member.roles.remove(marrone)
            interaction.member.roles.remove(arancione)
            interaction.member.roles.remove(bianco)
         }
         if(value === 'viola')  {
            const interaction = collected
            
                let ggt = new Discord.MessageEmbed()
            
                .setTitle("<:emoji_28:1084434251480580106> **__$nake RR-PANEL__** <:emoji_28:1084434251480580106>")
                .setDescription(`<a:verifygreen:1084425754554683402> Congratulazioni ${interaction.user.toString()} hai ricevuto il ruolo <@&${viola}> \n_(di conseguenza gli altri sono stati tolti)_`)
                .setColor("#0003ff")
                .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
                interaction.reply({embeds: [ggt], ephemeral: true})
            
                interaction.member.roles.add(viola)
                interaction.member.roles.remove(giallo)
                interaction.member.roles.remove(rosso)
                interaction.member.roles.remove(verde)
                interaction.member.roles.remove(negro)
                interaction.member.roles.remove(marrone)
                interaction.member.roles.remove(arancione)
                interaction.member.roles.remove(bianco)
             }

    
        })
     }
}
