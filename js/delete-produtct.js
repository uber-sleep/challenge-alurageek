import { apiMethod } from "./connect.js";

// Adiciona ouvintes de evento para deletar produtos quando a página é carregada
document.addEventListener('DOMContentLoaded', async () => {
    const productList = await apiMethod.getApi();

    // Adiciona ouvintes de clique a cada botão de deletar
    document.querySelectorAll('[data-delete]').forEach(button => {
        button.addEventListener("click", async (event) => {
            const productTitle = event.target.closest(".product-card").querySelector('p').textContent;
            
            const product = productList.find(item => productTitle == item.nome);

            try {
                // Chama a função para deletar o produto
                apiMethod.deleteFromApi(product.id);
            } catch (error) {
                console.error('Erro ao deletar produto:', error);
            };
        });
    });
});
