const db = require('./db.js');

/**
 * Get user ID from db.
 * @param {string} userId
 * @returns {string}
 */
const getId = async(userId) => {
         const obj = { id: userId, geld: 0}

    if(!await db.containsId('waehrung', userId)){
        await db.add('waehrung', obj);
    }
    return userId;
}

/**
 * Get user level from db.
 * @param {string} userId 
 * @returns {number}
 */
const getGeld = async (userId) => {
    if(await db.containsId('waehrung', userId)){
        var elem = await db.getId('waehrung', userId);
        if(typeof elem !== typeof undefined){
            return elem.geld;
        }
    }else{
        getId(userId);
    }
    return 0;
}

/**
 * Add user level to db.
 * @param {string} userId 
 * @param {number} amount
 */
const addGeld = async (userId, amount) => {
    if(await db.containsId('waehrung', userId)){
        await db.updateGeldId('geld', userId, amount);
    }else{
        await getId(userId);
        await db.updateGeldId('geld', userId, amount);
    }
}

/**
 * Add user level to db.
 * @param {string} userId 
 * @param {number} amount
 */
 const setGeld = async (userId, amount) => {
    if(await db.containsId('waehrung', userId)){
        await db.setGeld(userId, amount);
    }else{
        await getId(userId);
        await db.setGeld(userId, amount);
    }
}


/**
 * Get user rank.
 * @param {string} userId 
 * @returns {number}
 */
const getGeldRank = async (userId) => {
    return await db.getGeldRank(userId);
}

module.exports = {
    getGeld,
    addGeld,
    setGeld,
    getGeldRank
}