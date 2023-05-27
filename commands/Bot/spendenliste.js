async function spendenlist(a, b) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    var leaderspenden = await a.db.getLeader('spenden', 'betrag', 25);
    var leaderboardspenden = `── *「 🏆 SPENDENLISTE 🏆 」* ──\n*Top: 25*\n\n*_Ihr wollt auf die Liste? ${a.prefix}spenden_*\n\n`
    try {
        for (var i = 0; i < leaderspenden.length; i++) {
            var leadernamespenden = (await a.db.getId('registered', leaderspenden[i].id)).name
            if (isLeitung) {
                leaderboardspenden += `${i + 1}. Name: ${leadernamespenden}\nwa.me/${leaderspenden[i].id.replace('@c.us', '')}\n➸ *Betrag*: ${leaderspenden[i].betrag}€\n\n`
            } else {
                leaderboardspenden += `${i + 1}. Name: ${leadernamespenden}\n➸ *Betrag*: ${leaderspenden[i].betrag}€ \n\n`
            }
        }
    } catch (err) {
        console.error(err)
    }
    await b.reply(a.from, `${leaderboardspenden}\n`, a.id)
}

module.exports = {
    spendenlist
}