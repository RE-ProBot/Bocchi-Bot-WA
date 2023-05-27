async function nandostatus(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isInhaber = await getRang('Inhaber', a.sender.id, a.db)
    const groupIDMeldung = ('120363022360920817@g.us') //BocchiBot - Developer

    if (!isInhaber) {
        await b.sendText(groupIDMeldung, `wa.me/` + a.sender.id.replace('@c.us', '') + `\ndiese Nummer hat gerade den Befehl *nandostatus* ohne erlaubnis ausgeführt`)
        await b.sendText(a.from, `Der Versuch den Befehl auszuführen wurde soebend der Adminstration gemeldet\nDu wirst mit einem Ausschluss aus dem Team rechnen!`)
    } else {
        try {
            if (a.ar[0] === 'cat') {
                a.nandostatus.cat()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'cat.jpg', '')
                        }
                    })
            } else if (a.ar[0] === 'dog') {
                a.nandostatus.dog()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'dog.jpg', '')
                        }
                    })
            } else if (a.ar[0] === 'shittycars') {
                a.nandostatus.shittycars()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'shittycars.jpg', '')
                        }
                    })
            } else if (a.ar[0] === 'carporn') {
                a.nandostatus.carporn()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'carporn.jpg', '')
                        }
                    })
            } else if (a.ar[0] === 'meme') {
                a.nandostatus.meme()
                    .then(async ({ memes }) => {
                        for (let i = 0; i < memes.length; i++) {
                            await b.sendFileFromUrl(a.from, memes[i].url, 'meme.jpg', '')
                        }
                    })
            } else {
                await b.reply(a.from, `Guten Tag Meister, Bitte wähle deine Kategorie aus:
- cat
- dog
- shittycars
- carporn
- meme
- idk
`, a.id)
            }
        } catch (err) {
            console.error(err)
            await b.reply(a.from, 'Error!', a.id)
        }
    }
}

module.exports = {
    nandostatus
}