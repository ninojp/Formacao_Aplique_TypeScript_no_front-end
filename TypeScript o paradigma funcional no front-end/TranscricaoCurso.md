# Curso Alura TypeScript o paradigma funcional no front-end

## Aula 1 - Elevando seu JS com TypeScript

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá, sou Vinicios Neves, seu desenvolvedor careca e barbudo favorito. Estou aqui para apresentar um pouco mais sobre o TypeScript.

Audiodescrição: Vinicios Neves é um homem de pele clara. Tem olhos castanho-escuros e é careca. Usa barba e um bigode, óculos de grau com armação quadrada preta. Está com uma camisa vermelha. Ao fundo, uma parede com iluminação azul e uma estante à direita com decorações.

Portanto, se você já possui o conhecimento básico e entende como essa ferramenta de tipagem funciona em cima do JavaScript, vamos continuar e ver o que faremos juntos ao longo deste curso.

O que vamos aprender?  
A aplicação Fokus é uma ferramenta que ajuda a gerenciar o tempo utilizando a técnica Pomodoro. É uma técnica de concentração que envolve a alternância entre momentos de foco e momentos de intervalo.

Aplicação Fokus no navegador. Fundo roxo. No topo, logotipo da Fokus. Logo abaixo, título "Otimize sua produtividade, mergulhe no que importa" alinhado à esquerda. Alinhado à direita, desenho realista de pessoa de pele escuras de costas. Tem cabelo curto e usa fone de ouvidos e roupa futurista. Ao redor, bolhas desfocadas.

Vamos receber a base dessa aplicação já criada, sem nada de TypeScript, e faremos a refatoração.

O aspecto no qual iremos trabalhar será focado na parte de tarefas. Nas listas de tarefas, poderemos selecionar, editar e adicionar novas tarefas. Essa é o core (essência) da funcionalidade que iremos refatorar.

Este curso está incrível e estamos bastante animados, pois abrange muitos conceitos profundos que, às vezes, não recebem a devida atenção. Portanto, esperamos que esteja animado(a) para embarcar nesta jornada conosco, utilizando TypeScript e, como bônus, publicando no final esta ferramenta Pomodoro, chamada Fokus.

Vamos lá? Venha conosco!

### Aula 1 - Preparando o ambiente

Olá!  
É muito bom receber você neste curso.

Espero que seja uma experiência de aprendizado incrível e que possamos vencer todos os desafios juntos. Neste curso, vamos evoluir uma aplicação com a ajuda do TypeScript.

> Este curso é indicado para aqueles que já possui algum conhecimento sobre TypeScript.

> Para conseguir acompanhar a evolução da aplicação em TypeScript, é necessário que você tenha o Node instalado.

Se precisar de mais detalhes, você pode consultar esse artigo de [como instalar Node.js no Windows, Linux e macOS](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos).

