async function poll(a, b ,eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isNsfw = a.isGroupMsg ? await a.db.groupinfoId('nsfw', a.groupId) : false
    const isGaming = a.isGroupMsg ? await a.db.groupinfoId('gaming', a.groupId) : false
    const isPremium = await a.db.containsId('premium', a.sender.id)
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)

    var pollauslesen = await a.db.getAll('pollset', 'umfrage')
    var pollauslesens = '';
    pollauslesen.forEach(e => pollauslesens += e);
    var poll = ''
    for (let i = 1; i < a.args.length; i++)
        poll += a.args[i] + " "
    if (a.ar[0] == 'set') {
        if (!isOwner) return await b.reply(a.from, eng.ownerOnly(), a.id)
        try {
            await a.db.addNoCatch('pollset', { id: '1', umfrage: poll })
            await b.reply(a.from, `Umfrage erfolgreich gesetzt`, a.id)//set umfrage
            await b.reply(a.from, `Umfrage bereits gesetzt bitte nutze ${a.prefix}poll delete`, a.id)//set umfrage
        } catch (err) {

        }
    } else if (a.ar[0] == '1') {
        try {
            await a.db.addNoCatch('vote', { id: a.sender.id, vote1: '1', vote2: '0' })
            await b.reply(a.from, `Danke für deine Abstimmung!`, a.id)//stimme (2) +1
        } catch (err) {
            await b.reply(a.from, `Du hast bereits abgestimmt`, a.id)//set umfrage
        }
    } else if (a.ar[0] == '2') {
        try {
            await a.db.addNoCatch('vote', { id: a.sender.id, vote1: '0', vote2: '1' })
            await b.reply(a.from, `Danke für deine Abstimmung!`, a.id)//stimme (2) +1
        } catch (err) {
            await b.reply(a.from, `Du hast bereits abgestimmt`, a.id)//set umfrage
        }
    } else if (a.ar[0] == 'delete') {
        if (!isOwner) return await b.reply(a.from, eng.ownerOnly(), a.id)
        try {
            await a.db.removeIdNoCatch('pollset', '1')
            await a.db.cleartableNoCatch('vote')
            await b.reply(a.from, `Erfolgreich!`, a.id)
        } catch (err) {
            await b.reply(a.from, `Es ist keine Umfrage Vorhanden bitte setze eine mit ${prefix}poll set`, a.id)//set umfrage
        }
    } else {
        var poll1 = await a.db.countWhere('vote', { 'vote1': '1' })
        var poll2 = await a.db.countWhere('vote', { 'vote2': '1' })
        const voteuser = await a.db.count('vote')
        if (!isOwner) {
            b.reply(a.from, '── *「  UMFRAGE  」* ──\n' + pollauslesens + `\n\nVoten mit:\n/poll 1 \noder\n/poll 2\n\nBisher haben ${voteuser} Personen abgestimmt!`, a.id)//gib die gesetzte umfrage aus
        } else {
            b.reply(a.from, '── *「  UMFRAGE  」* ──\n' + pollauslesens + `\n\nVoten mit:\n/poll 1 \noder\n/poll 2\n\nBisher haben ${voteuser} Personen abgestimmt!\nDavon ${poll1} für 1 und ${poll2} für 2`, a.id)//gib die gesetzte umfrage aus
        }
    }

}

module.exports = {
    poll
}