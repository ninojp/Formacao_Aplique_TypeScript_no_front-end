'use strict';
let saldo = 3000;
//-------------------------------------------------------------------------------------------------
const elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo) {
    elementoSaldo.textContent = saldo.toString();
}
;
//-------------------------------------------------------------------------------------------------
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por Favor, Preencha todos os campos da transação!');
        return;
    }
    ;
    const inputTipoTtransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector('#valor');
    const inputData = elementoFormulario.querySelector('#data');
    let tipoTransacao = inputTipoTtransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    }
    else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
        alert('Tipo de transação é inválido!');
        return;
    }
    ;
    elementoSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
