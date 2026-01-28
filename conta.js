"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupança = exports.ContaCorrente = exports.Conta = void 0;
class Conta {
    #_cliente_titular;
    #_data_criacao;
    #_saldo;
    constructor(cliente, data_criacao, saldo) {
        this.#_data_criacao = data_criacao;
        this.#_saldo = saldo;
        this.#_cliente_titular = cliente;
    }
    get cliente() { return this.#_cliente_titular; }
    get data_criacao() { return this.#_data_criacao; }
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
    transferirQuantia(valor_transferencia, conta_destino) {
        /* Uma transferência corresponde:
         ao débito de uma quantia da conta de origem e o crédito dessa
         quantia na conta de destino.
         */
        if (conta_destino) {
            this.debitarQuantia(valor_transferencia); // debitar o saldo da conta origem
            // creditar na conta destino
            conta_destino.creditarQuantia(valor_transferencia);
            return true;
        }
        return false;
    }
}
exports.Conta = Conta;
// let c = new Conta(cli,'25/jan/2026', 20);
// c.creditarQuantia(20);
// c.creditarQuantia(15);
// let cDestino = new Conta(cli2,"31/dez/2025", 0)
// c.transferirQuantia(10,cDestino)
// console.log(cDestino.consultarSaldo())
// console.log(c.consultarSaldo())
class ContaCorrente extends Conta {
}
exports.ContaCorrente = ContaCorrente;
class ContaPoupança extends Conta {
}
exports.ContaPoupança = ContaPoupança;
//# sourceMappingURL=conta.js.map