Além disso, vamos precisar do projeto base. Eu deixei ele prontinho pra você [aqui no Github](https://github.com/alura-cursos/fokus-ts/tree/projeto-inicial).

O uso do VSCode é super recomendado, porque vamos utilizar algumas ferramentas que ele já possui nativamente.

Bora codar? Vem comigo.

### Aula 1 - Bem começado, metade feito - Vídeo 2

Transcrição  
Bom, vamos logo colocar começar a evoluir essa aplicação para maximizar nossa produtividade utilizando TypeScript.

Lembre-se de baixar o projeto que está na atividade de "Preparando o ambiente"!

No VS Code, vamos observar o arquivo chamado script-crud.js na raiz do projeto. Este script é responsável pela manipulação da criação de novas tarefas, onde conseguimos adicionar, editar e remover tarefas na lista do foco.

Portanto, esse script é o que vamos transformar e migrar para TypeScript.

Interface de Tarefa
Como começar essa migração? Vamos criar um novo arquivo na raiz do projeto chamado script-crud com a extensão ts de TypeScript. Esse arquivo conterá todo o código desenvolvido para o Fokus durante o curso.

Podemos começar com a parte primordial do TypeScript que é configurar nossos tipos. Quais os tipos que representam nossa aplicação do Fokus?

Voltando no script-crud.js onde está o código original, podemos observar, nas linhas 17, 18 e 19, que existe um conceito de tarefas.

script-crud.js:

```JavaScript
let tarefas = [
    {
        descricao: 'Tarefa concluída',
        concluida: true
    },

// código omitido…
```

Uma tarefa é composta por uma descrição, que é o texto que representa a tarefa, e um booleano que indica se ela foi concluída ou não com true ou false.

Podemos começar montando esse tipo. Portanto, no arquito de extensão ts, vamos criar uma interface chamada Tarefa.

Essa interface vai conter as nossas duas propriedades: descricao que é uma string e concluida, que é um boolean.

script-crud.ts:

```JavaScript
interface Tarefa {
    descricao: string
    concluida: boolean
}
```

Essa é o conceito menor, ou seja, a menor porção do nosso código, que representa a tarefa.

Interface de Estado da Aplicação  
Conferindo para a aplicação no navegador, vamos focar na parte de lista de tarefas, que está logo abaixo do cronômetro. Essa lista consiste em múltiplas tarefas e também podemos selecionar uma tarefa.

Portanto, o estado da aplicação atualmente consiste em uma lista de tarefas ou a tarefa selecionada. O detalhe é que podemos selecionar uma tarefa para executar ou editar seu texto.

Esse conceito de estado é o que vamos manipular agora.

No script-crud.ts, vamos criar uma nova interface chamada EstadoAplicacao que se caracteriza pela nossa lista de tarefas que é um array de Tarefa, ou seja, todas as tarefas concluídas ou não.

Na linha de baixo, podemos criar um estado para a tarefa que está selecionada. Isto é, tarefaSelecionada que será do tipo Tarefa. Assim, selecionamos uma tarefa seja para editar ou executar.

```JavaScript
interface EstadoAplicacao {
    tarefas: Tarefa[]
    tarefaSelecionada: Tarefa
}
```

Já estamos prontos para começar a modelar nossa aplicação. Agora, precisamos fornecer os insumos necessários para que esse script do tipo TypeScript se transforme, seja compilado, em .js. Isso é o que faremos no próximo vídeo.

### Aula 1 - Imutabilidade e estado inicial - Vídeo 3

Transcrição  
Agora estamos prontos(as) para criar o estado concreto do Fokus.

Já temos um primeiro ponto que gostaria de destacar. Vamos tomar alguns cuidados durante toda a escrita desta aplicação com a programação funcional.

Vamos trazer alguns conceitos dela para o nosso código. Um deles é que as funções deveriam ser puras. O que isso significa? Uma função não deveria gerar efeitos colaterais. Dada uma quantidade de parâmetros e os parâmetros recebidos, o retorno é sempre o mesmo.

Então, não vamos manipular esses estados dentro da função. Cada função recebe o estado como parâmetro e retorna um novo estado. Esse é o conceito que devemos ter em mente durante a execução deste código.

Criação do estado inicial  
Vamos começar criando nosso estado com let estado que é o estado da aplicação. Ele vai receber um objeto.

Podemos dizer para o TypeScript qual é esse tipo do estado. Logo depois de declarar let estado, vamos acrescentar dois-pontos e tipá-lo como EstadoAplicacao.

script-crud.ts:

```JavaScript
let estado: EstadoAplicacao = {

}
```

O próprio VS Code, já indica um ponto de atenção. Ele sublinhou de vermelho a palavra estado, informando que esse estado está faltando tarefas e tarefasSelecionadas. Vamos adicionar essas propriedades que estão faltando.

Neste ponto, podemos pegar as tarefas do script-crud.js. Há um exemplo entre as linhas 16 e 29. Vamos copiar só o array de tarefas e colá-lo após escrever tarefas:.

E a tarefaSelecionada? Se pressionamos "Ctrl + Espaço", o VS Code já até sugere a propriedade tarefaSelecionada. No entanto, no momento inicial da aplicação, não temos tarefa selecionada.

Então, neste primeiro instante, tarefaSelecionada é null.

```JavaScript
let estado: EstadoAplicacao = {
    tarefas: [
        {
            descricao: 'Tarefa concluída',
            concluida: true
        },
        {
            descricao: 'Tarefa pendente 1',
            concluida: false
        },
        {
            descricao: 'Tarefa pendente 2',
            concluida: false
        }
    ],
    tarefaSelecionada: null
}
```

Mas o VS Code já reclama que nulo não combina com o tipo desse estado, pois espera-se uma Tarefa. Vamos ter que ser um pouco mais flexíveis. Na definição do EstadoAplicacao, vamos dizer que a tarefaSelecionada pode ser uma Tarefa ou null.

```JavaScript
interface EstadoAplicacao {
    tarefas: Tarefa[]
    tarefaSelecionada: Tarefa | null
}
```

Agora estamos um pouco mais flexíveis, até porque isso faz sentido. A tarefa pode existir, pois podemos ter selecionado uma tarefa. Mas também podemos não ter nenhuma tarefa selecionada.

Funções puras  
Agora que temos a base pronta, podemos escalar e começar a escrever as funções. Um detalhe sobre as funções: elas serão puras, ou seja, dados os mesmos parâmetros recebidos, o retorno será sempre o mesmo - tomando cuidado para não gerar efeito colateral.

Se você está se perguntando: "O que é esse efeito colateral? Do que vocês estão falando?" Parece nome de filme, não é?

Vamos no script-crud.js para procurar uma função. Na linha 48, temos uma função chamada removerTarefas. Ela recebe o parâmetro somenteConcluidas, que talvez seja um booleano, mas, como é JavaScript, não temos certeza.

script-crud.js:

```JavaScript
const removerTarefas = (somenteConcluidas) => {
    const seletor = somenteConcluidas ? '.app__section-task-list-item-complete' : '.app__section-task-list-item'
    document.querySelectorAll(seletor).forEach((element) => {
        element.remove();
    });

    tarefas = somenteConcluidas ? tarefas.filter(t => !t.concluida) : []
}
```

E o que ela faz? Ela tem uma lógica que define qual seletor ela vai aplicar. Pega esse seletor, deleta todos os elementos e, depois, aplica um filtro. Vamos fazer um "Ctrl + B" para colapsar o painel do explorador e deixar o código bem evidente.

Em seguida, ele verifica: se é somenteConcluidas, ele aplica um filtro na variável tarefas e a modifica. Caso contrário, ele coloca um array vazio.

A variável tarefas da linha 54, que está recebendo esse valor, é a mesma que foi definida anteriormente na linha 16 em let tarefas. Isso é um efeito colateral.

Temos uma variável definida na linha 16 que está sendo manipulada na linha 54 e, muito provavelmente, outros lugares diferentes da aplicação vão gerar efeitos colaterais nessas tarefas. Nós não queremos isso.

O que desejamos é que a função receba essas tarefas por parâmetro e retorne um novo estado.

Esse conceito é chamado de função pura: dada a entrada que ela recebe, ela sempre retorna a mesma coisa. Se esses parâmetros são os mesmos, ela vai retornar sempre os mesmos valores.

Agora que temos o estado iniciado, podemos começar a construir essas funções puras, dando pequenos passos de maneira gradual. Até a próxima.

### Aula 1 - Trabalhando com funções puras - Vídeo 4

Transcrição  
Vamos escrever nossa primeira função pura. Devemos ter atenção, pois como já estamos no processo de refatoração, se a função estiver com múltiplas responsabilidades, começaremos a separá-las.

Ao examinar o script-crud.js que é o código base, encontramos uma função chamada selecionaTarefa, que recebe uma tarefa e um elemento.

Com base nisso, ela realiza diversas lógicas: verifica se a tarefa está concluída, executa querySelectorAll(), altera o DOM, etc.

script-crud.js:

```JavaScript
const selecionaTarefa = (tarefa, elemento) => {

    if (tarefa.concluida) {
        return
    }
    document.querySelectorAll('.app__section-task-list-item-active').forEach(function (button) {
        button.classList.remove('app__section-task-list-item-active');
    });

    if (tarefaSelecionada == tarefa) {
        taskAtiveDescription.textContent = null
        itemTarefaSelecionada = null
        tarefaSelecionada = null
        return
    }

    tarefaSelecionada = tarefa
    itemTarefaSelecionada = elemento
    taskAtiveDescription.textContent = tarefa.descricao
    elemento.classList.add('app__section-task-list-item-active')
}
```

São muitas linhas. Quantas linhas temos aqui? São 21 linhas de função.

Se tivermos um problema como, por exemplo, um bug de seleção de tarefa, teríamos uma função de 21 linhas para corrigir. Isso já pode ser considerado um code smell, indicando um possível problema para a manutenção futura.

Criação de função pura  
Vamos focaremos na função que criaremos no arquivo com extensão ts.

Na última linha, criaremos uma constante. Poderíamos criar uma função tradicional, por exemplo, function selecionaTarefa(). Mas o que queremos é criar uma função no formato arrow function e armazená-la em uma constante.

Isso diz respeito ao estilo de código. O instrutor Vinicios prefere escrever funções no formato arrow function do que funções tradicionais. No quesito performance, há pouca diferença, então fica a seu critério.

Portanto, vamos criar a constante selecionarTarefa. Como estamos no processo de refatoração, iremos introduzir o conceito de utilizar um verbo para indicar que estamos realizando alguma ação.

Essa função recebe uma arrow function. Ou seja, recebe () => {}.

O que queremos recer como parâmetro? O estado que é do tipo EstadoAplicacao e também qual a tarefa que está sendo selecionada. A variável tarefa é do tipo Tarefa.

Dado isso, temos que retornar algo. O que devo retornar nessa função? Podemos deixar isso explícito. Essa função sempre retornará um EstadoAplicacao. Esse é o seu retorno, um novo estado.

Portanto, podemos garantir no return que vamos espalhar o estado que recebemos com um spread operator, ou seja, .... Por padrão, vamos retornar o estado.

script-crud.ts:

```JavaScript
const selecionarTarefa = (estado: EstadoAplicacao, tarefa: Tarefa) : EstadoAplicacao => {

    return {
        ...estado
    }
}
```

O que queremos fazer? Queremos alterar a variável tarefaSelecionada. Precisamos fazer essa inversão. Se a tarefa que foi clicada for a tarefa selecionada, ela deve passar a ter um valor nulo. Caso contrário, ela receberá a tarefa.

Como fazemos isso? Podemos escrever um operador condicional ternário. Após tarefaSelecionada:, escrevemos que tarefa deve exatamente igual ao estado.tarefaSeleciona. Isto é, fazemos uma comparação estrita usando ===.

O que queremos fazer se essa condição for verdadeira? Queremos dizer que é null, estamos deselecionando. Se tarefa já estava selecionada, ao clicar nela novamente, ela passou a ser nula.

Senão for igual, a tarefaSelecionada será a tarefa que recebemos como parâmetro.

```JavaScript
const selecionarTarefa = (estado: EstadoAplicacao, tarefa: Tarefa) : EstadoAplicacao => {

    return {
        ...estado,
        tarefaSelecionada: tarefa === estado.tarefaSelecionada ? null : tarefa
    }
}
```

Pronto! Temos uma função pura, que recebe parâmetros e retorna um resultado sem gerar efeito colateral.

Observe que não alteramos a variável estado. Portanto, para ficar bem claro que não estamos mexendo nessa variável, vamos até modificar seu nome para estadoInicial.

```JavaScript
let estadoInicial: EstadoAplicacao = {

    // código omitido…

}
```

Observe que alteremos o nome da variável e o TypeScript continua sem reclamar. Ele mostra que está tudo bem com nossa função selecionarTarefa.

Conclusão  
Dessa forma, não estamos mais manipulando ele diretamente. Recebemos um estado e retornamos um novo estado. Esse é o primeiro contato com a programação funcional. Já sabemos que devemos cuidar para criar funções puras.

Mas você deve estar se perguntando: "todas as funções que eu criar precisam ser puras?" Não necessariamente.

Em alguns cenários, faz todo sentido que a função seja pura. Ela será mais previsível e, inclusive, muito mais fácil de testar. Porém, em outros cenários, como veremos no decorrer desse curso, isso não é tão simples.

Portanto, não é uma solução milagrosa, nem uma regra que você deve seguir sem pensar. No nosso cenário, algumas funções fazem completo sentido ter esse cuidado e essa abordagem. Outras, nem tanto.

Agora que já temos a nossa base construída, vamos continuar evoluindo e refatorando a aplicação Fokus. Te esperaremos na próxima aula.

### Aula 1 - Para saber mais: imutabilidade

Salve o/!

Dando continuidade ao nosso mergulho profundo em TypeScript funcional, quero abordar um conceito fundamental que, com certeza, você já deve ter ouvido falar: Imutabilidade. E, claro, entender por que isso é um grande negócio no desenvolvimento frontend moderno. Bora lá?

O que é Imutabilidade?  
Em termos simples, imutabilidade é a ideia de que uma vez que um objeto é criado, ele não pode ser alterado. Se você quiser fazer uma alteração, você cria uma cópia desse objeto com as modificações desejadas, ao invés de mudar o objeto original.

Mas, por que a imutabilidade é tão importante?  
Previsibilidade: No mundo frontend, principalmente em aplicações React, a imutabilidade pode tornar o fluxo de dados mais previsível. Quando os dados nunca mudam, fica mais fácil rastrear e entender as mudanças.

Evita Efeitos Colaterais: Sem imutabilidade, um código pode alterar um objeto de maneira não intencional, levando a bugs inesperados. Ao adotar a imutabilidade, eliminamos esses efeitos colaterais.

Otimizações de Performance: Bibliotecas como React se beneficiam da imutabilidade para otimizar o re-render. Ao comparar referências, em vez de verificar cada valor, o React pode determinar rapidamente se uma re-renderização é necessária.

Casos de uso comuns no frontend:  
Gestão de Estado: Com bibliotecas como Redux, a imutabilidade é uma parte central na gestão do estado da aplicação. Ao seguir este princípio, podemos usar ferramentas incríveis como "time-travel debugging".

React & Re-render: Ao usar useState ou useReducer, sempre retornamos uma nova cópia do estado ao invés de modificar o existente. Isso ajuda na otimização e na prevenção de re-renderizações desnecessárias.

Trabalhando com Arrays e Objetos: Quando você quer adicionar um item a um array, em vez de usar métodos como push(), que modifica o array original, você pode usar o spread operator para criar um novo array.

```JavaScript
const antigosJedis = ["Yoda", "Obi-Wan"];
const novosJedis = [...antigosJedis, "Luke"];
```

O mesmo vale para objetos. Em vez de adicionar propriedades diretamente, você pode criar um novo objeto, mantendo a originalidade intacta.

```JavaScript
const mestreJedi = { nome: "Yoda", idade: 900 };
const mestreAtualizado = { ...mestreJedi, planeta: "Dagobah" };
```

Agora, imagino que você deve estar se perguntando: "Tá, entendi o conceito. Mas e o TypeScript?". Bom, TypeScript leva esse jogo a outro nível! Ele nos permite definir estruturas de dados imutáveis através de tipos, garantindo que não vamos, acidentalmente, modificar os dados.

Vida longa e próspera! 🖖

### Aula 1 - Funções puras em TypeScript: você está pronto para o desafio? - Exercício

Contexto

Você acabou de completar o curso "TypeScript: O paradigma funcional no front-end". Em uma entrevista técnica fictícia para uma vaga de frontend, o entrevistador resolve avaliar o seu conhecimento sobre TypeScript funcional e funções puras.

Pergunta

Qual das seguintes opções representa corretamente uma função pura em TypeScript?

```JavaScript
function soma(a: number, b: number): number {
    return a + b;
}
```

> A função soma é uma função pura porque para quaisquer inputs a e b, ela sempre retornará o mesmo resultado e não tem efeitos colaterais.

### Aula 1 - Faça como eu fiz: iniciando a refatoração

Chegou a sua vez de codar!

Vamos precisar do script-crud.ts, as interfaces Tarefa e EstadoAplicacao. Além disso, vamos criar a nossa primeira função pura: selecionarTarefa.

Opinião do instrutor

Então, que achou dos primeiros passos com TypeScript?

A ideia nesse momento é criar as fundações do CRUD que iremos migrar para TS.

Vou deixar pra você [aqui um link do Github](https://github.com/alura-cursos/fokus-ts/compare/projeto-inicial...aula-1) que você consegue pegar direitinho as alterações da primeira aula.

## Aula 2 - Dominando a UI

### Aula 2 - Manipulação do DOM e UI - Vídeo 1

Transcrição  
Já criamos nossa primeira função pura e agora vamos evoluir nossa refatoração. O objetivo final é criar uma nova versão do Fokus migrada para TypeScript, mas mantendo todos os comportamentos. O que pretendemos é uma entrega técnica, não uma entrega visual.

Fazendo uma conexão com nossa última aula, onde mencionamos que nem todas as funções são puras e que algumas podem gerar efeitos colaterais, a próxima função a ser construída será chamada atualizarUI(), para atualizar a interface da pessoa usuária.

Manipulação do DOM e UI  
Com o arquivo script-crud.ts aberto, vamos até a linha 37 para começar a criar a função. Criaremos uma constante chamada atualizarUI(), que receberá uma arrow function (() =>).

Normalmente, o instrutor escreveria atualizarInterfaceDeUsuario(), mas, para ficar mais sucinto, optamos por atualizarUI(), que é a sigla para User Interface (Interface de Usuário). Este padrão é muito comum em nosso cotidiano como profissionais de front-end.

script-crud.ts:

```JavaScript
const atualizarUI = () => {

}
```

Importante mencionar que, neste momento, não iremos nos preocupar em fazer essa função ser pura. Sabemos que ela terá pelo menos um efeito colateral, que é a manipulação do DOM.

A abordagem que vamos adotar é um pouco diferente. Não vamos nos preocupar em alterar apenas a parte da interface que foi modificada. Sempre que o estado mudar, nós vamos renderizar toda a lista de tarefas.

Sabendo que, nesse cenário que estamos construindo, nós iremos recriar a lista de tarefas a cada modificação no estado, vamos criar uma constante no escopo da função chamada ulTarefas (lista não ordenada de tarefas), que irá receber o método document.querySelector().

Para descobrir qual seletor utilizar, vamos até o arquivo index.html e procurar pela classe da <ul>, localizada na linha 101. O seletor é app__section-task-list.

index.html:

```JavaScript
<ul class="app__section-task-list"></ul>
```

Este seletor usa um padrão chamado B.E.M (Block, Element, Modifier) para nomes de classes CSS. Deixaremos uma atividade sobre isso para que você possa pesquisar mais se tiver interesse.

Sabendo qual seletor utilizar, teremos o seguinte código:

script-crud.ts:

```JavaScript
const atualizarUI = () => {
    const ulTarefas = document.querySelector('.app__section-task-list')
}
```

A primeira coisa que queremos fazer é limpar o conteúdo do innerHTML da ulTarefas, independentemente do estado anterior, atribuindo a ulTarefas?.innerHTML uma string vazia.

```JavaScript
const atualizarUI = () => {
    const ulTarefas = document.querySelector('.app__section-task-list')
    ulTarefas?.innerHTML = ''
}
```

Vamos analisar o que o TypeScript está reivindicando? Ele informa que o elemento ulTarefas? pode ser nulo, devido ao uso da interrogação. O método querySelector() busca um elemento, mas caso não o encontre, retorna nulo.

Se porventura digitássemos incorretamente o nome da classe, o elemento não seria encontrado, resultando em nulo. Dessa forma, ao tentar fazer a chamada ulTarefas?.innerHTML quando ulTarefas for nulo, será gerado um erro no console.

Com isso, o VS Code já facilita nossa vida ao inserir a interrogação, sinalizando que o elemento pode ser nulo. A partir disso, o TypeScript indica que o elemento pode não existir.

Para tratar isso, vamos adicionar um bloco condicional para verificar se a lista de tarefas ulTarefas existe. Se sim, fazemos a limpeza do innerHTML. Dessa forma, nem o VS Code nem o TypeScript retornam erros.

```JavaScript
const atualizarUI = () => {
    const ulTarefas = document.querySelector('.app__section-task-list')
    if (ulTarefas) {
        ulTarefas.innerHTML = ''
    }
}
```

Conclusão  
O próximo passo é lidar com a atualização da interface com base no estado. A função atualizarUI() não é pura. Então, vamos abrir o estadoInicial, buscar dentro dele a lista de tarefas (tarefas), e para cada tarefa (forEach()), vamos recriar o elemento, levando em consideração todas as características que precisamos: se a tarefa está concluída, se não está, se está selecionada ou não.

```JavaScript
const atualizarUI = () => {
    const ulTarefas = document.querySelector('.app__section-task-list')
    if (ulTarefas) {
        ulTarefas.innerHTML = ''
    }

    estadoInicial.tarefas.forEach(tarefa => {
    
    })
}
```

Vamos começar a construir esse HTML considerando tudo o que aprendemos até agora. Nos encontramos em breve!

### Aula 2 - Interação com a UI - Vídeo 2

Transcrição  
Já estamos prontos para escrever um pouco de manipulação do DOM e trazer a criação de um item de lista, ou seja, de uma tarefa, para a função atualizarUI().

Interação com a UI  
Parte do código será bem similar. Dito isso, como evitar a duplicação de código?

Com o arquivo script-crud.js aberto, vamos colapsar a aba "Explorer" com o atalho "Ctrl + B" e deixar lado a lado o script-crud.js e o script-crud.ts, para comparar e entender o que pode ser aproveitado. Se precisarmos de alguma alteração, faremos conforme necessário.

No arquivo .js, a função que cria uma tarefa (createTask()) está na linha 102. No arquivo .ts, faremos esse trecho de código na linha 45, dentro do loop forEach() que itera sobre tarefas e estadoInicial.

A primeira coisa que fazemos na linha 103 do arquivo .js é criar uma lista (li).

script-crud.js:

```JavaScript
function createTask(tarefa) {
    const li = document.createElement('li')

// código omitido
```

Vamos criar esse elemento copiando a linha do arquivo .js e colando no arquivo .ts.

Na sequência, a função adiciona uma classe ao mesmo elemento da lista.

```JavaScript
li.classList.add('app__section-task-list-item')
```

Também traremos isso para o arquivo .ts.

script-crud.ts:

```JavaScript
const atualizarUI = () => {
    const ulTarefas = document.querySelector('.app__section-task-list')
    if (ulTarefas) {
        ulTarefas.innerHTML = ''
    }

    estadoInicial.tarefas.forEach(tarefa => {
        const li = document.createElement('li')
        li.classList.add('app__section-task-list-item')
    })
}
```

Em seguida, a função cria um SVG (svgIcon) e atribui a svgIcon.innerHTML o valor taskIconSvg.

script-crud.js:

```JavaScript
const svgIcon = document.createElement('svg')
svgIcon.innerHTML = taskIconSvg
```

Iremos transpor essas duas linhas para o arquivo .ts e ajustar a identação. O valor taskIconSvg não existe em nenhum lugar do arquivo script-crud.ts. Então, de onde ele vem?

No arquivo .js, identificamos que ele está definido entre as linhas 31 e 39.

```JavaScript
const taskIconSvg = `
<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF" />
    <path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#01080E" />
</svg>
`
```

Vamos copiar este trecho e colar logo após atualizarUI(), antes da declaração da lista de tarefas, na linha de código 38.

script-crud.ts:

```JavaScript
const atualizarUI = () => {
    const taskIconSvg = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF" />
            <path
                d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E" />
        </svg>
    `

    const ulTarefas = document.querySelector('.app__section-task-list')
    if (ulTarefas) {
        ulTarefas.innerHTML = ''
    }

    estadoInicial.tarefas.forEach(tarefa => {
        const li = document.createElement('li')
        li.classList.add('app__section-task-list-item')
        const svgIcon = document.createElement('svg')
        svgIcon.innerHTML = taskIconSvg
    })
}
```

Você deve estar se perguntando: por que não colocamos diretamente o HTML ao final do loop forEach()? Fazemos dessa forma para deixar mais limpo e organizado o código.

Nós já criamos o item de lista, adicionamos a classe, criamos o ícone SVG, e adicionamos o .innerHTML dele. Dando continuidade, criaremos o parágrafo (paragraph) e adicionaremos o conteúdo de texto dele. Para isso, vamos copiar do arquivo .js as linhas 109, 110 e 111.

script-crud.js:

```JavaScript
const paragraph = document.createElement('p')
paragraph.classList.add('app__section-task-list-item-description')
paragraph.textContent = tarefa.descricao
```

Dessa forma, criamos o parágrafo. Agora podemos transpor as duas próximas constantes, que são o botão de edição (button) e o editIcon. O botão de edição contém uma imagem que é um pequeno ícone de lápis, representando a função de edição.

Vamos copiar da linha 113 à 119 e trazer para o arquivo script-crud.ts.

```JavaScript
const button = document.createElement('button')
button.classList.add('app_button-edit')

const editIcon = document.createElement('img')
editIcon.setAttribute('src', '/imagens/edit.png')

button.appendChild(editIcon)
```

A parte de adicionar o ouvinte do evento (addEventListener()), que aparece na sequência no arquivo .js, não será movida para o arquivo .ts.

Na linha 136 do código .js, temos o bloco condicional if (tarefa.concluida). Podemos trazer este trecho também para o código .ts.

```JavaScript
if (tarefa.concluida) {
    button.setAttribute('disabled', true)
    li.classList.add('app__section-task-list-item-complete')
}
```

Resultado do bloco forEach() no arquivo script-crud.ts até o momento:

```JavaScript
estadoInicial.tarefas.forEach(tarefa => {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')
    const svgIcon = document.createElement('svg')
    svgIcon.innerHTML = taskIconSvg

    const paragraph = document.createElement('p')
    paragraph.classList.add('app__section-task-list-item-description')
    paragraph.textContent = tarefa.descricao

    const button = document.createElement('button')
    button.classList.add('app_button-edit')

    const editIcon = document.createElement('img')
    editIcon.setAttribute('src', '/imagens/edit.png')

    button.appendChild(editIcon)

    if (tarefa.concluida) {
        button.setAttribute('disabled', true)
        li.classList.add('app__section-task-list-item-complete')
    }
})
```

Observe que, no arquivo .js, chamamos a função setAttribute(), que define o atributo HTML de determinado elemento. Com ela, especificamos que o nome do atributo é disabled, ou seja, queremos que o botão fique inacessível, não clicável, e passamos o valor true.

O VS Code não reclama nenhum erro, porém, ao analisar o arquivo .ts, ele nos alerta que tentamos passar uma variável booleana (true) para a função setAttribute(), e ela não aceita booleano. Essa função espera uma string.

Logo, nesse cenário em que passamos um atributo, apesar de ser booleano, precisamos converter para uma string, então vamos colocar true entre aspas simples.

script-crud.ts:

```JavaScript
if (tarefa.concluida) {
    button.setAttribute('disabled', 'true')
    li.classList.add('app__section-task-list-item-complete')
}
```

Também é comum encontrarmos button.setAttribute('disabled', 'disabled'), repetido duas vezes. Caso você se depare com um ou outro, está tudo correto. O importante é indicar que o atributo existe e está definido.

Basicamente, fizemos o seguinte: se a tarefa estiver concluída, o botão estará desativado. Na sequência, adicionamos outra classe com li.classList.add().

Por fim, no arquivo .js, tudo isso é reunido e inserimos o ícone SVG (svgIcon), o parágrafo (paragraph) e o botão (button) no item de lista que criamos.

script-crud.js:

```JavaScript
li.appendChild(svgIcon)
li.appendChild(paragraph)
li.appendChild(button)
```

Vamos copiar este trecho da linha 141 à 143 para o arquivo .ts.

Feito isso, podemos fechar o arquivo script-crud.js. Por enquanto, não precisaremos mais dele, pois nesse momento, não retornaremos a lista (li) para lugar algum.

O que vamos fazer é pegar a lista não ordenada de tarefas (ulTarefas) que já temos, e executar a função appendChild() para adicionar mais um filho a ela. Entre os parênteses da função, passaremos o item de lista que acabamos de criar.

Resultado do arquivo script-crud.ts:

```JavaScript
// código omitido
const atualizarUI = () => {
    const taskIconSvg = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF" />
            <path
                d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E" />
        </svg>
    `
    const ulTarefas = document.querySelector('.app__section-task-list')
    if (ulTarefas) {
        ulTarefas.innerHTML = ''
    }

    estadoInicial.tarefas.forEach(tarefa => {
        const li = document.createElement('li')
        li.classList.add('app__section-task-list-item')
        const svgIcon = document.createElement('svg')
        svgIcon.innerHTML = taskIconSvg

        
        const paragraph = document.createElement('p')
        paragraph.classList.add('app__section-task-list-item-description')
        paragraph.textContent = tarefa.descricao


        const button = document.createElement('button')
        button.classList.add('app_button-edit')
    
        const editIcon = document.createElement('img')
        editIcon.setAttribute('src', '/imagens/edit.png')
    
        button.appendChild(editIcon)

        if (tarefa.concluida) {
            button.setAttribute('disabled', 'true')
            li.classList.add('app__section-task-list-item-complete')
        }

        li.appendChild(svgIcon)
        li.appendChild(paragraph)
        li.appendChild(button)

        ulTarefas?.appendChild(li)
    })
}
```

Alguns detalhes: primeiramente, o VS Code é um grande aliado e insere uma interrogação após ulTarefas, porque essa parte do código pode ser nula. Então, nesse cenário, não faremos um bloco if, pois aceitamos essa condição.

No contexto do bloco if da linha 48, queríamos escrever algo dentro de ulTarefas, e se essa lista fosse nula, quebraria a aplicação. Já no cenário da linha 81, se a lista de tarefas não existir, ele não tentará chamar a função. Logo, se isso acontecer, ao testar a aplicação, não encontraremos o item de lista.

Testando o código  
Para finalizar este momento, podemos salvar o arquivo script-crud.ts e testar o código em execução. Realizaremos dois pequenos passos:

- No primeiro, precisamos definir para o projeto o TSConfig, determinando quão rígidas ou quão flexíveis serão as regras do nosso compilador;
- Feito disso, precisamos configurar para que, após a compilação, ele sobrescreva o arquivo script-crud.js. Dessa forma, conforme salvamos o arquivo, o arquivo .js correspondente sempre será sobrescrito.

Agora é a sua vez de brilhar!

Conclusão  
Uma dica que podemos dar é que há um curso anterior da Alura, com o instrutor João Vitor, no qual ele explora essa temática do início. Se você ainda não assistiu, recomendamos bastante e você poderá aplicar os conhecimentos no projeto Fokus.

Portanto, deixaremos essa missão para você! Caso precise de ajuda, haverá um gabarito para você se referenciar, mas a ideia é que você pratique. É por meio da prática que conseguimos absorver esse tipo de conhecimento, e configurar a forma como o TypeScript constrói um projeto é uma parte muito importante do nosso dia a dia enquanto pessoas desenvolvedoras de front-end.

### Aula 2 -  Para saber mais: CSS e o padrão BEM

Salve o/!

No nosso profundo mergulho em TypeScript funcional, você pode estar se perguntando: "Por que estamos falando sobre CSS?". Bom, como sabemos, para construir aplicações frontend eficazes, não basta apenas dominar a lógica e os padrões de design - a estilização é uma parte crucial da experiência do usuário. E quando falamos de estilização, um padrão que ganhou bastante tração e pode ajudar muito na manutenção e escalabilidade é o BEM. Então, bora lá entender esse padrão?

O que é BEM?  
BEM significa Block, Element, Modifier. É uma metodologia que fornece uma convenção para nomear classes em CSS, tornando seu código mais legível e compreensível.

- Block: É uma entidade independente e significativa por si só. Exemplo: header, container, menu.

- Element: Partes de um bloco que têm significado em conjunto com esse bloco. Exemplo: menu__item, header__logo.

- Modifier: Uma variação ou extensão de um bloco ou elemento. Exemplo: menu--hidden, menu__item--active

Por que usar BEM?  
Legibilidade: Olhando para uma classe BEM, você pode facilmente entender a relação entre o CSS e o HTML, o que está acontecendo e onde.

Independência: Os blocos são independentes e podem ser reutilizados, sem estar atrelados a outros elementos.

Sem Cascata: Como o BEM evita a especificidade, os estilos não se sobrepõem, evitando efeitos colaterais indesejados.

Casos de uso comuns no frontend:  
Componentização: Pense nos componentes como blocos. Quando criamos componentes em frameworks como React, Vue ou Angular, o padrão BEM pode ser facilmente aplicado para manter a consistência de estilização.

Manutenção e Escalabilidade: Suponha que você está trabalhando em uma equipe grande, onde múltiplos desenvolvedores tocam na base de código. Com o BEM, cada pessoa pode entender e identificar rapidamente a estrutura e relação entre HTML e CSS, sem medo de quebrar estilos existentes.

```html
<div class="card">
    <img src="..." alt="..." class="card__image">
    <h2 class="card__title">Título</h2>
    <p class="card__description">Descrição aqui.</p>
    <button class="card__button card__button--primary">Clique Aqui</button>
</div>
```

Note como, mesmo sem ver o CSS, você tem uma ideia clara da estrutura e das relações.

Agora, você pode estar pensando, "Tá, entendi o BEM, mas e o TypeScript?". A realidade é que, enquanto TypeScript se concentra na lógica e na estrutura, o BEM se preocupa com a estilização. Quando ambos são aplicados corretamente, você acaba com um código frontend robusto, manutenível e altamente legível.

Esse assunto é tão bacana que que o [Mario Souto escreveu esse artigo](https://www.alura.com.br/artigos/criando-componentes-css-com-padrao-bem) mega bacana sobre ele.

Vida longa e próspera! 🖖

### Aula 2 - Desafio: compilando TS

Chegou a sua vez de preparar o projeto. Você vai precisar iniciar um projeto usando o NPM. Além disso, é a hora de instalar o typescript como dependencia de desenvolvimento.

Por fim, defina o tsconfig.json. Assim você vai estar pronto para seguir os estudos.

Opinião do instrutor

Então, como foi o percurso?

Vou deixar [aqui a documentação do NPM init](https://docs.npmjs.com/cli/v9/commands/npm-init) se você quiser entender melhor como ele funciona.

Pra gente, basta abrir o terminal na pasta do projeto e rodar o comando:

> npm ini -y

Assim, teremos o projeto iniciado com o package.json devidamente configurado. Agora já podemos instalar o TypeScript:

> npm i typescript

Agora basta usar o compilador do próprio VSCode.

Versionamento e Git  
Caso você ainda não conheça o Github e o que é versionamento de código, eu super [indico esse curso](https://cursos.alura.com.br/course/git-github-repositorio-commit-versoes) pra você ficar por dentro do assunto.

Se você já conhece e quer preparar o versionamento do projeto Fokus no Github, podemos aproveitar para preparar o arquivo .gitignore.

Imagina que você está organizando sua mochila para uma viagem e quer levar apenas o essencial. O .gitignore é tipo a sua checklist do que NÃO colocar na mala. É uma maneira do Git saber o que deve e o que não deve rastrear ou, em outras palavras, o que não deve ser incluído em seu repositório.

Agora, falando sobre o node_modules, essa é uma daquelas pastas pesadonas, recheada de arquivos! Quando estamos desenvolvendo projetos de frontend, essa pasta guarda todas as bibliotecas e dependências que nosso projeto precisa. Mas por que não queremos ela no nosso Git? Primeiro, porque ela é ENORME! Adicionar isso ao nosso repositório iria sobrecarregá-lo desnecessariamente. Segundo, todos esses pacotes já estão listados no package.json, ou seja, qualquer pessoa que pegar seu projeto pode simplesmente rodar um npm install e... voilà! Todos os pacotes serão baixados, sem precisar armazená-los no Git.

Então, sempre que pensar no node_modules, lembre-se: não é só sobre economizar espaço. É sobre manter nosso repositório limpo, organizado e focado apenas no código que realmente importa para a nossa aplicação.

Além disso, a versão do Node e o próprio sistema operacional podem requerer instalações customizadas. Então, fique sempre de olho!

### Aula 2 - Usando TypeScript para manipular o DOM - Exercício

Durante seu treinamento como um(a) desenvolvedor(a) Jedi, você está aprendendo TypeScript - um poderoso aliado no universo do front-end. Seu mestre, Yoda, deu-lhe a tarefa de refatorar uma função JavaScript que manipula o DOM para TypeScript. A função original está especificada abaixo:

```JavaScript
function ativarSabreDeLuz(cor) {
    document.getElementById('sabreDeLuz').style.backgroundColor = cor;
}
```

Sua missão é assegurar que a função ativarSabreDeLuz receba apenas strings como argumentos, de modo a manter a integridade e confiabilidade do sabre de luz.

Pergunta: Como você refatoraria a função ativarSabreDeLuz para TypeScript?

Selecione uma alternativa

Resposta:  

```JavaScript
function ativarSabreDeLuz(cor: string) {
    document.querySelector('#sabreDeLuz').style.backgroundColor = cor;
}
```

> Este código é um TypeScript válido e garante que cor seja sempre uma string.

### Aula 2 - O que aprendemos?

Nessa aula, você aprendeu como:

- Manipulação de elementos com o DOM: Como selecionar, criar e interagir com elementos HTML através de métodos como querySelector, createElement e appendChild.
- Utilização de templates literais para estruturação de SVG: Construção e injeção de SVG diretamente no JavaScript.
- Dinamicamente atualizar a interface baseado no estado: Iterar sobre o array estadoInicial.tarefas e criar elementos HTML correspondentes.
- Trabalhar com classes e atributos em elementos HTML: Adicionando, verificando e definindo classes e atributos usando métodos como classList.add, setAttribute e appendChild.

## Aula 3 - Gerenciando suas tarefas

### Aula 3 - Projeto da aula anterior

Caso queira começar daqui, você pode acessar o projeto da [aula anterior neste link](https://github.com/alura-cursos/fokus-ts/tree/aula-2). Se preferir baixar diretamente, acesse este [link para o download do arquivo zip](https://github.com/alura-cursos/fokus-ts/archive/refs/heads/aula-2.zip).

### Aula 3 -  - Vídeo 1
### Aula 3 -  - Vídeo 2
### Aula 3 -  - Vídeo 3
### Aula 3 -  - Vídeo 4
### Aula 3 -  - Vídeo 5
### Aula 3 -  - Vídeo 6
### Aula 3 -  - Vídeo 7
