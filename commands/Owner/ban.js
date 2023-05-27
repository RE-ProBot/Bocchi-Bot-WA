
async function ban(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    if (a.ar.length <= 2) return await b.reply(a.from, `Bitte gib einen Grund an!\nMit mindestens 2 Worten!`, a.id)
    if (a.args[0] == 'del' || a.args[0] == 'add') return await b.reply(a.from, `Bitte nutze\n${a.prefix}ban nummer / grund\n${a.prefix}unban nummer`, a.id)
    if (a.mentionedJidList.length !== 0) {
        for (let benet of a.mentionedJidList) {
            var isTeam = await getRang('isTeam', benet, a.db)
            if (isTeam) return await b.sendText(a.from, 'Kein TEAM BAN MEHR!')
            var bannnn = ''
            for (let i = 1; i < a.args.length; i++)
                bannnn += a.args[i] + " "
            if (benet === a.botNumber) return await b.reply(a.from, eng.wrongFormat(), a.id)
            if (benet === a.sender.id) return await b.reply(a.from, `Warum sollte man sich selber bannen?\nDu weißt schon, wenn du gebannt bist *kannst du dich auch nicht entbannen!*\nBist du depri? komm in die Depressed People Gruppe.\nDen Link dazu findest du unter ${a.prefix}og`, a.id)
            await a.db.add('banned', { 'id': benet, 'grund': bannnn, 'ersteller': a.sender.id, 'BanZeitpunkt': a.timeDE })
            await b.sendText(a.from, `Ban ausgeführt!\n\nUser: wa.me/${benet.replace('@c.us', '')}\nGrund: ${bannnn}`)
        }
    } else {
        var bannnn = ''
        for (let i = 1; i < a.args.length; i++)
            bannnn += a.args[i] + " "
        var bannr = a.ar[0].replace(/^0+/, '49').replace(/\D/g, '') + '@c.us'
        var isTeam = await getRang('isTeam', bannr, a.db)
        if (isTeam) return await b.sendText(a.from, 'Kein TEAM BAN MEHR!')
        await a.db.add('banned', { id: a.ar[0].replace(/^0+/, '49').replace(/\D/g, '') + '@c.us', 'grund': bannnn, 'ersteller': a.sender.id, 'BanZeitpunkt': a.timeDE })
        await b.reply(a.from, `Ban ausgeführt!\n\nUser: wa.me/${bannr}\nGrund: ${bannnn}`, a.id)
    }

}

async function tempban(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    if (a.ar.length < 4) return await b.reply(a.from, `Bitte gib einen Grund an!\nMit mindestens 2 Worten!\n\nVerwende:\n${a.prefix}tempban Nummer Dauer Grund\nz.b: ${a.prefix}tempban 4912345 14d Langeweile`, a.id)
    if (a.args[0] == 'del' || a.args[0] == 'add') return await b.reply(a.from, `Bitte nutze\n${a.prefix}ban nummer / grund\n${a.prefix}unban nummer`, a.id)
    var tmpbanzeit = a.args[1]
    var ablauf = a.helper.getFormattedDateDB(Date.now() + a.toMs(tmpbanzeit))
    var tmpbannnn = ''
    for (let i = 2; i < a.args.length; i++)
        tmpbannnn += a.args[i] + " "
    if (a.mentionedJidList.length !== 0) {
        for (let benet of a.mentionedJidList) {
            var isTeam = await getRang('isTeam', benet, a.db)
            if (isTeam) return await b.sendText(a.from, 'Kein TEAM BAN MEHR!')

            if (benet === a.botNumber) return await b.reply(a.from, eng.wrongFormat(), a.id)
            if (benet === a.sender.id) return await b.reply(a.from, `Warum sollte man sich selber bannen?\nDu weißt schon, wenn du gebannt bist *kannst du dich auch nicht entbannen!*\nBist du depri? komm in die Depressed People Gruppe.\nDen Link dazu findest du unter ${a.prefix}og`, a.id)
            await a.db.add('banned', {
                'id': benet,
                'permant': 0,
                'BanZeitpunkt': a.timeDE,
                'ablauf': ablauf,
                'grund': tmpbannnn,
                'ersteller': a.sender.id
            })
            await b.sendText(a.from, `Ban ausgeführt!\n\nUser: wa.me/${benet.replace('@c.us', '')}\nGrund: ${tmpbannnn}\nBis wann: ${ablauf}\nLänge des Bans: ${tmpbanzeit}`)
        }
    } else {
        var tmpbanid = a.ar[0].replace(/^0+/, '49').replace(/\D/g, '') + '@c.us'
        var isTeam = await getRang('isTeam', tmpbanid, a.db)
        if (isTeam) return await b.sendText(a.from, 'Kein TEAM BAN MEHR!')

        await a.db.add('banned', {
            'id': tmpbanid,
            'permant': 0,
            'BanZeitpunkt': a.timeDE,
            'ablauf': ablauf,
            'grund': tmpbannnn,
            'ersteller': a.sender.id
        })
        await b.reply(a.from, `Ban ausgeführt!\n\nUser: wa.me/${tmpbanid}\nGrund: ${tmpbannnn} \nBis wann: ${ablauf}\nLänge: ${tmpbanzeit}`, a.id)
    }

}

