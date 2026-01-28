import { Cliente } from "./cliente";
import { Conta } from "./conta";



export class Funcionario{
    #_matricula :number;
    #_nome:string;


    constructor(matricula:number, nome:string){
        this.#_matricula = matricula;
        this.#_nome = nome;
    }

    abrirConta(cliente:Cliente, saldo_inicial:number): Conta{
        const data_atual = new Date()
        let c = new Conta(cliente,data_atual.toLocaleDateString("pt-BR"),saldo_inicial)
        return c
    }

    autorizarEmprestimo(cliente:Cliente, valor_emprestimo:number):boolean{ 
        /*
        Um empréstimo deve ser autorizado se o valor pedido
        for menor ou igual a 30% (trinta por cento) da renda bruta do cliente. Deve
        devolver verdadeiro (empréstimo autorizado) ou falso (empréstimo negado);
        */
        let renda_bruta = cliente.renda_bruta
        let limite_emprestimo = renda_bruta * (30/100);
        
        if(valor_emprestimo<= limite_emprestimo ){
            return true
        }
        return false
    }

    realizarEmprestimo(valor_emprestimo:number, conta:Conta){
        /*
        O dinheiro pedido deve ser creditado na conta do cliente
        caso o empréstimo seja autorizado (operação autorizar empréstimo).
        */
       if( this.autorizarEmprestimo(conta.cliente, valor_emprestimo) === true){
            conta.creditarQuantia(valor_emprestimo);
            return true
       }
       return false
        
       


    }
}


