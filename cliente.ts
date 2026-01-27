export class Cliente{
    #_nome : string;
    #_cpf : string;
    #_data_nasc: string;
    #_renda_bruta: number;
    #_telefone : string;

    constructor(nome:string, cpf:string, data_nasc :string, renda_bruta:number, telefone:string){
        this.#_nome = nome;
        this.#_cpf = cpf;
        this.#_data_nasc = data_nasc;
        this.#_renda_bruta = renda_bruta;
        this.#_telefone = telefone;
    }
}

