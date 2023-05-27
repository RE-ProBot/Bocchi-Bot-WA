async function block(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
    if (a.mentionedJidList.length !== 0) {
        for (let blok of a.mentionedJidList) {
            if (blok === a.botNumber) return await b.reply(a.from, eng.wrongFormat(), a.id)
            await b.contactBlock(blok)
        }
        await b.reply(a.from, eng.doneOwner(), a.id)
    } else if (a.args.length === 1) {
        await b.contactBlock(a.q.replace(/[ +()-]/g, '').replace(/\D/g, '') + '@c.us')
        await b.reply(a.from, eng.doneOwner(), a.id)
    } else {
        await b.reply(a.from, eng.wrongFormat(), a.id)
    }
}

async function unblock(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
    if (a.mentionedJidList.length !== 0) {
        for (let blok of a.mentionedJidList) {
            if (blok === a.botNumber) return await b.reply(a.from, eng.wrongFormat(), a.id)
            await b.contactUnblock(blok)
        }
        await b.reply(a.from, eng.doneOwner(), a.id)
    } else if (a.args.length === 1) {
        await b.contactUnblock(a.q.replace(/[ +()-]/g, '').replace(/\D/g, '') + '@c.us')
        await b.reply(a.from, `Done`, a.id)
    } else {
        await b.reply(a.from, eng.wrongFormat(), a.id)
    }
}
async function blocklist(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isTeam) return await b.reply(a.from, eng.teamOnly(), a.id)
    let block = eng.listBlock(a.blockNumber)
    for (let i of a.blockNumber) {
        block += `@${i.replace('@c.us', '')}\n`
    }
    await b.sendTextWithMentions(a.from, block)
}
async function unblockall(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)

    for (let i of a.blockNumber) {
        await b.contactUnblock(i)
    }
    await b.sendText(a.from, `Erfolgreich ${a.blockNumber.length} Nummer/n freigegeben`)
}

module.exports = {
    block,
    unblock,
    blocklist,
    unblockall
}