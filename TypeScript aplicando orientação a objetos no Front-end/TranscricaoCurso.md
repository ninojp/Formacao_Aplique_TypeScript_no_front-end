# Curso Alura TypeScript aplicando orientação a objetos no Front-end

## Aula 1 - Orientação a Objetos

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Oi, estudante! Boas-vindas a mais um curso de TypeScript na Alura. Quem vai nos guiar nessa jornada de aprendizado será a instrutora Mônica Hillman.

Audiodescrição: Mônica Hillman é uma mulher branca. Tem olhos castanhos e cabelos castanhos com mechas loiras e franja. Usa um óculos de grau com armação redonda e piercing no septo. Está com uma camiseta preta. Ao fundo, parede branca com iluminação degradê do azul ao rosa e estante com livros e outras decorações.

O que vamos aprender?  
O projeto no qual vamos codificar será o ByteBank. Já vamos receber o HTML, CSS e um pouco do TypeScript pronto. Porém, vamos avançar um pouco mais para aplicar orientação a objeto nesse projeto.

Vamos aprender sobre:

- Classes;
- Atributos;
- Métodos;
- Heranças;
- Decorators;
- Entre outros!

Pré-requisitos  
Para você aprender sobre esses conteúdos, é importante ter feito alguns pré-requisitos antes de continuar.

É importante que você saiba um pouco de HTML e CSS para entender como foi feito o layout, além de conhecer JavaScript já que o TypeScript é baseado nessa linguagem.

Se você se interessou por esses termos e quer aprender a aplicar orientação a objetos em seus projetos, não deixe de se matricular. Te esperamos no próximo vídeo!

### Aula 1 - Preparando o ambiente

Olá, estudante! Desejamos boas vindas ao curso Typescript: Orientação a Objetos.

Para baixar os arquivos base desse projeto você pode [acessar o repositório do github](https://github.com/alura-cursos/formacao-typescript-projeto-curso-02/tree/main) ou fazer o [download direto.](https://github.com/alura-cursos/formacao-typescript-projeto-curso-02/archive/refs/heads/main.zip)

No curso, usaremos o editor de código chamado VSCode. Além disso, vamos precisar do NodeJS durante todo o curso. Caso você ainda não tenha o node, você pode instalá-lo seguindo o passo a passo de acordo com o seu sistema operacional [nesse artigo](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos).

A versão do Typescript utilizada durante o curso é a 5.1.3. Caso seja a primeira vez que você está abrindo esse projeto, instale ela com o seguinte comando no terminal:

> npm install typescript@5.1.3

Para manter o compilador do Typescript executando e monitorando o seu código, recompilando para Javascript a cada mudança, você também executará o seguinte comando no terminal:

> tsc -w

E para visualizar no navegador o seu projeto funcionando, vamos utilizar da extensão Live Server, disponível no Visual Studio Code.

Caso tenha dúvidas durante a instalação ou no decorrer do curso, pode contar conosco criando um tópico no fórum ou interagindo no nosso servidor do Discord. Também não deixe de ajudar outros colegas. Vamos construir juntos essa grande comunidade da Alura? :)

### Aula 1 - Classes - Vídeo 2

Transcrição  
Agora, faremos parte da equipe de desenvolvimento do ByteBank, um banco virtual.

Página inicial do banco ByteBank. No topo, cabeçalho preto com o logotipo do ByteBank em verde alinhado à esquerda e nome da pessoa usuária alinhado à direita. Logo abaixo, menu vertical na lateral esquerda com as opções "Início", "Transferências", "Investimentos" e "Outros Serviços". Ao centro, dois cartões alinhados verticalmente. O primeiro tem fundo verde e possui uma saudação, a data e o saldo da conta corrente. O segundo tem fundo cinza e possui uma lista suspensa para selecionar o tipo de transação, campo para adicionar valor e outro para data, além de botão "Concluir transação". Alinhado à direita, coluna de extratos sem transações registradas.

Na tela, temos a página inicial acessada pela pessoa usuária dentro do banco. É composta por um cabeçalho com o logotipo do ByteBank e o nome da pessoa usuária que está acessando, a Joana da Silva Oliveira.

Abaixo, temos três colunas. A primeira coluna mostra os serviços que o banco disponibiliza. A segunda tem opções para conferir o saldo da conta corrente e cadastrar novas interações com a conta, como transferências, depósitos, saques, etc. A terceira coluna tem o extrato, ou seja, o histórico de cada uma dessas ações que foram geradas na conta.

