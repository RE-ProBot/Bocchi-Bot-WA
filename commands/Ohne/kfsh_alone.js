async function vampir(a, b, eng) {
    if (!a.q) return await b.reply(a.from, eng.kfshalone(), a.id)
    await b.sendTextWithMentions(a.from, eng.vampir(a.sender.id, a.q))
}

async function tritt(a, b, eng) {
    if (!a.q) return await b.reply(a.from, eng.kfshalone(), a.id)
    await b.sendTextWithMentions(a.from, eng.tritt(a.sender.id, a.q))
}

async function hug(a, b, eng) {
    if (!a.q) return await b.reply(a.from, eng.kfshalone(), a.id)
    await b.sendTextWithMentions(a.from, eng.hug(a.sender.id, a.q))
}

async function fuck(a, b, eng) {
    const isNsfw = a.isGroupMsg ? await a.db.groupinfoId('nsfw', a.groupId) : false
    if (!isNsfw) return await b.reply(a.from, eng.notNsfw(), a.id)
    if (!a.q) return await b.reply(a.from, eng.kfshalone(), a.id)
    await b.sendTextWithMentions(a.from, eng.fuck(a.sender.id, a.q))
}

async function snowball(a, b, eng) {
    if (!a.q) return await b.reply(a.from, eng.kfshalone(), a.id)
    await b.sendTextWithMentions(a.from, eng.snowball(a.sender.id, a.q))
}

async function kiss(a, b, eng) {
    if (!a.q) return await b.reply(a.from, eng.kfshalone(), a.id)
    await b.sendTextWithMentions(a.from, eng.kiss(a.sender.id, a.q))
}

async function nudes(a, b, eng) {
    if (!a.q) return await b.reply(a.from, eng.kfshalone(), a.id)
    await b.sendTextWithMentions(a.from, eng.nudes(a.sender.id, a.q))
}

async function trash(a, b, eng) {
    if (!a.q) return await b.reply(a.from, eng.kfshalone(), a.id)
    await b.sendTextWithMentions(a.from, eng.trash(a.sender.id, a.q))
}


 module.exports = {
    vampir,
    tritt,
    hug,
    fuck,
    snowball,
    kiss,
    nudes,
    trash
}
