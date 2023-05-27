const Worker = require('worker_threads').Worker;
const nsfwWorker = new Worker('./commands/bocchi/anti_nsfw/worker.js');
let botNumber;

// Verschoben zur Message.js aufgrund mehrerer Bots.
// Dies ist ein Info Text, damit ihr es besser irgendwann schreibt :D 
// Grüße : Kuroosh | Venox Projektleitung. // Grüße: T0g3pii - Du Hurensohn
/* 
nsfwWorker.on('message', (message) => {
    switch (message.key) {
        case 'NSFW_Ban':
            console.log(message.value[0], message.value[1], "BOTCONTACT", message.value[2]);

            // To DO : Kick Person.
            //return banPerson(message.value[0], message.value[1], BOTCONTACT, message.value[2]);
        default:
            return console.log('event not found : ' + message.key);
    }
});
*/
async function checkIfMediaIsNsfw(bocchi, msg){
    if(!botNumber) botNumber = await bocchi.getHostNumber() + '@c.us';
    const groupAdmins = await bocchi.getGroupAdmins(msg.chatId);
    if(!groupAdmins.includes(botNumber)) return;
    return nsfwWorker.postMessage({ key: 'NSFW_Check', value: msg });
}

module.exports = {
    nsfwWorker,
    checkIfMediaIsNsfw,
};