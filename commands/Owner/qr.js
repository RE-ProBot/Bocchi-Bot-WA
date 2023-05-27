
async function qrtext(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
    await b.sendText(a.from, eng.qrtext())
}
async function resetqr(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    if (a.isMe) {
        //if (a.from == '120363038675874425@g.us' || a.from == '120363021777582596@g.us') {
        if (!a.q) return await b.reply(a.from, `Nenne mir bitte die entsprechende SessionID damit ich dir helfen kann.\n\n_Beachte die Groß und Kleinschreibung!!_`, a.id)
        a.fs.unlink('../Sessions/' + a.args[0] + '.data.json', async function (err) {
            if (err) return await b.sendText(a.from, `Ich konnte keine SessionID mit dem Namen ${a.args[0]} finden.`);
            await b.sendText(a.from, `Die SessionID mit dem Namen ${a.args[0]} wurde gelöscht.\nUnd der Bot wird neugestartet!`)
            await a.sleep(1000)
                .then(async () => b.kill())
                .catch(() => new Error('Target closed.'))
            console.log(`[WARN] SESSION ID:${a.args[0]} wurde von ${a.sender.id} gelöscht!`)
        });
    //} else {
    //    await b.reply(a.from, `Nur in der AdminSupportGruppe!`, a.id)
    //}
    }

}
async function sendqr(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)
    var isHoster = await getRang('Hoster', a.sender.id, a.db)

    if (!isTeam && !isHoster) return await b.reply(a.from, eng.HostOnly(), a.id)
    if (a.isMe) {
        //if (a.from == '120363038675874425@g.us' || a.from == '120363021777582596@g.us') {
            if (!a.q) return await b.reply(a.from, `Nenne mir bitte die entsprechende SessionID damit ich dir helfen kann.`, a.id)
            try {
                await b.sendFile(a.from, `./qrcodes/${a.args[0]}.png`, `[3]Hier ist der QR-Code für die SessionID ${a.args[0]}`)
                await b.sendText(a.from, `Sollte der QR-Code ungültig sein, forderer einen neuen an nach ~20Sekunden.\nAlternativ wurde die vorherige Sitzung noch nicht gelöscht, melde dich dazu bei Person mit dem Rang isLeitung oder höher.`)
            } catch (err) {
                await b.reply(a.from, `Der QR-Code für ${a.args[0]} konnte nicht gefunden werden. Es liegt ein Fehler vor.`, a.id)
            }
        //} else {
        //    await b.reply(a.from, `Nur in der AdminSupportGruppe!`, a.id)
        //}

    }
}

async function spamqr(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)
    var isHoster = await getRang('Hoster', a.sender.id, a.db)

    if (!isTeam && !isHoster) return await b.reply(a.from, eng.HostOnly(), a.id)
    if (a.isMe) {
        //if (a.from == '120363038675874425@g.us' || a.from == '120363021777582596@g.us') {
            if (!a.q) return await b.reply(a.from, `Nenne mir bitte die entsprechende SessionID damit ich dir helfen kann.`, a.id)
            a.db.run("UPDATE hosts SET scanSpam = 1 WHERE id =" + a.args[0])
            b.reply(a.from, `Der Scan Spam wurde für die SessionID ${a.args[0]} aktiviert.`, a.id)
        //} else {
        //    await b.reply(a.from, `Nur in der AdminSupportGruppe!`, a.id)
        //}

    }
}

module.exports = {
    qrtext,
    resetqr,
    sendqr,
    spamqr
}
