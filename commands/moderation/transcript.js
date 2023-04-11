module.exports = {
    name: "fkdkn",
    async execute(message) {

var currentDate = new Date()

        let chatLog = `-- CHAT LOG #${message.channel.name} --\n\n`

        let canalgienz = message.channel;
        let messages = await getAllMessages(canalgienz)
        messages.reverse().forEach(msg => {
            chatLog += `@${msg.author.tag} ID: ${msg.author.id} - ${msg.createdAt.toLocaleString()}\n`
    
            if (msg.content) chatLog += `${msg.content}\n`
    
            if (msg.embeds[0]) {
                chatLog += `Embed:\n`
                if (msg.embeds[0].title) chatLog += `Title: ${msg.embeds[0].title}\n`
                if (msg.embeds[0].description) chatLog += `Description: ${msg.embeds[0].description}\n`
                if (msg.embeds[0].fields[0]) chatLog += `Fields: ${msg.embeds[0].fields.map(x => `${x.name}-${x.value}`).join(", ")}\n`
            }
    
            if (msg.attachments.size > 0)
                chatLog += `Files: ${msg.attachments.map(x => `${x.name} (${x.url})`).join(", ")}\n`
    
            if (msg.stickers.size > 0)
                chatLog += `Stickers: ${msg.stickers.map(x => `${x.name} (${x.url})`).join(", ")}\n`
    
            chatLog += "\n"
        })
    
        let attachment = new Discord.MessageAttachment(Buffer.from(chatLog, "utf-8"), `chatLog-channel-${message.channel.id}.txt`)
    const logschannel = client.channels.cache.get('1091377199828975636')
        let embede = new Discord.MessageEmbed()
        .setTitle("⚕ **__TRANSCRIPT__** ⚕")
        .setDescription('Ecco i logs del ticket ' + canalego.toString())
        .setColor("#0003ff")
        .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
    
        logschannel.send({ embeds: [embede], files: [attachment] })
    
            .catch(() => { })
    
    const getAllMessages = async (channel) => {
    let allMessages = []
    let lastMessage
    
    while (true) {
        const options = { limit: 100 }
        if (lastMessage) options.before = lastMessage
    
        let messages = await channel.messages.fetch(options)
    
        allMessages = allMessages.concat(Array.from(messages.values()))
    
        lastMessage = messages.last().id
    
        if (messages.size != 100) {
            break
        }
    }
    
    return allMessages
    }

    }
}