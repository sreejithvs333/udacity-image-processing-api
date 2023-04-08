import express from "express";
import routes from "./routes/index";
const app = express();
const port = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`The server started at http://localhost:${port}`);
});
