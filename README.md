# Sistema de Controle de Inventário

## Descrição

Este projeto foi desenvolvido para auxiliar no gerenciamento de patrimônio de uma empresa. A aplicação permite cadastrar, consultar, atualizar e remover itens do inventário de forma prática e organizada.

Os dados são armazenados em um arquivo JSON, simulando um banco de dados.

## Tecnologias Utilizadas

- Node.js
- Express
- JavaScript
- JSON
- API REST

## Instalação

Abra o projeto no Visual Studio Code e execute o comando:

```bash
npm install
```

## Execução

Para iniciar o servidor:

```bash
npm start
```

O sistema ficará disponível em:

```text
http://localhost:3000
```

## Estrutura do Projeto

```text
inventario-backend/

data/
└── inventario.json

src/
├── controllers/
│   └── inventarioController.js
├── routes/
│   └── inventarioRoutes.js
└── services/
    └── inventarioService.js

package.json
server.js
README.md
```

## Rotas da API

### Cadastrar Item

**POST** `/inventario`

Exemplo:

```json
{
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-10",
  "valor": 3500,
  "patrimonio": "PAT-00125"
}
```

### Listar Todos os Itens

**GET** `/inventario`

### Buscar Item por ID

**GET** `/inventario/:id`

### Atualizar Item

**PUT** `/inventario/:id`

### Excluir Item

**DELETE** `/inventario/:id`

## Funcionalidades Extras

### Buscar por Nome

**GET** `/inventario/buscar/nome?nome=Notebook`

### Filtrar por Local

**GET** `/inventario/filtrar/local?local=Laboratório`

### Filtrar por Valor

**GET** `/inventario/filtrar/valor?valor=3000`

Retorna todos os itens com valor superior ao informado.

### Consultar Patrimônio

**GET** `/inventario/patrimonio/PAT-00125`

### Valor Total do Inventário

**GET** `/inventario/total/valor`

## Códigos de Retorno

| Código | Descrição |
|---------|-----------|
| 200 | Operação realizada com sucesso |
| 201 | Item cadastrado com sucesso |
| 400 | Dados inválidos |
| 404 | Item não encontrado |
| 409 | Patrimônio já cadastrado |

## Testes

As rotas podem ser testadas utilizando ferramentas como Postman ou Insomnia para validar as operações de cadastro, consulta, atualização e remoção dos itens.

![(print01)](./imagens/Captura%20de%20tela%202026-09-03%20164218.png)
![(print02)](./imagens/Captura%20de%20tela%202026-09-03%20164719.png)
![(print03)](./imagens/Captura%20de%20tela%202026-09-10%20160846.png)
![(print04)](./imagens/Captura%20de%20tela%202026-09-10%20160940.png)
![(print05)](./imagens/Captura%20de%20tela%202026-09-10%20160952.png)
![(print06)](./imagens/Captura%20de%20tela%202026-09-10%20161247.png)
![(print07)](./imagens/Captura%20de%20tela%202026-09-10%20161341.png)
![(print08)](./imagens/Captura%20de%20tela%202026-09-10%20161422.png)
![(print09)](./imagens/Captura%20de%20tela%202026-09-10%20161500.png)
![(print10)](./imagens/Captura%20de%20tela%202026-09-10%20161605.png)
![(print11)](./imagens/Captura%20de%20tela%202026-09-10%20161655.png)
![(print12)](./imagens/Captura%20de%20tela%202026-09-10%20161742.png)
![(print13)](./imagens/Captura%20de%20tela%202026-09-10%20161855.png)
![(print14)](./imagens/Captura%20de%20tela%202026-09-10%20161914.png)
![(print15)](./imagens/Captura%20de%20tela%202026-09-10%20161959.png)