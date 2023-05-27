async function kickfilter(a, b ,eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isKickfilter = a.isGroupMsg ? await a.db.groupinfoId('kickfilter', a.groupId) : false
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (a.ar[0] === 'enable') {
        if (isKickfilter) return await b.reply(a.from, eng.KickfilterAlready(), a.id)
        if (!a.isBotGroupAdmins) return await b.reply(a.from, eng.botNotAdmin(), a.id)
        await a.db.setGroupinfoId('kickfilter', a.groupId);
        await b.reply(a.from, eng.KickfilterOn(), a.id)
    } else if (a.ar[0] === 'disable') {
        if (!await a.db.getGroupinfoId('kickfilter', a.groupId)) {
            await b.reply(a.from, '❌Kickfilter ist bereits aus!❌', a.id)
        } else {
            await a.db.unsetGroupinfoId('kickfilter', a.groupId);
            await b.reply(a.from, eng.KickfilterOff(), a.id)
        }
    } else if (a.ar[0] === 'add') {
        if (!isKickfilter) return await b.reply(a.from, eng.notKickfilter(), a.id)
        if (a.args.length === 1) return b.reply(a.from, `Bitte gib einen Filter an`, a.id)
        if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
        if (!a.isBotGroupAdmins) return await b.reply(a.from, eng.botNotAdmin(), a.id)
        if (a.args[1].startsWith('49') || a.args[1].startsWith(49)) return await b.sendText(a.from, `Du darfst 49* nicht auf die Liste packen. Danke`)
                try {
            if (a.ar[1].length !== 0) {
                for (let filter of a.ar[1].split(',')) {
                    let filterTrim = filter.trim()
                    if (isNaN(filterTrim)) {
                        await b.reply(a.from, `*── 「 KICKFILTER 」 ──*\nKeine Buchstaben im Kickfilter!`, a.id)
                    } else if (filterTrim.includes('4') && filterTrim.length == 1) {
                        await b.reply(a.from, `*── 「 KICKFILTER 」 ──*\nFilter 4 wird ignoriert!`, a.id)
                    } else if (filterTrim.includes('49') && filterTrim.length == 2) {
                        await b.reply(a.from, `*── 「 KICKFILTER 」 ──*\nFilter 49 wird ignoriert!`, a.id)
                    } else if (filterTrim.length >= 1) {
                        try {
                            await a.db.addNoCatch('kickfilter', { 'id': a.from, 'filter': filterTrim })
                            await b.reply(a.from, `*── 「 KICKFILTER 」 ──*\n✔Filter wurde hinzugefügt✔\nFilter: ${filterTrim}`, a.id)
                        } catch (e) {
                            await b.reply(a.from, `*── 「 KICKFILTER 」 ──*\n${filterTrim} schon vorhanden!`, a.id)
                        }
                    } else {
                        await b.reply(a.from, `*── 「 KICKFILTER 」 ──*\n❌Hinter jedem "Komma" mindestens 1 Zeichen❌`, a.id)
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    } else if (a.ar[0] === 'remove') {
        if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
        if (!isKickfilter) return await b.reply(a.from, eng.notKickfilter(), a.id)
        try {
            if (a.ar[1].length !== 0) {
                for (let filter of a.ar[1].split(',')) {
                    await a.db.removeKickfilter('kickfilter', { 'id': a.from, 'filter': filter.trim() })
                }
            }
            await b.reply(a.from, `*── 「 KICKFILTER 」 ──*\n❌Filter wurde entfernt❌\nFilter: ${a.ar[1]}`, a.id)
        } catch (err) {
            console.log(err)
        }
    } else if (a.ar[0] === 'checkrules' || a.ar[0] === 'check') {
        const dataJson = await a.db.getFromAllWithWhere('kickfilter', { 'id': a.from })//JSON.parse(data)
        var showrules = ''
        for (let i = 0; i < dataJson.length; i++) {
            showrules += 'Filter: ' + dataJson[i].filter + '\n'
        }
        await b.reply(a.from, `*── 「 KICKFILTER 」 ──*\n\nHier sind die Aktuellen Filter:\n${showrules}`, a.id)
    } else {
        await b.reply(a.from, `Verwendung:\n${a.prefix}kickfilter\n_Zeigt Verwendung_\n\n${a.prefix}kickfilter enable zum aktivieren\n${a.prefix}kickfilter disable zum deaktivieren\n\n${a.prefix}kickfilter check\n_Zeigt Aktuelle Filter an._\n\n${a.prefix}kickfilter add/remove\n_Fügt bzw. entfernt Filter_`, a.id)
    }
}

module.exports = {
    kickfilter
}