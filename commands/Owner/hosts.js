async function hosts(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)
        var isTeam = await getRang('isTeam', a.sender.id, a.db)
        if (a.from == '120363038675874425@g.us') {
    if (a.isMe) {
        if (a.ar[0] === 'add') {
            if (a.args.length === 1) return b.reply(a.from, `Bitte gib eine SessionId  an`, a.id)
            if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
//            if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
            try {
                var hostsmdid = 'true'
                await a.db.addNoCatch('hosts', { 'id': a.args[1], 'md': hostsmdid })
                await b.reply(a.from, `*── 「 HOSTS 」 ──*\nSessionId *${a.args[1]}* mit MD: *${hostsmdid}* wurde hinzugefügt✔\nBot wird nun neugestartet!\n\n_Denk an ${a.prefix}bocchi add wenn der bot Online ist(markiere den Bot!)_`, a.id)
                await a.sleep(1000)
                    .then(async () => b.kill())
                    .catch(() => new Error('Target closed.'))
            } catch (e) {
                await b.reply(a.from, `*── 「 HOSTS 」 ──*\nDiese SessionId gibt es bereits!❌`, a.id)
            }
        } else if (a.ar[0] === 'remove') {
            if (!isLeitung) return await b.reply(from, eng.leitungOnly(), id)
            try {
                await a.db.removeId('hosts', a.args[1])
                await a.db.removeId('isBocchiBot', a.args[1])
                await b.reply(a.from, `*── 「 HOSTS 」 ──*\n❌SessionId und Bocchi Eintrag wurde entfernt❌\nSessionId: ${a.args[1]}\n_Bot wird Neugestartet!_`, a.id)
                await a.sleep(1000)
                    .then(async () => b.kill())
                    .catch(() => new Error('Target closed.'))

            } catch (err) {
                console.log(err)
            }
        } else if (a.ar[0] === 'checkrules' || a.ar[0] === 'check') {
            if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
            const dataJson = await a.db.getFromAll('hosts')
            var showrules = ''
            for (let i = 0; i < dataJson.length; i++) {
                showrules += `*${i + 1}.* _*SessionId:*_ ` + dataJson[i].id + ' - MD: ' + dataJson[i].md + '\n'
            }
            await b.reply(a.from, `*── 「 HOSTS 」 ──*\n\n*JEDER HÖCHSTENS 3*\nHier sind die Aktuellen SessionId's:\n${showrules}`, a.id)
        } else {
            await b.reply(a.from, `Hosts`, a.id)
        }
    }
} else {
    await b.reply(a.from, `Nur in der AdminSupportGruppe!`, a.id)
}

} module.exports = {
    hosts
}
