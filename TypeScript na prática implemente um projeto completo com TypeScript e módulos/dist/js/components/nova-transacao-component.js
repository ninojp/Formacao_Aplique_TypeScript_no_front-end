'use strict';
import Conta from "../types/Conta.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (event) {
    try {
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
        let data = new Date(inputData.value + ' 00:00:00'); // Adicionando horário para a data, caso contrário, o JavaScript não entende corretamente a data.
        //---------------------------------------------------------------------------------------------------
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        //---------------------------------------------------------------------------------------------------
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
    ;
});
