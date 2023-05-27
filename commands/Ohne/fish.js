async function fish(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isGaming = a.isGroupMsg ? await a.db.groupinfoId('gaming', a.groupId) : false

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)

    if (!isOwner) return await b.reply(a.from, eng.cmdNotFound(), a.id)
    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!isGaming) return await b.reply(a.from, eng.notGaming(), a.id)
    var fishObj = await a.db.getNeu('fischinventar', { 'id': a.sender.id })
    var fischenInsgesamt = 0
    if (typeof fishObj !== typeof undefined) {
        fischenInsgesamt = fishObj.insgesamt;
    }
    if (a.args[0] == 'inv') {
        var fishid = a.sender.id
        if (typeof a.ar[1] !== typeof undefined) {
            fishid = a.args[1] + '@c.us'
        }
        fishObj = await a.db.getNeu('fischinventar', { 'id': fishid })
        await b.sendText(a.from, `── *「 🐟 FISCHINVENTAR 🐟 」* ──\nInsgesamt: ${fishObj.insgesamt}\nMüll: ${fishObj.müll}\nGewöhnlich: ${fishObj.gewöhnlich}\nSelten: ${fishObj.selten}\nEpisch: ${fishObj.episch}\nLegendär: ${fishObj.legendär}\nMythisch: ${fishObj.mythisch}\nUltra: ${fishObj.ultra}\n`)
    } else {
        //Level 0
        var fischWGew = 200; //20 = 200
        var fischWMuell = 820; //62 = 620
        var fischWSelten = 920; //10 = 100
        var fischWEpisch = 963; //4,3 = 43
        var fischWLegend = 985; //2,2 = 22
        var fischWMythisch = 998; //1,3 = 13
        //var fischWUltra = 140; //0,2 = 2

        if (fischenInsgesamt > 100 && fischenInsgesamt <= 500) {
            //Level 1
            //Gew 25%
            fischWGew = 250
            //Muell 57%
            //Selten 10%
            //Episch 4,3%
            //Legendär 2,2%
            //Mythisch 1,3%
            //Ultra 0,2%

        } else if (fischenInsgesamt > 500 && fischenInsgesamt <= 1000) {
            //Level 2
            //Gew 26%
            fischWGew = 260
            //Muell 49%
            fischWMuell = 750
            //Selten 17%
            //Episch 4,3%
            //Legendär 2,2%
            //Mythisch 1,3%
            //Ultra 0,2%

        } else if (fischenInsgesamt > 1000 && fischenInsgesamt <= 2500) {
            //Level 3
            //Gew 27%
            fischWGew = 270
            //Muell 43%
            fischWMuell = 700
            //Selten 19%
            fischWSelten = 890
            //Episch 7,3%
            //Legendär 2,2%
            //Mythisch 1,3%
            //Ultra 0,2%

        } else if (fischenInsgesamt > 2500 && fischenInsgesamt <= 5000) {
            //Level 4
            //Gew 29%
            fischWGew = 290
            //Muell 36%
            fischWMuell = 650
            //Selten 20%
            fischWSelten = 850
            //Episch 7%
            fischWEpisch = 920
            //Legendär 6,5%
            //Mythisch 1,3%
            //Ultra 0,2%

        } else if (fischenInsgesamt > 5000 && fischenInsgesamt <= 10000) {
            //Level 5
            //Gew 32%
            fischWGew = 320
            //Muell 28%
            fischWMuell = 600
            //Selten 23%
            fischWSelten = 830
            //Episch 8%
            fischWEpisch = 910
            //Legendär 6,5%
            fischWLegend = 975
            //Mythisch 2,3%
            //Ultra 0,2%

        } else if (fischenInsgesamt > 10000) {
            //Level 6
            //Gew 33%
            fischWGew = 330
            //Muell 22%
            fischWMuell = 550
            //Selten 27%
            fischWSelten = 820
            //Episch 8%
            fischWEpisch = 900
            //Legendär 7%
            fischWLegend = 970
            //Mythisch 2%
            fischWMythisch = 990
            //Ultra 1%
        }
        var fischen = ''
        var geldAusFischen = 0
        var fischenWerte = {
            'insgesamt': 0,
            'müll': 0,
            'gewöhnlich': 0,
            'selten': 0,
            'episch': 0,
            'legendär': 0,
            'mythisch': 0,
            'ultra': 0
        }
        const fishen = Math.floor(Math.random() * 1000) + 1
        if (fishen <= fischWGew) { // Gewöhnlich 1- 400
            const fishArt = await a.db.randomfish('fish', { seltenheit: 'Gewöhnlich' })
            var fishart = ''
            for (let i = 0; i < fishArt.length; i++) {
                fishart += 'fisch: ' + fishArt[i].fischart + '\n'
            }
            geldAusFischen = Math.floor(Math.random() * 400) + 1
            fischen = `Gewöhnlich ${fishart}\nGeld: ${geldAusFischen}`
            fischenWerte.insgesamt = 1;
            fischenWerte.gewöhnlich = 1;
            await b.sendText(a.from, fischen)
            /*---------------------------------------------------------------------------------------------------------------------*/
        } else if (fishen > fischWGew && fishen <= fischWMuell) { // MÜLL
            fischenWerte.insgesamt = 1;
            fischenWerte.müll = 1;
            await b.sendText(a.from, `MÜLL`)
            /*---------------------------------------------------------------------------------------------------------------------*/
        } else if (fishen > fischWMuell && fishen <= fischWSelten) { // Selten 400 - 800
            const fishArt = await a.db.randomfish('fish', { seltenheit: 'Selten' })
            var fishart = ''
            for (let i = 0; i < fishArt.length; i++) {
                fishart += 'fisch: ' + fishArt[i].fischart + '\n'
            }
            geldAusFischen = Math.floor(Math.random() * 400) + 400
            fischen = `Selten ${fishart}\nGeld: ${geldAusFischen}`
            fischenWerte.insgesamt = 1;
            fischenWerte.selten = 1;
            await b.sendText(a.from, fischen)
            /*---------------------------------------------------------------------------------------------------------------------*/
        } else if (fishen > fischWSelten && fishen <= fischWEpisch) { // Episch 800 - 1200
            const fishArt = await a.db.randomfish('fish', { seltenheit: 'Episch' })
            var fishart = ''
            for (let i = 0; i < fishArt.length; i++) {
                fishart += 'fisch: ' + fishArt[i].fischart + '\n'
            }
            geldAusFischen = Math.floor(Math.random() * 400) + 800
            fischen = `Episch ${fishart}\nGeld: ${geldAusFischen}`
            fischenWerte.insgesamt = 1;
            fischenWerte.episch = 1;
            await b.sendText(a.from, fischen)
            /*---------------------------------------------------------------------------------------------------------------------*/
        } else if (fishen > fischWEpisch && fishen <= fischWLegend) { // Legendär 1200 - 1600
            const fishArt = await a.db.randomfish('fish', { seltenheit: 'Legendär' })
            var fishart = ''
            for (let i = 0; i < fishArt.length; i++) {
                fishart += 'fisch: ' + fishArt[i].fischart + '\n'
            }
            geldAusFischen = Math.floor(Math.random() * 400) + 1200
            fischen = `Legendär ${fishart}\nGeld: ${geldAusFischen}`
            fischenWerte.insgesamt = 1;
            fischenWerte.legendär = 1;
            await b.sendText(a.from, fischen)
            /*---------------------------------------------------------------------------------------------------------------------*/
        } else if (fishen > fischWLegend && fishen <= fischWMythisch) { // Mythisch 1600 - 2000
            const fishArt = await a.db.randomfish('fish', { seltenheit: 'Mythisch' })
            var fishart = ''
            for (let i = 0; i < fishArt.length; i++) {
                fishart += 'fisch: ' + fishArt[i].fischart + '\n'
            }
            geldAusFischen = Math.floor(Math.random() * 400) + 1600
            fischen = `Mythisch ${fishart}\nGeld: ${geldAusFischen}`
            fischenWerte.insgesamt = 1;
            fischenWerte.mythisch = 1;
            await b.sendText(a.from, fischen)
            /*---------------------------------------------------------------------------------------------------------------------*/
        } else if (fishen > fischWMythisch) { // Ultra 3000-5000
            const fishArt = await a.db.randomfish('fish', { seltenheit: 'Ultra' })
            var fishart = ''
            for (let i = 0; i < fishArt.length; i++) {
                fishart += 'fisch: ' + fishArt[i].fischart + '\n'
            }
            geldAusFischen = Math.floor(Math.random() * 2000) + 3000
            fischen = `Ultra ${fishart}\nGeld: ${geldAusFischen}`
            fischenWerte.insgesamt = 1;
            fischenWerte.ultra = 1;
            await b.sendText(a.from, fischen)
        }
        await a.waehrung.addGeld(a.sender.id, geldAusFischen)
        await a.db.addFishInventar(a.sender.id, fischenWerte)
        await a.db.addFishInventar('global', fischenWerte)
    }
}

module.exports = {
    fish
}
