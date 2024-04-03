import fastify from 'fastify';

const app = fastify()

//Metodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS...
//Corpo da requisição (Requeset Body)
//Parâmetros de busca (Search Params / Query Params) `http://locahost:3333/users?name=Diego`
//Parâmetros de rota ( Route Params) -> Identificação de recursos `DELETE http://localhost:3333/users/5`
//Cabeçalhos (Headers) -> Contexto 

//Semânticas = Significado

// Driver nativo /  Query Builders / ORMs

// Object Relational Mapping (Hibernate / Doctrine / ActiveRecord)

app.get('/', () => {
    return 'Hello World'
})
app.listen({ port: 3333 }).then(() => {
    console.log('HTTP Server running')
})