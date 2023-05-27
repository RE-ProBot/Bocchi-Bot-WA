async function profile(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (isTeam) {
        if (a.quotedMsg) {
            const getQuoted = a.quotedMsgObj.sender.id
            const profilePic = await b.getProfilePicFromServer(getQuoted)
            const username = a.quotedMsgObj.sender.isBusiness ? a.quotedMsgObj.sender.verifiedName : a.quotedMsgObj.sender.pushname
            var commands = await a.db.countWhere('log', { 'userid': getQuoted })
            const benet = (await a.db.containsId('banned', getQuoted)) ? '*Yes*' : '*No*'
            const adm = a.groupAdmins.includes(getQuoted) ? '*Yes*' : '*No*'
            const premi = (await a.premium.checkPremiumUser(getQuoted)) ? '*Yes*' : '*No*'
            const levelMe = await a.level.getLevelingLevel(getQuoted)
            const xpMe = await a.level.getLevelingXp(getQuoted)
            const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
            const isInhaber3 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Inhaber' });
            const isDeveloper2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Developer' });
            const isStvInhaber2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'StvInhaber' });
            const isManager2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Manager' });
            const isMod2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Mod' });
            const isSupport2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Support' });
            const isHoster2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Hoster' });

            var rang = '*User*'
            if (isSupport2) {
                rang = '*Supporter/in*'
            } if (isMod2) {
                rang = '*Moderator/in*'
            } if (isManager2) {
                rang = '*Manager/in*'
            } if (isStvInhaber2) {
                rang = '*Stellvertrende/r Inhaber/in*'
            } if (isDeveloper2) {
                rang = '*Developer/in*'
            } if (isInhaber3) {
                rang = '*Inhaber/in*'
            } if (isHoster2) {
                rang = '*Hoster/in*'
            }
            if (profilePic == 'ERROR: 401' || profilePic == 'ERROR: 404' || profilePic == 'ERROR: 400') { //done
                var pfp = a.errorImg
            } else {
                pfp = profilePic
            }
            if (getQuoted == '4915734987868@c.us') rang = '*Discord-Manager*'
            try {
                await b.sendFileFromUrl(a.from, pfp, `${username}.jpg`, eng.profile(username, '', premi, benet, adm, levelMe, req, xpMe, rang, commands), a.id)
            } catch (err) {
                await b.reply(a.from, eng.profile(username, '', premi, benet, adm, levelMe, req, xpMe, rang, commands), a.id)
            }
        } else {
            var profileId = a.sender.id
            if (typeof a.ar[0] !== typeof undefined) {
                profileId = a.q.replace(/[ +()-]/g, '').replace(/\D/g, '') + '@c.us'
            }
            const isInhaberprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Inhaber' });
            const isDeveloperprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Developer' });
            const isStvInhaberprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'StvInhaber' });
            const isManagerprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Manager' });
            const isModprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Mod' });
            const isSupportprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Support' });
            const isHosterprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Hoster' });

            const isGroupAdminsprofile = a.isGroupMsg ? a.groupAdmins.includes(profileId) : false
            const isBannedprofile = await a.db.containsId('banned', profileId)
            const isPremiumprofile = await a.db.containsId('premium', profileId)
            const profilePic = await b.getProfilePicFromServer(profileId)
            var commands = await a.db.countWhere('log', { 'userid': profileId })
            var user = await b.getContact(profileId)
            var username;
            if (user.isBusiness) {
                username = user.verifiedName
            } else {
                username = user.pushname
            }
            const benet = isBannedprofile ? '*Yes*' : '*No*'
            const adm = isGroupAdminsprofile ? '*Yes*' : '*No*'
            const premi = isPremiumprofile ? '*Yes*' : '*No*'
            const levelMe = await a.level.getLevelingLevel(profileId)
            const xpMe = await a.level.getLevelingXp(profileId)
            const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
            var rang2 = '*User*'
            if (isSupportprofile) {
                rang2 = '*Supporter/in*'
            } if (isModprofile) {
                rang2 = '*Moderator/in*'
            } if (isManagerprofile) {
                rang2 = '*Manager/in*'
            } if (isStvInhaberprofile) {
                rang2 = '*Stellvertretende/r Inhaber/in*'
            } if (isDeveloperprofile) {
                rang2 = '*Developer/in*'
            } if (isInhaberprofile) {
                rang2 = '*Inhaber/in*'
            } if (isHosterprofile) {
                rang2 = '*Hoster/in*'
            }

            if (profilePic == 'ERROR: 401') {
                var pfps = a.errorImg
            } else {
                pfps = profilePic
            }
            if (profileId == '49157xxxxx@c.us') rang2 = '*Discord-Manager*'
            try {
                await b.sendFileFromUrl(a.from, pfps, `${username}.jpg`, eng.profile(username, '', premi, benet, adm, levelMe, req, xpMe, rang2, commands), a.id)
            } catch (err) {
                await b.reply(a.from, eng.profile(username, '', premi, benet, adm, levelMe, req, xpMe, rang2, commands), a.id)
            }
        }
    } else {
        if (a.quotedMsg) {
            cd = 300000
            timername = 'timerprofile'
            const timerProfilequoted = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
            if (timerProfilequoted !== undefined && cd - (Date.now() - timerProfilequoted) > 0) {
                const time = a.ms(cd - (Date.now() - timerProfilequoted))
                await b.reply(a.from, eng.daily(time), a.id)
            } else {
                const getQuoted = a.quotedMsgObj.sender.id
                const profilePic = await b.getProfilePicFromServer(getQuoted)
                const username = a.quotedMsgObj.sender.pushname
                var commands = await a.db.countWhere('log', { 'userid': getQuoted })
                const statuses = await b.getStatus(getQuoted)
                const benet = (await a.db.containsId('banned', getQuoted)) ? '*Yes*' : '*No*'
                const adm = a.groupAdmins.includes(getQuoted) ? '*Yes*' : '*No*'
                const premi = (await a.premium.checkPremiumUser(getQuoted)) ? '*Yes*' : '*No*'
                const levelMe = await a.level.getLevelingLevel(getQuoted)
                const xpMe = await a.level.getLevelingXp(getQuoted)
                const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
                const isInhaber3 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Inhaber' });
                const isDeveloper2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Developer' });
                const isStvInhaber2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'StvInhaber' });
                const isManager2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Manager' });
                const isMod2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Mod' });
                const isSupport2 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Support' });
                const isHoster3 = await a.db.teamContains('team', { 'id': getQuoted, 'typ': 'Hoster' });
                var rang = '*User*'
                if (isSupport2) {
                    rang = '*Supporter/in*'
                } if (isMod2) {
                    rang = '*Moderator/in*'
                } if (isManager2) {
                    rang = '*Manager/in*'
                } if (isStvInhaber2) {
                    rang = '*Stellvertrende/r Inhaber/in*'
                } if (isDeveloper2) {
                    rang = '*Developer/in*'
                } if (isInhaber3) {
                    rang = '*Inhaber/in*'
                } if (isHoster3) {
                    rang = '*Hoster/in*'
                }
                const { status } = statuses
                if (profilePic == 'ERROR: 401' || profilePic == 'ERROR: 404' || profilePic == 'ERROR: 400') { //done
                    var pfp = a.errorImg
                } else {
                    pfp = profilePic
                }
                if (getQuoted == '4915734987868@c.us') rang = '*Discord-Manager*'
                try {
                    await b.sendFileFromUrl(a.from, pfp, `${username}.jpg`, eng.profile(username, status, premi, benet, adm, levelMe, req, xpMe, rang, commands), a.id)
                } catch (err) {
                    await b.reply(a.from, eng.profile(username, status, premi, benet, adm, levelMe, req, xpMe, rang, commands), a.id)
                }
                await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
                await a.daily.addLimit(timername, a.sender.id)
            }
        } else {
            cd = 300000
            timername = 'timerprofile'
            const timerProfileNichtquoted = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
            if (timerProfileNichtquoted !== undefined && cd - (Date.now() - timerProfileNichtquoted) > 0) {
                const time = a.ms(cd - (Date.now() - timerProfileNichtquoted))
                await b.reply(a.from, eng.daily(time), a.id)
            } else {
                var profileId = a.sender.id
                if (typeof a.ar[0] !== typeof undefined) {
                    profileId = a.q.replace(/[ +()-]/g, '').replace(/\D/g, '') + '@c.us'
                }
                const isInhaberprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Inhaber' });
                const isDeveloperprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Developer' });
                const isStvInhaberprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'StvInhaber' });
                const isManagerprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Manager' });
                const isModprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Mod' });
                const isSupportprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Support' });
                const isHosterprofile = await a.db.teamContains('team', { 'id': profileId, 'typ': 'Hoster' });

                const isGroupAdminsprofile = a.isGroupMsg ? a.groupAdmins.includes(profileId) : false
                const isBannedprofile = await a.db.containsId('banned', profileId)
                const isPremiumprofile = await a.db.containsId('premium', profileId)
                const profilePic = await b.getProfilePicFromServer(profileId)
                var commands = await a.db.countWhere('log', { 'userid': profileId })
                var user = await b.getContact(profileId)
                var username;
                if (user.isBusiness) {
                    username = user.verifiedName
                } else {
                    username = user.pushname
                }
                const statuses = await b.getStatus(profileId)
                const benet = isBannedprofile ? '*Yes*' : '*No*'
                const adm = isGroupAdminsprofile ? '*Yes*' : '*No*'
                const premi = isPremiumprofile ? '*Yes*' : '*No*'
                const levelMe = await a.level.getLevelingLevel(profileId)
                const xpMe = await a.level.getLevelingXp(profileId)
                const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
                var rang2 = '*User*'
                if (isSupportprofile) {
                    rang2 = '*Supporter/in*'
                } if (isModprofile) {
                    rang2 = '*Moderator/in*'
                } if (isManagerprofile) {
                    rang2 = '*Manager/in*'
                } if (isStvInhaberprofile) {
                    rang2 = '*Stellvertretende/r Inhaber/in*'
                } if (isDeveloperprofile) {
                    rang2 = '*Developer/in*'
                } if (isInhaberprofile) {
                    rang2 = '*Inhaber/in*'
                } if (isHosterprofile) {
                    rang2 = '*Hoster/in*'
                }

                const { status } = statuses
                if (profilePic == 'ERROR: 401') {
                    var pfps = a.errorImg
                } else {
                    pfps = profilePic
                }
                if (profileId == '49176xxxx@c.us') rang2 = '*Discord-Manager*'
                try {
                    await b.sendFileFromUrl(a.from, pfps, `${username}.jpg`, eng.profile(username, status, premi, benet, adm, levelMe, req, xpMe, rang2, commands), a.id)
                } catch (err) {
                    await b.reply(a.from, eng.profile(username, status, premi, benet, adm, levelMe, req, xpMe, rang2, commands), a.id)
                }
                await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
                await a.daily.addLimit(timername, a.sender.id)
            }
        }
    }

}

module.exports = {
    profile
}