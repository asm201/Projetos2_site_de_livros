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
    @Fields.number()
    BD_CELULAR = 0;
    @Fields.string()
    BD_SENHA = '';
    @Fields.string()
    BD_CEP = '';
    @Fields.string()
    BD_ENDERECO = '';
    @Fields.number()
    BD_NUMERO = 0;
    @Fields.string()
    BD_COMPLEMENTO = '';
    @Fields.string()
    BD_BAIRRO = '';
    @Fields.string()
    BD_CIDADE = '';
    @Fields.string()
    BD_UF = '';
    
}

