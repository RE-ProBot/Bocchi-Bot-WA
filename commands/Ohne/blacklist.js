async function blacklist(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/gi)
    var found = []
    try {
        found = a.message.body.match(isUrl)
    } catch (err) {

    }


    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    if (a.ar[0] == 'how') {
        await b.reply(a.from, `Bitte schreibe ${a.prefix}blacklist und setze dahinter den link der Gruppe der auf die liste Soll.`, a.id)
    } else if (a.ar[0] == 'add') {
        var cnz = 0
        var cnzBereits = 0
        //=================== Hole alle IDs von Links und checke auf valid===================
        var di;
        for (const LinKz of found) {
            await b.inviteInfo(LinKz).then(async function (resulte) {
                di = resulte.id
                if (di == null) { //Reset|Not Valid
                    console.log(`ID ERROR by ID x${cnz} @${di}`)
                } else {
                    const blistForEach = await a.db.containsNeu('blacklist', { 'groupid': di })
                    if (!blistForEach) {
                        await a.db.add('blacklist', { 'groupid': di })
                        cnz++
                        await a.sleep(1000)
                        console.log(`_Added ID x${cnz + 1} to Blacklist`)
                    } else {
                        cnzBereits++
                    }
                }
            })
        }
        await b.reply(a.from, `____ *BLACKLIST* ____\n\nMaster\nAlle Links zur Blacklist hinzugefügt\n*${cnz}* IDs zur Blacklist hinzugefügt`, a.id)
        if (cnzBereits > 0) {
            await b.reply(a.from, `____ *BLACKLIST* ____\n\nMaster\nNicht alle Links zur Blacklist hinzugefügt\n*${cnzBereits}* IDs bereits in Blacklist hinzugefügt`, a.id)
        }
    } else if (a.ar[0] == 'remove') {
        var blremoveid = a.args[1]
        var blremoveidlink = await b.inviteInfo(blremoveid)
        await a.db.removeNeu('blacklist', { 'groupid': blremoveidlink.id })
        await b.sendText(a.from, `Erfolgreich ${blremoveidlink.id} aus Blacklist gelöscht`)
    }

}

module.exports = {
    blacklist
}