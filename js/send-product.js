import { apiMethod } from "./connect.js";

const form = document.querySelector('[data-form]');

// Função para enviar um novo produto
async function postNewCard(event) {
    event.preventDefault();

    const img = document.querySelector('[data-image]').value;
    const alt = "";
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-value]').value;

    try {
        await apiMethod.postToApi(img, alt, name, price);

        alert("Produto enviado!");

    } catch(e) {
        alert(e);

        console.log(e);
    };
};

// Adiciona um ouvinte de evento ao formulário para enviar o produto ao ser submetido
form.addEventListener("submit", event => postNewCard(event));
