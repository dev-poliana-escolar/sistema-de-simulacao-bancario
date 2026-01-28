"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    #_nome;
    #_cpf;
    #_data_nasc;
    #_renda_bruta;
    #_telefone;
    constructor(nome, cpf, data_nasc, renda_bruta, telefone) {
        this.#_nome = nome;
        this.#_cpf = cpf;
        this.#_data_nasc = data_nasc;
        this.#_renda_bruta = renda_bruta;
        this.#_telefone = telefone;
    }
    get renda_bruta() { return this.#_renda_bruta; }
}
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map