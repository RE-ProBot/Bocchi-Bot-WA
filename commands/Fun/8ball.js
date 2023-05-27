async function eightball(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isGaming = a.isGroupMsg ? await a.db.groupinfoId('gaming', a.groupId) : false

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!isGaming) return await b.reply(a.from, eng.notGaming(), a.id)
    const random8ball = [Math.floor(Math.random() * (20 - 1 + 1)) + 1]
    //Offiziell 50% Positiv, 25% Neutral, 25% Negativ
    if (!a.ar[0] == '') {
        if (random8ball == 1) {
            await b.reply(a.from, `Sicherlich.`, a.id)
        } else if (random8ball == 2) {
            await b.reply(a.from, `Es ist so entschieden.`, a.id)
        } else if (random8ball == 3) {
            await b.reply(a.from, `Zweifellos.`, a.id)
        } else if (random8ball == 4) {
            await b.reply(a.from, `Ja auf jeden Fall.`, a.id)
        } else if (random8ball == 5) {
            await b.reply(a.from, `Du kannst darauf Zählen.`, a.id)
        } else if (random8ball == 6) {
            await b.reply(a.from, `Aus meiner sicht Ja.`, a.id)
        } else if (random8ball == 7) {
            await b.reply(a.from, `Wahrscheinlich.`, a.id)
        } else if (random8ball == 8) {
            await b.reply(a.from, `Ausblick sieht gut aus.`, a.id)
        } else if (random8ball == 9) {
            await b.reply(a.from, `Ja.`, a.id)
        } else if (random8ball == 10) {
            await b.reply(a.from, `Ja natürlich.`, a.id)
        } else if (random8ball == 11) {
            await b.reply(a.from, `Zeichen deuten auf Ja.`, a.id)
        } else if (random8ball == 12) {
            await b.reply(a.from, `Antwort ist nein.`, a.id)
        } else if (random8ball == 13) {
            await b.reply(a.from, `Meine Quellen sagen nein.`, a.id)
        } else if (random8ball == 14) {
            await b.reply(a.from, `Ausblick ist nicht gut.`, a.id)
        } else if (random8ball == 15) {
            await b.reply(a.from, `Zweifelhaft`, a.id)
        } else if (random8ball == 16) {
            await b.reply(a.from, `Nein.`, a.id)
        } else if (random8ball == 17) {
            await b.reply(a.from, `Frag später nochmal.`, a.id)
        } else if (random8ball == 18) {
            await b.reply(a.from, `Ich sag lieber nichts.`, a.id)
        } else if (random8ball == 19) {
            await b.reply(a.from, `Dir wird meine Antwort nicht gefallen.`, a.id)
        } else if (random8ball == 20) {
            await b.reply(a.from, `Frag mich später nochmal.`, a.id)
        }
    } else if (a.ar[0] == '') {
        await b.sendText(a.from, `Du musst eine Frage stellen, sonst kann ich dir nicht helfen.`)
    } else {
        await b.sendText(a.from, `Du musst eine Frage stellen, sonst kann ich dir nicht helfen.`)
    }


} module.exports = {
    eightball
}