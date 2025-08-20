'use strict';
import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por Favor, Preencha todos os campos da transação!');
        return;
    }
    ;
    //---------------------------------------------------------------------------------------------------
    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector('#valor');
    const inputData = elementoFormulario.querySelector('#data');
    //---------------------------------------------------------------------------------------------------
    let tipoTransacao = inputTipoTransacao.value; // Convertendo o valor do input para o tipo(ENUN) TipoTransacao
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    //---------------------------------------------------------------------------------------------------
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    //---------------------------------------------------------------------------------------------------
    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    elementoFormulario.reset();
});
