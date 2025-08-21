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

### Aula 2 - Modificadores de acesso - Vídeo 1

Transcrição  
Na última aula, abordamos a diferença entre programação funcional e orientação a objetos. Agora, na tela do aplicativo ByteBank, temos um resultado visual que mostra no extrato algumas transferências que não realizamos durante o curso. Vamos entender de onde vem isso?

Modificadores de acesso  
Com o console do navegador aberto, encontraremos um aviso de que não foi possível carregar o arquivo TipoTransacao, com o erro 404 (Not found, ou seja, não encontrado).

Vamos acessar o VS Code para resolver isso. No arquivo Conta.ts, nas linhas de código 1, 2 e 3, onde estão as importações, precisamos colocar a extensão .js ao final do nome dos arquivos.

```JavaScript
import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";
```

Feito isso, teremos no extrato somente um depósito que fizemos como teste. Agora, ao abrir o console novamente, não teremos mais o erro indicado aos arquivos.

O navegador compreende somente JavaScript, e não TypeScript, então durante todo o momento em que trabalhamos no código, acontece uma conversão de linguagem. Porém, precisamos declarar os arquivos do tipo JavaScript em vez de TypeScript, por isso fizemos essa alteração.

Modificador public  
Retornando ao âmbito de contas bancárias, quando criamos uma conta em banco, não queremos que todas as pessoas tenham acesso a informações confidenciais, mas algumas coisas podem ser acessadas. Por exemplo: ao abrir o aplicativo, queremos ter acesso ao nome da conta.

Não é considerada uma boa prática fazer isso diretamente com o atributo nome na classe Conta. A melhor prática para isso seria fazer um método. Então, após o constructor() da linha 15, criaremos um método chamado getTitular() na linha 19.

Esse método irá retornar this.nome. Além disso, antes do método iremos adicionar a palavra-chave public para torná-lo público.

```JavaScript
public getTitular() {
    return this.nome;
}
```

Vamos acessar o nome da Joana, dona da conta. Então, mais adiante no código, na linha 93 após a criação de conta, usaremos a função console.log() recebendo conta.getTitular().

```JavaScript
console.log(conta.getTitular())
```

Após salvar as alterações, vamos retornar ao navegador e acessar o console novamente. Agora é retornado o nome "Joana da Silva Oliveira".

Vamos entender melhor o public que utilizamos no método getTitular(). Por padrão, tudo o que está no nosso código sem essa palavra-chave está definido como público. Dessa forma, tudo está acessível, mas não é isso que gostaríamos de uma conta bancária.

Não é interessante que seja possível mexer, por exemplo, no saldo e na transação diretamente. Então, aprenderemos outra palavra-chave muito importante.

Modificador private
Na linha de código 7, vamos adicionar private antes do atributo saldo, e também na linha 8 antes do atributo transacoes.

```JavaScript
private saldo: number = Armazenador.obter("saldo") || 0;
private transacoes: Transacao[] = Armazenador.obter(("transacoes"), (key: string, value: any) => {
    if (key === "data") {
        return new Date(value);
    }
    return value;
}) || [];
```

Feito isso, vamos retornar à função console.log() que adicionamos na linha 93, remover o método getTitular() de dentro dos parênteses, e tentar acessar transacoes.

```JavaScript
console.log(conta.transacoes)
```

Ao fazer essa alteração, o TypeScript indicará um erro com a seguinte mensagem:

A propriedade transacoes é privada e somente acessível pela classe Conta.

Ou seja, quando utilizamos a palavra-chave private, deixamos o atributo privado. Dessa forma, não conseguiremos acessar a informação diretamente, exceto por meio de um método público ou outra maneira.

Modificador protected  
Existe outra palavra-chave que podemos usar: a protected. Vamos alterar, por exemplo, a palavra-chave private do atributo saldo para protected. Além disso, vamos adicionar essa mesma palavra antes do atributo nome na linha de código 6.

```JavaScript
protected nome: string;
protected saldo: number = Armazenador.obter("saldo") || 0;
```

Feito isso, vamos retornar à função console.log() da linha 93 e testar substituir transacoes por nome.

```JavaScript
console.log(conta.nome)
```

Nesse caso, também será indicado um erro. Ao posicionar o cursor sobre nome, teremos a explicação do erro:

A propriedade nome é protegida e somente acessível pela classe Conta e suas subclasses.

Note que há uma pequena diferença da palavra-chave private para protected. A diferença é que quando quisermos chamar a informação em alguma subclasse, isto é, uma classe filha (nesse momento, entra a questão de herança que comentamos anteriormente enquanto falávamos sobre orientação a objeto), conseguiremos acessar por ela.

Em resumo, o modificador protected é como o private, mas com uma característica a mais.

Tudo isso é chamado de encapsulamento, ou seja, nós encapsulamos na classe Conta algumas funções e métodos. Ainda não adicionamos tudo, mas é interessante ter desde já essa compreensão para depois melhorar e aumentar o projeto.

