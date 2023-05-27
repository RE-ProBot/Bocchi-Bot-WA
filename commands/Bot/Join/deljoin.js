async function deljoin(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    const isRegistered = await a.db.containsId('registered', a.sender.id)
    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    const ojoingrpid = a.args[0]
    const gcInfo4 = await b.inviteInfo(ojoingrpid) //Gruppenbeschreibung
    const config = b.getConfig()
    var gcInfoGroupId = ''
    if (config.multiDevice == true || config.multiDevice == 'true') {
        gcInfoGroupId = gcInfo4.groupMetadata.id
    } else {
        gcInfoGroupId = gcInfo4.id
    }
    if (a.isMe) {
        try {
            await a.db.addGroupinfoMitWert('welcome', { 'id': gcInfoGroupId, 'wert': 0 })
            await a.db.addGroupinfoMitWert('kickfilter', { 'id': gcInfoGroupId, 'wert': 0 })
            await a.sleep(10000)
            await b.sendText(a.from, '_Wird in kürze abgelehnt (10sec)._')
            await b.joinGroupViaLink(a.url).then(async (groupid) => {
                await b.sendText(groupid, `Hallo diese Gruppe wurde abgelehnt vom BocchiBot-Team!\n
Vorraussetzungen für Gruppen:

Keine Klassengruppen
Keine Reine Pornogruppen (es gibt phub und co?)
Keine rpg & crash Gruppe
Keine Werbegruppe
Keine Nur für bot erstellte Gruppe
Keine Vorgruppe
Ausnahme: vg-hg(derzeit werden keine Angenommen
Minimum Teilnehmerzahl 15
änderungen jederzeit möglich`).then(async () => {
                    await a.sleep(10000)
                    await b.leaveGroup(groupid).then(async () => {
                        await b.deleteChat(groupid)
                    })
                })
            })
            await b.reply(a.from, 'Erfolgreich abgelehnt!', a.id)
        } catch (e) {
            await b.reply(a.from, 'Der Bot ist der Gruppe nicht beigetreten!\nDer Grund könnte sein...\n\nDer bot ist bereits drinne oder drinne gewesen!\noder der Link ist ungültig oder es gab einen Fehler!', a.id)
            console.log(e)
        }
    }
}

module.exports = {
    deljoin
}