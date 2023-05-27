async function slot(a, b, eng) {

    const isGaming = a.isGroupMsg ? await a.db.groupinfoId('gaming', a.groupId) : false
    if (!isGaming) return await b.reply(a.from, eng.notGaming(), a.id)

    if ((await a.waehrung.getGeld(a.sender.id)) < 2000) {
        await b.reply(a.from, 'keine 2000 Währung', a.id)
        return
    }
    await a.waehrung.addGeld(a.sender.id, -2_000)


    let _spin1 = a.pickRandom(['1', '2', '3', '4', '5'])
    let _spin2 = a.pickRandom(['1', '2', '3', '4', '5'])
    let _spin3 = a.pickRandom(['1', '2', '3', '4', '5'])
    let _spin4 = a.pickRandom(['1', '2', '3', '4', '5'])
    let _spin6 = a.pickRandom(['1', '2', '3', '4', '5'])
    let _spin7 = a.pickRandom(['1', '2', '3', '4', '5'])
    let _spin8 = a.pickRandom(['1', '2', '3', '4', '5'])
    let _spin9 = a.pickRandom(['1', '2', '3', '4', '5'])
    let spin1 = (_spin1 * 1)
    let spin2 = (_spin2 * 1)
    let spin3 = (_spin3 * 1)
    let spin4 = (_spin4 * 1)
    let spin5 = (_spin5 * 1)
    let spin6 = (_spin6 * 1)
    let spin7 = (_spin7 * 1)
    let spin8 = (_spin8 * 1)
    let spin9 = (_spin9 * 1)
    let spins1 = (spin1 == 1 ? '🍊' : spin1 == 2 ? '🍇' : spin1 == 3 ? '🍉' : spin1 == 4 ? '🍌' : spin1 == 5 ? '🍍' : '')
    let spins2 = (spin2 == 1 ? '🍊' : spin2 == 2 ? '🍇' : spin2 == 3 ? '🍉' : spin2 == 4 ? '🍌' : spin2 == 5 ? '🍍' : '')
    let spins3 = (spin3 == 1 ? '🍊' : spin3 == 2 ? '🍇' : spin3 == 3 ? '🍉' : spin3 == 4 ? '🍌' : spin3 == 5 ? '🍍' : '')
    let spins4 = (spin4 == 1 ? '🍊' : spin4 == 2 ? '🍇' : spin4 == 3 ? '🍉' : spin4 == 4 ? '🍌' : spin4 == 5 ? '🍍' : '')
    let spins5 = (spin5 == 1 ? '🍊' : spin5 == 2 ? '🍇' : spin5 == 3 ? '🍉' : spin5 == 4 ? '🍌' : spin5 == 5 ? '🍍' : '')
    let spins6 = (spin6 == 1 ? '🍊' : spin6 == 2 ? '🍇' : spin6 == 3 ? '🍉' : spin6 == 4 ? '🍌' : spin6 == 5 ? '🍍' : '')
    let spins7 = (spin7 == 1 ? '🍊' : spin7 == 2 ? '🍇' : spin7 == 3 ? '🍉' : spin7 == 4 ? '🍌' : spin7 == 5 ? '🍍' : '')
    let spins8 = (spin8 == 1 ? '🍊' : spin8 == 2 ? '🍇' : spin8 == 3 ? '🍉' : spin8 == 4 ? '🍌' : spin8 == 5 ? '🍍' : '')
    let spins9 = (spin9 == 1 ? '🍊' : spin9 == 2 ? '🍇' : spin9 == 3 ? '🍉' : spin9 == 4 ? '🍌' : spin9 == 5 ? '🍍' : '')
    for (let i = 0; i < 3; i++) {
        b.reply(`
            *🎰VIRTUAL SLOTS🎰*

        ${a.pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${a.pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${a.pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}
        ${a.pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${a.pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${a.pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])} <<==
        ${a.pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${a.pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${a.pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}

    `.trim(), a.id)
    }
    let WinOrLose
    let cash = 0;
    if (spin1 == spin2 && spin2 == spin3 && spin3 == spin4 && spin4 == spin5 && spin5 == spin6 && spin6 == spin7 && spin7 == spin8 && spin8 == spin9) {
        cash = Math.floor(Math.random() * 100_000 + 100_000) // 100-200k
        WinOrLose = `BIG JACKPOT $${cash}`
    } else if (spin4 == spin5 && spin5 == spin6) {
        cash = Math.floor(Math.random() * 30_000 + 20_000) // 20-50k
        WinOrLose = `JACKPOT $${cash}`
    } else if ((spin1 == spin2 && spin2 == spin3) || (spin7 == spin8 && spin8 == spin9)) {
        cash = Math.floor(Math.random() * 3_000 + 2_000) // 2-5k
        WinOrLose = `DIKIT LAGI!! $${cash}`
    } else {
        WinOrLose = 'YOU LOSE'
    }

    await a.waehrung.addGeld(a.sender.id, cash)

    await b.reply(a.from, `
                *🎰VIRTUAL SLOTS🎰*

        ${spins1}|${spins2}|${spins3}
        ${spins4}|${spins5}|${spins6} <<==
        ${spins7}|${spins8}|${spins9}

        *${WinOrLose}*
        `.trim(), a.id)

} module.exports = {
    slot
}
