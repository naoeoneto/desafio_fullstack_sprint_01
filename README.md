# DESAFIO FULLSTACK

**Para rodar esse projeto em seu computador, é necessário seguir os seguintes passos:**

1. Gerar banco de dados no postgres chamado "desafio_fullstack";
2. Rodar as migrations no banco de dados com o seguinte comando:
   ```
   yarn typeorm migration:run -d src/data-source
   ```
3. Rodar a API através do seguinte comando:
   ```
   yarn dev
   ```
4. Rodar o arquivo front-end em conjunto.

# ENDPOINTS:

A API possui 11 endpoints que permitem manusear informações de usuários e seus contatos.
A URL Base da API é: http://localhost:3000

**Criação de usuário**

```
POST - /users - REQUISIÇÃO
```

```
{
	"fullName": "José Carlos",
	"email": "jose@mail.com",
    "secondEmail": "jose2@mail.com",
	"password": "654321",
	"phoneNumber": "12381027849",
    "secondPhoneNumber": "23589741069"
}
```

```
POST - /users - RESPOSTA - STATUS 201
```

```
{
	"updatedAt": "2023-03-27T00:51:08.602Z",
	"createdAt": "2023-03-27T00:51:08.602Z",
	"isActive": true,
	"secondPhoneNumber": "23589741069",
	"phoneNumber": "12381027849",
	"secondEmail": "jose2@mail.com",
	"email": "jose@mail.com",
	"fullName": "José Carlos",
	"id": "2feb7dda-a330-48df-bf44-25487ab7d06e"
}
```

Observações:

1. Existem dois campos não obrigatórios na requisição. Eles permitem adicionar um email secundário(**secondEmail**) e um telefone alternativo(**secondPhoneNumber**).

**Possíveis erros**
Caso algum dos dados passados esteja equivocado, será exibida na response qual o erro em questão. No exemplo abaixo, podemos ver uma requisição com número de caracteres abaixo do esperado (mínimo de 6) para a senha do usuario:

```
POST - /users - RESPOSTA - STATUS 400
```

```
{
	"message": [
		"password must be at least 6 characters"
	]
}
```

Exemplo com criação usando email já cadastrado:

```
POST - /users - RESPOSTA - STATUS 400
```

```
{
	"message": "Email already exists"
}
```

# Login

```
POST - /login - REQUISIÇÃO
```

```
{
	"email": "jose@mail.com",
	"password": "654321"
}
```

Em caso de sucesso na requisição, a resposta deverá vir da seguinte forma:

```
POST - /login - RESPOSTA - STATUS 200
```

```
{
	"user": {
		"updatedAt": "2023-03-27T01:48:02.372Z",
		"createdAt": "2023-03-27T01:48:02.372Z",
		"isActive": true,
		"secondPhoneNumber": null,
		"phoneNumber": "12381027849",
		"secondEmail": null,
		"email": "jose@mail.com",
		"fullName": "José Carlos",
		"id": "b8197773-7b7c-4baf-aa46-bd4ef4ee93d3"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FjdGl2ZSI6dHJ1ZSwiaWF0IjoxNjc5ODgyMTkxLCJleHAiOjE2Nzk5Njg1OTEsInN1YiI6ImI4MTk3NzczLTdiN2MtNGJhZi1hYTQ2LWJkNGVmNGVlOTNkMyJ9.5DyHWce3uB564w4dM0yOty4BlHAZ-eKM-Yd6JUmen6g"
}
```

**Possíveis erros**
Caso algum dos dados passados esteja equivocado, será exibida na response qual o erro em questão:

```
POST - /users - RESPOSTA - STATUS 403
```

```
{
	"message": "Password or email incorrect"
}
```

Com essa resposta, será possível conseguir as informações do usuário e o seu token. Com isso, será possível guardar o token e o usuário logado no localStorage para fazer a gestão do usuário no seu frontend.

# Rotas autenticadas

O usuário só poderá cadastrar e visualizar seus contatos se estiver logado. Qualquer uma dessas requisições deverá receber o header **Authorization: Bearer {token}**.

# Cadastrando contatos

```
POST - /contacts - REQUISIÇÃO
```

```
{
	"fullName": "Bruno Lima",
	"email": "bruno@mail.com",
	"phoneNumber": "528963014785",
	"secondPhoneNumber": "47521039864"
}
```

```
POST - /contacts - RESPOSTA - STATUS 201
```

```
{
	"updatedAt": "2023-03-23T21:29:43.569Z",
	"createdAt": "2023-03-23T21:29:43.569Z",
	"isActive": true,
	"secondPhoneNumber": "47521039864",
	"phoneNumber": "528963014785",
	"secondEmail": null,
	"email": "bruno@mail.com",
	"fullName": "Bruno Lima",
	"id": "8f0c2df1-9ee0-4b69-89b0-0b0c30651839"
}
```

