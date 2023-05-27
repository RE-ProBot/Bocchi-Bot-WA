async function trashall(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isEveryoneOn = a.isGroupMsg ? await a.db.groupinfoId('everyone', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!isLeitung && !a.isGroupAdmins) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (isEveryoneOn) return await b.reply(a.from, eng.EveryoneOnAlready(), a.id)
    const groupMemtrash = await b.getGroupMembers(a.groupId)
    cd = 7200000
    timername = 'K_F_S_H'
    const timertrashall = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
    if (timertrashall !== undefined && cd - (Date.now() - timertrashall) > 0) {
        const time = a.ms(cd - (Date.now() - timertrashall))
        await b.reply(a.from, eng.daily(time), a.id)
    } else {
        let txttrash = `╔══✪〘 *🚮MÜLL🚮* 〙✪══\n`
        for (let i = 0; i < groupMemtrash.length; i++) {
            txttrash += '╠➥'
            txttrash += `@${a.sender.id.replace(/@c.us/g, '')} steckt @${groupMemtrash[i].id.replace(/@c.us/g, '')}in den Müll🚮\n`
        }
        txttrash += `╚═〘 *B O C C H I  B O T* 〙`
        await b.sendTextWithMentions(a.from, txttrash)
        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
        await a.daily.addLimit(timername, a.sender.id)
    }
}

async function hugall(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isEveryoneOn = a.isGroupMsg ? await a.db.groupinfoId('everyone', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!isLeitung && !a.isGroupAdmins) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (isEveryoneOn) return await b.reply(a.from, eng.EveryoneOnAlready(), a.id)
    const groupMemhug = await b.getGroupMembers(a.groupId)
    cd = 7200000
    timername = 'K_F_S_H'
    const timerHugall = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
    if (timerHugall !== undefined && cd - (Date.now() - timerHugall) > 0) {
        const time = a.ms(cd - (Date.now() - timerHugall))
        await b.reply(a.from, eng.daily(time), a.id)
    } else {
        let txthug = `╔══✪〘 *🫂HUG🫂* 〙✪══\n`
        for (let i = 0; i < groupMemhug.length; i++) {
            txthug += '╠➥'
            txthug += `@${a.senderid.replace(/@c.us/g, '')} umarmt @${groupMemhug[i].id.replace(/@c.us/g, '')}🫂\n`
        }
        txthug += `╚═〘 *B O C C H I  B O T* 〙`
        await b.sendTextWithMentions(a.from, txthug)
        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
        await a.daily.addLimit(timername, a.sender.id)
    }
}

async function fuckall(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isEveryoneOn = a.isGroupMsg ? await a.db.groupinfoId('everyone', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!isLeitung && !a.isGroupAdmins) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (isEveryoneOn) return await b.reply(a.from, eng.EveryoneOnAlready(), a.id)
    const groupMemfuck = await b.getGroupMembers(a.groupId)
    cd = 7200000
    timername = 'K_F_S_H'
    const timerFuckall = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
    if (timerFuckall !== undefined && cd - (Date.now() - timerFuckall) > 0) {
        const time = a.ms(cd - (Date.now() - timerFuckall))
        await b.reply(a.from, eng.daily(time), a.id)
    } else {
        let txtfuck = `╔══✪〘 *🍆💦FUCK💦🍆* 〙✪══\n`
        for (let i = 0; i < groupMemfuck.length; i++) {
            txtfuck += '╠➥'
            txtfuck += `@${a.sender.id.replace(/@c.us/g, '')} fickt @${groupMemfuck[i].id.replace(/@c.us/g, '')}🍆💦\n`
        }
        txtfuck += `╚═〘 *B O C C H I  B O T* 〙`
        await b.sendTextWithMentions(a.from, txtfuck)
        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
        await a.daily.addLimit(timername, a.sender.id)
    }
}

