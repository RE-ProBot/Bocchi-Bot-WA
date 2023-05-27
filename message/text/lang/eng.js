/* eslint-disable quotes */
const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('config.json'))


exports.vampir = (senderid, q) => {
    return `@${senderid} saugt ${q} das 🩸Blut🩸 aus🦇`
}
exports.tritt = (senderid, q) => {
    return `@${senderid} tritt ${q}`
}
exports.hug = (senderid, q) => {
    return `@${senderid} umarmt ${q}🫂`
}
exports.fuck = (senderid, q) => {
    return `@${senderid} fickt ${q}🍆💦`
}
exports.snowball = (senderid, q) => {
    return `@${senderid} wirft  ${q} mit einem Schneeball ab⛄`
}
exports.kiss = (senderid, q) => {
    return `@${senderid} küsst  ${q}😘`
}
exports.nudes = (senderid, q) => {
    return `@${senderid} fragt  ${q} nach Nudes📷💦`
}
exports.trash = (senderid, q) => {
    return `@${senderid} steckt  ${q} in den Müll🚮`
}
exports.kfshalone = () => {
    return `Bitte markiere jemand!\nMehrere sind möglich!`
}
exports.qrtext = () => {
    return `
Hier nochmal im Detail wie es funktioniert:
1. Du solltest wissen die deine *SessionID* lautet
2. Makiere einen Bot und schreib ${prefix}resetqr *SessionID*
3. Makiere einen Bot und starte Ihn neu mit ${prefix}sh
4. Prüfe das der Bot online ist mit irgendeinem Befehl
5. Fordere deinen QR-Code an mit ${prefix}sendqr *SessionID*
6. Scanne deinen QR-Code ein.
6.1. Ein QR-Code hat eine Gültigkeit von 18 Sekunden. Sollte er ungültig sein, versuche es also in`
}

exports.setMoney = (userid, money) => {
    return `Die Person wa.me/${userid} hat nun das Währung: ${money}`
}

exports.spendentext = (registereduserstats) => {
    return `
    ╔══★〘 SPENDEN 〙★══╗


Danke das du dich Interessierst uns zu unterstützen.
Wir haben laufende kosten die wir aus eigener Tasche bezahlen müssen.
Dank euren Spenden helft Ihr uns dabei die Kosten für uns gering zu halten.
Wenn jeder 1,00 EUR spendet, können wir die Kosten über Monate decken.
Bei *${registereduserstats}* Nutzer * 1,00 EUR könnt ihr euch das selber ausrechnen!

Spenden könnt Ihr derzeit nur über paypal.me/VenoxInternational zusenden.
_Bitte wählt beim Senden "Familie oder Freunde" aus,_
_bei 1,00 EUR sind es 0,37 EUR Gebühren | Bei 5,00 EUR 0,47 EUR_
Wichtig dabei, als Verwendungszweck eure Rufnummer im Internationalen Format(+49123).
Sollte die Rufnummer falsch sein, werden wir euch per E-Mail Kontaktieren.
Für jede geleistete Spende ab 1,00EUR erhaltet ihr folgendes:
 - 1,00 EUR = 3 Tage
 - 5,00 EUR = 15 Tage
 - 10,00 EUR = 30 Tage
 - 25,00 EUR = 100 Tage
*Für die Richtig lieben von euch:*
 - 50,00 EUR = LIFETIME === 5000 Tage
Andere Beträge mit 1,00 EUR/3 Tage berechnung. (z. B. 2,00 EUR = 6 Tage)
_Lifetime bedeuted, solange das BocchiBot Projekt existiert_
_Rückerstattung nur innerhalb 24h mit ausführlichen Grund an ${prefix}ownerbot_
_Bei einer Rückerstattung werden 0,50 EUR abgezogen!_

    `
}

exports.menunewcmd = () => {
    return `
    Alle befehle in eigene dateien zur asynchronen bearbeitung von befehlen

//download
ytdl

4. *${prefix}pet*
Macht komische Sachen mit Justin
Abkürzung
Benutzung: *${prefix}pet

//misc


case prefix + 'testemail':
    const emailtest = await db.getNeu('team', { 'id': sender.id })
    console.log(sender.id + '   ' + emailtest.email)
    break

    
    case prefix + 'ghv':
        var kickcheck = await bocchi.getKickedGroups()
        console.log(sessionId + '------------------------------' + kickcheck)
        break

case prefix + 'addmeall':
    cmds.addmeall(alles, bocchi, eng)
    break


case prefix + 't0g3test':
    cmds.test(alles);
    break

//fun


    //gaming
4. *${prefix}pet*
Macht komische Sachen mit Justin
Abkürzung
Benutzung: *${prefix}pet



        `
}
exports.daily = (time) => {
    return `Sorry, Bitte warte ${time.days} Tag(e) ${time.hours} Stunde(n) ${time.minutes} Minute(n) ${time.seconds} Sekunde(n).\nNach dem Zeitlimit kannst du den Befehl wieder nutzen.`
}

exports.omuteChatOn = () => {
    return `✔Owner-Modus ist nun *aktiviert!✔*`
}

exports.omuteChatOff = () => {
    return `✔Owner-Modus ist nun *deaktiviert!✔*`
}

exports.omuteChatOnAlready = () => {
    return `❌Owner-Modus wurde *bereits* aktiviert!❌`
}

exports.muteChatOn = () => {
    return `✔Admin-Modus ist nun *aktiviert!✔*`
}

exports.muteChatOff = () => {
    return `✔Admin-Modus ist nun *deaktiviert!✔*`
}

exports.muteChatOnAlready = () => {
    return `❌Admin-Modus wurde *bereits* aktiviert!❌`
}

exports.welcomeOn = () => {
    return `✔Welcome ist nun *aktiviert!✔*`
}

exports.welcomeOff = () => {
    return `✔Welcome ist nun *deaktiviert!✔*`
}

exports.welcomeOnAlready = () => {
    return `❌Welcome wurde *bereits* aktiviert!❌`
}

exports.autoStikOn = () => {
    return `✔Auto-Sticker ist nun *aktiviert!✔*`
}

exports.autoStikOff = () => {
    return `✔Auto-Sticker ist nun *deaktiviert!✔*`
}

exports.autoStikOnAlready = () => {
    return `❌Auto-Sticker ist *bereits* aktiv!❌`
}

exports.everyoneOn = () => {
    return `✔${prefix}Everyone ist nun *Verboten!✔*`
}

exports.everyoneOff = () => {
    return `✔${prefix}Everyone ist nun *Erlaubt!✔*`
}

exports.EveryoneOnAlready = () => {
    return `❌${prefix}Everyone ist *Verboten!❌*`
}

exports.notNsfw = () => {
    return `❌NSFW ist *ausgeschaltet!❌*\n_Zum Aktivieren /nsfw enable (siehe /menu 7)_`
}

exports.nsfwOn = () => {
    return `✔NSFW ist nun *aktiviert!✔*`
}

exports.nsfwOff = () => {
    return `✔NSFW ist nun *deaktiviert!✔*`
}

exports.nsfwAlready = () => {
    return `❌NSFW wurde *bereits* eingeschaltet.❌`
}

exports.notKickfilter = () => {
    return `❌Kickfilter ist *ausgeschaltet!❌*`
}

exports.KickfilterOn = () => {
    return `✔Kickfilter ist nun *aktiviert!✔*`
}

exports.KickfilterOff = () => {
    return `✔Kickfilter ist nun *deaktiviert!✔*`
}

exports.KickfilterAlready = () => {
    return `❌Kickfilter wurde *bereits* eingeschaltet.❌`
}

exports.notAntibeleidigung = () => {
    return `❌Antibeleidigung ist *ausgeschaltet!❌*`
}

exports.AntibeleidigungOn = () => {
    return `✔Antibeleidigung ist nun *aktiviert!✔*`
}

exports.AntibeleidigungOff = () => {
    return `✔Antibeleidigung ist nun *deaktiviert!✔*`
}

exports.AntibeleidigungAlready = () => {
    return `❌Antibeleidigung wurde *bereits* eingeschaltet.❌`
}

exports.notGaming = () => {
    return `❌Gaming ist ausgeschaltet!❌\n_Zum Aktivieren /gaming enable (siehe menu 7)_`
}

exports.GamingOn = () => {
    return `✔Gaming ist nun *aktiviert!✔*`
}

exports.GamingOff = () => {
    return `✔Gaming ist nun *deaktiviert!✔*`
}

exports.GamingAlready = () => {
    return `❌Gaming wurde *bereits* eingeschaltet.❌`
}

exports.levelingOn = () => {
    return `✔Leveln ist nun *aktiviert!✔*`
}

exports.levelingOff = () => {
    return `✔Leveln ist nun *deaktiviert!✔*`
}

exports.levelingOnAlready = () => {
    return `❌Leveln wurde *bereits* aktiviert.❌`
}

exports.levelingOffAlready = () => {
    return `❌Leveln wurde *bereits* deaktiviert.❌`
}

exports.levelingNotOn = () => {
    return `❌Leveln ist *deaktiviert!❌*\n_Zum Aktivieren /leveling enable (siehe /menu 7)_`
}

exports.detectorOnLINK = () => {
    return `✔ANTI-LINK ist nun *aktiviert!✔*`
}

exports.detectorOffLINK = () => {
    return `✔ANTI-LINK ist nun *deaktiviert!✔*`
}


exports.afkOn = (pushname, reason) => {
    return `AFK ist nun *aktiviert*!\n\n➸ *Username*: ${pushname}\n➸ *Grund*: ${reason}`
}

exports.afkOnAlready = () => {
    return `❌AFK wurde *bereits* Aktiviert❌`
}