Paradigma de orientação a objetos  
Para conseguir continuar o desenvolvimento desse projeto, precisamos explorar o código no VS Code. Na barra lateral, vamos entrar em "src > types > Conta.ts".

Nesse arquivo, conseguimos conferir alguns dos elementos presentes na tela inicial, como o saldo, histórico de transações, função de debitar, etc.

Como temos um código com várias funções, como debitar e depositar, podemos interpretar que usamos o paradigma de programação funcional, pois é todo baseado em funções.

Porém, não vamos ter somente a conta da Joana em um banco. Quanto mais contas existirem, melhor para a instituição.

Por isso, vamos aplicar o paradigma de orientação a objetos para auxiliar na escalabilidade da nossa aplicação.

Para começar a fazer isso, vamos renomear o arquivo Conta.ts para Conta-antiga.ts, pois não vamos mais usar esse código, mas ele pode ficar de referência para o novo.

Criar uma classe  
Dentro da pasta "types", vamos clicar com o botão direito do mouse e selecionar a opção "New File" (ou "Ctrl + N") para criar um novo arquivo chamado Conta.ts.

Nele, vamos fazer uma export class chamada Conta e abrir chaves. Dentro das chaves, vamos colocar um nome do tipo string. Isto é, nome: string.

Após acrescentar um ponto e vírgula, colocamos na próxima linha o saldo do tipo number igual à JSON em maiúsculo .parse().

Entre os parênteses, escrevemos localStorage.getItem(), passando o saldo entre aspas duplas. Após fechar os parênteses de getItem() e parse(), vamos colocar duas barras verticais (pipes) seguido de 0. Essas barras significam OU.

Conta.ts:

```JavaScript
export class Conta {
    nome: string;
    saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
}
```

Em seguida, vamos escrever transacoes sem cedilha e em minúsculas que vai ser do tipo Transacao com "T" maiúsculo seguido de abre e fecha colchetes.

O VS Code aponta um erro. Para resolvê-lo, basta selecionar Transacao com "T" maiúsculo e apertar "Ctrl + Espaço". Com isso, o VS Code sugere fazer o import desde ./Transacao.

Após fazer essa importação, vamos continuar a escrever a linha de transações que vai ser igual à JSON.parse(). Entre parênteses, digitamos localStorage.getItem(), passando transacoes entre as aspas duplas nos parênteses.

Depois do fechamento dos parênteses de getItem(), vamos abrir novamente parênteses para colocar os parâmetros de uma arrow function. Ou seja, () => {}. Entre os parênteses, especificamos key como string e value como any.

No corpo da arrow function, vamos colocar if com a condição key === "data", entre parênteses. Entre as chaves do if, vamos escrever return new Date(), passando o value entre os parênteses. No final, acrescentamos um ponto e vírgula.

Depois do if, vamos dar um "Enter" e colocar um return value.

Para finalizar, após o fechamento de parse(), vamos colocar || [] que sinaliza "ou uma lista vazia".

```JavaScript
import { Transacao } from "./Transacao";

export class Conta {
    nome: string;
    saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
    transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: any) => {
        if (key === "data") {
            return new Date(value);
        }
        return value;
    }) || [];
}
```

Antes de continuar a escrever mais código, vamos entender tudo o que colocamos nesse arquivo.

Basicamente, queremos um nome que vai ser do tipo string. Por exemplo, uma palavra ou uma série de caracteres.

Depois, definimos um saldo que vai receber algo do tipo número. Esse valor é retornado do localStorage (armazenamento local), ou seja, do que estiver salvo no nosso navegador. Se não tiver nada, vai ser retornado um 0.

Também declaramos algo que vai chamar transacoes que vai do tipo Transacao que é um tipo customizado que importamos de ./Transacao. Com isso, vamos pegar o valor do localStorage e transformá-lo em uma maneira que seja possível mostrar na tela futuramente.

Não temos nada de novo nesse código. Se você conferir o conteúdo da Conta-antiga.ts, temos o mesmo código da linha 5 a linha 12.

Criar um construtor  
Vamos continuar a escrever em Conta.ts. Ainda na classe Conta, após transacoes, vamos colocar um constructor(). Entre parênteses, digitamos nome: string.

No corpo do construtor entre as chaves, vamos retornar um this.nome igual à nome.

```JavaScript
export class Conta {

// código omitido…

    constructor(nome: string) {
        this.nome = nome;
    }
}
```