Nesse momento, já podemos apagar a função console.log() da linha 93.

Conclusão  
Existe ainda outra funcionalidade, referente à questão de salvar no localStorage e resgatar o valor, que pode ser usado para conta normal, para outros tipos de conta, e assim por diante, quando o projeto aumentar. Criaremos uma nova classe para resolver esse problema.

Faremos isso no próximo vídeo. Até lá!

### Aula 2 - Consultando informações - Exercício

Você está desenvolvendo um sistema para uma loja de eletrônicos. A loja possui uma classe chamada "Produto" que representa os produtos disponíveis para venda. A classe possui propriedades como nome e preço.

A empresa decidiu adotar o encapsulamento para proteger as propriedades do objeto e garantir a consistência dos dados. Por isso, foram definidos os modificadores de acesso "private" para as propriedades internas da classe.

A classe "Produto" possui os seguintes métodos e propriedades:

```JavaScript
export class Produto {
   private nome: string;
   private preco: number;

   constructor(nome: string, preco: number) {
      this.nome = nome;
      this.preco = preco;
   }

   public getNome(): string {
      return this.nome;
   }

   public getPreco(): number {
      return this.preco;
   }

const produto = new Produto("Smartphone", 1500);
export default produto;
```

Como você pode obter o nome do produto que foi criado no código anterior?

Resposta:  
Usando a expressão produto.getNome().

> Essa expressão é correta porque o método getNome() da classe Produto é público, ou seja, ele pode ser chamado por outras classes. Esse método retorna o valor do atributo nome da instância do produto que foi criada no código anterior.

### Aula 2 - Para saber mais: encapsulando dados

Quando estamos desenvolvendo aplicações em TypeScript, é fundamental garantir a segurança e a integridade dos dados em nossas classes.O problema surge quando os membros de uma classe são acessíveis livremente, sem restrições. Isso pode levar a situações em que os dados internos da classe são modificados ou acessados incorretamente, comprometendo a consistência e a confiabilidade do código.

A solução para esse problema é aplicar o conceito de encapsulamento em TypeScript. O encapsulamento permite ocultar a implementação interna de uma classe e fornecer apenas interfaces bem definidas para acessar e manipular seus dados.

Para garantir o encapsulamento adequado em TypeScript é possível fazer uso dos modificadores de acesso, que são palavras-chave que controlam a visibilidade dos membros das classes. Os principais modificadores são: public, private e protected. Aqui está uma explicação de cada um desses modificadores:

- public: O modificador public permite que os membros sejam acessados livremente de qualquer lugar. É o modificador padrão caso nenhum seja especificado.
- private: O modificador private restringe o acesso aos membros somente à própria classe. Isso significa que eles não podem ser acessados ou modificados fora da classe.
- protected: O modificador protected permite que os membros sejam acessados dentro da classe e também pelas classes derivadas (subclasses). No entanto, eles não são acessíveis fora das classes derivadas.

### Aula 2 - Desafio: segurança da conta

Chegou a hora de botar o conteúdo em prática! Durante o ínicio da aula, foram inseridos modificadores de acesso nos atributos das classes, mas é possível inserir também nos métodos e também alterar os que já foram colocados. Que tal, a partir do conteúdo do vídeo e do para saber mais, aplicar os que fazem mais sentido para cada caso do código? :)

Opinião do instrutor

Algumas dicas são: mantenha como public apenas os que todos podem visualizar, como o getTitular, e também os que são utilizados fora da classe, como o registrarTransacao.

Agora, os métodos de deposito e debito somente são utilizados dentro da classe Conta, portanto, podem ser marcados como private. Por fim, é interessante manter o nome e saldo como protected, pois se houver a criação de novos tipos de contas eles podem ser utilizados.

### Aula 2 - Nova classe - Vídeo 2

Transcrição  
Vamos dar continuidade e construir uma classe para o armazenamento!

#### Nova classe

Criando a classe Armazenador  
Na pasta "types", criaremos um novo arquivo chamado Armazenador.ts. Nesse arquivo, vamos exportar a classe Armazenador com export class. Entre chaves, adicionaremos private constructor(), seguido de uma abertura e um fechamento de chaves.

```JavaScript
export class Armazenador {
    private constructor() { }
}
```

Além de exportar a classe, usamos o private constructor(), pois quando chamamos Armazenador, não precisamos enviar nada. Ele não será, por exemplo, um objeto com atributos nome, saldo e transacoes; ele servirá apenas para fazer o intermédio para resgatar os valores de localStorage.

Implementando o método salvar()  
Na sequência, entre as chaves da classe Armazenador, vamos criar um método chamado salvar(), o qual irá receber uma chave que será uma string, e um valor que será any. Após o fechamento de parênteses do método, colocaremos : void e abriremos chaves.

Entre as chaves, vamos declarar uma constante chamada valorComoString, que será igual ao método JSON.stringify() recebendo entre parênteses valor.

