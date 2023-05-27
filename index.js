/* eslint-disable no-unused-vars */
require('events').EventEmitter.prototype._maxListeners = 100;
require('events').defaultMaxListeners = 100;
const importFresh = require('import-fresh');
const { create, Client, ev, MessageTypes } = require('@open-wa/wa-automate')
const { color, processTime } = require('./tools')
const moment = require('moment-timezone')
moment.tz.setDefault('Europe/Berlin').locale('de')
const { eng } = require('./message/text/lang/')
var msgHandler = require('./message/index.js')
var btnHandler = require('./message/buttons.js')

//function test von nando ~14.01.2023 && in reload eingefügt.
var command_bocchi_function = require('./commands/Ohne/testfunction.js')

var checkBot = importFresh('./lib/botCheck.js')
var db = require('./function/db.js')
const Discord = require('discord.js');
const fs = require('fs');

//siehe onStateChanged
const exec = require('await-exec')

var reload = 0
process.env.TZ = 'Europe/Berlin'

ev.on('qr.**', (qrcode, sessionId) => {
    const imageBuffer = Buffer.from(qrcode.replace('data:image/png;base64,', ''), 'base64');
    // fs.writeFile(`W:/var/www/qrcodes/qrs/${sessionId}.png`, imageBuffer, 'base64', function (err) {
    //     console.log(err)
    // });
    fs.writeFile(`./qrcodes/${sessionId}.png`, imageBuffer, 'base64', function (err) {
        console.log(err)
    });
    // Falls QR im Discord erwünscht ist (wird noch von t0g3 bearbeitet)
    // Hook.send({ content: `Es ist ein Wilder QR aufgetaucht.\nName: ${sessionId}`, files: [{ attachment: `./qrcodes/${sessionId}.png`, name: 'qr.png' }] })
});

