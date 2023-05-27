async function verwarnung(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    const isAntibeleidigung = a.isGroupMsg ? await a.db.groupinfoId('antibeleidigung', a.groupId) : false
    if (!isAntibeleidigung) return await b.reply(a.from, eng.notAntibeleidigung(), a.id)
    if (a.ar[0] == 'remove' || a.ar[0] == 'r') {
        if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
        let verwRemoveNr = null
        if (a.quotedMsg) {
            verwRemoveNr = a.quotedMsgObj.sender.id
        } else {
            verwRemoveNr = a.q.trim().replace(/[ +()-]/g, '').replace(/\D/g, '') + '@c.us'
        }
        if (verwRemoveNr != null && verwRemoveNr != '@c.us') {
            await a.db.setVerwNull({ 'groupid': a.from, 'userid': verwRemoveNr })
            await b.reply(a.from, `Verwarnungen dieser Person erfolgreich zurückgesetzt!`, a.id)
        } else {
            await b.reply(a.from, `❌Keine Person übergeben!❌`, a.id)
        }
    } else {
        var verws = await a.db.getVerwList('verwarnungssystem', { 'groupid': a.from }, 'verwarnungsanzahlautomatisch');
        let verwsa = '── *「 ❌ VERWARNUNGEN ❌ 」* ──\n\n'
        try {
            for (let i = 0; i < verws.length; i++) {
                var veirwsname
                var veirwsnameDB = await a.db.getId('registered', verws[i].userid)
                if (typeof veirwsnameDB !== typeof undefined && typeof veirwsnameDB !== typeof 0) {
                    veirwsname = veirwsnameDB.name
                } else {
                    var user = await b.getContact(verws[i].userid)
                    if (user.isBusiness) {
                        veirwsname = user.verifiedName
                    } else {
                        veirwsname = user.pushname
                    }
                }
                if (isLeitung) {
                    verwsa += `${i + 1}. Name: ${veirwsname}\nwa.me/${verws[i].userid.replace('@c.us', '')}\n➸ *Verwarnungen*: ${verws[i].verwarnungsanzahlautomatisch} \n\n`
                } else if (a.isGroupAdmins) {
                    verwsa += `${i + 1}. Name: ${veirwsname}\nwa.me/${verws[i].userid.replace('@c.us', '')}\n➸ *Verwarnungen*: ${verws[i].verwarnungsanzahlautomatisch} \n\n`
                } else {
                    verwsa += `${i + 1}. Name: ${veirwsname}\n➸ *Verwarnungen*: ${verws[i].verwarnungsanzahlautomatisch} \n\n`
                }
            }
        } catch (err) {
            console.error(err)
        }
        await b.reply(a.from, `${verwsa}`, a.id)
    }
}

module.exports = {
    verwarnung
}