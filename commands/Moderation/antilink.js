async function antilink(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isDetectorOnLINK = a.isGroupMsg ? await a.db.groupinfoId('antilink', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (!a.isBotGroupAdmins) return await b.reply(a.from, eng.botNotAdmin(), a.id)
    if (a.ar[0] === 'enable') {
        if (isDetectorOnLINK) return await b.reply(a.from, 'Antilink bereits aktiviert!', a.id)
        await a.db.setGroupinfoId('antilink', a.groupId);
/*
        const dataJson = await a.db.getFromAll('groupinfo')//JSON.parse(data)
        for (let i = 0; i < dataJson.length; i++) {
        await b.sendText(a.from, JSON.stringify(dataJson[i]))
        console.log(dataJson[i])
        }
        */
        await b.reply(a.from, eng.detectorOnLINK(), a.id)
    } else if (a.ar[0] === 'disable') {
        if (!await a.db.getGroupinfoId('antilink', a.groupId)) {
            await b.reply(a.from, '❌ANTI-LINK ist bereits aus!❌', a.id)
        } else {
            await a.db.unsetGroupinfoId('antilink', a.groupId);
            await b.reply(a.from, eng.detectorOffLINK(), a.id)
        }
    } else {
        await b.reply(a.from, `Verwendung:\n/antilink\n_Zeigt Verwendung_\n\n/antilink enable zum aktivieren\n/antilink disable zum deaktivieren\n`, a.id)
    }
}

module.exports = {
    antilink
}