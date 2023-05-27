const fs = require('fs-extra')
const db = require('./db')
const helper = require('./helper')

/**
 * Add AFK user.
 * @param {string} userId 
 * @param {string} time 
 * @param {string} reason 
 */
const addAfkUser = async (userId, time, reason) => {
    const obj = { id: userId, time: time, reason: reason }
    // _dir.push(obj)
    // fs.writeFileSync('./database/user/afk.json', JSON.stringify(_dir))
    return await db.add('afk', obj)
}

/**
 * Check if user is on AFK state.
 * @param {string} userId 
 * @returns {boolean}
 */
const checkAfkUser = async (userId) => {
    // let status = false
    // Object.keys(_dir).forEach((i) => {
    //     if (_dir[i].id === userId) {
    //         status = true
    //     }
    // })
    // return status
    return await db.containsId('afk', userId)
}

/**
 * Get user AFK reason.
 * @param {string} userId 
 * @returns {string}
 */
const getAfkReason = async (userId) => {
    // let position = null
    // Object.keys(_dir).forEach((i) => {
    //     if (_dir[i].id === userId) {
    //         position = i
    //     }
    // })
    // if (position !== null) {
    //     return _dir[position].reason
    // }

    var i = await db.getId('afk', userId)
    if(typeof i === typeof undefined){
        return '';
    }
    return i.reason
}

/**
 * Get user AFK time.
 * @param {string} userId 
 * @returns {string}
 */
const getAfkTime = async (userId) => {
    // let position = null
    // Object.keys(_dir).forEach((i) => {
    //     if (_dir[i].id === userId) {
    //         position = i
    //     }
    // })
    // if (position !== null) {
    //     return _dir[position].time
    // }
    
    var i = await db.getId('afk', userId)
    if(typeof i === typeof undefined){
        return '';
    }
    return helper.getFormattedDate(i.time);
}

/**
 * Get user AFK ID.
 * @param {string} userId 
 * @returns {string}
 */
const getAfkId = async (userId) => {
    // let position = null
    // Object.keys(_dir).forEach((i) => {
    //     if (_dir[i].id === userId) {
    //         position = i
    //     }
    // })
    // if (position !== null) {
    //     return _dir[position].id
    // }

    var i = await db.getId('afk', userId)
    if(typeof i === typeof undefined){
        return '';
    }
    return i.id
}

module.exports = {
    addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId
}