exports.afkMentioned = (getId, getReason, getTime) => {
    return `*「 AFK MODUS 」*\n\nPshhhh, die Person ${getId} ist AFK, störe Sie bitte nicht!\n➸ *Grund*: ${getReason}\n➸ *Zeit*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* ist nicht mehr AFK!`
}

exports.GroupCreatorOnly = () => {
    return `Nur der Gruppenersteller kann diesen Befehl ausführen!`
}

exports.adminOnly = () => {
    return `Dieser Command kann nur von Gruppenadmins ausgeführt werden!`
}

exports.ownerOnly = () => {
    return `Um diesen Command auszuführen musst du mindestens den Rang "Developer/in oder Stv. Inhaber/in" besitzen!`
}

exports.leitungOnly = () => {
    return `Um diesen Command auszuführen musst du mindestens den Rang "Manager" besitzen!`
}

exports.modOnly = () => {
    return `Um diesen Command auszuführen musst du mindestens den Rang "Moderator/in" besitzen!`
}

exports.teamOnly = () => {
    return `Um diesen Command auszuführen musst du mindestens den Rang "Supporter/in" besitzen!`
}

exports.HostOnly = () => {
    return `Um diesen Command auszuführen musst du mindestens den Rang "Hoster/in" besitzen!`
}


exports.wait = () => {
    return `Bitte warte einen moment!`
}

exports.ok = () => {
    return `Ok Boss`
}

exports.doneOwner = () => {
    return `Erledigt, Owner~`
}

exports.emptyMess = () => {
    return `Bitte gib eine Nachricht an!`
}

exports.wrongFormat = () => {
    return `Falsche Verwendung! Bitte Informiere dich in *${prefix}menu*.`
}

exports.cmdNotFound = (cmd) => {
    return `Befehl *${cmd}* nicht gefunden!\n\n\nFalls du Hilfe brauchst schreibe dem Support mit /support DeineFrageHier.`
    // return `Befehl * ${ cmd }* nicht gefunden!\n\n\nFalls du Hilfe brauchst: \nhttps://discord.com/invite/PSYVXTckkf`
}
exports.addedGroup = (chat) => {
    return `Danke für die Einladung *${chat.contact.name}!*`
}

exports.nameChanged = (q) => {
    return `Erledigt Owner, \nName *geändert* zu:\n*${q}*`
}
exports.nhFalse = () => {
    return `Falscher Code!`
}

exports.listBlock = (blockNumber) => {
    return `------[ BLOCKIERTE USER ]------\n\nGeblockte User: *${blockNumber.length}* User(s)\n`
}

exports.blocked = () => {
    return `Anrufer werden mit einen *Ban* bestraft. Falls es doch ein versehen sein sollte, wie auch immer, melde dich beim Ansprechspartner: Justin_Hurensohn: https://discord.gg/invite/PSYVXTckkf \nTippe hier drauf um in den Chat zu gelangen.`
}

exports.notPremium = () => {
    return `Sorry! Dieser Command kann nur von Premium Usern benutzt werden.\n\nFür weitere Information zum Erhalten von Premium ${prefix}spenden`
}

exports.notAdmin = () => {
    return `Der genannte User ist kein Admin!`
}

exports.adminAlready = () => {
    return `Der genannte User ist *bereits* ein Admin!`
}

exports.linkDetected = () => {
    return `*「 ANTI GRUPPEN LINK 」*\n\nDu hast einen Gruppenlink gesendet!\nDu musst uns leider verlassen....\nSchön dich gekannt zu haben.~`
}

exports.welcome = (event) => {
    return `Willkommen @${event.who.replace('@c.us', '')}!\n\nBitte stell dich wenn nötig vor und lies wenn vorhanden die Regeln!`
}

exports.botNotAdmin = () => {
    return `Mache den Bot zuerst Admin!`
}

exports.received = (pushname) => {
    return `Hallo ${pushname}!\nDanke für den Report.\nWir bearbeiten ihn so schnell wir können!`
}

exports.receiveds = (pushname, counts) => {
    return `Hallo ${pushname}!\nDeine ID: ${counts}\nDanke für deine Support Anfrage!\n\nDeine Antwort findest du hier:\nhttps://chat.whatsapp.com/Cb2h8QQKXuL1DxYmMu8sqa\n\nBitte trete auch der Funsupport Gruppe bei, es könnte sein, dass du deine Anfrage da findest:\nhttps://chat.whatsapp.com/GPvuYfiCYqs2t2IRQS0XKg\n\nBevor die Frage kommt, ob die Gruppen so umgestellt werden, dass jeder schreiben kann:\nNein, können sie nicht, da hier nur Antworten vom Support Bot reinkommen. \nAußerdem wird die FAQ 2 langsam .\nWir bitten euch diese zu verlassen und der FAQ 1 beizutreten.`
}

exports.videoLimit = () => {
    return `Das Video ist zu Groß.`
}


exports.ownerGruppen = async (a, b) => {
    const dataJson1 = await a.db.getFromAllWithWhere('team', { 'typ': 'Inhaber' })
    const dataJson2 = await a.db.getFromAllWithWhere('team', { 'typ': 'StvInhaber' })
    const dataJson3 = await a.db.getFromAllWithWhere('team', { 'typ': 'TopSpender' })
    const dataJson4 = await a.db.getFromAllWithWhere('team', { 'typ': 'Developer' })
    var txt = '        -----[ OWNERGRUPPEN ]----- \n\n'
    try {
        for (let i = 0; i < dataJson1.length; i++) {
            try {
                const gcInfo3 = await b.inviteInfo(dataJson1[i].oglink) //Gruppenbeschreibung
                try {
                    txt += '*_' + dataJson1[i].ogname + '_*' + '\n(' + gcInfo3.groupMetadata.size + ' Teilnehmer' + ')' + '\n' + dataJson1[i].oglink + '\n\n' // txt += '*' +  dataJson1[i].name + '*' + '\n' + '_' + dataJson1[i].ogname + '_' + '\n' + dataJson1[i].oglink + '\n\n'
                } catch (err) {
                    txt += '*_' + dataJson1[i].ogname + '_*' + '\n' + dataJson1[i].oglink + '\n\n'
                }
            } catch (err) {
                // txt += '_Og Nicht eingetragen von:_\n' + dataJson1[i].name + ' - ' + dataJson1[i].typ + '\n\n'
            }
        }
        for (let i = 0; i < dataJson2.length; i++) {
            try {
                const gcInfo3 = await b.inviteInfo(dataJson2[i].oglink) //Gruppenbeschreibung
                try {
                    txt += '*_' + dataJson2[i].ogname + '_*' + '\n(' + gcInfo3.groupMetadata.size + ' Teilnehmer' + ')' + '\n' + dataJson2[i].oglink + '\n\n' // txt += '*' +  dataJson1[i].name + '*' + '\n' + '_' + dataJson1[i].ogname + '_' + '\n' + dataJson1[i].oglink + '\n\n'
                } catch (err) {
                    txt += '*_' + dataJson2[i].ogname + '_*' + '\n' + dataJson2[i].oglink + '\n\n'
                }
            } catch (err) {
                // txt += '_Og Nicht eingetragen von:_\n' + dataJson2[i].name + ' - ' + dataJson2[i].typ + '\n\n'
            }
        }
        for (let i = 0; i < dataJson3.length; i++) {
            try {
                const gcInfo3 = await b.inviteInfo(dataJson3[i].oglink) //Gruppenbeschreibung
                try {
                    txt += '*_' + dataJson3[i].ogname + '_*' + '\n(' + gcInfo3.groupMetadata.size + ' Teilnehmer' + ')' + '\n' + dataJson3[i].oglink + '\n\n' // txt += '*' +  dataJson1[i].name + '*' + '\n' + '_' + dataJson1[i].ogname + '_' + '\n' + dataJson1[i].oglink + '\n\n'
                } catch (err) {
                    txt += '*_' + dataJson3[i].ogname + '_*' + '\n' + dataJson3[i].oglink + '\n\n'
                }
            } catch (err) {
                // txt += '_Og Nicht eingetragen von:_\n' + dataJson3[i].name + ' - ' + dataJson3[i].typ + '\n\n'
            }
        }
        for (let i = 0; i < dataJson4.length; i++) {
            try {
                const gcInfo3 = await b.inviteInfo(dataJson4[i].oglink) //Gruppenbeschreibung
                try {
                    txt += '*_' + dataJson4[i].ogname + '_*' + '\n(' + gcInfo3.groupMetadata.size + ' Teilnehmer' + ')' + '\n' + dataJson4[i].oglink + '\n\n' // txt += '*' +  dataJson1[i].name + '*' + '\n' + '_' + dataJson1[i].ogname + '_' + '\n' + dataJson1[i].oglink + '\n\n'
                } catch (err) {
                    txt += '*_' + dataJson4[i].ogname + '_*' + '\n' + dataJson4[i].oglink + '\n\n'
                }
            } catch (err) {
                // txt += '_Og Nicht eingetragen von:_\n' + dataJson4[i].name + ' - ' + dataJson4[i].typ + '\n\n'
            }
        }
        return txt
    } catch (err) {
        return err + '' + '\n\n\n' + txt
    }
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp, rang, commands) => {
    return `
    ── 「 BENUTZER INFO 」 ──

➸ Benutzername: ${username}
➸ Premium: ${premi}
➸ Banned: ${benet}
➸ Admin: ${adm}
➸ BotRang: ${rang}
➸ Commands: ${commands}

=============

── 「 FORTSCHRITT 」 ──

➸ Level: ${level}
➸ XP: ${xp} 
    `
}

