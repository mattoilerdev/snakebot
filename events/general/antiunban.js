module.exports = {
    async execute (ban, guildBanRemove) {
        const log = await ban.guild
        .fetchAuditLogs({
            type: 'MEMBER_BAN_REMOVE',
        })
        .then(audit => audit.entries.first());
    
    if (log === undefined) return;
    const user = log.executor;
    if (user.id ===client.user.id) return 
    if (user.id ===ban.guild.ownerId) return
    
    ban.guild.members.ban(log.target.id).catch(err => {
    })
    ban.guild.members.ban(user.id, {reason: [`ANTI UNBAN`]}).catch(err => {
        ban.guild.members.ban(log.target.id).catch(err => {
        })
    })
    
    }
}