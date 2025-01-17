import express from "express";
import Router from "./src/routes/Temperaturas.route.js";
import config from "./config.js";

const app = express();
const {PORT} = config;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", new Router().start());

app.listen(PORT, () => console.log(`Server listening on: ${PORT}`));
app.on("error", (error) => console.log(`ERROR: ${error}`));
