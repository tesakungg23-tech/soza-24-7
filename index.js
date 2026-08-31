const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
});

const keepAlive = require("./server.js");
keepAlive();

client.on("ready", async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence(client)
    .setType("STREAMING")
    .setURL("https://www.twitch.tv/discord") // Must be a YouTube or Twitch stream link
    .setName("ashyyy")
    .setDetails("<3")
    .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1381140647322583195/1543838547885428766/copy_8BB7A35D-CD4F-4EDC-9353-8A2DFEC21544.gif?ex=6a965330&is=6a9501b0&hm=cc7c885106a4a77fc75c03265b039cc2cd801ac080494a584629bad636f89914&");

  client.user.setActivity(r);
});

const mySecret = process.env["TOKEN"];
client.login(mySecret);
