const http = require("http");
const app = require("./app.js");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));