Observações:

1. Assim como no cadastro de usuário, os campos **secondEmail** e **secondPhoneNumber** não são obrigatórios.

**Possíveis erros**
Caso algum dos dados passados esteja equivocado, será exibida na response qual o erro em questão. No exemplo abaixo, podemos ver uma requisição com número de caracteres abaixo do esperado para o número de telefone do contato:

```
POST - /contacts - RESPOSTA - STATUS 400
```

```
{
	"message": [
		"phoneNumber must be exactly 11 characters"
	]
}
```

# Listando contatos

```
GET - /contacts - RESPOSTA - STATUS 200
```

```
[
	{
		"updatedAt": "2023-03-27T02:09:25.740Z",
		"createdAt": "2023-03-27T02:09:25.740Z",
		"isActive": true,
		"secondPhoneNumber": "47521039864",
		"phoneNumber": "52896301485",
		"secondEmail": null,
		"email": "bruno2@mail.com",
		"fullName": "Bruno Lima",
		"id": "f0a11109-892e-458d-b236-e9fce8c390e4"
	},
	{
		"updatedAt": "2023-03-27T02:12:25.996Z",
		"createdAt": "2023-03-27T02:12:25.996Z",
		"isActive": true,
		"secondPhoneNumber": null,
		"phoneNumber": "52896301845",
		"secondEmail": null,
		"email": "arthur@mail.com",
		"fullName": "Arthur Lima",
		"id": "0e9b35ef-da29-42f6-a4ca-59a5ec3b9381"
	}
]
```

**Listando contato específico**

```
GET - /contacts/:id - RESPOSTA - STATUS 200
```

```
{
	"updatedAt": "2023-03-27T02:09:25.740Z",
	"createdAt": "2023-03-27T02:09:25.740Z",
	"isActive": true,
	"secondPhoneNumber": "47521039864",
	"phoneNumber": "52896301485",
	"secondEmail": null,
	"email": "bruno2@mail.com",
	"fullName": "Bruno Lima",
	"id": "f0a11109-892e-458d-b236-e9fce8c390e4"
}
```

**Possíveis erros**
Caso o usuário faça requisição com id inexistente, receberá o seguinte erro:

```
GET - /contacts/:id - RESPOSTA - STATUS 404
```

```
{
	"message": "Contact not found"
}
```

O usuário só poderá ver seus contatos. Caso tente visualizar alguém que não está em sua lista, receberá o seguinte erro:

```
GET - /contacts/:id - RESPOSTA - STATUS 401
```

```
{
	"message": "You are not allowed to do this"
}
```

# Alterando dados

O usuário poderá atualizar seus dados. Não é necessário atualizar todos os dados.

```
PATCH - /users - REQUISIÇÃO
```

```
{
    "fullName": "José Lima"
}
```

```
PATCH - /user - RESPOSTA - STATUS 200
```

```
{
    "updatedAt": "2023-03-27T02:30:18.084Z",
    "createdAt": "2023-03-27T01:48:02.372Z",
    "isActive": true,
    "secondPhoneNumber": null,
    "phoneNumber": "12381027849",
    "secondEmail": null,
    "email": "jose@mail.com",
    "fullName": "José Lima",
    "id": "b8197773-7b7c-4baf-aa46-bd4ef4ee93d3"
}
```

O usuário logado também poderá atualizar os dados de seus contatos. Também não há a necessidade de atualizar todos.

```
PATCH - /contacts/:id - REQUISIÇÃO
```

```
{
    "fullName": "Bruno L."
}
```

```
POST - /contacts - RESPOSTA - STATUS 201
```

```
{
	"updatedAt": "2023-03-27T03:01:19.515Z",
	"createdAt": "2023-03-27T02:09:25.740Z",
	"isActive": true,
	"secondPhoneNumber": "47521039864",
	"phoneNumber": "52896301485",
	"secondEmail": null,
	"email": "bruno2@mail.com",
	"fullName": "Bruno L.",
	"id": "f0a11109-892e-458d-b236-e9fce8c390e4"
}
```

# Exclusão de dados

O usuário pode excluir sua conta.

```
DELETE - /users - REQUISIÇÃO
```

```
Não é necessário passar corpo para essa requisição.
```

Também é possível que o usuário logado exclua um de seus contatos.

```
DELETE - /contacts/:id - REQUISIÇÃO
```

```
Não é necessário passar corpo para essa requisição.
```

Em ambos os casos, a resposta para uma requisição bem sucedida será essa:

```
DELETE - /contacts/:id - RESPOSTA - STATUS 204
```
