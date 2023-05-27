const fs = require('fs-extra')
const db = require('./db')
const helper = require('./helper')

/**
 * Add user to database.
 * @param {string} userId 
 * @param {string} name 
 * @param {string|number} age 
 * @param {string} time 
 * @param {string} serial
 */
const addRegisteredUser = async (userId, name, age, time, serial) => {
    const obj = { id: userId, name: name, age: age, time: time, serial: serial }
    // _dir.push(obj)
    // fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_dir))
    await db.add('registered', obj);
}

/**
 * Check is user registered.
 * @param {string} userId
 * @returns {boolean}
 */
const checkRegisteredUser = async (userId) => {
    // let status = false
    // Object.keys(_dir).forEach((i) => {
    //     if (_dir[i].id === userId) {
    //         status = true
    //     }
    // })
    // return status
    await db.containsId('registered', userId);
}

// /**
//  * Check is user registered from given serial.
//  * @param {string} serial 
//  * @param {object} _dir 
//  * @returns {boolean}
//  */
// const checkRegisteredUserFromSerial = (serial, _dir) => {
//     let status = false
//     Object.keys(_dir).forEach((i) => {
//         if (_dir[i].serial === serial) {
//             status = true
//         }
//     })
//     return status
// }

/**
 * Get registered user ID.
 * @param {string} userId
 * @returns {string}
 */
const getRegisteredUserId = async (userId) => {
    // let position = null
    // Object.keys(_dir).forEach((i) => {
    //     if (_dir[i].id === userId) {
    //         position = i
    //     }
    // })
    // if (position !== null) {
    //     return _dir[position].id
    // }
    var i = await db.getId('registered', userId)
    if(typeof i === typeof undefined){
        return '';
    }
    return i.id
}

// /**
//  * Check user name from serial.
//  * @param {string} serial 
//  * @param {object} _dir 
//  * @returns {string}
//  */
// const getRegisteredNameFromSerial = (serial, _dir) => {
//     let position = null
//     Object.keys(_dir).forEach((i) => {
//         if (_dir[i].serial === serial) {
//             position = i
//         }
//     })
//     if (position !== null) {
//         return _dir[position].name
//     }
// }

// /**
//  * Check user age from serial.
//  * @param {string} serial 
//  * @param {object} _dir 
//  * @returns {number}
//  */
// const getRegisteredAgeFromSerial = (serial, _dir) => {
//     let position = null
//     Object.keys(_dir).forEach((i) => {
//         if (_dir[i].serial === serial) {
//             position = i
//         }
//     })
//     if (position !== null) {
//         return _dir[position].age
//     }
// }

// /**
//  * Check user time registration from serial.
//  * @param {string} serial 
//  * @param {object} _dir 
//  * @returns {string}
//  */
// const getRegisteredTimeFromSerial = (serial, _dir) => {
//     let position = null
//     Object.keys(_dir).forEach((i) => {
//         if (_dir[i].serial === serial) {
//             position = i
//         }
//     })
//     if (position !== null) {
//         return _dir[position].time
//     }
// }

// /**
//  * Check user ID from serial.
//  * @param {string} serial 
//  * @param {object} _dir 
//  * @returns {string}
//  */
// const getRegisteredIdFromSerial = (serial, _dir) => {
//     let position = null
//     Object.keys(_dir).forEach((i) => {
//         if (_dir[i].serial === serial) {
//             position = i
//         }
//     })
//     if (position !== null) {
//         return _dir[position].id
//     }
// }

// /**
//  * Get random user ID.
//  * @param {object} _dir 
//  * @returns {string}
//  */
// const getRegisteredRandomId = (_dir) => {
//     return _dir[Math.floor(Math.random() * _dir.length)].id
// }

module.exports = {
    addRegisteredUser,
    checkRegisteredUser,
    // checkRegisteredUserFromSerial,
    // getRegisteredNameFromSerial,
    // getRegisteredAgeFromSerial,
    // getRegisteredTimeFromSerial,
    // getRegisteredIdFromSerial,
    // getRegisteredRandomId,
    getRegisteredUserId
}
