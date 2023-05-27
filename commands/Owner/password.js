async function passwdsetzen(a, b ,eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)

    if (a.isGroupMsg) return await b.reply(a.from, eng.pcOnly(), a.id)
    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    password = a.args[0]
    try {
        await a.db.addNoCatch('password', { 'id': a.sender.id, 'keyword': password })
        await b.reply(a.from, `Passwort erfolgreich gesetzt!\nDein Passwort ist: ${password}`, a.id)
    } catch (e) {
        await b.reply(a.from, `Du hast bereits ein Passwort gesetzt!`, a.id)
    }

}
async function password(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)

    if (!isOwner) return await b.reply(a.from, eng.ownerOnly(), a.id)
    var passwdid = a.q.replace(/^0+/, '49').replace(/\D/g, '') + '@c.us'
    const passwordid = await a.db.getId('password', passwdid)
    await b.reply(a.from, `Das Passwort von ${a.q} lautet: ${passwordid.keyword}`, a.id)

}
module.exports = {
    passwdsetzen,
    password
}