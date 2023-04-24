const express = require("express");
const routes = require("./routes");
const exceptionHandler = require('./middlewares/exceptionHandler')

const app = express()
const port = process.env.PORT || 3000;

routes(app);

app.use(exceptionHandler)

app.listen(port, () => {
  console.log(`Example app listening at http:localhost:${port}`);
});

module.exports= app;
