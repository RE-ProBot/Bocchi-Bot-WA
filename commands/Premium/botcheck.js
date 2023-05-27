async function botCheck(a, b) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)
    if(!isModerator) return
    if(a.quotedMsg.sender.id != a.botNumber) return
    var hosts = await a.db.getOnline()
    var text = `*── 「 HOSTS 」 ──*\n`
    for(var i = 0; i < hosts.length; i++) {
        var icon = ''
        if(hosts[i].online == true || hosts[i].online == "true") {
            icon = '✅️'
        } else {
            icon = '📴'
        }
        text = text + `${i + 1}. ${hosts[i].id} - Status: ${icon} ${hosts[i].online}\n`
    }
    b.sendText(a.from, text)
}

module.exports = {
    botCheck
}