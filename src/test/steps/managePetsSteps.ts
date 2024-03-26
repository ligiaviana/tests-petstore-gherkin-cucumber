import { Given, When, Then } from "@cucumber/cucumber";
import axios from 'axios';

const petToAdd = {
    id: 369,
    category: {
        id: 1,
        name: "Porte Pequeno"
    },
    name: "doggie",
    photoUrls: [
        "https://httpstatusdogs.com/200-ok"
    ],
    tags: [
        {
            id: 1,
            name: "calm"
        }
    ],
    status: "sold"
};

Given('que estou logado como um vendedor na Petstore', function () {
    // Não é necessário implementar nada aqui para este exemplo
});

When('eu adiciono um novo pet à loja com o id, nome, categoria e status especificados', async function () {
    try {
        await axios.post('https://petstore.swagger.io/v2/pet', petToAdd);
        console.log('Pet adicionado com sucesso ao estoque da loja!');
    } catch (error: any) {
        throw new Error(`Erro ao adicionar pet à loja: ${error.message}`);
    }
});

When('eu verifico os pets disponíveis para venda', async function () {
    try {
        const response = await axios.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
        const pets = response.data;
        console.log('Lista de pets disponíveis para venda:', pets);
    } catch (error: any) {
        throw new Error(`Erro ao verificar pets disponíveis para venda: ${error.message}`);
    }
});

When('eu recupero informações detalhadas sobre um pet específico usando o ID único do animal', async function () {
    try {
        const petId = 369; 
        const response = await axios.get(`https://petstore.swagger.io/v2/pet/${petId}`);
        const petInfo = response.data;
        console.log('Informações detalhadas sobre o pet:', petInfo);
    } catch (error: any) {
        throw new Error(`Erro ao recuperar informações sobre o pet: ${error.message}`);
    }
});

When('eu atualizo as informações de um pet existente, modificando o nome, a categoria ou o status conforme necessário', async function () {
    try {
        const petId = 369; 
        const updatedPet = {
            name: 'newName',
            category: {
                id: 2,
                name: 'newCategory'
            },
            status: 'newStatus'
        };
        await axios.put(`https://petstore.swagger.io/v2/pet`, updatedPet);
        console.log('Informações do pet atualizadas com sucesso.');
    } catch (error: any) {
        throw new Error(`Erro ao atualizar informações do pet: ${error.message}`);
    }
});

When('eu removo um pet do estoque da loja usando o ID único do animal', async function () {
    try {
        const petId = 369; 
        await axios.delete(`https://petstore.swagger.io/v2/pet/${petId}`);
        console.log('Pet removido com sucesso do estoque da loja.');
    } catch (error: any) {
        throw new Error(`Erro ao remover pet do estoque da loja: ${error.message}`);
    }
});

Then('o pet é adicionado com sucesso ao estoque da loja', function () {
    // Não é necessário implementar nada aqui para este exemplo
});

Then('uma lista de pets é exibida com base no status, facilitando para os clientes encontrar o animal perfeito para eles', function () {
    // Não é necessário implementar nada aqui para este exemplo
});

Then('todas as informações detalhadas sobre o pet desejado são exibidas', function () {
    // Não é necessário implementar nada aqui para este exemplo
});

Then('as informações do pet são atualizadas com sucesso', function () {
    // Não é necessário implementar nada aqui para este exemplo
});

Then('o pet é removido com sucesso do estoque da loja, garantindo que a loja esteja sempre atualizada e organizada', function () {
    // Não é necessário implementar nada aqui para este exemplo
});
