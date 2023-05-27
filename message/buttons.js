var db = require('../function/db.js')
/**
 * Du wirst mit der Zeit ein paar requires brauchen (Datenbank oder MySQL oder Config zB, einfach hier drüber reinwerfen)
 */


module.exports = btnHandler = async (bocchi, message) => {
    const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
    let { body } = message
    const { name, formattedTitle } = chat
    let { pushname, verifiedName, formattedName } = sender
    pushname = pushname || verifiedName || formattedName
    var isInhaber = await db.teamContains('team', { 'id': sender.id, 'typ': 'Inhaber' });
    var isDeveloper = await db.teamContains('team', { 'id': sender.id, 'typ': 'Developer' });
    var isStvInhaber = await db.teamContains('team', { 'id': sender.id, 'typ': 'StvInhaber' });
    var isManager = await db.teamContains('team', { 'id': sender.id, 'typ': 'Manager' });
    var isMod = await db.teamContains('team', { 'id': sender.id, 'typ': 'Mod' });
    var isSupport = await db.teamContains('team', { 'id': sender.id, 'typ': 'Support' });
    var isHoster = await db.teamContains('team', { 'id': sender.id, 'typ': 'Hoster' });
    /**
     * Infos an mich selbst:
     * bocchi.reply funktioniert hier !NICHT!
     * Nutz am besten sendText oder sendTextWithMentions
     */

    switch (message.selectedButtonId) {
        case 'kickfilter_toggle':
            if(!isInhaber) return await bocchi.sendText(from, "Du bist kein Inhaber");
                if(body == 'Kickfilter: Ausmachen') {
                    //db eintrag zum Kickfilter ausmachen in message.chat.id
                } else {
                    //db eintrag zum Kickfilter anmachen in message.chat.id
                }
            break
        case 'rot2_Nein':
            bocchi.sendText(message.from, `btnHandler funktioniert`);
            console.log('btnHandler funktioniert.2')
            break
        case 'rot2_Drei':
            bocchi.sendText(message.from, `btnHandler funktioniert`);
            console.log('btnHandler funktioniert.2')
            break
    }
}