const express = require("express");
const app = express();
const PORT = 3000;

const routers = require("./routers");

app.use(express.urlencoded( { extended: true }));
app.set("view engine", "ejs");

app.use(routers);

app.listen(PORT, function(){
    console.log(`Aplikasi berjalan di http://localhost:${PORT}`);
})