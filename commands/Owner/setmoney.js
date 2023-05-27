async function setmoney(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)
    // if (!isOwner) return await b.reply(a.from, eng.ownerOnly(), a.id)
    let userSetMoneyId;
    let userSetMoneyGeld;
    if (a.quotedMsg) {
        userSetMoneyId = a.quotedMsgObj.sender.id
        userSetMoneyGeld = a.ar[0]
    } else {
        if (a.ar.length < 2 || a.ar.length > 2) return await b.reply(a.from, `An erster Stelle bitte die Nummer, an zweiter Stelle das neue Level.`, a.id)

        userSetMoneyId = a.ar[0].replace('@', '') + '@c.us'
        userSetMoneyGeld = a.ar[1]
    }
    if (isNaN(userSetMoneyGeld) == true) {
        await b.reply(a.from, `Folgendes ist keine Zahl: ${userSetMoneyGeld}`, a.id)
    } else if (isNaN(userSetMoneyGeld) == false) {
        await a.waehrung.setGeld(userSetMoneyId, userSetMoneyGeld)
        await b.sendText(a.from, eng.setMoney(userSetMoneyId.replace('@c.us', ''), userSetMoneyGeld))
    }

}

module.exports = {
    setmoney
}