async function grouplist(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)
    if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
    var getGroupzgrouplist = await b.getAllGroups() // Hole GruppenAnzahl/Anzahl GruppenIDs der offenen Chats
    let txtGcgrouplist = `── 「 GROUP LIST 」 ──\nALL GROUPS: ${getGroupzgrouplist.length} / ${a.groupLimit}`
    for (let i = 0; i < getGroupzgrouplist.length; i++) {
        var teilnehmerzahl1 = getGroupzgrouplist[i].groupMetadata.participants.length
        var gruppenid = getGroupzgrouplist[i].groupMetadata.id
        txtGcgrouplist += `\n\n❏ Name: ${getGroupzgrouplist[i].name}\n❏ Unread messages: ${getGroupzgrouplist[i].unreadCount} messages\nMit: ` + teilnehmerzahl1 + `Teilnehmer.\n` + gruppenid
    }
    await b.sendText(a.from, txtGcgrouplist)

}

async function grouplistlow(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (a.args.length < 1) return await b.reply(a.from, `Du musst eine Zahl angeben`, a.id)
    var low = a.args[0]
    if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
    var getGroupzgrouplistlow = await b.getAllGroups()
    for (let i = 0; i < getGroupzgrouplistlow.length; i++) {

        var gruppenlinkZlow = null
        if (getGroupzgrouplistlow[i].groupMetadata.participants.filter(
            teilnlow => teilnlow.id._serialized === a.botNumber && teilnlow.isAdmin).length) {
            gruppenlinkZlow = await b.getGroupInviteLink(getGroupzgrouplistlow[i].id)
        }
        gruppenlinkZlow = (gruppenlinkZlow == null) ? 'Kein Admin' : gruppenlinkZlow

        var teilnehmerzahl = getGroupzgrouplistlow[i].groupMetadata.participants.length
        if (teilnehmerzahl >= low) {
        } else {
            await a.sleep(1000)
            await b.sendText(a.from, `\n\n❏ Name: ${getGroupzgrouplistlow[i].name}\n❏Gruppenid: ${getGroupzgrouplistlow[i].id}\n❏ Unread messages: ${getGroupzgrouplistlow[i].unreadCount} messages\nHier sind unter ${low} Leute Drinne!\n❏ Gruppenlink:\n${gruppenlinkZlow}`)
            await a.sleep(1000)
        }
    }
    await b.sendText(a.from, `Keine weiteren Gruppen mit unter ${low} Membern.`)
}

async function grouplistlink(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)

    if (a.isMe) {
        if (!isOwner) return await b.reply(a.from, eng.ownerOnly(), a.id)
        var getGroupzgrouplistlink = await b.getAllGroups() // Hole GruppenAnzahl/Anzahl GruppenIDs der offenen Chats
        let txtGcgrouplistlink = `── 「 GROUP LIST 」 ──\nALL GROUPS: ${getGroupzgrouplistlink.length} / ${a.groupLimit}`
        var first = true;
        for (let i = 0; i < getGroupzgrouplistlink.length; i++) {
            console.log(getGroupzgrouplistlink[i].groupMetadata)
            var teilnehmerzahl = getGroupzgrouplistlink[i].groupMetadata.participants.length
            var gruppenlinkZ = null
            if (getGroupzgrouplistlink[i].groupMetadata.participants.filter(
                teiln => teiln.id._serialized === a.botNumber && teiln.isAdmin).length) {
                gruppenlinkZ = await b.getGroupInviteLink(getGroupzgrouplistlink[i].id)
            }
            gruppenlinkZ = (gruppenlinkZ == null) ? 'Kein Admin' : gruppenlinkZ
            txtGcgrouplistlink += `\n\n❏ Name: ${getGroupzgrouplistlink[i].name}\n❏ Unread messages: ${getGroupzgrouplistlink[i].unreadCount} messages\nMit:` + teilnehmerzahl + `Teilnehmer.\n` + gruppenlinkZ
            if (i % 14 == 0 && !first) {
                await b.sendText(a.from, txtGcgrouplistlink);
                txtGcgrouplistlink = `── 「 GROUP LIST 」 ──\nALL GROUPS: ${getGroupzgrouplistlink.length} / ${a.groupLimit}`
            }
            first = false;
        }
        if (getGroupzgrouplistlink.length % 14 !== 0) {
            await b.sendText(a.from, txtGcgrouplistlink)
        }
    }

}

module.exports = {
    grouplist,
    grouplistlow,
    grouplistlink
}