exports.xp = (username, level, role, fetchXp1, xp) => {
    return `
*── 「LEVELSTAND」 ──*
➸ *Username*: ${username}
➸ *Level*: ${level}
➸ *XP*: ${xp} / ${fetchXp1}
➸ *Rang*: ${role}
    `
}

exports.reminderAlert = (messRemind, sender) => {
    return `
*── 「 REMINDER 」 ──*

⏰ @${sender.id.replace('@c.us', '')} ⏰
➸ *Nachricht*: ${messRemind}`
}

exports.reminderOn = (messRemind, parsedTime, sender) => {
    return `
*── 「 Erinnerung 」 ──*
    
Erinnerung eingerichtet!
➸ *Nachricht*: ${messRemind}
➸ *Dauer*: ${parsedTime.hours} Stunden ${parsedTime.minutes} Minuten ${parsedTime.seconds} Sekunden
➸ *Für*: @${sender.id.replace('@c.us', '')}
    `
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTRIERUNG 」*\n\nAccount gefunden!\n\n➸ *Name*: ${name}\n➸ *Alter*: ${age}\n➸ *ID*: ${userId}\n➸ *Zeitpunkt der Registrierung*: ${time}\n➸ *Seriennummer*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Account mit der Seriennummer: *${serial}* nicht gefunden!`
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 REGISTRIERUNG 」*\n\n‼${prefix}spenden und ${prefix}update abchecken‼\n\nDein Account wurde erstellt mit folgenden Daten:\n\n➸ *Name*: ${name}\n➸ *Alter*: ${age}\n➸ *ID*: ${userId}\n➸ *Zeitpunkt der Registrierung*: ${time}\n➸ *Seriennummer*: ${serial}\n\nINFO:\nBehalte deine *Seriennummer* für dich!\n\nÜberlege mal die *${prefix}regeln* zu lesen.\nMit ${prefix}unregister kannst du dich jederzeit austragen(beim ausführen wird nochmals um bestätigung gebeten)\nIst eine Löschung aller daten erwünscht, nutze bitte ${prefix}datadelete (beim ausführen wird nochmals um bestätigung gebeten)`
}

exports.notRegistered = () => {
    return `Du bist nicht registriert in unserer Datenbank \n\nBitte registriere dich bei mir im *Privatchat* mit:\n${prefix}register name / alter`
}

exports.registeredAlready = () => {
    return `Du hast dich *bereits* registriert.`
}

exports.groupOnly = () => {
    return `Dieser Command kann nur in Gruppen verwendet werden!`
}

exports.pcOnly = () => {
    return `Diesen Command kannst du nur im PrivatChat benutzen!`
}

exports.ageOld = () => {
    return `Du bist zu alt um diesen Bot zu nutzen..`
}

exports.ageYoung = () => {
    return `Du bist zu jung um diesen Bot zu nutzen..`
}

exports.gcMute = () => {
    return `*「 MUTED 」*\n\nNur Admins können nun schreiben.`
}

exports.gcUnmute = () => {
    return `*「 UNMUTED 」*\n\nAlle Mitglieder können nun schreiben.`
}

exports.ytPlay = (result) => {
    return `*「 PLAY 」*\n\n➸ *Titel*: ${result.title}\n➸ *Dauer*: ${result.duration}\n➸ *Link*: ${result.url}\n\nIch sende dir die Datei, Bitte warte einen moment...`
}

exports.gsm = (result) => {
    return `➸ *Handy Modell*: ${result.title}\n➸ *Spezifikation*: ${result.spec}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Titel*: ${title}\n➸ *Kanal*: ${channel}\n➸ *Länge*: ${duration}\n➸ *Aufrufe*: ${views}\n➸ *Link*: ${urlyt}`
}

exports.ytFound = (res) => {
    return `*Video Gefunden!*\n\n➸ *Titel*: ${res.title}\n➸ *Beschreibung*:\n${res.desc}\n➸ *Länge*: ${res.duration} Minuten\n\nDas Video wird gesendet, Bitte warte einen moment...`
}


exports.changelog = () => {
    return `
    *UPDATES des Bots BocchiBot*
Datum des Updates: 17.01.2023 17:00 Uhr

► Einführung von Spenden (${prefix}spenden)
 ➥ Umstieg auf Bullshit Server

*Neue Teamränge - Ratfuu auf Bocchi.*
⚔️❤️ Слава 𝒰.𝒮.𝒮.𝑅 ⚔️❤️
--------------------------
🤍💙 Слава 𝓥𝓮𝓷𝓸𝓧 🤍💙
`
}


//Insgesamt registrierte User: *${jumlahUser}*

// exports.menu = (jumlahUser, level, xp, role, pushname, premium, svresult) => {
//     return `
// [ *WILLKOMMEN, ${pushname}*]

// _*WICHTIGE INFORMATION*_

// \`\`\`Der Bot geht ab 12 Uhr am 20.04.2022 in den WartungsModus!!! Fragen/Ideen/Beschwerden an wa.me/+491628839166 \`\`\`

// ➸ *Level*: ${level}
// ➸ *XP*: ${xp} 
// ➸ *Rang*: ${role}
// ➸ *Premium*: ${premium}
// *========================*
// *========================*
// Kennt ihr schon unsere Werbegruppe[2]?
// https://chat.whatsapp.com/ES3LU6wK5UdGziyAeJYCFd
// *========================*

// *‼Absofort* könnt ihr *Spenden!* ${prefix}spenden
// *========================*

// Die folgenden Menüs sind vorhanden:

// *[1]* Downloader
// *[2]* Bot
// *[3]* Misc
// *[4]* Sticker
// *[5]* Weeaboo
// *[6]* Fun
// *[7]* Moderation
// *[8]* NSFW
// *[9]* Team
// *[10]* Leveling
// *[11]* Gaming
// *[12]* Premium
// *[13]* Credits
// *========================*
// `
// }
// ÜBERSETZEN BIS HIER FERTIG
// exports.menu = (jumlahUser, level, xp, role, pushname, premium, svresult) => {
//     return `
// [ *WILLKOMMEN, ${pushname}*]

// ➸ *Level*: ${level}
// ➸ *XP*: ${xp} 
// ➸ *Rang*: ${role}
// ➸ *Premium*: ${premium}

// 🎄Wir haben, so wie letztes Jahr auch schon, ein Adventskalender für euch "gebastelt" ^^ 
// Schaut dazu doch gerne jeden Tag einmal mit dem Befehl ,,${prefix}Adventskalender" nach, was ihr heute bekommt.🎄

// 📰Kennt ihr schon unsere Werbegruppe?
// https://chat.whatsapp.com/FuOCQ4YPnnK980VpzitIrp 📰

// 💰 Unterstützt uns doch gerne mit einer kleinen Spende^^ 
// → ${prefix}spenden
// Jede Spende wird zu 100% in den Bot investiert💰

// ❇Die folgenden Menüs sind vorhanden:

// [01] Downloader (derzeit leider deaktiviert)
// [02] Bot
// [03] Misc
// [04] Sticker
// [05] Weeaboo
// [06] Fun
// [07] Moderation
// [08] NSFW
// [09] Team (derzeit leider deaktiviert)
// [10] Leveling
// [11] Gaming
// [12] Premium
// [13] Credits

// 📝Schreibe ${prefix}menu 2 oder ${prefix}menu Bot um das zweite Menü zu öffnen.
// ${prefix}menu 3 für das Dritte und so weiter.`
// }

exports.menu = (jumlahUser, level, xp, role, pushname, premium) => {
    return `
[ *WILLKOMMEN, ${pushname}*]

➸ *Level*: ${level}
➸ *XP*: ${xp} 
➸ *Rang*: ${role}
➸ *Premium*: ${premium}

❇Die folgenden Menüs sind vorhanden:

[01] Downloader (derzeit leider deaktiviert)
[02] Bot
[03] Misc
[04] Sticker
[05] Weeaboo
[06] Fun
[07] Moderation
[08] NSFW
[09] Team (derzeit leider deaktiviert)
[10] Leveling
[11] Gaming
[12] Premium
[13] Credits

📝Schreibe ${prefix}menu 2 oder ${prefix}menu Bot um das zweite Menü zu öffnen.
${prefix}menu 3 für das Dritte und so weiter.`
}


exports.menuDownloader = () => {
    return `
-----[ DOWNLOADER ]-----


1. *${prefix}yt-dl*
Lade Youtube Videos in mp3 mit einer Länge von bis zu 10Min Herunter
_Shorts sowie Playlisten werden vorerst nicht unterstützt_
_Video download in bearbeitung_
Abkürzung: *yt*
Benutzung: *${prefix}yt-dl* Link


1. *${prefix}shazam*
Makiere eine Audio und finde raus Welche Musik das ist.
Abkürzung: *yt*
Benutzung: *${prefix}shazam*

_Index of [1]_
    `
}

