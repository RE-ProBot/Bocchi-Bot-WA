const { fetchJson, fetchBase64 } = require('../tools/fetcher')
/* 
bonehurtingjuice

CommunismMemes
crappyoffbrands
csgo
CSGOmemes
dankmemes
deepfriedmemes
GlobalOffensive
GlobalOffensiveMemes
gtamemes
historymemes


MemeEconomy
memes
MinecraftMemes
nukedmemes
okbuddyretard
OnlyWholesomeMemes
shitpostcrusaders
surrealmemes
TechnologyPorn
teenagers
terriblefacebookmemes
CSGOMemeshq
WackyTicTacs
wholesomeanimemes
wholesomememes
dogelore
 */

/**
 * Get meme from random subreddit
 *
 * @return  {Promise} Return meme from dankmemes, wholesomeanimemes, wholesomememes, AdviceAnimals, MemeEconomy, memes, terriblefacebookmemes, teenagers, historymemes
 */

 const cat = () => new Promise((resolve, reject) => {
    const tag = ['catpictures', 'catsareliquid', 'IfIFitsISits', 'ifitfits', 'catReddit', 'CatsStandingUp', 'CatsInSinks', 'CatsInBusinessAttire', 'catsonglass', 'catloaf', 'tuckedinkitties', 'Blep', 'Cats', 'Floof', 'MEOW_IRL', 'XXcatcirclesXX', 'CatHighFive', 'StuffOnCats', 'lolcats', 'catsvstechnology', 'MildlyStartledCats']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
//    console.log(`Searching memes from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/50`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})
const dog = () => new Promise((resolve, reject) => {
    const tag = ['rarepuppers', 'Zoomies', 'dogswithjobs', 'barkour', 'WhatsWrongWithYourDog', 'dogpictures', 'corgi', 'WiggleButts', 'DogShowerThoughts', 'blop', 'PuppySmiles', 'shiba']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
//    console.log(`Searching memes from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/50`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})
const shittycars = () => new Promise((resolve, reject) => {
    const tag = ['ShittyCarMod', 'Shitty_Car_Mods', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', ]
    const randTag = tag[Math.floor(Math.random() * tag.length)]
//    console.log(`Searching memes from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/50`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})
const carporn = () => new Promise((resolve, reject) => {
    const tag = ['carporn']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
//    console.log(`Searching memes from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/50`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})
const randommeme = () => new Promise((resolve, reject) => {
    const tag = ['gtamemes', 'MinecraftMemes', 'dankmemes', 'wholesomeanimemes', 'wholesomememes', 'AdviceAnimals', 'MemeEconomy', 'memes', 'terriblefacebookmemes', 'teenagers', 'historymemes', 'okbuddyretard', 'nukedmemes']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
//    console.log(`Searching memes from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/50`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})



module.exports = {
    cat,
    dog,
    shittycars,
    carporn,
    randommeme
}
