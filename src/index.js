import app from "./app.js";
import routes from "./routes/index.js";

const port = process.env.PORT || 3000;

routes(app)

app.listen(port, () => {
  console.log(`Example app listening at http:localhost:${port}`);
});
