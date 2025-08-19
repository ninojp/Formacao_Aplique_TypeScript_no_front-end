'use strict';

let saldo:number = 3000;
//--------------------------------------------------------------------------------------
const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLInputElement;
if(elementoSaldo) {
    elementoSaldo.textContent = formatarMoeda(saldo);
};
//--------------------------------------------------------------------------------------
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement;
if(elementoDataAcesso) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
};
