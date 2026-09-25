# IphoneStore — Template comercial

Landing page comercial simples, leve e fácil de editar para uma loja de iPhones.

Stack: **Next.js 16 + TypeScript + Tailwind CSS v4 + App Router**.

Sem banco de dados, sem autenticação, sem backend, sem upload, sem temas.

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm start
```

## Como personalizar

Tudo que você precisa alterar está centralizado em **dois arquivos**:

### 1. `data/store.ts` — configurações da loja

```ts
export const storeConfig = {
  name: "IphoneStore",          // nome exibido no header, footer e metadata
  whatsapp: "SEU_NUMERO_AQUI",  // apenas números, com DDI (ex.: 5581999999999)
  instagram: "INSTAGRAM_URL",   // URL completa do perfil
  location: "Sua localização",  // texto livre
};
```

### 2. `data/products.ts` — catálogo

- `products[]` — lista de iPhones exibidos no catálogo.
- `accessories[]` — lista de acessórios.

Cada `product` possui:

```ts
{
  id: "iphone-15-pro",
  name: "iPhone 15 Pro",
  image: "/imagens/iphones/iphone-15-pro.svg",
  storage: "256GB",
  condition: "Novo" | "Seminovo",
  price: 5999,
}
```

### 3. Cores

Edite as variáveis em `app/globals.css`, dentro do bloco `@theme`:

```css
@theme {
  --color-bg-primary: #050505;
  --color-bg-secondary: #111111;
  --color-gold: #D4AF37;
  --color-gold-light: #F0C75E;
  --color-text-primary: #FFFFFF;
  --color-text-muted: #BDBDBD;
}
```

Após alterar, basta usar as classes Tailwind: `bg-bg-primary`, `text-gold`, `border-gold/30`, etc.

### 4. Nome da loja / logo

O componente `components/Logo.tsx` usa `storeConfig.name`. Basta alterar o nome em `data/store.ts` e ele se propaga para header, footer e metadata.

## Imagens dos iPhones

Coloque as imagens em `public/imagens/iphones/` seguindo o padrão:

```
public/imagens/iphones/iphone-xr.jpg
public/imagens/iphones/iphone-11.jpg
public/imagens/iphones/iphone-11-pro.jpg
...
public/imagens/iphones/iphone-16-pro-max.jpg
```

Formato recomendado: **JPG**. Também aceita PNG ou SVG — o importante é que o caminho em `data/products.ts` bata com o nome real do arquivo (incluindo a extensão).

Enquanto as imagens **não existirem**, o componente `SafeImage` exibe uma silhueta dourada como placeholder — a página nunca quebra.

A área da imagem em cada card é fixa (`220px` mobile, `240px` tablet, `280px` desktop) e a imagem é renderizada com `object-contain` para nunca distorcer.

**Dica para JPEG:** prefira imagens com **fundo branco ou transparente** salvas em JPG. Como o card tem fundo preto, fotos com fundo escuro podem ficar com baixo contraste. Se necessário, você pode editar o `SafeImage.tsx` para alterar o fundo do card da imagem.

## Estrutura do projeto

```
app/
  layout.tsx
  page.tsx
  globals.css
  icon.svg

components/
  Header.tsx       (client: menu mobile)
  Logo.tsx
  Hero.tsx
  ProductSection.tsx
  ProductCard.tsx
  Accessories.tsx
  About.tsx
  Location.tsx
  Instagram.tsx
  Contact.tsx
  Footer.tsx
  SafeImage.tsx    (client: fallback se SVG ausente)

data/
  store.ts
  products.ts

lib/
  whatsapp.ts

public/
  imagens/
    iphones/
      .gitkeep
```

## WhatsApp

O botão **Tenho interesse** abre o WhatsApp com a mensagem:

> Olá! Tenho interesse no iPhone 15 Pro 256GB. Gostaria de saber mais informações.

A função `buildWhatsAppLink(message)` está em `lib/whatsapp.ts` e usa o número configurado em `data/store.ts`.

## Responsividade

Pontos de quebra testados: 320 / 360 / 375 / 390 / 414 / 430 / 768 / 1024 / 1440 px.

- Mobile: 1 coluna de produtos.
- Tablet (`sm`): 2 colunas.
- Desktop (`lg`): 3 colunas.
- Desktop largo (`xl`): 4 colunas.

## SEO

Metadata configurada em `app/layout.tsx`:

- **Title:** `IphoneStore | iPhones e Acessórios`
- **Description:** `Encontre iPhones e acessórios. Confira nossos modelos disponíveis e fale conosco pelo WhatsApp.`

Edite livremente.
