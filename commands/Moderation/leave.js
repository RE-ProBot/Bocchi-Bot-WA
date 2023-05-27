async function leave(a, b, eng) {

    const isRegistered = await a.db.containsId('registered', a.sender.id)
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)


    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
    await b.sendText(a.from, 'Bye~ 👋')
    await a.sleep(1000)
    await b.leaveGroup(a.groupId)
    await a.db.addGroupinfoMitWert('welcome', { 'id': a.groupId, 'wert': 0 })
    await a.sleep(5000) //Ohne Sleep löscht der nicht die Gruppe, beibehalten ++ Sleep 1000 funktioniert, jedoch mit hohen !ping kann sein das er nicht löscht(kein risiko)
    await b.deleteChat(a.groupId)
    console.log('Ich habe eine Gruppe verlassen und gelöscht!')

}
async function leaveall(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isInhaber = await getRang('Inhaber', a.sender.id, a.db)

    if (!isInhaber) return await b.reply(a.from, eng.ownerOnly(), a.id)
    if (a.isGroupMsg) return await b.reply(a.from, eng.pcOnly(), a.id)
    if (!a.q) return await b.reply(a.from, eng.emptyMess(), a.id)
    const allGroup = await b.getAllGroups()
    for (let gclist of allGroup) {
        await b.sendText(gclist.contact.id, a.q)
        await a.sleep(2500)
        await b.leaveGroup(gclist.contact.id)
        await a.sleep(2500)
        await b.deleteChat(gclist.contact.id)
    }
    await b.reply(a.from, eng.doneOwner(), a.id)

}
async function oleave(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (a.isMe) {
        await a.sleep(2000)
        await b.sendText(a.from, 'Bye~ 👋')
        await a.sleep(1000)
        await b.leaveGroup(a.groupId)
        await a.db.addGroupinfoMitWert('welcome', { 'id': a.groupId, 'wert': 0 })
        await a.sleep(5000)
        await b.deleteChat(a.groupId)
        console.log('Ich habe eine Gruppe verlassen und gelöscht!')
    }

}
async function leaveid(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    if (a.isMe) {
        await b.sendText(a.q, 'Ich wurde von einem /ownerbot aufgefordert die Gruppe zu verlassen.\nBye!')
        await a.sleep(2000)
        await b.leaveGroup(a.q)
        await a.db.addGroupinfoMitWert('welcome', { 'id': a.q, 'wert': 0 })
        await a.sleep(5000)
        await b.deleteChat(a.q)
        await b.sendText(a.from, 'Ich habe eine Gruppe verlassen und gelöscht!')
        console.log('Ich habe eine Gruppe verlassen und gelöscht!')
                console.log(a.q)
    }

}
async function aleaveid(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    await a.sleep(3000)
    await b.sendText(a.q, `Ich wurde von einem ${a.prefix}ownerbot aufgefordert die Gruppe zu verlassen.\nBye!`)
    await a.sleep(3000)
    await b.leaveGroup(a.q)
    await a.db.addGroupinfoMitWert('welcome', { 'id': a.q, 'wert': 0 })
    await a.sleep(5000) //Ohne Sleep löscht der nicht die Gruppe, beibehalten ++ Sleep 1000 funktioniert, jedoch mit hohen !ping kann sein das er nicht löscht(kein risiko)
    await b.deleteChat(a.q)
    await b.sendText(a.from, 'Ich habe eine Gruppe verlassen und gelöscht!')
    console.log('Ich habe eine Gruppe verlassen und gelöscht!')

}
async function glleave(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
    if (a.args.length < 1) return await b.reply(a.from, `Du musst eine Zahl angeben`, a.id)
    var lowleave = a.args[0]
    var getGroupzgrouplistlowleave = await b.getAllGroups() // Hole GruppenAnzahl/Anzahl GruppenIDs der offenen Chats
    for (let i = 0; i < getGroupzgrouplistlowleave.length; i++) { //wie gesagt, geht nicht davor
        var teilnehmerzahlleave = getGroupzgrouplistlowleave[i].groupMetadata.participants.length
        if (teilnehmerzahlleave >= lowleave) {
        } else {
            await a.sleep(3000)
            await b.sendText(getGroupzgrouplistlowleave[i].id, `Ich wurde von einem ${a.prefix}ownerbot aufgefordert die Gruppe zu verlassen.\nBye!`)
            await a.sleep(3000)
            await b.leaveGroup(getGroupzgrouplistlowleave[i].id)
            console.log(getGroupzgrouplistlowleave)
            await a.sleep(1000)
            await b.sendText(a.from, `❏ Name: ${getGroupzgrouplistlowleave[i].name} erfolgreich verlassen und gelöscht`)
            await a.sleep(1000)
            await b.deleteChat(getGroupzgrouplistlowleave[i].id)
            console.log(`Ich habe eine Gruppe verlassen und gelöscht! ❏ Name: ${getGroupzgrouplistlowleave[i].name}`)
        }
    }
    await b.sendText(a.from, `Keine Gruppen unter ${lowleave} Member gefunden`)

}

    module.exports = {
        leave,
        leaveall,
        oleave,
        leaveid,
        aleaveid,
        glleave
    }
    