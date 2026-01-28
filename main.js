"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./cliente");
const funcionario_1 = require("./funcionario");
let lista_contas = [];
let fun1 = new funcionario_1.Funcionario(1240, "Pedro Jordão");
let fun2 = new funcionario_1.Funcionario(2345, 'Thiago Lindo Gostoso Silvestre');
let cli = new cliente_1.Cliente("Joana", '22222', '31/nov/1990', 2000, '223344');
let cli2 = new cliente_1.Cliente("Ana", '44444', '12/jan/2009', 21.40, '556677');
console.log(fun1.autorizarEmprestimo(cli, 20));
let conta1 = fun2.abrirConta(cli, 20);
let conta2 = fun2.abrirConta(cli2, 2000);
console.log(fun1.realizarEmprestimo(20, conta1));
lista_contas.push(conta1);
lista_contas.push(conta2);
console.log(lista_contas.map((conta) => conta.consultarSaldo()));
//# sourceMappingURL=main.js.map