const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require('cors')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.post("/api/wallet/registration", (req, res) => {
    const date = new Date();
    console.log(date.toGMTString(),":",date.getMilliseconds());
    res.send("ok")
})

app.listen(5000, () => {
    console.log("running")
})