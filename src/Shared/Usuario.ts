import { Entity } from 'remult';
import { Fields } from 'remult';

@Entity('Usuario', {
    allowApiCrud: true,
})

export class Usuario {
    @Fields.string()
    BD_EMAIL = '';
    @Fields.string()
    BD_NOMECOMPLETO = '';
    @Fields.date()
    BD_NASCIMENTO = '';
    @Fields.string()
    BD_CELULAR = '';
    @Fields.string()
    BD_SENHA = '';
    @Fields.string()
    BD_CEP = '';
    @Fields.string()
    BD_ENDERECO = '';
    @Fields.string()
    BD_NUMERO = '';
    @Fields.string()
    BD_COMPLEMENTO = '';
    @Fields.string()
    BD_BAIRRO = '';
    @Fields.string()
    BD_CIDADE = '';
    @Fields.string()
    BD_UF = '';
    
}

