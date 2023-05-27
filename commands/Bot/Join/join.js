async function join(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    var cd = 900000
    var timername = 'timerjoin'
    const timerJoin = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
    if (timerJoin !== undefined && cd - (Date.now() - timerJoin) > 0) {
        const time = a.ms(cd - (Date.now() - timerJoin))
        await b.reply(a.from, eng.daily(time), a.id)
    } else {
        var getGroupzjoin = await b.getAllGroups()
        if (a.ar.length > 1) return await b.reply(a.from, 'Nur ein Link bitte!', a.id)
        if (!a.q.includes('chat.whatsapp.com/')) return await b.reply(a.from, 'Dies ist kein Gruppenlink!', a.id)
        var checklinkjoin = a.args[0]
        const gcInfocheckjoin = await b.inviteInfo(checklinkjoin) //Gruppenbeschreibung
        if (gcInfocheckjoin.size < a.memberLimit) return await b.reply(a.from, `Diese Gruppe ist zu klein!\nVorhandene Member: ${gcInfocheckjoin.size}\nVorrausgesetzte Member: ${a.memberLimit}\n\nWenn sich nach deiner Anfrage erneut unter 15 Teilnehmer sich befinden, wird diese Anfrage abgelehnt!\n\n_PS: Der Bot Funktioniert auch im Privatchat, 1 Personen Gruppen sind also nicht nötig!_\n\n_Sollte dies eine Vorgrupe sein und ihr wollt euch für HGVG registrieren probiert ${a.prefix}joinreq vg-link hg-link_`, a.id)
        var isBlacklist = await a.db.containsNeu('blacklist', { 'groupid': gcInfocheckjoin.id })
        var isBlacklistText = isBlacklist ? '*JA*' : '*NEIN*'
            //fuck nicht ab 
        //console.log(gcInfocheckjoin)
        await b.sendText(a.DevGroupID, `*── 「 JOIN ANFRAGE 」 ──*\nIn ${a.name || a.formattedTitle}\n\nVon: wa.me/${a.sender.id.replace('@c.us', '')}\n\nGruppenlink\n${a.q}\n\nGruppenname: ${gcInfocheckjoin.subject}\nGruppenbeschreibung:\n${gcInfocheckjoin.groupMetadata.desc}\nBlacklisted: ${isBlacklistText}\nTeilnehmer in der Gruppe: ${gcInfocheckjoin.groupMetadata.size}\n\nIch bin aktuell in ${getGroupzjoin.length - 3} + 3 / ${a.groupLimit}`)
        await b.reply(a.from, 'Der Gruppenlink wurde an uns weitergeleitet.\nBitte habt ein wenig Geduld!', a.id)
        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
        await a.daily.addLimit(timername, a.sender.id)
    }
}

module.exports = {
    join
}