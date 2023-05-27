async function everyone(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isEveryoneOn = a.isGroupMsg ? await a.db.groupinfoId('everyone', a.groupId) : false
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (isEveryoneOn) return await b.reply(a.from, eng.EveryoneOnAlready(), a.id)
    const groupMem = await b.getGroupMembers(a.groupId)
    if (isTeam) {
        cd = 3600000
        timername = 'timereveryone'
        const timerEveryone = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
        if (timerEveryone !== undefined && cd - (Date.now() - timerEveryone) > 0) {
            const time = a.ms(cd - (Date.now() - timerEveryone))
            await b.reply(a.from, eng.daily(time), a.id)
        } else {
            let txt = `╔══✪〘 *EVERYONE* 〙✪══╗\n\n${a.q.replace('+', '')}\n\n`
            for (let i = 0; i < groupMem.length; i++) {
                txt += '╠➥'
                txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            txt += '╚══✪〘 *B O C C H I* 〙✪══╝'
            await b.sendTextWithMentions(a.from, txt)
            await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
            await a.daily.addLimit(timername, a.sender.id)
        }
    } else {
        cd = 7200000
        timername = 'timereveryone'
        const timerEveryone = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
        if (timerEveryone !== undefined && cd - (Date.now() - timerEveryone) > 0) {
            const time = a.ms(cd - (Date.now() - timerEveryone))
            await b.reply(a.from, eng.daily(time), a.id)
        } else {
            let txt = `╔══✪〘 *EVERYONE* 〙✪══╗\n\n${a.q.replace('+', '')}\n\n`
            for (let i = 0; i < groupMem.length; i++) {
                txt += '╠➥'
                txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            txt += '╚══✪〘 *B O C C H I* 〙✪══╝'
            await b.sendTextWithMentions(a.from, txt)
            await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
            await a.daily.addLimit(timername, a.sender.id)
        }
    }
}
async function oeveryone(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)
    const groupMemo = await b.getGroupMembers(a.groupId)
    if (isOwner) {
        let txto = `╔══✪〘 *EVERYONE* 〙✪══╗\n\n${a.q.replace('+', '')}\n\n`
        for (let i = 0; i < groupMemo.length; i++) {
            txto += ` @${groupMemo[i].id.replace(/@c.us/g, '')}`
        }
        txto += '\n╚══✪〘 *B O C C H I* 〙✪══╝'
        await b.sendTextWithMentions(a.from, txto, true)
    } else {
        await b.sendText(a.from, 'Nö')
    }
}

module.exports = {
    everyone,
    oeveryone,
}