async function unban(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
    const teamcheckdb = await a.db.getId('team', a.sender.id)
    var teamrang = teamcheckdb.typ
    if (a.mentionedJidList.length !== 0) {
        if (a.mentionedJidList[0] === a.botNumber) return await b.reply(a.from, eng.wrongFormat(), a.id)
        await a.db.removeId('banned', a.mentionedJidList[0]);
        //await b.reply(a.from, eng.doneTeam(teamrang), a.id)
        await b.react(a.message.id, '☑️')
    } else {
        await a.db.removeId('banned', a.q.replace(/^0+/, '49').replace(/\D/g, '') + '@c.us');
        //await b.reply(a.from, eng.doneTeam(teamrang), a.id)
        await b.react(a.message.id, '☑️')

    }
}

async function banlist(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
    var ban = await a.db.getFromAll('banned')
    var banid = await a.db.getAll('banned', 'id')
    var bangrund = await a.db.getAll('banned', 'grund')
    var banersteller = await a.db.getAll('banned', 'ersteller')
    var bantime = await a.db.getAll('banned', 'time')
    const banneduserBanlist = await a.db.count('banned')

    var bans = `── *「  BANLIST  」* ──\nInsgesamt gebannte User: ${banneduserBanlist}\n\n`;
    ban.forEach(e => bans += `Id: wa.me/${e.id.replace('@c.us', '')}\nGrund:${e.grund}\nErsteller: wa.me/${e.ersteller.replace('@c.us', '')}\nUhrzeit: ${e.BanZeitpunkt}\n\n`);

    // var banids = '';
    // banid.forEach(e => banids += e + '\n');

    // var bangrunds = '';
    // bangrund.forEach(e => bangrunds += e + '\n');

    // var banerstellers = '';
    // banersteller.forEach(e => banerstellers += e + '\n');

    // var bantimes = '';
    // bantime.forEach(e => bantimes += e + '\n');

    // console.log('ALLES')
    // console.log(bans)
    // console.log('IDS')
    // console.log(banids)
    // console.log('Grund')
    // console.log(bangrunds)
    // console.log('Ersteller')
    // console.log(banerstellers)
    // console.log('time')
    // console.log(bantimes)
    await b.reply(a.from, bans, a.id)
    // await b.reply(from, banids, id)
    // await b.reply(from, bangrunds, id)
    // await b.reply(from, banerstellers, id)
    // await b.reply(from, bantimes, id)

}

async function bancheck(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
    bancheckid = a.q.replace(/[ +()-]/g, '').replace(/\D/g, '') + '@c.us'
    var bancheck = await a.db.containsId('banned', bancheckid)
    var bancheckobjekt = await a.db.getId('banned', bancheckid)
    var bancheckcheck = bancheck ? `*gebannt* für den Grund:\n${bancheckobjekt.grund}\nGebannt von: \nwa.me/${bancheckobjekt.ersteller.replace(/[ +()-]/g, '').replace(/\D/g, '')}\nam ${bancheckobjekt.BanZeitpunkt}` : '*nicht gebannt*'
    await b.reply(a.from, `Der User mit der Id: \nwa.me/${bancheckid.replace(/[ +()-]/g, '').replace(/\D/g, '')} ist ${bancheckcheck}`, a.id)
}

module.exports = {
    ban,
    tempban,
    unban,
    banlist,
    bancheck
}
