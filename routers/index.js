const routerPost = require("./postRouter");
module.exports = (app) => {
    app.use(routerPost);
}