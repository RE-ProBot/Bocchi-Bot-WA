async function revoke(a, b, eng) {
    try {
        const isRegistered = await a.db.containsId('registered', a.sender.id)
        var { getRang } = a.importFresh('../../lib/rang.js')
        var isModerator = await getRang('isModerator', a.sender.id, a.db)
    
        if (!isRegistered) return await b.reply(alles.from, eng.notRegistered(), a.id)
        if (!a.isGroupMsg) return await b.reply(alles.from, eng.groupOnly(), a.id)
        if (!a.isGroupAdmins && !isModerator) return b.reply(alles.from, eng.adminOnly(), a.id)
        if (!a.isBotGroupAdmins) return b.reply(alles.from, eng.botNotAdmin(), a.id)
        await b.revokeGroupInviteLink(a.groupId)
        await b.sendTextWithMentions(alles.from, `Gruppenlink zurückgesetzt von @${a.sender.id.replace('@c.us', '')}`)
    } catch (err) {
        await b.reply(a.from, "Es ist ein Fehler aufgetreten.", a.id)
    }
}
module.exports = {
    revoke
}
