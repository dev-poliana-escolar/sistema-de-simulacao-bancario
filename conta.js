"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupança = exports.ContaCorrente = exports.Conta = void 0;
const cliente_1 = require("./cliente");
const funcionario_1 = require("./funcionario");
class Conta {
    #_id;
    #_titular;
    #_data_criacao;
    #_saldo;
    constructor(id, cliente_titular, data_criacao, saldo) {
        this.#_id = id;
        this.#_data_criacao = data_criacao;
        this.#_saldo = saldo;
        this.#_titular = cliente_titular;
    }
    set novo_saldo(valor) { this.#_saldo = valor; }
    consultarSaldo() {
        return this.#_saldo;
    }
    creditarQuantia(valor) {
        let saldo_atual = this.consultarSaldo();
        if (valor > 0) {
            let creditar = saldo_atual + valor;
            this.#_saldo = creditar;
            return true;
        }
        return false;
    }
    debitarQuantia(valor) {
        let saldo_atual = this.consultarSaldo();
        if (saldo_atual < valor) {
            return false;
        }
        let debitar = saldo_atual - valor;
        this.#_saldo = debitar;
        return true;
    }
}
exports.Conta = Conta;
let fun1 = new funcionario_1.Funcionario(1240, "Pedro Jordão");
let cli = new cliente_1.Cliente("Joana", '22222', '31/nov/1990', 2000, '223344');
let cli2 = new cliente_1.Cliente("Ana", '44444', '12/jan/2009', 21.40, '556677');
let c = new Conta(1, cli, '25/jan/2026', 20);
c.creditarQuantia(20);
c.creditarQuantia(15);
let cDestino = new Conta(2, cli2, "31/dez/2025", 0);
class ContaCorrente extends Conta {
}
exports.ContaCorrente = ContaCorrente;
class ContaPoupança extends Conta {
}
exports.ContaPoupança = ContaPoupança;
