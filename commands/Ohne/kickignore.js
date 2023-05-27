async function kickignore(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isLeitung) return await b.reply(a.from, eng.modOnly(), a.id)
    var kickignoreid = a.ar[1] + '@c.us'
    var kickid = await a.db.getAll('kickfilterignore', 'id')
    var kickids = '';
    kickid.forEach(e => kickids += e + '\n');
    if (a.ar[0] == 'add') {
        await a.db.add('kickfilterignore', { id: kickignoreid })
        await b.reply(a.from, `Erfolgreich ${kickignoreid} in die Kickignore-Liste hinzugefügt.`, a.id)
    } else if (a.ar[0] == 'remove') {
        await a.db.removeId('kickfilterignore', kickignoreid)
        await b.reply(a.from, `Erfolgreich ${kickignoreid} aus der Kickignore-Liste gelöscht.`, a.id)
    } else {
        await b.reply(a.from, `KICKIGNORE \n\n${kickids}`, a.id)
    }

}

module.exports = {
    kickignore
}