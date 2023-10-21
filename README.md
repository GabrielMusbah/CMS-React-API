# CMS em JavaScript

Esta API foi desenvolvida com o intuito de criar um CMS inspirado no WordPress, porém construído inteiramente com JavaScript, utilizando Node.js no backend e React no frontend. 
Ela fornece endpoints para gerenciar usuários, páginas, posts e "pagePosts". A seguir, são apresentadas as rotas disponíveis e os objetos esperados para criação de cada recurso.

## Rotas

### Usuários

- Buscar todos os usuários: GET /user  
- Buscar usuário por ID: GET /user/:id  
- Criar um novo usuário: POST /user  

### Páginas

- Buscar todas as páginas: GET /page  
- Buscar página por ID: GET /page/:id  
- Criar uma nova página: POST /page  

### Posts

- Buscar todos os posts: GET /post  
- Buscar post por ID: GET /post/:id  
- Criar um novo post: POST /post  

### PagePosts

- Buscar todos os PagePosts: GET /pagePost  
- Buscar PagePost por ID: GET /pagePost/:id  
- Criar um novo PagePost: POST /pagePost  

## Comandos de Script

Para facilitar o desenvolvimento e a execução do projeto, foram definidos os seguintes scripts no `package.json`:

- **Build:** Compila os arquivos TypeScript para JavaScript.
```bash
npm run build
```

- **Start:** Inicia o servidor com os arquivos JavaScript compilados.
```bash
npm start
```

- **Dev:** Executa o projeto em modo de desenvolvimento com o `nodemon`, observando mudanças nos arquivos .ts.
```bash
npm run dev
```

## Objetos para POST

### Usuário

```json
{
    "email": "teste@gmail.com",
    "name": "teste",
    "password": "123"
}
```

### Página

```json
{
    "title": "titulo page teste",
    "authorId": 1, 
    "content": "conteudo do page de teste"
}
```

### Post

```json
{
    "title": "titulo post teste",
    "authorId": 1, 
    "content": "conteudo do post de teste",
    "pageId": 1
}
```

### PagePost

```json
{
    "title": "titulo da page post teste",
    "postId": 1, 
    "content": "conteudo da page post de teste"
}
```

## Objetos resposta GET

### Usuário

```json
{
  "id": 1,
  "email": "teste@gmail.com",
  "name": "teste",
  "password": "123",
  "pages": [
    {
        "id": 1,
        "title": "titulo teste",
        "content": "conteudo da pagina de teste",
        "published": true,
        "authorId": 1
    }
  ],
  "posts": [
    {
        "id": 1,
        "title": "titulo post teste",
        "content": "conteudo do post de teste",
        "published": true,
        "authorId": 1,
        "pageId": 1
    }
  ]
}
```

### Página

```json
{
  "id": 1,
  "title": "titulo teste",
  "content": "conteudo da pagina de teste",
  "published": true,
  "authorId": 1,
  "posts": [
    {
        "id": 1,
        "title": "titulo post teste",
        "content": "conteudo do post de teste",
        "published": true,
        "authorId": 1,
        "pageId": 1
    }
  ]
}
```

### Post

```json
{
  "id": 1,
  "title": "titulo post teste",
  "content": "conteudo do post de teste",
  "published": true,
  "authorId": 1,
  "pageId": 1,
  "pagePosts": [
      {
          "id": 1,
          "title": "titulo post teste",
          "content": "conteudo da pagina do post de teste",
          "published": true,
          "postId": 1
      }
  ]
}
```

### PagePost

```json
{
  "id": 1,
  "title": "titulo post teste",
  "content": "conteudo da pagina do post de teste",
  "published": true,
  "postId": 1
}
```