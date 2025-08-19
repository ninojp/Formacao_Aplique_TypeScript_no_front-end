'use strict';

//Tipos Primitivos
let valor: number = 3000;
//valor = "Cachorro";//não é permitido, pois o tipo da variável é number
let nome:string = "";
let isPago:boolean = false;
let qualquer: any = "";
qualquer = 3000; //pode ser qualquer coisa, mas não é recomendado
//===========================================================================

//Arrays
const lista = []; //por padrão, o tipo é any[]
lista.push("Jhonathan", "Cachorro", 22, true, []);
const listaNum: number[] = [];
const listaStr: Array<string> = [];//outra forma de declarar um array de strings
listaNum.push(13, 22.5, 89, 1.58);
//===========================================================================

//Tipos Personalizados (Type Alias)
type Transacao = {
   //tipoTransacao: string;
   tipoTransacao: TipoTransacao;
   data: Date;
   valor: number;
}
// const novaTransacao: Transacao = {
//     tipoTransacao: "", 
//         data: new Date(),
//         valor: 0,
        // valors: 0, //O intelecense nos avisa que isso não é permitido.
        // outroCampo: "Outro valor" //isso não é permitido, pois não está definido no type Transacao
    // };
//===========================================================================

//Tipos Personalizados (Type Alias) com Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
};
const outraTransacao: Transacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
};
//===========================================================================
