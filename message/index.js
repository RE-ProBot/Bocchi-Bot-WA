/* eslint-disable no-redeclare */
/* eslint-disable no-case-declarations */
/********** MODULES **********/
const importFresh = require('import-fresh')
const { decryptMedia, Client } = require('@open-wa/wa-automate')
const fs = require('fs-extra')
const Nekos = require('nekos.life')
const neko = new Nekos()
const os = require('os')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const api = new API()
const NanaAPI = require('nana-api')
const nana = new NanaAPI()
const exec = require('await-exec')
const webp = require('webp-converter')
const sharp = require('sharp')
const config = require('../config.json')
const axios = require('axios')
const tts = require('node-gtts')
const nekobocc = require('nekobocc')
const ffmpeg = require('fluent-ffmpeg')
const bent = require('bent')
const path = require('path')
const ms = require('parse-ms')
const toMs = require('ms')
const canvas = require('canvacord')
const mathjs = require('mathjs')
const moment = require('moment-timezone')
const translate = require('@vitalets/google-translate-api')
const google = require('google-it')
const { fetchJson } = require('../tools/fetcher')
const ph = require('@justalk/pornhub-api')

async function sleep(time) {
    return await new Promise((resolve) => setTimeout(resolve, time));
}


/**
 * Get random lewd images from given subreddits.
 * @returns {Object}
 */
const randomLewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'furry', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

//Nando-BETA
//Yaoi wurde angefragt:
const randomYaoi = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/yaoi')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

//Nando-BETA
//Yuri verbesserte version:
const randomYuri = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/yuri')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get armpits pict.
 * @returns {Object}
 */
const armpits = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get feets pict.
 * @returns {Object}
 */
const feets = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get thighs pict.
 * @returns {Object}
 */
const thighs = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ass pict.
 * @returns {Object}
 */
const ass = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get boobs pict.
 * @returns {Object}
 */
const boobs = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get belly pict.
 * @returns {Object}
 */
const belly = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animebellybutton')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get sideboobs pict.
 * @returns {Object}
 */
const sideboobs = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ahegao pict.
 * @returns {Object}
 */
const ahegao = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Pornhub metadata from URL.
 * @param {String} url
 * @returns {Object}
 */
