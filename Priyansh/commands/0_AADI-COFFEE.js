const fs = require("fs");
module.exports.config = {
        name: "Coffee",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "𝐙𝐄𝐃𝐈 𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Coffee",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Coffee")==0 || event.body.indexOf("coffee")==0 || event.body.indexOf("COFFEE ")==0 || event.body.indexOf("cofi")==0) {
                var msg = {
                                body: "=𒁍 ⃝𝐎𝐖𝐍𝐄𝐑 ⸙𓆩𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍𓆪 𓆣 »❯ \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐂𝐎𝐅𝐅𝐄𝐄 \n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Pinterest-boomerang.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