exports.menuBot = () => {
    return `
-----[ BOT ]-----

0. *${prefix}support*
Stellt eine Frage an das Team.
Abkürzung: - 
Benutzung: *${prefix}support* Deine Frage
Beispiel: ${prefix}support Wie bekomme ich den Bot in meine Gruppe?

1. *${prefix}menu*
Zeigt alle Menüs an
Abkürzung: - *help* , *menü*
Benutzung: *${prefix}menu* index_number
Beispiel: ${prefix}menu 1, ${prefix}menu 2 ...

2 *${prefix}cmdcount*
Zeigt die Anzahl der Gesamt ausgeführten Befehlen an
Abkürzung: -
Benutzung: *${prefix}cmdcount*

3. *${prefix}ownerbot*
Sendet dir die Kontaktdaten meiner Besitzer.
Abkürzung: -
Benutzung: *${prefix}ownerbot*

4. *${prefix}rules*
Sollte man lesen. Regeln!
Abkürzung: *rule*, *regeln*
Benutzung: *${prefix}rules*

5. *${prefix}update*
Zeigt das letzte Update des Bots an.
Abkürzung: -
Benutzung: *${prefix}update*

6. *${prefix}ownergruppen*
Sendet die Gruppenlinks der Ownergruppen zu euch
Abkürzung: - *og*
Benutzung: *${prefix}ownergruppen*

7. *${prefix}admins*
Makiert alle Admins in der Gruppe.
Abkürzung: - *admin*
Benutzung: *${prefix}admins*

8. *${prefix}runtime*
Zeigt an wie lange der Bot Online ist.
Abkürzung: -
Benutzung: *${prefix}runtime*

9. *${prefix}ping*
Teste Die Verbindung vom Bot.
Abkürzung: *p* , *a* , *peng*
Benutzung: *${prefix}ping*

10. *${prefix}profile* //Defekt
Daten eines Users Abfragen
Abkürzung: 
Benutzung: *${prefix}profile*

~11. *${prefix}battery*
~Zeigt den Akkustand vom Bot an~
~Abkürzung:~
~Benutzung: *${prefix}battery*~
Technisch derzeit nicht umsetzbar, abgesehen davon ist der bot auch online wenn das handy aus ist

12. *${prefix}afk*
Setz dich in den AFK Modus. Sobald geschrieben wird ist AFK wieder aus.
Abkürzung: -
Benutzung: *${prefix}afk Grund*
Beispiel: ${prefix}afk Ich bin essen

13. *${prefix}tomp3*
Wandelt ein Video deiner Wahl in mp3 um(Audio)
Abkürzung: 
Benutzung: *${prefix}tomp3*

14. *${prefix}reminder*
Erinnerung. 
*s* - Sekunden
*m* - Minuten
*h* - Stunden
*d* - Tage
Abkürzung: -
Benutzung: *${prefix}reminder* 10s / Deine Nachricht


15. *${prefix}report*
Meldet einen Bug im System an die Owner.
Abkürzung: -
Benutzung: *${prefix}report* text

16. *${prefix}join*
Erstellt eine Anfrage an das Team zum hinzufügen eines Bots.
Abkürzung: -
Benutzung: *${prefix}join* Gruppenlink
Beispiel: *${prefix}join* https://chat.whatsapp.com/XXXXXXX

17. *${prefix}joinreq*
Erstellt eine Anfrage an das Team zum hinzufügen eines Bots in das HG VG System
Abkürzung: -
Benutzung: *${prefix}joinreq* Gruppenlink-VG Gruppenlink-HG
Beispiel: *${prefix}joinreq* Link-Zur-VG Link-Zur-HG
*HINWEIS* Keine Weiteren Zeichen oder Leerzeichen oder Absätze!

18. *${prefix}translate*
Übersetz eine Text
Abkürzung: *trans*
Benutzung: *${prefix}translate* text / de
_Ländercodes sind hier zu finden: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes ._
Beispiel: *${prefix}trans* Hello my friend / de

19. *${prefix}math*
Ein "einfacher" Taschenrechner.
* = Multiplikation
+ = Addition
- = Subtraktion
/ = Division
^ = Hoch
sqrt(n) = Wurzel

20. *${prefix}stats*
Zeigt Statistiken vom Bot
Benutzung: *${prefix}stats*
Abkürzung: -
Alle mögliche Rechenoperationen sind hier zu finden:
https://www.javatpoint.com/javascript-math

21. *${prefix}mydata*
Zeigt deine gespeicherten Daten an
Benutzung: *${prefix}mydata*

22. *${prefix}spenden*
Du möchtest Spenene?
Benutzung: *${prefix}spenden*

23. *${prefix}spendenliste*
Zeigt die Aktuelle Spendenliste an
Benutzung: *${prefix}spendenliste*





_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
-----[ MISC ]-----

1. *${prefix}google*
Google etwas.
Abkürzung: -
Benutzung: *${prefix}google* Text

2. *${prefix}say*
Der Bot sagt was du willst.
Abkürzung: -
Benutzung: *${prefix}say* text

3. *${prefix}shortlink*
Verkürzt einen Link
Abkürzung: -
Benutzung: *${prefix}shortlink* link

4. *${prefix}coronavirus*
Prüft die Derzeitige Corona lage _(Land in Englisch angeben)_
Abkürzung: *corona*
Benutzung: *${prefix}coronavirus* Germany

5. *${prefix}gsmarena*
Nennt dir Interessante Fakten über ein Handymodell
Abkürzung: *gsmarena*
Benutzung: *${prefix}gsmarena* Modellbezeichnung

6. *${prefix}distance*
Nennt den Abstand zwischen zwei Orte (Englisch... erstmal)
Abkürzung: *distance*
Benutzung: *${prefix}distance* Ort1 / Ort2

7. *${prefix}ytsearch*
Durchsuche Youtube mit einem Suchbegriff
Abkürzung: *ytsearch*
Benutzung: *${prefix}ytsearch* Suchbegriff

8. *${prefix}imagetourl*
Lade ein Bild ins Internet und erhalte den Link.
Abkürzung: *imgtourl*
Benutzung: Sende ein Bild mit *${prefix}imagetourl* oder Antworte auf ein Bild mit *${prefix}imagetourl*.

9. *${prefix}mark*
Makiere eine Person anhand einer Nummer.
Abkürzung: *mark*
Benutzung: *${prefix}mark* 491234567890

10. *${prefix}selfmark*
Lasse dich in der Gruppe vom Bot Makieren.
Abkürzung: *selfmark*
Benutzung: *${prefix}selfmark*

11. *${prefix}tos*
Nutzungsbedingungen vom Erschaffer des BOT Grundgerüst (Slavyan)
Abkürzung: *tos*
Benutzung: *${prefix}tos*

12. *${prefix}getpic*
Beziehe das Bild einer Rufnummer
Abkürzung: *getpic*
Benutzung: *${prefix}getpic* 491234567890

13. *${prefix}bewerten* //in Bearbeitung
Bewerte einmalig unseren Service!
Abkürzung: *bewerten*
Benutzung: *${prefix}bewerten* 1-5

14. *${prefix}wame*
Erstelle ein wa.me/491234567890 Link
Abkürzung: *wame*
Benutzung: *${prefix}wame* 491234567890

15. *${prefix}silvester*
Nennt die Zeit bis Silvester
Abkürzung: *silvester*
Benutzung: *${prefix}silvester*


16. *${prefix}tts*
Erstellt ein TextToSpeech.
Abkürzung: -
Benutzung: *${prefix}tts* Ländercode / text
_Ländercodes sind hier zu finden: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes ._

17. *${prefix}wikipedia*
Wikipedia suche
Abkürzung: wiki
Benutzung: *${prefix}wikipedia* suchbegriff

18. *${prefix}wikien*
Wikipedia suche (englisch)
Abkürzung: - 
Benutzung: *${prefix}wikien* suchbegriff



_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
-----[ STICKER ]-----

1. *${prefix}sticker*
Erstellt ein Sticker
Abkürzung: /
Benutzung: Sende ein Bild/Gif/Video(max 10s) mit *${prefix}sticker* oder Antworte auf ein Bild/Gif/Video mit *${prefix}sticker*.

1.1 *${prefix}osticker*
Erstellt ein Sticker im alten Format (auf Quadrat angepasst)
Abkürzung: *oldsticker* , *stickerold*
Benutzung: Sende ein Bild mit *${prefix}osticker* oder Antworte auf ein Bild *${prefix}osticker*. Sticker wird hier zugeschnitten um auf volle größe zu kommen.

2. *${prefix}stickertoimg*
Wandelt ein Sticker um in ein Bild _(keine animierten Sticker)_
Abkürzung: *toimg* , *sti* , *sticker2img*
Benutzung: Antworte auf ein Sticker mit *${prefix}stickertoimg*.

3. *${prefix}stickerwm*
Erstellt ein Sticker mit benutzedefinierten Packname und Autor
Abkürzung: *stcwm*
Benutzung: Sende ein Bild mit *${prefix}stickerwm* pack_name / author_name oder Antworte auf ein Bild mit *${prefix}stickerwm* pack_name / author_name.

4. *${prefix}stickermeme*
Erstellt ein Sticker Meme
Abkürzung: *stcmeme* , *smeme* , *meme*
Benutzung: Sende ein Bild mit *${prefix}sticker* oben_text / unten_text oder Antworte auf ein Bild mit *${prefix}sticker* oben_text / unten_text.
_Statt Leerzeiche ein Unterstrich(_)_

5. *${prefix}takesticker*
Ändert den Packnamen und Stickernamen eines Stickers.
Abkürzung: -
Benutzung: Antworte auf ein Sticker mit *${prefix}takesticker* pack_name / author_name

6. *${prefix}stickernobg*
Erstellt einen Sticker ohne Hintergrund.
Abkürzung: -
Benutzung: Antworte auf ein Sticker mit *${prefix}stickernobg* 

7. *${prefix}autosticker*
Erstellt automatisch Sticker (muss vom Admin aktiviert werden)
Abkürzung: -
Benutzung: Wenn aktiviert sende ein Foto / Video

8. *${prefix}emojisticker*
Macht aus einem emoji einen Sticker (benötigt PREMIUM) _Nicht alle kompatibel_
Abkürzung: -
Benutzung: *${prefix}emojisticker* emoji

9. *${prefix}dogesticker*
Sendet einen Doge Sticker.
Abkürzung: doge
Benutzung: *${prefix}dogesticker*

10. *${prefix}animesticker*
Sendet einen Animesticker
Abkürzung: -
Benutzung: *${prefix}animesticker* 

11. *${prefix}dice*
Sendet einen zufälligen Würfel als Sticker
Abkürzung: -
Benutzung: *${prefix}dice* 

12. *${prefix}amongus*
Sendet einen Amongus Sticker
Abkürzung: -
Benutzung: *${prefix}amongus* 

13. *${prefix}anim*
Sendet einen Animesticker (andere Quelle)
Abkürzung: -
Benutzung: *${prefix}anim* 

14. *${prefix}patrick*
Sendet einen Patrick Sticker aus Spongebob
Abkürzung: -
Benutzung: *${prefix}patrick* 

15. *${prefix}triggered*
Fügt den Triggered Effekt auf ein Bild ein und schickt es als Sticker.
Abkürzung: -
Benutzung: Sende ein Bild mit *${prefix}triggered* oder Antworte auf ein Bild mit *${prefix}triggered*.

_Index of [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
-----[ WEEABOO ]-----

1. *${prefix}neko*
Sendet ein Weibliches Neko Foto.
Abkürzung: -
Benutzung: *${prefix}neko*

2. *${prefix}wallpaper* *außer betrieb*
Sendet ein Anime Wallpaper
Abkürzung: *wp*
Benutzung: *${prefix}wallpaper*

~3. *${prefix}kemono*~ *außer betrieb*
~Sendet kemonomimi Mädchen Fotos.~
~Abkürzung: -~
~Benutzung: *${prefix}kemono*~

4. *${prefix}waifu*
Schickt zufällige Waifu Bilder.
Abkürzung: -
Benutzung: *${prefix}waifu*

5. *${prefix}animesticker*
Sendet einen Animesticker
Abkürzung: -
Benutzung: *${prefix}animesticker* 

_Index of [5]_
    `
}

