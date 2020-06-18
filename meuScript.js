alert('Meu primeiro código javascript');
alert('Esse é meu primeiro alert');

let peso= 54;
let altura= 1.58;
let imc= peso / (altura*altura);
console.log(imc);

let saldoDisponivel = 5000;

alert('insira seu cartão');

alert('Seu saldo disponivel é de ' + saldoDisponivel + 'R$');

let valorSaque = window.prompt('Quanto deseja sacar?');


if(valorSaque <= saldoDisponivel) {
    saldoDisponivel = saldoDisponivel - valorSaque;

    alert('Saque de ' + valorSaque + 'R$ feito com sucesso,' + 'seu novo saldo disponivel é de ' + saldoDisponivel + 'R$');

    alert('Arbyte Bank agradece sua preferência');
    
    alert('Retire seu cartão');
}
else { 
alert('Saldo insuficiente');
}


