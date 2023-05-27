async function lenny(a, b, eng) {
    await b.sendText(a.from, `( ͡° ͜ʖ ͡°)`)
}
async function f(a, b, eng) {
    await b.sendText(a.from, `F`)
}
async function george(a, b, eng) {
    await b.sendText(a.from, 'George not found')
}
async function blockme(a, b, eng) {
    await b.sendTextWithMentions(a.from, `Der User @${a.sender.id.replace(/@c.us/g, '')} wird nun vollständig vom Bot System ausgeschlossen!`)
}
async function stickergif(a, b, eng) {
    await b.sendText(a.from, `Bitte Verwende absofort den Befehl: *sticker*`)
}
async function scheiße(a, b, eng) {
    await b.react(a.quotedMsgObj.id, "💩")
}
async function dsgvo(a, b, eng) {
    if (a.isGroupMsg) return await b.reply(a.from, eng.pcOnly(), a.id)
    await b.sendText(a.from, eng.datenschutz(), a.id)
}
async function howmuch(a, b, eng) {
    var howmuch = await a.db.countWhere('log', { 'userid': a.sender.id })
    await b.reply(a.from, `Du hast ${howmuch} Befehle ausgeführt!`, a.id)
}
async function hurensohn(a, b, eng) {
    await b.reply(a.from, `@ADMINS\n\nDie Makierte Person möchte Bitte gekickt werden, vielen Dank!`, a.id)
}
async function rules(a, b, eng) {
    await b.sendText(a.from, eng.rules())
}
async function changelog(a, b, eng) {
    await b.sendText(a.from, eng.changelog())
}
async function uptime(a, b, eng) {
    const formater = (seconds) => {
        const pad = (s) => { return (s < 10 ? '0' : '') + s }
        const hrs = Math.floor(seconds / (60 * 60))
        const mins = Math.floor(seconds % (60 * 60) / 60)
        const secs = Math.floor(seconds % 60)
        return ' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
    }
    const uptime = process.uptime()
    await b.reply(a.from, `*── 「 BOT UPTIME 」 ──*\n\n❏${formater(uptime)}`, a.id)
}
async function mark(a, b, eng) {
    if (!a.q) return await b.sendText(a.from, `Bitte gib eine Nummer ohne + und ohne Leerzeichen ein`)
    await b.sendTextWithMentions(a.from, `@${a.q.replace(/[ +()-]/g, '').replace(/^0+/, '49')}`)
}
async function selfmark(a, b, eng) {
    await b.sendTextWithMentions(a.from, `@${a.sender.id.replace(/@c.us/g, '')}`)
}
async function silvester(a, b, eng) {
    function calcTime(now, when) {
        var milliseconds = (when.getTime() - now.getTime())
        var seconds = Math.round((milliseconds / 1000) % 60);
        var minutes = Math.round(((milliseconds / (1000 * 60)) % 60));
        var hours = Math.round(((milliseconds / (1000 * 60 * 60)) % 24));
        var days = Math.round((milliseconds / (1000 * 60 * 60 * 24)));

        return `── 「 SILVESTER 」 ──
Es verbleiben noch
${days} Tage,
${hours} Stunden,
${minutes} Minuten
und ${seconds} Sekunden bis Silvester`
    }
    process.env.TZ = 'Europe/Berlin'
    var theDate = new Date()
    theDate.setFullYear(2022)
    theDate.setMonth(11)
    theDate.setDate(30)
    theDate.setHours(23)
    theDate.setMinutes(59)
    theDate.setSeconds(59)
    var now = new Date()
    var result = calcTime(now, theDate)
await b.sendText(a.from, result)
}
async function wame(a, b, eng) {
    await b.sendText(a.from, `wa.me/${a.q.replace(/^0+/, '49').replace(/\D/g, '')}`)
}
async function say(a, b, eng) {
    if (!a.q) return await b.reply(a.from, eng.wrongFormat(), a.id)
    if (a.q.startsWith('#')) return await b.sendText(a.from, 'Zum Schutz anderer Bots darf die Nachricht nicht mit # oder ! beginnen.')
    if (a.q.includes('#')) {
    var say = a.q.replace('#', '')
    } else {
        say = a.q
    }
    await b.sendText(a.from, say + '')
}
async function tos(a, b, eng) {
    await b.sendText(a.from, eng.tos())

}

module.exports = {
    lenny,
    f,
    george,
    blockme,
    stickergif,
    scheiße,
    dsgvo,
    howmuch,
    hurensohn,
    rules,
    changelog,
    uptime,
    mark,
    selfmark,
    silvester,
    wame,
    say,
    tos,

}