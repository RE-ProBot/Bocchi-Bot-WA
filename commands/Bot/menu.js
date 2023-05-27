async function menu(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isPremium = await a.db.containsId('premium', a.sender.id)
    const isNsfw = a.isGroupMsg ? await a.db.groupinfoId('nsfw', a.groupId) : false
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)
    var isLeitung = await getRang('isLeitung', a.sender.id, a.db)
    var isOwner = await getRang('isOwner', a.sender.id, a.db)
    var isMod = await getRang('isModerator', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    const jumlahUser = await a.db.count('registered')
    const levelMenu = await a.level.getLevelingLevel(a.sender.id)
    const xpMenu = await a.level.getLevelingXp(a.sender.id)
    var role = 'AktivitätenLevel'
    function calcTime(now, when) {
        var milliseconds = (when.getTime() - now.getTime())
        var seconds = Math.round((milliseconds / 1000) % 60);
        var minutes = Math.round(((milliseconds / (1000 * 60)) % 60));
        var hours = Math.round(((milliseconds / (1000 * 60 * 60)) % 24));
        var days = Math.round((milliseconds / (1000 * 60 * 60 * 24)));

        return `
Es verbleiben noch ${days} Tage, ${hours} Stunden, ${minutes} Minuten und ${seconds} Sekunden bis Neujahr!🧨`
    }

    process.env.TZ = 'Europe/Berlin'
    var theDate = new Date()
    theDate.setFullYear(2022)
    theDate.setMonth(11)
    theDate.setDate(31)
    theDate.setHours(23)
    theDate.setMinutes(59)
    theDate.setSeconds(59)
    var now = new Date()
    var svresult = calcTime(now, theDate)

    if (a.args[0] === '1' || a.args[0] == 'downloader') {
        // await b.sendText(a.from, eng.menuDownloader())

        await b.sendText(a.from, 'Deaktiviert!')
    } else if (a.args[0] === '2' || a.args[0] == 'bot') {
        await b.sendText(a.from, eng.menuBot())
    } else if (a.args[0] === '3' || a.args[0] == 'misc') {
        await b.sendText(a.from, eng.menuMisc())
    } else if (a.args[0] === '4' || a.args[0] == 'sticker') {
        await b.sendText(a.from, eng.menuSticker())
    } else if (a.args[0] === '5' || a.args[0] == 'weeaboo') {
        await b.sendText(a.from, eng.menuWeeaboo())
    } else if (a.args[0] === '6' || a.args[0] == 'fun') {
        await b.sendText(a.from, eng.menuFun())
    } else if (a.args[0] === '7' || a.args[0] == 'moderation') {
        await b.sendText(a.from, eng.menuModeration())
    } else if (a.args[0] === '8' || a.args[0] == 'nsfw') {
        if (a.isGroupMsg && !isNsfw) return await b.reply(a.from, eng.notNsfw(), a.id)
        await b.sendText(a.from, eng.menuNsfw())
    } else if (a.args[0] === '9' || a.args[0] == 'team') {
        if (!isTeam) {
            await b.reply(a.from, eng.teamOnly(), a.id)
        } else {
            if (isOwner) {
                await b.reply(a.from, eng.menuTeamOwner(a.sender.username), a.id)
            } else if (isMod) {
                await b.reply(a.from, eng.menuTeamMod(a.sender.username), a.id)
            } else if (isTeam) {
                await b.reply(a.from, eng.menuTeamSupport(a.sender.username), a.id)
            }
        }
    } else if (a.args[0] === '10' || a.args[0] == 'leveling') {
        if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
        await b.sendText(a.from, eng.menuLeveling())
    } else if (a.args[0] === '11' || a.args[0] == 'gaming') {
        if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
        await b.sendText(a.from, eng.menugaming())
    } else if (a.args[0] === '12' || a.args[0] == 'Premium') {
        await b.sendText(a.from, eng.menuPremium())
    } else if (a.args[0] === '13' || a.args[0] == 'credits') {
        const dataJson1 = await a.db.getFromAllWithWhere('team', { 'typ': 'Inhaber' })
        const dataJson2 = await a.db.getFromAllWithWhere('team', { 'typ': 'StvInhaber' })
        const dataJson3 = await a.db.getFromAllWithWhere('team', { 'typ': 'Manager' })
        const dataJson4 = await a.db.getFromAllWithWhere('team', { 'typ': 'Mod' })
        const dataJson5 = await a.db.getFromAllWithWhere('team', { 'typ': 'Support' })
        let txt = '        -----[ CREDITS ]----- \n\n'
        txt += '        ______________ \n        *Inhaber/Developer/in:* \n\n'
        for (let i = 0; i < dataJson1.length; i++) {
            txt += '        -  ' + dataJson1[i].name + '\n'
        }
        txt += '        ______________ \n        *Stellvertretende Inhaber/in:* \n\n'
        for (let i = 0; i < dataJson2.length; i++) {
            txt += '        -  ' + dataJson2[i].name + '\n'
        }
        txt += '        ______________ \n        *Manager/in:* \n\n'
        for (let i = 0; i < dataJson3.length; i++) {
            txt += '        -  ' + dataJson3[i].name + '\n'
        }
        txt += '        ______________ \n        *Moderator/in:* \n\n'
        for (let i = 0; i < dataJson4.length; i++) {
            txt += '        -  ' + dataJson4[i].name + '\n'
        }
        txt += '        ______________ \n        *Supporter/in:* \n\n'
        for (let i = 0; i < dataJson5.length; i++) {
            txt += '        -  ' + dataJson5[i].name + '\n'
        }
        //     txt += '        ______________ \n        *Developer/in:* \n\n'
        // for (let i = 0; i < dataJson1.length; i++) {
        //     txt += '        -  ' + dataJson1[i].name + '\n'
        // }
        txt += '        ______________ \n        *Ideen von:*\n\n        -  口Ｋ丹爪工\n        -  ⚔️❤️ Слава 𝒰.𝒮.𝒮.𝑅 ⚔️❤️\n--------------------------\n🤍💙 Слава 𝓥𝓮𝓷𝓸𝓧 🤍💙'
        await b.sendText(a.from, `${txt}`)
    } else if (a.args[0] === '0' || a.args[0] == 'neuebefehle') {
        if (!isLeitung) return await b.reply(a.from, eng.leitungOnly(), a.id)
        await b.sendText(a.from, eng.menunewcmd())
    } else {
        await b.sendText(a.from, eng.menu(jumlahUser, levelMenu, xpMenu, role, a.sender.username, isPremium ? 'Yes' : 'No', svresult))
    }
}

module.exports = {
    menu
}