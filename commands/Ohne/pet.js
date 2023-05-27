async function pet(a, b ,eng) {
    const isGaming = a.isGroupMsg ? await a.db.groupinfoId('gaming', a.groupId) : false
    // if (!isGaming) return await b.reply(a.from, eng.notGaming(), a.id)
    const isPet = await a.db.containsId('pet', a.sender.id)

    const pet = await a.db.getNeu('pet', { 'id': a.sender.id })
    if (a.args[0] == 'buy') {
        var petTyp;
        var petHp;
        if (a.args[1] == '1') {
            petTyp = 'Pet1'
            petHp = 10
            petPreis = 1000
        } else if (a.args[1] == '2') {
            petTyp = 'Pet2'
            petHp = 20
            petPreis = 2000
        } else if (a.args[1] == '3') {
            petTyp = 'Pet3'
            petHp = 30
            petPreis = 3000
        } else if (a.args[1] == '4') {
            petTyp = 'Pet4'
            petHp = 40
            petPreis = 4000
        } else if (a.args[1] == '5') {
            petTyp = 'Pet5'
            petHp = 50
            petPreis = 5000
        } else if (a.args[1] == '6') {
            petTyp = 'Pet6'
            petHp = 60
            petPreis = 6000
        } else if (a.args[1] == '7') {
            petTyp = 'Pet7'
            petHp = 70
            petPreis = 7000
        } else if (a.args[1] == '8') {
            petTyp = 'Pet8'
            petHp = 80
            petPreis = 8000
        } else if (a.args[1] == '9') {
            petTyp = 'Pet9'
            petHp = 90
            petPreis = 9000
        } else if (a.args[1] == '10') {
            petTyp = 'Pet10'
            petHp = 100
            petPreis = 10000
        } else {
            await b.sendText(a.from, `Nur 1-10!`)
            return
        }
        if ((await a.waehrung.getGeld(a.sender.id)) < petPreis) {
            await b.reply(a.from, `keine ${petPreis} Währung`, a.id)
            return
        }
        await a.waehrung.addGeld(a.sender.id, -petPreis)
        try {
            await a.db.addNoCatch('pet', { 'id': a.sender.id, 'pettyp': petTyp, 'pethp': petHp })
            await b.sendText(a.from, `Du hast erfolgreich ${petTyp} für ${petPreis} gekauft.`)
        } catch (e) {
            await b.reply(a.from, `Du hast bereits ein Pet.`, a.id)
        }
    } else if (a.args[0] == 'setname' || a.args[0] == 'sn') {

    } else if (a.args[0] == 'sell') {

    } else {
        if (!isPet) {
            await b.sendText(a.from, `Du hast Kein Pet Kauf dir doch Eins`)
        } else {
        await b.sendText(a.from, `PetTyp: ${pet.pettyp}\nPetName: ${pet.petname}\nPetXp: ${pet.petxp}\nPetHP: ${pet.pethp}`)
    }
}

}

module.exports = {
    pet
}