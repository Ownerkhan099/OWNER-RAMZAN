const fs = require("fs");
module.exports.config = {
  name: "Ramzan",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐙𝐄𝐃𝐈 𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("admin") ||
     react.includes("owner") || react.includes("𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍") || react.includes("𝐑𝐀𝐌𝐙𝐀𝐍") ||
react.includes("𝐙𝐄𝐃𝐈 𝐑𝐀𝐍𝐀 𝐑𝐀𝐌𝐙𝐀𝐍") ||
react.includes("Ramzan") ||     
react.includes("Ramzan King")) {
    var msg = {
        body: `${name} 𝑻𝑼𝑴 𝑵𝑬 𝑩𝑯𝑼𝑳𝑨𝒀𝑨 𝑶𝑼𝑹 𝑯𝑼𝑴 𝑪𝑯𝑨𝑳𝑬 𝑨𝑨𝒀𝑬💞✿`,attachment: fs.createReadStream(__dirname + `/noprefix//received_1731124487753990.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
