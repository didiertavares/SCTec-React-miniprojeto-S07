## Link do vídeo de apresentação Projeto CheckOut M2S7 - Orpheus Planet Ltda.
https://youtu.be/uz0KCPhKoww




## Orpheus Planet CheckOut pages:
O projeto CheckOut page é parte de uma aplicação de e-commerce Orpheus Planet em React, visando simular o caminho por parte do usuário da conferência final (pós-seleção e adição) de produtos no carrinho às páginas finais de status da transação (compra aprovada ou recusada), passando pela página de coleta e tratamento dos dados pessoais e bancários.




## Sobre o projeto:
Mini-projeto de metade de módulo visando o desenvolvimento de uma aplicação multi-páginas com roteamento, construída em React.
O CheckOut Orpheus Planet permite fazer conferência final dos produtos selecionados dentro do carrinho, antes de passar para um formulário para coletar os dados pessoais e bancários necessários à verificação e efetivação do pagamento, o processo final concluindo-se em páginas de status da referida compra: sucesso ou recusa da compra.
contém:

    . renderização de uma lista de componentes (dos produtos selecionados) com seus respectivos props de key, imagem, nome, marca, preço unitário e subtotal, com botão de navegação subsequente, quantidade de ítens e valor total do carrinho.

    . coleta e registro dos dados pessoais e bancários do cliente, como cartão de crédito, seguidos de devida checagem de formato e verossemelhança. a autenticação aqui é fictícia, pois o ambiente é fechado e meramente didático. 

    . navegação interna a partir do botão de "confirmar pagamento" para uma de duas possibilidades de status final da compra: sucesso ('pagamento aprovado') ou falha ('cartão recusado, tentativa de golpe'), conforme resultado de análise aplicada ao número de cartão.




## Funcionalidades:
Componentização e renderização

. Utilização de arrays e variáveis, tanto puras de JS quanto as de React: UseState, useEffect, useForm, useNavigate, useLocalStorage

. Cadastro de cliente com React Hook Form: formulário dinâmico com campos de titular, CPF, número de cartão de crédito, CVV e data de validade do mesmo.

. Persistência de Dados: armazenamento automático e recuperação dos dados do atual cliente via localStorage.

. Envio e processamento fake de dados bancários para análise: submit assíncrono dos dados para fins de análise de status do cartão e da compra.

. Análise de autenticidade dos números do cartão.

. Roteamento: navegação entre diferentes paths da aplicação.

. Interface Acessível e Responsiva: estruturação semântica em HTML5 e CSS atendendo aos requisitos de acessibilidade e boas práticas. Responsividade e estética a serem refinados.




## Tecnologias:
Este projeto foi desenvolvido com:
    . React
    . HTML
    . CSS
    . e um pouco de JS puro: pagamento.js, produtos.js

versões de install:     Vite v. 8.2.2
                        Node v24.14.0
                        npm version: 11.9.0
                        React v. 19.2.8
                        React-Router-Dom v.7.18.3
                        React-Hook-Form v. 7.88.0, 

-> rodar npm install para garantir instalação e configuração corretas de todos os arquivos e dependências necessários ao funcionamento da aplicação em sua máquina local.




## Estruturas de pastas:

├── package.json        # Dependências e scripts do Vite
├── vite.config.js      # Configuração do Vite
├── README.md           # Documentação e instruções de execução
├── src/
│     ├── main.jsx      # Ponto de entrada da aplicação
│     ├── App.jsx       # Configuração das 4 rotas
│     ├── pages/
│     │    ├── Carrinho.jsx     # Produtos, subtotais e total da compra
│     │    ├── Pagamento.jsx    # Formulário com React Hook Form e Zod
│     │    ├── Sucesso.jsx      # Confirmação da compra
│     │    └── Falha.jsx        # Mensagem "tentativa de golpe"
│     │
│     ├── components/
│     │    ├── CardProduto.jsx # Exibição de um produto via props
│     │    ├── Footer.jsx       # Componente Footer presente em todas as páginas, inserido no roteamento main.jsx
│     │    ├── Header.jsx       # Componente Header presente em todas as páginas, inserido no roteamento main.jsx
│     │    └── ResumoCompra.jsx # Resumo dos valores da compra
│     │
│     ├── hooks/
│     │     └── useLocalStorage.js # Persistência dos dados após submit formulário e recarregamento página
│     │
│     ├── utils/
│     │     └── pagamento.js    # Regra que identifica dígitos todos iguais
│     │
│     ├── data/
│     │     └── produtos.js     # Array fixo de produtos
│     │
│     └── assets/
│           │
│           ├──styles/
│           │    └── index.css       # Estilos e responsividade 
│           │
│           └── img/
│                └── logo.svg         # Identidade visual da loja      
│
├── .gitignore          # Lista de arquivos que não sobem pro Github
├── eslint.config.js    # Configuração do Eslint
└── index.html          # Arquivo do html




## Como executar
A criação do ambiente adequado de pastas, subpastas, arquivos e dependencies decorrentes  (assets, styles, .gitignore, node_modules, package.json, eslint, etc) devidamente configurados se deu por meio do Vite.
    
    1. Clonar ou baixar este repositório para o seu computador.
    
    2. Como esta aplicação em React utiliza um ambiente pré-configurado e calibrado por Vite, após clonar / forkear o repo em sua máquina, rode 'npm install' para o projeto instalar e atualizar todas as ferramentas e dependências necessárias ao seu bom funcionamento.
    
    3. Abra a pasta no VS Code, abra o terminal na subpasta 'miniprojetoS07' - abaixo do repo principal - e inicie sua execução com 'npm run dev'




## Aprendizados e desafios para a melhoria do presente projeto:
    . dificuldade: entender o papel e a arquitetura e a implementação do hook usePagamento.js. 

    . para o futuro: implementar contextos, rotas privadas, homepage e carrinhos dinâmicos, + estudos e ajustes finos de CSS, para uma melhor estética e responsividade.






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
