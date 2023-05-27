async function hallo(a, b ,eng) {
    await b.reply(a.from, `HALLO OHNE CMD`, a.id)

}

module.exports = {
    hallo
}