Já que revimos trechos do código que já tinham sido feitos, vamos entender o que colocamos de novo nesse código.

Criamos uma classe chamada Conta. Uma classe são características que vão se tornar o objeto no futuro. Portanto, declaramos que cada conta vai ter nome, saldo e transações que podem ser cadastradas.

Quando construímos esse constructor (construtor), declaramos o atributo nome dentro dele. Assim, cada vez que criamos uma conta, a única informação obrigatória será o nome.

Os outros atributos vão ser de acordo com funcionalidades que vamos acrescentar no futuro para implementar nesse tipo de conta.

Podemos testar isso ao criar uma conta. Após a classe, vamos criar uma const chamada conta em minúsculo que vai ser igual à new Conta() com "C" maiúsculo, pois estamos instanciando uma classe.

Entre os parênteses, vamos colocar Joana da Silva Olveira entre aspas duplas que é a única usuária do ByteBank. Ao final, colocamos ponto e vírgula.

Na próxima linha, vamos fazer um export default de conta em minúsculo.

```JavaScript
const conta = new Conta("Joana da Silva Olveira");

export default conta;
```

Próximos passos  
Para verificar se a conta foi realmente criada, precisamos procurar em qual arquivo é programado para aparecer os elementos na tela.

Dentro da estrutura de pastas desse projeto em específico, precisamos ir em "src > components > extrato-component.ts". Esse é o primeiro local em que conseguimos encontrar.

Na linha 1, estamos importando Conta desde Conta-antiga.js, porque renomeamos o arquivo antigo e esse novo nome foi puxado para todas as importações desse caminho.

Vamos remover esse Conta-antiga.js e deixar somente Conta.js na importação. Após salvar, o VS Code já aponta um erro na linha 10 em Conta.getGruposTransacoes(), porque essa propriedade não existe no tipo Conta.

Realmente, ela ainda não existe.

extrato-component.ts:

```JavaScript
import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrato();
function renderizarExtrato(): void {
    const gruposTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

// código omitido…
```

No Conta.ts, o único que fizemos foi declarar atributos padrões que o objeto do tipo Conta precisa ter, como nome, saldo e transacoes. Depois, apenas criamos uma nova conta com o nome da Joana.

Para criar essas ações que a pessoa usuária pode fazer com a conta e retornar esse histórico de transações, vamos precisar fazer algo semelhante a funções, mas com orientação a objeto. No próximo vídeo, vamos descobrir como fazer isso. Até lá!

### Aula 1 - Métodos - Vídeo 3

Transcrição  
Quando começamos a construir a classe, comentamos que em orientação a objetos existe uma maneira de construir as interações da pessoa usuária com o nosso objeto.

Métodos  
Para fazer isso, vamos começar com o getGruposTransacoes() que deu erro em extrato-component.ts. Devemos abrir o arquivo Conta-antiga.ts e verificar por volta da linha 44, onde começa a função getGruposTransacoes().

Temos um código de várias linhas. Vamos copiar com "Ctrl + C" da linha 44 a 63, ou seja, toda a função:

Conta-antiga.ts:

```JavaScript
    getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(transacoes);
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return gruposTransacoes;
    },
```

Em seguida, vamos até o novo arquivo que estamos alterando, o Conta.ts. Depois do constructor, mas antes do fechamento da classe Conta, vamos dar um "Enter" e colar com "Ctrl + V" esse trecho que na programação funcional chamava-se de função.

Antes de explicar o que getGruposTransacoes() é em nosso novo paradigma, vamos arrumar os erros.

Primeiro, precisamos importar o GrupoTransacao na linha 17 com "Ctrl + Espaço". O próximo erro aparece na linha 20, em structuredClone(). Nesse trecho, vamos precisar adicionar um this.transacoes entre os parênteses.

Conta.ts:

```JavaScript
import { GrupoTransacao } from "./GrupoTransacao";

export class Conta {

// código omitido…

    getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(this.transacoes);
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return gruposTransacoes;
    }
}

const conta = new Conta("Joana da Silva Olveira");

export default conta;
```

Agora que estamos sem erros aparentes, podemos entender o que estamos fazendo. Quando colocamos essas interações e códigos do que conseguimos fazer com esse objeto, estamos colocando métodos - e não funções como acontece na programação funcional.

Visualmente, ambos se parecem. Pois, vamos colocar o nome do método seguido de parênteses e, em TypeScript, precisamos determinar o tipo. O que temos de diferente?