exports.menuFun = () => {
    return `
-----[ FUN ]-----

1. *${prefix}lyric*
Sendet dir die Lyric eines Songs
Abkürzung: -
Benutzung: *${prefix}lyric Songname*

2. *${prefix}bass*
Verstärkt massiv den Bass einer Audio
Abkürzung: -
Benutzung: *${prefix}bass* _Nachricht makieren_

3. *${prefix}nightcore*
Lässt eine Audio zu Nightcore werden
Abkürzung: -
Benutzung: *${prefix}nightcore* _Nachricht makieren_

4. *${prefix}daycore*
Lässt eine Audio zu Daycore werden
Abkürzung: -
Benutzung: *${prefix}daycore* _Nachricht makieren_

5. *${prefix}howgay*
Wie Schwul bist du?
Abkürzung: -
Benutzung: *${prefix}howgay*

6. *${prefix}howlesbian*
Wie Lesbisch bist du?
Abkürzung: -
Benutzung: *${prefix}lesbian*

7. *${prefix}howtrans*
Wie Transsexuell bist du?
Abkürzung: -
Benutzung: *${prefix}howtrans*

8 *${prefix}howbi*
Wie Bisexuell bist du?
Abkürzung: -
Benutzung: *${prefix}howbi*

9. *${prefix}love*
Testet die Liebe zwischen 2 Namen.
Abkürzung: -
Benutzung: *${prefix}love* Person1 Person2

10. *${prefix}8ball*
Beantwortet dir jede Frage!
Abkürzung: -
Benutzung: *${prefix}8ball* Frage

11. *${prefix}dice*
Sendet einen zufälligen Würfel als Sticker
Abkürzung: -
Benutzung: *${prefix}dice*

12. *${prefix}amongus*
Sendet einen Amongus Sticker
Abkürzung: -
Benutzung: *${prefix}amongus*

13. *${prefix}anim*
Sendet einen Animesticker
Abkürzung: -
Benutzung: *${prefix}anim*

14. *${prefix}patrick*
Sendet einen Patrick Sticker aus Spongebob
Abkürzung: -
Benutzung: *${prefix}patrick*

15. *${prefix}trash*
Steckt eine Person deiner Wahl in den Müll
Abkürzung: -
Benutzung: *${prefix}trash @Person*

15.1 *${prefix}trashall*
Steckt alle in der Gruppe in den Müll
Abkürzung: -
Benutzung: *${prefix}trashall*


16. *${prefix}wasted*
Erstelle ein Wasted-Effekt
Abkürzung: -
Benutzung: Sende ein Bild mit *${prefix}wasted* oder Antworte auf ein Bild mit *${prefix}wasted*.

17. *${prefix}kiss*
Küss jemanden ( ͡° ͜ʖ ͡°).
Abkürzung: -
Benutzung: *${prefix}kiss @Person*.

17.1 *${prefix}kissall*
Küss alle in der Gruppe ( ͡° ͜ʖ ͡°).
Abkürzung: -
Benutzung: *${prefix}kissall*

18. *${prefix}pornhublogo*
Erstellt ein Pornhublogo mit deinen Namen
Abkürzung: -
Benutzung: *${prefix}pornhublogo /Porn/ Hub* _Slash beachten!_

19. *${prefix}phcomment*
Erstellt ein Pornhub Kommentar mit deinem Profilbild, dein wunsch Name und deinen Text.
Abkürzung: -
Benutzung: *${prefix}phcomment* username / text

20. *${prefix}randommeme*
Sendet einen zufälligen Meme (Quelle Reddit)
Abkürzung: -
Benutzung: *${prefix}randommeme*

21. *${prefix}penis*
Zeigt deine Penislänge an.
Abkürzung: -
Benutzung: *${prefix}penis*

22. *${prefix}tritt*
Tritt jemanden deiner Wahl
Abkürzung: -
Benutzung: *${prefix}tritt*

22. *${prefix}trittall*
Tritt jeden in der Gruppe
Benutzung: *${prefix}trittall*

23. *${prefix}hug*
Umarme jemanden deiner Wahl
Abkürzung: -
Benutzung: *${prefix}hug*

23.1 *${prefix}hugall*
Umarme alle in der Gruppe
Abkürzung: -
Benutzung: *${prefix}hugall*

24. *${prefix}vampir*
Sauge einer Person deiner wahl das Blut aus.
Abkürzung: 
Benutzung: *${prefix}vampir @Nummer*

25. *${prefix}snowball*
Wirf eine Person deiner Wahl mit einem Schneeball ab.
Abkürzung: 
Benutzung: *${prefix}snowball @Nummer*




_Index of [6]_
    `
}

exports.menuModeration = () => {
    return `
-----[ MODERATION ]-----

1. *${prefix}add*
Fügt eine Nummer Hinzu.
Abkürzung: -
Benutzung: *${prefix}add* 49123456 
_Leerzeichen  - + ( ) werden ignoriert und 0 wird 49 gesetzt_

2. *${prefix}kick*
Entfernt einen _oder mehrere_ User.
Abkürzung: -
Benutzung: *${prefix}kick* @User _@User2 @User3_

3. *${prefix}promote*
Erteilt einem User den Admin-Status.
Abkürzung: -
Benutzung: *${prefix}promote* @User

3.1 *${prefix}promoteme*
Gibt dir Admin in einer Gruppe
Abkürzung: -
Benutzung: *${prefix}promoteme* GroupID

4. *${prefix}demote*
Entzieht einem User den Adminstatus
Abkürzung: -
Benutzung: *${prefix}demote* @User

5. *${prefix}leave*
Lässt den Bot deine Gruppe verlassen.
Abkürzung: -
Benutzung: *${prefix}leave*

6. *${prefix}everyone*
Makiert alle Teilnehmer in der Gruppe _mit einer Nachricht deiner Wahl_.
Abkürzung: -
Benutzung: *${prefix}everyone _Deine Nachricht_*

7. *${prefix}groupicon*
Ändert das Gruppenbild mit einem Bild deiner Wahl.
Abkürzung: -
Benutzung: Sende ein Bild mit dem Befehl *${prefix}groupicon* oder Antworte auf ein Bild mit dem Befehl: *${prefix}groupicon*.

8. *${prefix}grouplink*
Sendet dir den Gruppenlink!
Abkürzung: 
Benutzung: *${prefix}grouplink*

9. *${prefix}revoke*
Setzt den Gruppenlink zurück!
Abkürzung: 
Benutzung: *${prefix}revoke*

10. *${prefix}groupinfo*
Zeigt alle Infos der Gruppe an.
Abkürzung: -gi
Benutzung: *${prefix}gi / ${prefix}groupinfo*

11. *${prefix}groupid*
Sendet dir die Gruppen-ID von der Gruppe wo du den Befehl ausführst!
Abkürzung: -
Benutzung: *${prefix}groupid*

12. *${prefix}hg*
Addet einen User aus der _VG_ in die _HG_! (vg und hg müssen verbunden sein)
Abkürzung: 
Benutzung: ${prefix}hg @Person _die in die HG soll_

13. *${prefix}kickall*
Kickt alle User aus einer Gruppe! (Admins bleiben) kann nur vom Gruppenersteller ausgeführt werden!
Abkürzung: 
Benutzung: ${prefix}kickall

14 *${prefix}kicker*
Kickt alle User aus einer Gruppe die mit dem genannten Code anfangen (nur die Vorwahl ohne +)
Abkürzung: 
Benutzung: ${prefix}kicker nummerncode


14.1 *${prefix}kickfilter*
Fügt Nummern in den Kickfilter hinzu
Abkürzung: 
Benutzung: ${prefix}kickfilter add/remove/check Nummercode _ohne +_

15. *${prefix}amode*
Aktiviert den Adminmodus.
Abkürzung: - mute, adminmodus
Benutzung: *${prefix}amode* enable / disable

16. *${prefix}mutegc*
Setze die Gruppe auf Admin-Only.
Abkürzung: -
Benutzung: *${prefix}mutegc* enable/disable

17. *${prefix}leveling*
Aktiviert/Deaktiviert die Level Funktion. 
Abkürzung: -
Benutzung: *${prefix}leveling* enable/disable

18. *${prefix}antilink*
Aktiviert/Deaktiviert die Antilink Funktion. Kickt User die einen Gruppenlink senden.
_Ausnahme ist der Eigene Gruppenlink der Gruppe_
Abkürzung: -
Benutzung: *${prefix}antilink* enable/disable

19. *${prefix}welcome*
Aktiviert/Deaktiviert Willkommen
Abkürzung: -
Benutzung: *${prefix}welcome* enable/disable

20. *${prefix}autosticker*
Schaltet Autosticker An/Aus. Jedes Bild/Gif wird in ein Sticker umgewandelt.
Abkürzung: *autostiker autostik*
Benutzung: *${prefix}autosticker* enable/disable

21. *${prefix}nsfw*
Schaltet NSFW An/Aus. Menü 8 kann verwendet werden wenn aktiviert.
Abkürzung: -
Benutzung: *${prefix}nsfw* enable/disable

22. *${prefix}delete*
Löscht eine Nachricht *VOM* Bot!
Abkürzung: -del
Benutzung: *${prefix}delete* nachricht von bot markieren

23. *${prefix}antibeleidigung*
Schaltet das Antibeleidigungsystem ein/aus
Abkürzung: ab
Benutzung: *${prefix}antibeleidigung* enable/disable/add/check/remove Wort

24. *${prefix}gaming*
Schaltet das Gaming Menu ein/aus
Abkürzung: 
Benutzung: *${prefix}gaming* enable/disable

25. *${prefix}verwarnungen*
Zeigt Verwarnungen an // entfernt diese
Abkürzung:  warn, warnen, verw
Benutzung: *${prefix}verwarnungen*
Verwarnungen entfernen(Nachricht Makieren) *${prefix}verwarnungen* remove


_Index of [7]_
    `
}

