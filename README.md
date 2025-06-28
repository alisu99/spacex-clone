# 🚀 Replicação da Interface do Site SpaceX

Este projeto foi desenvolvido como parte de um desafio técnico com o objetivo de replicar a home do site oficial da **SpaceX**, focando em fidelidade visual, animações suaves, responsividade e boas práticas de desenvolvimento com **Tailwind CSS**.

---

## 🔗 Deploy

Acesse o projeto online em:  
👉 [https://spacex-clone-snowy.vercel.app/](https://spacex-clone-snowy.vercel.app/)

---

## 🎯 Objetivo

Criar uma aplicação frontend com alta fidelidade visual e comportamental com o site da SpaceX. São partes do desafio:

- Qualidade do código
- Organização de pastas e componentes
- Uso eficiente de tecnologias modernas
- Fidelidade visual e responsividade
- Performance e boas práticas

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **Tailwind CSS** para estilização
- **HTML5 + CSS3**
- **Transições com CSS**
- **Responsividade com media queries**
- **Deploy via Vercel**

---

## ✨ Funcionalidades

- ✅ Hero section com imagem responsiva
- ✅ Menu lateral com animação de abertura
- ✅ Itens do menu com efeito "dominó"
- ✅ Botões com animação no hover
- ✅ Cards com imagens e textos sobre missões
- ✅ Footer com links
- ✅ Design mobile-first
- ✅ Responsividade total (mobile → desktop)

---

## 🧾 Estrutura CSS Personalizada

- `@tailwind base`, `components`, `utilities`
- Fontes personalizadas (`D-DIN-Bold.otf`)
- Navbar com animação de esconder/mostrar
- Ícone "hambúrguer" animado para abrir o menu lateral
- Classes `.menu-item` + `.delay-*` para entrada sequencial dos itens
- Backgrounds diferentes para cada seção e dispositivo
- Utilitários customizados para espaçamento e layout

---

## 📁 Como Rodar Localmente

```bash
# Clone este repositório
git clone https://github.com/alisu99/spacex-clone.git

# Acesse o diretório
cd spacex-clone

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
