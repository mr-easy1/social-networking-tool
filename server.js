let express = require("express");

let app = express();

app.use(express.static(__dirname + "/dist/social-networking-tool"));

app.get("/*", (req, resp) => {
  resp.sendFile("/dist/social-networking-tool/index.html");
});

app.listen(process.env.PORT || 8080);
