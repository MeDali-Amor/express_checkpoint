// Var declaration
const express = require("express");
const path = require("path");
const app = express();

const date = new Date();
const day = date.getDay();
const hour = date.getHours();

// Middelwear
if (day > 0 && day < 5 && hour > 9 && hour < 17) {
    app.use(express.static("Public"));
} else {
    app.get("*", (req, res) => {
        res.send(
            "Service not available at the moment! <br/> Please try again from Monday to Friday from 9 O'clock to 17 O'clock."
        );
    });
}

// app.use(express.static("Public"));

// app.get("/", function (req, res) {
//     console.table({ method: req.method });
//     console.table({ url: req.url });
//     res.sendFile(__dirname + "/Public/index.html");
// });

// app.get("/services", function (req, res) {
//     console.table({ method: req.method });
//     console.table({ url: req.url });
//     res.sendFile(__dirname + "/Public/services.html");
// });

// app.get("/contact", function (req, res) {
//     console.table({ method: req.method });
//     console.table({ url: req.url });
//     res.sendFile(__dirname + "/Public/contact.html");
// });

// app.get("/style.css", (req, res) => {
//     res.sendFile(__dirname + "/Public/style.css");
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
