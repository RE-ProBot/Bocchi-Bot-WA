async function fetish(a, b ,eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isNsfw = a.isGroupMsg ? await a.db.groupinfoId('nsfw', a.groupId) : false
    if (!undefined) return await b.sendText(a.from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (a.ar.length !== 1) return await b.reply(a.from, eng.wrongFormat(), a.id)
                if (a.isGroupMsg) {
                    if (!isNsfw) return await b.reply(a.from, eng.notNsfw(), a.id)
                    cd = 90000
                    timername = 'nsfwFetish'
                    const timerFetishGm = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
                    if (timerFetishGm !== undefined && cd - (Date.now() - timerFetishGm) > 0) {
                        const time = a.ms(cd - (Date.now() - timerFetishGm))
                        await b.reply(a.from, eng.daily(time), a.id)
                    } else {
                        await b.reply(a.from, eng.wait(), a.id)
                        try {
                            if (a.ar[0] === 'armpits') {
                                a.nsfw.armpits()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'armpits.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'feets') {
                                a.nsfw.feets()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'feets.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'thighs') {
                                a.nsfw.thighs()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'thighs.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'ass') {
                                a.nsfw.ass()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'ass.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'boobs') {
                                a.nsfw.boobs()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'boobs.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'belly') {
                                a.nsfw.belly()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'belly.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'sideboobs') {
                                a.nsfw.sideboobs()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'sideboobs.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'ahegao') {
                                a.nsfw.ahegao()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'ahegao.jpg', '', a.id)
                                    })
                            } else {
                                await b.reply(a.from, 'Tag not found.', a.id)
                            }
                        } catch (err) {
                            console.error(err)
                            await b.reply(a.from, err, a.id)
                        }
                        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
                        await a.daily.addLimit(timername, a.sender.id)
                    }

                } else {
                    cd = 90000
                    timername = 'nsfwFetish'
                    const timerFetishPm = await a.db.teamContains2('timer', { 'id': a.sender.id, typ: timername })
                    if (timerFetishPm !== undefined && cd - (Date.now() - timerFetishPm) > 0) {
                        const time = a.ms(cd - (Date.now() - timerFetishPm))
                        await b.reply(a.from, eng.daily(time), a.id)
                    } else {
                        await b.reply(a.from, eng.wait(), a.id)
                        try {
                            if (a.ar[0] === 'armpits') {
                                a.nsfw.armpits()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'armpits.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'feets') {
                                a.nsfw.feets()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'feets.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'thighs') {
                                a.nsfw.thighs()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'thighs.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'ass') {
                                a.nsfw.ass()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'ass.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'boobs') {
                                a.nsfw.boobs()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'boobs.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'belly') {
                                a.nsfw.belly()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'belly.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'sideboobs') {
                                a.nsfw.sideboobs()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'sideboobs.jpg', '', a.id)
                                    })
                            } else if (a.ar[0] === 'ahegao') {
                                a.nsfw.ahegao()
                                    .then(async ({ url }) => {
                                        await b.sendFileFromUrl(a.from, url, 'ahegao.jpg', '', a.id)
                                    })
                            } else {
                                await b.reply(a.from, 'Tag not found.', a.id)
                            }
                        } catch (err) {
                            console.error(err)
                            await b.reply(a.from, err, a.id)
                        }
                        await a.db.removetimer('timer', { 'id': a.sender.id, 'typ': timername })
                        await a.daily.addLimit(timername, a.sender.id)
                    }

                }
}

async function multifetish(a, b ,eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isPremium = await a.db.containsId('premium', a.sender.id)
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)
    if (!undefined) return await b.sendText(a.from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!isPremium && !isTeam) return await b.reply(a.from, eng.notPremium(), a.id)
    if (a.ar.length !== 1) return await b.reply(a.from, eng.wrongFormat(), a.id)
    if (a.isGroupMsg) {
        await b.reply(a.from, eng.wait(), a.id)
        try {
            if (a.ar[0] === 'armpits') {
                a.nsfw.marmpits()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'armpit.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'feets') {
                a.nsfw.mfeets()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'feets.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'thighs') {
                a.nsfw.mthighs()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'thighs.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'ass') {
                a.nsfw.mass()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'ass.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'boobs') {
                a.nsfw.mboobs()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'boobs.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'belly') {
                a.nsfw.mbelly()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'belly.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'sideboobs') {
                a.nsfw.msideboobs()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'sideboobs.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'ahegao') {
                a.nsfw.mahegao()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'ahegao.jpg', '', a.id)
                        }
                    })
            } else {
                await b.reply(a.from, 'Tag not found.', a.id)
            }
        } catch (err) {
            console.error(err)
            await b.reply(a.from, 'Error!', a.id)
        }
    } else {
        await b.reply(a.from, eng.wait(), a.id)
        try {
            if (a.ar[0] === 'armpits') {
                a.nsfw.marmpits()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'armpit.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'feets') {
                a.nsfw.mfeets()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'feets.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'thighs') {
                a.nsfw.mthighs()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'thighs.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'ass') {
                a.nsfw.mass()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'ass.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'boobs') {
                a.nsfw.mboobs()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'boobs.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'belly') {
                a.nsfw.mbelly()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'belly.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'sideboobs') {
                a.nsfw.msideboobs()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'sideboobs.jpg', '', a.id)
                        }
                    })
            } else if (a.ar[0] === 'ahegao') {
                a.nsfw.mahegao()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'ahegao.jpg', '', a.id)
                        }
                    })
            } else {
                await b.reply(a.from, 'Tag not found.', a.id)
            }
        } catch (err) {
            console.error(err)
            await b.reply(a.from, 'Error!', a.id)
        }
    }
}


module.exports = {
    fetish,
    multifetish
}
