Feature: Gerenciamento de Pets na Petstore

  Scenario: Adicionar um novo pet à loja
    Given que estou logado como um vendedor na Petstore
    When eu adiciono um novo pet à loja com o id, nome, categoria e status especificados
    Then o pet é adicionado com sucesso ao estoque da loja

  Scenario: Verificar pets disponíveis para venda
    Given que estou logado como um vendedor na Petstore
    When eu verifico os pets disponíveis para venda
    Then uma lista de pets é exibida com base no status, facilitando para os clientes encontrar o animal perfeito para eles

  Scenario: Recuperar informações sobre um pet específico
    Given que estou logado como um vendedor na Petstore
    When eu recupero informações detalhadas sobre um pet específico usando o ID único do animal
    Then todas as informações detalhadas sobre o pet desejado são exibidas

  Scenario: Atualizar informações de um pet existente
    Given que estou logado como um vendedor na Petstore
    When eu atualizo as informações de um pet existente, modificando o nome, a categoria ou o status conforme necessário
    Then as informações do pet são atualizadas com sucesso

  Scenario: Remover um pet do estoque da loja
    Given que estou logado como um vendedor na Petstore
    When eu removo um pet do estoque da loja usando o ID único do animal
    Then o pet é removido com sucesso do estoque da loja, garantindo que a loja esteja sempre atualizada e organizada
