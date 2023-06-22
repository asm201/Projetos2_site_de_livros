import { remultExpress } from "remult/remult-express";
import { Usuario } from "../../src/Shared/Usuario";
import { Livros } from "src/Shared/Livros";

export const api = remultExpress({
    entities:[Usuario,Livros],
})

