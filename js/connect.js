const endpoint = "http://localhost:3000/produtos";

async function getApi() {
    try {
        const response = await fetch(endpoint);
        
        if(!response.ok) {
            throw new Error(`Não foi possível obter os produtos.`);
        };

        const data = await response.json();
        
        return data;
    } catch (e){
        console.error(e);
        throw e;
    };
};

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

        if (!response.ok) {
            throw new Error("Não foi possivel enviar o produto!")
        };

        const data = await response.json();
        
        return data;
    } catch (e) {
        console.error(e);
        throw e;
    };
};

export const apiMethod = { getApi, postToApi };
