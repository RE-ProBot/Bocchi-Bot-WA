const fs = require('fs-extra')
const db = require('./db.js');

/**
 * Get user ID from db.
 * @param {string} userId
 * @returns {string}
 */
const getLevelingId = async(userId) => {
    const obj = { id: userId, xp: 10, level: 1 }
    
    if(!await db.containsId('level', userId)){
        await db.add('level', obj);
    }
    return userId;
} 


/**
 * Get user level from db.
 * @param {string} userId 
 * @returns {number}
 */
const getLevelingLevel = async (userId) => {
    if(await db.containsId('level', userId)){
        var elem = await db.getId('level', userId);
        if(typeof elem !== typeof undefined){
            return elem.level;
        }
    }else{
        getLevelingId(userId);
    }
    return 1;
}

/**
 * Get user XP from db.
 * @param {string} userId
 * @returns {number}
 */
const getLevelingXp = async (userId) => {
    if(await db.containsId('level', userId)){
        var elem = await db.getId('level', userId);
        if(typeof elem !== typeof undefined){
            return elem.xp;
        }
    }else{
        getLevelingId(userId);
    }
    return 0;
}

//SET XP TEST ~Nando 23.08.2021
/**
 * Add user XP to db.
 * @param {string} userId 
 * @param {number} level 
 */
 const setLevel = async (userId, level) => {
    const fetchXp = 5 * Math.pow(level -1, 2) + 50 * (level -1) + 100;
    await db.setLevel(userId, fetchXp, level);
}

/**
 * Add user level to db.
 * @param {string} userId 
 * @param {number} amount
 */
const addLevelingLevel = async (userId, amount) => {
    if(await db.containsId('level', userId)){
        await db.updateLevelId('level', userId, amount);
    }else{
        getLevelingId(userId);
    }
}

/**
 * Add user XP to db.
 * @param {string} userId 
 * @param {number} amount
 */
const addLevelingXp = async(userId, amount) => {
    if(await db.containsId('level', userId)){
        await db.updateLevelId('xp', userId, amount);
    }else{
        getLevelingId(userId);
    }
}

/**
 * Get user rank.
 * @param {string} userId 
 * @returns {number}
 */
const getUserRank = async (userId) => {
    return await db.getUserRank(userId);
}

// Cooldown XP gains to prevent spam
const xpGain = new Set()

/**
 * Check is user exist in set.
 * @param {string} userId 
 * @returns {boolean}
 */
const isGained = (userId) => {
    return !!xpGain.has(userId)
}

/**
 * Add user in set and delete it when it's 1 minute.
 * @param {string} userId 
 */
const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Each minute
}

module.exports = {
    getLevelingId,
    getLevelingLevel,
    getLevelingXp,
    addLevelingLevel,
    addLevelingXp,
    getUserRank,
    isGained,
    addCooldown,
    setLevel
}