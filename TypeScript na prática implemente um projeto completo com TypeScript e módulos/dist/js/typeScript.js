'use strict';
//Tipos Primitivos
let valor = 3000;
//valor = "Cachorro";//não é permitido, pois o tipo da variável é number
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 3000; //pode ser qualquer coisa, mas não é recomendado
//===========================================================================
//Arrays
const lista = []; //por padrão, o tipo é any[]
lista.push("Jhonathan", "Cachorro", 22, true, []);
const listaNum = [];
const listaStr = []; //outra forma de declarar um array de strings
listaNum.push(13, 22.5, 89, 1.58);
// const novaTransacao: Transacao = {
//     tipoTransacao: "", 
//         data: new Date(),
//         valor: 0,
// valors: 0, //O intelecense nos avisa que isso não é permitido.
// outroCampo: "Outro valor" //isso não é permitido, pois não está definido no type Transacao
// };
//===========================================================================
//Tipos Personalizados (Type Alias) com Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
;
const outraTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
};
