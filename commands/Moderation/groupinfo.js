async function groupInfo(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    const isRegistered = await a.db.containsId('registered', a.sender.id)

    const isNsfw = a.isGroupMsg ? await a.db.groupinfoId('nsfw', a.groupId) : false
    const isKickfilter = a.isGroupMsg ? await a.db.groupinfoId('kickfilter', a.groupId) : false
    const isAntibeleidigung = a.isGroupMsg ? await a.db.groupinfoId('antibeleidigung', a.groupId) : false
    const isGaming = a.isGroupMsg ? await a.db.groupinfoId('gaming', a.groupId) : false
    const isWelcomeOn = a.isGroupMsg ? await a.db.groupinfoId('welcome', a.groupId) : false
    const isDetectorOnLINK = a.isGroupMsg ? await a.db.groupinfoId('antilink', a.groupId) : false
    const isLevelingOn = a.isGroupMsg ? await a.db.groupinfoId('leveling', a.groupId) : false
    const isAutoStickerOn = a.isGroupMsg ? await a.db.groupinfoId('autosticker', a.groupId) : false
    const isEveryoneOn = a.isGroupMsg ? await a.db.groupinfoId('everyone', a.groupId) : false
    const isMute = a.isGroupMsg ? await a.db.groupinfoId('mute', a.groupId) : false
    const isOmute = a.isGroupMsg ? await a.db.groupinfoId('omute', a.groupId) : false
    //const isAntisticker = a.isGroupMsg ? await db.groupinfoId('antisticker', groupId) : false

    const ALiNk = isDetectorOnLINK ? '*An*' : '*Aus*'
    const wc = isWelcomeOn ? '*An*' : '*Aus*'
    const nSfW = isNsfw ? '*An*' : '*Aus*'
    const lEvel = isLevelingOn ? '*An*' : '*Aus*'
    const oM = isOmute ? '*An*' : '*Aus*'
    const aM = isMute ? '*An*' : '*Aus*'
    const ev = isEveryoneOn ? '*Verboten*' : '*Erlaubt*'
    const As = isAutoStickerOn ? '*An*' : '*Aus*'
    const kf = isKickfilter ? '*An*' : '*Aus*'
    const gg = isGaming ? '*An*' : '*Aus*'
    const ab = isAntibeleidigung ? '*An*' : '*Aus*'

    if (!isRegistered) return await b.reply(a.from, eng.notRegistered(), a.id)
    if (!a.isGroupMsg) return await b.reply(a.from, eng.groupOnly(), a.id)
    if (!a.isGroupAdmins && !isTeam) return b.reply(a.from, eng.adminOnly(), a.id)
    var gcInfogi = await b.getGroupInfo(a.from) //Gruppenbeschrebung
    await b.reply(a.from, `*─「 ${gcInfogi.title} 」─*\n\nEveryone: ${ev}\nWelcome: ${wc}\nAntilink: ${ALiNk}\nNSFW: ${nSfW}\nLeveling: ${lEvel}\nAutosticker: ${As}\nAdmin-Modus: ${aM}\nOwner-Modus: ${oM}\nKickfilter: ${kf}\nGaming: ${gg}\nAntibeleidigung: ${ab}\n\n________________________________\n`, a.id)

}

module.exports = {
    groupInfo
}