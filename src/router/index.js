const productsRouter = require("./products-router");
const usersRouter = require("./users-router");

const Router = require("express").Router;

const apiRouter = Router();

apiRouter.use(usersRouter);
apiRouter.use(productsRouter);

module.exports = apiRouter;