const phDl = (url) => new Promise((resolve, reject) => {
    ph.page(url, ['title', 'download_urls', 'thumbnail_url'])
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get XXX video from URL.
 * @param {String} url
 * @returns {Object}
 */
const xxx = (url) => new Promise((resolve, reject) => {
    fetchJson(`https://api.vhtear.com/xxxdownload?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


// Premium version

/**
 * Get lewds.
 * @returns {Object}
 */
const mlewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'furry', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/5`) // Silakan atur jumlahnya
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


/**
 * Get armpits pict.
 * @returns {Object}
 */
const marmpits = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get feets pict.
 * @returns {Object}
 */
const mfeets = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get thighs pict.
 * @returns {Object}
 */
const mthighs = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ass pict.
 * @returns {Object}
 */
const mass = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get boobs pict.
 * @returns {Object}
 */
const mboobs = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get belly pict.
 * @returns {Object}
 */
const mbelly = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animebellybutton/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get sideboobs pict.
 * @returns {Object}
 */
const msideboobs = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ahegao pict.
 * @returns {Object}
 */
const mahegao = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


module.exports = {
    randomLewd,
    randomYaoi,
    randomYuri,
    armpits,
    feets,
    thighs,
    ass,
    boobs,
    belly,
    sideboobs,
    ahegao,
    phDl,
    xxx,
    mlewd,
    mahegao,
    marmpits,
    mass,
    mbelly,
    mboobs,
    mfeets,
    msideboobs,
    mthighs
}

/********** END OF MODULES **********/



/********** UTILS **********/
const { color, isUrl, createSerial } = require('../tools')
const { nsfw, weeaboo, fun, misc, meme } = require('../lib')
const { uploadImages } = require('../tools/fetcher')
var eng = importFresh('../message/text/lang/eng.js')
const { register, afk, reminder } = require('../function')
var db = importFresh('../function/db.js')
var helper = importFresh('../function/helper.js')
var level = importFresh('../function/level.js')
var premium = importFresh('../function/premium.js')
var daily = importFresh('../function/daily.js')
var waehrung = importFresh('../function/waehrung.js')
var Filter = importFresh('../function/filter.js')
var cmds = importFresh('../commands/index.js')
const Exif = require('../tools/exif')
const exif = new Exif()
var cd = ''
const errorImg = 'https://i.ibb.co/jRCpLfn/user.png'
/********** END OF UTILS **********/

/********** MESSAGE HANDLER **********/
// eslint-disable-next-line no-undef
module.exports = msgHandler = async (bocchi = new Client(), message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        const botNumber = await bocchi.getHostNumber() + '@c.us'

        const Justin_Inhaber = '49@c.us'
        const Nando_Inhaber = '49@c.us'
        const Rey_StvInahber = '49@c.us'
        //Ookami
        //BetaTester
        //Ausnahmen
        const Ausnahme_1 = config.Ausnahme_1
        //_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_-=-_
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await bocchi.getGroupAdmins(groupId) : ''
        const time = moment(t * 1000).format('YYYY/MM/DD HH:mm:ss')
        const timeDE = moment(t * 1000).format('DD/MM/YYYY HH:mm:ss') //Zeit Nachricht
        const bcmd = text || caption || body || ''
        const command = bcmd.toLowerCase().split(' ')[0] || ''

        let prefix = ','

        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption || type === 'video' && caption) && caption.startsWith(prefix)) ? caption : ''

        const args = body.trim().split(/ +/).slice(1)
        const uaOverride = config.uaOverride
        const ar = args.map((v) => v.toLowerCase())
        const url = args.length !== 0 ? args[0] : ''
        const q = args.join(' ')

        /**         BOT SPEZIFISCHE SETTINGS         **/
        const sessionId = bocchi.getSessionId();
        let memberLimit = 500;
        let groupLimit = 20;



        /********** VALIDATOR **********/

        const isCmd = body.startsWith(prefix)


        /*
        *Ränge
        */
        var isInhaber = await db.teamContains('team', { 'id': sender.id, 'typ': 'Inhaber' });
        var isDeveloper = await db.teamContains('team', { 'id': sender.id, 'typ': 'Developer' });
        var isStvInhaber = await db.teamContains('team', { 'id': sender.id, 'typ': 'StvInhaber' });
        var isManager = await db.teamContains('team', { 'id': sender.id, 'typ': 'Manager' });
        var isMod = await db.teamContains('team', { 'id': sender.id, 'typ': 'Mod' });
        var isSupport = await db.teamContains('team', { 'id': sender.id, 'typ': 'Support' });
        var isHoster = await db.teamContains('team', { 'id': sender.id, 'typ': 'Hoster' });
        /*
        *Berechtigungen
        */
        var isOwner = isStvInhaber || isDeveloper || isInhaber
        var isLeitung = isManager || isStvInhaber || isDeveloper || isInhaber
        var isModerator = isMod || isManager || isStvInhaber || isDeveloper || isInhaber
        var isTeam = isHoster || isSupport || isMod || isManager || isStvInhaber || isDeveloper || isInhaber
        /*
        * if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
        * if (!isLeitung) return await bocchi.reply(from, eng.leitungOnly(), id)
        * if (!isModerator) return await bocchi.reply(from, eng.modOnly(), id)
        * if (!isTeam) return await bocchi.reply(from, eng.teamOnly(), id)
         */

        const isBocchiBot = await db.containsNeu('isBocchiBot', { 'botnummer': sender.id })
        const isOokami = await db.containsNeu('isBocchiBot', { 'botnummer': sender.id })
        if (isOokami == true || isOokami == 'true') return
        const isAusnahme = sender.id == Ausnahme_1
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber) : false

        //Datenbank
        const isBanned = await db.containsId('banned', sender.id)
        const banned = await db.getId('banned', sender.id)
        const isPremium = await db.containsId('premium', sender.id)
        const isRegistered = await db.containsId('registered', sender.id)
        const isNsfw = isGroupMsg ? await db.groupinfoId('nsfw', groupId) : false
        const isKickfilter = isGroupMsg ? await db.groupinfoId('kickfilter', groupId) : false
        const isAntibeleidigung = isGroupMsg ? await db.groupinfoId('antibeleidigung', groupId) : false
        const isDetectorOnLINK = isGroupMsg ? await db.groupinfoId('antilink', groupId) : false
        const isDetectorOnBITCH = true
        const isLevelingOn = isGroupMsg ? await db.groupinfoId('leveling', groupId) : false
        const isAutoStickerOn = isGroupMsg ? await db.groupinfoId('autosticker', groupId) : false
        const isEveryoneOn = isGroupMsg ? await db.groupinfoId('everyone', groupId) : false
        const isMute = isGroupMsg ? await db.groupinfoId('mute', groupId) : false
        const isOmute = isGroupMsg ? await db.groupinfoId('omute', groupId) : false
        const isAfkOn = isGroupMsg ? await afk.checkAfkUser(sender.id) : false
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const isQuotedAudio = quotedMsg && quotedMsg.type === 'audio'
        const isQuotedVoice = quotedMsg && quotedMsg.type === 'ptt'
        const isImage = type === 'image'
        const isVideo = type === 'video'
        const isAudio = type === 'audio'
        const isVoice = type === 'ptt'
        const isMe = quotedMsgObj ? quotedMsgObj.fromMe : false
        //constante / variable Gruppenintern
        var gcLink;
        var isGroupOwner;
        try {
            await bocchi.getGroupInviteLink(groupId).then(function (result) {
                gcLink = result
            })
            isGroupOwner = chat.groupMetadata.owner == sender.id

        } catch (err) {
            //
        }
        const svlist = JSON.parse(fs.readFileSync('./database/zomby/groups.json'))
        process.env.TZ = 'Europe/Berlin'
        var theDate = new Date()
        theDate.setFullYear(2023)
        theDate.setMonth(11)
        theDate.setDate(30)
        theDate.setHours(23)
        theDate.setMinutes(59)
        theDate.setSeconds(59)

        const formater = (seconds) => {
            const pad = (s) => { return (s < 10 ? '0' : '') + s }
            const hrs = Math.floor(seconds / (60 * 60))
            const mins = Math.floor(seconds % (60 * 60) / 60)
            const secs = Math.floor(seconds % 60)
            return ' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
        }
        const uptime = process.uptime()

        const randomlgbtq = [Math.floor(Math.random() * (101 - 1 + 1)) + 1]


        let chatzt = []
        chatzt = await bocchi.getAllChatIds(true) // offene chats

        const AdsGroupID = ('120363038675874425@g.us') //BochiBot - AdminSupport
        const RegGroupID = ('120363039259018408@g.us') //BochiBot - Register
        const DevGroupID = ('120363022360920817@g.us') //BochiBot - Developer

        // var poll1 = await db.countWhere('vote', { 'vote1': '1' })


        const ses = await bocchi.getSnapshot() //const für screenshot web whatsapp

        var timername = ''




        /********** END OF VALIDATOR **********/
        // ROLE (Change to what you want, or add) and you can change the role sort based on XP.
        //leck mich ~13.09.2022
        //var role = 'AktivitätenLevel'

        const levelRole = level.getLevelingLevel(sender.id, level)
        var role = 'Copper V'
        if (levelRole >= 10) {
            role = 'Copper IV'
        } if (levelRole >= 20) {
            role = 'Copper III'
        } if (levelRole >= 30) {
            role = 'Copper II'
        } if (levelRole >= 40) {
            role = 'Copper I'
        } if (levelRole >= 50) {
            role = 'Silver V'
        } if (levelRole >= 60) {
            role = 'Silver IV'
        } if (levelRole >= 70) {
            role = 'Silver III'
        } if (levelRole >= 80) {
            role = 'Silver II'
        } if (levelRole >= 90) {
            role = 'Silver I'
        } if (levelRole >= 100) {
            role = 'Gold V'
        } if (levelRole >= 110) {
            role = 'Gold IV'
        } if (levelRole >= 120) {
            role = 'Gold III'
        } if (levelRole >= 130) {
            role = 'Gold II'
        } if (levelRole >= 140) {
            role = 'Gold I'
        } if (levelRole >= 150) {
            role = 'Platinum V'
        } if (levelRole >= 160) {
            role = 'Platinum IV'
        } if (levelRole >= 170) {
            role = 'Platinum III'
        } if (levelRole >= 180) {
            role = 'Platinum II'
        } if (levelRole >= 190) {
            role = 'Platinum I'
        } if (levelRole >= 200) {
            role = 'Exterminator V'
        } if (levelRole >= 210) {
            role = 'Exterminator IV'
        } if (levelRole >= 220) {
            role = 'Exterminator III'
        } if (levelRole >= 230) {
            role = 'Exterminator II'
        } if (levelRole >= 240) {
            role = 'Exterminator I'
        } if (levelRole >= 300) {
            role = 'Diamond III'
        } if (levelRole >= 350) {
            role = 'Diamond II'
        } if (levelRole >= 400) {
            role = 'Diamond I'
        } if (levelRole >= 420) {
            role = 'Happy 420'
        } if (levelRole >= 500) {
            role = 'Addicted User'
        } if (levelRole >= 600) {
            role = 'Immortal'
        } if (levelRole >= 666) {
            role = 'Teufel'
        } if (levelRole >= 700) {
            role = 'Allwissend'
        } if (levelRole >= 777) {
            role = 'Jackpot'
        } if (levelRole >= 800) {
            role = 'Chatter'
        } if (levelRole >= 900) {
            role = 'Smombie'
        } if (levelRole >= 250) {
            role = 'BOSS'
        } if (isTeam) {
            role = '🛡️ Bocchi Team 🛡️'
        }


        // Leveling [BETA] by Slavyan
        if (isGroupMsg && isRegistered && !level.isGained(sender.id) && !isBanned && isLevelingOn) {
            try {
                level.addCooldown(sender.id)
                const currentLevel = await level.getLevelingLevel(sender.id)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                await level.addLevelingXp(sender.id, amountXp)
                if (requiredXp <= await level.getLevelingXp(sender.id)) {
                    await level.addLevelingLevel(sender.id, 1)
                    const userLevel = await level.getLevelingLevel(sender.id)
                    const fetchXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    await bocchi.reply(from, `*── 「 LEVEL UP 」 ──*\n\n➸ *Name*: ${pushname}\n➸ *XP*: ${await level.getLevelingXp(sender.id)} / ${fetchXp}\n➸ *Level*: ${currentLevel} -> ${await level.getLevelingLevel(sender.id)} 🆙 \n➸ *Role*: *${role}*`, id)
                }
            } catch (err) {
                console.error(err)
            }
        }


        // Anti group link detector
        if (isGroupMsg && !isGroupAdmins && !isOwner && isBotGroupAdmins && !isAusnahme && !isBocchiBot && !isOokami && isDetectorOnLINK) {
            if (typeof message.text !== typeof undefined) {
                if (message.text.match(gcLink)) return
                if (message.text.toLowerCase().match(new RegExp(/(https:\/\/chat.whatsapp.com)/))) {
                    await bocchi.removeParticipant(groupId, sender.id)
                    await bocchi.deleteMessage(groupId, message.id, false)
                    console.log(`\x1b[1m\x1b[31m[GROUPKICK]\x1b[36m [${sessionId}]\x1b[33m Gruppenlink entdeckt und gekickt\x1b[37m in ${name || formattedTitle}!\x1b[0m`);
                }
            }
        }
        // Anti BITCH link detector
        if (isGroupMsg && !isGroupAdmins && !isOwner && isBotGroupAdmins && !isBocchiBot && !isAusnahme && isDetectorOnBITCH) {
            if (sender.id == botNumber || isBocchiBot || isOokami) return
            var checkTxt = message.text + '';
            var newCheckTxt = checkTxt.toLowerCase() + ''
            const dataJson = await db.getFromAll('antibitch')
            for (let i = 0; i < dataJson.length; i++) {
                if (newCheckTxt.includes(dataJson[i].url)) { //omg... ich bin so dumm glaub ich... wenns jtz geht hat das .url gefehlt
                    console.log(`\x1b[1m\x1b[31m[BITCHKICK]\x1b[36m [${sessionId}]\x1b[33m Bitchlink entdeckt und gekickt\x1b[37m in ${name || formattedTitle}!\x1b[0m`);
                    await bocchi.deleteMessage(groupId, message.id, false)
                    await bocchi.removeParticipant(groupId, sender.id)
                    await db.add('testdb', { 'id': sender.id, 'bot': '1' })
                }
            }
        }

        // Antibeleidigung
        if (isGroupMsg && !isGroupAdmins && !isLeitung && !isOokami && isBotGroupAdmins && !isBocchiBot && !isAusnahme && isAntibeleidigung) {
            var checkTxt = message.body + '';
            var newCheckTxt = checkTxt.toLowerCase() + ''
            const dataJson = await db.getFromAllWithWhere('antibeleidigung', { 'id': groupId })//JSON.parse(data)
            for (let i = 0; i < dataJson.length; i++) {
                if (newCheckTxt.includes(dataJson[i].beleidigung)) { //omg... ich bin so dumm glaub ich... wenns jtz geht hat das .url gefehlt
                    await db.updateVerwarnungssystem({ 'groupid': groupId, 'userid': sender.id, 'verwarnungsanzahlautomatisch': 1 })
                    const verwEintag = await db.getWhereWhere('verwarnungssystem', 'groupid', 'userid', { 'spalte1': groupId, 'spalte2': sender.id });

                    if (1 === verwEintag.verwarnungsanzahlautomatisch) {
                        await bocchi.sendTextWithMentions(from, `@${sender.id} Dies ist deine erste Verwarnung.\nKann ja mal passieren.\nHalte dich bitte an die Gruppenregeln.`)
                    } else if (2 === verwEintag.verwarnungsanzahlautomatisch) {
                        await bocchi.sendTextWithMentions(from, `@${sender.id} Dies ist deine zweite Verwarnung.\nSolltest du noch einmal beleidigen wirst du aus der Gruppe entfernt!`)
                    } else if (3 <= verwEintag.verwarnungsanzahlautomatisch) {
                        await bocchi.sendTextWithMentions(from, `@${sender.id} Dies wäre deine dritte Verwarnung.\nAllerdings gibt es nun einen Kick aus der Gruppe!`)
                        console.log(`\x1b[1m\x1b[31m[ANTIBELEIDIGUNG]\x1b[36m [${sessionId}]\x1b[33m Beleidigung entdeckt und gekickt\x1b[37m in ${name || formattedTitle}!\x1b[0m`);
                        try {
                            await bocchi.removeParticipant(groupId, sender.id)
                        } catch (e) {
                            console.log(e);
                        }
                        await db.setVerwNull({ 'groupid': groupId, 'userid': sender.id })
                    }
                    break
                }
            }
        }

        // Anti virtext by: @VideFrelan
        if (isGroupMsg && !isGroupAdmins && !isInhaber && isBotGroupAdmins) {
            if (typeof message.body !== typeof undefined && message.body.lenght > 5000) {
                await bocchi.sendTextWithMentions(from, `@${sender.id} is detected sending a virtext.\nYou will be kicked!`)
                await bocchi.removeParticipant(groupId, sender.id)
            }
        }

        // Auto sticker
        if (isGroupMsg && isAutoStickerOn && isMedia && isImage && !isCmd) {
            if ((isMedia || isQuotedImage) && args.length === 0) {
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                await bocchi.sendImageAsSticker(from, imageBase64, { keepScale: true, author: 'Bocchibot', pack: 'Sticker', discord: '907573119433187329' })
            }
        }

        // Auto sticker video
        if (isGroupMsg && isAutoStickerOn && isMedia && isVideo && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await bocchi.sendMp4AsSticker(from, videoBase64, { stickerMetadata: true, pack: 'BocchiBot', author: 'Sticker', discord: '907573119433187329', fps: 30, startTime: '00:00:00.0', endTime: '00:00:05.0', crop: false, loop: 0 })
        }

        // AFK by Slavyan
        if (isGroupMsg) {
            if (sender.id == botNumber || isBocchiBot || isOokami) return
            for (let ment of mentionedJidList) {
                if (await afk.checkAfkUser(ment)) {
                    const getId = await afk.getAfkId(ment)
                    const getReason = await afk.getAfkReason(getId)
                    const getTime = await afk.getAfkTime(getId)
                    await bocchi.sendText(from, eng.afkMentioned(getId, getReason, getTime), id)
                }
            }
            if (await afk.checkAfkUser(sender.id) && !isCmd) {
                await db.removeId('afk', sender.id)
                await bocchi.sendText(from, eng.afkDone(pushname))
            }
        }
        //Adminmodus
        if (isCmd && isMute && !isGroupAdmins && !isTeam) return await bocchi.reply(from, 'In dieser Gruppe ist Admin-Modus aktiviert das bedeutet hier können nur Teammitglieder und Admins Befehle machen!', id)

        //Ownermodus
        if (isCmd && isOmute && !isLeitung) return await bocchi.reply(from, 'In dieser Gruppe ist *Owner-Modus* aktiviert das bedeutet hier können nur Teammitglieder Befehle machen!', id)

        //Befehle ignorieren
        //if (isCmd && isBocchiBot) return
        if (isCmd && isOokami) return

        // Ignore banned and blocked users
        if (isCmd && isBanned && !isGroupMsg && command !== `${prefix}ownerbot` && command !== `${prefix}mydata` && command !== `${prefix}datadelete`) {
            console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`[${sessionId}]`), color(`${command} [${args.length}]`), 'from', color(pushname))
            if (banned.permant) {
                await bocchi.reply(from, `*── 「 GEBANNT 」 ──*\n\nDu wurdest gebannt mit dem Grund:\n➸ ${banned.grund}\nDeine Daten kannst du einsehen mit:\n➸ ${prefix}mydata\nUm sie zu löschen schreibe\n➸ ${prefix}datadelete\nDein Ban bleibt *weiterhin* bestehen.\nMelde dich mit dieser Botnachricht bei einem\n➸ ${prefix}ownerbot`, id)
            } else {
                await bocchi.reply(from, `*── 「 TMP. GEBANNT 」 ──*\n\nDu wurdest gebannt mit dem Grund:\n➸ ${banned.grund}\nBis: ${moment(banned.ablauf).format('DD/MM/YYYY HH:mm:ss')}\nDeine Daten kannst du einsehen mit:\n➸ ${prefix}mydata\nUm sie zu löschen schreibe\n➸ ${prefix}datadelete\nDein Ban bleibt *weiterhin* bestehen.\nMelde dich mit dieser Botnachricht bei einem\n➸ ${prefix}ownerbot`, id)
            }
            return
        }
        if (isCmd && isBanned && isGroupMsg && command !== `${prefix}ownerbot` && command !== `${prefix}mydata` && command !== `${prefix}datadelete`) {
            if (banned.permant) {
                console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`[${sessionId}]`), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
                await bocchi.reply(from, `*── 「 GEBANNT 」 ──*\n\nDu wurdest gebannt mit dem Grund:\n➸ ${banned.grund}\nDeine Daten kannst du einsehen mit:\n➸ ${prefix}mydata\nUm sie zu löschen schreibe\n➸ ${prefix}datadelete\nDein Ban bleibt *weiterhin* bestehen.\nMelde dich mit dieser Botnachricht bei einem\n➸ ${prefix}ownerbot`, id)
            } else {
                console.log(color('[TEMPBAN]', 'red'), color(time, 'yellow'), color(`[${sessionId}]`), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
                await bocchi.reply(from, `*── 「 TMP. GEBANNT 」 ──*\n\nDu wurdest gebannt mit dem Grund:\n➸ ${banned.grund}\nBis: ${moment(banned.ablauf).format('DD/MM/YYYY HH:mm:ss')}\nDeine Daten kannst du einsehen mit:\n➸ ${prefix}mydata\nUm sie zu löschen schreibe\n➸ ${prefix}datadelete\nDein Ban bleibt *weiterhin* bestehen.\nMelde dich mit dieser Botnachricht bei einem\n➸ ${prefix}ownerbot`, id)
            }
            return
        }
        // Anti spam
        if (isCmd && Filter.isFiltered(from) && !isGroupMsg) {
            console.log(`\x1b[1m\x1b[44m\x1b[31m[PRIVATE-SPAM]\x1b[0m\x1b[1m\x1b[32m [${sessionId}]\x1b[33m [${timeDE}]\x1b[33m ${command}\x1b[33m [${args.length}]\x1b[31m\x1b[4m from ${pushname} - ${sender.id.replace('@c.us', '')}\x1b[0m`)
        }
        if (isCmd && Filter.isFiltered(from) && isGroupMsg) {
            console.log(`\x1b[1m\x1b[44m\x1b[31m[GROUP-SPAM]\x1b[0m\x1b[1m\x1b[32m [${sessionId}]\x1b[33m [${timeDE}]\x1b[33m ${command}\x1b[33m [${args.length}]\x1b[31m\x1b[4m from ${pushname} - ${sender.id.replace('@c.us', '')}\x1b[om`)     // Log
        }
        // bleibt alles
        if (isCmd && Filter.isFiltered(from) && !isTeam && !isGroupMsg) return console.log(`\x1b[1m\x1b[44m\x1b[31m[PRIVATE-SPAM]\x1b[0m\x1b[1m\x1b[32m [${sessionId}]\x1b[33m [${timeDE}]\x1b[33m ${command}\x1b[33m [${args.length}]\x1b[31m\x1b[4m from ${pushname} - ${sender.id.replace('@c.us', '')}\x1b[0m`)
        if (isCmd && Filter.isFiltered(from) && !isTeam && isGroupMsg && !isOokami) return console.log(`\x1b[1m\x1b[44m\x1b[31m[GROUP-SPAM]\x1b[0m\x1b[1m\x1b[32m [${sessionId}]\x1b[33m [${timeDE}]\x1b[33m ${command}\x1b[33m [${args.length}]\x1b[31m\x1b[4m from ${pushname} - ${sender.id.replace('@c.us', '')}\x1b[0m`)     // Log
        if (isCmd && !isTeam && !isPremium && !Filter.isFiltered(from)) Filter.addFilter(from)

        if (isCmd && !isGroupMsg) {
            console.log(`\x1b[1m\x1b[32m[PRIVATE-CMD]\x1b[35m [${sessionId}] \x1b[37m [${timeDE}]  ${command} [${args.length}] from ${pushname}\x1b[0m`);
        }
        if (isCmd && isGroupMsg) {
            console.log(`\x1b[1m\x1b[32m[GROUP-CMD]\x1b[35m [${sessionId}]\x1b[37m [${timeDE}]  ${command} [${args.length}] from ${pushname} in ${name || formattedTitle}\x1b[0m`);
            await db.addGroupinfoMitWert('sessionid', { 'id': groupId, 'wert': sessionId });
        }

        //var ezBC = 'ℹ KLEINE INFO\n\n_Befehl /xp ist jetzt *privat* möglich_\n\nCheckt doch gerne mal die Links von unseren beiden Gruppen ab^^\n\n_Bocchi - Chatgruppe_\n```https://chat.whatsapp.com/KiNqTgzLnhdIYt7nLptKcn```\n\n\n_Bocchi - Werbegruppe_\n```https://chat.whatsapp.com/FuOCQ4YPnnK980VpzitIrp```'
        if (isCmd && !isBanned) {
            if (message.isGroupMsg) {
                // await bocchi.sendText(from, ezBC)
                db.add('log', { command: command + ' ' + q, userid: sender.id, time: timeDE, sessionid: sessionId, groupid: groupId })
            } else {
                db.add('log', { command: command + ' ' + q, userid: sender.id, time: timeDE, sessionid: sessionId, groupid: 'PRIVAT' })
            }
        }
        const allesTest = importFresh('../lib/alles.js')
        var alles;
        if (isCmd && !isBanned) {
            alles = await allesTest.getAlles(bocchi, message, db, waehrung, daily, helper, level, premium, eng) // <-- Falls was fehlt, hier und in /lib/alles.js einfügen
            // Solange du noch nicht umgebaut hast, würde ich die erstmal hier platzieren
        }
        var crypto = require('crypto');

        switch (command) {

            //Nando testet 1x alles an Funktionen ~14.01.2023

            case prefix + 'function':
                if (!isOwner) return await bocchi.reply(from, eng.cmdNotFound(), id)
                if (sessionId == 'Nando') {
                    cmds.testfunction(alles, bocchi, eng)
                } else {
                    //
                }
                break

            case prefix + 'bewerbung':
            case prefix + 'bw':
                await bocchi.sendText(from,
                    `Developer Bewerbung bitte fülle dies im Format aus

Wie heißt du:
Wie alt bist du:
Wie lange programmierst du schon:
Hast du Projekte? Wenn ja link
Welche Programmiersprachen kannst du bereits?
Bist du vertraut mit bailyes und/oder open wa?
Bist du zusätzlich vertraut mit Typescript?
MySQL Vorwissen?
Gewünscht ist dazu das du *in keinem rpg bist und nichts mit Crashen/Bannen/loggen/cp* zutun hast 

Kein chat 

_Fake/Troll Bewerbung hat permanenten Ausschluss aus dem System zur folge_

Wenn du dies ausgefüllt hast sende es in die Bewerber Gruppe
https://chat.whatsapp.com/Kz5vR0ucJRY5gedssoPZae`)
                break
            case prefix + 'pkick':
                cmds.pkick(alles, bocchi, eng)
                break
            case prefix + 'ghv':
                try {
                    var kickcheck = await bocchi.getKickedGroups()
                    await bocchi.sendText(from, JSON.stringify(kickcheck))
                    console.log(sessionId + '------------------------------' + kickcheck)
                } catch (err) {
                    console.log(err)
                    await bocchi.sendText(from, err + '')
                }
                break

            case prefix + 'vorstellen':
            case prefix + 'vt':
                cmds.vorstellen(alles, bocchi, eng) // alias vt fehlt
                break
            case prefix + 'fish':
                cmds.fish(alles, bocchi, eng)
                break
            case prefix + 'pet':
                cmds.pet(alles, bocchi, eng)
                break
            case prefix + 'slot':
                cmds.slot(alles, bocchi, eng)
                break
            case prefix + 't0g3test':
                cmds.test(alles);
                break

            case prefix + 'deljoin':
                cmds.deljoin(alles, bocchi, eng)
                break

            case prefix + 'addmeall':
                cmds.addmeall(alles, bocchi, eng)
                break
            case prefix + 'minecraft':
                await bocchi.sendText(from, 'Minecraft is toll')
                /*
                                await bocchi.sendVideoAsGif(from, './minecraft/diamondore.mp4', 'diamondore.mp4', 'OMG...Ein Diamant');
                                await bocchi.sendMp4AsSticker(from, './minecraft/diamondore.mp4', { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:10.0`, loop: 0 }, { pack: `Erstellt für`, keepScale: true, author: `${pushname}` })
                                await bocchi.sendMp4AsSticker(from, './minecraft/ironore.mp4', { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:10.0`, loop: 0 }, { pack: `Erstellt für`, keepScale: true, author: `${pushname}` })
                                await bocchi.sendMp4AsSticker(from, './minecraft/coalore.mp4', { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:10.0`, loop: 0 }, { pack: `Erstellt für`, keepScale: true, author: `${pushname}` })
                                await bocchi.sendMp4AsSticker(from, './minecraft/goldore.mp4', { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:10.0`, loop: 0 }, { pack: `Erstellt für`, keepScale: true, author: `${pushname}` })
                                await bocchi.sendMp4AsSticker(from, './minecraft/emeraldore.mp4', { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:10.0`, loop: 0 }, { pack: `Erstellt für`, keepScale: true, author: `${pushname}` })
                                await bocchi.sendMp4AsSticker(from, './minecraft/craftingtable.mp4', { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:10.0`, loop: 0 }, { pack: `Erstellt für`, keepScale: true, author: `${pushname}` })
                                await bocchi.sendMp4AsSticker(from, './minecraft/diamond_pickaxe.mp4', { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:10.0`, loop: 0 }, { pack: `Erstellt für`, keepScale: true, author: `${pushname}` })
                */
                break
            case prefix + 'unblockall':
                cmds.unblockall(alles, bocchi, eng)
                break
            case prefix + 'howmuch':
                cmds.howmuch(alles, bocchi, eng)
                break
            //nicht im Menu eingetragen, mfg ~N
            case prefix + 'neuerbot':
                cmds.neuerbot(alles, bocchi, eng)
                break
            case prefix + 'blacklist':
                cmds.blacklist(alles, bocchi, eng)
                break
            case prefix + 'bitch':
                cmds.bitch(alles, bocchi, eng)
                break
            case prefix + 'kickignore':
            case prefix + 'ki':
                cmds.kickignore(alles, bocchi, eng) // alias ki fehlt
                break
            case prefix + 'addme':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isLeitung) return await bocchi.reply(from, eng.leitungOnly(), id)
                try {
                    var addme = args[0]
                    await bocchi.addParticipant(addme, sender.id)
                    await bocchi.sendText(from, '🎉 Ich habe dich hinzugefügt! 🎉')
                    await bocchi.sendTextWithMentions(addme, `🎉 Teammitglied @${sender.id} hat sich hinzugefügt! 🎉\n\nWillkommen  ${pushname}`)
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Ich konnte die Person nicht hinzufügen, da entweder die Person bereits in der Gruppe ist, das hinzufügen deaktiviert wurde oder das Format inkorrekt ist!\n\n_Verwende: 49123456 oder +4912 3456_\n\n ```+ - ( ) und leerzeichen werden ignoriert```', id)
                }
                break
            case prefix + 'kickme':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                await bocchi.removeParticipant(groupId, sender.id)
                break
            case prefix + 'poll':
            case prefix + 'vote':
                cmds.poll(alles, bocchi, eng) // alias vote fehlt
                break

            case prefix + 'datadelete':
                cmds.datadelete(alles, bocchi, eng)
                break
            case prefix + 'odatadelete':
                cmds.odatadelete(alles, bocchi, eng)
                break
            case prefix + 'datenschutz':
            case prefix + 'daten':
            case prefix + 'dsgvo': //bisher nur dafür alias
                cmds.dsgvo(alles, bocchi, eng)
                break
            case prefix + 'spam':
                if (!isLeitung) return await bocchi.reply(from, eng.ownerOnly(), id)
                const spamsay1 = q.substring(0, q.indexOf('|'))
                const spamsay2 = q.substring(q.lastIndexOf('|') + 2)
                var counter = spamsay1
                var text = spamsay2
                for (var i = 0; i < counter; i++) {
                    await bocchi.sendTextWithMentions(from, `${text}`)
                }
                break
            //easteregg
            case prefix + 'kacken':
                await bocchi.sendText(from, 'Jan.... Irgendwann kannst du Kacken', id)
                await sleep(1000)
                console.log(message.id)
                const lastmsg = await bocchi.getMyLastMessage(from)
                // await bocchi.sendText(from, `Lastmsg.id: ${lastmsg.id}\n\nLastmsg.t: ${lastmsg.t}\n\nLastmsg.from: ${lastmsg.from}\n\nLastmsg.to: ${lastmsg.to}`)
                bocchi.react(lastmsg.id, '💩')
                bocchi.react(message.id, '💩')
                break
            case prefix + 'online':
                bocchi.react(message.id, '☑️')
                break
            case prefix + 'hurensohn':
                cmds.hurensohn(alles, bocchi, eng)
                break

            case prefix + 'react':
                if (q == undefined || q == 'undefined') return await bocchi.sendText(from, 'Bitte makiere eine Nachricht und schreib das entsprechende Emoji')
                await bocchi.react(message.quotedMsgObj.id, q)
                break
            case prefix + 'lenny':
                cmds.lenny(alles, bocchi, eng)
                break
            case prefix + 'f':
                cmds.f(alles, bocchi, eng)
                break
            case prefix + 'george':
                cmds.george(alles, bocchi, eng)
                break
            case prefix + 'blockme':
                cmds.blockme(alles, bocchi, eng)
                break
            case '#hund': // ja, mit #. ganz besonders
                await bocchi.sendText(from, 'Selber Hund')
                break
            case prefix + 'stickergif':
                cmds.stickergif(alles, bocchi, eng)
                break
            case prefix + 'scheiße':
                cmds.scheiße(alles, bocchi, eng)
                break
            /**********************************************************************************************************************************************************
    
            ╔══════════════════════════════════════════════════════════════════════════════════════╗
            ╠██████╗  ██████╗ ██╗    ██╗███╗   ██╗██╗      ██████╗  █████╗ ██████╗ ███████╗██████╗ ╣
            ╠██╔══██╗██╔═══██╗██║    ██║████╗  ██║██║     ██╔═══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗╣
            ╠██║  ██║██║   ██║██║ █╗ ██║██╔██╗ ██║██║     ██║   ██║███████║██║  ██║█████╗  ██████╔╝╣
            ╠██║  ██║██║   ██║██║███╗██║██║╚██╗██║██║     ██║   ██║██╔══██║██║  ██║██╔══╝  ██╔══██╗╣
            ╠██████╔╝╚██████╔╝╚███╔███╔╝██║ ╚████║███████╗╚██████╔╝██║  ██║██████╔╝███████╗██║  ██║╣
            ╠╚═════╝  ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝╣
            ╠ -Downloader Befehle: eng muss bearbeitet werden
            ╚══════════════════════════════════════════════════════════════════════════════════════╝
            */
            //menu 1.1
            case prefix + 'yt-dl':
            case prefix + 'yt':
                cmds.ytdl(alles, bocchi, eng)
                break
            //menu 1.1.1
            case prefix + 'y':
                cmds.y(alles, bocchi, eng)
                break

            //menu 1.2
            case prefix + 'shazam':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                cmds.shazam(bocchi, message);
                break

            // End of #menu 1 -Downloader
            /**********************************************************************************************************************************************************
            ╔══════════════════════════╗
            ╠██████╗  ██████╗ ████████╗╣
            ╠██╔══██╗██╔═══██╗╚══██╔══╝╣
            ╠██████╔╝██║   ██║   ██║   ╣
            ╠██╔══██╗██║   ██║   ██║   ╣
            ╠██████╔╝╚██████╔╝   ██║   ╣
            ╠╚═════╝  ╚═════╝    ╚═╝   ╣
            ╠ -Bot Befehle:
            ╚══════════════════════════╝
            */
            // #menu 2.1


            case prefix + 'menu':
            case prefix + 'help':
            case prefix + 'menü':
                cmds.menu(alles, bocchi, eng)
                break
            // #menu 2.2
            case prefix + 'cmdcount':
                var cmdcount = 50
                const alllogCmdCount = await db.count('log')
                var leaderCMD = await db.getCMDLeader(cmdcount);
                let leaderboardCMD = '── *「 🏆 RANGLISTE 🏆 」* ──\n\n'
                try {
                    for (let i = 0; i < leaderCMD.length; i++) {
                        var leadernameCMD = (await db.getId('registered', leaderCMD[i].userid)).name
                        if (ar[0] == 'owner') {
                            if (!isLeitung) return await bocchi.reply(from, eng.leitungOnly(), id)
                            leaderboardCMD += `${i + 1}. Name: ${leadernameCMD}\nwa.me/${leaderCMD[i].userid.replace('@c.us', '')}\n➸ *Commands*: ${leaderCMD[i].cmd} \n\n`
                        } else {
                            leaderboardCMD += `${i + 1}. Name: ${leadernameCMD}\n➸ *Commands*: ${leaderCMD[i].cmd} \n\n`
                        }
                    }
                } catch (err) {
                    console.error(err)
                }
                await bocchi.reply(from, `Seit dem 20.08.2021 um 00:00 wurden ${alllogCmdCount} Befehle ausgeführt!\n\nDie TOP ${cmdcount} meisten Befehle wurden ausgeführt von:\n${leaderboardCMD}\n`, id)
                break
            // #menu 2.3
            case prefix + 'ownerbot':
                cmds.ob(alles, bocchi, eng)
                break
            // #menu 2.4
            case prefix + 'rules':
                cmds.rules(alles, bocchi, eng)
                break
            // #menu 2.5
            case prefix + 'update':
            case prefix + 'changelog': //bisher nur dafür alias erstellt
                cmds.changelog(alles, bocchi, eng)
                break
            // #menu 2.6
            case prefix + 'ownergruppen':
            case prefix + 'og':
                cmds.og(alles, bocchi, eng)
                break
            case prefix + 'tog':
                cmds.tog(alles, bocchi, eng)
                break
            case prefix + 'tc':
                cmds.teamcheck(alles, bocchi, eng)
                break

            // #menu 2.7
            case prefix + 'admins':
            case prefix + 'admin':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                const groupAdm = await bocchi.getGroupAdmins(groupId)
                if (isTeam) {
                    cd = 3600000
                    timername = 'timereveryone'
                    const timerEveryone = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerEveryone !== undefined && cd - (Date.now() - timerEveryone) > 0) {
                        const time = ms(cd - (Date.now() - timerEveryone))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        let txtAdmin = '╔══✪〘 *ADMINS* 〙✪══\n'
                        for (let i = 0; i < groupAdm.length; i++) {
                            txtAdmin += '╠➥'
                            txtAdmin += ` @${groupAdm[i].replace(/@c.us/g, '')}\n`
                        }
                        txtAdmin += '╚═〘 *B O C C H I  B O T* 〙'
                        await bocchi.sendTextWithMentions(from, txtAdmin)
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                } else {
                    cd = 7200000
                    timername = 'timereveryone'
                    const timerEveryone = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerEveryone !== undefined && cd - (Date.now() - timerEveryone) > 0) {
                        const time = ms(cd - (Date.now() - timerEveryone))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        let txtAdmin = '╔══✪〘 *ADMINS* 〙✪══\n'
                        for (let i = 0; i < groupAdm.length; i++) {
                            txtAdmin += '╠➥'
                            txtAdmin += ` @${groupAdm[i].replace(/@c.us/g, '')}\n`
                        }
                        txtAdmin += '╚═〘 *B O C C H I  B O T* 〙'
                        await bocchi.sendTextWithMentions(from, txtAdmin)
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                }
                break
            //#menu 2.8
            case prefix + 'runtime': // BY HAFIZH
            case prefix + 'uptime':
                cmds.uptime(alles, bocchi, eng)
                break
            //#menu 2.9
            case prefix + 'ping':
            case prefix + 'a':
            case prefix + 'p':
            case prefix + 'pong':
            case prefix + 'peng':
                cmds.ping(alles, bocchi, eng)
                break

            //menu 2.10
            case prefix + 'profile':
            case prefix + 'me':
                cmds.profile(alles, bocchi, eng)
                break
            //#menu 2.11
            //#menu 2.12
            case prefix + 'afk': // by Slavyan
                //await bocchi.sendText(from, 'Dieser Cmd Ist aktuell außer Betrieb!')
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                //if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (isAfkOn) return await bocchi.reply(from, eng.afkOnAlready(), id)
                const reason = q ? q : 'Kein Grund angegeben.'
                await afk.addAfkUser(sender.id, time, reason)
                await bocchi.reply(from, eng.afkOn(pushname, reason), id)
                break
            //#menu 2.13
            case prefix + 'tomp3': // by: Piyobot
                if (isMedia && isVideo || isQuotedVideo) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedVideo ? quotedMsg : message
                    const _mimetype = isQuotedVideo ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .format('mp3')
                            .on('end', async () => {
                                await bocchi.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            //#menu 2.14
            case prefix + 'reminder': // by Slavyan
                if (!q.includes('/')) return await bocchi.reply(from, eng.wrongFormat(), id)
                const timeRemind = q.substring(0, q.indexOf('/') - 1)
                const messRemind = q.substring(q.indexOf('/') + 1)
                const parsedTime = ms(toMs(timeRemind))
                reminder.addReminder(sender.id, messRemind, timeRemind)
                await bocchi.sendTextWithMentions(from, eng.reminderOn(messRemind, parsedTime, sender))
                const intervRemind = setInterval(async () => {
                    let now = Date.now();
                    let reminderTime = await reminder.getReminderTime(sender.id);

                    if (now >= reminderTime) {
                        await bocchi.sendTextWithMentions(from, eng.reminderAlert(await reminder.getReminderMsg(sender.id), sender))
                        await db.removeId('reminder', sender.id)
                        clearInterval(intervRemind)
                    }
                }, 1000)
                break
            //#menu 2.15
            case prefix + 'report':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                if (isGroupMsg) {
                    await bocchi.sendText(DevGroupID, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender.id}\nwa.me/${sender.id.replace('@c.us', '')}\n*Message*: ${q}`)
                    await bocchi.reply(from, eng.received(pushname), id)
                } else {
                    await bocchi.sendText(DevGroupID, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender.id}\nwa.me/${sender.id.replace('@c.us', '')}\n*Message*: ${q}`)
                    await bocchi.reply(from, eng.received(pushname), id)
                }
                break
            //#menu 2.16
            case prefix + 'join':
                cmds.join(alles, bocchi, eng)
                break
            case prefix + 'ojoin':
                cmds.ojoin(alles, bocchi, eng)
                break
            case prefix + 'ajoin':
                cmds.ajoin(alles, bocchi, eng)
                break
            //#menu 2.18
            case prefix + 'translate':
            case prefix + 'trans':
                if (!q.includes('/')) return await bocchi.reply(from, eng.wrongFormat(), id)
                const texto = q.substring(0, q.indexOf('/') - 1)
                const languaget = q.substring(q.lastIndexOf('/') + 2)
                translate(texto, { to: languaget }).then(res => { bocchi.reply(from, res.text, id) })
                break
            //#menu 2.19
            case prefix + 'math':
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (typeof mathjs.evaluate(q) == 'number') {
                    await bocchi.reply(from, `*── 「 MATH 」 ──*\n\n${q} = ${mathjs.evaluate(q)}`, id)
                }
                break
            //#menu 2.20
            case prefix + 'stats':
                const blacklistes = await db.count('blacklist')
                const allhgvg = await db.count('hgvg')
                const premiumuserstats = await db.count('premium')
                const alluserstats = await db.count('level')
                const timercount = await db.count('timer')
                const allbot = await db.countWhere('isBocchiBot', { 'typ': 'BocchiBot' })
                const allgroupsforstats = await db.count('groupinfo')
                const alllogsforstats = await db.count('log')
                const bitchesforstats = await db.count('testdb')
                const registereduserforstats = await db.count('registered')
                const banneduserforstats = await db.count('banned')

                await bocchi.sendText(from, `╔════ *Statistiken* ════╗\n╠ SessionID: *${sessionId}*\n╠ Registrierte User: *${registereduserforstats}*\n╠ Anzahl aller User: *${alluserstats}*\n╠ Eingetragene Timer: *${timercount}*\n╠ Benutzte Befehle: *${alllogsforstats}*\n╠ Aktive Bots: *${allbot}*\n╠ Aktive Gruppen aller Bots: *${allgroupsforstats}*\n╠ Premium User: *${premiumuserstats}*\n╠ HGVG-Registrierte Gruppen: *${allhgvg}*\n╠ Anzahl gebannter User: *${banneduserforstats}*\n╠ Anzahl aller Links: *${svlist.length}*\n╠ Anzahl von Gruppen auf der Blacklist: *${blacklistes}*\n╠ Anzahl von Gesammelten Porno-Bots: *${bitchesforstats}*\n╚═════════════╝`)
                break
            //menu 2.21
            case prefix + 'mydata':
            case prefix + 'usercheck':
            case prefix + 'checkuser':
            case prefix + 'userinfo':
                cmds.mydata(alles, bocchi, eng)
                break

            // End of #menu 2 -Bot

            //menu 2.22
            case prefix + 'spenden':
            case prefix + 'donate':
            case prefix + 'donation':
                cmds.donation(alles, bocchi, eng)
                break
            //menu 2.23
            case prefix + 'spendenliste':
            case prefix + 'spendenlist':
                cmds.spendenlist(alles, bocchi, eng)
                break
            // End of #menu 2 -Bot

            /**********************************************************************************************************************************************************
            ╔══════════════════════════════╗
            ╠███╗   ███╗██╗███████╗ ██████╗╣
            ╠████╗ ████║██║██╔════╝██╔════╝╣
            ╠██╔████╔██║██║███████╗██║     ╣
            ╠██║╚██╔╝██║██║╚════██║██║     ╣
            ╠██║ ╚═╝ ██║██║███████║╚██████╗╣
            ╠╚═╝     ╚═╝╚═╝╚══════╝ ╚═════╝╣
            ╠ -Misc Befehle: eng muss bearbeitet werden
            ╚══════════════════════════════╝
            */

            // End of #menu 3 -Misc
            //#menu 3.1
            case prefix + 'google': // chika-chantekkzz
            case prefix + 'googlesearch':
                if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.reply(from, eng.wait(), id)
                google({ 'query': q, 'no-display': true })
                    .then(async (results) => {
                        let txtgoogle = `*── 「 GOOGLE SUCHE 」 ──*\n\n*by: rashidsiregar28*\n\n_*Suchergebnisse für: ${q}*_`
                        for (let i = 0; i < results.length; i++) {
                            txtgoogle += `\n\n➸ *Titel*: ${results[i].title}\n➸ *Beschreibung*: ${results[i].snippet}\n➸ *Link*: ${results[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, txtgoogle, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break

            //#menu 3.2
            case prefix + 'say':
                cmds.say(alles, bocchi, eng)
                break
            //#menu 3.3
            //#menu 3.4
            case prefix + 'corona': // by CHIKAA CHANTEKKXXZZ
            case prefix + 'coronavirus':
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.reply(from, eng.wait(), id)
                misc.corona(q)
                    .then(async (res) => {
                        await bocchi.sendText(from, '🌎️ Covid Info - ' + q.charAt(0).toUpperCase() + q.slice(1) + ' 🌍️\n\n✨️ Total Cases: ' + `${res.cases}` + '\n📆️ Today\'s Cases: ' + `${res.todayCases}` + '\n☣️ Total Deaths: ' + `${res.deaths}` + '\n☢️ Today\'s Deaths: ' + `${res.todayDeaths}` + '\n⛩️ Active Cases: ' + `${res.active}` + '.')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            //#menu 3.5
            case prefix + 'gsmarena':
            case prefix + 'handymodell':
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    misc.gsmarena(q)
                        .then(async ({ result }) => {
                            await bocchi.sendFileFromUrl(from, result.image, `${result.title}.jpg`, eng.gsm(result), id)
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
                break
            //#menu 3.6
            case prefix + 'distance':
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                const kotaAsal = q.substring(0, q.indexOf('/') - 1)
                const kotaTujuan = q.substring(q.lastIndexOf('/') + 2)
                misc.distance(kotaAsal, kotaTujuan)
                    .then(async ({ result }) => {
                        if (result.response !== 200) {
                            await bocchi.reply(from, 'Error!', id)
                        } else {
                            await bocchi.reply(from, result.data, id)
                        }
                    })
                break
            //#menu 3.7
            case prefix + 'ytsearch':
            case prefix + 'yts':
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)

                await bocchi.reply(from, eng.wait(), id)
                try {
                    misc.ytSearch(q)
                        .then(async ({ result }) => {
                            for (let i = 0; i < 5; i++) {
                                const { urlyt, image, title, channel, duration, views } = await result[i]
                                await bocchi.sendFileFromUrl(from, image, `${title}.jpg`, eng.ytResult(urlyt, title, channel, duration, views), id)
                            }
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
                break
            //#menu 3.8
            case prefix + 'imagetourl':
            case prefix + 'imgtourl':
                if (isMedia && isImage || isQuotedImage) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                    await bocchi.reply(from, linkImg, id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            //#menu 3.9
            case prefix + 'mark':
                cmds.mark(alles, bocchi, eng)
                break
            //#menu 3.10
            case prefix + 'selfmark':
                cmds.selfmark(alles, bocchi, eng)
                break
            //#menu 3.11
            case prefix + 'tos':
                cmds.tos(alles, bocchi, eng)
                break
            //#menu 3.12
            case prefix + 'getpic':
                if (mentionedJidList.length !== 0) {
                    const userPic = await bocchi.getProfilePicFromServer(mentionedJidList[0])
                    if (userPic === undefined) {
                        var pek = errorImg
                    } else {
                        pek = userPic
                    }
                    await bocchi.sendFileFromUrl(from, pek, 'pic.jpg', '', id)
                } else if (args.length !== 0) {
                    const userPic = await bocchi.getProfilePicFromServer(args[0] + '@c.us')
                    if (userPic === undefined) {
                        var peks = errorImg
                    } else {
                        peks = userPic
                    }
                    await bocchi.sendFileFromUrl(from, peks, 'pic.jpg', '', id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            //#menu 3.13
            case prefix + 'bewerten':
                if (!isOwner) return await bocchi.reply(from, 'Derzeit in bearbeitung', id)
                if (isNaN(args[0])) {
                    await bocchi.sendText(from, 'Dies ist keine Zahl!')
                } else {
                    if (args.length !== 1 || args[0] > 5 || args[0] < 1) return await bocchi.sendText(from, 'Die Bewertung muss zwischen 1 und 5 sein!')
                    const star = '★'
                    const emptyStar = '☆'
                    let result = ''
                    let blank = ''
                    for (let i = 0; i < args[0]; i++) {
                        result = result + star
                    }
                    for (let i = 0; i < 5 - args[0]; i++) {
                        blank = blank + emptyStar
                    }
                    await bocchi.sendText(from, `Vielen dank für deine ${result}${blank} Sterne bewertung`)
                    await bocchi.sendText(Justin_Inhaber, `${pushname}\n\nwa.me/${sender.id.replace('@c.us', '')} hat mit ${result}${blank} Sternen bewertet`)
                    await bocchi.sendText(Nando_Inhaber, `${pushname}\n\nwa.me/${sender.id.replace('@c.us', '')} hat mit ${result}${blank} Sternen bewertet`)
                }
                break
            //#menu 3.14
            case prefix + 'wame':
                cmds.wame(alles, bocchi, eng)
                break
            //#menu 3.15
            case prefix + 'silvester':
                cmds.silvester(alles, bocchi, eng)
                break
            //#menu 3.16
            case prefix + 'tts':
                //if (!isOwner) return await bocchi.reply(from, `WARTUNGEN!!!`, id)
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (message.body.lenght > 256) return await bocchi.reply(from, 'Maximal 256 Zeichen', id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (!q.includes('/')) return await bocchi.reply(from, `Bitte setze zwischen den Text und den Ländercode ein */*\n_Beispiel:_ ${prefix}tts de / Hallo `, id)
                if (isTeam) {
                    const speech = q.substring(q.indexOf('/') + 2)
                    const ptt = tts(ar[0])
                    try {
                        ptt.save(`./temp/audio/${speech}.mp3`, speech, async () => {
                            await bocchi.sendPtt(from, `./temp/audio/${speech}.mp3`, id)
                            fs.unlinkSync(`./temp/audio/${speech}.mp3`)
                        })
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    cd = 90000
                    timername = 'timertts'
                    const timerTts = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerTts !== undefined && cd - (Date.now() - timerTts) > 0) {
                        const time = ms(cd - (Date.now() - timerTts))
                        await bocchi.sendText(from, eng.daily(time), id)
                    } else {
                        const speech = q.substring(q.indexOf('/') + 2)
                        const ptt = tts(ar[0])
                        try {
                            ptt.save(`./temp/audio/${speech}.mp3`, speech, async () => {
                                await bocchi.sendPtt(from, `./temp/audio/${speech}.mp3`, id)
                                fs.unlinkSync(`./temp/audio/${speech}.mp3`)
                            })
                        } catch (err) {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        }
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                }
                break
            //#menu 3.17
            case prefix + 'wikipedia':
            case prefix + 'wiki':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.reply(from, eng.wait(), id)
                misc.wiki(q)
                    .then(async ({ result, status }) => {
                        if (status !== 200) {
                            return await bocchi.reply(from, 'Not found.', id)
                        } else {
                            await bocchi.reply(from, result, id)
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            //#menu 3.18
            case prefix + 'wikien': // By: VideFrelan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.reply(from, eng.wait(), id)
                misc.wikien(q)
                    .then(async ({ result }) => {
                        if (result.status !== '200') {
                            await bocchi.reply(from, 'Not Found!', id)
                        } else {
                            await bocchi.reply(from, `➸ *PageId*: ${result.pageid}\n➸ *Title*: ${result.title}\n➸ *Result*: ${result.desc}`, id)
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break


            //End of #menu 3 -Misc
            /**********************************************************************************************************************************************************
            ╔════════════════════════════════════════════════════╗
            ╠███████╗████████╗██╗ ██████╗██╗  ██╗███████╗██████╗ ╣
            ╠██╔════╝╚══██╔══╝██║██╔════╝██║ ██╔╝██╔════╝██╔══██╗╣
            ╠███████╗   ██║   ██║██║     █████╔╝ █████╗  ██████╔╝╣
            ╠╚════██║   ██║   ██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗╣
            ╠███████║   ██║   ██║╚██████╗██║  ██╗███████╗██║  ██║╣
            ╠╚══════╝   ╚═╝   ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╣
            ╠ -Sticker Befehle: eng bearbeitet
            ╚════════════════════════════════════════════════════╝
            */
            // #menu 4.1
            case prefix + 'sticker': //Macht deine Bilder zu Sticker geklaut von Zomby am 25.07.2021
                if (pushname == undefined) {
                    pushname = 'z0mbY'
                }
                if (isMedia && type === 'image') {
                    await bocchi.reply(from, eng.wait(), id)
                    const mediaData = await decryptMedia(message, uaOverride)
                    const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    await bocchi.sendImageAsSticker(from, imageBase64, { pack: 'Erstellt für', keepScale: true, author: `${pushname}`, discord: '907573119433187329' })
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    await bocchi.reply(from, eng.wait(), id)
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    await bocchi.sendImageAsSticker(from, imageBase64, { pack: 'Erstellt für', keepScale: true, author: `${pushname}`, discord: '907573119433187329' })
                } else if (isMedia && type === 'video' || mimetype === 'image/gif') {
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const mediaData = await decryptMedia(message, uaOverride)
                        await bocchi.sendMp4AsSticker(from, mediaData, { fps: 10, startTime: '00:00:00.0', endTime: '00:00:10.0', loop: 0 }, { pack: 'Erstellt für', keepScale: true, author: `${pushname}`, discord: '907573119433187329' })
                    } catch (err) {
                        await bocchi.reply(from, 'Size too big.')
                    }
                } else if (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
                    await bocchi.reply(from, eng.wait(), id)
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    await bocchi.sendMp4AsSticker(from, mediaData, { fps: 10, startTime: '00:00:00.0', endTime: '00:00:10.0', loop: 0 }, { pack: 'Erstellt für', keepScale: true, author: `${pushname}`, discord: '907573119433187329' })
                } else {
                    bocchi.sendText(from, 'Du musst ein Bild oder ein GIF markieren!')
                }
                break
            // #menu 4.1.1
            //#sticker mit zuschneiden
            case prefix + 'osticker':
            case prefix + 'oldsticker':
            case prefix + 'stickerold':
                if ((isMedia || isQuotedImage) && args.length === 0) {
                    try {
                        await bocchi.reply(from, eng.wait(), id)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                        const mediaData = await decryptMedia(encryptMedia, uaOverride)
                        const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                        await bocchi.sendImageAsSticker(from, imageBase64, { keepScale: false, author: 'Stickerbot', pack: 'Bocchibot', discord: '907573119433187329' })
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    await bocchi.reply(from, 'Die Datei ist kein Bild!', id)
                }
                break
            // #menu 4.2
            case prefix + 'stickertoimg':
            case prefix + 'toimg':
            case prefix + 'sti':
            case prefix + 'sticker2img':
                if (isQuotedSticker) {
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await bocchi.sendFile(from, imageBase64, 'sticker.jpg', '', id)
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            // #menu 4.3
            case prefix + 'stickerwm': // By Slavyan
            case prefix + 'stcwm':
                if (!q.includes('/')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isMedia && isImage || isQuotedImage) {
                    await bocchi.reply(from, eng.wait(), id)
                    const packname = q.substring(0, q.indexOf('/') - 1)
                    const author = q.substring(q.lastIndexOf('/') + 2)
                    exif.create(packname, author, `stc_${sender.id}`)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/stc_${sender.id}.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await bocchi.sendRawWebpAsSticker(from, base64)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        fs.unlinkSync(`stc_${sender.id}`)
                                    }
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            // #menu 4.4
            case prefix + 'stickermeme':
            case prefix + 'meme':
            case prefix + 'smeme':
            case prefix + 'stcmeme':
                if (!q.includes('/')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isMedia && isImage || isQuotedImage) {
                    await bocchi.reply(from, eng.wait(), id)
                    const top = q.substring(0, q.indexOf('/') - 1)
                    const bottom = q.substring(q.lastIndexOf('/') + 2)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const getUrl = await uploadImages(mediaData, `meme.${sender.id}`)
                    const create = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${getUrl}`
                    const meme = await bent('buffer')(create)
                    webp.buffer2webpbuffer(meme, 'png', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await bocchi.sendRawWebpAsSticker(from, base64)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                    }
                                })
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            // #menu 4.5
            case prefix + 'takesticker': // By: VideFrelan
            case prefix + 'take':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('/')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (quotedMsg && quotedMsg.type == 'sticker') {
                    await bocchi.reply(from, eng.wait(), id)
                    const mediaDataTake = await decryptMedia(quotedMsg, uaOverride)
                    const packname = q.substring(0, q.indexOf('/') - 1)
                    const author = q.substring(q.lastIndexOf('/') + 2)
                    exif.create(packname, author, `takestick_${sender.id}`)
                    webp.buffer2webpbuffer(mediaDataTake, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/takestickstage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/takestick_${sender.id}.exif ./temp/takestickstage_${sender.id}.webp -o ./temp/takestick_${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/takestick_${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/takestick_${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await bocchi.sendRawWebpAsSticker(from, base64)
                                        fs.unlinkSync(`./temp/takestick_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/takestickstage_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/takestick_${sender.id}.exif`)
                                    }
                                })
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            // #menu 4.6
            case prefix + 'stikernobg':
            case prefix + 'stickernobg': //by: VideFrelan
                if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const q = await uploadImages(mediaData, `stickernobg.${sender.id}`)
                    misc.stickernobg(q)
                        .then(async ({ result }) => {
                            await bocchi.sendStickerfromUrl(from, result.image)
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case prefix + 'dogesticker': // by CHIKAA CHANTEKKXXZZ
            case prefix + 'doge':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                fun.doge()
                    .then(async (body) => {
                        const dogeg = body.split('\n')
                        const dogegx = dogeg[Math.floor(Math.random() * dogeg.length)]
                        await bocchi.sendStickerfromUrl(from, dogegx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            // #menu 4.10
            case prefix + 'animesticker':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                weeaboo.snime()
                    .then(async (body) => {
                        const wifegerak = body.split('\n')
                        const wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                        await bocchi.sendStickerfromUrl(from, wifegerakx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            // #menu 4.11
            case prefix + 'dice':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                fun.dice()
                    .then(async (body) => {
                        const diceg = body.split('\n')
                        const dicegx = diceg[Math.floor(Math.random() * diceg.length)]
                        await bocchi.sendStickerfromUrl(from, dicegx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, err, id)
                    })
                break
            // #menu 4.12
            case prefix + 'amongus':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                fun.amongus()
                    .then(async (body) => {
                        const amongusg = body.split('\n')
                        const amongusgx = amongusg[Math.floor(Math.random() * amongusg.length)]
                        await bocchi.sendStickerfromUrl(from, amongusgx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            // #menu 4.13
            case prefix + 'anim':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                fun.anim()
                    .then(async (body) => {
                        const animg = body.split('\n')
                        const animgx = animg[Math.floor(Math.random() * animg.length)]
                        await bocchi.sendStickerfromUrl(from, animgx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            // #menu 4.14
            case prefix + 'patrick':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                fun.patrick()
                    .then(async (body) => {
                        const patrickg = body.split('\n')
                        const patrickgx = patrickg[Math.floor(Math.random() * patrickg.length)]
                        await bocchi.sendStickerfromUrl(from, patrickgx)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            // #menu 4.15
            case prefix + 'triggered':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.gif`)
                    const fileOutputPath = path.join(temp, 'video', `${name}.mp4`)
                    canvas.Canvas.trigger(mediaData)
                        .then((buffer) => {
                            canvas.write(buffer, fileInputPath)
                            ffmpeg(fileInputPath)
                                .outputOptions([
                                    '-movflags faststart',
                                    '-pix_fmt yuv420p',
                                    '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
                                ])
                                .inputFormat('gif')
                                .on('end', async () => {
                                    await bocchi.sendMp4AsSticker(from, fileOutputPath, { fps: 30, startTime: '00:00:00.0', endTime: '00:00:05.0', loop: 0, discord: '907573119433187329' })
                                    setTimeout(() => {
                                        fs.unlinkSync(fileInputPath)
                                        fs.unlinkSync(fileOutputPath)
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            // #menu 4.16

            // End of #menu 4 -Sticker


            /**********************************************************************************************************************************************************
            ╔════════════════════════════════════════════════════════════╗
            ╠██╗    ██╗███████╗███████╗ █████╗ ██████╗  ██████╗  ██████╗ ╣
            ╠██║    ██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔═══██╗╣
            ╠██║ █╗ ██║█████╗  █████╗  ███████║██████╔╝██║   ██║██║   ██║╣
            ╠██║███╗██║██╔══╝  ██╔══╝  ██╔══██║██╔══██╗██║   ██║██║   ██║╣
            ╠╚███╔███╔╝███████╗███████╗██║  ██║██████╔╝╚██████╔╝╚██████╔╝╣
            ╠ ╚══╝╚══╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝ ╣
            ╠ -Weeaboo Befehle: eng muss bearbeitet werden
            ╚════════════════════════════════════════════════════════════╝
            */
            //#menu 5.1
            case prefix + 'neko':
                await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
                /*
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.reply(from, eng.wait(), id)
                await bocchi.sendFileFromUrl(from, (await neko.sfw.neko()).url, 'neko.jpg', '', null, null, true)
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                    */
                break
            //#menu 5.2
            case prefix + 'ffbanner': // By: VideFrelan API KEY2021
                if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
                if (!q.includes('/')) return bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.reply(from, eng.wait(), id)
                const teks1ffanjg = q.substring(0, q.indexOf('/') - 1)
                const teks2ffanjg = q.substring(q.lastIndexOf('/') + 2)
                await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/bannerff?title=${teks1ffanjg}&text=${teks2ffanjg}&apikey=${config.vhtear}`, id)
                break

            //#menu 5.3

            //#menu 5.4
            case prefix + 'waifu':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.reply(from, eng.wait(), id)
                weeaboo.waifu(false)
                    .then(async ({ url }) => {
                        await bocchi.sendFileFromUrl(from, url, 'waifu.png', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            //#menu 5.5
            //>>#animiesticker #menu 4.10


            // End of #menu 5 -Weeaboo


            /**********************************************************************************************************************************************************
            ╔═══════════════════════════╗
            ╠███████╗██╗   ██╗███╗   ██╗╣
            ╠██╔════╝██║   ██║████╗  ██║╣
            ╠█████╗  ██║   ██║██╔██╗ ██║╣
            ╠██╔══╝  ██║   ██║██║╚██╗██║╣
            ╠██║     ╚██████╔╝██║ ╚████║╣
            ╠╚═╝      ╚═════╝ ╚═╝  ╚═══╝╣
            ╠ -Fun Befehle: eng muss bearbeitet werden
            ╚═══════════════════════════╝
            */
            //#menu 6.1
            case prefix + 'lyric':
            case prefix + 'lyrics':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                const lyricsFinder = require('lyrics-finder');
                let lyrics = await lyricsFinder(body.slice(7)) || 'Not Found!';
                bocchi.reply(from, lyrics, id)
                break
            //#menu 6.2
            case prefix + 'bass':
                //if (!isOwner) return await bocchi.reply(from, eng.cmdNotFound(), id)
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                    if (args[0] > 100) return await bocchi.reply(from, 'Höchst möglicher Bass 100!', id)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter(`equalizer=f=40:width_type=h:width=50:g=${args[0]}`)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                await bocchi.sendPtt(from, fileOutputPath, id)
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            //#menu 6.3
            case prefix + 'nightcore':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter('asetrate=44100*1.25')
                            .format('mp3')
                            .on('end', async () => {
                                await bocchi.sendPtt(from, fileOutputPath, id)
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            //#menu 6.4
            case prefix + 'daycore':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter('asetrate=44100*0.90')
                            .format('mp3')
                            .on('end', async () => {
                                await bocchi.sendPtt(from, fileOutputPath, id)
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            //#menu 6.5

            //#menu 6.6
            case prefix + 'howlesbian':
                await bocchi.reply(from, 'You are ' + randomlgbtq + '% lesbian 🏳️‍🌈', id)
                break
            //#menu 6.7
            case prefix + 'howtrans':
                await bocchi.reply(from, 'You are ' + randomlgbtq + '% trans 🏳️‍🌈', id)
                break
            //#menu 6.8
            case prefix + 'howbi':
                await bocchi.reply(from, 'You are ' + randomlgbtq + '% bi 🏳️‍🌈', id)
                break
            //#menu 6.9
            case prefix + 'love':
                cmds.love(alles, bocchi, eng)
                break
            case prefix + 'howgay':
                var howgay = sender.id;
                var hash = crypto.createHash('md5').update(howgay).digest('hex').replace(/\D/g, '');
                const hashendeg1 = parseInt(Math.floor((Math.sqrt(Math.sqrt(hash))))) + ''
                var hashTestg = parseInt(hashendeg1.substr(0, 3))
                console.log(hashTestg / 10)
                await bocchi.reply(from, 'You are ' + randomlgbtq + '% gay 🏳️‍🌈', id)
                break
            case prefix + 'howdumb':
                var howdumb = sender.id;
                var hash = crypto.createHash('md5').update(howdumb).digest('hex').replace(/\D/g, '');
                const hashendeg2 = parseInt(Math.floor((Math.sqrt(Math.sqrt(hash))))) + ''
                var hashTestg = parseInt(hashendeg2.substr(0, 3))
                console.log(hashTestg / 10)
                await bocchi.reply(from, 'You are ' + randomlgbtq + '% Dumb 🥴', id)
                break
            case prefix + 'howsexy':
                var howsexy = sender.id;
                var hash = crypto.createHash('md5').update(howsexy).digest('hex').replace(/\D/g, '');
                const hashendeg3 = parseInt(Math.floor((Math.sqrt(Math.sqrt(hash))))) + ''
                var hashTestg = parseInt(hashendeg3.substr(0, 3))
                console.log(hashTestg / 10)
                await bocchi.reply(from, 'You are ' + randomlgbtq + '% Sexy 😏', id)
                break

            //#menu 6.10
            case prefix + '8ball':
                cmds.eightball(alles, bocchi, eng)
                break
            //menu 6.15
            case prefix + 'trash':
                cmds.trash(alles, bocchi, eng)
                break


            //menu 6.15.1
            case prefix + 'trashall':
                cmds.trashall(alles, bocchi, eng)
                break
            case prefix + 'wasted':
                // if (isMedia && type === 'image' || isQuotedImage) {
                if (isMedia && isImage || isQuotedImage) {
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                    await bocchi.reply(from, eng.wait(), id)
                    await bocchi.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, 'Wasted.jpg', 'Ini..., sticker nya lagi di kirim', id).then(() => bocchi.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`))
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            //#menu 6.17

            case prefix + 'kiss':
                cmds.kiss(alles, bocchi, eng)
                break
            //menu 6.17.1
            case prefix + 'kissall':
                cmds.kissall(alles, bocchi, eng)
                break
            //#menu 6.18
            // Nando-BETA
            // geklaut von: https://github.com/ArugaZ/whatsapp-bot/blob/master/HandleMsg.js
            //fixed, trim entfernt damit kein / muss und args statt argz irgendwas
            case prefix + 'pornhublogo':
            case prefix + 'logopornhub':
            case prefix + 'phlogo1':
                if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')

                if (args.length === 1) return bocchi.reply(from, `Verwende: *${prefix}logopornhub Wort1 Wort2*,\n\n Beispiel : *${prefix}logopornhub Bocchi Bot*`, id)
                //argz = body.trim().split('/')
                if (args.length >= 2) {
                    bocchi.reply(from, 'Bitte warte einen Moment...', id)
                    const lpornhub = args[0]
                    const lpornhub2 = args[1]
                    if (lpornhub > 10) return bocchi.reply(from, '*Der 1. Teil ist zu lang!*\n_Maximal 10 Zeichen!_', id)
                    if (lpornhub2 > 10) return bocchi.reply(from, '*Der 2. Teil ist zu lang!*\n_Maximal 10 Zeichen!_', id)
                    bocchi.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/phblogo?text1=${lpornhub}&text2=${lpornhub2}`)
                } else {
                    await bocchi.reply(from, `Falsche Anwendung!\n[❗] Verwende: *${prefix}logopornhub Wort1 Wort2*,\n\n Beispiel : *${prefix}logopornhub Bocchi Bot*`, id)
                }
                break
            //#menu 6.19
            case prefix + 'phcomment':
                if (!q.includes('/')) return await bocchi.reply(from, eng.wrongFormat(), id)
                const usernamePh = q.substring(0, q.indexOf('/') - 1)
                const commentPh = q.substring(q.lastIndexOf('/') + 2)
                const ppPhRaw = await bocchi.getProfilePicFromServer(sender.id)
                if (ppPhRaw === undefined) {
                    var ppPh = errorImg
                } else {
                    ppPh = ppPhRaw
                }
                const dataPpPh = await bent('buffer')(ppPh)
                const linkPpPh = await uploadImages(dataPpPh, `${sender.id}_ph`)
                await bocchi.reply(from, eng.wait(), id)
                const preprocessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                await bocchi.sendFileFromUrl(from, preprocessPh.data.message, 'ph.jpg', '', id)
                break
            //#menu 6.20
            //Nando-BETA
            //geklaut von: https://github.com/ArugaZ/whatsapp-bot/blob/master/HandleMsg.js
            case prefix + 'randommeme':
            case prefix + 'memerandom':
            case prefix + 'rmeme':
                meme.randomMultiMeme() //Anschauen, evtl auf .randomMulti ~Nando
                    .then(async ({ memes }) => {
                        for (let i = 0; i < 1; i++) {
                            await bocchi.sendFileFromUrl(from, memes[i].url, 'meme.jpg', '')
                        }
                    })
                break
            //#menu 6.21
            case prefix + 'penis':
                var rndlz = Math.floor(Math.random() * 14) + 1
                var rndl = ''
                var rndle = '='
                for (let i = 0; i < rndlz; i++)
                    rndl = rndl + rndle
                await bocchi.sendText(from, `Penis:\n\nB${rndl}D`)
                break
            //#menu 6.22

            case prefix + 'tritt':
                cmds.tritt(alles, bocchi, eng)
                break
            //menu 6.22.1


            case prefix + 'trittall':
                cmds.trittall(alles, bocchi, eng)
                break
            //menu 6.23
            case prefix + 'hug':
                cmds.hug(alles, bocchi, eng)
                break

            //menu 6.23.1

            case prefix + 'hugall':
                cmds.hugall(alles, bocchi, eng)
                break
            //menu 6.25
            case prefix + 'snowball':
                cmds.snowball(alles, bocchi, eng)
                break
            /*case prefix + 'botoffline':
                cmds.botoffline(alles, bocchi, eng)
                break*/
            // End of #menu 6 -Fun

            /*
            ╔═══════════════════════════════════════════════════════════════════════════════════╗
            ╠███╗   ███╗ ██████╗ ██████╗ ███████╗██████╗  █████╗ ████████╗██╗ ██████╗ ███╗   ██╗╣
            ╠████╗ ████║██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║╣
            ╠██╔████╔██║██║   ██║██║  ██║█████╗  ██████╔╝███████║   ██║   ██║██║   ██║██╔██╗ ██║╣
            ╠██║╚██╔╝██║██║   ██║██║  ██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██║██║   ██║██║╚██╗██║╣
            ╠██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗██║  ██║██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║╣
            ╠═╝      ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╩╣
            ╠ -Moderation Befehle: eng bearbeitet
            ╚═══════════════════════════════════════════════════════════════════════════════════╝
            */
            // #menu 7.1
            case prefix + 'add':
                await bocchi.sendText(from, 'Dieser Befehl ist zurzeit Deaktiviert da er zu Banns des Bot führen kann.')

                /*
                if (!isOwner) return await bocchi.reply(from, `Dieser Befehl ist zurzeit nicht verfügbar. Bitte mach das Hinzufügen manuell\nDanke!`, id)
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins && !isLeitung) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                try {
                    await bocchi.addParticipant(from, `${q.replace(/[ +()-]/g, '').replace(/^0+/, '49').replace(/\D/g, '')}@c.us`)
                    await bocchi.sendText(from, '🎉 Welcome! 🎉')
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Ich konnte die Person nicht hinzufügen, da entweder die Person bereits in der Gruppe ist, das hinzufügen deaktiviert wurde oder das Format inkorrekt ist!\n\n_Verwende: 49123456 oder +4912 3456_\n\n ```+ - ( ) und leerzeichen werden ignoriert```', id)
                }
                */
                break
            // #menu 7.2
            case prefix + 'kick':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins && !isLeitung) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (mentionedJidList.length !== 0) {
                    await bocchi.sendTextWithMentions(from, `Good bye~\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
                    if (mentionedJidList.length === 0) return await bocchi.reply(from, eng.wrongFormat(), id)
                    if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                    for (let i of mentionedJidList) {
                        if (groupAdmins.includes(i)) return await bocchi.sendText(from, 'Du kannst keine Admins kicken!')
                        /*if (Justin_Inhaber.includes(i)) return await bocchi.sendText(from, 'Du kannst keine Owner kicken!')
                        if (Nando_Inhaber.includes(i)) return await bocchi.sendText(from, 'Du kannst keine Owner kicken!')
                        if (Rey_StvInahber.includes(i)) return await bocchi.sendText(from, 'Du kannst keine Owner kicken!')*/
                        if (Ausnahme_1.includes(i)) return await bocchi.sendText(from, 'Du kannst keine Ausnahmen kicken!')
                        await bocchi.removeParticipant(groupId, i)
                    }
                } else if (quotedMsg) {
                    var getQuoted = quotedMsgObj.sender.id
                    await bocchi.sendTextWithMentions(from, `Good bye~\n@${getQuoted}`)
                    if (groupAdmins.includes(getQuoted)) return await bocchi.sendText(from, 'Du kannst keine Admins kicken!')
                    /*if (Justin_Inhaber.includes(getQuoted)) return await bocchi.sendText(from, 'Du kannst keine Owner kicken!')
                    if (Nando_Inhaber.includes(getQuoted)) return await bocchi.sendText(from, 'Du kannst keine Owner kicken!')
                    if (Rey_StvInahber.includes(getQuoted)) return await bocchi.sendText(from, 'Du kannst keine Owner kicken!')*/
                    //Rey_StvInahber
                    if (Ausnahme_1.includes(getQuoted)) return await bocchi.sendText(from, 'Du kannst keine Ausnahmen kicken!')
                    await bocchi.removeParticipant(groupId, getQuoted)
                }
                break

            // #menu 7.3
            case prefix + 'promote':
                cmds.promote(alles, bocchi, eng)
                break
            //menu 7.4
            case prefix + 'demote':
                cmds.demote(alles, bocchi, eng)
                break
            //menu 7.5
            case prefix + 'leave':  //Nando-BETA vom 22.07.2021 * Bot Löscht nach verlassen den Chat.
                cmds.leave(alles, bocchi, eng)
                break
            // #menu 7.6
            case prefix + 'fd':
                const fd1 = await bocchi.getGroupMembers(groupId)
                const fd2 = fd1[Math.floor(Math.random() * (fd1.length))]
                console.log(fd2.id)
                await bocchi.reply(from, `${fd2.id}`, id)
                break
            case prefix + 'kyck':
                //if (!isOwner) return await bocchi.reply(from, eng.cmdNotFound(), id)
                const kickrandom1 = await bocchi.getGroupMembers(groupId)
                const kickrandom2 = kickrandom1[Math.floor(Math.random() * (kickrandom1.length))]
                var kyck = kickrandom2.id
                if (groupAdmins.includes(kyck)) return await bocchi.sendTextWithMentions(from, `── *「  KICKRANDOM  」* ──\n\nDurch Kickrandom würde @${kyck.replace('@c.us', '')} gekickt werden...\nAllerdings ist dies ein Admin!`)
                if (Justin_Inhaber.includes(kyck)) return await bocchi.sendTextWithMentions(from, `── *「  KICKRANDOM  」* ──\n\nDurch Kickrandom würde @${kyck.replace('@c.us', '')} gekickt werden...\nAllerdings ist dies ein Owner!`)
                if (Nando_Inhaber.includes(kyck)) return await bocchi.sendTextWithMentions(from, `── *「  KICKRANDOM  」* ──\n\nDurch Kickrandom würde @${kyck.replace('@c.us', '')} gekickt werden...\nAllerdings ist dies ein Owner!`)
                if (Ausnahme_1.includes(kyck)) return await bocchi.sendTextWithMentions(from, `── *「  KICKRANDOM  」* ──\n\nDurch Kickrandom würde @${kyck.replace('@c.us', '')} gekickt werden...\nAllerdings ist dies eine Ausnahme!`)
                await bocchi.sendTextWithMentions(from, `── *「  KICKRANDOM  」* ──\n\nDurch Kickrandom wird heute  @${kyck.replace('@c.us', '')} gekickt! \n`)
                // await bocchi.removeParticipant(groupId, kyck)
                break
            case prefix + 'everyone':
                cmds.everyone(alles, bocchi, eng)
                break
            case prefix + 'oeveryone':
                cmds.oeveryone(alles, bocchi, eng)
                break


            // #menu 7.7
            case prefix + 'groupicon':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins && !isLeitung) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return bocchi.reply(from, eng.botNotAdmin(), id)
                if (isMedia && isImage || isQuotedImage) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await bocchi.setGroupIcon(groupId, imageBase64)
                    await bocchi.sendText(from, eng.ok())
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            // #menu 7.8
            case prefix + 'grouplink':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins && !isModerator) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                await bocchi.sendText(from, gcLink)
                break
            // #menu 7.9

            case prefix + 'revoke':
                cmds.revoke(alles, bocchi, eng)
                break
            // #menu 7.10
            case prefix + 'groupinfo':
            case prefix + 'gi':
                cmds.groupInfo(alles, bocchi, eng)
                break
            // #menu 7.11

            // #menu 7.12
            case prefix + 'hg': //10/11.08.2021
                cmds.hg(alles, bocchi, eng)
                break
            // #menu 7.13
            case prefix + 'kickall':
                if (!isOwner) return await bocchi.reply(from, 'Dies ist ein Inhaber reservierter Befehl und nicht für euch gedacht!', id)
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupOwner && !isOwner) return bocchi.reply(from, eng.GroupCreatorOnly(), id)
                if (!isBotGroupAdmins) return bocchi.reply(from, eng.botNotAdmin(), id)
                const allMem = await bocchi.getGroupMembers(groupId)
                for (let i = 0; i < allMem.length; i++) {
                    if (groupAdmins.includes(allMem[i].id) || Justin_Inhaber.includes(allMem[i].id) || Nando_Inhaber.includes(allMem[i].id)) {
                    } else {
                        await bocchi.removeParticipant(groupId, allMem[i].id)
                    }
                }
                bocchi.reply(from, 'Erfolgreich alle Entfernt', id)
                break
            //menu 7.14
            case prefix + 'kicker': // 29.07.2021
                cmds.kicker(alles, bocchi, eng)
                break
            //menu 7.14.1
            case prefix + 'kickfilter':
                cmds.kickfilter(alles, bocchi, eng)
                break

            //menu 7.16

            case prefix + 'mutegc':
                cmds.muteGc(alles, bocchi, eng)
                break
            //menu 7.17

            case prefix + 'leveling':
                cmds.leveling(alles, bocchi, eng)
                break

            //menu 7.18

            case prefix + 'antilink':
                cmds.antilink(alles, bocchi, eng)
                break
            //menu 7.19

            case prefix + 'welcome':
                cmds.welcome(alles, bocchi, eng)
                break

            //menu 7.20
            case prefix + 'autosticker':
            case prefix + 'autostiker':
                cmds.autosticker(alles, bocchi, eng)
                break
            //menu 7.21

            case prefix + 'nsfw':
                cmds.nsfw(alles, bocchi, eng)
                break

            //menu 7.20
            case prefix + 'delete':
            case prefix + 'del':
                cmds.deleteMsg(alles, bocchi, eng)
                break

            /*
        //menu 7.26
        case prefix + 'antisticker':
        case prefix + 'asticker':
            cmds.antisticker(alles, bocchi, eng)
            break
            */




            case prefix + 'okickall':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupOwner && !isOwner) return bocchi.reply(from, eng.GroupCreatorOnly(), id)
                if (!isBotGroupAdmins) return bocchi.reply(from, eng.botNotAdmin(), id)
                const allMem12 = await bocchi.getGroupMembers(groupId)
                for (let i = 0; i < allMem12.length; i++) {
                    if (Justin_Inhaber.includes(allMem12[i].id) || Nando_Inhaber.includes(allMem12[i].id)) {
                    } else {
                        await bocchi.removeParticipant(groupId, allMem12[i].id)
                    }
                }
                bocchi.reply(from, 'Erfolgreich alle Entfernt', id)
                break

            // #menu 7.23
            case prefix + 'antibeleidigung':
            case prefix + 'ab':
                cmds.antibeleidigung(alles, bocchi, eng)
                break

            //menu 7.24
            case prefix + 'gaming':
                cmds.gaming(alles, bocchi, eng)
                break
            //menu 7.25

            case prefix + 'verwarnungen':
            case prefix + 'warn':
            case prefix + 'warnen':
            case prefix + 'verw':
            case prefix + 'verwarnung':
                cmds.verwarnung(alles, bocchi, eng)
                break
            // End of #menu 7 -Moderation

            /**********************************************************************************************************************************************************
            ╔════════════════════════════════════╗
            ╠███╗   ██╗███████╗███████╗██╗    ██╗╣
            ╠████╗  ██║██╔════╝██╔════╝██║    ██║╣
            ╠██╔██╗ ██║███████╗█████╗  ██║ █╗ ██║╣
            ╠██║╚██╗██║╚════██║██╔══╝  ██║███╗██║╣
            ╠██║ ╚████║███████║██║     ╚███╔███╔╝╣
            ╠╚═╝  ╚═══╝╚══════╝╚═╝      ╚══╝╚══╝ ╣
            ╠ -NSFW Befehle:
            ╚════════════════════════════════════╝
            */
            // #menu 8.1
            case prefix + 'lewds':
            case prefix + 'lewd':
                cmds.lewd(alles, bocchi, eng)
                break
            // #menu 8.2
            case prefix + 'nhentai':
            case prefix + 'nh':
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isNaN(Number(args[0]))) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    await bocchi.reply(from, eng.wait(), id)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                    return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await bocchi.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                        } catch (err) {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        }
                    } else {
                        await bocchi.reply(from, eng.nhFalse(), id)
                    }
                } else {
                    await bocchi.reply(from, eng.wait(), id)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                    return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await bocchi.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                        } catch (err) {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        }
                    } else {
                        await bocchi.reply(from, eng.nhFalse(), id)
                    }
                }
                break
            // #menu 8.3
            case prefix + 'waifu18':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    cd = 120000
                    timername = 'nsfwWaifu18'
                    const timerWaifu18Grpmsg = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerWaifu18Grpmsg !== undefined && cd - (Date.now() - timerWaifu18Grpmsg) > 0) {
                        const time = ms(cd - (Date.now() - timerWaifu18Grpmsg))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        await bocchi.reply(from, eng.wait(), id)
                        weeaboo.waifu(true)
                            .then(async ({ url }) => {
                                await bocchi.sendFileFromUrl(from, url, 'waifu.png', '', id)
                            })
                            .catch(async (err) => {
                                console.error(err)
                                await bocchi.reply(from, 'Error!', id)
                            })
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                } else {
                    cd = 120000
                    timername = 'nsfwWaifu18'
                    const timerWaifu18Privatemsg = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerWaifu18Privatemsg !== undefined && cd - (Date.now() - timerWaifu18Privatemsg) > 0) {
                        const time = ms(cd - (Date.now() - timerWaifu18Privatemsg))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        await bocchi.reply(from, eng.wait(), id)
                        weeaboo.waifu(true)
                            .then(async ({ url }) => {
                                await bocchi.sendFileFromUrl(from, url, 'waifu.png', '', id)
                            })
                            .catch(async (err) => {
                                console.error(err)
                                await bocchi.reply(from, 'Error!', id)
                            })
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                }
                break
            // #menu 8.4

            case prefix + 'fetish':
                cmds.fetish(alles, bocchi, eng)
                break
            // #menu 8.5
            case prefix + 'phdl':
                if (!isUrl(url) && !url.includes('pornhub.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    cd = 60000
                    timername = 'NSFWpHDL'
                    const timerPhdlGm = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerPhdlGm !== undefined && cd - (Date.now() - timerPhdlGm) > 0) {
                        const time = ms(cd - (Date.now() - timerPhdlGm))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        await bocchi.reply(from, eng.wait(), id)
                        try {
                            nsfw.phDl(url)
                                .then(async ({ title, download_urls, thumbnail_url }) => {
                                    const count = Object.keys(download_urls).length
                                    if (count !== 2) {
                                        const shortsLow = await misc.shortener(download_urls['240P'])
                                        const shortsMid = await misc.shortener(download_urls['480P'])
                                        const shortsHigh = await misc.shortener(download_urls['720P'])
                                        await bocchi.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, id)
                                    } else {
                                        const shortsLow = await misc.shortener(download_urls['240P'])
                                        await bocchi.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, id)
                                    }
                                })
                        } catch (err) {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        }
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                } else {
                    cd = 60000
                    timername = 'NSFWpHDL'
                    const timerPhdlpm = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerPhdlpm !== undefined && cd - (Date.now() - timerPhdlpm) > 0) {
                        const time = ms(cd - (Date.now() - timerPhdlpm))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        await bocchi.reply(from, eng.wait(), id)
                        try {
                            nsfw.phDl(url)
                                .then(async ({ title, download_urls, thumbnail_url }) => {
                                    const count = Object.keys(download_urls).length
                                    if (count !== 2) {
                                        const shortsLow = await misc.shortener(download_urls['240P'])
                                        const shortsMid = await misc.shortener(download_urls['480P'])
                                        const shortsHigh = await misc.shortener(download_urls['720P'])
                                        await bocchi.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, id)
                                    } else {
                                        const shortsLow = await misc.shortener(download_urls['240P'])
                                        await bocchi.sendFileFromUrl(from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, id)
                                    }
                                })
                        } catch (err) {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        }
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                }
                break
            // #menu 8.6
            case prefix + 'yuri':
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    cd = 60000
                    timername = 'nsfwYuri'
                    const timerYuriGm = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerYuriGm !== undefined && cd - (Date.now() - timerYuriGm) > 0) {
                        const time = ms(cd - (Date.now() - timerYuriGm))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        await bocchi.reply(from, eng.wait(), id)
                        nsfw.randomYuri()
                            .then(async ({ url }) => {
                                await bocchi.sendFileFromUrl(from, url, 'yuri.jpg', '', null, null, true)
                            })
                            .catch(async (err) => {
                                console.error(err)
                                await bocchi.reply(from, 'Error!', id)
                            })
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                } else {
                    cd = 60000
                    timername = 'nsfwYuri'
                    const timerYuriPm = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerYuriPm !== undefined && cd - (Date.now() - timerYuriPm) > 0) {
                        const time = ms(cd - (Date.now() - timerYuriPm))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        await bocchi.reply(from, eng.wait(), id)
                        nsfw.randomYuri()
                            .then(async ({ url }) => {
                                await bocchi.sendFileFromUrl(from, url, 'yuri.jpg', '', null, null, true)
                            })
                            .catch(async (err) => {
                                console.error(err)
                                await bocchi.reply(from, 'Error!', id)
                            })
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                }
                break
            // #menu 8.7
            case prefix + 'yaoi':
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    cd = 60000
                    timername = 'nsfwYaoi'
                    const timerYaoiGm = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerYaoiGm !== undefined && cd - (Date.now() - timerYaoiGm) > 0) {
                        const time = ms(cd - (Date.now() - timerYaoiGm))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        await bocchi.reply(from, eng.wait(), id)
                        nsfw.randomYaoi()
                            .then(async ({ url }) => {
                                await bocchi.sendFileFromUrl(from, url, 'yaoi.jpg', '', null, null, true)
                            })
                            .catch(async (err) => {
                                console.error(err)
                                await bocchi.reply(from, 'Error!', id)
                            })
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                } else {
                    cd = 60000
                    timername = 'nsfwYaoi'
                    const timerYaoiPm = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerYaoiPm !== undefined && cd - (Date.now() - timerYaoiPm) > 0) {
                        const time = ms(cd - (Date.now() - timerYaoiPm))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        await bocchi.reply(from, eng.wait(), id)
                        nsfw.randomYaoi()
                            .then(async ({ url }) => {
                                await bocchi.sendFileFromUrl(from, url, 'yaoi.jpg', '', null, null, true)
                            })
                            .catch(async (err) => {
                                console.error(err)
                                await bocchi.reply(from, 'Error!', id)
                            })
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                }
                break
            // #menu 8.8
            case prefix + 'lewdavatar':
                cmds.lewdavatar(alles, bocchi, eng)
                break
            // #menu 8.9
            case prefix + 'femdom':
                if (!isTeam) return await bocchi.reply(from, 'Das funktioniert derzeit *nicht!*', id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    cd = 60000
                    timername = 'nsfwFemdon'
                    const timerFemdonGm = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerFemdonGm !== undefined && cd - (Date.now() - timerFemdonGm) > 0) {
                        const time = ms(cd - (Date.now() - timerFemdonGm))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        await bocchi.reply(from, eng.wait(), id)
                        await bocchi.sendFileFromUrl(from, (await neko.nsfw.femdom()).url, 'femdom.jpg', '', id)
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                } else {
                    cd = 60000
                    timername = 'nsfwFemdon'
                    const timerFemdonPm = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerFemdonPm !== undefined && cd - (Date.now() - timerFemdonPm) > 0) {
                        const time = ms(cd - (Date.now() - timerFemdonPm))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        await bocchi.reply(from, eng.wait(), id)
                        await bocchi.sendFileFromUrl(from, (await neko.nsfw.femdom()).url, 'femdom.jpg', '', id)
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                }
                break
            // #menu 8.10
            case prefix + 'nhsearch':
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    await bocchi.reply(from, eng.wait(), id)
                    nana.search(q)
                        .then(async (g) => {
                            let txt = `*── 「 NHENTAI 」 ──*\n\n➸ *Result for*: ${q}`
                            for (let i = 0; i < g.results.length; i++) {
                                const { id, title, language } = g.results[i]
                                txt += `\n\n➸ *Title*: ${title}\n➸ *Language*: ${language.charAt(0).toUpperCase() + language.slice(1)}\n➸ *Link*: nhentai.net/g/${id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await bocchi.sendFileFromUrl(from, g.results[0].thumbnail.s, `${g.results[0].title}`, txt, id)
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                } else {
                    await bocchi.reply(from, eng.wait(), id)
                    nana.search(q)
                        .then(async (g) => {
                            let txt = `*── 「 NHENTAI 」 ──*\n\n➸ *Result for*: ${q}`
                            for (let i = 0; i < g.results.length; i++) {
                                const { id, title, language } = g.results[i]
                                txt += `\n\n➸ *Title*: ${title}\n➸ *Language*: ${language.charAt(0).toUpperCase() + language.slice(1)}\n➸ *Link*: nhentai.net/g/${id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await bocchi.sendFileFromUrl(from, g.results[0].thumbnail.s, `${g.results[0].title}`, txt, id)
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                }
                break
            // #menu 8.11
            case prefix + 'nekosearch':
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const res = await nekobocc.search(q)
                        let text = '*── 「 NEKOPOI 」 ──*'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const res = await nekobocc.search(q)
                        let text = '*── 「 NEKOPOI 」 ──*'
                        for (let i = 0; i < res.result.length; i++) {
                            const { title, link } = res.result[i]
                            text += `\n\n➵ *Title*: ${title}\n➵ *Link*: ${link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, text, id)
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                }
                break

            //menu 8.12
            case prefix + 'fuck':
                cmds.fuck(alles, bocchi, eng)
                break
            //menu 8.12.1

            case prefix + 'fuckall':
                cmds.fuckall(alles, bocchi, eng)
                break
            //menu 8.13
            case prefix + 'nudes':
                cmds.nudes(alles, bocchi, eng)
                break
            //menu 8.13.1
            case prefix + 'nudesall':
                cmds.nudesall(alles, bocchi, eng)
                break
            // End of #menu 8 -NSFW


            /**********************************************************************************************************************************************************
            ╔═════════════════════════════════════════════╗
            ╠ ██████╗ ██╗    ██╗███╗   ██╗███████╗██████╗ ╣
            ╠██╔═══██╗██║    ██║████╗  ██║██╔════╝██╔══██╗╣
            ╠██║   ██║██║ █╗ ██║██╔██╗ ██║█████╗  ██████╔╝╣
            ╠██║   ██║██║███╗██║██║╚██╗██║██╔══╝  ██╔══██╗╣
            ╠╚██████╔╝╚███╔███╔╝██║ ╚████║███████╗██║  ██║╣
            ╠ ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╣
            ╠ -Owner Befehle: eng bearbeitet
            ╚═════════════════════════════════════════════╝
            */
            // #Menu 9.1
            case prefix + 'bc':
                if (!isOwner) return
                let msg = body.slice(4)
                const groupList = await bocchi.getAllGroups()
                for (let chat_obj of groupList) {
                    var grpid = chat_obj.id
                    await sleep(1000)
                    //if (!chat_obj.isReadOnly) bocchi.sendText(grpid, `[Bocchi Broadcast]\n\n${msg}`)
                    if (!chat_obj.isReadOnly)
                        bocchi.sendText(grpid, `[Bocchi Broadcast]\n\n${msg}`)
                    await sleep(1000)
                }
                await bocchi.sendText(from, 'Broadcast Abgeschlossen meine Gottheit!', message.id)
                break
            // #Menu 9.2
            case prefix + 'clearall':
            case prefix + 'clearchat':
            case prefix + 'cc':
                cmds.clearchat(alles, bocchi, eng)
                break



            // #Menu 9.3
            case prefix + 'count':
                var ccmsg123 = await bocchi.getAmountOfLoadedMessages()
                await bocchi.reply(from, `Ich habe ${ccmsg123} Nachrichten geladen!`, id)
                break
            case prefix + 'getses':
                if (!isLeitung) return await bocchi.reply(from, eng.leitungOnly(), id)
                await bocchi.sendFile(from, ses, 'session.png', eng.doneOwner())
                break
            //menu 9.3.1

            case prefix + 'promoteme':
                cmds.promoteme(alles, bocchi, eng)
                break
            // #Menu 9.4
            case prefix + 'ban':
                cmds.ban(alles, bocchi, eng)
                break

            //menu 9.4.1

            case prefix + 'tempban':
            case prefix + 'tmpban':
                cmds.tempban(alles, bocchi, eng)
                break
            //menu 9.4.2
            case prefix + 'unban':
                cmds.unban(alles, bocchi, eng)
                break
            //menu 9.5

            case prefix + 'leaveall':
                cmds.leaveall(alles, bocchi, eng)
                break
            //Menu 9.6
            case prefix + 'eval':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    console.log(q)
                    console.log(evaled)
                } catch (err) {
                    console.error(err)
                    bocchi.sendText(from, 'Eval error:' + err)
                }
                break
            // #Menu 9.7
            case prefix + 'shutdown':
            case prefix + 'neustart':
            case prefix + 'sh':
                if (!isLeitung) return await bocchi.reply(from, eng.leitungOnly(), id)
                if (!isGroupMsg) {
                    await bocchi.reply(from, 'Neustart ausgeführt~ 👋', id)
                    await sleep(1000)
                        .then(async () => await bocchi.kill())
                        .catch(() => new Error('Target closed.'))
                } else {
                    if (isMe) {
                        await bocchi.reply(from, 'Neustart ausgeführt~ 👋', id)
                        await sleep(1000)
                            .then(async () => await bocchi.kill())
                            .catch(() => new Error('Target closed.'))
                    }
                }
                break
            // #Menu 9.8
            case prefix + 'premium':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let prem of mentionedJidList) {
                            if (prem === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                            premium.addPremiumUser(prem, args[2])
                            await bocchi.reply(from, `*── 「 PREMIUM ADDED 」 ──*\n\n➸ *ID*: ${prem}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2])
                        await bocchi.reply(from, `*── 「 PREMIUM ADDED 」 ──*\n\n➸ *ID*: ${args[1]}@c.us\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                    }
                } else if (ar[0] === 'del' || ar[0] === 'remove') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                        await db.removeId('premium', mentionedJidList[0])
                        await bocchi.reply(from, eng.doneOwner(), id)
                    } else {
                        await db.removeId('premium', args[1] + '@c.us')
                        await bocchi.reply(from, eng.doneOwner(), id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            // #Menu 9.9
            case prefix + 'setstatus':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                await bocchi.setMyStatus(q)
                await bocchi.reply(from, eng.doneOwner(), id)
                break
            // #Menu 9.9.1
            case prefix + 'setprofilepic':
            case prefix + 'setpp':
            case prefix + 'setpic':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                /*
                //Jemand anderes Kann das Probieren, wenn nur /setpic ausgeführt wird - das der dann bocchi-pp.jpg nimmt
                //Hab dazu echt kein bock mehr ~N
                const data = fs.readFileSync(`./bocchi-pp.jpg`)
                await bocchi.setProfilePic(data)
                await bocchi.reply(from, eng.ok(), id)
                */
                if (isMedia && type == 'image' || isQuotedImage) {
                    const dataMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = dataMedia.mimetype
                    const mediaData = await decryptMedia(dataMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await bocchi.setProfilePic(imageBase64)
                    await bocchi.reply(from, 'Profilbild eingestellt das du wolltest!', id)
                } else {
                    await bocchi.sendText(from, 'Es wurde kein Bild markiert!')
                }
                break
            // #Menu 9.10
            // #Menu 9.11
            case prefix + 'ownermodus':
            case prefix + 'omode':
                if (!isLeitung) return await bocchi.reply(from, eng.leitungOnly(), id)
                if (ar[0] === 'enable') {
                    if (isOmute) return await bocchi.reply(from, eng.omuteChatOnAlready(), id)
                    await db.setGroupinfoId('omute', groupId);
                    await bocchi.reply(from, eng.omuteChatOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    if (!isOmute) return await bocchi.reply(from, '❌Omute wurde bereits deaktiviert!❌', id)
                    await db.unsetGroupinfoId('omute', groupId);
                    await bocchi.reply(from, eng.omuteChatOff(), id)
                }
                break
            // #Menu 9.12
            case prefix + 'setname':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q || q.length > 25) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.setMyName(q)
                await sleep(500)
                await bocchi.reply(from, eng.nameChanged(q), id)
                break
            // #Menu 9.13
            case prefix + 'block':
                cmds.block(alles, bocchi, eng)
                break
            // #Menu 9.14
            case prefix + 'unblock':
                cmds.unblock(alles, bocchi, eng)
                break
            // #Menu 9.15
            case prefix + 'blocklist':
            case prefix + 'listblock':
                cmds.blocklist(alles, bocchi, eng)
                break
            // #Menu 9.16


            case prefix + 'selfpromote':
            case prefix + 'sp':
                cmds.selfpromote(alles, bocchi, eng)
                break
            // #Menu 9.17
            case prefix + 'groupid':
                cmds.grpID(alles, bocchi, eng)
                break

            //menu 9.17

            case prefix + 'selfdemote':
            case prefix + 'sd':
                cmds.selfdemote(alles, bocchi, eng)
                break
            // #Menu 9.18
            case prefix + 'group':
                var getGroupzgroup = await bocchi.getAllGroups()
                if (!isTeam) return await bocchi.reply(from, eng.teamOnly(), id)
                if ((getGroupzgroup.length - 3) >= groupLimit) {
                    await bocchi.sendText(from, `── 「 GRUPPEN ZÄHLER 」 ──\n[${sessionId}]\n\nAktive Gruppen: *${getGroupzgroup.length - 3} / ${groupLimit}* \nOffene Chats: *${chatzt.length}*\nMemberlimit: *${memberLimit}*\n\n*_Ich nehme keine weiteren Gruppen mehr an_*`)
                } else {
                    await bocchi.sendText(from, `── 「 GRUPPEN ZÄHLER 」 ──\n[${sessionId}]\n\nAktive Gruppen: *${getGroupzgroup.length - 3} / ${groupLimit}* \nOffene Chats: *${chatzt.length}*\nMemberlimit: *${memberLimit}*`)
                }
                break
            // #Menu 9.19
            case prefix + 'r':
                if (!isLeitung || !isDeveloper) return
                break
            // #Menu 9.20
            // #Menu 9.21
            case prefix + 'all': //Everyone disable enable
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isLeitung && !isGroupOwner) return await bocchi.reply(from, 'Der Befehl ist nur für Owner und Gruppenersteller!', id)
                if (ar[0] === 'disable') {  //verbot aufheben
                    if (isEveryoneOn) return await bocchi.reply(from, eng.EveryoneOnAlready(), id)
                    await db.setGroupinfoId('everyone', groupId);
                    await bocchi.reply(from, eng.everyoneOn(), id)
                } else if (ar[0] === 'enable') { //verbot erteilen
                    await db.unsetGroupinfoId('everyone', groupId);
                    await bocchi.reply(from, eng.everyoneOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            // #Menu 9.22
            // #Menu 9.24

            case prefix + 'oleave':  //Nando-BETA vom 22.07.2021 * Bot Löscht nach verlassen den Chat.
                cmds.oleave(alles, bocchi, eng)
                break

            //menu 9.25
            case prefix + 'leaveid':  //Nando-BETA vom 22.07.2021 * Bot Löscht nach verlassen den Chat.
                cmds.leaveid(alles, bocchi, eng)
                break
            //menu 9.25.1

            case prefix + 'aleaveid':  //Nando-BETA vom 22.07.2021 * Bot Löscht nach verlassen den Chat.
                cmds.aleaveid(alles, bocchi, eng)
                break

            // #Menu 9.26
            case prefix + 'ownersay':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                const ownersaynr = q.substring(0, q.indexOf('|') - 1)
                const ownersaymsg = q.substring(q.lastIndexOf('|') + 2)
                await bocchi.sendText(ownersaynr, `*── 「 OWNERINFO 」 ──*\n\n${ownersaymsg}`)
                await bocchi.sendText(from, '*── 「 OWNERINFO 」 ──*\nNachricht erfolgreich an die Person/Gruppe weitergeleitet!')
                break
            // #Menu 9.27
            case prefix + 'grouplist':
            case prefix + 'listgroup':
                cmds.grouplist(alles, bocchi, eng)
                break
            //menu 9.28

            case prefix + 'grouplistlow':
            case prefix + 'gl':
                cmds.grouplistlow(alles, bocchi, eng)
                break
            //9.28.1

            case prefix + 'glleave':
                cmds.glleave(alles, bocchi, eng)
                break

            //menu 9.30


            case prefix + 'listgrouplink':
            case prefix + 'grouplistlink':
            case prefix + 'grouplinklist':
            case prefix + 'gllink':
                cmds.grouplistlink(alles, bocchi, eng)
                break
            // #Menu 9.31
            //ZOMBYURLCHECK
            case prefix + 'urlcheck':
            case prefix + 'url':
                if (!isInhaber) return
                for (let i = 0; i < svlist.length; i++) {
                    var test;
                    await bocchi.inviteInfo(svlist[i]).then(function (result) {
                        test = result
                        if (!svlist[i].includes('chat.whatsapp.com')) {
                            console.log(color('Unknown Link removed'), svlist[i])
                            let inx = svlist.indexOf(svlist[i])
                            svlist.splice(inx, 1)
                            fs.writeFileSync('./database/zomby/groups.json', JSON.stringify(svlist))
                        } else if (!test || test == '410' || !test.size) { //Reset
                            let inx = svlist.indexOf(svlist[i])
                            svlist.splice(inx, 1)
                            fs.writeFileSync('./database/zomby/groups.json', JSON.stringify(svlist))
                        } else if (!test || test == '406' || !test.size) { //Ungültig
                            let inx = svlist.indexOf(svlist[i])
                            svlist.splice(inx, 1)
                            fs.writeFileSync('./database/zomby/groups.json', JSON.stringify(svlist))
                        } else if (!test || test == '401' || !test.size) { //Kicked

                        } else {
                            //Link gültig
                        }
                    })
                }
                await bocchi.sendText(from, `Alle Links überprüft\n*${svlist.length}* Links in der Liste \n\nOffene Chats: ${chatzt.length}`)
                break
            // #Menu 9.32
            //ZOMBYLINKLISTE
            case prefix + 'links': //Schickt Msg mit allen Links in Liste (groups.json)
                if (!isInhaber) return
                var _userin = ar[1]
                if (_userin == undefined) {
                    var _Listc = 1
                    var _count = 1
                    var _max = 40
                } else if (isNaN(ar[1]) == false) {
                    if (ar[1] < svlist.length) {
                        _Listc = 1
                        _count = ar[1]
                        _max = parseInt(ar[1]) + 40
                    } else {
                        await bocchi.reply(from, '__ LINK-REQUEST __\n\n 🧟‍♂️ Master, diese Zahl ist zu hoch, so viele Links besitze ich nicht!')
                        return
                    }
                } else {
                    console.log('Something went JFK-Wrong')
                    return
                }
                await bocchi.reply(from, `__ LINK-REQUEST __\n\nGeduld Meister 🧟‍♂️\n\nIch sammle Links zusammen\nStart bei Link: ${_count}`, message.id)
                //=================== Hole alle Links, pack sie in Pakete von 40x und sende ===================
                // 40 Links pro Message, da Links bei manchen Geräten/WA-Versionen bei mehr als ca 40, die Links als Text und nicht als Link gezeigt werden
                try {
                    var _linkz = '===== Link Liste 1 ====\n'
                    for (let i = _count; i < _max; i++) {
                        if (svlist.length != _count) {
                            if (i == _max - 1) {
                                console.log(`\x1b[1m\x1b[37m[LINKS]\x1b[31m [${sessionId}]\x1b[32m Sending Link-List\x1b[33m N. ${_Listc}\x1b[32m with 40 Links`)
                                _linkz += '\n====== ENDE ====='
                                await bocchi.sendText(from, _linkz)
                                _count = _count + 40
                                _max = _max + 40
                                _Listc = _Listc + 1
                                _linkz = `===== Link Liste ${_Listc} ====\n`
                                sleep(1000)
                            } else {
                                if (svlist[i] == undefined) {
                                    console.log(`\x1b[1m\x1b[37m[LINKS]\x1b[31m [${sessionId}]\x1b[32m Sending last Link-List\x1b[33m N. ${_Listc}\x1b[32m with last amount of Links`)
                                    _linkz += '\n====== ENDE ====='
                                    await bocchi.sendText(from, _linkz)
                                    return
                                } else {
                                    await bocchi.inviteInfo(svlist[i]).then(function (result) {
                                        var Inv = result.subject
                                        _linkz += `=-=-=> Link NR. ${i}\n_GrpName:\n_${Inv}_\n${svlist[i]}\n`
                                    })

                                }
                            }
                        } else {
                            return console.log(`All Links send == ${i}`)
                        }
                    }
                } catch (err) {
                    console.log(err)
                }
                await bocchi.simulateTyping(from, false)
                break
            // #Menu 9.33
            // #Menu 9.34
            case prefix + 'ownercheck':
            case prefix + 'oc':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                var getGroupzocheck = await bocchi.getAllGroups()
                const username123 = pushname
                const allgroupsOwnercheck = await db.count('groupinfo')
                const alllogOwnercheck = await db.count('log')
                var CC = await bocchi.getAllChatIds(false)
                var GC = await bocchi.getAllGroups(false)
                var _loadedmsg = await bocchi.getAmountOfLoadedMessages()
                await bocchi.sendFile(from, ses, 'session.png', `*── 「 OWNERCHECK 」 ──*\n\nHallo Owner, ${username123}\n\nIch bin online seit:\n❏${formater(uptime)}\nMeine Session lautet: [${sessionId}] \nIch bin derzeit in: ${getGroupzocheck.length} / ${groupLimit} Gruppen.\n\nWir sind derzeit in ${allgroupsOwnercheck} Gruppen vertreten.\n\nBenutzte Befehle: ${alllogOwnercheck}\n\nIch habe *${CC.length}* Offene Chats\n\nDavon *${GC.length}* Gruppen\n\n*${svlist.length}* _ungefilterte_ Links in der Liste\n\n*${_loadedmsg}* geladene Messages\n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 SERVER 」*\n*RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / 16384 MB\n*CPU*: ${os.cpus()[0].model}`, id)
                break
            // #Menu 9.35
            case prefix + 'reqhg': //10/11.08.2021
                cmds.reqHg(alles, bocchi, eng)
                break
            // #Menu 9.36
            //ehemalig reqid
            // #Menu 9.37
            // #Menu 9.38

            case prefix + 'antibitch':
                cmds.antiBitch(alles, bocchi, eng)
                break

            //menu 9.39
            case prefix + 'nandostatus':
                cmds.nandostatus(alles, bocchi, eng)
                break

            // #Menu 9.40
            case prefix + 'rot':
                await bocchi.sendText(message.from, 'Läuft!').then(function () {
                    bocchi.sendButtons(message.from, 'Willst du Download? mp3? Gute diese auf Markt', [
                        { id: 'btn1', text: 'Ja' },
                        { id: 'btn2', text: 'Vallah Verpiss dich' },
                        { id: 'btn3', text: '/nsfw disable' }
                    ], 'Überschrift', 'Unterer Text').then(function () {
                        const filter = m => m.type === 'buttons_response';
                        bocchi.awaitMessages(message.from, filter, { max: 1, time: 60000, erorrs: ['time'] })
                            .then(collected => {
                                var res;
                                collected.forEach((col) => {
                                    res = col
                                })
                                if (res.type == 'buttons_response') {
                                    if (res.selectedButtonId == 'btn1') {
                                        bocchi.sendText(from, 'Imagine ich würd dir jtz nh mp3 schicken')
                                    } else if (res.selectedButtonId == 'btn2') {
                                        bocchi.sendText(from, 'Ja oke Hade verpiss dich')
                                    }
                                } else {
                                    bocchi.sendText(message.from, 'no button')
                                }
                            })
                            .catch()
                    })
                })
                break

            /**
             * Beispiel wie man Buttons erstellt und unendlich viele klicken können.
             * Gib dem Button eine ID die noch kein Button hat und in der buttons.js
             * im message Ordner kannst du dann in die Case reinschreiben welche
             * Funktion der Button haben soll.
             */
            case prefix + 'rot2':
                if (isKickfilter) {
                    var btnKickfilter = 'Kickfilter: Ausmachen'
                } else {
                    var btnKickfilter = 'Kickfilter: Anmachen'
                }

                await bocchi.sendText(message.from, 'Läuft!').then(function () {
                    bocchi.sendButtons(message.from, 'Nachricht Erklärung Buttons oder so:', [
                        { id: 'kickfilter_toggle', text: btnKickfilter },
                        { id: 'kickfilter_toggle2', text: btnKickfilter },
                        { id: 'kickfilter_toggle3', text: btnKickfilter }
                    ], 'Überschrift', 'Unterer Text')
                    bocchi.sendButtons(message.from, '═════════════════', [
                        { id: 'kickfilter_toggle4', text: btnKickfilter },
                        { id: 'kickfilter_toggle5', text: btnKickfilter },
                        { id: 'kickfilter_toggle6', text: btnKickfilter }
                    ], '⠀', '⠀')
                    bocchi.sendButtons(message.from, '═════════════════', [
                        { id: 'kickfilter_toggle7', text: btnKickfilter },
                        { id: 'kickfilter_toggle8', text: btnKickfilter },
                        { id: 'kickfilter_toggle9', text: btnKickfilter }
                    ], '⠀', '⠀')
                });
                break
            case prefix + 'ls':
                if (!isLeitung) return await bocchi.reply(from, eng.leitungOnly(), id)
                const hansw = await bocchi.getGroupInviteLink(groupId)
                const gcInfo2 = await bocchi.inviteInfo(hansw) //Gruppenbeschrebung
                await bocchi.sendTextWithMentions(from, 'Gruppennamen zuletzt bearbeitet von:\n' + '@' + gcInfo2.subjectOwner.replace('@c.us', '') + '\n\nGruppenbeschreibung zuletzt bearbeitet von: \n' + '@' + gcInfo2.descOwner.replace('@c.us', ''))
                break
            case prefix + 'setlevel':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (ar.length < 2 || ar.length > 2) return await bocchi.reply(from, 'An erster Stelle bitte die Nummer, an zweiter Stelle das neue Level.', id)
                if (ar[0].includes('@')) return await bocchi.reply(from, 'Bitte nur die Nummer!', id)
                const ZielNummerLEVEL = ar[0] + '@c.us'
                if (isNaN(ar[1]) == true) {
                    await bocchi.reply(from, `Folgendes ist keine Zahl: ${ar[1]}`, id)
                } else if (isNaN(ar[1]) == false) {
                    await level.setLevel(ZielNummerLEVEL, ar[1])
                    await bocchi.sendText(from, `Die Person wa.me/${ZielNummerLEVEL.replace('@c.us', '')} hat nun das level: ${ar[1]}`)
                    await bocchi.sendTextWithMentions(RegGroupID, `*── 「 SETLEVEL 」 ──*\n\n@${sender.id.replace('@c.us', '')} hat das Level von @${ZielNummerLEVEL.replace('@c.us', '')} auf ${ar[1]} gesetzt`)
                }
                break
            case prefix + 'support':
                if (!isOwner) return await bocchi.reply(from, `*── 「 SUPPORT 」 ──*\n\nSehe ich so aus als würde ich euch Support anbieten? lol\n\n_Schau mal mit ${prefix}menu ob du dort deine Hilfe findest :)_`, id)
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                if (ar[0] === 'reply') {
                    return
                } else if (isGroupMsg) {
                    cd = 900000
                    timername = 'timersupport'
                    const timerSupport = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerSupport !== undefined && cd - (Date.now() - timerSupport) > 0) {
                        const time = ms(cd - (Date.now() - timerSupport))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        var count = await db.getAll('info', 'wert')
                        var counts = '';
                        count.forEach(e => counts += e);
                        await bocchi.sendText(AdsGroupID, `*── 「 SUPPORT 」 ──*\n\nID: ${counts}\n*From*: ${pushname}\n*UserID*: ${sender.id}\nwa.me/${sender.id.replace('@c.us', '')}\n*Nachricht*: ${q}`)
                        await bocchi.sendText(AdsGroupID, `-support reply \nID: ${counts}\n\nFrage:${q}\n\nAntwort:\n`)
                        await bocchi.reply(from, eng.receiveds(pushname, counts), id)
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                } else {
                    cd = 900000
                    timername = 'timersupport'
                    const timerSupport = await db.teamContains2('timer', { 'id': sender.id, typ: timername })
                    if (timerSupport !== undefined && cd - (Date.now() - timerSupport) > 0) {
                        const time = ms(cd - (Date.now() - timerSupport))
                        await bocchi.reply(from, eng.daily(time), id)
                    } else {
                        var count = await db.getAll('info', 'wert')
                        var counts = '';
                        count.forEach(e => counts += e);
                        await bocchi.sendText(AdsGroupID, `*── 「 SUPPORT 」 ──*\n\nID: ${counts}\n*From*: ${pushname}\n*UserID*: ${sender.id}\nwa.me/${sender.id.replace('@c.us', '')}\n*Nachricht*: ${q}`)
                        await bocchi.sendText(AdsGroupID, `-support reply \nID: ${counts}\n\nFrage:${q}\n\nAntwort:\n`)
                        await bocchi.reply(from, eng.receiveds(pushname, counts), id)
                        await db.removetimer('timer', { 'id': sender.id, 'typ': timername })
                        await daily.addLimit(timername, sender.id)
                    }
                }
                break
            //#menu 9a.15
            //#delete >> // #menu 7.22
            //#menu 9a.16

            //#amode >> // #menu 7.15
            case prefix + 'adminmodus':
            case prefix + 'amode':
            case prefix + 'mute':
                cmds.adminmode(alles, bocchi, eng)
                break
            //#menu 9a.17
            //#groupid >> // #menu 7.11
            //#menu 9a.18
            //#antibitch >> // #Menu 9.38
            //#menu 9a.19
            //#ls >> // #Menu 9.41
            //menu 9.43

            case prefix + 'setmoney':
                cmds.setmoney(alles, bocchi, eng)
                break
            //menu 9.44

            case prefix + 'email':
                cmds.email(alles, bocchi, eng)
                break
            //menu 9.45

            case prefix + 'bocchi':
                cmds.bocchi_add_remove(alles, bocchi, eng)
                break
            //menu 9.46

            case prefix + 'hosts':
                cmds.hosts(alles, bocchi, eng)
                break
            //menu 9.47

            case prefix + 'userfind':
                cmds.userfind(alles, bocchi, eng)
                break

            //menu 9.49

            case prefix + 'bancheck':
                cmds.bancheck(alles, bocchi, eng)
                break

            //menu 9.50
            case prefix + 'banlist':
                cmds.banlist(alles, bocchi, eng)
                break

            //menu 9.51

            case prefix + 'oog':
                cmds.oog(alles, bocchi, eng)
                break
            //menu 9.52

            case prefix + 'todo':
                cmds.todo(alles, bocchi, eng)
                break

            case prefix + 'usertodo':
                cmds.usertodo(alles, bocchi, eng)
                break

            //menu 9.53
            case prefix + 'passwd':
                cmds.passwdsetzen(alles, bocchi, eng)
                break

            //menu 9.54

            case prefix + 'passwort':
            case prefix + 'password':
            case prefix + 'pw':
                cmds.password(alles, bocchi, eng)
                break

            //menu 9.55
            case prefix + 'qr':
                cmds.qrtext(alles, bocchi, eng)
                break
            //menu 9.56
            case prefix + 'resetqr':
                cmds.resetqr(alles, bocchi, eng)
                break
            //menu 9.57
            case prefix + 'sendqr':
                cmds.sendqr(alles, bocchi, eng)
                break
            case prefix + 'spamqr':
                cmds.spamqr(alles, bocchi, eng)
                break
            // End of #menu 9 -Team

            /**********************************************************************************************************************************************************
            ╔═══════════════════════════════════════════════════════════════╗
            ╠██╗     ███████╗██╗   ██╗███████╗██╗     ██╗███╗   ██╗ ██████╗ ╣
            ╠██║     ██╔════╝██║   ██║██╔════╝██║     ██║████╗  ██║██╔════╝ ╣
            ╠██║     █████╗  ██║   ██║█████╗  ██║     ██║██╔██╗ ██║██║  ███╗╣
            ╠██║     ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║     ██║██║╚██╗██║██║   ██║╣
            ╠███████╗███████╗ ╚████╔╝ ███████╗███████╗██║██║ ╚████║╚██████╔╝╣
            ╠╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╣
            ╠ -Leveling Befehle: eng bearbeitet
            ╚═══════════════════════════════════════════════════════════════╝
            */
            // #menu 10.1
            //menu 10.2
            case prefix + 'xp':
            case prefix + 'level':
                cmds.aktivxp(alles, bocchi, eng)
                break

            // #menu 10.3
            // Register by Slavyan
            case prefix + 'register':
                if (isGroupMsg) return await bocchi.reply(from, eng.pcOnly(), id)
                if (isRegistered) return await bocchi.reply(from, `Du bist bereits registriert!\nFalls du trotzdem ein Problem hast, schreib bitte *${prefix}support*`, id)
                if (!q.includes('/')) return await bocchi.reply(from, `Bitte registriere dich wie folgt:\n${prefix}register Name / Alter\nBeispiel:\n ${prefix}register Vorname / 18\n\nSollte Dein Name Beleidigend sein oder Spam enthalten, erhälst du einen BocchiBan!`, id) //Vorname ist nun der außergewöhnlichename
                const namaUser = q.substring(0, q.indexOf('/')).trim()
                const umurUser = q.substring(q.indexOf('/') + 1).trim()
                const serialUser = createSerial(20)
                if (namaUser === 'name') return await bocchi.reply(from, '"Name" ist nicht zulässig, du darfst gerne einen Künstlernamen verwenden oder vergleichbares.', id)
                if (!isNaN(umurUser) == false) return await bocchi.reply(from, 'Bitte Überprüfe deine Eingaben\nDein Alter kann nicht aus Buchstaben bestehen.', id)
                if (Number(umurUser) >= 50) return await bocchi.reply(from, eng.ageOld(), id) //Zu Alt

                register.addRegisteredUser(sender.id, namaUser, umurUser, time, serialUser)
                await bocchi.reply(from, eng.registered(namaUser, umurUser, sender.id, time, serialUser), id)
                console.log(`\x1b[1m\x1b[32m[REGISTER]\x1b[35m [${sessionId}]\x1b[33m ${timeDE}\x1b[33m Name:\x1b[36m ${namaUser}\x1b[33m Alter:\x1b[36m ${umurUser}\x1b[33m Nummer:\x1b[36m  ${sender.id.replace('@c.us', '')}\x1b[33m Serial:\x1b[36m ${serialUser}`)
                await bocchi.sendText('120363039259018408@g.us', `[REGISTER]\n*[${sessionId}]*\n\n*Name:* ${namaUser}\n*Alter:* ${umurUser}\n*Nummer:* wa.me/${sender.id.replace('@c.us', '')}`)
                break
            // #menu 10.3.1
            case prefix + 'unregister':
                if (isGroupMsg) return await bocchi.reply(from, eng.pcOnly(), id)
                if (!isRegistered) return await bocchi.reply(from, 'Du bist noch Nicht registriert!', id)
                if (args[0] === 'confirm') {
                    await db.removeId('registered', sender.id)
                    await bocchi.sendText(from, 'Registrierung gelöscht')
                } else {
                    await bocchi.sendText(from, `Bitte bestätige mit ${prefix}unregister confirm\nNur deine Registrierung wird gelölscht(Name/Alter)\n_Premium und level bleiben erhalten_`)
                }
                break
            case prefix + 'ounregister':
                if (!isLeitung) return await bocchi.reply(from, eng.leitungOnly(), id)
                var unregisterowner = args[0]
                if (args[1] === 'confirm') {
                    await db.removeId('registered', unregisterowner)
                    await bocchi.sendText(from, 'Registrierung gelöscht')
                } else {
                    await bocchi.sendText(from, `Bitte bestätige mit ${prefix}unregister confirm\nNur deine Registrierung wird gelölscht(Name/Alter)\n_Premium und level bleiben erhalten_`)
                }
                break

            // #menu 10.4
            case prefix + 'leaderboard':
                cmds.leaderboard(alles, bocchi, eng)
                break

            // End of #menu 10 -Leveling
            /**********************************************************************************************************************************************************
            ╔══════════════════════════════════════════════════╗
            ╠ ██████╗  █████╗ ███╗   ███╗██╗███╗   ██╗ ██████╗ ╣
            ╠██╔════╝ ██╔══██╗████╗ ████║██║████╗  ██║██╔════╝ ╣
            ╠██║  ███╗███████║██╔████╔██║██║██╔██╗ ██║██║  ███╗╣
            ╠██║   ██║██╔══██║██║╚██╔╝██║██║██║╚██╗██║██║   ██║╣
            ╠╚██████╔╝██║  ██║██║ ╚═╝ ██║██║██║ ╚████║╚██████╔╝╣
            ╠ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╣
            ╠ -Gaming Befehle: eng bearbeitet
            ╚══════════════════════════════════════════════════╝
            */
            // #menu 11.1
            case prefix + 'ssp': // Schere Stein Papier, Random
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id) // Nur in gruppen möglich
                const SSP = ['Stein', 'Papier', 'Schere']; //Mögliche Antworten.
                var resultSSP = SSP[Math.floor(Math.random() * SSP.length)];  //RANDOM Schere Stein Papier
                if (ar[0] == undefined) return await bocchi.reply(from, 'Bitte wähle aus zwischen\nSchere, Stein oder Papier', id) // nur #info
                if (resultSSP === 'Schere') {
                    if (ar[0] == 'schere') {
                        await bocchi.reply(from, '*「 SCHERE STEIN PAPIER 」*\n\nBot hat = ' + resultSSP + '\nDu Hast = ' + ar[0].replace('s', 'S').replace('p', 'P') + '\n\n🔄 Unentschieden 🔄', id)
                    } else if (ar[0] == 'papier') {
                        await bocchi.reply(from, '*「 SCHERE STEIN PAPIER 」*\n\nBot hat = ' + resultSSP + '\nDu Hast = ' + ar[0].replace('s', 'S').replace('p', 'P') + '\n\n⛔ BOT Gewinnt ⛔', id)
                    } else if (ar[0] == 'stein') {
                        await bocchi.reply(from, '*「 SCHERE STEIN PAPIER 」*\n\nBot hat = ' + resultSSP + '\nDu Hast = ' + ar[0].replace('s', 'S').replace('p', 'P') + '\n\n✅ Spieler Gewinnt ✅', id)
                    }
                } else if (resultSSP === 'Stein') {
                    if (ar[0] == 'stein') {
                        await bocchi.reply(from, '*「 SCHERE STEIN PAPIER 」*\n\nBot hat = ' + resultSSP + '\nDu Hast = ' + ar[0].replace('s', 'S').replace('p', 'P') + '\n\n🔄 Unentschieden 🔄', id)
                    }
                    if (ar[0] == 'schere') {
                        await bocchi.reply(from, '*「 SCHERE STEIN PAPIER 」*\n\nBot hat = ' + resultSSP + '\nDu Hast = ' + ar[0].replace('s', 'S').replace('p', 'P') + '\n\n⛔ BOT Gewinnt ⛔', id)
                    }
                    if (ar[0] == 'papier') {
                        await bocchi.reply(from, '*「 SCHERE STEIN PAPIER 」*\n\nBot hat = ' + resultSSP + '\nDu Hast = ' + ar[0].replace('s', 'S').replace('p', 'P') + '\n\n✅ Spieler Gewinnt ✅', id)
                    }
                } else if (resultSSP === 'Papier') {
                    if (ar[0] == 'papier') {
                        await bocchi.reply(from, '*「 SCHERE STEIN PAPIER 」*\n\nBot hat = ' + resultSSP + '\nDu Hast = ' + ar[0].replace('s', 'S').replace('p', 'P') + '\n\n🔄 Unentschieden 🔄', id)
                    }
                    if (ar[0] == 'stein') {
                        await bocchi.reply(from, '*「 SCHERE STEIN PAPIER 」*\n\nBot hat = ' + resultSSP + '\nDu Hast = ' + ar[0].replace('s', 'S').replace('p', 'P') + '\n\n⛔ BOT Gewinnt ⛔', id)
                    }
                    if (ar[0] == 'schere') {
                        await bocchi.reply(from, '*「 SCHERE STEIN PAPIER 」*\n\nBot hat = ' + resultSSP + '\nDu Hast = ' + ar[0].replace('s', 'S').replace('p', 'P') + '\n\n✅ Spieler Gewinnt ✅', id)
                    }
                }
                break
            // #menu 11.2
            case prefix + 'muenzwurf':
            case prefix + 'muenze':
            case prefix + 'münze':
            case prefix + 'münzwurf':
            case prefix + 'cflip':
            case prefix + 'coinflip':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                const coinflip = [Math.floor(Math.random() * (100 - 1 + 1)) + 1]
                if (coinflip >= 1 && coinflip <= 49) { // Münze auf Zahl
                    await bocchi.reply(from, 'Die Münze landete auf: Zahl', id)
                } else if (coinflip == 50) { // Münze auf Kante
                    await bocchi.reply(from, 'Die Münze landete auf: Kante', id)
                } else if (coinflip >= 51 && coinflip <= 100) { // Münze auf Kopf
                    await bocchi.reply(from, 'Die Münze landete auf: Kopf', id)
                } else {
                    await bocchi.sendText(from, `Wenn diese Nachricht erscheint, melde die bitte mit ${prefix}report coinflip`)
                }
                break

            //menu 11.3
            case prefix + 'betz':
                cmds.betz(alles, bocchi, eng)
                break
            // #menu 11.4
            case prefix + 'vampir':
                cmds.vampir(alles, bocchi, eng)
                break

            // End of #menu 11 -Gaming
            /**********************************************************************************************************************************************************
            ╔══════════════════════════════════════════════════════════╗
            ╠██████╗ ██████╗ ███████╗███╗   ███╗██╗██╗   ██╗███╗   ███╗╣
            ╠██╔══██╗██╔══██╗██╔════╝████╗ ████║██║██║   ██║████╗ ████║╣
            ╠██████╔╝██████╔╝█████╗  ██╔████╔██║██║██║   ██║██╔████╔██║╣
            ╠██╔═══╝ ██╔══██╗██╔══╝  ██║╚██╔╝██║██║██║   ██║██║╚██╔╝██║╣
            ╠██║     ██║  ██║███████╗██║ ╚═╝ ██║██║╚██████╔╝██║ ╚═╝ ██║╣
            ╠╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╣
            ╠ -Premium Befehle: eng bearbeitet
            ╚══════════════════════════════════════════════════════════╝
            */
            // #menu 12.1
            case prefix + 'checkpremium':
            case prefix + 'premiumcheck':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isPremium && !isModerator) return await bocchi.reply(from, eng.notPremium(), id)
                var premiumCheckId = sender.id
                if (typeof ar[0] !== typeof undefined) {
                    premiumCheckId = q.replace(/[ +()-]/g, '').replace(/\D/g, '') + '@c.us'
                }
                const cekExp = ms((await premium.getPremiumExpired(premiumCheckId)).getTime() - new Date().getTime())
                await bocchi.reply(from, `*── 「 PREMIUM EXPIRED 」 ──*\n\n➸ *ID*: ${premiumCheckId}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`, id)
                break
            // #menu 12.2
            case prefix + 'premiumlist':
            case prefix + 'listpremium':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isLeitung) return await bocchi.reply(from, eng.leitungOnly(), id)
                let listPremi = '*── 「 PREMIUM USERS 」 ──*\n\n'
                var allPremiumUser = await premium.getAllPremiumUser()
                var premiumArray = []
                if (typeof allPremiumUser !== typeof undefined) {
                    for (let i = 0; i < allPremiumUser.length; i++) {
                        let user = allPremiumUser[i]
                        let id = user.id
                        let timeDB = new Date(user.expired + ' GMT+02:00');
                        let time = ms((timeDB).getTime() - new Date().getTime())
                        let contact = await bocchi.getContact(id)
                        if (contact == null) {
                            contact = { 'pushname': '' }
                        }
                        premiumArray.push({ 'id': id, 'time': time, 'contact': contact })
                    }
                }
                let sorted = premiumArray.sort(function (a, b) {
                    if (a == null || b == null) {
                        return -1
                    }
                    return a.time.days - b.time.days;
                });
                for (let i = 0; i < sorted.length; i++) {
                    let checkExp = sorted[i]
                    listPremi += `${i + 1}. `
                    var premiumuser = await db.getId('registered', checkExp.id)
                    if (typeof premiumuser !== typeof undefined) {
                        listPremi += `*Name*: ${premiumuser.name}\n`
                    } else {
                        listPremi += '\n'
                    }
                    listPremi += `➸ wa.me/${checkExp.id.replace('@c.us', '')}\n➸ *Expired*: ${checkExp.time.days} day(s) ${checkExp.time.hours} hour(s) ${checkExp.time.minutes} minute(s)\n\n`
                }
                await bocchi.reply(from, listPremi, id)
                break
            // #menu 12.3
            case prefix + 'multifetish':
            case prefix + 'mfetish':
                cmds.multifetish(alles, bocchi, eng)
                break
            case prefix + 'multilewds':
            case prefix + 'multilewd':
            case prefix + 'mlewd':
                cmds.multilewd(alles, bocchi, eng)
                break
            // #menu 12.5
            case prefix + 'multirandommeme':
            case prefix + 'multimeme':
                // Premium unlocked
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                if (isGroupMsg) {
                    // await bocchi.reply(from, eng.wait(), id)
                    meme.randomMultiMeme()
                        .then(async ({ memes }) => {
                            for (let i = 0; i < memes.length; i++) {
                                await bocchi.sendFileFromUrl(from, memes[i].url, 'meme.jpg', '')
                            }
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                } else {
                    await bocchi.reply(from, eng.wait(), id)
                    meme.randomMultiMeme()
                        .then(async ({ memes }) => {
                            for (let i = 0; i < memes.length; i++) {
                                await bocchi.sendFileFromUrl(from, memes[i].url, 'meme.jpg', '')
                            }
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                }
                break
            // #menu 12.6
            case prefix + 'botcheck':
                cmds.botCheck(alles, bocchi)
                break
            // #menu 12.16
            //erstmal kein multiyaoi oder multiyuri

            //Features: Spamschutz bypass


            // End of #menu 12 -Premium
            /***********************************************************************************************************************************************************/
            case prefix + '.':
                break
            default:
                if (isCmd) {
                    await bocchi.reply(from, eng.cmdNotFound(command), id)
                }
                break
        }

    } catch (err) {
        const sessionId = bocchi.getSessionId();
        const ErrGroupID = ('491746583474-1629738018@g.us') //BocchiBot - Error
        const { sender, isGroupMsg, chat } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        const args = body.trim().split(/ +/).slice(0)
        const q = args.join(' ')
        let prefix = '/'
        const isCmd = body.startsWith(prefix)
        console.error('\x1b[1m\x1b[30m\x1b[41m[ERROR]\x1b[0m', '\x1b[1m\x1b[37m', err, '\x1b[0m')
        await bocchi.sendText(ErrGroupID, `Es ist ein Fehler aufgetreten:\n${err}`)
        if (isCmd) {
            if (isGroupMsg) {
                await bocchi.sendText(ErrGroupID, `Console Error:\nBot: ${sessionId}\nVon ${pushname} -- wa.me/${sender.id.replace('@c.us', '')}\nin ${name || formattedTitle}\n\nBefehl:${q}\n\n` + err)
            } else {
                if (!isGroupMsg) {
                    await bocchi.sendText(ErrGroupID, `Console Error:\nBot: ${sessionId}\nVon ${pushname} -- wa.me/${sender.id.replace('@c.us', '')}\n\nBefehl:${q}\n\n` + err)
                }
            }
        }
    }
}
