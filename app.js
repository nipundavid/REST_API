const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//import Routers
const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);

// Routes
app.get("/", (req, res) => {
    res.send("We are on home");
});

//connect with db
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Connected to DB!");
    }
);

// Listen
app.listen(3000);