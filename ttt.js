/**
Quasi fertig, Texte überarbeiten^^ 
Kleine Bugs finden, bei Bocchi einbauen, 
[Für Ookami: Einbauen wenn PN funktioniert], 
Reset fehlt noch!
 */
async function ttt(client, from, message, args, db, sender, mentionedJidList) {
    if (from == '120363037638615256@g.us' || sender.id == "4915739479166@c.us" || sender.id == "4915736512135@c.us") {
        // Variablen
        const roomid = db.prepare('SELECT roomid FROM tictactoe WHERE player1 = ? OR player2 = ?').get(sender.id, sender.id)
        const getPlayfield = roomid ? db.prepare('SELECT playfield FROM tictactoe WHERE roomid = ?').get(roomid.roomid) : undefined
        const userCheck = mentionedJidList ? db.prepare('SELECT roomname FROM tictactoe WHERE player1 = ? OR player2 = ?').get(mentionedJidList[0], mentionedJidList[0]) : undefined
        var status = roomid ? db.prepare('SELECT status, roomname, player1, player2 FROM tictactoe WHERE roomid = ?').get(roomid.roomid) : undefined
        var playfield = getPlayfield ? JSON.parse(getPlayfield.playfield) : undefined
        var playerid;
        var playericon;
        if (status) {
            if (status.player1 == sender.id) {
                playerid = 1
                playericon = '❎'
            } else if (status.player2 == sender.id) {
                playerid = 2
                playericon = '⭕'
            }
        }

        // Sub-Commands
        if (args[0] == "show") {
            const showText = await playTTT(playfield)
            if (status.status == playerid) {
                client.sendText(from, showText + `Du bist jetzt am Zug (${playericon})`)
            } else {
                if (playerid == 1) {
                    playericon = '⭕'
                } else {
                    playericon = '❎'
                }
                client.sendText(from, showText + `Dein Gegner ist jetzt am Zug (${playericon})`)
            }
        } else if (args[0] == "create") {
            if (roomid) return client.sendText(from, `Du befindest dich bereits in einer Runde.\nRaumname: ${status.roomname}`)
            if (!args[1]) return client.sendText(from, "Bitte gib dem Raum einen Namen.")
            // #ttt create {Raumname} ({@Person} Optional, dann kann nur die Person joinen)
            const emptyPlayfield = JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0])
            try {
                if (!mentionedJidList) {
                    db.prepare('INSERT INTO tictactoe (roomname, playfield, status, player1) VALUES (?, ?, ?, ?)').run(args[1], emptyPlayfield, 1, sender.id)
                } else {
                    if (sender.id == mentionedJidList[0]) return client.sendText(from, "Du kannst nicht mit dir selbst spielen. Das ist langweilig.")
                    if (userCheck) return client.sendText(from, "Deine Markierte Person befindet sich bereits in einer Runde.\n\nRaumname: " + userCheck.roomname)
                    if (args[1].includes('@')) return client.sendText(from, "Bitte gib dem Raum einen Namen.")
                    db.prepare('INSERT INTO tictactoe (roomname, playfield, status, player1, player2) VALUES (?, ?, ?, ?, ?)').run(args[1], emptyPlayfield, 1, sender.id, mentionedJidList[0])
                }
                client.sendText(from, `Der Raum mit dem Namen ${args[1]} wurde erstellt.`)
            } catch (err) {
                console.log(err)
                client.sendText(from, "Entweder befindet sich deine Markierte Person bereits in einer Runde, der Raumname war bereits vergeben oder es ist ein neuer Fehler aufgetreten.")
            }
        } else if (args[0] == "join") {
            // #ttt join {Raumname}
            if (status) return client.sendText(from, "Du befindest dich bereits in einer Runde.")
            if (!args[1]) return client.sendText(from, "Bitte gib einen Raumnamen ein zum beitreten.\n_#ttt lobbys_")
            var joinRoom = db.prepare('SELECT player1, player2, roomid, status, playfield FROM tictactoe WHERE roomname = ?').get(args[1])
            console.log(joinRoom)
            if (!joinRoom.roomid) {
                client.sendText(from, "Der Raum existiert nicht. \nBist du dir sicher das er *GENAU* so geschrieben wird?")
            } else if (joinRoom.player2 == null || joinRoom.player2 == undefined || joinRoom.player2 == '') {
                db.prepare('UPDATE tictactoe SET player2 = ? WHERE roomid = ?').run(sender.id, joinRoom.roomid)
                const playfieldIcons = await playTTT(JSON.parse(joinRoom.playfield))
                if (joinRoom.status == 1) {
                    client.sendText(from, `Du bist Erfolgreich dem Raum ${args[1]} beigetreten.\n${playfieldIcons} Dein Gegner ist dran! (❎)\n Du Spielst ⭕!\n\nDu Spielst gegen https://wa.me/${joinRoom.player1.replace('@c.us', '')}`)
                } else {
                    client.sendText(from, `Du bist Erfolgreich dem Raum ${args[1]} beigetreten.\n${playfieldIcons} Du bist dran! (⭕)\n Dein Gegner spielt ❎!\n\nDu Spielst gegen https://wa.me/${joinRoom.player1.replace('@c.us', '')}`)
                }
            } else {
                client.sendText(from, "Dieser Raum hat das Spiel bereits mit jemandem begonnen.")
            }
        } else if (args[0] == 'play' || args[0] == 'set') {
            // #ttt play/set {1-9}
            if (!roomid) return client.sendText(from, "Du befindest dich in keiner Runde")
            if (status.status != playerid) return client.sendText(from, "Du bist nicht am Spielzug.")
            if (!args[1]) return client.sendText(from, "Wähle eine 1 bis 9 wo du deinen Zug machen willst.\n_Oben Links = 1, Unten Rechts = 9_")
            if (playfield[args[1] - 1] != 0) return client.sendText(from, "Hier wurde bereits ein Zug gemacht.\nBitte wähle einen anderen.")
            var newPlayfield = playfield
            if (playerid == 1) {
                newPlayfield[args[1] - 1] = 1
                db.prepare('UPDATE tictactoe SET playfield = ?, status = ? WHERE roomid = ?').run(JSON.stringify(newPlayfield), 2, roomid.roomid)
            } else {
                newPlayfield[args[1] - 1] = 2
                db.prepare('UPDATE tictactoe SET playfield = ?, status = ? WHERE roomid = ?').run(JSON.stringify(newPlayfield), 1, roomid.roomid)
            }
            const showText = await playTTT(newPlayfield)
            if (await checkTTT(newPlayfield, client, from) == true) return client.sendText(from, showText + "Es hat jemand gewonnen!\nGlückwunsch.")
            if (await checkTTT(newPlayfield, client, from) == "tie") return client.sendText(from, showText + "Es gibt ein Unentschieden")
            if (playerid == 1) {
                playericon = '⭕'
            } else {
                playericon = '❎'
            }
            client.sendText(from, showText + `Dein Gegner ist jetzt am Zug (${playericon})`)
        } else if (args[0] == 'surrender' || args[0] == 'aufgeben') {
            // #ttt surrender
            // Zum aufgeben oder beenden wenn keiner beitritt
        } else if (args[0] == 'all' || args[0] == 'lobby' || args[0] == 'lobbys') {
            // #ttt all/lobby
            var openLobbys = db.prepare('SELECT roomname, player1 FROM tictactoe WHERE player2 IS NULL').all()
            console.log(openLobbys)
            var text = '[Offene Spiele]\n\n'
            if (!openLobbys) return client.sendText(from, text + "Es gibt derzeit keine Offenen Lobbys.")
            for (var i = 0; i < openLobbys.length; i++) {
                text = text +
                    `Raumname: *${openLobbys[i].roomname}*
Gegner: https://wa.me/${openLobbys[i].player1.replace('@c.us', '')}\n`
            }
            client.sendText(from, text)
        } else {
            // Infos und Befehle zu #ttt anzeigen
        }
    } else {
        return client.sendText(from, "Hey, du hast das Geheime Spiel 'TicTacToe' gefunden!\n" +
        "Aktuell befindet sich dieses noch in der Entwicklung.\n\n_Bitte habt geduld._")
    }
}

