async function ytdl(a, b, eng) {
    const youtubedl = require('youtube-dl-exec')
    const exec = require('await-exec')

    var { getRang } = a.importFresh('../../lib/rang.js')
    var isTeam = await getRang('isTeam', a.sender.id, a.db)

    if (!isTeam) return b.sendText(a.from, 'Der Befehl ist erst bei Bocchi V2 verfügbar')
    //if (a.isGroupMsg) return await b.reply(a.from, eng.pcOnly(), a.id)
    if (a.ar.length > 1) {
        await b.sendText(a.from, `「 YOUTUBE DOWNLOAD 」\nBitte gebe *einen* Link ein im Format: youtube.com oder youtu.be`)
    } else if (a.q == 'music.youtube.com' || a.q == 'youtube.com' || a.q == 'youtu.be' || a.q === undefined || a.q == 'undefined') {
        await b.sendText(a.from, `Wir haben hier einen Spaßvogel, das ist kein Gültiger Video Link!\nSo sieht einer aus\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ`)
    } else if (a.q.includes('/shorts/')) {
        await b.sendText(a.from, `Youtube Shorts wird derzeit noch nicht unterstützt.`)
    } else if (a.q.includes('&list=')) {
        await b.sendText(a.from, `Eine Playlist Herunterladen wird nie bei uns möglich sein.`)
    } else {
        //https://www.youtube.com/watch?v=5EC61Bu50f0&list=RD5EC61Bu50f0&start_radio=1
        //youtubedl(`${a.q.substring(0, a.q.indexOf('&'))}`, {
            youtubedl(`${a.q}`, {
            dumpSingleJson: true,
            noWarnings: true,
            noCallHome: true,
            noCheckCertificate: true,
            preferFreeFormats: true,
            youtubeSkipDashManifest: true,
            referer: 'https://www.youtube.com/'
        })
            .then(async (data) => {
                if (data.duration >= '600') return await b.sendText(a.from, `「 YOUTUBE DOWNLOAD 」\nVideos mit einer Länge von mehr als 10 Minuten werden nicht bearbeitet`)
                /*
                * Videolänge berechnen
                */
                var minutes = Math.floor(data.duration / 60);
                var seconds = data.duration - minutes * 60;
                var hours = Math.floor(data.duration / 3600);
                // await b.download(data.thumbnail) 
                if(data.album == undefined || data.album == 'undefined' || data.creator == undefined || data.creator == 'undefined') {
                    await b.sendImage(a.from, await b.download(data.thumbnail), '', `
「 YOUTUBE DOWNLOAD 」
_Bitte warte einen Moment._
_Das kann je nach Internetgeschwindigkeit vom Bot mehr als 2min dauern_

*Titel:* ${data.title}
*Channel:* ${data.channel}
*Channel Link:* ${data.uploader_url}
*Klicks:* ${data.view_count.toLocaleString().replace(',', '.')}
*Länge:* ${hours}h:${minutes}m:${seconds}s
`)//*Beschreibung*: ${data.description}     *Auflösung:* ${data.width} x ${data.height}

                } else {
                    await b.sendImage(a.from, await b.download(data.thumbnail), '', `
「 YOUTUBE DOWNLOAD 」
_Bitte warte einen Moment._
_Das kann je nach Internetgeschwindigkeit vom Bot mehr als 2min dauern_

*Titel:* ${data.title}
*Künstler:* ${data.creator}
*Album:* ${data.album}
*Channel:* ${data.channel}
*Channel Link:* ${data.uploader_url}
*Klicks:* ${data.view_count.toLocaleString().replace(',', '.')}
*Länge:* ${hours}h:${minutes}m:${seconds}s
                        `)//*Beschreibung*: ${data.description}     *Auflösung:* ${data.width} x ${data.height}
                    
                }
            })
        await exec(`yt-dlp --extract-audio --audio-format mp3 --output "./temp/yt/yt-dlp_${a.sender.id}.%(ext)s" -ciwv "${a.q}"`, { log: true })
        await b.sendFile(a.from, `./temp/yt/yt-dlp_${a.sender.id}.mp3`)
            .then(async => {
                a.fs.unlinkSync(`./temp/yt/yt-dlp_${a.sender.id}.mp3`)
            })
    }

} 
async function y(a, b ,eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)

    if (!isOwner) return b.sendText(a.from, eng.cmdNotFound())

    youtubedl(`${a.q}`, {
        dumpSingleJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true,
        referer: 'https://www.youtube.com/'
    })
        .then(async (data) => {

            // console.log(data.formats[0].format)
            // console.log(data.formats[1].format)
            // console.log(data.formats[2].format)
            // console.log(data.formats[3].format)
            // console.log(data.formats[4].format)
            // console.log(data.formats[5].format)
            b.sendText(a.from, '' + data.formats[16].url)
            var url = data.formats[16].url
            b.sendFileFromUrl(a.from, url, 'video.mp4')
            b.sendText(a.from, 'erledigt')
            // await b.download(data.formats[16].url).then(function (response) {
            //     response.data.pipe(fs.createWriteStream("./lol.mp4"));
            // });
            // console.log('HERUNTERGELADEN')

        })

}
module.exports = {
    ytdl,
    y
    }
