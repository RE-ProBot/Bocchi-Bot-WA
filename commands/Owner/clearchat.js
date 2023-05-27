async function clearchat(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isModerator = await getRang('isModerator', a.sender.id, a.db)

    if (!isModerator) return await b.reply(a.from, eng.modOnly(), a.id)
    var ccmsg = await b.getAmountOfLoadedMessages()
    var underccdontdelete = 0
    if (typeof a.ar[0] !== typeof undefined) {
        underccdontdelete = a.args[0]
    }
    var ccgroupkickcheck = await b.getKickedGroups()
    const allChatsA = await b.getAllChatIds()
    // console.log(sessionId + '-------' + ccgroupkickcheck)
    if (ccmsg <= underccdontdelete) return await b.reply(a.from, `Ich habe ${ccmsg} Nachrichten.\nDa du eine Zahl angegeben hast lösche ich nur Nachrichten wenn ich über ${underccdontdelete} Nachrichten habe. \nMöchtest du das ich a löschen probiere /cc`, a.id)
    await b.reply(a.from, `${ccmsg} Nachrichten werden nun gelöscht`, a.id)
    for (let delChats of allChatsA) {
        // for (let delChats2 of ccgroupkickcheck) {
        if (delChats.includes('g.us')) {
            a.sleep(1000)
            await b.clearChat(delChats)
            // await b.deleteChat(delChats2)
        } else {
            a.sleep(1000)
            await b.deleteChat(delChats)
        }
    }
    // }
    await b.reply(a.from, 'Alle Nachrichten erfolgreich gelöscht.~ 👋', a.id)
    // await sleep(30000)
    //.then(async () => await b.kill())
    //.catch(() => new Error('Target closed.'))

} module.exports = {
    clearchat
}