// Verarbeitung Text
async function playTTT(playfield) {
    var _playfieldIcons = ''
    for (var i = 0; i < 9; i++) {
        if (playfield[i] == 0) {
            _playfieldIcons = _playfieldIcons + '🟦'
        } else if (playfield[i] == 1) {
            _playfieldIcons = _playfieldIcons + '❎'
        } else if (playfield[i] == 2) {
            _playfieldIcons = _playfieldIcons + '⭕'
        }
        if (i == 2 || i == 5) {
            _playfieldIcons = _playfieldIcons + '\n'
        } else if (i == 8) {
            _playfieldIcons = _playfieldIcons + '\n\n'
        }
        console.log(playfield[i])
    }
    return _playfieldIcons
}

async function checkTTT(playfield, client, from) {
    if(    ((playfield[0] == playfield[1] && playfield[0] == playfield[2]) && playfield[0] != 0)
        || ((playfield[3] == playfield[4] && playfield[3] == playfield[5]) && playfield[3] != 0)
        || ((playfield[6] == playfield[7] && playfield[6] == playfield[8]) && playfield[6] != 0)
        || ((playfield[0] == playfield[3] && playfield[0] == playfield[6]) && playfield[0] != 0)
        || ((playfield[1] == playfield[4] && playfield[1] == playfield[7]) && playfield[1] != 0)
        || ((playfield[2] == playfield[5] && playfield[2] == playfield[8]) && playfield[2] != 0)
        || ((playfield[0] == playfield[4] && playfield[0] == playfield[8]) && playfield[0] != 0)
        || ((playfield[2] == playfield[4] && playfield[2] == playfield[6]) && playfield[2] != 0)) {
        console.log("win")
        /**
        [
            1, 2, 1, 
            0, 1, 0, 
            1, 2, 2
        ]
         */
        return true;
    } else if(!playfield.includes(0)) {
        console.log("unentschieden")
        return "tie";
    } else {
        console.log("weiter")
        return false;
    }
}

module.exports = {
    ttt
}
/**
Wenn Lobby gestartet beide Anpingen das es beginnt.

 */