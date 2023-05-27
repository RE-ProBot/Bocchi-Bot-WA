const { fetchJson } = require('../tools/fetcher')
const ph = require('@justalk/pornhub-api')
const config = require('../config.json')

/**
 * Get random lewd images from given subreddits.
 * @returns {Object}
 */
const randomLewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'furry', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
    console.log(`Searching lewd from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random lewd images from given subreddits.
 * @returns {Object}
 */

const randomYaoi = () => new Promise((resolve, reject) => {
    const tag = ['yaoi', 'yaoimemes']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
    console.log(`Searching yaoi from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})



/**
 * Get random lewd images from given subreddits.
 * @returns {Object}
 */

const randomYuri = () => new Promise((resolve, reject) => {
    const tag = ['yuri', 'yurimemes']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
    console.log(`Searching yuri from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get armpits pict.
 * @returns {Object}
 */
const armpits = () => new Promise((resolve, reject) => {
    console.log('Searching for armpits...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get feets pict.
 * @returns {Object}
 */
const feets = () => new Promise((resolve, reject) => {
    console.log('Searching for feets...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get thighs pict.
 * @returns {Object}
 */
const thighs = () => new Promise((resolve, reject) => {
    console.log('Searching for thighs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ass pict.
 * @returns {Object}
 */
const ass = () => new Promise((resolve, reject) => {
    console.log('Searching for ass...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get boobs pict.
 * @returns {Object}
 */
const boobs = () => new Promise((resolve, reject) => {
    console.log('Searching for boobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get belly pict.
 * @returns {Object}
 */
const belly = () => new Promise((resolve, reject) => {
    console.log('Searching for belly...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animemidriff')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get sideboobs pict.
 * @returns {Object}
 */
const sideboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for sideboobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ahegao pict.
 * @returns {Object}
 */
const ahegao = () => new Promise((resolve, reject) => {
    console.log('Searching for ahegao...')
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Pornhub metadata from URL.
 * @param {String} url 
 * @returns {Object}
 */
const phDl = (url) => new Promise((resolve, reject) => {
    console.log(`Get Pornhub metadata from ${url}`)
    ph.page(url, ['title', 'download_urls', 'thumbnail_url'])
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get XXX video from URL.
 * @param {String} url 
 * @returns {Object}
 */
const xxx = (url) => new Promise((resolve, reject) => {
    console.log(`Get XXX video from ${url}`)
    fetchJson(`https://api.vhtear.com/xxxdownload?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random cersex.
 * @returns {Object}
 */
const cersex = () => new Promise((resolve, reject) => {
    console.log('Get random cersex...')
    fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

// Premium version

/**
 * Get lewds.
 * @returns {Object}
 */
const mlewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'furry', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
    console.log(`Searching lewd from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/5`) // Silakan atur jumlahnya
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


/**
 * Get armpits pict.
 * @returns {Object}
 */
const marmpits = () => new Promise((resolve, reject) => {
    console.log('Searching for armpits...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get feets pict.
 * @returns {Object}
 */
const mfeets = () => new Promise((resolve, reject) => {
    console.log('Searching for feets...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get thighs pict.
 * @returns {Object}
 */
const mthighs = () => new Promise((resolve, reject) => {
    console.log('Searching for thighs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ass pict.
 * @returns {Object}
 */
const mass = () => new Promise((resolve, reject) => {
    console.log('Searching for ass...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get boobs pict.
 * @returns {Object}
 */
const mboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for boobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get belly pict.
 * @returns {Object}
 */
const mbelly = () => new Promise((resolve, reject) => {
    fetchJson('https://meme-api.herokuapp.com/gimme/animemidriff/15')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get sideboobs pict.
 * @returns {Object}
 */
const msideboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for sideboobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ahegao pict.
 * @returns {Object}
 */
const mahegao = () => new Promise((resolve, reject) => {
    console.log('Searching for ahegao...')
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao/5')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    randomLewd,
    randomYaoi,
    randomYuri,
    armpits,
    feets,
    thighs,
    ass,
    boobs,
    belly,
    sideboobs,
    ahegao,
    phDl,
    xxx,
    cersex,
    mlewd,
    mahegao,
    marmpits,
    mass,
    mbelly,
    mboobs,
    mfeets,
    msideboobs,
    mthighs
}
