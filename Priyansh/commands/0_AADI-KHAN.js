const fs = require("fs");
module.exports.config = {
        name: "𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "𝐙𝐄𝐃𝐈 𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍")==0 || event.body.indexOf("𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍")==0 || event.body.indexOf("𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍")==0 || event.body.indexOf("@𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍 𝐛𝐚𝐛𝐮 \n__________________________________\n\n𝐎𝐰𝐧𝐞𝐑 𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/FB_IMG_1731385004342.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