Logo abaixo, usaremos o recurso localStorage junto ao método setItem(), que receberá chave e valorComoString.

```JavaScript
static salvar(chave: string, valor: any): void {
    const valorComoString = JSON.stringify(valor);
    localStorage.setItem(chave, valorComoString);
}
```

Esse método irá salvar algo no localStorage, transformar o que recebe em JSON, e depois armazenar no local storage com o método setItem().

Implementando o método obter()  
Nosso próximo passo é criar um método chamado obter(), que também irá receber o parâmetro chave como string, além de reviver? seguido de dois-pontos e uma abertura de parênteses contendo this: any, key: string, value: any. Após o fechamento dos parênteses, vamos adicionar uma função de seta (=>), também recebendo o tipo any.

Para finalizar, vamos abrir e fechar chaves.

```JavaScript
obter(chave: string, reviver?: (this: any, key: string, value: any) => any) {

}
```

Assim, criamos um método que será responsável por resgatar no localStorage as informações do extrato. Ele recebe como parâmetro uma chave que indica a localização no localStorage onde está a informação. Além disso, o método recebe uma função opcional chamada reviver?, para quando quisermos fazer uma conversão do valor recebido.

A função opcional reviver? recebe três parâmetros, sendo dois deles do tipo any, o que significa que eles podem receber qualquer valor. Essa função é reutilizável, então há várias maneiras de chamá-la.

Agora vamos trabalhar em como o método irá obter as informações do localStorage. Entre as chaves, vamos declarar uma constante chamada valor, que será igual ao objeto localStorage seguido do método getItem(), que recebe entre parênteses chave.

```JavaScript
const valor = localStorage.getItem(chave);
```

Em seguida, adicionaremos os blocos condicionais. O primeiro deles será o seguinte: se valor for nulo (if (valor === null)), será retornado null.

```JavaScript
if (valor === null) {
    return null;
}
```

O segundo bloco será o seguinte: se tivermos a função reviver (if (reviver)), será retornada a função JSON.parse() recebendo valor e reviver como argumentos.

```JavaScript
if (reviver) {
    return JSON.parse(valor, reviver)
}
```

Por fim, teremos o retorno (return) de JSON.parse() novamente, agora recebendo valor.

```JavaScript
return JSON.parse(valor);
```

Com isso, tentamos adquirir no localStorage a informação que tenha como identificação a chave enviada para o método obter(). Se nada for encontrado, será retornado null; se for recebida a função reviver, usada para fazer a conversão do valor, teremos como retorno a função JSON.parse() juntando tanto o valor quanto a função reviver.

Caso nenhuma dessas condições seja atendida, acontecerá diretamente a função JSON.parse() retornando o valor, que será exibido na tela a partir do extrato.

Resultado do arquivo Armazenador.ts:

```JavaScript
export class Armazenador {
    private constructor() { }

    static salvar(chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }

    static obter(chave: string, reviver?: (this: any, key: string, value: any) => any) {
        const valor = localStorage.getItem(chave);

        if (valor === null) {
            return null;
        }

        if (reviver) {
            return JSON.parse(valor, reviver)
        }
        return JSON.parse(valor);
    }
}
```

Utilizando a classe Armazenador no arquivo Conta.ts  
Agora podemos chamar a classe Armazenador no arquivo Conta.ts, nos locais onde antes chamávamos diretamente o localStorage, como na linha 7, por exemplo, onde acessamos o saldo.

Vamos remover tudo o que estiver depois do sinal de igual (=) e chamar a classe Armazenador junto ao método obter(), que recebe entre aspas duplas o saldo. Ao final, vamos usar o sinal de ou (||) seguido de 0.

Trecho a ser substituído:

```JavaScript
JSON.parse(localStorage.getItem("saldo")) || 0;
```

Resultado:

```JavaScript
protected saldo: number = Armazenador.obter("saldo") || 0;
```

Conclusão  
Nesse momento, será indicado um erro no método obter():

A propriedade obter não existe no tipo typeof Armazenador.

Para descobrir por que esse erro acontece, vamos resolver o problema no próximo vídeo. Até lá!

### Aula 2 - Métodos static - Vídeo 3

Transcrição  
Vamos resolver o erro do método obter()?

Métodos estáticos  
Começaremos pelo arquivo Armazenador.ts. Antes de salvar (método salvar()) na linha de código 4, vamos adicionar a palavra-chave static.

```JavaScript
static salvar(chave: string, valor: any): void {
    const valorComoString = JSON.stringify(valor);
    localStorage.setItem(chave, valorComoString);
}
```

Faremos o mesmo na linha 9, antes do método obter():

```JavaScript
static obter(chave: string, reviver?: (this: any, key: string, value: any) => any) {
// código omitido
```

Feito isso, ao retornar para o arquivo Conta.ts, não teremos mais o erro indicado pelo TypeScript. Mas afinal, o que significa a palavra-chave static?

