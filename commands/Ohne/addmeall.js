async function addmeall(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)
    
    if (!isOwner) return await b.reply(a.from, eng.ownerOnly(), a.id)
    var getGroupzgrouplist123 = await b.getAllGroups() // Hole GruppenAnzahl/Anzahl GruppenIDs der offenen Chats
    var addmeallGruppen = getGroupzgrouplist123.length
    var addmeallGruppenHinzugefuegt = 0
    var addmeallKeinAdmin = 0
    var addmeallBereitsHinzugefuegt = 0
    for (let i = 0; i < addmeallGruppen; i++) {
        var gruppenid123 = getGroupzgrouplist123[i].groupMetadata.id
        const groupAdmins123 = await b.getGroupAdmins(gruppenid123)
        const isBotGroupAdmins123 = groupAdmins123.includes(a.botNumber)
        if (isBotGroupAdmins123) {
            try {
                await b.addParticipant(getGroupzgrouplist123[i].groupMetadata.id, a.sender.id)
                await a.sleep(1000)
                await b.promoteParticipant(getGroupzgrouplist123[i].groupMetadata.id, a.sender.id)
                await b.sendTextWithMentions(getGroupzgrouplist123[i].groupMetadata.id, `@${a.sender.id.replace('@c.us', '')} ist ein Owner und das ist ein experiment`)
                addmeallGruppenHinzugefuegt++
            } catch (e) {
                addmeallBereitsHinzugefuegt++
                await b.promoteParticipant(getGroupzgrouplist123[i].groupMetadata.id, a.sender.id)
            }
        } else {
            addmeallKeinAdmin++
        }
    }
    await b.sendText(a.from, `Erfolgreich in ${addmeallGruppenHinzugefuegt} Gruppen hinzugefügt\nKein Admin: ${addmeallKeinAdmin}\nBereits hinzugefügt: ${addmeallBereitsHinzugefuegt}\n`)

}

module.exports = {
    addmeall
}