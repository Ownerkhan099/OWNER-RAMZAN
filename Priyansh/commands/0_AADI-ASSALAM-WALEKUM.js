const fs = require("fs");
module.exports.config = {
        name: "BYE",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "𝐙𝐄𝐃𝐈 𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍", 
        description: "THIS BOT IS 𝐙𝐄𝐃𝐈 𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("assalamualaikum") ||
     react.includes("asslam walikum") || react.includes("ASSLAM WALIKUM") || react.includes("Aslam") ||
react.includes("Assalam alaikum") ||
react.includes("assalamualaikum")) {
                var msg = {
                                body: `____________________________________\n\nWalekum Aaslamu  Wa Ramutllha Barkatu 😇\n____________________________________ \n𒁍 ⃝𝐎𝐖𝐍𝐄𝐑 ⸙𓆩𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍𓆪 𓆣 »❯`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤲", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
