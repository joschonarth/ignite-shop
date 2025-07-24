<h1 align="center"><img src="./public/icon.svg" width="22" /> Ignite Shop</h1>

<p align="center"><i>Uma aplicação de ecommerce para explorar produtos e fazer checkout com Stripe, construída com Next.js, TypeScript e StitchesJS.</i>
  <br/><br/>
  <img src="https://img.shields.io/github/last-commit/joschonarth/ignite-shop?style=for-the-badge&color=1F8459&labelColor=1C1E26" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/joschonarth/ignite-shop?style=for-the-badge&color=1F8459&labelColor=1C1E26" alt="top-language">
  <img src="https://img.shields.io/github/languages/count/joschonarth/ignite-shop?style=for-the-badge&color=1F8459&labelColor=1C1E26" alt="languages-count">
</p>

![product](https://github.com/user-attachments/assets/9c9d3be8-3633-47da-93d4-81e24c7602e6)

## 📖 Visão Geral

**Ignite Shop** é uma aplicação de ecommerce desenvolvida com **Next.js** que explora conceitos avançados como Server-Side Rendering (SSR), Static Site Generation (SSG) e SPA. A aplicação é integrada com o Stripe para processamento de pagamentos e utiliza animações com o Keen Slider para uma experiência mais fluida e moderna.

## 🛠️ Tecnologias Utilizadas

- ⚙️ **Next.js** – Framework React com renderização SSR e SSG.
- 💅 **StitchesJS** – Biblioteca de CSS-in-JS moderna e performática.
- 🌐 **Axios** – Cliente HTTP para requisições externas.
- 💸 **Stripe** – Integração de pagamentos com checkout seguro.
- 🎢 **Keen Slider** – Carrossel responsivo com navegação suave.
- 💎 **Zod** – Validação de dados.
- 🔧 **ESLint** – Análise e padronização de código.

## ⚙️ Funcionalidades

- 🛍️ **Catálogo de produtos**: Lista com os produtos disponíveis.
- 🔍 **Página de detalhes**: Detalhes do produto com imagem, descrição e preço.
- 💳 **Checkout com Stripe**: Redirecionamento seguro para pagamento.
- ⚡ **Carrossel animado**: Navegação com slider responsivo.
- 🚀 **SSG + SSR + SPA**: Estratégias combinadas para performance ideal.

## 🧠 Conceitos Aplicados

- **Server-Side Rendering (SSR)**: Renderização das páginas no servidor a cada requisição.
- **Static Site Generation (SSG)**: Páginas geradas estaticamente em tempo de build.
- **Single Page Application (SPA)**: Navegação fluida sem recarregamento completo da página.

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos

- 🟩 [Node.js 20+](https://nodejs.org/)
- 📦 [npm 10+](https://www.npmjs.com/)

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joschonarth/ignite-shop.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd ignite-shop
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente:

    ```bash
    cp .env.local.example .env.local
    ```

### ▶️ Execução

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

## 🧾 Configuração do Stripe

Para que a aplicação funcione corretamente com a API do Stripe, siga os passos abaixo:

### 1. Crie uma conta no Stripe

Acesse [stripe.com](https://stripe.com) e crie uma conta gratuita.

### 2. Obtenha as chaves de API

Vá até o [painel de desenvolvedor](https://dashboard.stripe.com/test/apikeys) e copie suas chaves em **modo de teste**.

No arquivo `.env.local`, adicione as variáveis:

```env
STRIPE_PUBLIC_KEY=pk_test_sua_public_key
STRIPE_SECRET_KEY=sk_test_sua_secret_key
```

### 3. Cadastre produtos no Stripe

1. Acesse o [dashboard de produtos do Stripe](https://dashboard.stripe.com/test/products).
2. Clique em "Adicionar produto".
3. Preencha os dados (nome, imagem, descrição, etc.).
4. Adicione um preço ao produto (ex: R$ 199,90) e selecione o tipo como Preço único.

> ✅ É necessário pelo menos um produto com preço cadastrado para que o fluxo de checkout funcione corretamente.

### 4. Teste o Checkout

Durante o checkout, você pode utilizar cartões de teste fornecidos pelo Stripe. Acesse:

📄 [Documentação oficial de testes do Stripe](https://docs.stripe.com/testing)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias ou correções. 💡

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixe uma ⭐ aqui no GitHub!

## 📞 Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joschonarth/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)