async function snowall(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isEveryoneOn = a.isGroupMsg ? await a.db.groupinfoId('everyone', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!isLeitung && !a.isGroupAdmins) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (isEveryoneOn) return await b.reply(a.from, eng.EveryoneOnAlready(), a.id)
    const groupMemsnow = await b.getGroupMembers(a.groupId)
    cd = 7200000
    timername = 'K_F_S_H'
    const timerSnowall = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
    if (timerSnowall !== undefined && cd - (Date.now() - timerSnowall) > 0) {
        const time = a.ms(cd - (Date.now() - timerSnowall))
        await b.reply(a.from, eng.daily(time), a.id)
    } else {
        let txtsnow = `╔══✪〘 *⛄SCHNEEBALL⛄* 〙✪══\n`
        for (let i = 0; i < groupMemsnow.length; i++) {
            txtsnow += '╠➥'
            txtsnow += `@${a.sender.id.replace(/@c.us/g, '')} wirft @${groupMemsnow[i].id.replace(/@c.us/g, '')} mit einem Schneeball ab⛄\n`
        }
        txtsnow += `╚═〘 *B O C C H I  B O T* 〙`
        await b.sendTextWithMentions(a.from, txtsnow)
        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
        await a.daily.addLimit(timername, a.sender.id)
    }
}
async function kissall(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isEveryoneOn = a.isGroupMsg ? await a.db.groupinfoId('everyone', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!isLeitung && !a.isGroupAdmins) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (isEveryoneOn) return await b.reply(a.from, eng.EveryoneOnAlready(), a.id)
    const groupMemkiss = await b.getGroupMembers(a.groupId)
    cd = 7200000
    timername = 'K_F_S_H'
    const timerKissall = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
    if (timerKissall !== undefined && cd - (Date.now() - timerKissall) > 0) {
        const time = a.ms(cd - (Date.now() - timerKissall))
        await b.reply(a.from, eng.daily(time), a.id)
    } else {
        let txtkiss = `╔══✪〘 *KÜSSEN* 〙✪══\n`
        for (let i = 0; i < groupMemkiss.length; i++) {
            txtkiss += '╠➥'
            txtkiss += `@${a.sender.id.replace(/@c.us/g, '')} küsst @${groupMemkiss[i].id.replace(/@c.us/g, '')}😘\n`
        }
        txtkiss += `╚═〘 *B O C C H I  B O T* 〙`
        await b.sendTextWithMentions(a.from, txtkiss)
        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
        await a.daily.addLimit(timername, a.sender.id)
    }
}
async function nudesall(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isEveryoneOn = a.isGroupMsg ? await a.db.groupinfoId('everyone', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!isLeitung && !a.isGroupAdmins) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (isEveryoneOn) return await b.reply(a.from, eng.EveryoneOnAlready(), a.id)
    const groupMemnudes = await b.getGroupMembers(a.groupId)
    cd = 7200000
    timername = 'K_F_S_H'
    const timerNudesall = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
    if (timerNudesall !== undefined && cd - (Date.now() - timerNudesall) > 0) {
        const time = a.ms(cd - (Date.now() - timerNudesall))
        await b.reply(a.from, eng.daily(time), a.id)
    } else {
        let txtnudes = `╔══✪〘 *💦📷NUDES📷💦* 〙✪══\n`
        for (let i = 0; i < groupMemnudes.length; i++) {
            txtnudes += '╠➥'
            txtnudes += `@${a.sender.id.replace(/@c.us/g, '')} fragt @${groupMemnudes[i].id.replace(/@c.us/g, '')} nach Nudes😘💦🍆📷\n`
        }
        txtnudes += `╚═〘 *B O C C H I  B O T* 〙`
        await b.sendTextWithMentions(a.from, txtnudes)
        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
        await a.daily.addLimit(timername, a.sender.id)
    }
}
async function trittall(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isEveryoneOn = a.isGroupMsg ? await a.db.groupinfoId('everyone', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!isLeitung && !a.isGroupAdmins) return await b.reply(a.from, eng.adminOnly(), a.id)
    if (isEveryoneOn) return await b.reply(a.from, eng.EveryoneOnAlready(), a.id)
    const groupMemtritt = await b.getGroupMembers(a.groupId)
    cd = 7200000
    timername = 'K_F_S_H'
    const timerTrittall = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
    if (timerTrittall !== undefined && cd - (Date.now() - timerTrittall) > 0) {
        const time = a.ms(cd - (Date.now() - timerTrittall))
        await b.reply(a.from, eng.daily(time), a.id)
    } else {
        let txttritt = `╔══✪〘 *TRITT* 〙✪══\n`
        for (let i = 0; i < groupMemtritt.length; i++) {
            txttritt += '╠➥'
            txttritt += `@${a.sender.id.replace(/@c.us/g, '')} tritt @${groupMemtritt[i].id.replace(/@c.us/g, '')}\n`
        }
        txttritt += `╚═〘 *B O C C H I  B O T* 〙`
        await b.sendTextWithMentions(a.from, txttritt)
        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
        await a.daily.addLimit(timername, a.sender.id)
    }
}


module.exports = {
    hugall,
    fuckall,
    snowall,
    kissall,
    nudesall,
    trashall,
    trittall
}
