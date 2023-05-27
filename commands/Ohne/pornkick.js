async function pkick(a, b, eng) {
    const isRegistered = await a.db.containsId('registered', a.sender.id)
    const isNsfw = a.isGroupMsg ? await a.db.groupinfoId('nsfw', a.groupId) : false
    const isGaming = a.isGroupMsg ? await a.db.groupinfoId('gaming', a.groupId) : false
    const isPremium = await a.db.containsId('premium', a.sender.id)
    await b.sendText(a.from, `Es werden nun alle Personen und bots gekickt die auf der Blacklist stehen!`)
    try {
        const members = await b.getGroupMembers(a.groupId)
        for (var i = 0; i < members.length; i++) {
            const isBitch = await a.db.containsNeu('testdb', { 'id': members[i].id });
            if (isBitch) {
                await b.removeParticipant(a.from, members[i].id)
            }
        }
        await b.sendText(a.from, `Erfolgreich alle Nummern gekickt die auf der Blacklist gelistet sind!`)
    } catch (err) {
        await b.sendText(a.from, err + '')
    }

}
module.exports = {
    pkick
}