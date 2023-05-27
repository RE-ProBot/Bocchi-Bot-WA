async function aktivxp(a, b, eng) {

    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isLevelingOn = a.isGroupMsg ? await a.db.groupinfoId('leveling', a.groupId) : false
    var { getRang } = a.importFresh('../../lib/rang.js')

    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (a.isGroupMsg) {
        if (!isLevelingOn) return await b.reply(a.from, eng.levelingNotOn(), a.id)
        if (!isTeam) {
            if (a.quotedMsg) {
                cd = 300000
                timername = 'levelAbrufen'
                const timerXpQuoted = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
                if (timerXpQuoted !== undefined && cd - (Date.now() - timerXpQuoted) > 0) {
                    const time = a.ms(cd - (Date.now() - timerXpQuoted))
                    await b.reply(a.from, eng.daily(time), a.id)
                } else {
                    const getQuoted = a.quotedMsgObj.sender.id
                    const username = a.quotedMsgObj.sender.pushname
                    const levelMe = await a.level.getLevelingLevel(getQuoted)
                    const xpMe = await a.level.getLevelingXp(getQuoted)
                    const userLevel = await a.level.getLevelingLevel(getQuoted)
                    const fetchXp1 = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    //nein!
                    //var role2 = 'AktivitätenLevel'
                    var role2 = 'Copper V'
                    if (userLevel >= 10) {
                        role2 = 'Copper IV'
                    } if (userLevel >= 20) {
                        role2 = 'Copper III'
                    } if (userLevel >= 30) {
                        role2 = 'Copper II'
                    } if (userLevel >= 40) {
                        role2 = 'Copper I'
                    } if (userLevel >= 50) {
                        role2 = 'Silver V'
                    } if (userLevel >= 60) {
                        role2 = 'Silver IV'
                    } if (userLevel >= 70) {
                        role2 = 'Silver III'
                    } if (userLevel >= 80) {
                        role2 = 'Silver II'
                    } if (userLevel >= 90) {
                        role2 = 'Silver I'
                    } if (userLevel >= 100) {
                        role2 = 'Gold V'
                    } if (userLevel >= 110) {
                        role2 = 'Gold IV'
                    } if (userLevel >= 120) {
                        role2 = 'Gold III'
                    } if (userLevel >= 130) {
                        role2 = 'Gold II'
                    } if (userLevel >= 140) {
                        role2 = 'Gold I'
                    } if (userLevel >= 150) {
                        role2 = 'Platinum V'
                    } if (userLevel >= 160) {
                        role2 = 'Platinum IV'
                    } if (userLevel >= 170) {
                        role2 = 'Platinum III'
                    } if (userLevel >= 180) {
                        role2 = 'Platinum II'
                    } if (userLevel >= 190) {
                        role2 = 'Platinum I'
                    } if (userLevel >= 200) {
                        role2 = 'Exterminator V'
                    } if (userLevel >= 210) {
                        role2 = 'Exterminator IV'
                    } if (userLevel >= 220) {
                        role2 = 'Exterminator III'
                    } if (userLevel >= 230) {
                        role2 = 'Exterminator II'
                    } if (userLevel >= 240) {
                        role2 = 'Exterminator I'
                    } if (userLevel >= 300) {
                        role2 = 'Diamond III'
                    } if (userLevel >= 350) {
                        role2 = 'Diamond II'
                    } if (userLevel >= 400) {
                        role2 = 'Diamond I'
                    } if (userLevel >= 420) {
                        role2 = 'Happy 420'
                    } if (userLevel >= 500) {
                        role2 = 'Addicted User'
                    } if (userLevel >= 600) {
                        role2 = 'Immortal'
                    } if (userLevel >= 666) {
                        role2 = 'Teufel'
                    } if (userLevel >= 700) {
                        role2 = 'Allwissend'
                    } if (userLevel >= 777) {
                        role2 = 'Jackpot'
                    } if (userLevel >= 800) {
                        role2 = 'Chatter'
                    } if (userLevel >= 900) {
                        role2 = 'Smombie'
                    } if (userLevel >= 1000) {
                        role2 = 'BOSS'
                    } if (isTeam) {
                        role2 = '🛡️ Bocchi Team 🛡️'
                    }

                    await b.reply(a.from, eng.xp(username, levelMe, role2, fetchXp1, xpMe), a.id)
                    await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
                    await a.daily.addLimit(timername, a.sender.id)
                }
            } else {
                cd = 300000
                timername = 'levelAbrufen'
                const timerXpNichtqouted = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
                if (timerXpNichtqouted !== undefined && cd - (Date.now() - timerXpNichtqouted) > 0) {
                    const time = a.ms(cd - (Date.now() - timerXpNichtqouted))
                    await b.reply(a.from, eng.daily(time), a.id)
                } else {
                    const username = a.sender.username
                    const levelMe = await a.level.getLevelingLevel(a.sender.id)
                    const xpMe = await a.level.getLevelingXp(a.sender.id)
                    const userLevel = await a.level.getLevelingLevel(a.sender.id)
                    const fetchXp1 = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    //nein
                    //var role = 'AktivitätenLevel'

                    var role = 'Copper V'
                    if (userLevel >= 10) {
                        role = 'Copper IV'
                    } if (userLevel >= 20) {
                        role = 'Copper III'
                    } if (userLevel >= 30) {
                        role = 'Copper II'
                    } if (userLevel >= 40) {
                        role = 'Copper I'
                    } if (userLevel >= 50) {
                        role = 'Silver V'
                    } if (userLevel >= 60) {
                        role = 'Silver IV'
                    } if (userLevel >= 70) {
                        role = 'Silver III'
                    } if (userLevel >= 80) {
                        role = 'Silver II'
                    } if (userLevel >= 90) {
                        role = 'Silver I'
                    } if (userLevel >= 100) {
                        role = 'Gold V'
                    } if (userLevel >= 110) {
                        role = 'Gold IV'
                    } if (userLevel >= 120) {
                        role = 'Gold III'
                    } if (userLevel >= 130) {
                        role = 'Gold II'
                    } if (userLevel >= 140) {
                        role = 'Gold I'
                    } if (userLevel >= 150) {
                        role = 'Platinum V'
                    } if (userLevel >= 160) {
                        role = 'Platinum IV'
                    } if (userLevel >= 170) {
                        role = 'Platinum III'
                    } if (userLevel >= 180) {
                        role = 'Platinum II'
                    } if (userLevel >= 190) {
                        role = 'Platinum I'
                    } if (userLevel >= 200) {
                        role = 'Exterminator V'
                    } if (userLevel >= 210) {
                        role = 'Exterminator IV'
                    } if (userLevel >= 220) {
                        role = 'Exterminator III'
                    } if (userLevel >= 230) {
                        role = 'Exterminator II'
                    } if (userLevel >= 240) {
                        role = 'Exterminator I'
                    } if (userLevel >= 300) {
                        role = 'Diamond III'
                    } if (userLevel >= 350) {
                        role = 'Diamond II'
                    } if (userLevel >= 400) {
                        role = 'Diamond I'
                    } if (userLevel >= 420) {
                        role = 'Happy 420'
                    } if (userLevel >= 500) {
                        role = 'Addicted User'
                    } if (userLevel >= 600) {
                        role = 'Immortal'
                    } if (userLevel >= 666) {
                        role = 'Teufel'
                    } if (userLevel >= 700) {
                        role = 'Allwissend'
                    } if (userLevel >= 777) {
                        role = 'Jackpot'
                    } if (userLevel >= 800) {
                        role = 'Chatter'
                    } if (userLevel >= 900) {
                        role = 'Smombie'
                    } if (userLevel >= 1000) {
                        role = 'BOSS'
                    } if (isTeam) {
                        role = '🛡️ Bocchi Team 🛡️'
                    }
                    await b.reply(a.from, eng.xp(username, levelMe, role, fetchXp1, xpMe), a.id)
                    await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
                    await a.daily.addLimit(timername, a.sender.id)
                }
            }
        } else {
            if (a.quotedMsg) {
                const getQuoted = a.quotedMsgObj.sender.id
                const username = a.quotedMsgObj.sender.pushname
                const levelMe = await a.level.getLevelingLevel(getQuoted)
                const xpMe = await a.level.getLevelingXp(getQuoted)
                const userLevel = await a.level.getLevelingLevel(getQuoted)
                const fetchXp1 = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                //nein!
                //var role2 = 'AktivitätenLevel'
                var role2 = 'Copper V'
                if (userLevel >= 10) {
                    role2 = 'Copper IV'
                } if (userLevel >= 20) {
                    role2 = 'Copper III'
                } if (userLevel >= 30) {
                    role2 = 'Copper II'
                } if (userLevel >= 40) {
                    role2 = 'Copper I'
                } if (userLevel >= 50) {
                    role2 = 'Silver V'
                } if (userLevel >= 60) {
                    role2 = 'Silver IV'
                } if (userLevel >= 70) {
                    role2 = 'Silver III'
                } if (userLevel >= 80) {
                    role2 = 'Silver II'
                } if (userLevel >= 90) {
                    role2 = 'Silver I'
                } if (userLevel >= 100) {
                    role2 = 'Gold V'
                } if (userLevel >= 110) {
                    role2 = 'Gold IV'
                } if (userLevel >= 120) {
                    role2 = 'Gold III'
                } if (userLevel >= 130) {
                    role2 = 'Gold II'
                } if (userLevel >= 140) {
                    role2 = 'Gold I'
                } if (userLevel >= 150) {
                    role2 = 'Platinum V'
                } if (userLevel >= 160) {
                    role2 = 'Platinum IV'
                } if (userLevel >= 170) {
                    role2 = 'Platinum III'
                } if (userLevel >= 180) {
                    role2 = 'Platinum II'
                } if (userLevel >= 190) {
                    role2 = 'Platinum I'
                } if (userLevel >= 200) {
                    role2 = 'Exterminator V'
                } if (userLevel >= 210) {
                    role2 = 'Exterminator IV'
                } if (userLevel >= 220) {
                    role2 = 'Exterminator III'
                } if (userLevel >= 230) {
                    role2 = 'Exterminator II'
                } if (userLevel >= 240) {
                    role2 = 'Exterminator I'
                } if (userLevel >= 300) {
                    role2 = 'Diamond III'
                } if (userLevel >= 350) {
                    role2 = 'Diamond II'
                } if (userLevel >= 400) {
                    role2 = 'Diamond I'
                } if (userLevel >= 420) {
                    role2 = 'Happy 420'
                } if (userLevel >= 500) {
                    role2 = 'Addicted User'
                } if (userLevel >= 600) {
                    role2 = 'Immortal'
                } if (userLevel >= 666) {
                    role2 = 'Teufel'
                } if (userLevel >= 700) {
                    role2 = 'Allwissend'
                } if (userLevel >= 777) {
                    role2 = 'Jackpot'
                } if (userLevel >= 800) {
                    role2 = 'Chatter'
                } if (userLevel >= 900) {
                    role2 = 'Smombie'
                } if (userLevel >= 1000) {
                    role2 = 'BOSS'
                } if (isTeam) {
                    role2 = '🛡️ Bocchi Team 🛡️'
                }

                await b.reply(a.from, eng.xp(username, levelMe, role2, fetchXp1, xpMe), a.id)
            } else {
                const username = a.sender.username
                const levelMe = await a.level.getLevelingLevel(a.sender.id)
                const xpMe = await a.level.getLevelingXp(a.sender.id)
                const userLevel = await a.level.getLevelingLevel(a.sender.id)
                const fetchXp1 = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                //nein
                //var role = 'AktivitätenLevel'
                var role = 'Copper V'
                if (userLevel >= 10) {
                    role = 'Copper IV'
                } if (userLevel >= 20) {
                    role = 'Copper III'
                } if (userLevel >= 30) {
                    role = 'Copper II'
                } if (userLevel >= 40) {
                    role = 'Copper I'
                } if (userLevel >= 50) {
                    role = 'Silver V'
                } if (userLevel >= 60) {
                    role = 'Silver IV'
                } if (userLevel >= 70) {
                    role = 'Silver III'
                } if (userLevel >= 80) {
                    role = 'Silver II'
                } if (userLevel >= 90) {
                    role = 'Silver I'
                } if (userLevel >= 100) {
                    role = 'Gold V'
                } if (userLevel >= 110) {
                    role = 'Gold IV'
                } if (userLevel >= 120) {
                    role = 'Gold III'
                } if (userLevel >= 130) {
                    role = 'Gold II'
                } if (userLevel >= 140) {
                    role = 'Gold I'
                } if (userLevel >= 150) {
                    role = 'Platinum V'
                } if (userLevel >= 160) {
                    role = 'Platinum IV'
                } if (userLevel >= 170) {
                    role = 'Platinum III'
                } if (userLevel >= 180) {
                    role = 'Platinum II'
                } if (userLevel >= 190) {
                    role = 'Platinum I'
                } if (userLevel >= 200) {
                    role = 'Exterminator V'
                } if (userLevel >= 210) {
                    role = 'Exterminator IV'
                } if (userLevel >= 220) {
                    role = 'Exterminator III'
                } if (userLevel >= 230) {
                    role = 'Exterminator II'
                } if (userLevel >= 240) {
                    role = 'Exterminator I'
                } if (userLevel >= 300) {
                    role = 'Diamond III'
                } if (userLevel >= 350) {
                    role = 'Diamond II'
                } if (userLevel >= 400) {
                    role = 'Diamond I'
                } if (userLevel >= 420) {
                    role = 'Happy 420'
                } if (userLevel >= 500) {
                    role = 'Addicted User'
                } if (userLevel >= 600) {
                    role = 'Immortal'
                } if (userLevel >= 666) {
                    role = 'Teufel'
                } if (userLevel >= 700) {
                    role = 'Allwissend'
                } if (userLevel >= 777) {
                    role = 'Jackpot'
                } if (userLevel >= 800) {
                    role = 'Chatter'
                } if (userLevel >= 900) {
                    role = 'Smombie'
                } if (userLevel >= 1000) {
                    role = 'BOSS'
                } if (isTeam) {
                    role = '🛡️ Bocchi Team 🛡️'
                }
                await b.reply(a.from, eng.xp(username, levelMe, role, fetchXp1, xpMe), a.id)
            }
        }
    } else {
        if (!isTeam) {
            if (a.quotedMsg) {
                cd = 300000
                timername = 'levelAbrufen'
                const timerXpQuoted = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
                if (timerXpQuoted !== undefined && cd - (Date.now() - timerXpQuoted) > 0) {
                    const time = a.ms(cd - (Date.now() - timerXpQuoted))
                    await b.reply(a.from, eng.daily(time), a.id)
                } else {
                    const getQuoted = a.quotedMsgObj.sender.id
                    const username = a.quotedMsgObj.sender.pushname
                    const levelMe = await a.level.getLevelingLevel(getQuoted)
                    const xpMe = await a.level.getLevelingXp(getQuoted)
                    const userLevel = await a.level.getLevelingLevel(getQuoted)
                    const fetchXp1 = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    //nein!
                    //var role2 = 'AktivitätenLevel'
                    var role2 = 'Copper V'
                    if (userLevel >= 10) {
                        role2 = 'Copper IV'
                    } if (userLevel >= 20) {
                        role2 = 'Copper III'
                    } if (userLevel >= 30) {
                        role2 = 'Copper II'
                    } if (userLevel >= 40) {
                        role2 = 'Copper I'
                    } if (userLevel >= 50) {
                        role2 = 'Silver V'
                    } if (userLevel >= 60) {
                        role2 = 'Silver IV'
                    } if (userLevel >= 70) {
                        role2 = 'Silver III'
                    } if (userLevel >= 80) {
                        role2 = 'Silver II'
                    } if (userLevel >= 90) {
                        role2 = 'Silver I'
                    } if (userLevel >= 100) {
                        role2 = 'Gold V'
                    } if (userLevel >= 110) {
                        role2 = 'Gold IV'
                    } if (userLevel >= 120) {
                        role2 = 'Gold III'
                    } if (userLevel >= 130) {
                        role2 = 'Gold II'
                    } if (userLevel >= 140) {
                        role2 = 'Gold I'
                    } if (userLevel >= 150) {
                        role2 = 'Platinum V'
                    } if (userLevel >= 160) {
                        role2 = 'Platinum IV'
                    } if (userLevel >= 170) {
                        role2 = 'Platinum III'
                    } if (userLevel >= 180) {
                        role2 = 'Platinum II'
                    } if (userLevel >= 190) {
                        role2 = 'Platinum I'
                    } if (userLevel >= 200) {
                        role2 = 'Exterminator V'
                    } if (userLevel >= 210) {
                        role2 = 'Exterminator IV'
                    } if (userLevel >= 220) {
                        role2 = 'Exterminator III'
                    } if (userLevel >= 230) {
                        role2 = 'Exterminator II'
                    } if (userLevel >= 240) {
                        role2 = 'Exterminator I'
                    } if (userLevel >= 300) {
                        role2 = 'Diamond III'
                    } if (userLevel >= 350) {
                        role2 = 'Diamond II'
                    } if (userLevel >= 400) {
                        role2 = 'Diamond I'
                    } if (userLevel >= 420) {
                        role2 = 'Happy 420'
                    } if (userLevel >= 500) {
                        role2 = 'Addicted User'
                    } if (userLevel >= 600) {
                        role2 = 'Immortal'
                    } if (userLevel >= 666) {
                        role2 = 'Teufel'
                    } if (userLevel >= 700) {
                        role2 = 'Allwissend'
                    } if (userLevel >= 777) {
                        role2 = 'Jackpot'
                    } if (userLevel >= 800) {
                        role2 = 'Chatter'
                    } if (userLevel >= 900) {
                        role2 = 'Smombie'
                    } if (userLevel >= 1000) {
                        role2 = 'BOSS'
                    } if (isTeam) {
                        role2 = '🛡️ Bocchi Team 🛡️'
                    }

                    await b.reply(a.from, eng.xp(username, levelMe, role2, fetchXp1, xpMe), a.id)
                    await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
                    await a.daily.addLimit(timername, a.sender.id)
                }
            } else {
                cd = 300000
                timername = 'levelAbrufen'
                const timerXpNichtqouted = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
                if (timerXpNichtqouted !== undefined && cd - (Date.now() - timerXpNichtqouted) > 0) {
                    const time = a.ms(cd - (Date.now() - timerXpNichtqouted))
                    await b.reply(a.from, eng.daily(time), a.id)
                } else {
                    const username = a.sender.username
                    const levelMe = await a.level.getLevelingLevel(a.sender.id)
                    const xpMe = await a.level.getLevelingXp(a.sender.id)
                    const userLevel = await a.level.getLevelingLevel(a.sender.id)
                    const fetchXp1 = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    //nein
                    //var role = 'AktivitätenLevel'

                    var role = 'Copper V'
                    if (userLevel >= 10) {
                        role = 'Copper IV'
                    } if (userLevel >= 20) {
                        role = 'Copper III'
                    } if (userLevel >= 30) {
                        role = 'Copper II'
                    } if (userLevel >= 40) {
                        role = 'Copper I'
                    } if (userLevel >= 50) {
                        role = 'Silver V'
                    } if (userLevel >= 60) {
                        role = 'Silver IV'
                    } if (userLevel >= 70) {
                        role = 'Silver III'
                    } if (userLevel >= 80) {
                        role = 'Silver II'
                    } if (userLevel >= 90) {
                        role = 'Silver I'
                    } if (userLevel >= 100) {
                        role = 'Gold V'
                    } if (userLevel >= 110) {
                        role = 'Gold IV'
                    } if (userLevel >= 120) {
                        role = 'Gold III'
                    } if (userLevel >= 130) {
                        role = 'Gold II'
                    } if (userLevel >= 140) {
                        role = 'Gold I'
                    } if (userLevel >= 150) {
                        role = 'Platinum V'
                    } if (userLevel >= 160) {
                        role = 'Platinum IV'
                    } if (userLevel >= 170) {
                        role = 'Platinum III'
                    } if (userLevel >= 180) {
                        role = 'Platinum II'
                    } if (userLevel >= 190) {
                        role = 'Platinum I'
                    } if (userLevel >= 200) {
                        role = 'Exterminator V'
                    } if (userLevel >= 210) {
                        role = 'Exterminator IV'
                    } if (userLevel >= 220) {
                        role = 'Exterminator III'
                    } if (userLevel >= 230) {
                        role = 'Exterminator II'
                    } if (userLevel >= 240) {
                        role = 'Exterminator I'
                    } if (userLevel >= 300) {
                        role = 'Diamond III'
                    } if (userLevel >= 350) {
                        role = 'Diamond II'
                    } if (userLevel >= 400) {
                        role = 'Diamond I'
                    } if (userLevel >= 420) {
                        role = 'Happy 420'
                    } if (userLevel >= 500) {
                        role = 'Addicted User'
                    } if (userLevel >= 600) {
                        role = 'Immortal'
                    } if (userLevel >= 666) {
                        role = 'Teufel'
                    } if (userLevel >= 700) {
                        role = 'Allwissend'
                    } if (userLevel >= 777) {
                        role = 'Jackpot'
                    } if (userLevel >= 800) {
                        role = 'Chatter'
                    } if (userLevel >= 900) {
                        role = 'Smombie'
                    } if (userLevel >= 1000) {
                        role = 'BOSS'
                    } if (isTeam) {
                        role = '🛡️ Bocchi Team 🛡️'
                    }
                    await b.reply(a.from, eng.xp(username, levelMe, role, fetchXp1, xpMe), a.id)
                    await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
                    await a.daily.addLimit(timername, a.sender.id)
                }
            }
        } else {
            if (a.quotedMsg) {
                const getQuoted = a.quotedMsgObj.sender.id
                const username = a.quotedMsgObj.sender.pushname
                const levelMe = await a.level.getLevelingLevel(getQuoted)
                const xpMe = await a.level.getLevelingXp(getQuoted)
                const userLevel = await a.level.getLevelingLevel(getQuoted)
                const fetchXp1 = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                //nein!
                //var role2 = 'AktivitätenLevel'
                var role2 = 'Copper V'
                if (userLevel >= 10) {
                    role2 = 'Copper IV'
                } if (userLevel >= 20) {
                    role2 = 'Copper III'
                } if (userLevel >= 30) {
                    role2 = 'Copper II'
                } if (userLevel >= 40) {
                    role2 = 'Copper I'
                } if (userLevel >= 50) {
                    role2 = 'Silver V'
                } if (userLevel >= 60) {
                    role2 = 'Silver IV'
                } if (userLevel >= 70) {
                    role2 = 'Silver III'
                } if (userLevel >= 80) {
                    role2 = 'Silver II'
                } if (userLevel >= 90) {
                    role2 = 'Silver I'
                } if (userLevel >= 100) {
                    role2 = 'Gold V'
                } if (userLevel >= 110) {
                    role2 = 'Gold IV'
                } if (userLevel >= 120) {
                    role2 = 'Gold III'
                } if (userLevel >= 130) {
                    role2 = 'Gold II'
                } if (userLevel >= 140) {
                    role2 = 'Gold I'
                } if (userLevel >= 150) {
                    role2 = 'Platinum V'
                } if (userLevel >= 160) {
                    role2 = 'Platinum IV'
                } if (userLevel >= 170) {
                    role2 = 'Platinum III'
                } if (userLevel >= 180) {
                    role2 = 'Platinum II'
                } if (userLevel >= 190) {
                    role2 = 'Platinum I'
                } if (userLevel >= 200) {
                    role2 = 'Exterminator V'
                } if (userLevel >= 210) {
                    role2 = 'Exterminator IV'
                } if (userLevel >= 220) {
                    role2 = 'Exterminator III'
                } if (userLevel >= 230) {
                    role2 = 'Exterminator II'
                } if (userLevel >= 240) {
                    role2 = 'Exterminator I'
                } if (userLevel >= 300) {
                    role2 = 'Diamond III'
                } if (userLevel >= 350) {
                    role2 = 'Diamond II'
                } if (userLevel >= 400) {
                    role2 = 'Diamond I'
                } if (userLevel >= 420) {
                    role2 = 'Happy 420'
                } if (userLevel >= 500) {
                    role2 = 'Addicted User'
                } if (userLevel >= 600) {
                    role2 = 'Immortal'
                } if (userLevel >= 666) {
                    role2 = 'Teufel'
                } if (userLevel >= 700) {
                    role2 = 'Allwissend'
                } if (userLevel >= 777) {
                    role2 = 'Jackpot'
                } if (userLevel >= 800) {
                    role2 = 'Chatter'
                } if (userLevel >= 900) {
                    role2 = 'Smombie'
                } if (userLevel >= 1000) {
                    role2 = 'BOSS'
                } if (isTeam) {
                    role2 = '🛡️ Bocchi Team 🛡️'
                }

                await b.reply(a.from, eng.xp(username, levelMe, role2, fetchXp1, xpMe), a.id)
            } else {
                const username = a.sender.username
                const levelMe = await a.level.getLevelingLevel(a.sender.id)
                const xpMe = await a.level.getLevelingXp(a.sender.id)
                const userLevel = await a.level.getLevelingLevel(a.sender.id)
                const fetchXp1 = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                //nein
                //var role = 'AktivitätenLevel'
                var role = 'Copper V'
                if (userLevel >= 10) {
                    role = 'Copper IV'
                } if (userLevel >= 20) {
                    role = 'Copper III'
                } if (userLevel >= 30) {
                    role = 'Copper II'
                } if (userLevel >= 40) {
                    role = 'Copper I'
                } if (userLevel >= 50) {
                    role = 'Silver V'
                } if (userLevel >= 60) {
                    role = 'Silver IV'
                } if (userLevel >= 70) {
                    role = 'Silver III'
                } if (userLevel >= 80) {
                    role = 'Silver II'
                } if (userLevel >= 90) {
                    role = 'Silver I'
                } if (userLevel >= 100) {
                    role = 'Gold V'
                } if (userLevel >= 110) {
                    role = 'Gold IV'
                } if (userLevel >= 120) {
                    role = 'Gold III'
                } if (userLevel >= 130) {
                    role = 'Gold II'
                } if (userLevel >= 140) {
                    role = 'Gold I'
                } if (userLevel >= 150) {
                    role = 'Platinum V'
                } if (userLevel >= 160) {
                    role = 'Platinum IV'
                } if (userLevel >= 170) {
                    role = 'Platinum III'
                } if (userLevel >= 180) {
                    role = 'Platinum II'
                } if (userLevel >= 190) {
                    role = 'Platinum I'
                } if (userLevel >= 200) {
                    role = 'Exterminator V'
                } if (userLevel >= 210) {
                    role = 'Exterminator IV'
                } if (userLevel >= 220) {
                    role = 'Exterminator III'
                } if (userLevel >= 230) {
                    role = 'Exterminator II'
                } if (userLevel >= 240) {
                    role = 'Exterminator I'
                } if (userLevel >= 300) {
                    role = 'Diamond III'
                } if (userLevel >= 350) {
                    role = 'Diamond II'
                } if (userLevel >= 400) {
                    role = 'Diamond I'
                } if (userLevel >= 420) {
                    role = 'Happy 420'
                } if (userLevel >= 500) {
                    role = 'Addicted User'
                } if (userLevel >= 600) {
                    role = 'Immortal'
                } if (userLevel >= 666) {
                    role = 'Teufel'
                } if (userLevel >= 700) {
                    role = 'Allwissend'
                } if (userLevel >= 777) {
                    role = 'Jackpot'
                } if (userLevel >= 800) {
                    role = 'Chatter'
                } if (userLevel >= 900) {
                    role = 'Smombie'
                } if (userLevel >= 1000) {
                    role = 'BOSS'
                } if (isTeam) {
                    role = '🛡️ Bocchi Team 🛡️'
                }
                await b.reply(a.from, eng.xp(username, levelMe, role, fetchXp1, xpMe), a.id)
            }
        }

    }


} module.exports = {
    aktivxp
}