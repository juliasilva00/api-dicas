const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000

//DB Connection
const conn = require("./db/conn");
conn();

//Routes
const routes = require("./routes/router")

app.use('/api', routes)

app.listen(port, () => {
    console.log("Servidor está funcionado!!");
});


