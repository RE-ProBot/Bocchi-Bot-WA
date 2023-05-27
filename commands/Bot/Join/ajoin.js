async function ajoin(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

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
    await a.db.addGroupinfoMitWert('welcome', { 'id': gcInfoGroupId, 'wert': 0 })
    await a.db.addGroupinfoMitWert('kickfilter', { 'id': gcInfoGroupId, 'wert': 0 })
    await b.joinGroupViaLink(a.url).then(async (groupid) => {
        await a.sleep(1500)
        await b.sendText(groupid, `Hallo das Teammitglied ${a.sender.username} hat mich in die Gruppe geschickt. \n\nViel Spaß.\n\n_Information! Alle Gruppeneinstellungen sind wie vorher außer welcome siehe ${a.prefix}gi_`)
    })
    await b.reply(a.from, eng.ok(), a.id)

}

module.exports = {
    ajoin
}