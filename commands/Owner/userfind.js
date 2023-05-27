async function userfind(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    var usertocheck = a.q.replace(/^0+/, '49').replace(/\D/g, '') + '@c.us'
    var groupidscheck = await b.getAllChatIds(true)
    let textausgabe = ''
    for (i = 0; i < groupidscheck.length; i++) {
        var memberstocheck = await b.getGroupMembersId(groupidscheck[i])
        if (memberstocheck.includes(usertocheck)) {
            var groupname = await b.getChatById(groupidscheck[i])
            textausgabe += groupname.name + '\n'
            textausgabe += groupname.id + '\n\n'
        }
    }
    await b.sendText(a.from, textausgabe)
}

module.exports = {
    userfind
}