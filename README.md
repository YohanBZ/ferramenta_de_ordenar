# Ferramenta de ordenar 📋

## Descrição:

Este projeto é uma ferramenta simples e poderosa criada para ajudar desenvolvedores a ordenar suas propriedades CSS. Seja você um desenvolvedor front-end ou um designer, esta ferramenta irá economizar seu tempo, ajudando você a organizar seu código CSS de forma mais eficiente.

### Objetivo:

O objetivo principal deste projeto é fornecer uma interface de linha de comando onde os usuários podem inserir várias propriedades CSS e obter uma lista ordenada de A-Z das propriedades.

## 📁 Requisitos:

- NodeJS (v18.16.0): O projeto foi desenvolvido usando NodeJS, garantindo sua portabilidade e facilidade de uso.
  Link para download [NodeJS ](https://nodejs.org/pt-br/download)

## 💻 Como executar:

1. Certifique-se de ter o Node.js instalado em seu sistema.

```
node -v
```

2. Clone este repositório usando comando:

```
git clone https://github.com/YohanBZ/ferramenta_de_ordenar.git`.
```

3. Navegue até a pasta do projeto via terminal e acesse com:

```
cd ferramenta_de_ordenar
```

4. Abrir em um editor de codigo com:

```
 code .
```

5. Execute comando para instalar as dependências:

```
npm install
```

6. Execute o arquivo principal usando o comando:

```
npm start
```

### ✅ Exemplos de entrada:

7. Siga as instruções no terminal para adicionar propriedades CSS.

```
Digite uma propriedade de css ou digite 'sair' para encerrar: Flex
```

- Após adicionada precione pressione [enter]

```
Propriedade adicionada✅
```

8. Digite 'sair' quando terminar e veja sua lista ordenada de propriedades!

```
Digite uma propriedade de css ou digite 'sair' para encerrar: sair

*** Lista:
- Align-itens
- Background
- Text-align
```

## ❌ Tratamento de erro:

#### Entrada Vazia:

Quando o programa solicitar a inserção de uma propriedade de CSS, simplesmente pressione "Enter" sem digitar nada ou durante a execução do programa, ele exibira a mensagem de:

```
 Valor inválido ou já existente❗️
```

## 📖 Bibliotecas e Tecnologias Utilizadas:

- [NodeJS Doc.](https://nodejs.org/en/docs) : Fornece o ambiente de execução para o projeto .
- [Readline](https://nodejs.org/api/readline.html) : Um módulo nativo do NodeJS usado para ler a entrada do usuário na interface da linha de comando.

## 📄 Licença

- [MIT](./LICENSE)

---

Feito por: YohanBZ.
