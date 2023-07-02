import { remultExpress } from "remult/remult-express";
import { Usuario } from "../../src/Shared/Usuario";
import { Livros } from "src/Shared/Livros";
import { createPostgresConnection } from 'remult/postgres'

export const api = remultExpress({
    entities:[Usuario,Livros],
    // dataProvider: createPostgresConnection({
    //     connectionString: 
    //         process.env['DATABASE_URL']
    // }),
})

