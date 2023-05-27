async function grpID(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupAdmins && !isTeam) return b.reply(a.from, eng.adminOnly(), a.id)
    var checkgroupid;
    if (!a.ar[0]) {
        checkgroupid = a.from
        await b.reply(a.from, a.from + '', a.id)
    } else {
        checkgroupid = a.q
        const gcInfo3 = await b.inviteInfo(checkgroupid) //Gruppenbeschreibung
        await b.reply(a.from, gcInfo3.groupMetadata.id + '', a.id)
    }


} module.exports = {
    grpID
}