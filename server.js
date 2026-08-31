const express = require("express");
const server = express();
const port = process.env.PORT || 3000;

server.all("/", (req, res) => {
  res.send(`Bot is alive! Server pinged at ${new Date().toLocaleString()}`);
});

function keepAlive() {
  server.listen(port, () => {
    console.log("Server is Ready!! " + Date.now());

    setInterval(
      () => {
        fetch(`http://localhost:${port}`)
          .then((res) =>
            console.log(`Keep-alive ping successful: ${res.status}`),
          )
          .catch((err) => console.log("Keep-alive ping failed:", err.message));
      },
      5 * 60 * 1000,
    ); // Ping every 5 minutes
  });
}

module.exports = keepAlive;
