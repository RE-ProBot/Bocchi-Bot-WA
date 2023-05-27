async function ob(a, b) {
    const dataJson1 = await a.db.getFromAllWithWhere('team', { 'typ': 'Inhaber' })
    const dataJson2 = await a.db.getFromAllWithWhere('team', { 'typ': 'StvInhaber' })
    let txt;
    txt = '        -----[ OWNERBOT ]----- \n\n'
    txt += 'Dies sind meine Owner\n'
    for (let i = 0; i < dataJson1.length; i++) {
        txt += '\n' + dataJson1[i].name + '  ->  ' + '@' + dataJson1[i].id.replace('@c.us', '') + '\nwa.me/' + dataJson1[i].id.replace('@c.us', '')
    }
    for (let i = 0; i < dataJson2.length; i++) {
        txt += '\n' + dataJson2[i].name + '  ->  ' + '@' + dataJson2[i].id.replace('@c.us', '') + '\nwa.me/' + dataJson2[i].id.replace('@c.us', '')
    }
    txt += '\n\nKlicke auf die Markierung um in den Chat zu kommen!\n\n⚔️❤️ Слава 𝒰.𝒮.𝒮.𝑅 ⚔️❤️\n--------------------------\n🤍💙 Слава 𝓥𝓮𝓷𝓸𝓧 🤍💙'
    await b.sendTextWithMentions(a.from, txt)
}

module.exports = {
    ob
}