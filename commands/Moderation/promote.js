async function promote(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (!a.isBotGroupAdmins) return await b.reply(a.from, eng.botNotAdmin(), a.id)

    var promoteId;
    if (a.message.quotedMsg) {
        promoteId = a.quotedMsgObj.sender.id
    } else {
        if (!a.mentionedJidList) return await b.reply(a.from, eng.wrongFormat(), a.id)
        if (a.mentionedJidList.length !== 1) return await b.reply(a.from, eng.wrongFormat(), a.id)
        promoteId = a.mentionedJidList[0]
    }
    if (promoteId === a.botNumber) return await b.reply(a.from, eng.wrongFormat(), a.id)
    if (a.groupAdmins.includes(promoteId)) return await b.reply(a.from, eng.adminAlready(), a.id)
    await b.promoteParticipant(a.groupId, promoteId)
    await b.reply(a.from, `Der genannte User ist nun ein Admin!`, a.id)
}

async function promoteme(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
    var promotemeid = a.sender.id
    var promotemegroupid = a.args[0]
    await b.promoteParticipant(promotemegroupid, promotemeid)
    await b.reply(a.from, `Du bist nun ein Admin in dieser Gruppe!`, a.id)

}
async function selfpromote(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)
    // var isGroupOwner = a.chat.groupMetadata.owner ? a.sender.id : false


    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!isLeitung /* && !isGroupOwner */) return await b.reply(a.from, eng.GroupCreatorOnly(), a.id)
    if (!a.isBotGroupAdmins) return await b.reply(a.from, eng.botNotAdmin(), a.id)
    if (a.groupAdmins.includes(a.sender.id)) return await b.reply(a.from, `Du bist bereits ein Admin`, a.id)
    await b.promoteParticipant(a.groupId, a.sender.id)
    await b.reply(a.from, `Du hast dich selbst zu einem Admin ernannt!`, a.id)

}

module.exports = {
    promote,
    promoteme,
    selfpromote
}