exports.menuNsfw = () => {
    return `
-----[ NSFW ]-----

1. *${prefix}lewds*
Sendet dir lewd Bilder.
Abkürzung: *lewd*
Benutzung: *${prefix}lewds*

2. *${prefix}nhentai*
Lädt doujinshi Informationen von nHentai.
Abkürzung: *nh*
Benutzung: *${prefix}nhentai* code

3. *${prefix}waifu18*
Sendet zufällige NSFW Waifu Bilder.
Abkürzung: -
Benutzung: *${prefix}waifu18*

4. *${prefix}fetish*
Sendet Fetish Bilder deiner Wahl.
Abkürzung: -
Benutzung: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

5. *${prefix}phdl*
Lädt videos runter von Pornhub
Abkürzung: -
Benutzung *${prefix}phdl* link

6. *${prefix}yuri*
Sendet zufällige Yuri Bilder.
Abkürzung: -
Benutzung: *${prefix}yuri*

7. *${prefix}yaoi*
Sendet zufällige Yaoi Bilder.
Abkürzung: -
Benutzung: *${prefix}yaoi*

8. *${prefix}lewdavatar*
Sendet zufällige lewd Avatare.
Abkürzung: -
Benutzung: *${prefix}lewdavatar*

9. *${prefix}femdom*
Sendet zufällige femdom Bilder.
Abkürzung: -
Benutzung: *${prefix}femdom*

10. *${prefix}nhsearch*
nHentai suche.
Abkürzung: -
Benutzung: *${prefix}nhsearch* query

11. *${prefix}nekosearch*
Nekopoi suche.
Abkürzung: -
Benutzung: *${prefix}nekosearch* query

12. *${prefix}fuck*
Fickt jemanden.
Abkürzung: -
Benutzung: *${prefix}fuck* @Person

12.1 *${prefix}fuckall*
Fickt alle in der Gruppe
Abkürzung: -
Benutzung: *${prefix}fuckall* 

13. *${prefix}nudes*
Frag jemanden nach Nudes.
Abkürzung: -
Benutzung: *${prefix}nudes* @Person

13. *${prefix}nudesall*
Fragt jede person in der Gruppe nach Nudes
Abkürzung: -
Benutzung: *${prefix}nudesall*




_Index of [8]_
    `
}

exports.menuTeamOwner = (pushname) => {
    return `
*_---------[ OWNER ]---------_*
Hallo *_Owner_*,
*_${pushname}_* 

1. *${prefix}bc*
Mache einen Broadcast an alle Gruppen!
Abkürzung: -
Benutzung: *${prefix}bc* text

2. *${prefix}clearall*
Leere alle Chatverläufe!
Abkürzung: cc
Benutzung: *${prefix}clearall*

3. *${prefix}getses*
Mache einen Screenshot von Web Whatsapp!
Abkürzung: -
Benutzung: *${prefix}getses*

4. *${prefix}ban*
Banne einen User
Abkürzung: -
Benutzung: *${prefix}ban* 62812xxxxxxxx GRUND _mind 2 Wörter_

4.1. *${prefix}tempban*
Banne temporär einen User
Abkürzung: -
Benutzung: *${prefix}tempban* user/62812xxxxxxx Zeit GRUND _mind 2 Wörter_

4.2. *${prefix}unban*
Entbanne einen USer
Abkürzung: -
Benutzung: *${prefix}unban* user/62812xxxxxxx 

5. *${prefix}leaveall*
Verlasse alle Gruppen!
Abkürzung: -
Benutzung: *${prefix}leaveall* text

6. *${prefix}eval*
Führe JS Code aus! 
Abkürzung: *ev*
Benutzung: *${prefix}eval*

7. *${prefix}shutdown*
Starte den Bot neu!
Abkürzung: -
Benutzung: *${prefix}shutdown*

8. *${prefix}premium*
Vergibt / entfernt Premium an User!
Abkürzung: -
Benutzung: *${prefix}premium* add/del @user

9. *${prefix}setstatus*
Setze meine Whatsapp Status!
Abkürzung: -
Benutzung: *${prefix}status* text

9. *${prefix}setprofilepic*
Makiere ein Bild das als Profilbild verwendet werden soll
Abkürzung: setpic
Benutzung: *${prefix}setprofilepic*
_Später: Wenn nur ${prefix}setpic = standart Bocchi-Profilbild_

10. *${prefix}exif*
Erstellt den standart Packnamen/Authornamen für Sticker!
Abkürzung: -
Benutzung: *${prefix}exif* pack_name / author_name

11. *${prefix}omode*
OwnerModus aktivieren
Abkürzung: -
Benutzung: Nutze *${prefix}omode* enable / disable um zu aktivieren / deaktivieren.

12. *${prefix}setname*
Ändert den Botname!
Abkürzung: -
Benutzung: *${prefix}setname* neuer_name

13. *${prefix}block*
Blockiert einen User!
Abkürzung: 
Benutzung: *${prefix}block* @user/62812xxxxxxxx

14. *${prefix}unblock*
Gibt einen User wieder frei!
Abkürzung: 
Benutzung: *${prefix}unblock* @user/62812xxxxxxxx

15. *${prefix}listblock*
Zeigt die Blockierten nutzer an
Abkürzung: -
Benutzung: *${prefix}listblock*

16. *${prefix}selfpromote*
Gibt dir Admin!
Benutzung: *${prefix}selfpromote*

17. *${prefix}selfdemote*
Nimmt dir Admin weg!
Benutzung: *${prefix}selfdemote*

18. *${prefix}group*
Zeige aktuelle Gruppen.
Benutzung: *${prefix}group*

19. *${prefix}r*
Ließt die Datei neu ein: message/index.js.
Benutzung: *${prefix}r*

20. *${prefix}langreload*
Ließt die Datei neu ein: eng.js.
Abkürzung: *lr*
Benutzung: *${prefix}langreload*

21. *${prefix}all*
Erlaubt und Verbietet
${prefix}everyone disable = verbietet
${prefix}everyone enable = erlaubt
Benutzung: *${prefix}all* enable/disable

22. *${prefix}ojoin*
Lässt einen bestimmten Bot in die Gruppe joinen! (markiere den Bot)
Benutzung: *${prefix}ojoin* link

23. *${prefix}ajoin*
Lässt einen alle Bots in die Gruppe joinen!
Benutzung: *${prefix}ajoin* link

24. *${prefix}oleave*
Lässt einen Bot die Gruppe verlassen! (Markiere den Bot)
Benutzung: *${prefix}oleave* @xxx

25. *${prefix}leaveid*
Lässt einen Bot die Gruppe verlassen! (Bot Nachricht Markieren)
Benutzung: *${prefix}leaveid* Gruppen-ID

25.1 *${prefix}aleaveid*
Lässt einen Bot die Gruppe verlassen!
Benutzung: *${prefix}leaveid* Gruppen-ID

25.2 *${prefix}deleteid*
Löscht eine GruppenID!
Benutzung: *${prefix}leaveid* Gruppen-ID

26. *${prefix}ownersay*
Sendet eine Nachricht mit dem Bot an einen Chat / eine Gruppe
Benutzung: *${prefix}ownersay* Nummer@c.us/gruppenid@g.us / Nachricht
_Gruppen-ID mit ${prefix}groupid_

27. *${prefix}grouplist*
Zeigt Gruppen an vom Bot-Whatsapp
Benutzung: *${prefix}grouplist*

28. *${prefix}grouplistlow*
Zeigt Gruppen an vom Bot mit weniger als bestimmte Teilnehmeranzahl
Benutzung: *${prefix}grouplistlow* zahl

28.1. *${prefix}glleave*
Lässt den Bot Gruppen verlassen mit X Anzahl an Teilnehmern
Benutzung: *${prefix}glleave* Anzahl

30. *${prefix}grouplistlink*
Zeigt Gruppen vom Bot-Whatsapp inkl. Gruppenlink(Wenn Admin)
Benutzung: *${prefix}grouplistlink*

31. *${prefix}url*
Löscht ungültige Gruppenlinks (ZOMBY)
Benutzung: *${prefix}url*

32. *${prefix}links*
Sendet alle gespeicherten Gruppenlinks in 40er Paketen. 
Benutzung: *${prefix}links*

33. *${prefix}slap*
Test Befehl mit Bot Informationen (getses, Offene Chats, Gruppen, Akku)
Benutzung: *${prefix}slap*

34. *${prefix}ownercheck*
Sendet Dev Informationen (uptime, id, akku, gruppenanzahl, groupid, serverstatus)
Benutzung: *${prefix}ownercheck*

35. *${prefix}reqhg*
Verbindet eine Vorgruppe und eine Hauptgruppe miteinander! (${prefix}hg)
Benutzung: *${prefix}reqhg* groupid1 groupid2

36. *${prefix}reqid*
Nennt die Gruppen-ID anhand des Gruppenlinks.
Benutzung: *${prefix}reqid* gruppenlink

37. *${prefix}botinfo*
Nennt dir Bot-De-Informationen (Sessionid, nummer)
Benutzung: *${prefix}botinfo* 

38. *${prefix}antibitch*
add / remove (löscht / fügt neue bitch links hinzu)
Benutzung: *${prefix}antibitch*  add / remove link

39. *${prefix}nandostatus*
Empfehle euch nicht den Befehl zu auszuführen, außer ihr wollt 50 Bilder für den status (randommeme)
Abkürzung: -
Benutzung: *${prefix}nandostatus*

40. *${prefix}rot*
Ein Test Befehl mit Buttons
Abkürzung: -
Benutzung: *${prefix}rot*

41. *${prefix}ls*
Gruppen Information der jetzigen Gruppe.
Abkürzung: -
Benutzung: *${prefix}ls*

42. *${prefix}tag*
Heutiger Tag
Abkürzung: -
Benutzung: *${prefix}tag*

42. *${prefix}setlevel*
Setze das Level eines Users
Abkürzung: -
Benutzung: *${prefix}setlevel* nummer level

43. *${prefix}setmoney*
Setze das Geld eines Users
Abkürzung: -
Benutzung: *${prefix}setmoney* nummer Summe

44. *${prefix}email*
Sendet eine Email XYZ _*IN BEARBEITUNG*_
Abkürzung: -
Benutzung: *${prefix}email* XYZ ZXY

45. *${prefix}bocchi*
Erkennt eine Botnummer als Bocchi an indem eine Nachricht vom Bot makiert wird
Abkürzung: -
Benutzung: *${prefix}bocchi* add

46. *${prefix}hosts*
Fügt eine neue SessionID hinzu
Abkürzung: -
Benutzung: *${prefix}hosts* add/remove SessionID

47. *${prefix}userfind*
Lässt einen Bot eine Nummer suchen in Gruppen
Abkürzung: -
Benutzung: *${prefix}userfind* Nummer(491234...)

48. *${prefix}usercheck*
Zeigt die Daten eines Users an
Abkürzung: mydata
Benutzung: *${prefix}usercheck* nummer

49. *${prefix}bancheck*
Ruft Banninformationen ab von einem User
Abkürzung: 
Benutzung: *${prefix}bancheck* nummer

50. *${prefix}banlist*
Zeigt dir die Bannliste an
Abkürzung: 
Benutzung: *${prefix}banlist*

51. *${prefix}oog*
OG Werbung an alle Gruppen
Abkürzung: 
Benutzung: *${prefix}oog*

52. *${prefix}todo*
Zeigt die TODO liste an / Fügt neue hinzu
Abkürzung: 
Benutzung: *${prefix}todo* add/remove ID

53. *${prefix}passwd*
Setze ein Passwort
Abkürzung: 
Benutzung: *${prefix}passwd* Passwort

54. *${prefix}passwort*
Prüfe ein Passwort eines Teammitgliedes
Abkürzung: 
Benutzung: *${prefix}passwort* Nummer

55. *${prefix}qr*
Sagt dir wie es funktioniert
Abkürzung: 
Benutzung: *${prefix}qr*

56. *${prefix}resetqr*
Setzt die Sitzung eines Bots zurück
Abkürzung: 
Benutzung: *${prefix}resetqr* SessionID

57. *${prefix}sendqr*
Schickt dir einen QR zum Anmelden
Abkürzung: 
Benutzung: *${prefix}sendqr* SessionID



_Index of [9]_

    `
}

