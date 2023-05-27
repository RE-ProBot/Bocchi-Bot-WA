async function autosticker(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isAutoStickerOn = a.isGroupMsg ? await a.db.groupinfoId('autosticker', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (a.ar[0] === 'enable') {
        if (isAutoStickerOn) return await b.reply(a.from, eng.autoStikOnAlready(), a.id)
        await a.db.setGroupinfoId('autosticker', a.groupId);
        await b.reply(a.from, eng.autoStikOn(), a.id)
    } else if (a.ar[0] === 'disable') {
        await a.db.unsetGroupinfoId('autosticker', a.groupId);
        await b.reply(a.from, eng.autoStikOff(), a.id)
    } else {
        await b.reply(a.from, `Verwendung:\n/autosticker\n_Zeigt Verwendung_\n\n/autosticker enable zum aktivieren\n/autosticker disable zum deaktivieren\n`, a.id)
    }

} module.exports = {
    autosticker
}