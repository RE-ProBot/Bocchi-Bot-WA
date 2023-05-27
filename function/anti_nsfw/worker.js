//----------------------------------//
///// VenoX Gaming & Fun 2022 © ///////
//////By Solid_Snake & VnX RL Crew////
////www.venox-international.com////////
//----------------------------------//
const decryptMedia = require('@open-wa/wa-automate').decryptMedia;
const nsfwjs = require('nsfwjs');
const tf = require('@tensorflow/tfjs');
const jpeg = require('jpeg-js');
const parentPort = require('worker_threads').parentPort;
let _model;
setTimeout(async() => {
    await tf.ready();
    _model = await nsfwjs.load();
}, 500);

//tf.loadLayersModel('http://127.0.0.1:8080/');

//const _model: tf.GraphModel = await tf.loadGraphModel('http://127.0.0.1:8080/');


//const _model: nsfwjs.NSFWJS = await nsfwjs.load('http://127.0.0.1:8080/', { type: 'graph' });

function imageToTensor(rawImageData) {
    const { width, height, data } = jpeg.decode(rawImageData);
    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0; // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
        buffer[i] = data[offset];
        buffer[i + 1] = data[offset + 1];
        buffer[i + 2] = data[offset + 2];
        offset += 4;
    }
    return tf.tensor3d(buffer, [height, width, 3]);
}

async function checkIfMediaIsNsfw(msg) {
    try {
        decryptMedia(msg).then(mediaData => {
            const test = imageToTensor(mediaData);

            _model.classify(test).then(result => {
                //let text = '*Haram - Checker [DEBUG] :*';
                for (const entry of result) {
                    const resultNumber = entry.probability > 1 ? 100 : Math.round(entry.probability * 100);
                    //text += '\n*' + entry.className + ' :* ' + resultNumber + ' %';
                    if (entry.className == 'Porn' && resultNumber > 75) 
                        return parentPort?.postMessage({ key: 'NSFW_Ban', value: [msg, 'ANTI_GROUP_PORN_' + resultNumber] });
                    else if (entry.className == 'Hentai' && resultNumber > 65)
                        return parentPort?.postMessage({ key: 'NSFW_Ban', value: [msg, 'ANTI_GROUP_HENTAI_' + resultNumber] });

                    //text += '\n' + entry.className + ' : ' + (entry.probability * 100) / 100 + ' %';
                }
                //console.log(text);
                //SOVIET.reply(msg.chatId, text, msg.id);
                //console.log(result);
            });
        });
    } catch (exce) {
        console.log(exce);
    }
}

parentPort?.on('message', (message) => {
    if (message.key != 'NSFW_Check') return console.log('wrong event name2 ' + message.key);
    checkIfMediaIsNsfw(message.value);
    console.log('Received NSFW Check :)');

    //parentPort?.postMessage({ pong: message });
});