exports.menuTeamMod = (pushname) => {
    return `
*_---------[ TEAM ]---------_*
Hallo Moderator,
*_${pushname}_*
    
1. *${prefix}ban del*
Entbannt einen User!
Abkürzung: -
Benutzung: *${prefix}ban del* 49123456

2. *${prefix}block*
Blockiert einen bestimmten User! 
Abkürzung: 
Benutzung: *${prefix}block* 49123456

3. *${prefix}unblock*
Entblockt einen bestimmten User! 
Abkürzung: -
Benutzung: *${prefix}unblock* 49123456

4. *${prefix}blocklist*
Sendet eine Liste der geblockten User!
Abkürzung: -
Benutzung: *${prefix}blocklist*

5. *${prefix}group*
Sendet einen Gruppenzähler!
Abkürzung: -
Benutzung: *${prefix}group*

6. *${prefix}ojoin*
Lässt einen bestimmten Bot in die Gruppe joinen (den Markierten)
Abkürzung: 
Benutzung: *${prefix}ojoin* link (bot nachricht markieren)

7. *${prefix}ajoin*
Lässt alle Bots den Gruppenlink beitreten!
Abkürzung: -
Benutzung: *${prefix}ajoin* link

8. *${prefix}oleave*
Lässt einen bestimmten Bot die Gruppe verlassen (den Markierten)
Abkürzung: -
Benutzung: *${prefix}oleave* (bot nachricht markieren)

9. *${prefix}grouplist*
Sendet eine Gruppenliste (Gruppenname, Gruppenid, Teilnehmerzahl)
Abkürzung: 
Benutzung: *${prefix}grouplist* 

10. *${prefix}grouplistlow*
Sendet die Namen der Gruppen die unter 10 Member haben! (Name, Teilnehmerzahl)
Bei _Error unter 10_ hat er KEINE Gruppen mit unter 10 Membern!
Abkürzung: -
Benutzung: *${prefix}grouplistlow*

11. *${prefix}grouplistlowlow*
Sendet die Namen der Gruppen die unter 5 Member haben! (Name, Teilnehmerzahl)
Bei _Error unter 5_ hat er KEINE Gruppen mit unter 5 Membern!
Abkürzung: -
Benutzung: *${prefix}grouplistlowlow* 

12. *${prefix}slap*
Test Befehl mit Bot Informationen (getses, Offene Chats, Gruppen, Akku)
Abkürzung: 
Benutzung: *${prefix}slap*

13. *${prefix}teamcheck*
Sendet Bot Informationen (uptime, sessionid, Akkustand + Zustand)
Abkürzung: -
Benutzung: *${prefix}teamcheck*

14. *${prefix}support reply*
Sendet eine Support Antwort in die FAQ Gruppe (markiere den _MAIN_ Bot mit der vorgegebenen Nachricht und schreibe deine Antwort hin!)
Abkürzung: -
Benutzung: *${prefix}support reply*

15. *${prefix}delete*
Löscht EINE Bot Nachricht! (markiere den Bot)
Abkürzung: -
Benutzung: *${prefix}delete*

16. *${prefix}amode*
Aktiviert / Deaktiviert Admin-Modus
Abkürzung: -
Benutzung: *${prefix}amode* enable / disable

17. *${prefix}groupid*
Sendet dir die Gruppen-ID von der Gruppe wo du den Befehl ausführst!
Abkürzung: -
Benutzung: *${prefix}groupid*

18. *${prefix}antibitch*
add / remove (löscht / fügt neue bitch links hinzu)
Benutzung: *${prefix}antibitch*  add / remove link

19. *${prefix}ls*
Gruppen Information der jetzigen Gruppe.
Abkürzung: -
Benutzung: *${prefix}ls*

_Index of [9]_
    `
}
exports.menuTeamSupport = (pushname) => {
    return `
*_---------[ TEAM ]---------_*
Hallo Supporter,
*_${pushname}_*
    
1. *${prefix}ban del*
Entbannt einen User!
Abkürzung: -
Benutzung: *${prefix}ban del* 49123456

_Index of [9]_
    `
}


exports.menuLeveling = () => {
    return `
-----[ LEVELING ]-----
1. *${prefix}leveling*
Aktiviert/Deaktiviert die Level Funktion. 
Abkürzung: -
Benutzung: *${prefix}leveling* enable/disable

2. *${prefix}level*
Ruf dein Level ab.
Abkürzung: -xp
Benutzung: *${prefix}level*

3. *${prefix}register* Name / Alter
Du musst registriert sein um Level/XP zu erhalten
Sende eine Private Nachricht an den Bot
Benutzung: *${prefix}register Name / Alter*

4. *${prefix}leaderboard*
Zeigt das Leaderboard an.
Abkürzung: -
Benutzung: *${prefix}leaderboard*

_Index of [10]_
    `
}

