module.exports = {
    name: "meme",
    execute(message) {
        
        var currentDate = new Date()
        
        var risposta = ["https://media.tenor.com/IU3SbooHGWkAAAAM/wok-the-wock.gif",
        "https://s3-prod.adage.com/s3fs-public/styles/800x600/public/20220729_brand_memes_3x2.jpg",
         "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/WikiMeme_Dank.jpg/640px-WikiMeme_Dank.jpg",
         "https://preview.redd.it/v0bpd9zpraa51.jpg?auto=webp&s=b053ca453fe975423796973a1716a87475930029",
         "https://i.pinimg.com/736x/c9/20/ac/c920ac758cf86db1dc0ea532fc3dfc38.jpg",
         "https://64.media.tumblr.com/57c86539df6a17f834efbf5f04cc2de6/tumblr_mrfm87rw781rl3n97o1_640.jpg",
         "https://64.media.tumblr.com/f44f5b562438dd0bc62a48b1ed20ef47/tumblr_mrj73yIeel1rl3n97o1_640.jpg",
         "https://cdn-img-o.facciabuco.com/291/iyo34k8vsq-nasce-cresce-e-ignora-meme-ita-meme_b.jpg?c=1",
         "https://64.media.tumblr.com/6093aa4b9784fd076c31a69a6299e31e/tumblr_mpem90aLWq1rl3n97o1_1280.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXJIbazCLPsRLHwgeFCpi_Or_M_IEL4Mzjw&usqp=CAU",
         "https://i.imgur.com/u35fFv4.png",
         "https://i.pinimg.com/originals/bc/4c/ee/bc4cee64ba0651cc7ffb38a2138e6699.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqX5HQ_LgpPTPF12zUa6V-wFi5Va4VAY5-SQ&usqp=CAU",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDC6M2xBsycxJzNrdmwXSx24BNVs942x2lw&usqp=CAU",
         "https://i.redd.it/hsxbj0mziet41.jpg",
         "https://i.redd.it/7ynl5c7047u41.jpg",
         "https://preview.redd.it/c3vwgu8be6t41.png?auto=webp&s=f66b906c1953bbbb4ae7713694823efc66fb92c6",
         "https://i.redd.it/44kd5z1d3et41.jpg",
         "https://i.pinimg.com/736x/38/2e/e3/382ee34993a7a819b7481a96759260b0.jpg"]
         
        var random = Math.floor(Math.random() * risposta.length )

        let serra = new Discord.MessageEmbed()
            .setColor("#0003ff")
           .setImage(risposta[random])
           .setFooter(`${message.guild.name} | ` + currentDate.toLocaleString() , `https://cdn.discordapp.com/attachments/1084380772774985728/1084382176092635197/48115234-6DB0-400F-BA6C-681106447C87.png`)
            
            

            message.channel.send({ embeds: [serra] })


    }
}