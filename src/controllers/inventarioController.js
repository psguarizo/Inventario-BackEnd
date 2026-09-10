const inventarioService = require("../services/inventario.service")

const listar = (req, res) => {
    res.json(inventarioService.listar())
}

const buscarPorId = (req, res) => {
    const item = inventarioService.buscarPorId(req.params.id)

    if (!item) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

    res.json(item)
}

const adicionar = (req, res) => {
    const novoItem = inventarioService.adicionar(req.body)

    res.status(201).json(novoItem)
}

const alterar = (req, res) => {
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
}

const excluir = (req, res) => {
    const removido = inventarioService.excluir(req.params.id)

    if (!removido) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

    res.json({
        mensagem: "Item removido com sucesso"
    })
}

module.exports = {
    listar,
    buscarPorId,
    adicionar,
    alterar,
    excluir
}