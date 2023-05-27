const db = require('./db')

/**
 * Add user daily limit.
 * @param {string} userId 
 * @param {string} dir 
 * @param {object} _dir 
 */
const addLimit = async (typ, userId) => {
    const obj = {typ: typ, id: userId, time: Date.now() }
    await db.add('timer', obj);
}


module.exports = {
    addLimit,
}