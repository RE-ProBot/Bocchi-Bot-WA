//             case prefix + 'ttp':
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 const ttp2t = body.slice(5)
//                 await bocchi.reply(from, eng.wait(), id)
//                 const lttp2 = ["Orange", "White", "Green", "Black", "Purple", "Red", "Yellow", "Blue", "Navy", "Grey", "Magenta", "Brown", "Gold"]
//                 const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
//                 await bocchi.sendStickerfromUrl(from, `https://api.vhtear.com/textmaker?text=${ttp2t}&warna=${rttp2}&apikey=${config.vhtear}`)
//                 break
//             case prefix + 'lovemessage':
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 const lovemsg = body.slice(12)
//                 await bocchi.reply(from, eng.wait(), id)
//                 if (lovemsg.length > 10) return bocchi.reply(from, 'Maximal 10 Zeichen.', id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/lovemessagetext?text=${lovemsg}&apikey=${config.vhtear}`, 'lovemsg.jpg', '', id)
//                 break
//             case prefix + 'romance':
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 const rmnc = body.slice(9)
//                 await bocchi.reply(from, eng.wait(), id)
//                 if (rmnc.length > 10) return bocchi.reply(from, 'Maximal 10 Zeichen.', id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/romancetext?text=${rmnc}&apikey=${config.vhtear}`, 'romance.jpg', '', id)
//                 break
//             case prefix + 'party':
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 const prty = body.slice(7)
//                 await bocchi.reply(from, eng.wait(), id)
//                 if (prty.length > 10) return bocchi.reply(from, 'Maximal 10 Zeichen.', id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/partytext?text=${prty}&apikey=${config.vhtear}`, 'party.jpg', '', id)
//                 break
//             case prefix + 'silk':
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 const slkz = body.slice(5)
//                 await bocchi.reply(from, eng.wait(), id)
//                 if (slkz.length > 10) return bocchi.reply(from, 'Maximal 10 Zeichen.', id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/silktext?text=${slkz}&apikey=${config.vhtear}`, 'silk.jpg', '', id)
//                 break
//             case prefix + 'thunder':
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 const thndr = body.slice(9)
//                 await bocchi.reply(from, eng.wait(), id)
//                 if (thndr.length > 10) return bocchi.reply(from, 'Maximal 10 Zeichen.', id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/thundertext?text=${thndr}&apikey=${config.vhtear}`, 'thndr.jpg', '', id)
//                 break

//                         #menu 1.1
//             case prefix + 'twitter':
//                 if (!isUrl(url) && !url.includes('twitter.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 downloader.tweet(url)
//                     .then(async (data) => {
//                         if (data.type === 'video') {
//                             const content = data.variants.filter((x) => x.content_type !== 'application/x-mpegURL').sort((a, b) => b.bitrate - a.bitrate)
//                             const result = await misc.shortener(content[0].url)
//                             await bocchi.sendFileFromUrl(from, content[0].url, 'video.mp4', `Link HD: ${result}`, id)
//                                 .catch(async (err) => {
//                                     console.error(err)
//                                     await bocchi.reply(from, 'Error!', id)
//                                 })
//                         } else if (data.type === 'photo') {
//                             for (let i = 0; i < data.variants.length; i++) {
//                                 await bocchi.sendFileFromUrl(from, data.variants[i], data.variants[i].split('/media/')[1], '', id)
//                                     .catch(async (err) => {
//                                         console.error(err)
//                                         await bocchi.reply(from, 'Error!', id)
//                                     })
//                             }
//                         }
//                     })
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Error!', id)
//                     })
//                 break
//             // #menu 1.2
//             case prefix + 'igdl': // by: VideFrelan
//             case prefix + 'instadl':
//                 if (!isUrl(url) && !url.includes('instagram.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 downloader.insta(url)
//                     .then(async ({ result }) => {
//                         for (let i = 0; i < result.post.length; i++) {
//                             if (result.post[i].type === 'image') {
//                                 await bocchi.sendFileFromUrl(from, result.post[i].urlDownload, 'igpostdl.jpg', `*...:* *Instagram Downloader* *:...*\n\nUsername: ${result.owner_username}\nCaption: ${result.caption}`, id)
//                             } else if (result.post[i].type === 'video') {
//                                 await bocchi.sendFileFromUrl(from, result.post[i].urlDownload, 'igpostdl.mp4', `*...:* *Instagram Downloader* *:...*\n\nUsername: ${result.owner_username}\nCaption: ${result.caption}`, id)
//                             }
//                         }
//                     })
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Error!', id)
//                     })
//                 break
//             // #menu 1.3
//             case prefix + 'instastory': // By: VideFrelan
//             case prefix + 'igstory':
//                 if (!q) return bocchi.reply(from, eng.wrongFormat(), id)

