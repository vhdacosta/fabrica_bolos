# Fábrica de Bolos 🍰

Site de receitas caseiras de bolos com identidade visual inspirada em marcas tradicionais brasileiras.

## 📋 Sobre o Projeto

Este é um site completo de receitas de bolos desenvolvido com Next.js, TypeScript e Tailwind CSS. O projeto conta com:

- **Landing page** moderna e atrativa
- **Sistema de busca e filtros** para receitas
- **Base de dados** com categorias e receitas
- **API REST** completa para gerenciamento
- **Design responsivo** com paleta de cores personalizada

## 🎨 Identidade Visual

### Paleta de Cores
- **Vermelho Bolo**: `#C8102E` (principal)
- **Rosa Bolo**: `#F9B8B8` (secundária)
- **Creme Baunilha**: `#F9DCB8` (acento)
- **Cinza Texto**: `#333333` (texto)

### Tipografia
- **Títulos**: Playfair Display (serif)
- **Corpo**: Nunito (sans-serif)

## 🚀 Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Armazenamento**: Arquivos JSON locais
- **Ícones**: React Icons

## 🗄️ Estrutura de Dados

Os dados são armazenados em arquivos JSON simples:

- **`src/data/categories.json`** - Lista de categorias
- **`src/data/recipes/*.json`** - Receitas individuais (uma por arquivo)

Não é necessário banco de dados! Perfeito para até 200+ receitas.

## 🛠️ Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

1. **Instale as dependências**
```bash
npm install
```

2. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

3. **Acesse no navegador**
```
http://localhost:3000
```

Pronto! Não precisa configurar banco de dados. 🎉

## 📡 API Endpoints

### Receitas
- `GET /api/recipes` - Lista receitas com filtros
- `GET /api/recipes/:slug` - Busca receita específica
- `POST /api/recipes` - Cria nova receita (admin)
- `PUT /api/recipes/:slug` - Atualiza receita (admin)
- `DELETE /api/recipes/:slug` - Remove receita (admin)

### Categorias
- `GET /api/categories` - Lista todas as categorias
- `POST /api/categories` - Cria nova categoria (admin)

## 🎯 Funcionalidades Implementadas

✅ Landing page completa  
✅ Listagem de receitas com filtros  
✅ Página individual de receita  
✅ Sistema de categorias  
✅ API REST completa  
✅ Banco de dados estruturado  
✅ Seed com 5 receitas de exemplo  
✅ Design responsivo  

## 📝 Receitas de Exemplo

O seed popula o banco com:
1. Bolo de Laranja Simples da Vó
2. Bolo de Cenoura com Cobertura de Chocolate
3. Bolo de Chocolate com Recheio de Brigadeiro
4. Bolo de Fubá Cremoso da Casa
5. Bolo Integral de Banana com Aveia

---

Desenvolvido com ❤️ e muito carinho, como os bolos da vó!
