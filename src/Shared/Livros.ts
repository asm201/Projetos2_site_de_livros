import { Entity } from 'remult';
import { Fields } from 'remult';

@Entity('Livros', {
    allowApiCrud: true,
})

export class Livros {
    @Fields.autoIncrement()
    id = 0;
    @Fields.string()
    BD_NOME = '';
    @Fields.string()
    BD_EDITORA = '';
    @Fields.string()
    BD_AUTORA = '';
    @Fields.string()
    BD_MATERIA = '';
    @Fields.string()
    BD_EMAIL_USUARIO = '';
    @Fields.string()
    BD_TROCAOUDOACAO = '';
    @Fields.string()
    BD_ANOLANCAMENTO = '';
    @Fields.string()
    BD_CAPA = '';
    @Fields.string()
    BD_TOKEN_USUARIO = '';
    @Fields.boolean()
    BD_DISPONIVEL = true;
}