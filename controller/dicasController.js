const { Dicas: dicasModel } = require("../model/Dicas");

const dicasController = {

    create: async(req, res) => {
        try {
            const dicas = {
                imagem: req.body.imagem,
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                conteudo: req.body.conteudo
            };

            const response = await dicasModel.create(dicas);
        
            res.status(201).json({response, msg: "Dica criada com sucesso!!"})
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    },

    getAll: async(req, res) => {
        try {
            const response = await dicasModel.find();
            res.status(200).json(response)


        } catch (error) {
            res.status(400).json({message: error.message.status})
        }
    },

    findById: async(req,res) => {
        try {
            const response = await dicasModel.findById(req.params.id);
            res.status(200).json(response)

        } catch (error) {
            res.status(400).json({message: error.message.status})
 
        }

    },
    findByIdAndUpdate: async(req, res) => {
        try {
            const id = req.params.id;
            const atualizarDados = req.body;
            const options = { new: true };
    
            const result = await dicasModel.findByIdAndUpdate(
                id, atualizarDados, options
            )
    
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    deleteById: async (req, res) => {
        try {
          const id = req.params.id;
          const dado = await dicasModel.findByIdAndDelete(id);
          if (!dado) {
            return res.status(404).json({ message: "Documento não encontrado." });
          }
          return res.send(`Documento com o nome ${dado.titulo} foi deletado.`);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },


    
};

module.exports = dicasController;