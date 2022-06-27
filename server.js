let express = require("express");

let app = express();

app.use(express.static(__dirname + "/dist/Social-Networking-Tool"));

app.get("/*", (req, resp) => {
  resp.sendFile(__dirname + "/dist/Social-Networking-Tool/index.html");
});

app.listen(process.env.PORT || 8080);
