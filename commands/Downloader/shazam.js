const apikey = '28a18b68f0msh0f11576a292d903p105e7ajsn68a907bd1e54'
const wa = require('@open-wa/wa-automate');
const { exec } = require("child_process");
const mime = require('mime-types');
const axios = require("axios");
const fs = require('fs');

async function shazam(bocchi, message) {
  if (message.quotedMsg) {
    if (message.quotedMsgObj.mimetype && message.quotedMsgObj.type == 'ptt' || message.quotedMsgObj.type == 'audio') {
      const filename = `wa_voice.ogg`;

      const mediaData = await wa.decryptMedia(message.quotedMsgObj);
      fs.writeFile(filename, mediaData, function (err) {
        if (err) {
          return console.log(err);
        }

        exec("ffmpeg -y -i wa_voice.ogg -ar 44100 -ac 1 -acodec pcm_s16le -aframes 300 output.wav", (error, stdout, stderr) => {
          if (error) {
            bocchi.reply(message.from, 'F�r diese Audio konnte kein Treffer gefunden werden. \nEntweder ist sie undeutlich oder die Datei kann nicht bearbeitet werden. \nFalls es eine Audio als Datei war, probiere es bitte nochmal mit einer Sprachnachricht wenn m�glich.')
            return;
          }
          const contents = fs.readFileSync('output.wav', { encoding: 'base64' });

          var options = {
            method: 'POST',
            url: 'https://shazam.p.rapidapi.com/songs/v2/detect',
            params: { timezone: 'America/Chicago', locale: 'en-US' },
            headers: {
              'content-type': 'text/plain',
              'x-rapidapi-host': 'shazam.p.rapidapi.com',
              'x-rapidapi-key': apikey
            },
            data: contents
          };

          axios.request(options).then(function (response) {
            if (response.data.matches && response.data.track) {
              bocchi.reply(message.from, `[T0G3-SHAZAM]
*? Song gefunden! ?*
${response.data.track.title} von ${response.data.track.subtitle}
${response.data.track.url}`, message.id)
            } else {
              bocchi.reply(message.from, "[T0G3-SHAZAM]\n?? - Es konnte kein Song gefunden werden.", message.id)
            }
          }).catch(function (error) {
            console.error(error);
          });
        });
      });
    } else {
      bocchi.reply(message.from, 'Bitte markiere eine *Sprachnachricht* oder eine *Audio* um Shazam nutzen zu können.', message.id)
    }
  } else {
    bocchi.reply(message.from, 'Bitte markiere eine Sprachnachricht oder eine Audio um Shazam nutzen zu können.', message.id)
  }
}

module.exports = {
  shazam
}