A tradução literal da palavra é estático, então agora os métodos salvar() e obter() são estáticos. Mas somente a partir da tradução, é um pouco complicado fazer uma associação com o que acontece de fato ao utilizá-la.

A palavra-chave static permite que os métodos sejam chamados sem precisar criar um objeto a partir da classe Armazenador. Por exemplo: quando queremos chamar os métodos da classe Conta, como getTitular() ou getGruposTransacoes(), precisamos criar uma conta.

No entanto, para o Armazenador, não precisamos criar um armazenador cada vez que quisermos salvar algo no localStorage; precisamos apenas chamar a função.

É para isso que servem os métodos estáticos.

Sabendo isso, agora podemos substituir no arquivo Conta.ts os outros locais que usavam localStorage. Primeiramente, vamos fazer essa alteração na linha de código 9, onde temos o atributo transacoes. No lugar do trecho abaixo, colocaremos a classe Armazenador seguida do método obter().

Trecho a ser substituído:

```JavaScript
JSON.parse(localStorage.getItem
```

Resultado:

```JavaScript
private transacoes: Transacao[] = Armazenador.obter(("transacoes"), (key: string, value: any) => {

// código omitido
```

Para encontrar todos os localStorage que precisaremos substituir no código, podemos usar o atalho "Ctrl + F" e buscar pelo texto desejado.

Na linha 67, também é usado o localStorage, junto ao método setItem(). Nesse caso, nós queremos salvar, então vamos substituir o trecho por Armazenador.salvar().

Trecho a ser substituído:

```JavaScript
localStorage.setItem
```

Resultado:

```JavaScript
Armazenador.salvar("transacoes", JSON.stringify(this.transacoes));
```

Precisamos fazer a mesma alteração na linha 79:

```JavaScript
Armazenador.salvar("saldo", this.saldo.toString());
```

Por fim, vamos alterar a linha 88 da mesma forma:

```JavaScript
Armazenador.salvar("saldo", this.saldo.toString());
```

Conclusão  
Sempre que criarmos uma classe, contendo métodos para os quais não precisamos criar novos objetos para usá-los, usaremos métodos estáticos.

No entanto, agora o TypeScript reclama outros erros no nosso código. Tanto na classe Conta quanto na classe Armazenador, temos vários locais no código em que usamos o tipo any. Precisaremos aprender algumas coisas novas para evitar essa prática.

Vamos aprender?

### Aula 2 - Para saber mais: estático

Quando estamos trabalhando com TypeScript, pode ser necessário criar classes e métodos que possam ser acessados sem precisar criar um objeto da classe. Os métodos estáticos são uma maneira poderosa de definir comportamentos e lógicas que podem ser usados diretamente na classe, sem a necessidade de criar objetos.

Imagine que você tenha uma classe chamada Utils e deseja criar um método que converta uma string em letras maiúsculas. Em vez de criar uma instância da classe Utils toda vez que você precisar usar esse método, você pode declará-lo como um método estático. Isso permitirá que você acesse o método diretamente na classe, sem a necessidade de criar um objeto.

Aqui está um exemplo de como criar e usar um método estático em TypeScript:

```JavaScript
class Utils {
  static converterParaMaiusculas(texto: string): string {
    return texto.toUpperCase();
  }
}

// Chamando o método estático diretamente na classe
const textoConvertido = Utils.converterParaMaiusculas("Olá, mundo!");
console.log(textoConvertido); 
// Saída no console: "OLÁ, MUNDO!"
```

No exemplo acima, definimos o método converterParaMaiusculas como um método estático usando a palavra-chave static antes de sua declaração. Isso significa que o método pertence à própria classe Utils, não a instâncias específicas da classe.

A chamada do método é feita diretamente na classe, sem precisar criar um objeto Utils. Isso nos permite acessar o método de maneira conveniente, sem a necessidade de criar instâncias desnecessárias da classe.

Os métodos estáticos são especialmente úteis quando temos lógicas ou funcionalidades que são aplicáveis a toda a classe em si, em vez de instâncias individuais da classe. Eles também podem ser usados para criar funções utilitárias ou fábricas de objetos, que não dependem do estado ou de uma instância específica da classe.

Pensando na motivação da nossa classe Armazenador de construir funções utilitárias, é possível transferir o arquivo de dentro da pasta types, para a pasta utils.

### Aula 2 - O que aprendemos?

Nessa aula, você aprendeu como:

- Utilizar os modificadores de acesso para controlar a visibilidade dos membros de uma classe;
- Aplicar o encapsulamento em TypeScript para proteger os dados internos de uma classe;
- Utilizar os métodos públicos para obter informações de propriedades privadas de uma classe de forma segura;
- Criar e utilizar métodos estáticos em TypeScript para definir comportamentos e lógicas que podem ser acessados diretamente na classe, sem a necessidade de criar objetos.

## Aula 3 - Lidando com Tipos

### Aula 3 - Projeto da aula anterior

