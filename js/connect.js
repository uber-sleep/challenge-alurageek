const endpoint = "http://localhost:3000/produtos";

// Função para obter os produtos da API
async function getApi() {
    try {
        const response = await fetch(endpoint);
        
        // Verifica se a resposta é válida
        if(!response.ok) {
            throw new Error(`Não foi possível obter os produtos.`);
        };

        const data = await response.json();
        
        return data;
    } catch (e){
        // Se ocorrer um erro, exibe uma mensagem na tela e o erro no console
        const div = document.querySelector('[data-products]');
        div.innerHTML = `
        <div class="product-card__empty">
            <p>Nenhum produto foi adicionado</p>
        </div>`;
        console.error(e);
        throw e;
    };
};

// Função para adicionar um novo produto à API
async function postToApi(image, alt, name, price, id ) {
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                imagem: image,
                alt: alt,
                nome: name,
                preco: price,
                id: id
            })
        });

        // Verifica se a resposta é válida
        if (!response.ok) {
            throw new Error("Não foi possivel enviar o produto!")
        };

        const data = await response.json();
        
        return data;
    } catch (e) {
        // Se ocorrer um erro, exibe o erro no console
        console.error(e);
        throw e;
    };
};

// Função para excluir um produto da API pelo ID
async function deleteFromApi(id) {
    try {
        const response = await fetch(`http://localhost:3000/produtos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });

        // Verifica se a resposta é válida
        if (!response.ok) {
            throw new Error("Não foi possivel deletar o produto!")
        };

        const data = await response.json();
        
        return data;
    } catch (e) {
        // Se ocorrer um erro, exibe o erro no console
        console.error(e);
        throw e;
    };
};

// Exporta as funções para serem usadas em outros arquivos
export const apiMethod = { getApi, postToApi, deleteFromApi };
