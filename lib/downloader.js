const { fetchJson } = require('../tools/fetcher')
const { twitter } = require('video-url-link')
const { promisify } = require('util')
const config = require('../config.json')
const twtGetInfo = promisify(twitter.getInfo)

/**
 * Get Instagram media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const insta = (url) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${url}`)
    fetchJson(`https://api.vhtear.com/instadl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get TikTok video from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tik = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok media from ${url}`)
    fetchJson(`https://api.vhtear.com/tiktokdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Facebook video from URL.
 * @param {string} url
 * @returns {Promise<object>} 
 */
const fb = (url) => new Promise((resolve, reject) => {
    console.log(`Get Facebook media from ${url}`)
    fetchJson(`https://api.vhtear.com/fbdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


/**
 * Get Twitter media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tweet = (url) => new Promise((resolve, reject) => {
    console.log(`Get Twitter media from ${url}`)
    twtGetInfo(url, {}, (error, info) => {
        if (error) {
            reject(error)
        } else {
            resolve(info)
        }
    })
})

/**
 * Get TikTok video with no WM.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tikNoWm = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok with no WM from ${url}`)
    fetchJson(`https://videfikri.com/api/tiktok/?url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})



module.exports = {
    fb,
    tik,
    insta,
    tweet,
    tikNoWm,
}
