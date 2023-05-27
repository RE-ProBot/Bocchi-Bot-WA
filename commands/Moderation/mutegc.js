async function muteGc(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (!a.isBotGroupAdmins) return b.reply(a.from, eng.botNotAdmin(), a.id)
    if (a.ar[0] === 'enable') {
        await b.setGroupToAdminsOnly(a.groupId, 1)
        await b.sendText(a.from, eng.gcMute())
    } else if (a.ar[0] === 'disable') {
        await b.setGroupToAdminsOnly(a.groupId, 0)
        await b.sendText(a.from, eng.gcUnmute())
    } else {
        await b.reply(a.from, eng.wrongFormat(), a.id)
    }


} module.exports = {
    muteGc
}