# Alura Geek

Alura Geek é uma aplicação web simples para gerenciar uma lista de produtos. Este projeto foi desenvolvido como parte da trilha de Front-End do curso Oracle Next Education. A aplicação permite listar, adicionar e excluir produtos.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- json-server (para a mock API)

## Funcionalidades

- Listar produtos
- Adicionar produtos
- Excluir produtos

## Estrutura do Projeto

- `index.html`: Contém a estrutura HTML da aplicação.
- `styles/`: Contém os arquivos CSS para estilização.
- `assets/`: Contém as imagens.
- `js/`: Contém os arquivos JavaScript que manipulam a lógica da aplicação.
- `products.json`: Contém os dados da mock API.

## Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/uber-sleep/challenge-alurageek.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd challenge-alurageek
    ```

3. Instale o json-server globalmente (se ainda não o tiver instalado):
    ```bash
    npm install -g json-server
    ```

4. Inicie o json-server:
    ```bash
    json-server --watch products.json
    ```

5. Abra o arquivo `index.html` no seu navegador.

## Uso

### Listar Produtos

Os produtos são listados automaticamente na inicialização da aplicação. A lista de produtos é carregada da mock API (`products.json`).

### Adicionar Produtos

1. Preencha o formulário na seção "Adicionar produto" com as informações do produto.
2. Clique no botão "Guardar" para adicionar o produto à lista.

### Excluir Produtos

1. Clique no ícone de lixeira no cartão do produto que deseja excluir.
2. O produto será removido da lista.

## Mock API

A API mock é fornecida pelo json-server e simula operações básicas de CRUD. A estrutura de dados no `products.json` é a seguinte:

```json
{
  "produtos": [
    {
      "imagem": "./assets/products/stormtrooper.png",
      "alt": "Stormtrooper",
      "nome": "Stormtrooper",
      "preco": "70,00",
      "id": "1"
    },
    {
      "imagem": "./assets/products/gameboy.svg",
      "alt": "Game Boy Classic",
      "nome": "Game Boy Classic",
      "preco": "40,00",
      "id": "2"
    },
    ...
  ]
}
```

### Endpoints

- `GET /produtos`: Retorna a lista de produtos.
- `POST /produtos`: Adiciona um novo produto.
- `DELETE /produtos/:id`: Exclui um produto pelo ID.

## Créditos

Desenvolvido por Carolina Gonçalves para o curso Oracle Next Education em parceria com a Alura.
