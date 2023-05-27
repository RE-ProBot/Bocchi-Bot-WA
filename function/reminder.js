const toMs = require('ms')
const db = require('./db')
const helper = require('./helper')

/**
 * Add reminder to user.
 * @param {string} userId 
 * @param {string} message 
 * @param {number} time 
 */
const addReminder = async (userId, message, time) => {
    const obj = { id: userId, msg: message, time: helper.getFormattedDateDB(Date.now() + toMs(time)) }
    // _dir.push(obj)
    // fs.writeFileSync('./database/user/reminder.json', JSON.stringify(_dir))
    await db.add('reminder', obj)
}

/**
 * Get reminder.
 * @param {string} userId
 */
const getReminderTime = async (userId) => {
    // let position = null
    // Object.keys(_dir).forEach((i) => {
    //     if(_dir[i].id === userId) {
    //         position = i
    //     }
    // })
    // if (position !== null) {
    //     return _dir[position].time
    // }
    var i = await db.getId('reminder', userId)
    if (typeof i === typeof undefined) {
        return '';
    }
    return new Date(i.time + ' GMT+01:00');
}

/**
 * Get reminder message.
 * @param {string} userId 
 * @returns {string}
 */
const getReminderMsg = async (userId) => {
    // let position = null
    // Object.keys(_dir).forEach((i) => {
    //     if (_dir[i].id === userId) {
    //         position = i
    //     }
    // })
    // if (position !== null) {
    //     return _dir[position].msg
    // }
    var i = await db.getId('reminder', userId)
    if (typeof i === typeof undefined) {
        return '';
    }
    return i.msg;
}

// /**
//  * Get position of reminder.
//  * @param {string} userId 
//  * @returns {number}
//  */
// const getReminderPosition = (userId) => {
//     let position = null
//     Object.keys(_dir).forEach((i) => {
//         if (_dir[i].id === userId) {
//             position = i
//         }
//     })
//     return position
// }

module.exports = {
    addReminder,
    getReminderTime,
    getReminderMsg
    // ,getReminderPosition
}