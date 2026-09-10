const inventario = require("../dados/inventario.json")

const listar = () => inventario

const buscarPorId = (id) => {
    return inventario.find(item => item.id == id)
}

const adicionar = (novoItem) => {
    novoItem.id = inventario.length + 1
    inventario.push(novoItem)
    return novoItem
}

const alterar = (id, dados) => {
    const indice = inventario.findIndex(item => item.id == id)

    if (indice < 0) return null

    inventario[indice] = {
        id: Number(id),
        ...dados
    }

    return inventario[indice]
}

const excluir = (id) => {
    const indice = inventario.findIndex(item => item.id == id)

    if (indice < 0) return false

    inventario.splice(indice, 1)
    return true
}

module.exports = {
    listar,
    buscarPorId,
    adicionar,
    alterar,
    excluir
}