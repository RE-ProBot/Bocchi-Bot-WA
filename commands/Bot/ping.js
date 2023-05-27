async function ping(a, b) {
    try {
        var { getRang } = a.importFresh('../../lib/rang.js')
        var isLeitung = await getRang('isLeitung', a.sender.id, a.db)
        const { processTime } = require('../../tools')
        const moment = require('moment-timezone')
        moment.tz.setDefault('Europe/Berlin').locale('de')
        if (processTime(a.t, moment()) >= 100) return
        if (!isLeitung) {
            await b.reply(a.from, `Pong!\nSpeed: ${processTime(a.t, moment())} secs`, a.id)
        } else if (isLeitung) {
            await b.reply(a.from, `Pong!\nSession-ID: *[${a.sessionId}]*\nMulti-Device: *[${a.config.multiDevice}]*\nSpeed: ${processTime(a.t, moment())} secs`, a.id)
        }
    } catch (err) {
        console.log(err)
        b.sendText(a.from, 'Es ist ein Fehler aufgetreten. \n⚔️❤️ 𝒰.𝒮.𝒮.𝑅 ⚔️❤️ oder 🤍💙 𝓥𝓮𝓷𝓸𝓧 🤍💙 arbeitet bereits daran.')
    }
}

module.exports = {
    ping
}
