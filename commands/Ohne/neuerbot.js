async function neuerbot(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
    // if (isMe) {
    var neuerbot = ''
    if (a.args.length == 1) {
        neuerbot = 'Bocchi_' + a.q
    } else {
        neuerbot = 'Bocchi'
    }
    //Status & NameSetzen!
    await b.setMyStatus('Bocchi - Verwende /menu um den Bot zu starten')
    // await b.setMyName('neuerbot') BROKE
    //Betrete Gruppen: Admin Support & Befehle Error & Developer
    await b.joinGroupViaLink(a.AdsGrp)
    await a.sleep(1000) //Safety
    await b.joinGroupViaLink(a.ErrGrp)
    await a.sleep(1000) //Safety
    await b.joinGroupViaLink(a.DevGrp)
    await a.sleep(1000) //Safety
    await b.joinGroupViaLink(a.RegGrp)
    await a.sleep(1000) //Safety
    await b.sendText(a.AdsGroupID, `Hallo ich bin der Neue Bot *[${a.sessionId}]*, danke ${a.sender.username}`)
    await b.sendText(a.ErrGroupID, `Hallo ich bin der Neue Bot *[${a.sessionId}]*, danke ${a.sender.username}`)
    await b.sendText(a.DevGroupID, `Hallo ich bin der Neue Bot *[${a.sessionId}]*, danke ${a.sender.username}`)
    await b.sendText(a.RegGroupID, `Hallo ich bin der Neue Bot *[${a.sessionId}]*, danke ${a.sender.username}`)
    await b.sendText(a.from, `── 「 NEW BOT 」 ──\n - Name Selbst setzen\n - Gruppen beigetreten\n - Profilbild gesetzt!\n*Ich bin nun einsatzbereit für den Außendienst!*`)

}

module.exports = {
    neuerbot
}