import { apiMethod } from "./connect.js";

document.addEventListener('DOMContentLoaded', async () => {
    const productList = await apiMethod.getApi();

    document.querySelectorAll('[data-delete]').forEach(button => {
        button.addEventListener("click", async (event) => {
            const productTitle = event.target.closest(".product-card").querySelector('p').textContent;
            
            const product = productList.find(item => productTitle == item.nome);

            try {
                apiMethod.deleteFromApi(product.id);
            } catch (error) {
                console.error('Erro ao deletar produto:', error);
            };
        });
    });
});
