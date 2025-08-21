import { Armazenador } from "./Armazenador.js";
import { TipoTransacao } from "./TipoTransacao.js";
export class Conta {
    nome;
    saldo = Armazenador.obter('saldo') || 0;
    #transacoes = Armazenador.obter(('transacoes'), (key, value) => {
        if (key === 'data') {
            return new Date(value);
        }
        ;
        return value;
    }) || [];
    constructor(nome) {
        this.nome = nome;
    }
    ;
    getTitular() {
        return this.nome;
    }
    getSaldo() {
        return this.saldo;
    }
    ;
    getDataAcesso() {
        return new Date();
    }
    ;
    #debitar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que zero!");
        }
        ;
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
        ;
        this.saldo -= valor;
        Armazenador.salvar('saldo', this.saldo.toString());
    }
    ;
    #depositar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        ;
        this.saldo += valor;
        Armazenador.salvar('saldo', this.saldo.toString());
    }
    ;
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            this.#depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
            this.#debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            throw new Error('Tipo de transação é inválido!');
        }
        ;
        this.#transacoes.push(novaTransacao);
        Armazenador.salvar("transacoes", JSON.stringify(this.#transacoes));
        console.log(`Transação registrada: ${novaTransacao.tipoTransacao}, Valor: ${novaTransacao.valor}, Data: ${novaTransacao.data}\n`);
        console.log(this.getGruposTransacaoes());
    }
    ;
    getGruposTransacaoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(this.#transacoes);
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            ;
            gruposTransacoes.at(-1)?.transacoes.push(transacao);
        }
        ;
        return gruposTransacoes;
    }
    ;
}
;
export class ContaPremium extends Conta {
    registrarTransacao(transacao) {
        if (transacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            console.log('Vc Ganhou um bônus de 0.5 centavos!');
            transacao.valor += 0.5;
        }
        ;
        super.registrarTransacao(transacao);
    }
    ;
}
;
const conta = new Conta('Nino JP');
const contaPremium = new ContaPremium('Edenilson JP');
export default conta;
