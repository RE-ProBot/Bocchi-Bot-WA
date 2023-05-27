async function ojoin(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    const isRegistered = await a.db.containsId('registered', a.sender.id)
    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    const ojoingrpid = a.q
    const gcInfo4 = await b.inviteInfo(ojoingrpid) //Gruppenbeschreibung
    const config = b.getConfig()
    //fuck nicht ab 
    //console.log(gcInfo4.groupMetadata)
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
            await a.sleep(2500)
            await b.joinGroupViaLink(a.url).then(async (groupid) => {
                await a.sleep(1500)
                await b.sendText(groupid, `Hallo das Teammitglied ${a.sender.username} hat mich in die Gruppe geschickt. \n\nViel Spaß.\n\n_Information! Alle Gruppeneinstellungen sind wie vorher außer welcome und kickfilter siehe ${a.prefix}gi_`)
            })
            await b.reply(a.from, eng.ok(), a.id)
        } catch (e) {
            await b.reply(a.from, 'Der Bot ist der Gruppe nicht beigetreten!\nDer Grund könnte sein...\n\nDer bot ist bereits drinne oder drinne gewesen!\noder der Link ist ungültig!', a.id)
        }
    }
}

module.exports = {
    ojoin
}