async function welcome(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isWelcomeOn = a.isGroupMsg ? await a.db.groupinfoId('welcome', a.groupId) : false
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (a.ar[0] === 'enable') {
        if (isWelcomeOn) return await b.reply(a.from, eng.welcomeOnAlready(), a.id)
        await a.db.setGroupinfoId('welcome', a.groupId);
        await b.reply(a.from, eng.welcomeOn(), a.id)
    } else if (a.ar[0] === 'disable') {
        await a.db.unsetGroupinfoId('welcome', a.groupId);
        await b.reply(a.from, eng.welcomeOff(), a.id)
    } else {
        await b.reply(a.from, `Verwendung:\n${a.prefix}welcome\n_Zeigt Verwendung_\n\n${a.prefix}welcome enable zum aktivieren\n${a.prefix}welcome disable zum deaktivieren\n`, a.id)
    }

} module.exports = {
    welcome
}