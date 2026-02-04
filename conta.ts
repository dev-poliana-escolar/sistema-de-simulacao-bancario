import { Cliente } from "./cliente";
import { Funcionario } from "./funcionario";


export  abstract class Conta{
    #_cliente_titular: Cliente;
    #_data_criacao :string;
    #_saldo: number;

    constructor (cliente : Cliente,data_criacao: string, saldo:number){
        this.#_data_criacao = data_criacao;
        this.#_saldo = saldo
        this.#_cliente_titular = cliente
    }

    get cliente(){return this.#_cliente_titular}
    get data_criacao(){return this.#_data_criacao}


    consultarSaldo() :number{
        return this.#_saldo
    }

    creditarQuantia(valor: number) :boolean{
        let saldo_atual = this.consultarSaldo();
        if (valor > 0){
            let creditar = saldo_atual + valor 
            this.#_saldo = creditar;
            return true
        }

        return false
    }

    debitarQuantia(valor :number): boolean{
        let saldo_atual = this.consultarSaldo()

        if (saldo_atual<valor){
            return false;
        }

        let debitar = saldo_atual - valor;
        this.#_saldo = debitar;

        return true
    }

    transferirQuantia(valor_transferencia:number, conta_destino:Conta){
       /* Uma transferência corresponde: 
        ao débito de uma quantia da conta de origem e o crédito dessa
        quantia na conta de destino.
        */
        if(conta_destino){
            this.debitarQuantia(valor_transferencia);// debitar o saldo da conta origem

            // creditar na conta destino
            conta_destino.creditarQuantia(valor_transferencia);
            return true
        }

        return false
    }

}




// let c = new Conta(cli,'25/jan/2026', 20);
// c.creditarQuantia(20);
// c.creditarQuantia(15);
// let cDestino = new Conta(cli2,"31/dez/2025", 0)
// c.transferirQuantia(10,cDestino)
// console.log(cDestino.consultarSaldo())
// console.log(c.consultarSaldo())




export class ContaCorrente extends Conta{
    constructor(cliente:Cliente, data_criacao:string, saldo:number){
        super(cliente, data_criacao,saldo)
    }

}

export class ContaPoupança extends Conta{
    constructor(cliente:Cliente, data_criacao:string, saldo:number){
        super(cliente, data_criacao,saldo)
    }

}