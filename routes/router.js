const router = require("express").Router()

const dicasController = require("../controller/dicasController")


//criar
router.route("/dicas")
.post(
    (req, res) => dicasController.create(req, res)
)

//obter todos
router.route("/dicas")
.get(
    (req, res) => dicasController.getAll(req,res)
)

//obter pelo id
router.route('/dicas/:id')
.get(
    (req, res) => dicasController.findById(req, res)
)

//atualizar pelo Id
router.route('/dicas/:id').patch(
    (req,res) => dicasController.findByIdAndUpdate(req,res)
)


//Deletar pelo ID
router.delete("/dicas/:id", dicasController.deleteById);



module.exports = router;