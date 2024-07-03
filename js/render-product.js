import { apiMethod } from "./connect.js";

const productList = document.querySelector('[data-products]');

// Função para criar a estrutura do cartão de produto
function productCardConstruct(img, alt, title, price) {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="product-card">
        <img src="${img}" alt="${alt}">

        <div class="product-card__info">
            <p>${title}</p>
    
            <div class="product-card__value">
                <p>$ ${price}</p>
                <button><img src="./assets/Vector.png" alt="Icone de lixeira" data-delete></button>                               
            </div>
        </div>
    </div>`

    return element;
};

// Função para renderizar os produtos na tela
async function productRendering() {
    try {
        const dataList = await apiMethod.getApi();

        // Adiciona cada produto na lista de produtos
        dataList.forEach(element => productList.appendChild(
            productCardConstruct(element.imagem, element.alt, element.nome, element.preco)
        ));
    } catch (e){
        console.log(e);
    };
};

// Chama a função para renderizar os produtos ao carregar a página
productRendering();
