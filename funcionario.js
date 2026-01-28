"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const conta_1 = require("./conta");
class Funcionario {
    #_matricula;
    #_nome;
    constructor(matricula, nome) {
        this.#_matricula = matricula;
        this.#_nome = nome;
    }
    abrirConta(cliente, saldo_inicial) {
        const data_atual = new Date();
        let c = new conta_1.Conta(cliente, data_atual.toLocaleDateString("pt-BR"), saldo_inicial);
        return c;
    }
    autorizarEmprestimo(cliente, valor_emprestimo) {
        /*
        Um empréstimo deve ser autorizado se o valor pedido
        for menor ou igual a 30% (trinta por cento) da renda bruta do cliente. Deve
        devolver verdadeiro (empréstimo autorizado) ou falso (empréstimo negado);
        */
        let renda_bruta = cliente.renda_bruta;
        let limite_emprestimo = renda_bruta * (30 / 100);
        if (valor_emprestimo <= limite_emprestimo) {
            return true;
        }
        return false;
    }
    realizarEmprestimo(valor_emprestimo, conta) {
        /*
        O dinheiro pedido deve ser creditado na conta do cliente
        caso o empréstimo seja autorizado (operação autorizar empréstimo).
        */
        if (this.autorizarEmprestimo(conta.cliente, valor_emprestimo) === true) {
            conta.creditarQuantia(valor_emprestimo);
            return true;
        }
        return false;
    }
}
exports.Funcionario = Funcionario;
//# sourceMappingURL=funcionario.js.map