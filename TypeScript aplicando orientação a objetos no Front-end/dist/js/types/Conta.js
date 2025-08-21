import { TipoTransacao } from "./TipoTransacao.js";
export class Conta {
    nome;
    saldo = JSON.parse(localStorage.getItem('saldo') || '0');
    transacoes = JSON.parse(localStorage.getItem('transacoes') || '[]', (key, value) => {
        if (key === 'data') {
            return new Date(value);
        }
        ;
        return value;
    });
    //----------------------------
    constructor(nome) {
        this.nome = nome;
    }
    ;
    //----------------------
    getSaldo() {
        return this.saldo;
    }
    ;
    //----------------------
    getDataAcesso() {
        return new Date();
    }
    ;
    //-----------------------------
    debitar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que zero!");
        }
        ;
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
        ;
        this.saldo -= valor;
        localStorage.setItem('saldo', this.saldo.toString());
    }
    ;
    //---------------------------------------------------
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        ;
        this.saldo += valor;
        localStorage.setItem('saldo', this.saldo.toString());
    }
    ;
    //-------------------------------------------------------------
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
            this.debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            throw new Error('Tipo de transação é inválido!');
        }
        ;
        this.transacoes.push(novaTransacao);
        localStorage.setItem("transacoes", JSON.stringify(this.transacoes));
        console.log(`Transação registrada: ${novaTransacao.tipoTransacao}, Valor: ${novaTransacao.valor}, Data: ${novaTransacao.data}\n`);
        console.log(this.getGruposTransacaoes());
        // console.log(this.agruparTransacoes());
    }
    ;
    //-------------------------------------------------------------
    getGruposTransacaoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(this.transacoes); //cria uma cópia profunda(deepClone) do array transacoes
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
            //.at(-1) retorna o último elemento do array.
            // O ? é usado para evitar erros caso o array esteja vazio, e serve apenas para leitura e não para escrita.
            gruposTransacoes.at(-1)?.transacoes.push(transacao);
        }
        ;
        return gruposTransacoes;
    }
    ;
}
;
const conta = new Conta('Nino JP');
export default conta;
