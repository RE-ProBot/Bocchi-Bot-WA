async function sleep(time) {
    return await new Promise((resolve) => setTimeout(resolve, time));
}
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

async function getAlles(bocchi, message, db, waehrung, daily, helper, level, premium, eng) {
    // sachen die der client machen soll, besser außerhalb der Sammlung
    const fs = require('fs-extra')
    let { body } = message
    const isMe = message.quotedMsgObj ? message.quotedMsgObj.fromMe : false
    const groupAdmins = message.isGroupMsg ? await bocchi.getGroupAdmins(message.from) : ''
    const botNumber = await bocchi.getHostNumber() + '@c.us'
    const args = body.trim().split(/ +/).slice(1)
    const q = args.join(' ')
    const ar = args.map((v) => v.toLowerCase())
    const importFresh = require('import-fresh')
    const ms = require('parse-ms')
    const moment = require('moment-timezone')
    moment.tz.setDefault('Europe/Berlin').locale('de')
    const toMs = require('ms')
    const { nsfw, weeaboo, downloader, fun, misc, meme, nandostatus } = require('../lib')
    const Nekos = require('nekos.life')
    const neko = new Nekos()
    const time = moment(message.t * 1000).format('YYYY/MM/DD HH:mm:ss')
    const timeDE = moment(message.t * 1000).format('DD/MM/YYYY HH:mm:ss') //Zeit Nachricht
    const dateNowDE = moment.tz('Europe/Berlin').format('DD.MM.YYYY HH:mm:ss') //Zeit Server
    const errorImg = 'https://i.ibb.co/jRCpLfn/user.png'
    const config = bocchi.getConfig();
    var sessionId = bocchi.getSessionId()
    const AdsGroupID = ('120363038675874425@g.us') //BochiBot - Support
    const RegGroupID = ('120363039259018408@g.us') //BochiBot - Register
    const DevGroupID = ('120363022360920817@g.us') //BochiBot - Organ
    const ErrGroupID = ('491746583474-1629738018@g.us') //BocchiBot - Error
    const AdsGrp = 'https://chat.whatsapp.com/GrKdYFvEeRj8mpeJzsfy9J' //BochiBot - Support
    const ErrGrp = 'https://chat.whatsapp.com/KsBBtQskmuUDEpDoI3skVQ' //BochiBot - Error
    const DevGrp = 'https://chat.whatsapp.com/D3A94aTUTr66rtdZVd9hLv' //BochiBot - Organisation 
    const RegGrp = 'https://chat.whatsapp.com/ETDUsJSWpE10Lom7EmSaCn' //BocchiBot - Register
    const blockNumber = await bocchi.getBlockedIds()
    const groupLimit = 50
    const memberLimit = 15;
    const url = args.length !== 0 ? args[0] : ''
    var cd = ''
    const isQuotedImage = message.quotedMsg && message.quotedMsg.type === 'image'
    const isQuotedVideo = message.quotedMsg && message.quotedMsg.type === 'video'
    const isQuotedSticker = message.quotedMsg && message.quotedMsg.type === 'sticker'
    const isQuotedAudio = message.quotedMsg && message.quotedMsg.type === 'audio'
    const isQuotedVoice = message.quotedMsg && message.quotedMsg.type === 'ptt'
    const isImage = message.type === 'image'
    const isVideo = message.type === 'video'
    const isAudio = message.type === 'audio'
    const isVoice = message.type === 'ptt'
    const prefix = ','


    let sammlung = {
        // CLIENT
        'client': bocchi,
        'bocchi': bocchi,
        'eng': eng,
        'botNumber': botNumber,
        'sleep': sleep,
        // MESSAGE
        'message': message,
        'type': message.type,
        'id': message.id,
        'from': message.from,
        't': message.t, // timestamp
        'isGroupMsg': message.isGroupMsg,
        'chat': message.chat,
        'caption': message.caption, // Wenn bild geschickt wird ist das der Text
        'isMedia': message.isMedia,
        'mimetype': message.mimetype, // mp3, mp4, image, audio, video kp
        'quotedMsg': message.quotedMsg,
        'quotedMsgObj': message.quotedMsgObj,
        'mentionedJidList': message.mentionedJidList,
        'behinderterNameFürJustin': message.sender.id,
        'groupAdmins': groupAdmins,
        'isGroupAdmins': message.isGroupMsg ? groupAdmins.includes(message.sender.id) : false,
        'isBotGroupAdmins': message.isGroupMsg ? groupAdmins.includes(botNumber) : false,
        'groupId': message.isGroupMsg ? message.chat.groupMetadata.id : '',
        'args': args,
        'q': q,
        'ar': ar,
        'fs': fs,
        'importFresh': importFresh,
        // SENDER
        'senderid': message.sender.id,
        'sender': { // { für mehrere Objekte }
            'id': message.sender.id,
            'username': message.sender.isBusiness ? message.sender.verifiedName : message.sender.pushname // alles.sender.username
        },
        'username': message.sender.isBusiness ? message.sender.verifiedName : message.sender.pushname, // alles.username
        // DATENBANK
        'db': db,
        'waehrung': waehrung,
        'sessionId': sessionId,
        'pickRandom': pickRandom,
        'config': config,
        'daily': daily,
        'ms': ms,
        'isMe': isMe,
        'dateNowDE': dateNowDE,
        'timeDE': timeDE,
        'time': time,
        'toMs': toMs,
        'helper': helper,
        'level': level,
        'errorImg': errorImg,
        'premium': premium,
        'nsfw': nsfw,
        'weeaboo': weeaboo,
        'downloader': downloader,
        'fun': fun,
        'misc': misc,
        'meme': meme,
        'nandostatus': nandostatus,
        'neko': neko,
        'moment': moment,
        'AdsGroupID': AdsGroupID,
        'RegGroupID': RegGroupID,
        'DevGroupID': DevGroupID,
        'ErrGroupID': ErrGroupID,
        'AdsGrp': AdsGrp,
        'ErrGrp': ErrGrp,
        'DevGrp': DevGrp,
        'RegGrp': RegGrp,
        'blockNumber': blockNumber,
        'groupLimit': groupLimit,
        'memberLimit': memberLimit,
        'url': url,
        'name': message.chat.name,
        'formattedTitle': message.chat.formattedTitle,
        'cd': cd,
        'isQuotedImage': isQuotedImage,
        'isQuotedVideo': isQuotedVideo,
        'isQuotedSticker': isQuotedSticker,
        'isQuotedAudio': isQuotedAudio,
        'isQuotedVoice': isQuotedVoice,
        'isImage':isImage,
        'isVideo': isVideo,
        'isAudio': isAudio,
        'isVoice': isVoice,
        'prefix': prefix

        // "isGroupOwner": isGroupOwner,
        //usw halt..
        // hier einfach ALLES eintragen was du brauchst^^
    }

    return sammlung
}

module.exports = {
    getAlles
}