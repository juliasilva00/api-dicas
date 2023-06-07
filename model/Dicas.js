const mongoose = require("mongoose")

const { Schema } = mongoose;

const dicasSchema = new Schema ({
    imagem: {
        required: true,
        type: String
    },
    titulo: {
        required: true,
        type: String
    },
    descricao: {
        required: true,
        type: String
    },
    conteudo: {
        required: true,
        type: String
    }
}, {timestamps: true}) //salva a data de criação do registro e atualização

const Dicas = mongoose.model("Dicas", dicasSchema)

module.exports = {
    Dicas,
    dicasSchema
}