'use strict';
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = 3000;

const Conta = {
    getSaldo():number {
        return saldo;
    },
    //---------------------
    getDataAcesso():Date {
        return new Date();
    },
    //-------------------------------------------------------------
    registrarTransacao(novaTransacao:Transacao): void {
        if(novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
                saldo += novaTransacao.valor;
            }else if(novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
                saldo -= novaTransacao.valor;
            }else{
                alert('Tipo de transação é inválido!');
                return;
            };
        console.log(`Transação registrada: ${novaTransacao.tipoTransacao}, Valor: ${novaTransacao.valor}, Data: ${novaTransacao.data}`);
    }
};
export default Conta;
