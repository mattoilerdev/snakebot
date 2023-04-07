
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
module.exports = {
    name: "jki",
    async execute(message) {
    
        var currentDate = new Date()

        let embedape = new Discord.MessageEmbed()
        .setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
        .setDescription(`Salve a tutti <@&1091327272717402122> ! , Questi sono i ticket del server ${message.guild.name} . \n**Per aprirne uno vi basterà cliccare sul menù sottostante, e scegliere una categoria!**`)
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
                      label: '🆘・Ticket Supporto',
                      description: 'Apri un Ticket Supporto',
                      value: 'first_option',
                      customId: 'supporto',
                  },
                  {
                      label: '💰・Ticket Shop',
                      description: 'Apri un Ticket Shop',
                      value: 'second_option',
                      customId: 'shop',
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

if(value === 'first_option')  {
const interaction = collected
    if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
       return interaction.user.send("Hai gia un ticket aperto").catch(() => { }) 
    }


  let canalego = interaction.guild.channels.create("🆘│𝑺𝒖𝒑𝒑𝒐𝒓𝒕𝒐-" + interaction.user.username, {
       type: "text",
       topic: `Supporto: ${interaction.user.username}`,
       parent: "1093450785209208993", //Settare la categoria,
       permissionOverwrites: [
           {
               id: interaction.guild.id,
               deny: ["VIEW_CHANNEL"]
           },
           {
               id: interaction.user.id,
               allow: ["VIEW_CHANNEL"]
           },
           { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
               id: "1091323090476220489",
               allow: ["VIEW_CHANNEL"]
           }
       ],

}).then(canalego => {

    let chiusura = new MessageButton()
    .setLabel("🔐・Chiudi Ticket")
    .setStyle("PRIMARY")
    .setCustomId("chiuditicket") //tua zia puttana

    let claim = new MessageButton()
    .setLabel("📝・Claim Ticket")
    .setStyle("PRIMARY")
    .setCustomId("claimticket") //tua zia puttana

    let row1 = new MessageActionRow()
    .addComponents(chiusura)
    .addComponents(claim)


    ////////////////////////////////////////////////////////////////////

let ggt = new Discord.MessageEmbed()

.setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
.setDescription(`<a:verifygreen:1084425754554683402> Congratulazioni ${interaction.user.toString()} hai aperto il ticket: ${canalego}`)
.setColor("#0003ff")
.setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
interaction.reply({embeds: [ggt], ephemeral: true})

let aperturaticket = new Discord.MessageEmbed()
.setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
.setDescription(`**Salve ${interaction.user.toString()} \nGrazie per aver aperto un ticket, uno staff le risponderà a breve!** `)
.setColor("#0003ff")
.setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)

canalego.send({ embeds: [aperturaticket], components: [row1]})
//////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////


   })

/////////////////////////////////////////SHOP///////////////////////////////////////////////////////////////////////////////////////////

  }
  if(value === 'second_option') {
    const interaction = collected
    if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
        return interaction.user.send("Hai gia un ticket aperto").catch(() => { }) 
     }
 
 
   let canalego = interaction.guild.channels.create("💰│𝑺𝒉𝒐𝒑-" + interaction.user.username, {
        type: "text",
        topic: `Shop: ${interaction.user.username}`,
        parent: "1093451888655081502", //Settare la categoria,
        permissionOverwrites: [
            {
                id: interaction.guild.id,
                deny: ["VIEW_CHANNEL"]
            },
            {
                id: interaction.user.id,
                allow: ["VIEW_CHANNEL"]
            },
            { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                id: "1091323090476220489",
                allow: ["VIEW_CHANNEL"]
            }
        ],
 
 }).then(canalego => {

    let chiusura = new MessageButton()
    .setLabel("🔐・Chiudi Ticket")
    .setStyle("PRIMARY")
    .setCustomId("chiuditicket") //tua zia puttana

    let claim = new MessageButton()
    .setLabel("📝・Claim Ticket")
    .setStyle("PRIMARY")
    .setCustomId("claimticket") //tua zia puttana

    let row1 = new MessageActionRow()
    .addComponents(chiusura)
    .addComponents(claim)


    ///////////////////////////////////////////////////////////////


 let ggt = new Discord.MessageEmbed()
 
 .setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
 .setDescription(`<a:verifygreen:1084425754554683402> Congratulazioni ${interaction.user.toString()} hai aperto il ticket: ${canalego}`)
 .setColor("#0003ff")
 .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
 interaction.reply({embeds: [ggt], ephemeral: true})
 
 let aperturaticket = new Discord.MessageEmbed()
 .setTitle("<:HW_GESTORETICKET:1084433235808882808> **__$nake TICKET__** <:HW_GESTORETICKET:1084433235808882808>")
 .setDescription(`**Salve ${interaction.user.toString()} \nGrazie per aver aperto un ticket, uno staff le risponderà a breve!** `)
 .setColor("#0003ff")
 .setFooter(`${interaction.guild.name} | ` + currentDate.toLocaleString() , `https://media.discordapp.net/attachments/1092203250679296030/1092203358825234432/492348D5-2E26-4F21-A4B9-A693702D8956.png?width=671&height=671`)
 
 canalego.send({ embeds: [aperturaticket], components: [row1]})
    })

  }

})





      }
    
    }