async function antibeleidigung(a, b ,eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isAntibeleidigung = a.isGroupMsg ? await a.db.groupinfoId('antibeleidigung', a.groupId) : false
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (a.ar[0] === 'enable') {
        if (isAntibeleidigung) return await b.reply(a.from, eng.AntibeleidigungAlready(), a.id)
        if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
        if (!a.isBotGroupAdmins) return await b.reply(a.from, eng.botNotAdmin(), a.id)
        await a.db.setGroupinfoId('antibeleidigung', a.groupId);
        await b.reply(a.from, eng.AntibeleidigungOn(), a.id)
    } else if (a.ar[0] === 'disable') {
        if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
        if (!await a.db.getGroupinfoId('antibeleidigung', a.groupId)) {
            await b.reply(a.from, '❌Antibeleidigung ist bereits aus!❌', a.id)
        } else {
            await a.db.unsetGroupinfoId('antibeleidigung', a.groupId);
            await b.reply(a.from, eng.AntibeleidigungOff(), a.id)
        }
    } else if (a.ar[0] === 'add') {
        if (a.args.length === 1) return b.reply(a.from, `Bitte gib eine Beleidigung an`, a.id)
        if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
        if (!a.isBotGroupAdmins) return await b.reply(a.from, eng.botNotAdmin(), a.id)
        if (!isAntibeleidigung) return await b.reply(a.from, eng.notAntibeleidigung(), a.id)
        try {
            if (a.ar[1].length !== 0) {
                for (let beleidigung of a.ar[1].split(',')) {
                    let beleidigungTrim = beleidigung.trim();
                    if (beleidigungTrim.length >= 3) {
                        try {
                            await a.db.addNoCatch('antibeleidigung', { 'id': a.from, 'beleidigung': beleidigungTrim })
                            await b.reply(a.from, `*── 「 ANTIBELEIDIGUNG 」 ──*\n✔Beleidigung wurde hinzugefügt✔\nBeleidigung: ${beleidigungTrim}`, a.id)
                        } catch (e) {
                            //ignoriert
                        }
                    } else {
                        await b.reply(a.from, `*── 「 ANTIBELEIDIGUNG 」 ──*\n❌Hinter jedem "Komma" mindestens 3 Zeichen❌`, a.id)
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    } else if (a.ar[0] === 'remove') {
        if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
        try {
            if (a.ar[1].length !== 0) {
                for (let beleidigung of a.ar[1].split(',')) {
                    await a.db.removeBeleidigung('antibeleidigung', { 'id': a.from, 'beleidigung': beleidigung.trim() })
                }
            }
            await b.reply(a.from, `*── 「 ANTIBELEIDIGUNG 」 ──*\n❌Beleidigung wurde entfernt❌\nBeleidigung: ${a.ar[1]}`, a.id)
        } catch (err) {
            console.log(err)
        }
    } else if (a.ar[0] === 'checkrules' || a.ar[0] === 'check') {
        const dataJson = await a.db.getFromAllWithWhere('antibeleidigung', { 'id': a.from })//JSON.parse(data)
        var showrules = ''
        for (let i = 0; i < dataJson.length; i++) {
            showrules += 'Beleidigung: ' + dataJson[i].beleidigung + '\n'
        }
        await b.reply(a.from, `*── 「 ANTIBELEIDIGUNG 」 ──*\n\nHier sind die Aktuellen Beleidigungen:\n${showrules}`, a.id)
    } else {
        await b.reply(a.from, `Bei fragen: wa.me/4915223084699\n\nVerwendung:\n${a.prefix}antibeleidigung\n_Zeigt Verwendung_\n\n${a.prefix}antibeleidigung enable zum aktivieren\n${a.prefix}antibeleidigung disable zum deaktivieren\n\n${a.prefix}antibeleidigung check\n_Zeigt Aktuelle Beleidigungen an._\n\n${a.prefix}antibeleidigung add/remove\n_Fügt bzw. entfernt Beleidigungen_`, a.id)
    }

}

module.exports = {
    antibeleidigung
}