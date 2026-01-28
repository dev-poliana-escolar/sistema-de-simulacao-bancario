import { Cliente } from "./cliente";
import { Conta } from "./conta";
import { Funcionario } from "./funcionario";



let lista_contas : Conta[] =[]

let fun1 = new Funcionario(1240, "Pedro Jordão");
let fun2 = new Funcionario(2345, 'Thiago Lindo Gostoso Silvestre')

let cli = new Cliente("Joana", '22222', '31/nov/1990', 2000,'223344');
let cli2 = new Cliente("Ana", '44444','12/jan/2009',21.40,'556677');


console.log(fun1.autorizarEmprestimo(cli,20))


let conta1 = fun2.abrirConta(cli,20);
let conta2 = fun2.abrirConta(cli2,2000);

console.log(fun1.realizarEmprestimo(20,conta1))
lista_contas.push(conta1);
lista_contas.push(conta2);

console.log(
    lista_contas.map(
        (conta) =>  conta.consultarSaldo()
    ));
