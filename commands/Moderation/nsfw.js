
async function nsfw(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isNsfw = a.isGroupMsg ? await a.db.groupinfoId('nsfw', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (a.ar[0] === 'enable') {
        if (isNsfw) return await b.reply(a.from, eng.nsfwAlready(), a.id)
        await a.db.setGroupinfoId('nsfw', a.groupId);
        await b.reply(a.from, eng.nsfwOn(), a.id)
    } else if (a.ar[0] === 'disable') {
        if (!await a.db.getGroupinfoId('nsfw', a.groupId)) {
            await b.reply(a.from, '❌NSFW ist bereits aus!❌', a.id)
        } else {
            await a.db.unsetGroupinfoId('nsfw', a.groupId);
            await b.reply(a.from, eng.nsfwOff(), a.id)
        }
    } else {
        await b.reply(a.from, `Verwendung:\n${a.prefix}nsfw\n_Zeigt Verwendung_\n\n${a.prefix}nsfw enable zum aktivieren\n${a.prefix}nsfw disable zum deaktivieren\n`, a.id)
    }
} module.exports = {
    nsfw
}