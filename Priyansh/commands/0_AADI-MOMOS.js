const fs = require("fs");
module.exports.config = {
        name: "momos",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "𝐙𝐄𝐃𝐈 𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "momos",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("momos")==0 || event.body.indexOf("Momos")==0 || event.body.indexOf("MOMOS")==0 || event.body.indexOf("MOMOSS")==0) {
                var msg = {
                                body: "=𒁍 ⃝𝐎𝐖𝐍𝐄𝐑 ⸙𓆩𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍𓆪 𓆣 »❯ \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐌𝐎𝐌𝐎𝐒 \n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/9428f494ff4af77478041fb45a9f7b4f.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
