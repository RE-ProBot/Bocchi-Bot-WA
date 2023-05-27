async function adminmode(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isMute = a.isGroupMsg ? await a.db.groupinfoId('mute', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isTeam) return b.reply(a.from, eng.adminOnly(), a.id)
    if (a.ar[0] === 'enable') {
        if (isMute) return await b.reply(a.from, eng.muteChatOnAlready(), a.id)
        await a.db.setGroupinfoId('mute', a.groupId);
        await b.reply(a.from, eng.muteChatOn(), a.id)
    } else if (a.ar[0] === 'disable') {
        if (!isMute) return await b.reply(a.from, '❌Admin-Modus wurde bereits deaktiviert!❌', a.id)
        await a.db.unsetGroupinfoId('mute', a.groupId);
        await b.reply(a.from, eng.muteChatOff(), a.id)
    }

} module.exports = {
    adminmode
}