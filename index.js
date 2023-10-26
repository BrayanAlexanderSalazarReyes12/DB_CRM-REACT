const JsonServer = require("json-server");
const Server = JsonServer.create();
const Router = JsonServer.router("db.json");
const middlewares = JsonServer.defaults();
const port = process.env.PORT || 3001;

Server.use(middlewares);
Server.use(Router);

Server.listen(port);