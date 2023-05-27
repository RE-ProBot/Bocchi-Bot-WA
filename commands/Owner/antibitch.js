async function antiBitch(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (a.ar[0] === 'add') {
        if (a.args.length === 1) return b.reply(a.from, `Bitte gib einen Bitch link an`, a.id)
        if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
        try {
            await a.db.add('antibitch', { url: a.ar[1] })
            await b.reply(a.from, `*── 「 ANTI BITCH 」 ──*\n✔Regel wurde hinzugefügt✔\nRegel: ${a.ar[1]}`, a.id)
        } catch (err) {
            console.log(err)
        }
    } else if (a.ar[0] === 'remove') {
        if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
        try {
            await a.db.removeNeu('antibitch', { url: a.ar[1] })
            await b.reply(a.from, `*── 「 ANTI BITCH 」 ──*\n❌Regel wurde entfernt❌\nRegel: ${a.ar[1]}`, a.id)
        } catch (err) {
            console.log(err)
        }
    } else if (a.ar[0] === 'checkrules' || a.ar[0] === 'check') {
        const dataJson = await a.db.getFromAll('antibitch')
        var showrules = ''
        for (let i = 0; i < dataJson.length; i++) {
            showrules += 'URL: ' + dataJson[i].url + '\n'
        }
        await b.reply(a.from, `*── 「 ANTI BITCH 」 ──*\n\nHier sind die Aktuellen Links:\n${showrules}`, a.id)
    } else {
        await b.reply(a.from, `Verwendung:\n${a.prefix}antibitch\n_Zeigt Verwendung_\n\nAnti-Bitch ist standartmäßig an!\n\n${a.prefix}antibitch check\n_Zeigt Aktuelle Links an._\n\n${a.prefix}antibitch add/remove\n_Fügt bzw. entfernt Links (Owner Only)_`, a.id)
    }




} module.exports = {
    antiBitch
}