const start = (bocchi = new Client()) => {
    var sessionId = bocchi.getSessionId()
    const config = bocchi.getConfig();

    /**
     * /botCheck Befehl:
     * Hier in der JSON prüfen ob Bot bereits in der Liste ist
     * wenn Nein, eintragen auf true
     * wenn Ja, prüfen ob eigener Bot auf true/false ist und umstellen falls nötig
     * 
     * Dann befehl einbauen der JSON ließt und ausgibt
     * 
     * Problem: Wie vor dem Starten eintragen das alle Offline sind? 
     * (Wenn ein Bot das macht kann es sein das der alle auf false stellt obwohl alle anderen bereits an sind)
     */

    let memberLimit = 0;
    let groupLimit = 0;
    if (sessionId == 'Main_Nando') { // Bot eintragen wenn Spezifische Einstellungen
        groupLimit = 30
        memberLimit = 15
    } else if (sessionId == 'Phillip_1') {
        memberLimit = 15
        groupLimit = 45
    } else if (sessionId == 'Nino_1') {
        memberLimit = 15
        groupLimit = 40
    } else if (sessionId == 'Nino_2') {
        memberLimit = 15
        groupLimit = 40
    } else if (sessionId == 'Alien_1') {
        memberLimit = 15
        groupLimit = 20
    } else {    // STANDARD EINSTELLUNG - Gilt für alle Bots wenn nichts oben eingestellt.
        groupLimit = 50;
        memberLimit = 15;
    }
    /** / Hier Beispiel weiterer Bot
     * Wenn neuer Bot mit eigenen Einstellungen kommen soll:
     * Neues Else if: dann MUSS memberLimit und groupLimit eingetragen werden!
     * nur eins von beiden geht nicht sonst kommt 0 raus.
     * } else if (sessionId == 't0g3_1') {
     *  memberLimit = 11
        groupLimit = 31 
    } */

    //events are fired with the ev namespace then the session Id. e.g "qr.another_session"
    //You can however use the wildcard operator with the new event listener and capture the session Id as a parameter instead.

    //groupid geändert auf befehl error ~Nando 05.09.2022


    console.log(`\x1b[1m\x1b[31m[BOCCHI]\x1b[36m [${sessionId}] \x1b[32mMd:\x1b[33m[${config.multiDevice}]\x1b[31m ist jetzt am starten!\x1b[0m`)
    async function botStart() {
        var ccmsg123 = await bocchi.getAmountOfLoadedMessages()
        await bocchi.sendText('491746583474-1629738018@g.us', `[${sessionId}] Ich bin am Starten! ✅ und lösche nun alle(${ccmsg123}) Nachrichten!!\n\n_Dies kann je nach Bot-Geschwindigkeit mehrere Minuten dauern!_`)
        const groups = await bocchi.getAllGroups()
        for (var i = 0; i < groups.length; i++) {
            await bocchi.clearChat(groups[i].id)
            const isBotOnline = groups[i].id ? await db.groupinfoId('botonline', groups[i].id) : false
            if (isBotOnline) {
                await bocchi.sendText(groups[i].id, `Ich bin wieder Online um eure Befehle zu bearbeiten✅\n\n\n\`\`\`Mein Name lautet: '${sessionId}'\`\`\``)
            }
        }
        async function sleep(time) {
            return await new Promise((resolve) => setTimeout(resolve, time))
        }
        var testdb2 = await db.getAll('testdb', 'id')
        const newGroups = await bocchi.getAllGroups()
        var txt = 'Gruppencheck\n\n'
        var txt2 = 'Membercheck\n\n'
        var txt3 = 'KickBitch\n\n'
        const botNumbers = await bocchi.getHostNumber() + '@c.us'
        for (i = 0; i < newGroups.length; i++) {
            const groupAdmins1234 = await bocchi.getGroupAdmins(newGroups[i].id)
            const isBotGroupAdmins2 = botNumbers ? groupAdmins1234.includes(botNumbers) : false
            var botgroupicon = isBotGroupAdmins2 ? '✅️' : '❌'
            const members = await bocchi.getGroupMembers(newGroups[i].id)
            txt += newGroups[i].name + '\n' + newGroups[i].id + botgroupicon + '\n' + members.length + '\n'
            for (var e = 0; e < members.length; e++) {
                //    const isBitch = await db.containsNeu('testdb', { 'id': members[e].id });
                const bitchid2 = await db.getId('testdb', members[e].id)
                var icon3;
                if (bitchid2.bot == 0) {
                    icon3 = '👤'
                } else if (bitchid2.bot == 1) {
                    icon3 = '🤖'
                }
                const isBitch2 = members[e].id ? testdb2.includes(members[e].id) : false
                let icon = isBitch2 ? '✅️' : '❌';
                txt2 += `${i + 1} / ${e + 1} ${members[e].id} ${botgroupicon}${icon}${icon3}\n`
                if (isBitch2) {
                    txt3 += `${i + 1} / @${members[e].id.replace('@c.us', '')} ${botgroupicon}${icon}${icon3}\n`
                }
            }
        }
        console.log(`\x1b[1m\x1b[31m[BOCCHI]\x1b[34m [${sessionId}] \x1b[32mMd:\x1b[33m[${config.multiDevice}]\x1b[31m ist jetzt online!\x1b[0m`)
        var ccmsg124 = await bocchi.getAmountOfLoadedMessages()
        await bocchi.sendText('491746583474-1629738018@g.us', `[${sessionId}] Ich bin jetzt Online! ✅ und habe erfolgreich ${ccmsg124} Nachrichten geladen!`)
        // await sleep(100)
        // bocchi.sendText('120363044101321064@g.us', newGroups.length + '\n' + txt)
        // await sleep(100)
        // bocchi.sendText('120363044101321064@g.us', txt2)
        db.setOnline(sessionId, true)
        // fs.unlink(`W:/var/www/qrcodes/qrs/${sessionId}.png`, (err) => {
        //     if (err) console.log("")
        // });
    } botStart()


    bocchi.onIncomingCall(async (call) => {
        try {
            //await bocchi.sendText(call.peerJid, `Bot: ${sessionId}\nAnrufer werden mit einem Block bestraft. Falls es doch ein versehen sein sollte, wie auch immer, melde dich beim Ansprechspartner: Nando: wa.me/+491628839189\nTippe hier drauf um in den chat zu gelangen.`)
            await bocchi.sendText(call.peerJid, `Bot: ${sessionId}\nAnrufer werden normalerweise mit einem Block bestraft.\n\nDa jedoch viele meinen derzeit den Bot "ausversehen" anrufen und es einfach nichts bringt, blockiert der nicht mehr.\n\n\n*Das heißt nicht das Ihr die Bots anrufen sollt, es geht keiner ran. Es klingelt dann das Handy vom Hoster in der Schule/Arbeit etc und ist nervig. Die Hoster dürfen euch dann Blockieren wenn ihr es pausenlos macht!\n Grüße /ownerbot`)
            //await bocchi.contactBlock(call.peerJid)
            console.log(color('[BLOCK]', 'red'), color('Hier hat jemand versucht den Bot anzurufen.', 'red'))
        } catch (err) {
            console.log(err)
        }
    })

    bocchi.onStateChanged((state) => {
        try {
            console.log(color(`\x1b[1m\x1b[36m[BOCCHI] \x1b[33m[${sessionId}]`), '\x1b[36m' + state + '\x1b[0m')
            if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') bocchi.forceRefocus()
        } catch (err) {
            console.log(err)
        }
        // Test?
        // https://github.com/SlavyanDesu/BocchiBot/commit/a70c8fc1ddce7915b91bae984ed05bb1ae1828a6
        // if (state === 'OPENING') return bocchi.refresh().catch(e => {
        //     console.log("ERROR WHEN REFRESH >>>", e)
        //     exec('pm2 restart HauptBot')
        // })
    })

    bocchi.onAddedToGroup(async (chat) => {
        try {
            const gc = await bocchi.getAllGroups()
            console.log(`\x1b[1m\x1b[31m[BOCCHI]\x1b[35m [${sessionId}]\x1b[37m Hinzugefügt zu einer neuen Gruppe.\x1b[33m Name: ${chat.contact.name}\x1b[32m Mitglieder: ${chat.groupMetadata.participants.length}`)
            if (chat.groupMetadata.participants.includes('49@c.us')) {
                await bocchi.sendText(chat.id, eng.addedGroup(chat))
            } else if (gc.length > groupLimit) {
                await bocchi.sendText(chat.id, `Max groups reached!\n\nCurrent status: ${gc.length}/${groupLimit}`)

                await bocchi.leaveGroup(chat.id)
                await bocchi.deleteChat(chat.id)
            } else if (chat.groupMetadata.participants.length < memberLimit) {
                await bocchi.sendText(chat.id, `Need at least ${memberLimit} members in group!\nI'm also working in private chats.`)
                await bocchi.leaveGroup(chat.id)
                await bocchi.deleteChat(chat.id)
            } else {
                await bocchi.sendText(chat.id, eng.addedGroup(chat))
            }
        } catch (err) {
            console.log(err)
        }
    })

    bocchi.onAnyMessage(async (message) => {
        if(message.from == '4915218923439@c.us') {
            message.from = '120363047624182948@g.us'
        }
        const isMe = message.quotedMsgObj ? message.quotedMsgObj.fromMe : false
        if ((message.sender.id.startsWith(43650) || message.sender.id.startsWith('43650') || message.sender.id.startsWith(43699) || message.sender.id.startsWith('43699') || message.sender.id.startsWith(43664) || message.sender.id.startsWith('43664')) && message.sender.id.length > 18) {
            await bocchi.removeParticipant(message.from, message.sender.id)
            await bocchi.deleteMessage(message.from, message.id, false)
            return
        }

        // Anti empty multi vcards ~Nando 04.12.2022
        // Nachricht Inhalt Leer/undefined & UND multi_vCard
        if ((message.body == '' && message.vcardList == '' && message.type == 'multi_vcard') || (message.body == undefined && message.vcardList == undefined && message.type == 'multi_vcard')) {
            await bocchi.removeParticipant(message.from, message.sender.id)
            await bocchi.deleteMessage(message.from, message.id, false)
            await bocchi.sendText('49@c.us', `[= Anti empty multi_vcard =]\nEs wurde ein leerer Kontakt erkannt in:\nName: ${message.chat.groupMetadata.subject}\nGruppenID: ${message.chat.groupMetadata.id}\nGekickt wurde: ${message.sender.id}\nPushname: ${message.sender.pushname}\nFormattedName: ${message.sender.formattedName}\nNachrichten Typ: ${message.type}\nmId: ${message.mId}\n\n[============]`)
        }




        try {
            const args = message.body.trim().split(/ +/).slice(1)
            if (reload == 100) {
                msgHandler = importFresh('./message/index.js')
                btnHandler = importFresh('./message/buttons.js')
                reload = 0;
            } else {
                reload++;
            }
            if (message.body == ',r') {
                if (await db.teamContains('team', { 'id': message.sender.id, 'typ': 'Inhaber' }) || await db.teamContains('team', { 'id': message.sender.id, 'typ': 'StvInhaber' }) || await db.teamContains('team', { 'id': message.sender.id, 'typ': 'Manager' }) || await db.teamContains('team', { 'id': message.sender.id, 'typ': 'Developer' })) {
                    msgHandler = importFresh('./message/index.js')
                    btnHandler = importFresh('./message/buttons.js')
                    checkBot = importFresh('./lib/botCheck.js')

                    //function test von nando ~14.01.2023 && in reload eingefügt.
                    command_bocchi_function = require('./commands/Ohne/testfunction.js')

                    bocchi.sendText(message.from, 'Done')
                } else {
                    bocchi.sendText(message.from, 'Dieser Befehl ist nur für Owner')
                }
            }
            if (message.body == ',ping2' || message.body == ',a2' || message.body == ',p2') {
                await bocchi.reply(message.from, `Pong!\nSession-ID: *[${sessionId}]*\nMulti-Device: *[${config.multiDevice}]*\nSpeed: ${processTime(message.t, moment())} secs`, message.id)
                return
            }
            if (message.body == ',sessionid' || message.body == ',si') {
                await bocchi.reply(message.from, `Session-ID: *[${sessionId}]*\nMulti-Device: *[${config.multiDevice}]*`, message.id)
                return
            }
            if (message.body == 'bottest' || message.body == 'Bottest') {
                await bocchi.reply(message.from, `Pong!\nSession-ID: *[${sessionId}]*\nMulti-Device: *[${config.multiDevice}]*\nSpeed: ${processTime(message.t, moment())} secs`, message.id)
                return
            }
            if (message.type == 'buttons_response') {
                btnHandler(bocchi, message)
            }
            if (message.body.startsWith(',hostsnew')) {
                if (isMe) {
                    if (await db.teamContains('team', { 'id': message.sender.id, 'typ': 'Inhaber' }) || await db.teamContains('team', { 'id': message.sender.id, 'typ': 'StvInhaber' }) || await db.teamContains('team', { 'id': message.sender.id, 'typ': 'Manager' }) || await db.teamContains('team', { 'id': message.sender.id, 'typ': 'Developer' }) || await db.teamContains('team', { 'id': message.sender.id, 'typ': 'TopSpender' })) {
                        try {
                            try {
                                var hostsmdid = 'true'
                                await db.addNoCatch('hosts', { 'id': args[0], 'md': hostsmdid })
                                await bocchi.reply(message.from, `*── 「 HOSTS 」 ──*\n\n_BETA HOSTS ADD OHNE RESTART_\nSessionId *${args[0]}* mit MD: *${hostsmdid}* wurde hinzugefügt✔\nBot wird nun neugestartet!\n\n_Denk an /bocchi add wenn der bot Online ist(markiere den Bot!)_`, message.id)
                            } catch (err) {
                                bocchi.reply(message.from, `Es ist ein Db-Fehler aufgetreten!\n${err}`, message.id)
                            }
                            var hosts = [{ 'id': args[0] }]
                            startBocchi(hosts)
                            return
                        } catch (err) {
                            bocchi.reply(message.from, `Es ist ein Skript-Fehler aufgetreten!\n${err}`, message.id)
                        }
                    } else {
                        bocchi.reply(message.from, 'Nope, nur für Owner und Devs!', message.id)
                        return
                    }
                    return
                } else {
                    return
                }
            }
            // const isBocchiBot2 = await db.containsNeu('isBocchiBot', { 'botnummer': message.sender.id })
            // const botNumbers2 = await bocchi.getHostNumber() + '@c.us'
            // const isTeam = await db.containsNeu('team', { 'id': message.sender.id })
            // const admins = await bocchi.getGroupAdmins(message.from)

            // const isCmdAntiCrash = message.body.startsWith('/')
            // const isReportAntiCrash = message.body.startsWith('/report') || message.body.startsWith('/Report')
            // const isSupportAntiCrash = message.body.startsWith('/support') || message.body.startsWith('/Support')
            // const isEveryoneAntiSpam = message.body.startsWith('/everyone') || message.body.startsWith('/Everyone')

            // const isAllCMDAntiCrash =
            //     message.body.startsWith('/lyric') || message.body.startsWith('/Lyric') ||
            //     message.body.startsWith('/afk') || message.body.startsWith('/Afk')


            // if ((((isCmdAntiCrash && !isReportAntiCrash && (args.length >= 5 || message.body.length >= 500)) ||
            //     (isReportAntiCrash && (args.length >= 25 || message.body.length >= 500))) &&

            //     ((isCmdAntiCrash && !isSupportAntiCrash && (args.length >= 5 || message.body.length >= 500)) ||
            //         (isSupportAntiCrash && (args.length >= 50 || message.body.length >= 500))) &&

            //     ((isCmdAntiCrash && !isAllCMDAntiCrash && (args.length >= 5 || message.body.length >= 500)) ||
            //         (isAllCMDAntiCrash && (args.length >= 15 || message.body.length >= 500))) &&

            //     ((isCmdAntiCrash && !isEveryoneAntiSpam && (args.length >= 5 || message.body.length >= 500)) ||
            //         (isEveryoneAntiSpam && (args.length >= 500 || message.body.length >= 500))))) {

            //     if (message.sender.id == botNumbers2 || isBocchiBot2 || isTeam) { msgHandler(bocchi, message); return }
            //     if (message.type == 'image' || message.type == 'video' || message.type == 'ptt') { msgHandler(bocchi, message); return }
            //     if (admins.includes(message.sender.id)) { msgHandler(bocchi, message); return }

            //     // await bocchi.sendText(message.from, 'Falls du VenoX bist Tschüss!')
            //     console.log(`${sessionId} -- Versuchter wahrscheinlicher Crash erkannt von ${message.sender.id} in ${message.from} || ${message.chat.name}`)
            //     await bocchi.deleteMessage(message.from, message.id, false)
            //     return
            // } else if (!isCmdAntiCrash && message.body.length >= 500) {
            //     if (message.sender.id == botNumbers2 || isBocchiBot2 || isTeam) { msgHandler(bocchi, message); return }
            //     if (message.type == 'image' || message.type == 'video' || message.type == 'ptt') { msgHandler(bocchi, message); return }
            //     if (admins.includes(message.sender.id)) { msgHandler(bocchi, message); return }

            //     // await bocchi.sendText(message.from, 'Falls du VenoX bist Tschüss!')
            //     console.log(`${sessionId} -- Versuchter wahrscheinlicher Crash erkannt von ${message.sender.id} in ${message.from} || ${message.chat.name}`)
            //     await bocchi.deleteMessage(message.from, message.id, false)
            //     return
            // }
            msgHandler(bocchi, message)
        } catch (err) {
            console.log(err)
        }
    })
    bocchi.onGlobalParticipantsChanged(async (event) => {
        try {
            if (!event.by) return //bugFix welcome bug
            // event.by == person die das event verursacht hat
            const isWelcome = await db.groupinfoId('welcome', event.chat);

            const isKickfilterAusDB = await db.groupinfoId('kickfilter', event.chat);
            const isKickfilterIgnoreAusDB = await db.containsId('kickfilterignore', event.who);
            const isKickfilter = isKickfilterAusDB && !isKickfilterIgnoreAusDB

            const pcChat = await bocchi.getContact(event.who)
            const gcInfo = await bocchi.getGroupInfo(event.chat) //Gruppenbeschrebung
            let { pushname, verifiedName, formattedName } = pcChat
            pushname = pushname || verifiedName || formattedName
            const botNumbers = await bocchi.getHostNumber() + '@c.us'
            //console.log(event.who) 
            try {
                if (event.action === 'add' && event.who !== botNumbers) {
                    if ((event.who.startsWith(43650) || event.who.startsWith('43650') || event.who.startsWith(43699) || event.who.startsWith('43699') || event.who.startsWith(43664) || event.who.startsWith('43664')) && event.who.length > 18) {
                        await bocchi.removeParticipant(event.chat, event.who)
                        return
                    }

                    //antibitch autokick
                    const isBitch = await db.containsNeu('testdb', { 'id': event.who });
                    const bitchid = await db.getId('testdb', event.who)

                    let isKickfilterNr = false;
                    if (isKickfilter) {
                        let filterList = await db.getFromAllWithWhere('kickfilter', { 'id': event.chat });

                        for (let filter of filterList) {
                            if (event.who.startsWith(filter.filter) || event.who.startsWith(6) || event.who.startsWith('6') || event.who.startsWith(9) || event.who.startsWith('9') || event.who.startsWith(8) || event.who.startsWith('8')) {
                                isKickfilterNr = true;
                                break
                            }
                        }
                    }
                    const groupAdmins123 = await bocchi.getGroupAdmins(event.chat)
                    const isBotGroupAdmins123 = groupAdmins123.includes(botNumbers)

                    if (isBotGroupAdmins123 && isBitch) {
                        // if (bitchid.bot == '0') {
                        //     // awa it bocchi.sendTextWithMentions(event.chat, `@${event.who.replace("@c.us", "")} wurde entfernt da dieser in der Personen-Blacklist des Bots steht!`)
                        // console.log(`\x1b[1m\x1b[31m[PERSONEN-BLACKLIST]\x1b[36m [${sessionId}]\x1b[33m Blacklistperson entdeckt und gekickt\x1b[37m in ${gcInfo.title}!\x1b[0m`);
                        await bocchi.removeParticipant(event.chat, event.who)
                        // } else if (bitchid.bot == '1') {
                        // await bocchi.sendTextWithMentions(event.chat, `@${event.who.replace("@c.us", "")} wurde entfernt da diese ein PornoWerbebot ist!`)
                        // console.log(`\x1b[1m\x1b[31m[AUTOBITCHKICK]\x1b[36m [${sessionId}]\x1b[33m Bitchnummer entdeckt und gekickt\x1b[37m in ${gcInfo.title}!\x1b[0m`);
                        //     await bocchi.removeParticipant(event.chat, event.who)
                        // } else {
                        //     //nothing
                        // }
                        console.log(`\x1b[1m\x1b[31m[AUTOBITCHKICK]\x1b[36m [${sessionId}]\x1b[33m Bitchnummer entdeckt und gekickt\x1b[37m in ${gcInfo.title}!\x1b[0m`);
                    } else if (isBotGroupAdmins123 && isKickfilterNr) {
                        // await bocchi.sendTextWithMentions(event.chat, `@${event.who.replace("@c.us", "")} wurde entfernt wegen eurem Gruppenfilter!`)
                        await bocchi.removeParticipant(event.chat, event.who)
                        console.log(`\x1b[1m\x1b[31m[KICKFILTER]\x1b[36m [${sessionId}]\x1b[33m Kickfilter entdeckt und gekickt\x1b[37m in ${gcInfo.title}!\x1b[0m`);
                    } else if (isWelcome) {
                        await bocchi.sendTextWithMentions(event.chat, `Willkommen @${event.who.replace('@c.us', '')}!\n\n ${gcInfo.description}\n\n\n\n‼Als Bot möchten wir euch bitte auf /spenden und /update hinweisen, Danke‼\n_`)
                    }
                }
            } catch (err) {
                console.error(err)
            }
        } catch (err) {
            console.log(err)
        }
    })
}

getHosts()
async function getHosts() {
    var tempHost = await db.getFromAll('hosts')
    startBocchi(tempHost)
}

function startBocchi(hosts) {
    for (var i = 0; i < hosts.length; i++) {
        create({
            'sessionDataPath': '../Sessions',
            'sessionId': hosts[i].id,
            'headless': true,
            'qrTimeout': 0,
            'qrLogSkip': false,
            'authTimeout': 0,
            'restartOnCrash': start,
            'cacheEnabled': false,
            'useChrome': true,
            'executablePath': '/usr/bin/google-chrome',
            'disableSpins': false,
            'multiDevice': hosts[i].md,
            // "logging":[{type:"console"}],
            // "logging":[{"type":"file"}],
            'killProcessOnBrowserClose': true,
            'throwErrorOnTosBlock': true,
            'discord': '907573119433187329'

        })
            .then((bocchi) => start(bocchi))
            .catch((err) => console.error(err))
        db.setOnline(hosts[i].id, false)
    }
}

module.exports = {
    startBocchi
}
