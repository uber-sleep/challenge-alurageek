import { apiMethod } from "./connect.js";

const form = document.querySelector('[data-form]');

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

form.addEventListener("submit", event => postNewCard(event));