//                 await bocchi.reply(from, eng.wait(), id)
//                 misc.its(q)
//                     .then(async ({ result }) => {
//                         for (let i = 0; i < result.story.itemlist.length; i++) {
//                             const { urlDownload } = result.story.itemlist[i]
//                             await bocchi.sendFileFromUrl(from, urlDownload, '', 'By: VideFrelan', id)
//                         }
//                     })
//                 break
//             // #menu 1.4
//             case prefix + 'facebook':
//             case prefix + 'fb':
//                 if (!isUrl(url) && !url.includes('facebook.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 downloader.fb(url)
//                     .then(async ({ result }) => {
//                         await bocchi.sendFileFromUrl(from, result.VideoUrl, 'videofb.mp4', '', id)
//                     })
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Error!', id)
//                     })
//                 break
//             #menu 1.5

//             /*      case prefix + 'tiktoknowm': // by: VideFrelan mit vhtear ersetzen
// case prefix + 'tktnowm':
// if (!isUrl(url) && !url.includes('tiktok.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
// await bocchi.reply(from, eng.wait(), id)
// downloader.tikNoWm(url)
// .then(async ({ result }) => {
//  await bocchi.sendFileFromUrl(from, result.thumb, 'TiktokNoWM.jpg', `➸ *Username*: ${result.username}\n➸ *Caption*: ${result.caption}\n➸ *Uploaded on*: ${result.uploaded_on}\n\nSedang dikirim, sabar ya...`, id)
//  const responses = await fetch(result.link)
//  const buffer = await responses.buffer()
//  fs.writeFileSync(`./temp/${sender.id}_TikTokNoWm.mp4`, buffer)
//  await bocchi.sendFile(from, `./temp/${sender.id}_TikTokNoWm.mp4`, `${sender.id}_TikTokNoWm.mp4`, '', id)
//  fs.unlinkSync(`./temp/${sender.id}_TikTokNoWm.mp4`)
// })
// .catch(async (err) => {
//  console.error(err)
//  await bocchi.reply(from, 'Error!', id)
// })
// break */
//             # menu 1.5.1
//             case prefix + 'tiktok':
//                 if (!isUrl(url) && !url.includes('tiktok.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 downloader.tik(url)
//                     .then(async ({ result }) => {
//                         await bocchi.sendFileFromUrl(from, result.video, 'TikTok.mp4', '', id)
//                     })
//                     .catch(async (err) => {
//                         console.log(err)
//                         await bocchi.reply(from, 'Error!', id)
//                     })
//                 break
//             //#menu 1.6
//             case prefix + 'play':
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (q.includes('youtu.be') || q.includes('youtube.com')) return await bocchi.reply(from, `Bitte keine Links, gebe den Titel des Videos/Songs ein die der Bot senden soll\nDanke`, id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 misc.ytPlay(q)
//                     .then(async ({ result }) => {
//                         if (Number(result.size.split(' MB')[0]) >= 10.0) return bocchi.sendFileFromUrl(from, result.image, `${result.title}.jpg`, `Judul: ${result.title}\nSize: *${result.size}*\n\nFehler, Das Video überschreitet *10MB*!`, id)
//                         await bocchi.sendFileFromUrl(from, result.image, `${result.title}.jpg`, eng.ytPlay(result), id)
//                         const responses = await fetch(result.mp3)
//                         const buffer = await responses.buffer()
//                         await fs.writeFile(`./temp/ytplay_${sender.id}.mp3`, buffer).then((File) => {
//                             bocchi.sendFile(from, `./temp/ytplay_${sender.id}.mp3`, `ytplay_${sender.id}`, id)
//                         })
//                         fs.unlinkSync(`./temp/ytplay_${sender.id}.mp3`)
//                     })
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Error!  ' + err + '', id)
//                     })
//                 break
//             // #menu 1.7
//             case prefix + 'playv': // Alvio Adji Januar
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 //api key = JlKi8jsGAUpxIeYZzONy6coq12E
//                 //key gesponsert von: +49 1573 9479166 aka ī.am/𓆩ƬӨGΣPII𓆪 {•~•}
//                 const getvid = await axios.get(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=JlKi8jsGAUpxIeYZzONy6coq12E&q=${q}`)
//                 if (getvid.data.status === false) {
//                     await bocchi.reply(from, getvid.data.message, id)
//                 } else if (Number(getvid.data.result.size.split('MB')[0]) >= 25.00) {
//                     await bocchi.reply(from, 'Das Video darf nicht größer als 25MB sein!', id)
//                 } else {
//                     await bocchi.sendFileFromUrl(from, getvid.data.result.thumb, 'thumb.jpg', `Title: ${getvid.data.result.title}\n\n───────────⚪───────────\n(っ◔◡◔)っ\n───────────⚪───────────\n➥Size: ${getvid.data.result.size}\n➥Type: Mp4\n➥Link Download: ${getvid.data.result.link}\n\n*Bitte warte einen Moment, der Auftrag wird bearbeitet*`, id)
//                     await bocchi.sendFileFromUrl(from, getvid.data.result.link, 'play.mp4', '', id)
//                 }
//                 break

//                         case prefix + 'neujahr':
//                 const randompremi = ['7d', '8d', '9d', '10d', '11d', '12d', '13d', '14d', '15d', '16d', '17d', '18d', '19d', '20d', '21d']
//                 const adventskalender1 = randompremi[Math.floor(Math.random() * randompremi.length)]
//                 const adventskalender2 = adventskalender1.replace('d', '')

//                 if (ar[0] == 'clear') {
//                     if (!isLeitung) return await bocchi.reply(from, eng.ownerOnly(), id)
//                     try {
//                         await db.cleartableNoCatch('adventskalender')
//                         await bocchi.reply(from, `Erfolgreich geleert!`, id)
//                     } catch (e) {
//                         await bocchi.reply(from, `Adventskalender ist nicht benutzt`, id)//set umfrage
//                     }
//                 } else {
//                     if (isGroupMsg) return await bocchi.reply(from, eng.pcOnly(), id)
//                     if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                     try {
//                         await db.addNoCatch('adventskalender', { 'id': sender.id })
//                         while (true) {
//                             console.log(1)
//                             if (isPremium) {
//                                 //Premium gedönst
//                                 var premiumCheckId1 = sender.id
//                                 if (typeof ar[0] !== typeof undefined) {
//                                     premiumCheckId1 = q.replace(/[ +()-]/g, '').replace(/\D/g, '') + '@c.us'
//                                 }
//                                 const cekExp1 = ms((await premium.getPremiumExpired(premiumCheckId1)).getTime() - new Date().getTime())
//                                 const neuesPremi111 = mathjs.add(cekExp1.days, adventskalender2, 1)
//                                 //Premium Altes Premium Mitteilen
//                                 await bocchi.reply(from, `── *「NEUJAHR 」* ──\n\nDu Hattest Folgendes Premium:\n\n➸ *ID*: ${premiumCheckId1}\n➸ *Premium left*: ${cekExp1.days} day(s) ${cekExp1.hours} hour(s) ${cekExp1.minutes} minute(s)`, id)
//                                 //Premium Entfernen
//                                 await db.removeId('premium', sender.id)
//                                 sleep(2000) //Sicherheitshalber... Weil Datenbank bla bla
//                                 //Premium Vergeben
//                                 await premium.addPremiumUser(sender.id, neuesPremi111 + 'd')
//                                 //Neues Premium Mitteilen
//                                 await bocchi.reply(from, `── *「NEUJAHR 」* ──\n\n➸ *ID*: ${sender.id}\n\nDu erhälst von uns ${adventskalender2}Tage Premium zum start ins neue Jahr!\nDein Premiumstatus kannst du mit *${prefix}premiumcheck* einsehen\n_Du Konntest 7-21 Tage erhalten_`, id)
//                                 break
//                             } else {
//                                 premium.addPremiumUser(sender.id, adventskalender1)
//                                 await bocchi.reply(from, `── *「NEUJAHR 」* ──\n\n➸ *ID*: ${sender.id}\n\nDu erhälst  ${adventskalender2}Tage Premium zum start ins neue Jahr!\nDein Premiumstatus kannst du mit *${prefix}premiumcheck* einsehen\n_Du Konntest bis 7-21 Tage erhalten_`, id)
//                                 break
//                             }
//                         }

//                     } catch (e) {
//                         await bocchi.reply(from, `Du hast bereits dein Geschenk angefordert!`, id)
//                     }
//                 }
//                 break
//             /*
//                         case prefix + 'adventskalender':
//                             const adventskalender = [Math.floor(Math.random() * (1500 - 1 + 1)) + 1]
//                             if (ar[0] == 'clear') {
//                                 if (!isLeitung) return await bocchi.reply(from, eng.ownerOnly(), id)
//                                 try {
//                                     await db.cleartableNoCatch('adventskalender')
//                                     await bocchi.reply(from, `Erfolgreich geleert!`, id)
//                                 } catch (e) {
//                                     await bocchi.reply(from, `Adventskalender ist nicht benutzt`, id)//set umfrage
//                                 }
//                             } else {
//                                 if (isGroupMsg) return await bocchi.reply(from, eng.pcOnly(), id)
//                                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                                 try {
//                                     await db.addNoCatch('adventskalender', { 'id': sender.id })
//                                     await level.addLevelingXp(sender.id, adventskalender)
//                                     await bocchi.reply(from, `Glückwunsch du hast ${adventskalender}xp für den Heutigen Tag erhalten!\nDu kannst jeden Tag den Befehl 1x Ausführen!`, id)

//                                     while (true) {
//                                         const currentLevel = await level.getLevelingLevel(sender.id)
//                                         const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
//                                         const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
//                                         await level.addLevelingXp(sender.id, amountXp)
//                                         if (requiredXp <= await level.getLevelingXp(sender.id)) {
//                                             await level.addLevelingLevel(sender.id, 1)
//                                         } else {
//                                             break;
//                                         }
//                                     }

//                                 } catch (e) {
//                                     await bocchi.reply(from, `Du hast bereits am heutigen Tag den Adventskalender geöffnet!`, id)
//                                 }
//                             }
//                             break
//             */

//                                         case prefix + 'multiyaoi':
//             case prefix + 'multiyuri':
//             case prefix + 'myaoi':
//             case prefix + 'myuri':
//                 if (!isNsfw) return await bocchi.reply(from, eng.notNsfw(), id)
//                 await bocchi.sendText(from, `Gibt es noch nicht, wird eventuell noch eingefügt\nMfg ~Nando`)
//                 break

//                         case prefix + 'ffbanner': // By: VideFrelan API KEY2021
//                 if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (!q.includes('/')) return bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 const teks1ffanjg = q.substring(0, q.indexOf('/') - 1)
//                 const teks2ffanjg = q.substring(q.lastIndexOf('/') + 2)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/bannerff?title=${teks1ffanjg}&text=${teks2ffanjg}&apikey=${config.vhtear}`, id)
//                 break
//             case prefix + 'firemaker': //API KEY2021
//                 if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/fire_maker?text=${q}&apikey=${config.vhtear}`)
//                 break
//             case prefix + 'balloonmaker': //API KEY2021 FEHLERHAFT
//             case prefix + 'blmaker':
//                 if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (!q.includes('/')) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 const namaKiri = q.substring(0, q.indexOf('/') - 1)
//                 const namaKanan = q.substring(q.lastIndexOf('/') + 2)
//                 await bocchi.reply(from, eng.wait(), id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/balloonmaker?text1=${namaKiri}&text2=${namaKanan}&apikey=${config.vhtear}`)
//                 break
//             case prefix + 'sliding': //API KEY2021
//                 if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 await bocchi.sendVideoAsGif(from, `https://api.vhtear.com/slidingtext?text=${q}&apikey=${config.vhtear}`, 'sliding.gif', '', id)
//                 break
//             case prefix + 'galaxy': //API KEY2021
//                 if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/galaxytext?text=${q}&apikey=${config.vhtear}`, `${q}.jpg`, '', id)
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Error!', id)
//                     })
//                 break
//             case prefix + 'write': //API KEY2021
//                 if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/write?text=${q}&apikey=${config.vhtear}`, 'nulis.jpg', '', id)
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Error!', id)
//                     })
//                 break
//             case prefix + 'glitchtext': //API KEY2021 FEHLERHAFT
//                 if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 const teks1 = q.substring(0, q.indexOf('/') - 1)
//                 const teks2 = q.substring(q.lastIndexOf('/') + 2)
//                 await bocchi.reply(from, eng.wait(), id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/glitchtext?text1=${teks1}&text2=${teks2}&apikey=${config.vhtear}`, `glitch.jpg`, '', id)
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Error!', id)
//                     })
//                 break
//             case prefix + 'blackpink': //API KEY2021
//                 if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/blackpinkicon?text=${q}&apikey=${config.vhtear}`, `${q}.jpg`, '', id)
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Error!', id)
//                     })
//                 break
//             case prefix + 'emojisticker': // API KEY2021
//             case prefix + 'emojistiker':
//                 if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (args.length !== 1) return bocchi.reply(from, eng.wrongFormat(), id)
//                 const emoji = emojiUnicode(args[0])
//                 await bocchi.reply(from, eng.wait(), id)
//                 await bocchi.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emoji}&apikey=${config.vhtear}`)
//                     .then(async () => {
//                         await bocchi.reply(from, eng.ok(), id)
//                     })
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Emoji not supported!', id)
//                     })
//                 break
//             case prefix + 'phmaker': //API KEY2021
//                 if (!isOwner) return await bocchi.sendText(from, 'Aus technischen Gründen ist dieser Befehl derzeit nicht möglich')
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!isPremium && !isTeam) return await bocchi.reply(from, eng.notPremium(), id)
//                 if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 const kiri = q.substring(0, q.indexOf('/') - 1)
//                 const kanan = q.substring(q.lastIndexOf('/') + 2)
//                 await bocchi.reply(from, eng.wait(), id)
//                 await bocchi.sendFileFromUrl(from, `https://api.vhtear.com/pornlogo?text1=${kiri}&text2=${kanan}&apikey=${config.vhtear}`, 'ph.jpg', '', id)
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Error!', id)
//                     })
//                 break
//             case prefix + 'ttg':
//                 if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//                 if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
//                 await bocchi.reply(from, eng.wait(), id)
//                 await bocchi.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${config.vhtear}`)
//                     .catch(async (err) => {
//                         console.error(err)
//                         await bocchi.reply(from, 'Error!', id)
//                     })
//                 break


// case prefix + 'kemono':
//     case prefix + 'katzenanime': //29.07.2021
//         if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//         await bocchi.reply(from, eng.wait(), id)
//         await bocchi.sendFileFromUrl(from, (await neko.sfw.kemonomimi()).url, 'kemono.jpg', '', null, null, true)
//             .catch(async (err) => {
//                 console.error(err)
//                 await bocchi.reply(from, 'Error!', id)
//             })
//         break
// case prefix + 'wallpaper':
//     case prefix + 'wp':
//         if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
//         await bocchi.reply(from, eng.wait(), id)
//         await bocchi.sendFileFromUrl(from, (await neko.sfw.wallpaper()).url, 'wallpaper.jpg', '', null, null, true)
//             .catch(async (err) => {
//                 console.error(err)
//                 await bocchi.reply(from, 'Error!', id)
//             })
//         break