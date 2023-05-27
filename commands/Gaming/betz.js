async function betz(a, b ,eng) {
    // const isRegistered = await a.db.containsId('registered', a.sender.id)
    // if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    var betz1 = a.ar[0]
    var betz2 = Math.floor(Math.random() * 49) 
    if (betz1 > 50) return await b.sendText(a.from, 'Bitte nimm eine Zahl zwischen 1 und 50')
    if (isNaN(betz1) == true) { // isNaN überprüft ob es eine zahl ist! true ist keine Zahl
        await b.reply(a.from, `Dies ist keine Zahl`, a.id)
    } else if (isNaN(betz1) == false) { //isNaN überprüft ob es eine zahl ist! false ist zahl
        if (betz1 < parseInt(betz2 - 5)) { //userbet kleiner als botbet?
            await b.reply(a.from, `Sorry deine Zahl: *${betz1}*\nIst niedriger als meine Zahl:\n*${betz2}*`, a.id)//Text für Loose zu niedrig
        } else if (betz1 > parseInt(betz2 + 5)) { //userbet grösser als botbet?
            await b.reply(a.from, `Sorry deine Zahl: *${betz1}*\nIst höher als meine Zahl:\n*${betz2}*`, a.id)//Text für loose zu hoch
        } else if (betz1 > parseInt(betz2 - 5) && betz1 < betz2 || betz1 < parseInt(betz2 + 5) && betz1 > betz2) { //Userbet +/-5 also fast gleich
            await b.reply(a.from, `Oh fast geschafft\n\nDeine Zahl: *${betz1}*\nIst fast meine Zahl:\n*${betz2}*`, a.id)//Text für NAYA knapp daneben
        } else if (betz1 === betz2) { //userbet gleich botbet?
            await b.reply(a.from, `Glückwunsch gewonnen\n\nDeine Zahl: *${betz1}*\nIst meine Zahl:\n*${betz2}*`, a.id)//Text für Win
        }
    }

}

module.exports = {
    betz
} 