No structuredClone(), não podemos declarar transacoes diretamente. Precisamos colocar this.transacoes, porque quando chamamos esse método getGruposTransacoes(), estamos nos referindo aquele objeto em específico.

Por exemplo, criamos a conta da Joana ao fazer um new Conta() e passar o nome dessa pessoa. Quando quisermos chamar esse getGruposTransacoes() para visualizá-las, vamos chamar Conta.getGruposTransacoes() que vai direto para a conta da Joana, a qual foi criada com o nome de conta.

São poucas mudanças, mas que fazem uma diferença para ajudar na escalabilidade para ter mais tipos de contas e pessoas usuárias em nosso projeto.

Agora, podemos começar a adicionar outros métodos do Conta-antiga.ts, como o getSaldo(). Após o último método na classe Conta(), basta escrever getSaldo(). Entre chaves, colocamos return this.saldo. Esse this é a diferença para o funcional.

Depois, escrevemos o método getDataAcesso() e declaramos o tipo Date. Entre chaves, colocamos o return new Date(), porque não queremos uma informação do nosso objeto, mas uma informação geral do JavaScript.

Também podemos copiar todo o trecho do registrarTransacao() da Conta-antiga.ts. No Conta.ts, vamos colar após o getDataAcesso().

Com isso, surgem outros erros. Precisamos fazer um import de TipoTransacao, usando o "Ctrl + Espaço".

Em seguida, temos um erro em depositar(), pois o VS Code não encontra o depositar() em nosso código. Isso porque está tentando chamar um método dentro de um método. Esse método depositar() ainda não foi construído.

Em Conta-antiga.ts, vamos procurar onde está esse depositar(). Perceba que estão declarados visualmente como function debitar() e function depositar(), diferente das outras funções que havíamos construído.

Podemos, simplesmente, copiar de debitar() até a última chave, sem o function. Após colar em Conta.ts, faremos o mesmo para depositar().

Agora, vamos arrumar os erros em nossa tela. Em registrarTransacao(), podemos substituir o depositar() para this.depositar() e o debitar() para this.debitar(), pois nos referimos a esses métodos dentro do objeto da Conta. Também, vamos colocar o this em transacoes nas linhas 60 e 62.

No método debitar() que copiamos, vamos acrescentar o this em frente ao saldo nas linhas 69, 73 e 74. No método depositar(), ainda precisamos adicionar mais this em frente ao saldo nas linhas 82 e 83.

Parece repetitivo, mas é porque estamos construindo uma migração de um projeto que já existia com programação funcional para orientação a objeto - não estamos construindo do zero.

E isso acontece, pois a tecnologia evolui cada vez mais rápido e, com isso, pegamos projetos legados que precisamos dar manutenção.

```JavaScript
import { TipoTransacao } from "./TipoTransacao";

export class Conta {

// código omitido…

    getSaldo() {
        return this.saldo;
    }
    getDataAcesso(): Date {
        return new Date();
    }
    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            this.debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            throw new Error("Tipo de Transação é inválido!");
        }

        this.transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(this.transacoes));
    }

    debitar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que zero!");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }

        this.saldo -= valor;
        localStorage.setItem("saldo", this.saldo.toString());
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }

        this.saldo += valor;
        localStorage.setItem("saldo", this.saldo.toString());
    }

}
```

Com isso, conseguimos colocar todos os tipos de métodos que já estavam na Conta-antiga.ts para a nova Conta.ts.

Podemos vamos voltar em extrato-component.ts. Não tem mais erros acontecendo nesse arquivo. Agora, vamos verificar o nova-transacao-component.ts ainda na pasta "src > components".

Na linha 4, ainda importamos a Conta-antiga. Para arrumar, basta substituir para from "../types/Conta.js". Após fazer essa mudança, não surge nenhum erro porque já construímos todos os métodos que são usados para mostrar na tela.

No arquivo saldo-component.ts, precisamos modificar a mesma importação. Na linha 3, vamos substituir Conta-antiga para a nova Conta.

nova-transaco-component.ts e saldo-component.ts:

```JavaScript
import Conta from "../types/Conta.js";
```

Dessa forma, temos a nossa classe Conta com todas as funcionalidades necessárias. O método getGruposTransacoes() pega todos os tipos de transações que tem no local storage e faz a ordenação por data para ter as mais recentes acima.

No método getSaldo(), vai ser retornado o saldo da Joana, pois é a pessoa usuária que criou a conta. Também temos o getDataAcesso() para saber quando a pessoa usuária acessou a sua conta.

