import Fastify from 'fastify'
    import { Pool } from 'pg'

    const sql = new Pool({
        user: "postgres",
        password: "senai",
        host: "localhost",
        port: 5432,
        database: "receitas"
})

const servidor = Fastify()

servidor.get('/usuarios', async () => {
    const resultado = await sql.query('select * from usuarios')
    return resultado.rows
})

servidor.post('/usuarios', async (request, reply) =>{
    const nome = request.body.nome
    const senha = request.body.senha
    const resultado = await sql.query('INSERT INTO usuarios (nome, senha) VALUES ($1, $2)',[nome, senha])
    return 'usuario cadastrado!'
})

servidor.put('/usuarios/:id', async (request, reply) => {
    const body = request.body;
    const id = request.params.id
    const resultado = await sql.query('update usuarios SET nome = $1, senha = $2 where id = $3', [body.nome, body.senha,id])
    return 'usuario alterado'
})

servidor.listen({
    port:3000
})