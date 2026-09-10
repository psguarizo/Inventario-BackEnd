const express = require("express")
const router = express.Router()

const inventarioService = require("../services/inventario.service")

router.get("/", (req, res) => {
    res.json(inventarioService.listar())
})

router.get("/:id", (req, res) => {
    const item = inventarioService.buscarPorId(req.params.id)

    if (!item) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

    res.json(item)
})

router.post("/", (req, res) => {
    const novoItem = inventarioService.adicionar(req.body)

    res.status(201).json(novoItem)
})

router.put("/:id", (req, res) => {
    const item = inventarioService.alterar(
        req.params.id,
        req.body
    )

    if (!item) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

    res.json(item)
})

router.delete("/:id", (req, res) => {
    const removido = inventarioService.excluir(req.params.id)

    if (!removido) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

    res.json({
        mensagem: "Item removido com sucesso"
    })
})

module.exports = router