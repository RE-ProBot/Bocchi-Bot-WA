async function bitch(a, b ,eng) {

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isLeitung) return await b.reply(a.from, eng.modOnly(), a.id)
    var bitchnrid = a.ar[1] + '@c.us'
    var bitchid = await a.db.getFromAll('testdb')
    if (a.ar[0] == 'add') {
        try {
            await a.db.addNoCatch('testdb', { 'id': bitchnrid, 'bot': '0' })
            await b.reply(a.from, `Erfolgreich ${bitchnrid} in die BLACKLIST-PERSONEN-Liste hinzugefügt als Person!`, a.id)
        } catch (e) {
            await b.reply(a.from, `*── 「 BLACKLIST 」 ──*\nDiese Person gibt es bereits!❌`, a.id)
        }
    } else if (a.ar[0] == 'remove') {
        await a.db.removeNeu('testdb', { 'id': bitchnrid })
        await b.reply(a.from, `Erfolgreich ${bitchnrid} aus der Liste gelöscht.`, a.id)
    } else if (a.ar[0] == 'person') {
        var bitchid = await a.db.getFromAllWithWhere('testdb', { 'bot': '0' });
        var bitchidsanzahl = await a.db.countWhere('testdb', { 'bot': '0' })
        let txt = `*── 「 PERSON-BLACKLIST 」 ──*\n\n`
        txt += `Ich habe seit dem 02.07.2022 12:15 \n${bitchidsanzahl} BLACKLIST-PERSONEN gesammelt\n\n`
        for (let i = 0; i < bitchid.length; i++) {
            txt += '╠➥'
            txt += ` ${bitchid[i].id.replace(/@c.us/g, '')} \n`
        }
        txt += `╚═〘 *B O C C H I  B O T* 〙`
        await b.reply(a.from, `${txt}`, a.id)

    } else if (a.ar[0] == 'bot') {
        var bitchid = await a.db.getFromAllWithWhere('testdb', { 'bot': '1' });
        var bitchidsanzahl = await a.db.countWhere('testdb', { 'bot': '1' })
        let txt = `*── 「 Bitches 」 ──*\n\n`
        txt += `Ich habe seit dem 02.07.2022 12:15 \n${bitchidsanzahl} Bitches gesammelt\n`
        for (let i = 0; i < bitchid.length; i++) {
            txt += '╠➥'
            txt += ` ${bitchid[i].id.replace(/@c.us/g, '')} \n`
        }
        txt += `╚═〘 *B O C C H I  B O T* 〙`
        await b.reply(a.from, `${txt}`, a.id)
    } else {
        await b.reply(a.from, `Verwendung:\n\n/Bitch add\nFügt eine Nummer in die Blacklist-Person. Diese wird bei Beitritt automatisch gekickt\n\n/Bitch remove\nEntfernt eine Nummer aus der Blacklist-Person\n\n/Bitch person \nZeigt dir die aktuellen Nummern in der Person-Blacklist an\n\n/Bitch Bot\nZeigt dir alle gesammelten Pornobotnummern an`, a.id)
    }

}

module.exports = {
    bitch
}