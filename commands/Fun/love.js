async function love(a, b ,eng) {

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)

    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isGaming = a.isGroupMsg ? await a.db.groupinfoId('gaming', a.groupId) : false
    //if(!isOwner) return await b.reply(a.from, `In Wartung!`, a.id)
    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!isGaming) return await b.reply(a.from, eng.notGaming(), a.id)
    var userbet = a.ar[0] && a.ar[1]
    if (isNaN(userbet) == false) {
        await b.sendText(from, 'Keine Zahlen!')
    } else if (isNaN(userbet) == true) {
        if (!a.ar[0] == '' && !a.ar[1] == '') {
            var crypto = require('crypto');
            var name123 = a.ar[0];
            var name124 = a.ar[1];
            var hash = crypto.createHash('md5').update(name123).digest('hex').replace(/\D/g, '');
            var hash1 = crypto.createHash('md5').update(name124).digest('hex').replace(/\D/g, '');
            const hashende1 = parseInt(Math.floor((Math.sqrt(Math.sqrt(hash)) + Math.sqrt(Math.sqrt(hash1)) + ""))) + ''
            var hashTest = parseInt(hashende1.substr(0, 3))
            const ms = (Math.floor(Math.random() * (3000 - 1000 + 1000)) + 1000) //"berechnung" 1-3sekunden random
            await a.sleep(ms)
            await b.reply(a.from, `💕 ${hashTest / 10}% 💕`, a.id)
        } else {
            await b.reply(a.from, `Du musst zwei Namen angeben`, a.id)
        }
    }

}

module.exports = {
    love
}