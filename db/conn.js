const mongoose = require("mongoose");
require('dotenv').config()

async function main () {
    try{
        await mongoose.connect( process.env.ATLAS_URI);
        console.log("Conectado ao banco");

    }catch(error){
        console.log(`Erro: ${error}`);
    }

}

module.exports = main