async function tog(a, b) {
    await b.sendText(a.from, await a.eng.ownerGruppen(a, b))
}

async function oog(a, b) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)
    if (!isOwner) return await b.reply(a.from, a.eng.ownerOnly(), a.id)
    const groupList = await b.getAllGroups()
    let txt = await a.eng.ownerGruppen(a, b);
    for (let chat_obj of groupList) {
        var grpid = chat_obj.id
        if (!chat_obj.isReadOnly) {
            if (chat_obj.id != '120363038675874425@g.us' || chat_obj.id != '120363039259018408@g.us' || chat_obj.id != '491746583474-1629738018@g.us' || chat_obj.id != '120363022360920817@g.us') {
                await b.sendText(grpid, txt)
            }
        }
        await a.sleep(1000)
    }
    await b.sendText(a.from, 'Oog Abgeschlossen!', a.id)
}

async function og(a, b) {
    await b.sendText(a.from, await a.eng.ownerGruppen(a, b))
}

module.exports = {
    og,
    oog,
    tog
}