Além disso, o registrarTransacao() salva no local storage o tipo da transação, como depósito ou transferência. A depender do tipo, são chamados métodos diferentes.

Por exemplo, se recebemos uma transação do tipo depósito, vai ser chamado outro método chamado depositar(). Se recebemos uma transação do tipo transferência, vai ser chamado o método debitar() para descontar da conta.

Essa lógica já está nas próximas linhas, no método debitar(), o qual ocorre na transferência. Primeiro, ele vai verificar se o valor a debitar não é igual ou menor que zero e se a pessoa tem saldo para retirar esse dinheiro. Depois, ele faz essa transação, retirando o valor do saldo total.

Em seguida, temos o método depositar() que faz o contrário. Ele insere uma quantia de dinheiro em nosso saldo.

Com isso, aprendemos como implementar funcionalidades em nosso código feito com orientação a objeto.

Existem mais diferenças entre programação funcional e programação orientada a objetos do que somente o que fizemos. No próximo vídeo, vamos entender isso mais a fundo na parte teórica. Vamos conhecer as vantagens e desvantagens de cada um. Até lá!

### Aula 1 - Ações na conta - Exercício

Joana é uma jovem empreendedora que decidiu abrir seu próprio negócio, uma loja virtual de roupas. Ela está animada com a ideia, mas precisa organizar suas finanças e controlar as transações que ocorrem em sua conta bancária para garantir que tudo esteja em ordem.

Ela decidiu utilizar o TypeScript para desenvolver um sistema simples de controle de conta bancária. Começou criando a classe Conta para representar sua conta. Agora, ela precisa implementar alguns métodos nessa classe para manipular as transações e o saldo da conta. Qual dos métodos a seguir é responsável por salvar uma transação?

```JavaScript
registrarTransacao(transacao: Transacao): void {
        this.transacoes.push(transacao);
        localStorage.setItem("transacoes", JSON.stringify(this.transacoes));
    }
```

> O método "registrarTransacao(transacao: Transacao): void" é responsável por registrar uma transação na conta corrente. Nesse trecho de código ele salva a transação na lista de transações localizada no armazenamento local do navegador.

### Aula 1 - Comparando paradigmas - Vídeo 4

Transcrição  
Durante nosso processo de migração do projeto ByteBank de programação funcional para orientação a objetos, comentamos sobre diversos termos como paradigmas de programação, orientação a objetos, programação funcional, entre outros.

Agora, vamos entender a parte teórica desses termos.

Paradigmas de programação  
Paradigmas de programação são maneiras em que podemos construir o nosso código. Mas, não podemos aplicar todos os paradigmas em todas linguagens.

No TypeScript, podemos colocar em um mesmo projeto os dois tipos de paradigmas: programação funcional e orientação a objetos. Vamos entender cada um deles.

Programação funcional  
A programação funcional é o paradigma com o qual estamos mais acostumados, quando falamos de JavaScript e TypeScript. É uma programação baseada em funções matemáticas.

Por exemplo, podemos definir uma function pegaNumeroMaior() para colocar tudo o que deve acontecer para comparar valores e determinar o maior entre eles.

Outra característica é que essas funções devem ser puras. Por exemplo, não podem mudar o valor de alguma variável global do projeto.

Ela até pode mudar algo de uma variável do tipo let ou const. Mas, uma variável global, var, seria impossível fazer a mudança e não é considerado uma boa prática.

Existem algumas palavras-chave que são associadas a esse tipo de programação:

- Imutabilidade;
- Composição;
- Recursão;
- Abstração.

A questão de poder chamar uma função dentro de uma função e dentro de outra função e acabar em um laço gigante são características da programação funcional.

Programação orientada a objetos (POO)  
Agora, estamos conhecendo sobre programação orientada a objetos. Como o nome indica, ela é baseada em objetos.

Instanciamos esses objetos através de classes. Essas classes têm características que vão ser usadas nesse objetos, os chamados atributos.

No caso do nosso projeto, temos os atributos nome, saldo e transações. São características que todos os objetos da classe Conta vão ter.

Depois, temos algumas palavras-chave que podem ser utilizadas e relacionadas a orientação a objetos:

- Encapsulamento;
- Polimorfismo;
- Herança.

Com o encapsulamento, temos questões de modificadores de acesso, como public ou private. Por exemplo, colocamos atributos que não podem ser acessados por fora. Isso não existem na programação funcional.

