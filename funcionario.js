"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    #_matricula;
    #_nome;
    constructor(matricula, nome) {
        this.#_matricula = matricula;
        this.#_nome = nome;
    }
    abrirConta() {
    }
    autorizarEmprestimo() {
    }
    realizarEmprestimo() { }
}
exports.Funcionario = Funcionario;
