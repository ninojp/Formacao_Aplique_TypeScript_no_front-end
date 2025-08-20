'use strict';
import { TipoTransacao } from "./TipoTransacao.js";
let saldo = 3000;
const Conta = {
    getSaldo() {
        return saldo;
    },
    //---------------------
    getDataAcesso() {
        return new Date();
    },
    //-------------------------------------------------------------
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        }
        else {
            alert('Tipo de transação é inválido!');
            return;
        }
        ;
        console.log(`Transação registrada: ${novaTransacao.tipoTransacao}, Valor: ${novaTransacao.valor}, Data: ${novaTransacao.data}`);
    }
};
export default Conta;
