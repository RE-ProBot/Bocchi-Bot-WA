async function mydata(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    var mydata;
    if (!a.ar[0]) {
        mydata = a.sender.id
    } else {
        if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
        mydata = a.q.replace(/^0+/, '49').replace(/\D/g, '') + '@c.us'
    }
    const isPremiumusercheck = await a.db.containsId('premium', mydata)
    const registered = await a.db.getId('registered', mydata)
    const leveldaten = await a.db.getId('level', mydata)
    await b.reply(a.from, `Deine gespeicherten Daten!\nRegistrierungsdaten:\nName: ${registered.name}\nAlter: ${registered.age}\nZeitpunkt: ${a.moment(registered.time).format('DD.MM.YYYY HH:mm')}\nPremium: ${isPremiumusercheck}\n\nLeveldaten\nXp: ${leveldaten.xp}\nLevel: ${leveldaten.level}`, a.id)
}

module.exports = {
    mydata
}