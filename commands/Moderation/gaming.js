async function gaming(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isGaming = a.isGroupMsg ? await a.db.groupinfoId('gaming', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (a.ar[0] === 'enable') {
        if (isGaming) return await b.reply(a.from, eng.GamingAlready(), a.id)
        await a.db.setGroupinfoId('gaming', a.groupId);
        await b.reply(a.from, eng.GamingOn(), a.id)
    } else if (a.ar[0] === 'disable') {
        if (!await a.db.getGroupinfoId('gaming', a.groupId)) {
            await b.reply(a.from, 'Gaming ist bereits aus!❌', a.id)
        } else {
            await a.db.unsetGroupinfoId('gaming', a.groupId);
            await b.reply(a.from, eng.GamingOff(), a.id)
        }
    } else {
        await b.reply(a.from, `Verwendung:\n${a.prefix}gaming\n_Zeigt Verwendung_\n\n${a.prefix}gaming enable zum aktivieren\n${a.prefix}gaming disable zum deaktivieren\n`, a.id)
    }
    
} module.exports = {
gaming
}