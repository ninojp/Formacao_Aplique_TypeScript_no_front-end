import { Armazenador } from "./Armazenador.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

export class Conta {
    protected nome:string;
    protected saldo:number = Armazenador.obter<number>('saldo') || 0;
    #transacoes:Transacao[] = Armazenador.obter<Transacao[]>(('transacoes'), (key: string, value: any) => {
        if (key === 'data') {
            return new Date(value);
        };
        return value;
    }) || [];
    //===========================
    constructor(nome:string) {
        this.nome = nome;
    };
    //===========================
    getTitular():string {
        return this.nome;
    }
    //----------------------
    getSaldo():number {
        return this.saldo;
    };
    //----------------------
    getDataAcesso():Date {
        return new Date();
    };
    //-----------------------------
    #debitar(valor:number): void {
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que zero!");
        };
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        };
        this.saldo -= valor;
        Armazenador.salvar('saldo', this.saldo.toString());
    };
    //---------------------------------------------------
    #depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        };
        this.saldo += valor;
        Armazenador.salvar('saldo', this.saldo.toString());
    };
    //-------------------------------------------------------------
    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
            this.#depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
            this.#debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        } else {
            throw new Error('Tipo de transação é inválido!');
        };
        this.#transacoes.push(novaTransacao);
        Armazenador.salvar("transacoes", JSON.stringify(this.#transacoes));
        console.log(`Transação registrada: ${novaTransacao.tipoTransacao}, Valor: ${novaTransacao.valor}, Data: ${novaTransacao.data}\n`);
        console.log(this.getGruposTransacaoes());
        // console.log(this.agruparTransacoes());
    };
    //-------------------------------------------------------------
    getGruposTransacaoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(this.#transacoes);//cria uma cópia profunda(deepClone) do array transacoes
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            };
            //.at(-1) retorna o último elemento do array.
            // O ? é usado para evitar erros caso o array esteja vazio, e serve apenas para leitura e não para escrita.
            gruposTransacoes.at(-1)?.transacoes.push(transacao)
        };
        return gruposTransacoes;
    };

};
const conta = new Conta('Nino JP');
export default conta;

console.log(conta.getTitular());
// console.log(conta.#transacoes);
// console.log(conta.nome);
