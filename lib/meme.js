const { fetchJson, fetchBase64 } = require('../tools/fetcher')

/**
 * Get meme from random subreddit
 *
 * @return  {Promise} Return meme from dankmemes, wholesomeanimemes, wholesomememes, AdviceAnimals, MemeEconomy, memes, terriblefacebookmemes, teenagers, historymemes
 */

 const randomMeme = () => new Promise((resolve, reject) => {
    const tag = ['gtamemes', 'MinecraftMemes', 'dankmemes', 'wholesomeanimemes', 'wholesomememes', 'AdviceAnimals', 'MemeEconomy', 'memes', 'terriblefacebookmemes', 'teenagers', 'historymemes', 'okbuddyretard', 'nukedmemes']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
  //  console.log(`Searching memes from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})

const randomMultiMeme = () => new Promise((resolve, reject) => {
    const tag = ['gtamemes', 'MinecraftMemes', 'dankmemes', 'wholesomeanimemes', 'wholesomememes', 'AdviceAnimals', 'MemeEconomy', 'memes', 'terriblefacebookmemes', 'teenagers', 'historymemes', 'okbuddyretard', 'nukedmemes']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
//    console.log(`Searching memes from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/5`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})

module.exports = {
    randomMeme,
    randomMultiMeme
}
