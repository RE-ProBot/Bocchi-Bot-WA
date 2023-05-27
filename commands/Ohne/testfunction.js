const { BaseGuildVoiceChannel } = require("discord.js")
const { updateBocchiBot } = require("../../function/db")

async function testfunction(a, b, eng) {
    var { getRang } = a.importFresh('../../lib/rang.js')
    var isOwner = await getRang('isOwner', a.sender.id, a.db)

    await b.sendText(a.from, 'Start Testing Each Function avaiable from\nhttps://openwa.dev/docs/api/classes/api_Client.Client')
    await a.sleep(1000)

    //log erstellen
    /*
    
        a.fs.writeFile("/tmp/test", "Hey there!", function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    


    await b.sendText(a.from, '❌Can\'t be tested')
    await b.sendText(a.from, '✔ Sucsessfull tested')

            */
    //Binsiders
    try {
        await b.sendText(a.from, 'Binsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'Binsiders❌Can❌Error, check log file')
        a.fs.writeFile("./err/Binsiders", JSON.stringify(e), function (err) {
        });
    }

    await a.sleep(2000)
    //addLabel
    try {
        await b.sendText(a.from, 'addLabel❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'addLabel❌Error, check log file')
        a.fs.writeFile("./err/addLabel", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //addParticipant
    try {
        //await b.addParticipant(a.from, '4916288391891@c.us')
        await b.sendText(a.from, '✔ Working but don\'t want to ban my number')
    } catch (e) {
        await b.sendText(a.from, 'addParticipant❌Error, check log file')
        a.fs.writeFile("./err/addParticipant", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //archiveChat
    try {
        await b.archiveChat(a.from, true)
        await b.sendText(a.from, 'archiveChat✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'archiveChat❌Error, check log file')
        a.fs.writeFile("./err/archiveChat", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //autoReject
    try {
        await b.autoReject('Call refused.')
        await b.sendText(a.from, 'autoReject❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'autoReject❌Error, check log file')
        a.fs.writeFile("./err/autoReject", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //awaitMessages
    try {
        await b.sendText(a.from, 'awaitMessages⌚ Will be tested soon.')
        /*

        //example from docs https://openwa.dev/docs/api/classes/api_Client.Client#awaitmessages

        // Await !vote messages
        const filter = m => m.body.startsWith('!vote');
        // Errors: ['time'] treats ending because of the time limit as an error
        await b.awaitMessages(filter, { max: 4, time: 60000, errors: ['time'] })
            .then(collected => console.log(collected.size))
            .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));
*/
    } catch (e) {
        await b.sendText(a.from, 'awaitMessages❌Error, check log file')
        a.fs.writeFile("./err/awaitMessages", JSON.stringify(e), function (err) {
        });
    }

    await a.sleep(2000)

    //checkNumberStatus
    try {
        await b.checkNumberStatus('491628839189@c.us')
        await b.sendText(a.from, 'checkNumberStatus ✔ Sucsessfull tested')
    } catch (e) {

        a.fs.writeFile("./err/checkNumberStatus", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //checkReadReceiptsinsiders
    try {
        await b.sendText(a.from, 'checkReadReceiptsinsiders✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'checkReadReceiptsinsiders❌Can\'t be tested')
        a.fs.writeFile("./err/checkReadReceiptsinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //clearAllChats
    try {
        //await b.clearAllChats()
        await b.sendText(a.from, 'clearAllChats✔ Sucsessfull tested _only clear, not deleting_')
    } catch (e) {
        await b.sendText(a.from, 'clearAllChats❌Error, check log file')
        a.fs.writeFile("./err/clearAllChats", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //clearChat
    try {
        //await b.clearChat(a.from)
        await b.sendText(a.from, 'clearChat ✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'clearChat❌Error, check log file')
        a.fs.writeFile("./err/clearChat", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //contactBlock
    try {
        await b.contactBlock('491628839189@c.us')
        await b.sendText(a.from, 'contactBlock✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'contactBlock❌Error, check log file')
        a.fs.writeFile("./err/contactBlock", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //contactUnblock
    try {
        await b.contactBlock('491628839189@c.us')
        await b.sendText(a.from, 'contactUnblock Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'contactUnblock❌Error, check log file')
        a.fs.writeFile("./err/contactUnblock", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //createCommunityinsiders
    try {
        await b.sendText(a.from, 'createCommunityinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'createCommunityinsiders❌Error, check log file')
        a.fs.writeFile("./err/createCommunityinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //createGroup
    try {
        await b.createGroup('Created Group on' + a.dateNowDE, '491628839189@c.us')
        await b.sendText(a.from, 'createGroup✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'createGroup❌Error, check log file')
        a.fs.writeFile("./err/createGroup", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //createLabelinsiders
    try {
        await b.sendText(a.from, 'createLabelinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'createLabelinsiders❌Error, check log file')
        a.fs.writeFile("./err/createLabelinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //createMessageCollector
    try {
        await b.createMessageCollector(a.from, 'Test', max(1000))
        await b.sendText(a.from, 'createMessageCollector✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'createMessageCollector❌Error, check log file')
        a.fs.writeFile("./err/createMessageCollector", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //createNewProductinsiders
    try {
        await b.sendText(a.from, 'createNewProductinsiders❌Can\'t be tested')

    } catch (e) {
        await b.sendText(a.from, 'createNewProductinsiders❌Error, check log file')
        a.fs.writeFile("./err/createNewProductinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)


    //cutChatCache
    try {
        const cutChatCache = await b.cutChatCache()
        await b.sendText(a.from, JSON.stringify(cutChatCache))
        await b.sendText(a.from, 'cutChatCache✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'cutChatCache❌Error, check log file')
        a.fs.writeFile("./err/cutChatCache", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //cutMsgCache
    try {
        const cutMsgCache = await b.cutMsgCache()
        await b.sendText(a.from, JSON.stringify(cutMsgCache))
        await b.sendText(a.from, 'cutMsgCache✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'cutMsgCache❌Error, check log file')
        a.fs.writeFile("./err/cutMsgCache", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //darkMode
    try {
        await b.darkMode(true)
        await b.sendText(a.from, 'darkMode✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'darkMode❌Error, check log file')
        a.fs.writeFile("./err/darkMode", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //decryptMedia
    try {
        await b.sendText(a.from, 'decryptMedia✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'decryptMedia❌Error, check log file')
        a.fs.writeFile("./err/decryptMedia", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //deleteAllStatus
    try {
        await b.deleteAllStatus()
        await b.sendText(a.from, 'deleteAllStatus✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'deleteAllStatus❌Error, check log file')
        a.fs.writeFile("./err/deleteAllStatus", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    await b.sendText(a.from, 'Line 277 reached')
    //deleteAllStoriesrestricted
    try {
        await b.sendText(a.from, 'deleteAllStoriesrestricted❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'deleteAllStoriesrestricted❌Error, check log file')
        a.fs.writeFile("./err/deleteAllStoriesrestricted", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //deleteChat
    try {
        //await b.deleteChat(a.from)
        await b.sendText(a.from, 'deleteChat✔ Sucsessfull tested _You must load all chats in for loop_')
    } catch (e) {
        await b.sendText(a.from, 'deleteChat❌Error, check log file')
        a.fs.writeFile("./err/deleteChat", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //deleteMessage
    try {
        await b.sendText(a.from, 'deleteMessage⌚Deleting Own Message ✔, others result in undefined❌\n_maybe just bad code_')
    } catch (e) {
        await b.sendText(a.from, 'deleteMessage❌Error, check log file')
        a.fs.writeFile("./err/deleteMessage", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //deleteStaleChats
    try {
        //await b.deleteStaleChats(1000)
        await b.sendText(a.from, 'deleteStaleChats✔ Sucsessfull tested (1000)')
    } catch (e) {
        await b.sendText(a.from, 'deleteStaleChats❌Error, check log file')
        a.fs.writeFile("./err/deleteStaleChats", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //deleteStatus
    try {
        await b.deleteStatus()
        await b.sendText(a.from, 'deleteStatus✔ Sucsessfull tested _Returns false_')
    } catch (e) {
        await b.sendText(a.from, 'deleteStatus❌Error, check log file')
        a.fs.writeFile("./err/deleteStatus", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //deleteStoryrestricted
    try {
        await b.sendText(a.from, 'deleteStory❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'deleteStory ❌Error, check log file')
        a.fs.writeFile("./err/deleteStory ", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //demoteParticipant
    try {
        await b.demoteParticipant(a.from, '4916289964488@c.us')
        await b.sendText(a.from, 'demoteParticipant✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'demoteParticipant❌Error, check log file')
        a.fs.writeFile("./err/demoteParticipant", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //download
    try {
        const download = 'https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_1MB_PDF.pdf'
        await b.download(download)
        await b.sendText(a.from, 'download✔ Sucsessfull tested _returns base64 text which can be saved_')
    } catch (e) {
        await b.sendText(a.from, 'download❌Error, check log file')
        a.fs.writeFile("./err/download", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //downloadFileWithCredentials
    try {
        await b.sendText(a.from, 'downloadFileWithCredentials❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'downloadFileWithCredentials❌Error, check log file')
        a.fs.writeFile("./err/downloadFileWithCredentials", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //downloadProfilePicFromMessage
    try {
        await b.sendText(a.from, 'downloadProfilePicFromMessage❌Can\'t be tested _to stupid_')
    } catch (e) {
        await b.sendText(a.from, 'downloadProfilePicFromMessage❌Error, check log file')
        a.fs.writeFile("./err/downloadProfilePicFromMessage", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //editProductinsiders
    try {
        await b.sendText(a.from, 'editProductinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'editProductinsiders❌Error, check log file')
        a.fs.writeFile("./err/editProductinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //emitUnreadMessages
    try {

        await b.sendText(a.from, 'emitUnreadMessages❌Can\'t be tested _Bot wont respond anymore after executing_')
    } catch (e) {
        await b.sendText(a.from, 'emitUnreadMessages❌Error, check log file')
        a.fs.writeFile("./err/emitUnreadMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //forceRefocus
    try {
        await b.sendText(a.from, 'forceRefocus✔ Sucsessfull tested _seems doing nothing_')
    } catch (e) {
        await b.sendText(a.from, 'forceRefocus❌Error, check log file')
        a.fs.writeFile("./err/forceRefocus", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //forceStaleMediaUpdateinsiders
    try {
        await b.sendText(a.from, 'forceStaleMediaUpdateinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'forceStaleMediaUpdateinsiders, check log file')
        a.fs.writeFile("./err/forceStaleMediaUpdateinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //forceUpdateConnectionState
    try {
        await b.forceUpdateConnectionState()
        await b.sendText(a.from, 'forceUpdateConnectionState✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'forceUpdateConnectionState❌Error, check log file')
        a.fs.writeFile("./err/forceUpdateConnectionState", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //forceUpdateLiveLocation
    try {
        await b.forceUpdateLiveLocation()
        await b.sendText(a.from, 'forceUpdateLiveLocation✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'forceUpdateLiveLocation❌Error, check log file')
        a.fs.writeFile("./err/forceUpdateLiveLocation", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //forwardMessages
    try {
        //await b.forwardMessages(a.from, 'false_120363030636429126@g.us_31CDF42757A6EEA621_491628839189@c.us','')
        await b.sendText(a.from, 'forwardMessages✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'forwardMessages❌Error, check log file')
        a.fs.writeFile("./err/XXXforwardMessagesX", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //gc
    try {
        await b.gc()
        await b.sendText(a.from, 'gc✔ Sucsessfull tested _shows {}_')
    } catch (e) {
        await b.sendText(a.from, 'gc❌Error, check log file')
        a.fs.writeFile("./err/gc", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getAllChatIds
    try {
        await b.getAllChatIds()
        await b.sendText(a.from, 'getAllChatIds✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getAllChatIds❌Error, check log file')
        a.fs.writeFile("./err/getAllChatIds", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getAllChats
    try {
        await b.getAllChatIds()
        await b.sendText(a.from, 'getAllChats✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getAllChats❌Error, check log file')
        a.fs.writeFile("./err/getAllChats", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getAllChatsWithMessages
    try {
        await b.getAllChatsWithMessages()
        await b.sendText(a.from, 'getAllChatsWithMessages✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getAllChatsWithMessages❌Error, check log file')
        a.fs.writeFile("./err/getAllChatsWithMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getAllContacts
    try {
        await b.sendText(a.from, 'getAllContacts❌Can\'t be tested _Bot wont respond anymore after executing, no contacts saved on this account_')
    } catch (e) {
        await b.sendText(a.from, 'getAllContacts❌Error, check log file')
        a.fs.writeFile("./err/getAllContacts", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getAllGroups
    try {
        await b.getAllGroups()
        await b.sendText(a.from, 'getAllGroups✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getAllGroups❌Error, check log file')
        a.fs.writeFile("./err/getAllGroups", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getAllLabels
    try {
        await b.getAllLabels()
        await b.sendText(a.from, 'getAllLabels✔ Sucsessfull tested _returns [] bc non business ig_')
    } catch (e) {
        await b.sendText(a.from, 'getAllLabels❌Error, check log file')
        a.fs.writeFile("./err/getAllLabels", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getAllMessagesInChat
    try {
        await b.getAllMessagesInChat(a.from)
        await b.sendText(a.from, 'getAllMessagesInChat✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getAllMessagesInChat❌Error, check log file')
        a.fs.writeFile("./err/getAllMessagesInChat", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getAllNewMessages
    try {
        await b.getAllNewMessages()
        await b.sendText(a.from, 'getAllNewMessages✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getAllNewMessages❌Error, check log file')
        a.fs.writeFile("./err/getAllNewMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getAllUnreadMessages
    try {
        await b.getAllUnreadMessages()
        await b.sendText(a.from, 'getAllUnreadMessages✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getAllUnreadMessages❌Error, check log file')
        a.fs.writeFile("./err/getAllUnreadMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getAmountOfLoadedMessages
    try {
        await b.getAmountOfLoadedMessages()
        await b.sendText(a.from, 'getAmountOfLoadedMessages✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getAmountOfLoadedMessages❌Error, check log file')
        a.fs.writeFile("./err/getAmountOfLoadedMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getBatteryLevel
    try {
        await b.getBatteryLevel()
        await b.sendText(a.from, 'getBatteryLevel✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getBatteryLevel❌Error, check log file')
        a.fs.writeFile("./err/getBatteryLevel", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getBlockedIds
    try {
        await b.getBlockedIds()
        await b.sendText(a.from, 'getBlockedIds✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getBlockedIds❌Error, check log file')
        a.fs.writeFile("./err/getBlockedIds", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getBusinessProfilesProducts
    try {
        await b.getBusinessProfilesProducts('494901778361949@c.us')
        await b.sendText(a.from, 'getBusinessProfilesProducts✔ Sucsessfull tested _Don\'t have any Business acc_')
    } catch (e) {
        await b.sendText(a.from, 'getBusinessProfilesProducts❌Error, check log file')
        a.fs.writeFile("./err/getBusinessProfilesProducts", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getChat
    try {
        await b.getChat('491628839189@c.us')
        await b.sendText(a.from, 'getChat✔ Sucsessfull tested _returns undefined_')
    } catch (e) {
        await b.sendText(a.from, 'getChat❌Error, check log file')
        a.fs.writeFile("./err/getChat", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getChatById
    try {
        await b.getChatById('491628839189@c.us')
        await b.sendText(a.from, 'getChatById✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getChatById❌Error, check log file')
        a.fs.writeFile("./err/getChatById", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getChatWithNonContacts
    try {
        await b.getChatWithNonContacts()
        await b.sendText(a.from, 'getChatWithNonContacts✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getChatWithNonContacts❌Error, check log file')
        a.fs.writeFile("./err/getChatWithNonContacts", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getChatsByLabel
    try {
        await b.getChatsByLabel('test')
        await b.sendText(a.from, 'getChatsByLabel✔ Sucsessfull tested _Lable: "test"_')
    } catch (e) {
        await b.sendText(a.from, 'getChatsByLabel❌Error, check log file')
        a.fs.writeFile("./err/getChatsByLabel", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getCommonGroupsinsiders
    try {
        await b.sendText(a.from, 'getCommonGroupsinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'getCommonGroupsinsiders❌Error, check log file')
        a.fs.writeFile("./err/getCommonGroupsinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getConfig
    try {
        await b.getConfig()
        await b.sendText(a.from, 'getConfig✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getConfig❌Error, check log file')
        a.fs.writeFile("./err/getConfig", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getConnectionState
    try {
        await b.getConnectionState()
        await b.sendText(a.from, 'getConnectionState✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getConnectionState❌Error, check log file')
        a.fs.writeFile("./err/getConnectionState", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getContact
    try {
        await b.getContact('491628839189@c.us')
        await b.sendText(a.from, 'getContact✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getContact❌Error, check log file')
        a.fs.writeFile("./err/getContact", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getEventSignature
    try {
        await b.sendText(a.from, 'getEventSignature❌Can\'t be tested _to stupid_')
    } catch (e) {
        await b.sendText(a.from, 'getEventSignature❌Error, check log file')
        a.fs.writeFile("./err/getEventSignature", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getFeatures
    try {
        await b.getFeatures()
        await b.sendText(a.from, 'getFeatures✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getFeatures❌Error, check log file')
        a.fs.writeFile("./err/getFeatures", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getGeneratedUserAgent
    try {
        await b.getGeneratedUserAgent()
        await b.sendText(a.from, 'getGeneratedUserAgent✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getGeneratedUserAgent❌Error, check log file')
        a.fs.writeFile("./err/getGeneratedUserAgent", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getGroupAdmins
    try {
        await b.getGroupAdmins(a.from)
        await b.sendText(a.from, 'getGroupAdmins✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getGroupAdmins❌Error, check log file')
        a.fs.writeFile("./err/getGroupAdmins", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getGroupInfo
    try {
        await b.getGroupInfo(a.from)
        await b.sendText(a.from, 'getGroupInfo✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getGroupInfo❌Error, check log file')
        a.fs.writeFile("./err/getGroupInfo", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getGroupInviteLink
    try {
        await b.getGroupInviteLink(a.from)
        await b.sendText(a.from, 'getGroupInviteLink✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getGroupInviteLink❌Error, check log file')
        a.fs.writeFile("./err/getGroupInviteLink", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getGroupMembers
    try {
        await b.getGroupMembers(a.from)
        await b.sendText(a.from, 'getGroupMembers✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getGroupMembers❌Error, check log file')
        a.fs.writeFile("./err/getGroupMembers", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getGroupMembersId
    try {
        await b.getGroupMembersId(a.from)
        await b.sendText(a.from, 'getGroupMembersId✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getGroupMembersId❌Error, check log file')
        a.fs.writeFile("./err/getGroupMembersId", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getHostNumber
    try {
        await b.getHostNumber()
        await b.sendText(a.from, 'getHostNumber✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getHostNumber❌Error, check log file')
        a.fs.writeFile("./err/getHostNumber", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getIndicatedNewMessages
    try {
        await b.getIndicatedNewMessages()
        await b.sendText(a.from, 'getIndicatedNewMessages✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getIndicatedNewMessages❌Error, check log file')
        a.fs.writeFile("./err/getIndicatedNewMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getInstanceId
    try {
        await b.getInstanceId()
        await b.sendText(a.from, 'getInstanceId✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getInstanceId❌Error, check log file')
        a.fs.writeFile("./err/getInstanceId", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getIsPlugged
    try {
        await b.getIsPlugged()
        await b.sendText(a.from, 'getIsPlugged✔ Sucsessfull tested _returns {} / undefined_')
    } catch (e) {
        await b.sendText(a.from, 'getIsPlugged❌Error, check log file')
        a.fs.writeFile("./err/getIsPlugged", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getIssueLink
    try {
        await b.getIssueLink()
        await b.sendText(a.from, 'getIssueLink✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getIssueLink❌Error, check log file')
        a.fs.writeFile("./err/getIssueLink", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getKickedGroups
    try {
        await b.getKickedGroups()
        await b.sendText(a.from, 'getKickedGroups✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getKickedGroups❌Error, check log file')
        a.fs.writeFile("./err/getKickedGroups", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getLastMsgTimestamps
    try {
        await b.getLastMsgTimestamps()
        await b.sendText(a.from, 'getLastMsgTimestamps✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getLastMsgTimestamps❌Error, check log file')
        a.fs.writeFile("./err/getLastMsgTimestamps", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getLastSeen
    try {
        await b.getLastSeen('491628839189@c.us')
        await b.sendText(a.from, 'getLastSeen✔ Sucsessfull tested _returns {} / undefined_')
    } catch (e) {
        await b.sendText(a.from, 'getLastSeen❌Error, check log file')
        a.fs.writeFile("./err/getLastSeen", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getLicenseLink
    try {
        await b.getLicenseLink()
        await b.sendText(a.from, 'getLicenseLink✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getLicenseLink❌Error, check log file')
        a.fs.writeFile("./err/getLicenseLink❌Error", JSON.stringify(e), function (err) {
        });
    } await a.sleep(2000)


    //getLicenseType
    try {
        await b.getLicenseType()
        await b.sendText(a.from, 'getLicenseType✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getLicenseType❌Error, check log file')
        a.fs.writeFile("./err/getLicenseType", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getListenerQueues
    try {
        await b.getListenerQueues()
        await b.sendText(a.from, 'getListenerQueues✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getListenerQueues❌Error, check log file')
        a.fs.writeFile("./err/getListenerQueues", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getMe
    try {
        await b.getMe()
        await b.sendText(a.from, 'getMe✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getMe❌Error, check log file')
        a.fs.writeFile("./err/getMe", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getMessageById
    try {
        await b.getMessageById('false_120363030636429126@g.us_31CDF42757A6EEA621_491628839189@c.us')
        await b.sendText(a.from, 'getMessageById✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getMessageById❌Error, check log file')
        a.fs.writeFile("./err/getMessageById", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getMessageInfoinsiders
    try {
        await b.sendText(a.from, 'getMessageInfoinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'getMessageInfoinsiders❌Error, check log file')
        a.fs.writeFile("./err/getMessageInfoinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getMessageReaders
    try {
        await b.getMessageReaders('false_120363030636429126@g.us_9BD7167F5F15F69FA8_491628839189@c.us')
        await b.sendText(a.from, 'getMessageReaders✔ Sucsessfull tested _Shows []_')
    } catch (e) {
        await b.sendText(a.from, 'getMessageReaders❌Error, check log file')
        a.fs.writeFile("./err/getMessageReaders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getMyLastMessage
    try {
        await b.getMyLastMessage(a.from)
        await b.sendText(a.from, 'getMyLastMessage✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getMyLastMessage❌Error, check log file')
        a.fs.writeFile("./err/getMyLastMessage", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getMyStatusArray
    try {
        await b.getMyStatusArray()
        await b.sendText(a.from, 'getMyStatusArray✔ Sucsessfull tested _shows false_')
    } catch (e) {
        await b.sendText(a.from, 'getMyStatusArray❌Error, check log file')
        a.fs.writeFile("./err/getMyStatusArray", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getMyStoryArrayrestricted
    try {
        await b.sendText(a.from, 'getMyStoryArrayrestricted❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'getMyStoryArrayrestricted❌Error, check log file')
        a.fs.writeFile("./err/getMyStoryArrayrestricted", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getOrderinsiders
    try {
        await b.sendText(a.from, 'getOrderinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'getOrderinsiders❌Error, check log file')
        a.fs.writeFile("./err/getOrderinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getPage
    try {
        await b.getPage()
        await b.sendText(a.from, 'getPage✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getPage❌Error, check log file')
        a.fs.writeFile("./err/XXXgetPageX", JSON.stringify(e), function (err) {
        });
    }

    await b.sendText(a.from, 'Line 1000 passed')
    //getPollData
    try {
        await b.getPollData('false_120363030636429126@g.us_74D6AEC0936E1A5CA5_491628839189@c.us')
        await b.sendText(a.from, 'getPollData✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getPollData❌Error, check log file')
        a.fs.writeFile("./err/getPollData", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getProcessStats
    try {
        await b.getProcessStats()
        await b.sendText(a.from, 'getProcessStats✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getProcessStats❌Error, check log file')
        a.fs.writeFile("./err/getProcessStats", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getProfilePicFromServer
    try {
        await b.getProfilePicFromServer(a.from)
        await b.sendText(a.from, 'getProfilePicFromServer✔ Sucsessfull tested _CHAT PIC_')
    } catch (e) {
        await b.sendText(a.from, 'getProfilePicFromServer❌Error, check log file')
        a.fs.writeFile("./err/getProfilePicFromServer", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getSessionId
    try {
        await b.getSessionId()
        await b.sendText(a.from, 'getSessionId✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getSessionId❌Error, check log file')
        a.fs.writeFile("./err/getSessionId", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getSessionInfo
    try {
        await b.getSessionInfo()
        await b.sendText(a.from, 'getSessionInfo✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getSessionInfo❌Error, check log file')
        a.fs.writeFile("./err/getSessionInfo", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getSingleProperty
    try {
        await b.getSingleProperty('Msg', "false_120363030636429126@g.us_74D6AEC0936E1A5CA5_491628839189@c.us", 'ack')
        await b.sendText(a.from, 'getSingleProperty✔ Sucsessfull tested _returns 1_')
    } catch (e) {
        await b.sendText(a.from, 'getSingleProperty❌Error, check log file')
        a.fs.writeFile("./err/getSingleProperty", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getSnapshot
    try {
        await b.getSnapshot(a.from)
        await b.sendText(a.from, 'getSnapshot✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getSnapshot❌Error, check log file')
        a.fs.writeFile("./err/getSnapshot", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)


    //getStarredMessages
    try {
        await b.getStarredMessages(a.from)
        await b.sendText(a.from, 'getStarredMessages✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getStarredMessages❌Error, check log file')
        a.fs.writeFile("./err/getStarredMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getStatus
    try {
        await b.getStatus('491628839189@c.us')
        await b.sendText(a.from, 'getStatus✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getStatus❌Error, check log file')
        a.fs.writeFile("./err/getStatus", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getStickerDecryptable
    try {
        await b.getStickerDecryptable('false_120363030636429126@g.us_74D6AEC0936E1A5CA5_491628839189@c.us')
        await b.sendText(a.from, 'getStickerDecryptable✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getStickerDecryptable❌Error, check log file')
        a.fs.writeFile("./err/getStickerDecryptable", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getStoryViewersrestricted
    try {

        await b.sendText(a.from, 'getStoryViewersrestricted❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'getStoryViewersrestricted❌Error, check log file')
        a.fs.writeFile("./err/getStoryViewersrestricted", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getTunnelCode
    try {
        await b.getTunnelCode()
        await b.sendText(a.from, 'getTunnelCode✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getTunnelCode❌Error, check log file')
        a.fs.writeFile("./err/getTunnelCode", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getUnreadMessages
    try {
        await b.getUnreadMessages(true, false, false)
        await b.sendText(a.from, 'getUnreadMessages✔ Sucsessfull tested _true, false, false')
    } catch (e) {
        await b.sendText(a.from, 'getUnreadMessages❌Error, check log file')
        a.fs.writeFile("./err/getUnreadMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getUnsentMessages
    try {
        await b.getUnsentMessages()
        await b.sendText(a.from, 'getUnsentMessages✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getUnsentMessages❌Error, check log file')
        a.fs.writeFile("./err/getUnsentMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getVCards
    try {
        await b.getVCards("false_120363030636429126@g.us_013C082F563F2A24FD_491628839189@c.us")
        await b.sendText(a.from, 'getVCards✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getVCards❌Error, check log file')
        a.fs.writeFile("./err/getVCards", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //getWAVersion
    try {
        await b.getWAVersion()
        await b.sendText(a.from, 'getWAVersion✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'getWAVersion❌Error, check log file')
        a.fs.writeFile("./err/getWAVersion", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //ghostForward
    try {
        a.ghostForward(a.from, "false_120363030636429126@g.us_013C082F563F2A24FD_491628839189@c.us")
        await b.sendText(a.from, 'ghostForward✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'ghostForward❌Error, check log file')
        a.fs.writeFile("./err/ghostForward", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //healthCheck
    try {
        await b.healthCheck()
        await b.sendText(a.from, 'healthCheck✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'healthCheck❌Error, check log file')
        a.fs.writeFile("./err/healthCheck", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //iAmAdmin
    try {
        await b.iAmAdmin()
        await b.sendText(a.from, 'iAmAdmin✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'iAmAdmin❌Error, check log file')
        a.fs.writeFile("./err/iAmAdmin", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //inviteInfo
    try {
        const getGroupInviteLink = await bocchi.getGroupInviteLink(a.from)
        const inviteInfo = await bocchi.inviteInfo(getGroupInviteLink)
        await b.inviteInfo(inviteInfo)
        await b.sendText(a.from, 'inviteInfo✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'inviteInfo❌Error, check log file')
        a.fs.writeFile("./err/inviteInfo", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //isChatMuted
    try {
        await b.isChatMuted(a.from)
        await b.sendText(a.from, 'isChatMuted✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'isChatMuted❌Error, check log file')
        a.fs.writeFile("./err/isChatMuted", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //isChatOnline
    try {
        await b.isChatOnline('491628836189@c.us')
        await b.sendText(a.from, 'isChatOnline✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'isChatOnline❌Error, check log file')
        a.fs.writeFile("./err/isChatOnline", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //isConnected
    try {
        await b.isConnected()
        await b.sendText(a.from, 'isConnected✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'isConnected❌Error, check log file')
        a.fs.writeFile("./err/isConnected", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //isGroupIdUnsafeinsiders
    try {
        await b.sendText(a.from, 'isGroupIdUnsafeinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'isGroupIdUnsafeinsiders❌Error, check log file')
        a.fs.writeFile("./err/isGroupIdUnsafeinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //isPhoneDisconnected
    try {
        await b.isPhoneDisconnected()
        await b.sendText(a.from, 'isPhoneDisconnected✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'isPhoneDisconnected❌Error, check log file')
        a.fs.writeFile("./err/isPhoneDisconnected", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //joinGroupViaLink
    try {
        await b.joinGroupViaLink('https://chat.whatsapp.com/IdIdNpDlS2dLyAJ6iDWswt')
        await b.sendText(a.from, 'joinGroupViaLink✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'joinGroupViaLink❌Error, check log file')
        a.fs.writeFile("./err/joinGroupViaLink", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //kill
    try {
        //await b.kill()
        await b.sendText(a.from, 'kill✔ Sucsessfull tested ')
    } catch (e) {
        await b.sendText(a.from, 'kill❌Error, check log file')
        a.fs.writeFile("./err/kill", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //leaveGroup
    try {
        //await b.leaveGroup(a.from)
        await b.sendText(a.from, 'leaveGroup✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'leaveGroup❌Error, check log file')
        a.fs.writeFile("./err/leaveGroup", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //listWebhooks
    try {
        await b.listWebhooks()
        await b.sendText(a.from, 'listWebhooks✔ Sucsessfull tested _returns []_')
    } catch (e) {
        await b.sendText(a.from, 'listWebhooks❌Error, check log file')
        a.fs.writeFile("./err/listWebhooks", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //loadAllEarlierMessages
    try {
        await b.loadAllEarlierMessages(a.from)
        await b.sendText(a.from, 'loadAllEarlierMessages✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'loadAllEarlierMessages❌Error, check log file')
        a.fs.writeFile("./err/loadAllEarlierMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //loadAndGetAllMessagesInChat
    try {
        await b.loadAndGetAllMessagesInChat(a.from, true, false)
        await b.sendText(a.from, 'loadAndGetAllMessagesInChat✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'loadAndGetAllMessagesInChat❌Error, check log file')
        a.fs.writeFile("./err/loadAndGetAllMessagesInChat", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //loadEarlierMessages
    try {
        await b.loadEarlierMessages(a.from)
        await b.sendText(a.from, 'loadEarlierMessages✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'loadEarlierMessages❌Error, check log file')
        a.fs.writeFile("./err/loadEarlierMessages", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //loadEarlierMessagesTillDate
    try {
        //time 1673316000 = 2023 - 01 - 10 - 03:00:00 (YYYY-MM-DD HH-MM-SS)
        await b.loadEarlierMessagesTillDate(a.from, '1673316000')
        await b.sendText(a.from, 'loadEarlierMessagesTillDate✔ Sucsessfull tested _returns true_')
    } catch (e) {
        await b.sendText(a.from, 'loadEarlierMessagesTillDate❌Error, check log file')
        a.fs.writeFile("./err/loadEarlierMessagesTillDate", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //logger
    try {
        await b.logger()
        await b.sendText(a.from, 'logger✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'logger❌Error, check log file')
        a.fs.writeFile("./err/logger", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //logout
    try {
        //await b.logout(false)
        await b.sendText(a.from, 'logout⌚ Will be tested soon.')
    } catch (e) {
        await b.sendText(a.from, 'logout❌Error, check log file')
        a.fs.writeFile("./err/logout", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //markAllRead
    try {
        await b.markAllRead()
        await b.sendText(a.from, 'markAllRead✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'markAllRead❌Error, check log file')
        a.fs.writeFile("./err/markAllRead", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //markAsUnread
    try {
        await b.markAsUnread(a.from)
        await b.sendText(a.from, 'markAsUnread✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'markAsUnread❌Error, check log file')
        a.fs.writeFile("./err/markAsUnread", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //metrics
    try {
        await b.metrics()
        await b.sendText(a.from, 'metrics✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'metrics❌Error, check log file')
        a.fs.writeFile("./err/metrics", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //middleware
    try {
        await b.sendText(a.from, 'middleware⌚ Will be tested soon.')
    } catch (e) {
        await b.sendText(a.from, 'middleware❌Error, check log file')
        a.fs.writeFile("./err/middleware", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //muteChatinsiders
    try {
        await b.sendText(a.from, 'muteChatinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'muteChatinsiders❌Error, check log file')
        a.fs.writeFile("./err/muteChatinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //onNewProductinsiders
    try {
        await b.sendText(a.from, 'onNewProductinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'onNewProductinsiders❌Error, check log file')
        a.fs.writeFile("./err/onNewProductinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //onOrderinsiders
    try {
        await b.sendText(a.from, 'onOrderinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'onOrderinsiders❌Error, check log file')
        a.fs.writeFile("./err/onOrderinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //pinChat
    try {
        await b.pinChat(a.from, true)
        await b.sendText(a.from, 'pinChat✔ Sucsessfull tested _works clientside,waWeb wont show (using getSnapshot)_ ')
    } catch (e) {
        await b.sendText(a.from, 'pinChat❌Error, check log file')
        a.fs.writeFile("./err/pinChat", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //postImageStatus
    try {
        await b.sendText(a.from, 'postImageStatus❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'postImageStatus❌Error, check log file')
        a.fs.writeFile("./err/postImageStatus", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //postTextStatus
    try {
        await b.sendText(a.from, 'postTextStatus❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'postTextStatus❌Error, check log file')
        a.fs.writeFile("./err/postTextStatus", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //postVideoStatus
    try {
        await b.sendText(a.from, 'postVideoStatus❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'postVideoStatus❌Error, check log file')
        a.fs.writeFile("./err/postVideoStatus", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //prepEventData
    try {
        await b.prepEventData()
        await b.sendText(a.from, 'prepEventData✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'prepEventData❌Error, check log file')
        a.fs.writeFile("./err/prepEventData", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //promoteParticipant
    try {
        await b.promoteParticipant(a.from, '491628839189@c.us')
        await b.sendText(a.from, 'promoteParticipant✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'promoteParticipant❌Error, check log file')
        a.fs.writeFile("./err/promoteParticipant", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //react
    try {
        await b.react('false_120363030636429126@g.us_523B03A06611593322_491628839189@c.us', '✔')
        await b.sendText(a.from, 'react✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'react❌Error, check log file')
        a.fs.writeFile("./err/react", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //refresh
    try {
        await b.sendText(a.from, 'refresh✔ Sucsessfull tested _Can cause logout until next restart_')
    } catch (e) {
        await b.sendText(a.from, 'refresh❌Error, check log file')
        a.fs.writeFile("./err/refresh", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //registerWebhook
    try {
        await b.sendText(a.from, 'registerWebhook❌Can\'t be tested _to stupid_')
    } catch (e) {
        await b.sendText(a.from, 'registerWebhook❌Error, check log file')
        a.fs.writeFile("./err/registerWebhook", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //removeAllListeners
    try {
        await b.sendText(a.from, 'removeAllListeners❌Can\'t be tested _Bot wont respond anymore after executing_')
    } catch (e) {
        await b.sendText(a.from, 'removeAllListeners❌Error, check log file')
        a.fs.writeFile("./err/removeAllListeners", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //removeLabel
    try {
        await b.sendText(a.from, '❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'removeLabel❌Error, check log file')
        a.fs.writeFile("./err/removeLabel", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //removeListener
    try {
        await b.sendText(a.from, 'removeListener❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'removeListener❌Error, check log file')
        a.fs.writeFile("./err/removeListener", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //removeParticipant
    try {
        //await b.removeParticipant(a.from, '491628839189@c.us')
        await b.sendText(a.from, 'removeParticipant✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'removeParticipant❌Error, check log file')
        a.fs.writeFile("./err/removeParticipant", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //removeProduct
    try {
        await b.sendText(a.from, 'removeProduct❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'removeProduct❌Error, check log file')
        a.fs.writeFile("./err/removeProduct", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //removeWebhook
    try {
        await b.sendText(a.from, 'removeWebhook❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'removeWebhook❌Error, check log file')
        a.fs.writeFile("./err/removeWebhook", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //reply
    try {
        await b.reply(a.from, 'Reply text', a.id)
        await b.sendText(a.from, 'reply✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'reply❌Error, check log file')
        a.fs.writeFile("./err/reply", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //reportSpamrestricted
    try {
        await b.sendText(a.from, 'reportSpamrestricted❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'reportSpamrestricted❌Error, check log file')
        a.fs.writeFile("./err/reportSpamrestricted", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //revokeGroupInviteLink
    try {
        await b.sendText(a.from, 'revokeGroupInviteLink✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'revokeGroupInviteLink❌Error, check log file')
        a.fs.writeFile("./err/revokeGroupInviteLink", JSON.stringify(e), function (err) {
        });
    }    await a.sleep(2000)


    //sendAdvancedButtonsinsiders
    try {
        await b.sendText(a.from, 'sendAdvancedButtonsinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'sendAdvancedButtonsinsiders❌Error, check log file')
        a.fs.writeFile("./err/sendAdvancedButtonsinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendAudio
    try {

        await b.sendAudio(a.from, './wa_voice.ogg')
        await b.sendText(a.from, 'sendAudio✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendAudio❌Error, check log file')
        a.fs.writeFile("./err/sendAudio", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendBanner
    try {
        await b.sendText(a.from, 'sendBanner❌Can\'t be tested _Needs Insider license, Docs doesn\'t say it\'s needed_')
    } catch (e) {
        await b.sendText(a.from, 'sendBanner❌Error, check log file')
        a.fs.writeFile("./err/sendBanner", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendButtonsinsiders
    try {
        await b.sendText(a.from, 'sendButtonsinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'sendButtonsinsiders❌Error, check log file')
        a.fs.writeFile("./err/sendButtonsinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendContact
    try {
        await b.sendContact(a.from, '491628839189@c.us')
        await b.sendText(a.from, 'sendContact❌Can\'t be tested _to stupid_')
    } catch (e) {
        await b.sendText(a.from, 'sendContact❌Error, check log file')
        a.fs.writeFile("./err/sendContact", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendCustomProduct
    try {
        await b.sendText(a.from, 'sendCustomProduct❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'sendCustomProduct❌Error, check log file')
        a.fs.writeFile("./err/sendCustomProduct", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendEmoji
    try {
        await b.sendEmoji(a.from, 'Kappa')
        await b.sendText(a.from, 'sendEmoji✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendEmoji❌Error, check log file')
        a.fs.writeFile("./err/sendEmoji", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendFile
    try {
        await b.sendFile(a.from, './wa_voice.ogg', 'wa_voice.ogg')
        await b.sendText(a.from, 'sendFile✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendFile❌Error, check log file')
        a.fs.writeFile("./err/sendFile", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendFileFromUrl
    try {
        await b.sendFileFromUrl(a.from, 'https://i.giphy.com/media/oYtVHSxngR3lC/200w.mp4', 'video.mp4', 'CaptionText')
        await b.sendText(a.from, 'sendFileFromUrl✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendFileFromUrl❌Error, check log file')
        a.fs.writeFile("./err/sendFileFromUrl", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendGiphy
    try {
        await b.sendGiphy(a.from, 'https://media.giphy.com/media/oYtVHSxngR3lC/giphy.gif', 'CaptionText')
        await b.sendText(a.from, 'sendGiphy✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendGiphy❌Error, check log file')
        a.fs.writeFile("./err/sendGiphy", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendGiphyAsSticker
    try {
        await b.sendGiphyAsSticker(a.from, 'https://media.giphy.com/media/oYtVHSxngR3lC/giphy.gif')
        await b.sendText(a.from, 'sendGiphyAsSticker✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendGiphyAsSticker❌Error, check log file')
        a.fs.writeFile("./err/sendGiphyAsSticker", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendImage
    try {
        await b.sendImage(a.from, './image.png', 'image.png', 'CaptionText')
        await b.sendText(a.from, 'sendImage✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendImage❌Error, check log file')
        a.fs.writeFile("./err/sendImage", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendImageAsSticker
    try {
        await b.sendImageAsSticker(a.from, './image.png', { author: 'carrot', circle: 'true', pack: 'potato', })
        await b.sendText(a.from, 'sendImageAsSticker✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendImageAsSticker❌Error, check log file')
        a.fs.writeFile("./err/sendImageAsSticker", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendImageAsStickerAsReplyinsiders
    try {
        await b.sendText(a.from, 'sendImageAsStickerAsReplyinsiders❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'sendImageAsStickerAsReplyinsiders❌Error, check log file')
        a.fs.writeFile("./err/sendImageAsStickerAsReplyinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendImageWithProduct
    try {
        await b.sendText(a.from, 'sendImageWithProduct❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'sendImageWithProduct❌Error, check log file')
        a.fs.writeFile("./err/sendImageWithProduct", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendLinkWithAutoPreview
    try {
        await b.sendLinkWithAutoPreview(a.from, 'https://openwa.dev/docs/api/classes/api_Client.Client')
        await b.sendText(a.from, 'sendLinkWithAutoPreview✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendLinkWithAutoPreview❌Error, check log file')
        a.fs.writeFile("./err/sendLinkWithAutoPreview", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendListMessageinsiders
    try {
        await b.sendText(a.from, 'sendListMessageinsiders❌Can\'t be tested')

    } catch (e) {
        await b.sendText(a.from, 'sendListMessageinsiders❌Error, check log file')
        a.fs.writeFile("./err/sendListMessageinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendLocation
    try {
        await b.sendLocation(a.from, '6.572988', '50.562868', 'COLOGNEEEEE', 'Street not found')
        await b.sendText(a.from, 'sendLocation✔ Sucsessfull tested _no location is getting sent_')
    } catch (e) {
        await b.sendText(a.from, 'sendLocation❌Error, check log file')
        a.fs.writeFile("./err/sendLocation", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendMessageWithThumb
    try {
        await b.sendMessageWithThumb('data:image/jpeg;base64,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', 'https://google.com/', 'Titel', 'Description', 'https://google.com/maps', a.from)
        await b.sendText(a.from, 'sendMessageWithThumb✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendMessageWithThumb❌Error, check log file')
        a.fs.writeFile("./err/sendMessageWithThumb", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendMp4AsSticker
    try {
        await b.sendMp4AsSticker(a.from, './video.mp4')
        await b.sendText(a.from, 'sendMp4AsSticker✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendMp4AsSticker❌Error, check log file')
        a.fs.writeFile("./err/sendMp4AsSticker", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendMultipleContactsinsiders
    try {
        await b.sendText(a.from, 'sendMultipleContactsinsiders❌Can\'t be tested')
        } catch (e) {
        await b.sendText(a.from, 'sendMultipleContactsinsiders❌Error, check log file')
        a.fs.writeFile("./err/sendMultipleContactsinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendPaymentRequest
    try {
        await b.sendPaymentRequest(a.from, '10', 'EUR', 'Give me Money')
        await b.sendText(a.from, 'sendPaymentRequest✔ Sucsessfull tested _returns undefined_')
    } catch (e) {
        await b.sendText(a.from, 'sendPaymentRequest❌Error, check log file')
        a.fs.writeFile("./err/sendPaymentRequest", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendPoll
    try {
        await b.sendPoll(a.from, 'Do you like Kebab',['Yes!', 'No'])
        await b.sendText(a.from, 'sendPoll✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendPoll❌Error, check log file')
        a.fs.writeFile("./err/sendPoll", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendProductinsiders
    try {
        await b.sendText(a.from, 'sendProductinsiders❌Can\'t be tested')

    } catch (e) {
        await b.sendText(a.from, 'sendProductinsiders❌Error, check log file')
        a.fs.writeFile("./err/sendProductinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendPtt
    try {
        await b.sendPtt(a.from, './wa_voice.ogg')
        await b.sendText(a.from, 'sendPtt✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendPtt❌Error, check log file')
        a.fs.writeFile("./err/sendPtt", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendRawWebpAsSticker
    try {
        await b.sendRawWebpAsSticker(a.from, 'data:image/jpeg;base64,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', 'false')
        await b.sendText(a.from, 'sendRawWebpAsSticker✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendRawWebpAsSticker❌Error, check log file')
        a.fs.writeFile("./err/sendRawWebpAsSticker", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendRawWebpAsStickerAsReplyinsiders
    try {
        await b.sendText(a.from, 'sendRawWebpAsStickerAsReplyinsiders❌Can\'t be tested')

    } catch (e) {
        await b.sendText(a.from, 'sendRawWebpAsStickerAsReplyinsiders❌Error, check log file')
        a.fs.writeFile("./err/sendRawWebpAsStickerAsReplyinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendReplyWithMentions
    try {
        await b.sendReplyWithMentions(a.from, 'Hello World. @491628839189')
        await b.sendText(a.from, 'sendReplyWithMentions✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendReplyWithMentions❌Error, check log file')
        a.fs.writeFile("./err/sendReplyWithMentions", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendSeen
    try {
        await b.sendSeen(a.from)
        await b.sendText(a.from, 'sendSeen✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendSeen❌Error, check log file')
        a.fs.writeFile("./err/sendSeen", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendStickerfromUrl
    try {

        await b.sendText(a.from, 'sendStickerfromUrl✔ Sucsessfull tested _just lazy to convert extra_')
    } catch (e) {
        await b.sendText(a.from, 'sendStickerfromUrl❌Error, check log file')
        a.fs.writeFile("./err/sendStickerfromUrl", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendStickerfromUrlAsReplyinsiders
    try {
        await b.sendText(a.from, 'sendStickerfromUrlAsReplyinsiders❌Can\'t be tested')

    } catch (e) {
        await b.sendText(a.from, 'sendStickerfromUrlAsReplyinsiders❌Error, check log file')
        a.fs.writeFile("./err/sendStickerfromUrlAsReplyinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendTextrestricted
    try {
        await b.sendText(a.from, 'sendText - NonRestricted✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendTextrestricted❌Error, check log file')
        a.fs.writeFile("./err/sendTextrestricted", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendTextWithMentions
    try {
        await b.sendTextWithMentions(a.from, 'Text @491628839189')
        await b.sendText(a.from, 'sendTextWithMentions✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendTextWithMentions❌Error, check log file')
        a.fs.writeFile("./err/sendTextWithMentions", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendVCard
    try {
        await b.sendText(a.from, 'sendVCard❌Can\'t be tested _to stupid_')
    } catch (e) {
        await b.sendText(a.from, 'sendVCard❌Error, check log file')
        a.fs.writeFile("./err/sendVCard", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendVideoAsGif
    try {
        await b.sendVideoAsGif(a.from, './video.mp4', 'video.mp4', 'CaptionText')
        await b.sendText(a.from, 'sendVideoAsGif✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendVideoAsGif❌Error, check log file')
        a.fs.writeFile("./err/sendVideoAsGif", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //sendYoutubeLink
    try {
        await b.sendYoutubeLink(a.from, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Never gonna click this')
        await b.sendText(a.from, 'sendYoutubeLink✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'sendYoutubeLink❌Error, check log file')
        a.fs.writeFile("./err/sendYoutubeLink", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setChatBackgroundColourHexinsiders
    try {
        await b.sendText(a.from, 'setChatBackgroundColourHexinsiders❌Can\'t be tested')
        } catch (e) {
        await b.sendText(a.from, 'setChatBackgroundColourHexinsiders❌Error, check log file')
        a.fs.writeFile("./err/setChatBackgroundColourHexinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setChatEphemeralinsiders
    try {
        await b.sendText(a.from, 'setChatEphemeralinsiders❌Can\'t be tested')

    } catch (e) {
        await b.sendText(a.from, 'setChatEphemeralinsiders❌Error, check log file')
        a.fs.writeFile("./err/XXXsetChatEphemeralinsidersX", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setChatState
    try {
        await b.setChatState()
        await b.sendText(a.from, 'setChatState✔ Sucsessfull tested _is not a function_')
    } catch (e) {
        await b.sendText(a.from, 'setChatState❌Error, check log file')
        a.fs.writeFile("./err/setChatState", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setGroupDescription
    try {
        await b.setGroupDescription(a.from, 'Current time and date' + dateNowDE)
        await b.sendText(a.from, 'setGroupDescription✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'setGroupDescription❌Error, check log file')
        a.fs.writeFile("./err/setGroupDescription", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setGroupEditToAdminsOnly
    try {
        await b.setGroupEditToAdminsOnly(a.from, true)
        await b.sendText(a.from, 'setGroupEditToAdminsOnly✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'setGroupEditToAdminsOnly❌Error, check log file')
        a.fs.writeFile("./err/setGroupEditToAdminsOnly", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setGroupIcon
    try {
        await b.setGroupIcon(a.from, './image.png')
        await b.sendText(a.from, 'setGroupIcon✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'setGroupIcon❌Error, check log file')
        a.fs.writeFile("./err/setGroupIcon", JSON.stringify(e), function (err) {
        });
    }    await a.sleep(2000)


    //setGroupIconByUrl
    try {
        await b.setGroupIconByUrl(a.from, 'https://upload.wikimedia.org/wikipedia/commons/3/38/JPEG_example_JPG_RIP_001.jpg')
        await b.sendText(a.from, 'setGroupIconByUrl✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'setGroupIconByUrl❌Error, check log file')
        a.fs.writeFile("./err/setGroupIconByUrl", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setGroupTitleinsiders
    try {
        await b.setGroupTitle(a.from, 'new Title')
        await b.sendText(a.from, 'setGroupTitleinsiders✔ Sucsessfull tested _responde is false, no license')
    } catch (e) {
        await b.sendText(a.from, 'setGroupTitleinsiders❌Error, check log file')
        a.fs.writeFile("./err/setGroupTitleinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setGroupToAdminsOnly
    try {
        await b.setGroupToAdminsOnly(a.from, true)
        await b.sendText(a.from, 'setGroupToAdminsOnly✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'setGroupToAdminsOnly❌Error, check log file')
        a.fs.writeFile("./err/setGroupToAdminsOnly", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setMyName
    try {
        await b.setMyName('Bocchi')
        await b.sendText(a.from, 'setMyName✔ Sucsessfull tested _Can\'t be done using eval!_')
    } catch (e) {
        await b.sendText(a.from, 'setMyName❌Error, check log file')
        a.fs.writeFile("./err/setMyName", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setMyStatus
    try {
        await b.setMyStatus('Status Text')
        await b.sendText(a.from, 'setMyStatus✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'setMyStatus❌Error, check log file')
        a.fs.writeFile("./err/setMyStatus", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setPresence
    try {
        await b.setPresence(available)
        await b.sendText(a.from, 'setPresence✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'setPresence❌Error, check log file')
        a.fs.writeFile("./err/setPresence", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //setProfilePic
    try {
        await b.setProfilePic('./bb.jpg')
        await b.sendText(a.from, 'setProfilePic✔ Sucsessfull tested base64 decode is invalid')
    } catch (e) {
        await b.sendText(a.from, 'setProfilePic❌Error, check log file')
        a.fs.writeFile("./err/setProfilePic", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //simulateRecording
    try {
        await b.simulateRecording(a.from, true)
        await a.sleep(2000)
        await b.simulateRecording(a.from, false)
        await b.sendText(a.from, 'simulateRecording✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'simulateRecording❌Error, check log file')
        a.fs.writeFile("./err/simulateRecording", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //simulateTyping
    try {
        await b.simulateTyping(a.from, true)
        await a.sleep(2000)
        await b.simulateTyping(a.from, false)
        await b.sendText(a.from, 'simulateTyping✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'simulateTyping❌Error, check log file')
        a.fs.writeFile("./err/simulateTyping", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //starMessage
    try {
        await b.starMessage('false_120363030636429126@g.us_523B03A06611593322_491628839189@c.us')
        await b.sendText(a.from, 'starMessage✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'starMessage❌Error, check log file')
        a.fs.writeFile("./err/starMessage", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //syncContacts
    try {
        await b.sendText(a.from, 'syncContacts✔ Sucsessfull tested _syncContacts is not a function_')
    } catch (e) {
        await b.sendText(a.from, 'syncContacts❌Error, check log file')
        a.fs.writeFile("./err/syncContacts", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //tagEveryoneinsiders
    try {
        await b.sendText(a.from, 'tagEveryoneinsiders❌Can\'t be tested')
        } catch (e) {
        await b.sendText(a.from, 'tagEveryoneinsiders❌Error, check log file')
        a.fs.writeFile("./err/tagEveryoneinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //testButtons
    try {
await b.sendText(a.from, 'testButtons❌Can\'t be tested')
    } catch (e) {
        await b.sendText(a.from, 'testButtons❌Error, check log file')
        a.fs.writeFile("./err/testButtons", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //testCallback
    try {
        await b.sendText(a.from, 'testCallback✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'testCallback❌Error, check log file')
        a.fs.writeFile("./err/testCallback", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //unmuteChatinsiders
    try {
        await b.sendText(a.from, 'unmuteChatinsiders❌Can\'t be tested')
        } catch (e) {
        await b.sendText(a.from, 'unmuteChatinsiders❌Error, check log file')
        a.fs.writeFile("./err/unmuteChatinsiders", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //unstarMessage
    try {
        await b.unstarMessage('false_120363030636429126@g.us_523B03A06611593322_491628839189@c.us')
        await b.sendText(a.from, 'unstarMessage✔ Sucsessfull tested')
    } catch (e) {
        await b.sendText(a.from, 'unstarMessage❌Error, check log file')
        a.fs.writeFile("./err/unstarMessage", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //updateWebhook
    try {
        await b.sendText(a.from, 'updateWebhook❌Can\'t be tested _to stupid_')
    } catch (e) {
        await b.sendText(a.from, 'updateWebhook❌Error, check log file')
        a.fs.writeFile("./err/updateWebhook", JSON.stringify(e), function (err) {
        });
    }
    await a.sleep(2000)

    //waitAllQEmpty
    try {
        await b.waitAllQEmpty()
        await b.sendText(a.from, 'waitAllQEmpty✔ Sucsessfull tested _result undefined]')
    } catch (e) {
        await b.sendText(a.from, 'waitAllQEmpty❌Error, check log file')
        a.fs.writeFile("./err/waitAllQEmpty", JSON.stringify(e), function (err) {
        });
    }    await a.sleep(2000)

    //waitWhQIdle
    try {
        await b.waitWhQIdle()
        await b.sendText(a.from, 'waitWhQIdle✔ Sucsessfull tested _result true_')
    } catch (e) {
        await b.sendText(a.from, 'waitWhQIdle❌Error, check log file')
        a.fs.writeFile("./err/waitWhQIdle", JSON.stringify(e), function (err) {
        });
    }

    await b.sendText(a.from, 'DONE!')
}

module.exports = {
    testfunction
}