exports.menugaming = () => {
    return `
    -----[ GAMING ]-----
1. *${prefix}ssp*
Spiele Schere/Stein/Papier.
Abkürzung: -
Benutzung: *${prefix}ssp Schere/Stein/Papier*

2. *${prefix}münze*
Wirft eine Münze.
Abkürzung: -cflip
Benutzung: *${prefix}Münze*

3. *${prefix}betz*
Wählt eine Random Zahl und schaut ob du gewonnen hast.
Abkürzung: 
Benutzung: *${prefix}betz*

4. *${prefix}vampir*
Sauge einer Person deiner wahl das Blut aus.
Abkürzung: 
Benutzung: *${prefix}vampir @Nummer*


_Index of [11]_
    `
}

exports.menuPremium = () => {
    return `
    -----[ PREMIUM ]-----
 \`\`\`VORTEILE\`\`\`
 ► Spamschutz umgehen
 ► weitere folgen

_____________________________
1. *${prefix}premiumcheck*
Zeigt an wie lange dein Premium noch gültig ist.
Abkürzung: 
Benutzung: *${prefix}premiumcheck*

2. *${prefix}premiumlist*
Liste alle Premium User.
Abkürzung: *listpremium*
Benutzung: *${prefix}premiumlist*

3. *${prefix}multifetish*
Sendet dir 5 Fetish Bilder deiner Wahl. (NSFW muss an sein!)
Abkürzung: *mfetish*
Benutzung: *${prefix}multifetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

4. *${prefix}multilewds*
Sendet dir 5 zufällige lewds Bilder. (NSFW muss an sein!)
Abkürzung: *multilewds multilewd mlewd mlewds*
Benutzung: *${prefix}multilewds*

5. *${prefix}multirandommeme* 
Sende dir 5 zufällige Memes
Abkürzung: -
Benutzung: *${prefix}multirandomeme* 

6. *${prefix}ffbanner* 
Erstellt ein FreeFire Banner mit deinen Namen
Abkürzung: -
Benutzung: *${prefix}ffbanner* text1 / text2

7. *${prefix}firemaker* 
Erstellt ein heißes Bild mit deinem Text
Abkürzung: -
Benutzung: *${prefix}firemaker* text

8. *${prefix}balloonmaker* 
Erstelle ein Bild mit 2 Ballons mit Namen
Abkürzung: *blmaker*
Benutzung: *${prefix}balloonmaker* name1 / name2

9. *${prefix}sliding* 
Erstellt ein Gif mit Animierten Text _Zeichenlimit beachten_
Abkürzung: -
Benutzung: *${prefix}sliding* text

10. *${prefix}galaxy* 
Erstellt ein Galaxy Bild mit deinem Text _Zeichenlimit beachten_
Abkürzung: -
Benutzung: *${prefix}galaxy* text

11. *${prefix}write* 
Mache Notizen in einem Buch (Bild)
Abkürzung: -
Benutzung: *${prefix}write* text

12. *${prefix}glitchtext* 
Erstellt ein Text mit Glitch Effekt
Abkürzung: *glitext*
Benutzung: *${prefix}glitchtext* text1 / text2

13. *${prefix}blackpink* 
Erstellt ein Blackpink Text mit entsprechender Schriftart.
Abkürzung: -
Benutzung: *${prefix}blackpink* text

14. *${prefix}emojisticker* 
Erstellt einen Sticker von dem ausgewählten Emoji!
Abkürzung: -
Benutzung: *${prefix}emojisticker* emoji

15. *${prefix}phmaker* 
Erstellt ein Bild als Pornhublogo mit den beiden ausgwählten Worten!
Abkürzung: -
Benutzung: *${prefix}phmaker* wort1 / wort2

16. *${prefix}ttp* 
Erstellt einen _farbigen_ Sticker mit deinem Text.
Abkürzung: -
Benutzung: *${prefix}ttp* Text

17. *${prefix}lovemessage* 
Erstellt ein Bild mit ein Herz in der Hand, mit deinem Text.
Abkürzung: -
Benutzung: *${prefix}lovemessage* Text

18. *${prefix}romance* 
Erstellt ein "verliebtes" Bild mit deinem Text.
Abkürzung: -
Benutzung: *${prefix}romance* Text

19. *${prefix}party* 
Erstellt ein Bild mit Party Hintergrund und deinem Text. 
Abkürzung: -
Benutzung: *${prefix}party* Text

20. *${prefix}silk* 
Erstellt ein Bild mit deinem Text auf einen Hintergrund mit Seide.
Abkürzung: -
Benutzung: *${prefix}silk* Text

21. *${prefix}thunder* 
Erstellt ein Bild mit deinem Text auf einem Gewitterhintergrund.
Abkürzung: -
Benutzung: *${prefix}thunder* Text

22. *${prefix}play* 
Lade ein YT Musikvideo herunter, sendet Audio
Abkürzung: *play*
Benutzung: *${prefix}play* VIDEO-TITEL
_Nicht den Link des Videos angeben!_

23. *${prefix}playv* 
Lade ein YT Musikvideo herunter, sendet video
Abkürzung: *playv*
Benutzung: *${prefix}playv* VIDEO-TITEL
_Nicht den Link des Videos angeben!_

_Index of [13]_

    `
}

exports.rules = () => {
    return `
-----[ REGELN ]-----

1. NICHT SPAMMEN. 
Sonst Block & Ban

2. NICHT DEN BOT AUSNUTZEN.
Sonst PERMANENT BLOCK + Ban .

3. BEDINGUNGEN UNTER DENEN EIN BOT JOINT/NICHT JOINT
- mind. 15 Teilnehmer
- keine Rpg Gruppen, Werbe Gruppen, Klassengruppen, Pornogruppen

4. IHR MÖCHTET DEN BOT IN EURE GRUPPE?
/join https://chat.whatsapp.com/XXXXXXXXXX
Ihr müsst euren eigenen gruppenlink in DIESEM Format einfügen

Wenn du es verstanden hast /menu um zu starten.

Owner:
Unsere Owner findest du unter 
/ownerbot
Bei Spam wirst du geblockt und gebannt!

Quellcode und Entwickler vom Original:
https://github.com/SlavyanDesu/BocchiBot    `
}

exports.datenschutz = () => {
    return `

    -----[ DATEN ]-----
Wir speichern Daten.
Das Speichern von Daten ist notwendig, um viele Funktionen des Bots anzubieten.
Folgende Daten werden gespeichert(Datenbank):

>>AFK _bei benutzung, nach ablauf automatische löschung_
Rufnummer; Text; Zeitpunkt der Nachricht

>>Bannstatus _Wenn ihr gebannt werdet, bleiben erhalten um missbrauch zu verhindern_
Rufnummer; Bangrund; Ersteller; Zeitpunkt der Erstellung

>>Erinnerung _bei benutzung, nach ablauf automatische löschung_
Rufnummer; Text; Ablaufdatum

>>GruppenInfo _Entsprechende Gruppe wird beim Verlassen(${prefix}leave) automatisch gelöscht_
GruppenID; Gruppenspezifische Funktionen(Ein/Aus)

>>Premium _Nur beim besitz von Premium, nach ablauf automatische löschung_
Rufnummer; Ablaufdatum

>>Level _Wird automatisch erstellt beim ersten Befehl_
Rufnummer; Level; XP

>>LogBefehle _Werden für Fehlerdiagnosen gespeichert und werden nach manueller Diagnose gelöscht_
GruppenID; Rufnummer; Befehl; Zeitpunkt
*Nachrichten außerhalb von Befehlen werden nicht gespeichert. Chatverläufe werden 1-2x pro Woche beim Bot (Whatsapp) gelöscht.*

>>Registierung
Rufnummer; Name; Alter; Zeitpunkt der Registrierung; Serial

>>Support _Bei benutzung steigt der wert um +1_
SupportID;

>>Vorstellung
Solltest du dich bei einem Admin Vorgestellt haben (${prefix}vt) werden folgende Daten erhoben:
Name; Alter; Ort; _Bild, wenn angegeben_
Zum löschen dieser Informationen, ${prefix}vt delete

= = = = = = = = = = = = = = = =
*Ihr möchtet eure Daten löschen?*
${prefix}unregister
 - Löscht Informationen im punkt #Registrierung
 _(ermöglicht eine neue Registrierung mit anderen Angaben zum Namen & Alter)_
${prefix}datadelete
 - Löscht Alle Informationen außer auf #Bannstatus #LogBefehle und Temporäre Daten wie zB. #AFK
 
Gebannte nutzer deren Daten gelöscht werden sollen, melden sich bitte mir Ihrer Rufnummer bei:
https://discord.com/invite/PSYVXTckkf
Hierbei wird die Löschung Manuell durchgeführt wie beim Befehl ${prefix}datadelete

_Eine Technische Lösung zur automatischen löschung von Daten ist in Planung_
= = = = = = = = = = = = = = = =
Ihr möchtet einsicht in euren gespeicherten Daten?
Meldet euch bei uns mit ${prefix}report
Mit der Information welche daten Ihr einsehen möchtet s. o.

_Eine Automatische Funktion über einen Befehl zur auskunft der Daten ist in Planung_
Stand: 09/2021
    `
}

// Note for owner/hoster, please DO NOT edit this section.
exports.tos = () => {
    return `
Wir Hosten eine private modifizierte Version von diesem Bot. Das Original ohne unsere Änderungen könnt ihr hier finden:
_Original ToS vom Ersteller_
-----[ TERMS OF SERVICE ]-----

This bot is an open-source bot, come with the name of BocchiBot which is available on GitHub for free.

If you want to contributing to this project, visit:
https://github.com/SlavyanDesu/BocchiBot

Thank you!

- Slavyan
    `
}
