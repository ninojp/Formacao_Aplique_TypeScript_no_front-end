'use strict';
import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
const elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoDataAcesso) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
;
renderizarSaldo();
function renderizarSaldo() {
    const elementoSaldo = document.querySelector('.saldo-valor .valor');
    if (elementoSaldo) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
    ;
}
;
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