Na herança, podemos criar novos objetos que herdam características de outros objetos que podemos considerar "classes-mães" ou "classes-pais".

Dessa maneira, podemos criar uma "conta padrão" que todo mundo tem. Mas, tem pessoas que querem ter uma "conta PJ". Para criá-la, poderíamos pegar as mesmas informações que já tínhamos da outra conta, só que acrescentar um tipo de saldo é diferente.

Com a herança, não precisamos declarar duas vezes a classe de "conta". Basta pegar a conta padrão e criar uma nova somente com essa diferença.

No contexto desse projeto, a orientação a objetos é muito útil para a criação de contas.

Qual o melhor paradigma?  
Devemos usar orientação a objetos ou funcional? Qual a resposta certa? Depende!

No caso desse projeto em específico, é interessante usar a orientação a objetos para a criação de contas, mas não estaria errado se usássemos a funcional.

É essencial ter o conhecimento dos dois paradigmas e de outros existentes para ajudar na escolha ao começar a codar algum projeto.

Esperamos que você tenha conseguido compreender as diferenças entre cada um dos tipos de paradigmas apresentados. Na próxima aula, vamos continuar a aplicar orientação a objetos em nosso projeto. Até mais!

### Aula 1 - Para saber mais: paradigmas de programação

Sabe quando você tem um quebra-cabeça para resolver? Existem diferentes formas de resolver esse quebra-cabeça, certo? Da mesma forma, quando escrevemos programas de computador, existem diferentes formas de resolver problemas, e chamamos essas formas de "paradigmas de programação".

Um desses paradigmas é a programação funcional. Na programação funcional, usamos "funções" para resolver problemas. Uma função é como uma pequena tarefa que você pode pedir ao computador para fazer. Em vez de mexer e modificar diretamente os dados, as funções recebem informações, fazem algum trabalho e retornam um resultado. É como se você pedisse para o computador "some esses números" e ele te dá o resultado.

As funções na programação funcional são muito poderosas porque podemos usá-las como peças de quebra-cabeça, combinando-as de diferentes maneiras para resolver problemas complexos. Você pode conhecer mais sobre esse paradigma com o Alura Mais [“O que é programação funcional?”](https://cursos.alura.com.br/extra/alura-mais/o-que-e-programacao-funcional--c696) e o artigo [“Programação funcional: O que é?”](https://www.alura.com.br/artigos/programacao-funcional-o-que-e).

Outra forma de resolver problemas é a orientação a objetos. Na orientação a objetos, pensamos nos programas como se fossem um mundo de objetos diferentes. Cada objeto tem características e coisas que ele pode fazer, como um personagem de um jogo. Por exemplo, podemos ter um objeto chamado "carro" que tem cor, tamanho e pode acelerar e frear. Podemos criar diferentes objetos a partir de uma "classe", que é como uma receita para fazer objetos semelhantes.

É como se tivéssemos uma forma de fazer carros e depois pudéssemos criar vários carros com base nessa forma. A orientação a objetos nos ajuda a organizar as coisas de uma maneira fácil de entender e nos permite reutilizar e compartilhar código de forma eficiente. Te convido a assistir o [#HipstersPontoTube - Orientação a objetos com Roberta Arcoverde](https://youtu.be/jpuJ1qrluoU) para saber mais sobre a utilização de orientação a objeto e suas aplicações:

O TypeScript é uma linguagem de programação que podemos usar para escrever nossos programas. Com o TypeScript, podemos usar tanto a programação funcional quanto a orientação a objetos. Podemos criar funções e combiná-las de maneiras interessantes para resolver problemas, como encaixar peças de um quebra-cabeça. Também podemos criar objetos e dar a eles características e comportamentos específicos, como criar personagens para um jogo. O TypeScript nos ajuda a escrever programas melhores, evitando erros e tornando nosso código mais fácil de entender.

### Aula 1 - O que aprendemos?

Nessa aula, você aprendeu como:

- Diferenciar os paradigmas de programação funcional e orientação a objetos.
- Construir classes;
- Criar objetos ao instanciar uma classe;
- Definir atributos que são as características de um objeto;
- Desenvolver métodos para realizar ações em objetos.

## Aula 2 - Encapsulando dados

### Aula 2 -  - Vídeo 1
### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
### Aula 2 -  - Vídeo 5
### Aula 2 -  - Vídeo 6
### Aula 2 -  - Vídeo 7
### Aula 2 -  - Vídeo 8
### Aula 2 -  - Vídeo 9
