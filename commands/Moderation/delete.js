async function deleteMsg(a, b, eng) {

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!a.isGroupAdmins && !isTeam) return b.reply(a.from, eng.adminOnly(), a.id)
    if (!a.quotedMsg) return await b.reply(a.from, eng.wrongFormat(), a.id)
    if (!a.quotedMsgObj.fromMe) return await b.reply(a.from, eng.wrongFormat(), a.id)
    await b.deleteMessage(a.quotedMsgObj.chatId, a.quotedMsgObj.id, false)


} module.exports = {
    deleteMsg
    }