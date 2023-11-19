require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./route/noteroute");
const Userrouter = require("./route/userroute");

mongoose.connect(process.env.URL);
app.use(express.json());
app.use(cors());

app.use("/note/", router);

app.use("/auth", Userrouter);

app.listen(process.env.PORT, () => {
  console.log("server connected");
});
