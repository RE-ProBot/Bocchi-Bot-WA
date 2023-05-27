async function lewd(a, b ,eng) {
    const isNsfw = a.isGroupMsg ? await a.db.groupinfoId('nsfw', a.groupId) : false
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    if (!undefined) return await b.sendText(a.from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
if (a.isGroupMsg) {
    if (!isNsfw) return await b.reply(a.from, eng.notNsfw(), a.id)
    cd = 60000
    timername = 'nsfwLewd'
    const timerLewdGroupMsg = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
    if (timerLewdGroupMsg !== undefined && cd - (Date.now() - timerLewdGroupMsg) > 0) {
        const time = a.ms(cd - (Date.now() - timerLewdGroupMsg))
        await b.reply(a.from, eng.daily(time), a.id)
    } else {
        await b.reply(a.from, eng.wait(), a.id)
        a.nsfw.randomLewd()
            .then(async ({ url }) => {
                await b.sendFileFromUrl(a.from, url, 'lewd.jpg', '', null, null, true)
            })
            .catch(async (err) => {
                console.error(err)
                await b.reply(a.from, 'Error!', a.id)
            })
        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
        await a.daily.addLimit(timername, a.sender.id)
    }
} else {
    cd = 60000
    timername = 'nsfwLewd'
    const timerLewdPrivateMsg = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
    if (timerLewdPrivateMsg !== undefined && cd - (Date.now() - timerLewdPrivateMsg) > 0) {
        const time = a.ms(cd - (Date.now() - timerLewdPrivateMsg))
        await b.reply(a.from, eng.daily(time), a.id)
    } else {
        await b.reply(a.from, eng.wait(), a.id)
        a.nsfw.randomLewd()
            .then(async ({ url }) => {
                await b.sendFileFromUrl(a.from, url, 'lewd.jpg', '', null, null, true)
            })
            .catch(async (err) => {
                console.error(err)
                await b.reply(a.from, 'Error!', a.id)
            })
        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
        await a.daily.addLimit(timername, a.sender.id)
    }
}
}

async function lewdavatar(a, b ,eng) {
    const isNsfw = a.isGroupMsg ? await a.db.groupinfoId('nsfw', a.groupId) : false
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    if (!undefined) return await b.sendText(a.from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)

    if (a.isGroupMsg) {
        if (!isNsfw) return await b.reply(a.from, eng.notNsfw(), a.id)
        cd = 60000
        timername = 'nsfwLewdavatar'
        const timerLewdavatarGm = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
        if (timerLewdavatarGm !== undefined && cd - (Date.now() - timerLewdavatarGm) > 0) {
            const time = a.ms(cd - (Date.now() - timerLewdavatarGm))
            await b.reply(a.from, eng.daily(time), a.id)
        } else {
            await b.reply(a.from, eng.wait(), a.id)
            await b.sendFileFromUrl(a.from, (await a.neko.nsfw.avatar()).url, 'avatar.jpg', '', a.id)
            await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
            await a.daily.addLimit(timername, a.sender.id)
        }
    } else {
        cd = 60000
        timername = 'nsfwLewdavatar'
        const timerLewdavatarPm = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
        if (timerLewdavatarPm !== undefined && cd - (Date.now() - timerLewdavatarPm) > 0) {
            const time = a.ms(cd - (Date.now() - timerLewdavatarPm))
            await b.reply(a.from, eng.daily(time), a.id)
        } else {
            await b.reply(a.from, eng.wait(), a.id)
            await b.sendFileFromUrl(a.from, (await a.neko.nsfw.avatar()).url, 'avatar.jpg', '', a.id)
            await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
            await a.daily.addLimit(timername, a.sender.id)
        }
    }

}

async function multilewd(a, b ,eng) {
    const isNsfw = a.isGroupMsg ? await a.db.groupinfoId('nsfw', a.groupId) : false
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isPremium = await a.db.containsId('premium', a.sender.id)
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)
    if (!undefined) return await b.sendText(a.from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')

    
    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!isPremium && !isTeam) return await b.reply(a.from, eng.notPremium(), a.id)
    if (a.isGroupMsg) {
        if (!isNsfw) return await b.reply(a.from, eng.notNsfw(), a.id)
        await b.reply(a.from, eng.wait(), a.id)
        a.nsfw.mlewd()
            .then(async ({ memes }) => {
                for (let i = 0; i < memes.length; i++) {
                    await b.sendFileFromUrl(a.from, memes[i].url, 'lewd.jpg', '', a.id)
                }
            })
            .catch(async (err) => {
                console.error(err)
                await b.reply(a.from, 'Error!', a.id)
            })
    } else {
        await b.reply(a.from, eng.wait(), a.id)
        a.nsfw.mlewd()
            .then(async ({ memes }) => {
                for (let i = 0; i < memes.length; i++) {
                    await b.sendFileFromUrl(a.from, memes[i].url, 'lewd.jpg', '', a.id)
                }
            })
            .catch(async (err) => {
                console.error(err)
                await b.reply(a.from, 'Error!', a.id)
            })
    }

}

module.exports = {
    lewd,
    lewdavatar,
    multilewd
}
