async function datadelete(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    if (a.isGroupMsg) return await b.reply(a.from, eng.pcOnly(), a.id)
    if (!isRegistered) return await b.reply(a.from, `Du bist noch Nicht registriert!`, a.id)
    if (a.args[0] === 'confirm') {
        await a.db.removeId('registered', a.sender.id)
        await a.db.removeId('premium', a.sender.id)
        await a.db.removeId('level', a.sender.id)
        await b.sendText(a.from, `Erfolgreich *Alle* Daten gelöscht`)
    } else {
        await b.sendText(a.from, `Bitte bestätige mit ${a.prefix}datadelete confirm. \nBeim bestätigen werden alle Informationen *unwideruflich* von dir gelöscht\n- _Level/xp_\n- _Premium_\n- _Registrierung_\n\n_Möchtest du allerdings nur deinen Namen ändern probiere -> ${a.prefix}unregister_`)
    }

}
async function odatadelete(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
    if (a.args[0] === 'confirm') return await b.reply(a.from, 'Nenne mir bitte die Numer bei der die Daten gelöscht werden sollen.', a.id)
    var datadeleteowner = a.args[0]
    if (a.args[1] === 'confirm') {
        await a.db.removeId('registered', datadeleteowner)
        await a.db.removeId('premium', datadeleteowner)
        await a.db.removeId('level', datadeleteowner)
        await b.sendText(a.from, `Erfolgreich *Alle* Daten gelöscht`)
    } else {
        await b.sendText(a.from, `Bitte bestätige mit ${a.prefix}odatadelete ${a.args[0]} confirm. \nBeim bestätigen werden alle Informationen *unwideruflich* von ${a.args[0]} gelöscht\n- _Level/xp_\n- _Premium_\n- _Registrierung_\n`)
    }

}

module.exports = {
    datadelete,
    odatadelete
}