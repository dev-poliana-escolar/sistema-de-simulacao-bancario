import { Cliente } from "./cliente";
import { Funcionario } from "./funcionario";


export  class Conta{
    #_id : number;
    #_titular : Cliente
    #_data_criacao :string;
    #_saldo: number;

    constructor (id :number, cliente_titular: Cliente,data_criacao: string, saldo:number){
        this.#_id = id;
        this.#_data_criacao = data_criacao;
        this.#_saldo = saldo
        this.#_titular = cliente_titular;
    }

    set novo_saldo(valor: number){ this.#_saldo = valor;}

    consultarSaldo() :number{
        return this.#_saldo
    }

    creditarQuantia(valor: number) :boolean{
        let saldo_atual = this.consultarSaldo();
        if (valor >0){
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

    transferirQuantia(valor:number):{
       /* Uma transferência corresponde: 
        ao débito de uma quantia da conta de origem e o crédito dessa
        quantia na conta de destino.
        */
    }

}

let fun1 = new Funcionario(1240, "Pedro Jordão");

let cli = new Cliente("Joana", '22222', '31/nov/1990', 2000,'223344');
let cli2 = new Cliente("Ana", '44444','12/jan/2009',21.40,'556677');

let c = new Conta(1,cli,'25/jan/2026', 20);
c.creditarQuantia(20);
c.creditarQuantia(15);
let cDestino = new Conta(2,cli2,"31/dez/2025", 0)




export class ContaCorrente extends Conta{


}

export class ContaPoupança extends Conta{

}