Caso queira revisar o código até aqui ou começar a partir desse ponto, disponibilizamos os códigos realizados na [aula anterior para download](https://github.com/alura-cursos/formacao-typescript-projeto-curso-02/archive/refs/heads/aula02.zip) ou veja nosso [repositório do Github](https://github.com/alura-cursos/formacao-typescript-projeto-curso-02/tree/aula02).

### Aula 3 - Tipo genérico - Vídeo 1

Transcrição  
Quando estávamos preparando os métodos do arquivo Armazenador.ts, inserimos várias palavras "any", que aceitam vários tipos de dados. Por exemplo, se inserirmos qualquer tipo de dado na função reviver na linha 9, ele será aceito.

Lidando com Tipos e Previsibilidade em Funções
No entanto, uma das vantagens do TypeScript é podermos lidar com tipos, seja definindo o tipo de retorno ou o que vamos enviar para aquela função. Vamos inserir um tipo de retorno na função obter para ter mais previsibilidade do que está acontecendo dentro dela.

Arquivo Armazenador.ts no repositório do GitHub

Para atingir esse objetivo, na linha 9, em static obter, vamos inserir um sinal de menor, seguido pela letra T maiúscula e depois o sinal de maior: <T>. No final da mesma linha, após o último any, vamos inserir dois pontos, a letra T maiúscula, uma barra vertical e a palavra null.

Armazenador.ts

```JavaScript
// código omitido

    static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null {
        const valor = localStorage.getItem(chave);

        if (valor === null) {
            return null;
        }

        if (reviver) {
            return JSON.parse(valor, reviver) 
        }
        return JSON.parse(valor);
    }
}
```

Informamos que a função obter terá um retorno do tipo T. Esse tipo T é genérico, o que significa que ao chamarmos esse método, definimos o tipo desejado para o retorno. Utilizamos a letra T apenas como um marcador, mas poderia ser qualquer letra do alfabeto.

Mas o interessante aqui é que utilizamos essa letra T para associar com o tipo desejado. E ao inserirmos <T>, garantimos que a função obter retornará o tipo que informamos na chamada do método, através do T, ou nulo, ou seja, nada.

Então, precisamos também lidar com o retorno quando ele pode ser um JSON.parse, caso contrário, a questão de inserir o tipo genérico não funcionará corretamente. Na linha 17 e na linha 20, dentro do return JSON.parse(), inserimos o as T dentro e fora do if(reviver).

Armazenador.ts

```JavaScript
// código omitido

    static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null {
        const valor = localStorage.getItem(chave);

        if (valor === null) {
            return null;
        }

        if (reviver) {
            return JSON.parse(valor, reviver) as T
        }
        return JSON.parse(valor) as T;
    }
}
```

Assim, quando for retornado o valor convertido para o JSON.parse(), ele também será identificado com o tipo genérico que estamos enviando.

Conclusão  
Pode não ter ficado tão claro sobre o que é esse tipo genérico, também chamado de Generics. Mas no próximo vídeo, ao aplicarmos em Conta.ts, ficará mais fácil de visualizar na prática a usabilidade disso.

### Aula 3 - O tipo certo - Exercício

Você é um desenvolvedor(a) trabalhando em um sistema de gerenciamento de pedidos para uma loja online. A loja vende diferentes tipos de produtos, como roupas, eletrônicos e livros. No entanto, você está enfrentando um problema ao implementar a função de calcular o valor total do pedido no sistema.

```JavaScript
calcularValorTotal(pedido: any[]): number {
 // código omitido
}
```

Atualmente, você está utilizando o tipo any para representar os produtos no pedido, mas isso resulta em uma perda de segurança de especificação de tipo. Qual é a solução mais adequada para lidar com esse problema?

Selecione uma alternativa

Resposta:  
Utilizar generics com o tipo <T> para permitir a escolha do tipo de produto no momento da utilização da função de calcular o valor total.

> Ao utilizar generics, podemos parametrizar o tipo de produto que será utilizado na função de calcular o valor total. Isso nos permite manter a flexibilidade de calcular o valor total de diferentes tipos de produtos, sem perder a segurança de tipo fornecida pelo TypeScript. O <T> representa um espaço reservado para o tipo de produto que será determinado no momento da utilização da função de calcular o valor total.

### Aula 3 - Para saber mais tipos parametrizados

Você está desenvolvendo um sistema de gerenciamento de estoque para uma loja online que vende diferentes tipos de produtos, como roupas, eletrônicos e livros. Você precisa criar uma função que receba um array de produtos e retorne o valor total do estoque.

Você tenta usar o tipo any para representar os produtos na função, mas isso resulta em uma perda de segurança de especificação de tipo. Você não consegue garantir que o array passado seja realmente de produtos, nem acessar as propriedades específicas de cada tipo de produto. Isso pode causar erros em tempo de execução e dificultar a manutenção do código.

Você decide usar o conceito de generics para tornar a função mais flexível e segura. Generics são tipos parametrizados que permitem que você defina o tipo de um argumento ou retorno de uma função no momento da sua utilização. Assim, você pode criar uma função que aceite qualquer tipo de array, desde que ele seja compatível com uma interface que defina as propriedades comuns a todos os tipos de produtos.

Generics são uma forma de reutilizar código e evitar duplicação. Eles permitem que você crie funções e classes que funcionem com diferentes tipos de dados, sem perder a segurança de tipo fornecida pelo typescript. Para usar generics, você precisa usar um espaço reservado para o tipo, como <T>, na declaração da função ou classe. Esse espaço reservado será substituído pelo tipo real no momento da utilização da função ou classe. Você também pode restringir o tipo genérico usando a palavra-chave extends, indicando que ele deve ser um subtipo de outro tipo ou interface. Por exemplo:

```JavaScript
interface Produto { 
nome: string; preco: number; quantidade: number; 
}

function calcularValorTotal<T extends Produto>(produtos: T[]): number { 
let valorTotal = 0; 
for (let x = 0; x < produtos.length; x++) { 
valorTotal += produtos[x].preco * produtos[x].quantidade; 
} 
return valorTotal; 
}
```

Generics são muito úteis para criar funções e classes mais genéricas e reutilizáveis, sem perder a segurança e a precisão dos tipos.

### Aula 3 - Especificando tipos - Vídeo 2

Transcrição  
Nesta aula, vamos usar o método com esse tipo genérico.

Arquivo Conta.ts no repositório do GitHub

Flexibilizando a Função Obter: Tipos Específicos para Saldo e Transações
Na linha 8 e 9 é onde chamamos o Armazenador:

Conta.ts

```JavaScript
// código omitido

export class Conta {
    protected nome: string;
    protected saldo: number = Armazenador.obter("saldo") || 0;
    private transacoes: Transacao[] = Armazenador.obter(("transacoes"), (key: string, value: any) => {
        if (key === "data") {
            return new Date(value);
        }
        return value;
    }) || [];

// código omitido
```

Agora, vamos declarar o tipo desejado para o retorno, que será o tipo saldo, representado por valores de dinheiro na forma de número. Portanto, depois de obter("saldo"), adicionamos `<number>`.

Conta.ts

```JavaScript
// código omitido

protected saldo: number = Armazenador.obter<number>("saldo") || 0;

// código omitido
```

Dessa forma, ao chamarmos o obter na linha 8 para o saldo, sendo o mesmo obter de transações na linha 9, estamos declarando que o que retornar de lá será um número, representando o saldo do cliente.

Vamos praticar isso novamente, na linha 9, após o obter, definimos que desejamos o tipo <Transacao[]>, e salvamos.

Conta.ts

```JavaScript
// código omitido

protected saldo: number = Armazenador.obter<number>("saldo") || 0;
private transacoes: Transacao[] = Armazenador.obter<Transacao[]>(("transacoes"), (key: string, value: any) => {
        if (key === "data") {
            return new Date(value);
        }

// código omitido
```

Mesma função, mesma maneira de chamar, mas determinamos que as duas formas que serão chamadas não retornarão o mesmo tipo de dado. A função obter está flexível e de acordo com o que desejamos dela, então em <Transacao[]> estamos definindo uma lista (array) e transações, sendo o que será retornado na chamada a linha 9.

Conclusão  
Conseguimos deixar essa questão da função obter mais flexível, no entanto, há outros detalhes em que a programação orientada a objetos pode nos auxiliar. Na sequência, vamos aprender outros conceitos que a programação orientada a objetos nos proporciona para programar.

### Aula 3 - O que aprendemos?

Nessa aula, você aprendeu como:

- Usar generics para criar componentes flexíveis e reutilizáveis que funcionam com diferentes tipos de dados de forma segura e consistente;
- Definir o tipo <T> para representar um tipo genérico que será determinado no momento da utilização do componente;
Aplicar o operador “as T” para definir explicitamente o tipo de retorno ao realizar a conversão de JSON para o tipo original.

## Aula 4 - Herdando atributos

### Aula 4 - Projeto da aula anterior

Caso queira revisar o código até aqui ou começar a partir desse ponto, disponibilizamos os códigos realizados na [aula anterior para download](https://github.com/alura-cursos/formacao-typescript-projeto-curso-02/archive/refs/heads/aula03.zip) ou veja nosso [repositório do Github](https://github.com/alura-cursos/formacao-typescript-projeto-curso-02/tree/aula03).

### Aula 4 - Conta premium - Vídeo 1

Transcrição  
Agora o ByteBank irá oferecer uma nova funcionalidade, possibilitando a criação de uma conta premium. Isso permitirá que as pessoas usuárias ganhem um bônus, fazendo parte de um programa de recompensas, onde cada transação renderá um bônus de R$0,50.

Nova Funcionalidade: Conta Premium com Programa de Recompensas
Para implementar essa funcionalidade, vamos ao arquivo Conta.ts, antes da criação da conta antiga, na linha 93. A partir desta linha, vamos adicionar a classe ContaPremium com o método registrarTransacao(transacao: Transacao): void. Dentro dessas chaves, colocamos um if() verificando se transacao.tipoTransacao === TipoTransacao.DEPOSITO. Em seguida, abrimos e fechamos as chaves {}.

Por enquanto, temos:

Conta.ts

```JavaScript
// código omitido

export class ContaPremium {
    registrarTransacao(transacao: Transacao): void {
        if (transacao.tipoTransacao === TipoTransacao.DEPOSITO) {
        }
    }
}

// código omitido
```

Dentro do if() podemos inserir um console.log("ganhou um bônus de 0.50 centavos");. Na linha seguinte, colocamos transacao.valor += 0.5 e após o if() registramos a transação usando super.registrarTransacao(transacao).

Conta.ts

```JavaScript
// código omitido

export class ContaPremium {
    registrarTransacao(transacao: Transacao): void {
        if (transacao.tipoTransacao === TipoTransacao.DEPOSITO) {
                    console.log("ganhou um bônus de 0.50 centavos");
                    transacao.valor += 0.5
        }
        this.registrarTransacao(transacao)
    }
}

// código omitido
```

Neste momento, a instrutora corrige um erro. No código dela, no if(), está escrito if(transacao.tipo === TipoTransacao.DEPOSITO), e há um sublinhado vermelho em ".tipo". Esse erro indica que a propriedade tipo não existe no tipo Transação. Para corrigir isso, podemos verificar no código o trecho onde estávamos usando algo semelhante, na linha 54, onde verificamos o tipoTransacao e não apenas tipo. A partir disso, ela corrigiu de transacao.tipo para transacao.tipoTransacao.

Dessa forma, temos uma nova classe ContaPremium, semelhante à classe Conta, onde temos um método chamado registrarTransacao() que já tínhamos antes. Agora, porém, ele fará outra coisa: vai verificar se o tipo de transação é do tipo "depósito". Se for, a pessoa ganha o bônus de 0,5. Em seguida, ele registra a transação na lista do Local Storage.

A partir disso, para criar a ContaPremium, podemos, após a criação da conta da Joana criar uma nova ContaPremium seguindo a mesma lógica.

Conta.ts

```JavaScript
// código omitido

const conta = new Conta("Joana da Silva Oliveira");
const contaPremium = new ContaPremium("Mônica Hillman");

export default conta;
```

Observem que recebemos um aviso informando que a ContaPremium espera zero argumento e recebeu um. Provavelmente isso ocorre pelo fato de não termos indicado o que a classe ContaPremium deve receber, mas gostaríamos que ela reutilizasse algumas informações da Conta.

Conclusão  
Mas aprenderemos sobre isso no próximo vídeo.

### Aula 4 - Herdando da conta - Vídeo 2

Transcrição  
Na linha 104, podemos observar um sublinhado na cor vermelha abaixo de Mônica Hillman, isso significa que há um erro. Ao colocarmos o mouse sobre o sublinhado, é exibida a seguinte mensagem informando o motivo do erro:

Expected 0 arguments, but got 1.

Isso ocorre porque, ao criarmos a classe ContaPremium, não incluímos atributos nem um construtor. Como consequência, não é esperado o recebimento de argumentos. Para evitar a necessidade de recriar todas as informações, atributos e construtores, podemos ir à linha 93 e adicionar a herança da classe Conta, utilizando o comando extends, após a declaração da classe ContaPremium. Assim, a classe ContaPremium herdará os atributos e métodos da classe Conta.

Conta.ts

```JavaScript
// código omitido
export class ContaPremium extends Conta {
    registrarTransacao(transacao: Transacao): void {
        if (transacao.tipoTransacao === TipoTransacao.DEPOSITO) {
                    console.log("ganhou um bônus de 0.50 centavos");
                    transacao.valor += 0.5
        }
        this.registrarTransacao(transacao)
    }
}
// código omitido
```

Em programação orientada a objetos, a herança implica que estamos adquirindo ou estendendo a classe Conta. Consequentemente, todos os elementos presentes na classe Conta estarão disponíveis na classe ContaPremium.

Contudo, ao utilizarmos o método registrarTransacao(), estamos realizando uma sobrescrita, ou seja, criando um novo método registrarTransacao(), no qual ao efetuar um depósito, adicionamos 0,5 a mais ao valor.

Em seguida, utilizamos o this.registrarTransacao(transacao), o qual não funcionará corretamente, pois ele invocará o registrarTransacao() que não realiza o depósito, apenas efetua a verificação. No entanto, o que desejamos é chamar o método registrarTransacao() original, que executa o depósito necessário.

Utilizando Super para Aproveitar Herança na Classe ContaPremium
Para alcançar esse objetivo, substituímos o this por super. Com essa alteração, pretendemos utilizar algo que está dentro da nossa classe Pai ou Mãe, ou seja, da classe que estamos herdando. Portanto, invocamos o registrarTransacao() da linha 53 (registrarTransacao(novaTransacao: Transacao)), assim, a verificação é realizada novamente, e verifica-se se será feito o depósito ou o débito que já existia na conta.

Conta.ts

```JavaScript
// código omitido

export class ContaPremium extends Conta {
    registrarTransacao(transacao: Transacao): void {
        if (transacao.tipoTransacao === TipoTransacao.DEPOSITO) {
                    console.log("ganhou um bônus de 0.50 centavos");
                    transacao.valor += 0.5
        }
        super.registrarTransacao(transacao)
    }
}

// código omitido
```

Dessa forma, não precisamos repetir código e fazer somente o que é importante para a ContaPremium.

Conclusão  
Além disso, ao aplicarmos a programação orientada a objetos, temos à nossa disposição outros recursos que nos auxiliarão em conjunto com o TypeScript.

### Aula 4 - Tipos de usuários - Exercício

Imagine que você está desenvolvendo um sistema para uma escola que precisa gerenciar os dados dos alunos e dos professores. Você decide usar herança para criar classes que representem esses dois tipos de usuários, aproveitando as características comuns entre eles. Considere o seguinte código em Typescript:

```JavaScript
class Usuario {
  nome: string;
  email: string;
  senha: string;

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}
```

Qual das alternativas abaixo mostra como criar uma classe Aluno que herda da classe Usuario e adiciona um atributo matricula?

Selecione uma alternativa

Resposta:

```JavaScript
class Aluno extends Usuario {
    matricula: number;
    constructor(nome: string, email: string, senha: string, matricula: number) {
    super(nome, email, senha);
    this.matricula = matricula;
  }
}
```

> Ela usa a palavra-chave extends para indicar que a classe Aluno é derivada da classe Usuario, e usa a função super para chamar o construtor da classe pai.

### Aula 4 - Para saber mais: estendendo classes

Você está trabalhando em um projeto de um jogo de RPG que tem vários tipos de personagens, como guerreiras, magos, arqueiras, etc. Cada tipo de personagem tem suas próprias habilidades, atributos e equipamentos, mas também compartilha algumas características comuns, como nome, nível, vida e experiência.

Para representar cada tipo de personagem, você irá criar classes, mas não quer repetir o código das características comuns em todas elas. Além disso, você quer que o seu código seja fácil de entender e manter.

```JavaScript
// Classe pai que representa um personagem genérico
class Personagem {
  nome: string;
  nivel: number;
  vida: number;
  experiencia: number;

  constructor(nome: string) {
    this.nome = nome;
    this.nivel = 1;
    this.vida = 100;
    this.experiencia = 0;
  }

  atacar(alvo: Personagem): void {
    // implementar a lógica do ataque
  }

  defender(): void {
    // implementar a lógica da defesa
  }

  ganharExperiencia(pontos: number): void {
    // implementar a lógica do ganho de experiência
  }
}
```

Você pode usar herança para criar classes que herdem as características comuns de uma classe pai e adicionem as características específicas de cada tipo de personagem. Por exemplo:

```JavaScript
// Classe filha que representa um tipo específico de personagem
class Guerreira extends Personagem {
  forca: number;
  armadura: string;

  constructor(nome: string, forca: number, armadura: string) {
    super(nome); // chama o construtor da classe pai
    this.forca = forca;
    this.armadura = armadura;
  }

  atacar(alvo: Personagem): void {
    // sobrescrever o método da classe pai com a lógica específica do guerreire
  }

  usarArmadura(): void {
    // implementar a lógica do uso da armadura
  }
}
```

Herança é um princípio da programação orientada a objetos que permite que uma classe filha herde as propriedades e os métodos de uma classe pai, sem precisar redefinir as funções. Em Typescript, usamos a palavra-chave extends para indicar que uma classe é derivada de outra. A classe filha pode sobrescrever os métodos da classe pai se precisar de uma lógica diferente, ou adicionar novos métodos se precisar de mais funcionalidades. A classe filha também pode acessar o construtor da classe pai usando a função super.

### Aula 4 - O que aprendemos?

Nessa aula, você aprendeu como:

- Funcionam as heranças e como elas permitem criar classes derivadas que reutilizam e estendem o código das classes bases;
- Usar a palavra-chave extends para indicar a relação de herança entre as classes em Typescript;
- Inserir a função super para chamar o construtor da classe base na classe derivada;
- Sobrescrever ou adicionar métodos na classe derivada para implementar a lógica específica de cada tipo de personagem.

## Aula 5 - Validando Interações

### Aula 5 -  - Vídeo 1
### Aula 5 -  - Vídeo 2
### Aula 5 -  - Vídeo 3
### Aula 5 -  - Vídeo 4
### Aula 5 -  - Vídeo 5
### Aula 5 -  - Vídeo 6
### Aula 5 -  - Vídeo 7
### Aula 5 -  - Vídeo 8
