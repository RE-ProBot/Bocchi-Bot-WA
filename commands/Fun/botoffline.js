/*async function botoffline(a, b ,eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)
    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if(!isTeam) return await b.reply(a.from, eng.teamOnly(), a.sender.id)
    if(!a.q.includes('/')) return await b.reply(a.from, eng.wrongFormat(), a.sender.id)
    const IDNumber = a.q.substring(0, q.indexOf('/') - 1)
    const Nachricht = a.q.substring(q.lastIndexOf('/') + 2)
    if(a.isMe) {
        if (a.from == '120363038675874425@g.us') {
    a.fs.readFileSync('../Sessions/' + a.args[0] + '.data.json', async function (err) {
        if (err) return await b.sendText(a.from, `Ich konnte keine SessionID mit dem Namen ${a.args[0]} finden.`)
        
    })
   } else {
       await b.sendText(a.from, 'Dies Funktioniert nur in der AdminSupportGruppe!', a.sender.id)
   }
 }
}

module.exports = {
    botoffline
}*/