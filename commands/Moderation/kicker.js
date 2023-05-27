async function kicker(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)
    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isBotGroupAdmins) return await b.reply(a.from, eng.botNotAdmin(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.sendText(a.from, eng.adminOnly())
    if (a.args[0].startsWith('49') || a.args[0].startsWith(49) || a.args[0] == '4') return await b.reply(a.from, `DENK NICHT DRAN!`, a.id)
    await b.reply(a.from, eng.wait(), a.id)
    let txt = '[KICKERLISTE]\n_Admins werden nicht gekickt!_\n'
    try {
        const members = await b.getGroupMembersId(a.groupId)
        const filtered = []
        for (let i = 0; i < members.length; i++) {
            if (members[i].startsWith(a.args[0])) {
                filtered.push(members[i])
            }
        }
        if (filtered != null) {
            for (let i = 0; i < filtered.length; i++) {
                const isGroupAdmins = a.isGroupMsg ? a.groupAdmins.includes(filtered[i]) : false
                if (isGroupAdmins) {
                    icon = '✅️ Admin'
                } else {
                    icon = '❌ Kick'
                }
                txt += `@${filtered[i].replace('@c.us', '')} ${icon}\n`
            }
            await b.sendTextWithMentions(a.from, txt + '')

            for (let i = 0; i < filtered.length; i++) {
                const isGroupAdmins = a.isGroupMsg ? a.groupAdmins.includes(filtered[i]) : false
                if (isGroupAdmins) {
                    //
                } else {
                    await b.removeParticipant(a.groupId, filtered[i])
                }
            }
        } else {
            await b.reply(a.from, `A number starts with ${a.args[0]} not found!`, a.id)
        }
    } catch (err) {
        console.error(err)
        await b.reply(a.from, err + 'Error!', a.id)
    }


} module.exports = {
    kicker
}
/* 
async function kicker(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)
    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isBotGroupAdmins) return await b.reply(a.from, eng.botNotAdmin(), a.id)
    if (!a.isGroupAdmins && !isLeitung) return await b.sendText(a.from, eng.adminOnly())
    if (a.args[0] == 4) return await b.reply(a.from, `DENK NICHT DRAN!`, a.id)
    await b.reply(a.from, eng.wait(), a.id)
    let txt = '[DEBUGKICK]\n\n'
    try {
        const members = await b.getGroupMembersId(a.groupId)
        const filtered = []
        for (let i = 0; i < members.length; i++) {
            if (members[i].startsWith(a.args[0])) {
                filtered.push(members[i])
            }
        }
        if (filtered != null) {
            for (let i = 0; i < filtered.length; i++) {
                const isGroupAdmins = a.isGroupMsg ? a.groupAdmins.includes(filtered[i]) : false
                if (isGroupAdmins) {
                    icon = '✅️'
                } else {
                    icon = '❌'
                }
                txt += `${filtered[i]} ${icon}\n`
                // await b.removeParticipant(a.groupId, filtered[i])
            }
            await b.reply(a.from, txt + '', a.id)
        } else {
            await b.reply(a.from, `A number starts with ${a.args[0]} not found!`, a.id)
        }
    } catch (err) {
        console.error(err)
        await b.reply(a.from, err + 'Error!', a.id)
    }


} module.exports = {
    kicker
}
 */