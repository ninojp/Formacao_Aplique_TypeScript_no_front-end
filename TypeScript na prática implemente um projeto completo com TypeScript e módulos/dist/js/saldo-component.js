'use strict';
let saldo = 3000;
//--------------------------------------------------------------------------------------
const elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
;
//--------------------------------------------------------------------------------------
const elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoDataAcesso) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
;
