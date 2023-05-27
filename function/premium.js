const fs = require('fs-extra')
const toMs = require('ms')
const db = require('./db')
const helper = require('./helper')

/**
 * Add premium user.
 * @param {string} userId 
 * @param {string} expired
 */
const addPremiumUser = async (userId, expired) => {
    const obj = { id: userId, expired: helper.getFormattedDateDB(Date.now() + toMs(expired)) }
    await db.add('premium', obj);
}


/**
 * Get premium user expired.
 * @param {string} userId
 */
const getPremiumExpired = async (userId) => {
    var i = await db.getId('premium', userId)
    if(typeof i === typeof undefined){
        return '';
    }
    return new Date(i.expired + ' GMT+02:00');
}

/**
 * Check if is user premium.
 * @param {string} userId 
 * @returns {boolean}
 */
const checkPremiumUser = async (userId) => {
    return await db.containsId('premium', userId);
}

/**
 * Constantly checking premium.
 */
const expiredCheck = async() => {
}

/**
 * Get all premium user ID.
 * @returns {string[]}
 */
const getAllPremiumUser = async () => {
    return await db.getAsc('premium', 'expired', 50);
}

module.exports = {
    addPremiumUser,
    getPremiumExpired,
    // getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser
}
