# Curso Alura - TypeScript na prática implemente um projeto completo com TypeScript e módulos

## Aula 1 - JavaScript vs TypeScript

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá, pessoa! Boas-vindas a esse curso de TypeScript, em que você será introduzido aos fundamentos da linguagem criando uma aplicação para nosso cliente Bytebank. Meu nome é Jhonatan Jacinto, mas pode me chamar de Jhota, e serei seu instrutor ao longo dessa jornada!

Audiodescrição: Jhonatan é um homem negro, de cabelo curto cacheado, com tatuagens no pescoço e um piercing na sobrancelha direita. Ele veste uma camisa cinza-escura e uma jaqueta de couro preta, e está sentado em uma cadeira preta, em frente a uma parede preta com uma estante preta repleta de livros. À direita do instrutor, há um piano digital.

O que iremos aprender?  
A aplicação que será desenvolvida faz registro de transações em uma conta do Bytebank. Utilizando o formulário de novas transações, a pessoa usuária pode registrar transferências, fazer depósitos, fazer pagamentos de boleto, ou qualquer outra ação que determinarmos na aplicação.

Cada operação irá resultar em uma influência no saldo da aplicação e também no registro de transferências do extrato, no menu lateral à direita.

Na aplicação, veremos:

- Como os recursos do TypeScript podem ser utilizados na construção da solução;
- Quais recursos estão disponíveis;
- Qual é a vantagem de utilizar o TypeScript em vez do JavaScript convencional;
- E como organizar a arquitetura da aplicação de forma mais profissional, separando em pastas condizentes com cada tipo de recurso e utilizando módulos, recurso recente adicionado pela linguagem JavaScript.
- Vamos explorar os tipos existentes, isto é, os type alias, e aprenderemos a configurar uma enum, entendendo para que ela serve.

Fica o nosso convite para que você mergulhe nessa jornada e explore o fantástico mundo do TypeScript comigo! Vamos lá?

### Aula 1 - Preparando o ambiente

Olá, estudante! Desejamos boas-vindas ao curso TypeScript na prática: implemente um projeto completo com TypeScript e módulos.

Neste curso, utilizaremos as seguintes ferramentas para preparar o ambiente de desenvolvimento:

1. Editor de código: Recomendamos o uso do Visual Studio Code (VSCode). Se você ainda não o possui instalado, pode baixá-lo gratuitamente em https://code.visualstudio.com/.

2. Live Server: Utilizaremos a extensão Live Server no VSCode para facilitar o desenvolvimento. Essa extensão permite que o navegador seja atualizado automaticamente sempre que você salvar o arquivo. Para habilitar o Live Server, siga as etapas abaixo:

- No VSCode, vá para a opção "File" (Arquivo) no menu superior.
- Selecione "Auto Save" (Salvar automaticamente) para habilitar o salvamento automático das alterações.
- Certifique-se de que a extensão "Live Server" esteja instalada. Caso contrário, você pode instalá-la diretamente na guia de extensões do VSCode.
- Com essas configurações, sempre que você fizer alterações no código e salvar o arquivo, as atualizações serão exibidas automaticamente no navegador sem a necessidade de atualizar manualmente a página.

3. Projeto base: O foco do curso é evoluir as suas habilidades com TypeScript e JavaScript. Por isso, [baixe aqui o projeto base](https://github.com/alura-cursos/formacao-typescript-projeto-curso01/tree/projeto-base) já estilizado. Fique a vontade para explorar as classes e os estilos se tiver curiosidade.

Agora que o ambiente está configurado, vamos começar a explorar os requisitos e colocar em prática nossos conhecimentos de JavaScript para usarmos o TypeScript.

Se surgirem dúvidas durante o curso ou no decorrer das atividades, lembre-se de utilizar o fórum de discussão ou o servidor do Discord para interagir com outros estudantes e instrutores. Estamos aqui para ajudar!

### Aula 1 - Solução com JavaScript - Vídeo 2

Transcrição  
Uma vez configurado o ambiente e feitos os ajustes necessários do VS Code, visualizando a aparência da nossa aplicação, podemos focar nos requisitos dela e entender como implementar primeiramente em JavaScript. Mas por quê?

Precisamos justificar o uso do TypeScript. Podemos desenvolver uma aplicação com JavaScript, mas veremos que, ao longo do processo de desenvolvimento, é possível encontrar alguns problemas que o TypeScript irá resolver.

Então, primeiro iremos desenvolver nossa solução com o JavaScript e observar o funcionamento da aplicação, e depois entenderemos nos detalhes os pontos onde ela falha e podemos resolver com o TypeScript.

Solução com JavaScript
Configurando a interface
Primeiramente, vamos alterar o título "Olá, Fabiana! :)" para "Olá, Joana! :)", seguindo o padrão do nosso projeto.

```HTML
<h2>Olá, Joana! :)</h2>
```

Em seguida, na pasta do projeto, criaremos uma pasta chamada "js", onde vamos colocar toda a lógica do JavaScript necessária para fazer a aplicação funcionar.

Para começar nosso código, vamos conhecer os requisitos. Na pasta do projeto, temos um arquivo chamado Requisitos.txt, que lista algumas características que nossa aplicação precisa ter.

* Cada transação realizada no sistema deve possuir SOMENTE as seguintes informações:
  1) Data da Transação (Date)
  2) Tipo de Transação (Depósito, Transferência, Pagamento de Boleto)
  3) Valor da Transação (valor maior que zero)

* Sempre que a transação for do tipo DEPÓSITO, o valor da transação deve ser adicionado ao saldo da conta.
* Sempre que a transação for do tipo TRANSFERÊNCIA ou PAGAMENTO DE BOLETO, o valor da transação deve ser subtraído do saldo da conta.
* O saldo deve sempre ser atualizado na tela da aplicação a cada transação realizada.

Sabendo disso, vamos criar na pasta "js" um arquivo que inicialmente chamaremos de bytebank.js, que irá conter a lógica inicial gerenciando todos os elementos da tela.

No arquivo index.html, antes do fechamento da tag `<body>`, vamos importar o `<script>`, cujo src será o arquivo bytebank.js da pasta "js".

```JavaScript
<script src="js/bytebank.js"></script>
```

Coletando e exibindo o saldo  
Nós precisamos coletar sempre as informações do formulário de nova transação, e ao coletá-las, precisamos registrar os dados na tela. Além disso, precisamos exibir o saldo da conta.

Vamos encontrar essas informações no código HTML. A partir da linha 46, temos o formulário de transação (`<form>`) na `<section>` de classe block-nova-transacao.

```JavaScript
<form action="" method="post" novalidate>
    <div class="campo">
        <select name="tipoTransacao" id="tipoTransacao" class="campo-input" required>
            <option value="">Selecione o tipo de transação</option>
            <option value="Depósito">Depósito</option>
            <option value="Transferência">Transferência</option>
            <option value="Pagamento de Boleto">Pagamento de Boleto</option>
        </select>
    </div>
    <div class="campo">
        <label for="valor">Valor:</label><br>
        <input type="number" name="valor" id="valor" class="campo-input" placeholder="0,00" step=".01" min="0" required />
    </div>
    <div class="campo">
        <label for="data">Data:</label><br>
        <input type="date" name="data" id="data" class="campo-input" placeholder="dd/mm/aaaa" required />
    </div>
    <div class="campo">
        <button type="submit" class="btn">
            Concluir transação
        </button>
    </div>
</form>
```

A partir da linha 27, temos a `<section>` de classe block-saldo, bloco que contém as informações de saldo. Essas informações específicas ficam no `<span>` de classe valor.

```JavaScript
<span class="valor">R$ 2.500,00</span>
```

Sabendo disso, temos os locais onde vamos colocar cada informação.

Nosso primeiro passo será criar uma variável chamada saldo no arquivo bytebank.js, e definir um saldo qualquer inicialmente para trabalharmos, por exemplo, 3000.

```JavaScript
let saldo = 3000;
```

Em seguida, precisamos exibir esse saldo na interface, conforme indicado como requisito no arquivo Requisitos.txt ("O saldo deve sempre ser atualizado na tela da aplicação a cada transação realizada."). Se nenhuma transação acontecer, assim que acessarmos a conta, precisaremos visualizar o saldo da mesma forma.

Vamos começar coletando o elemento que representa o saldo na tela.

Criaremos a constante elementoSaldo no arquivo bytebank.js, que será igual a document seguido do método querySelector(). Com isso, selecionaremos um elemento de document.

```JavaScript
const elementoSaldo = document.querySelector();
```

Sabemos que o elemento desejado está dentro da `<section>` de classe block-saldo, e possui uma classe chamada valor. Também temos a opção de pesquisar pela classe saldo-valor, da `<div>` que contém o elemento, junto à classe valor, tag específica do saldo.

Entre os parênteses do método querySelector(), vamos selecionar os elementos .saldo-valor e .valor.

```JavaScript
const elementoSaldo = document.querySelector(".saldo-valor .valor");
```

Logo abaixo, vamos atualizar o elemento adicionado digitando elementoSaldo.textContent, que será igual a saldo.

```JavaScript
elementoSaldo.textContent = saldo;
```

Feito isso, vamos retornar à aplicação no navegador. Ao atualizar, teremos o campo de saldo atualizado, com o valor de 3.000.

Você irá notar que esse valor não é exibido com o cifrão, no formato de moeda correto, mas iremos corrigir isso aos poucos.

O mais importante nessa etapa é o seguinte: se o valor da variável saldo for alterado e pedirmos para a aplicação exibir o novo valor, ele será puxado corretamente.

Coletando os dados da nova transação  
Agora precisamos coletar os dados da nova transação. Conforme os requisitos, sempre que for feita uma transação, é necessário registrá-la e atualizar o saldo. Para isso, precisamos coletar o formulário, que está dentro do bloco block-nova-transacao no código HTML.

Na linha 6 do arquivo bytebank.js, vamos declarar uma constante chamada elementoFormulario, que será igual ao método document.querySelector() utilizando a classe block.nova-transacao form, pois não queremos o bloco inteiro, apenas o formulário.

```JavaScript
const elementoFormulario = document.querySelector(".block-nova-transacao form");
```

Logo abaixo, vamos digitar a constante elementoFormulario seguida de um ouvinte de evento, ou seja, o método addEventListener(). Ele irá conter submit, para que sempre que for submetido o formulário, termos acesso às informações contidas nele.

Entre os parênteses da função, também teremos uma função anônima (function () {}). Entre as chaves dessa função, passaremos um objeto de evento (event) para o método preventDefault().

Nos parênteses da função anônima, vamos receber os dados da variável event.

```JavaScript
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
});
```

Com o método preventDefault(), temos o seguinte: o comportamento padrão de um formulário é que, ao ser submetido, seja recarregada a página; nós queremos que o formulário seja submetido sem esse recarregamento, então o método previne o comportamento padrão do formulário.

Dessa forma, a página não será recarregada, mas ainda assim teremos acesso aos dados do evento, para a coleta das informações postadas pelo formulário.

Feita a postagem dos dados, precisamos saber se o formulário está válido, se todos os campos com o atributo required foram preenchidos. Para isso, vamos adicionar uma condicional if, contendo entre parênteses o elementoFormulario seguido do método checkValidity().

Vamos adicionar uma exclamação antes de elementoFormulario para indicar que se esse trecho for falso, o formulário estará inválido. Caso seja inválido, exibiremos um alerta (alert()) dizendo "Por favor, preencha todos os campos da transação".

Por fim, usaremos a palavra-chave return abaixo, para que o processamento da função ligada ao formulário não continue.

```JavaScript
if (!elementoFormulario.checkValidity()) {
    alert("Por favor, preencha todos os campos da transação!");
    return;
}
```

Resultado do arquivo bytebank.js:

```JavaScript
let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
});
```

Conclusão  
Agora vamos retornar ao navegador para fazer um teste rápido:

- Com os campos não preenchidos, ao clicar no botão "Concluir transação" para enviar o formulário, teremos o alerta exibido na parte superior central da tela;
- Se preenchermos apenas alguns valores, será exibido o mesmo alerta;
- Por fim, se preenchermos todos os valores, não teremos mais o alerta e a página da aplicação não será recarregada, conforme indicado no código. Isso significa que o formulário está válido.

### Aula 1 - Objeto nova transação - Vídeo 3

Transcrição  
Vamos retornar ao código e dar continuidade ao processo. Nesse momento, precisamos coletar os dados de cada elemento (tipo de transação, valor, e data) para registrar a transação.

Objeto nova transação

Coletando os dados da transação  
No arquivo bytebank.js, ainda entre as chaves da função anônima, vamos adicionar uma constante chamada inputTipoTransacao, que será igual ao elementoFormulario seguido do método querySelector(), que terá o ID #tipoTransacao.

```JavaScript
const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
```

Coletado esse elemento, vamos fazer o mesmo processo para o valor, agora declarando a constante inputValor e o ID #valor para o método querySelector(). Em seguida, faremos o mesmo para a data, então teremos a constante inputData e o ID #data.

```JavaScript
const inputValor = elementoFormulario.querySelector("#valor");
const inputData = elementoFormulario.querySelector("#data");
```

Agora vamos coletar os valores de cada um dos elementos. Para isso, logo abaixo, vamos declarar com let uma variável chamada tipoTransacao, que irá receber o valor contido no elemento, então a variável será igual a inputTipoTransacao.value.

```JavaScript
let tipoTransacao = inputTipoTransacao.value;
```

O mesmo será feito para o valor e para a data:

```JavaScript
let valor = inputValor.value;
let data = inputData.value;
```

Construindo o objeto de transação
O próximo passo é construir o objeto que irá representar uma nova transação e que deve conter apenas essas informações. Esse objeto será chamado de novaTransacao e irá conter tipoTransacao recebendo a variável tipoTransacao, valor recebendo valor, e data recebendo data.

```JavaScript
const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
}
```

Dessa forma, teremos o objeto representando a nova transação e podemos exibi-lo no console para garantir que esteja tudo correto:

```JavaScript
console.log(novaTransacao);
```

Feito isso, podemos reiniciar o formulário na linha abaixo com o método reset(), para indicar que, uma vez coletadas as informações, queremos limpar o formulário inteiro. Assim, a pessoa usuária poderá inserir os dados de uma nova transação quando quiser.

```JavaScript
elementoFormulario.reset();
```

Vamos fazer um teste na aplicação. Com o navegador aberto, iremos teclar "F12" para abrir as ferramentas de Dev (DevTools). Em seguida, vamos preencher o formulário com os seguintes valores, por exemplo:

```JavaScript
Tipo de transação: "Depósito";
Valor: 500;
Data: 12/04/2023.
```

Após clicar no botão "Concluir transação", será gerada a transação no DevTools:

```JavaScript
{tipoTransacao: 'Depósito', valor: '500', data: '2023-04-12'}
```

Além de ter objeto representando a transação, o formulário estará limpo.

Atualizando o saldo  
Agora precisamos atualizar o saldo conforme o tipo de transação realizada. Para isso, antes do registro da transação (bloco da constante novaTransacao), vamos usar a condicional if para validar o tipo de transação e saber o tipo de operação que será feita no saldo.

Entre os parênteses do bloco if, vamos adicionar tipoTransacao sendo igual (==) a "Depósito". Se for esse o caso, precisamos somar o valor, então teremos saldo += valor.

```JavaScript
if (tipoTransacao == "Depósito") {
    saldo += valor;
}
```

Caso contrário, ou seja, else, se o tipo de transação for "Transferência" ou (||) "Pagamento de Boleto", faremos uma subtração no saldo com o valor de cada transação.

```JavaScript
else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
    saldo -= valor;
}
```

Se por algum motivo houver outro tipo de transação diferente dos mencionados, teremos um alerta (alert()) indicando que a transação é inválida, pois os requisitos indicam exatamente os tipos de transação que nossa aplicação deve aceitar.

Nesse caso, adicionaremos a palavra-chave return para parar a execução da função.

```JavaScript
else {
    alert("Tipo de Transação é inválido!");
    return;
}
```

Se o saldo for atualizado, pegaremos o elemento que representa o saldo, ou seja, elementoSaldo, seguido de textContent, e atualizaremos com o novo saldo (saldo):

```JavaScript
elementoSaldo.textContent = saldo;
```

Resultado do trecho adicionado ao arquivo bytebank.js:

```JavaScript
const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
const inputValor = elementoFormulario.querySelector("#valor");
const inputData = elementoFormulario.querySelector("#data");

let tipoTransacao = inputTipoTransacao.value;
let valor = inputValor.value;
let data = inputData.value;

if (tipoTransacao == "Depósito") {
    saldo += valor;
} else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
    saldo -= valor;
} else {
    alert("Tipo de Transação é inválido!");
    return;
}

elementoSaldo.textContent = saldo;

const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
}

console.log(novaTransacao);
elementoFormulario.reset();
```

Vamos fazer um teste rápido no navegador para conferir se nossa aplicação funciona corretamente. Preencheremos o formulário com os seguintes dados, por exemplo:

```JavaScript
Tipo de transação: "Transferência";
Valor: 200;
Data: 16/04/2023.
```

Após enviar o formulário, teremos o registro da transação no DevTools e será debitado o valor da transferência no saldo. Agora vamos testar o tipo de transação "Pagamento de Boleto":

```JavaScript
Tipo de transação: "Pagamento de Boleto";
Valor: 600;
Data: 12/05/2023.
```

Também teremos o registro no DevTools e o valor atualizado do saldo da conta.

Conclusão  
De forma geral, nossa aplicação está funcionando. Mas quais são os problemas com os quais ainda podemos nos deparar?

No nosso código, o VS Code não está indicando nenhum erro, e quando testamos no navegador, a aplicação funciona normalmente. Porém, vamos analisar o que acontece ao fazermos uma transação do tipo "Depósito":

```JavaScript
Tipo de transação: "Depósito";
Valor: 300;
Data: 03/05/2023.
```

Com esses valores, em vez de somar o valor ao saldo, o valor é concatenado, ou seja, temos os 2200 que já estavam no saldo da conta, seguido de 300 correspondente ao valor do depósito.

Isso acontece porque todos os dados que vêm de elementos de formulário são do tipo string, ou seja, textos. Assim, sempre que tentamos fazer uma operação de adição com um texto, mesmo que o valor de saldo seja um número, o JavaScript prioriza o texto. Então, ele converte o valor do saldo em texto e une ao valor da transação, em vez de fazer a operação de soma.

### Aula 1 - Concatenação no JavaScript - Vídeo 4

Transcrição  
Conforme visto anteriormente, temos um problema na operação de soma para as transações do tipo "Depósito". Porém, nada no código indica isso.

Nós, como pessoas desenvolvedoras, precisamos saber de antemão que essas coisas podem acontecer. Então, devemos saber que o valor que vem da variável valor (linha 19 do arquivo bytebank.js) é uma string. Consequentemente, em vez de fazer a adição, será feita a concatenação.

Concatenação no JavaScript
É importante lembrar que o código pode sofrer manutenção de uma pessoa desenvolvedora completamente diferente, que pode ou não fazer parte da nossa equipe.

Outra coisa que também pode acontecer e que saberemos somente no momento de execução do código, é que nada nos impede de adicionar um novo dado ao objeto novaTransacao, por exemplo, a propriedade isNova, para indicar se a transação é nova ou não (true ou false).

```JavaScript
const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
    isNova: true
}
```

Nosso arquivo de requisitos (Requisitos.txt) diz que uma transação deve possuir somente os três dados listados: data, tipo e valor. Nesse caso, estamos adicionando um dado novo sem que o código avise que há um problema nisso.

O JavaScript, por ser uma linguagem extremamente flexível em relação aos tipos e estruturas de dados com que ela trabalha, ela aceita que um objeto tenha flexibilidade para aceitar qualquer outro dado. Nada no código indica que essa nova informação não pode ser adicionada, pois não há um tipo de restrição na linguagem.

Com a operação para gerar uma nova transação contendo um dado completamente novo, ou mesmo uma informação que indique a data, mas com um nome diferente (por exemplo, dataTransacao), se padronizamos nossa transação para conter tipoTransacao, valor e data, não podemos gerar um novo objeto de transação com uma propriedade de nome diferente.

Porém, novamente, nada nos indica que há um problema com essa estrutura. É nesse tipo de situação que entre o TypeScript!

Uma vez que introduzimos o uso do TypeScript, ele nos avisa dos problemas que o código pode ter antes de o executarmos em ambiente final, ou seja, antes do código ir para produção e execução no navegador.

Dessa forma, o TypeScript nos permite falhar rápido. Essa é uma ideia muito presente em programação: encontre problemas rapidamente, ou seja, encontre problemas na estrutura de código antes da execução propriamente dita.

Com essas indicações de erros, conseguimos corrigir nosso código e aumentar as chances dele ir para o ambiente final de execução melhor estruturado e da maneira esperada.

Conclusão  
Através do uso do TypeScript, conseguimos prevenir o tipo de cenário mencionado. É exatamente isso que abordaremos na sequência, refatorando nosso código por meio do TypeScript. Vamos lá?

### Aula 1 - Refatoração com TypeScript - Vídeo 5

Transcrição  
Vimos que nossa aplicação funciona com o JavaScript, porém, existem alguns problemas, os quais descobrimos apenas no momento em que executamos nossa aplicação, principalmente com o saldo.

Problemas com o JavaScript  
Identificamos que, no caso de transações de depósito, o JavaScript concatenou o valor em vez de somar. Como corrigir isso? Vamos entender de que forma o TypeScript resolveria esse problema para nós, além de outras questões, como a dos inputs inputTipoTransacao, inputValor e inputData.

Quando digitamos . após um input para visualizar as propriedades e métodos que esse elemento possui, ao digitar value, não são exibidas as opções.

Precisamos escrever de forma forçada o comando, ou seja, ele não vem com a funcionalidade de autocomplete, justamente porque o JavaScript e o próprio VS Code não sabem de que tipo é o elemento. Eles não sabem, por exemplo, que tipoTransacao é um elemento input que possui a propriedade value; saberão disso apenas em tempo de execução.

O TypeScript irá resolver isso para nós!

Refatoração com TypeScript  
Com o projeto aberto no VS Code, vamos acessar a aba "EXPLORER" na lateral esquerda e renomear o arquivo bytebank.js para bytebank.ts. Ao fazer isso, teremos várias marcações vermelhas ao longo do código. Essas marcações são o TypeScript avisando que há problemas a serem considerados.

O primeiro erro identificado é a tentativa de colocar um valor numérico (saldo, declarado na primeira linha de código) com uma propriedade do tipo string chamada textContent.

```JavaScript
elementoSaldo.textContent = saldo;
```

Posicionando o cursor sobre esse trecho, teremos o aviso "Type 'number' is not assignable to type 'string'", ou seja, o tipo numérico não é atribuível ao tipo string, pois o tipo do atributo textContent deve ser uma string.

A partir do momento que convertemos o valor em uma string, chamando, por exemplo, o método saldo.toString(), o problema de atribuição deixa de ser reclamado. Isso acontece pois agora seguimos as regras de tipagem de cada parte do código impostas pelo TypeScript.

```JavaScript
elementoSaldo.textContent = saldo.toString();
```

Outro erro apontado é que o elemento elementoSaldo, nesse mesmo trecho, pode ser nulo ("'elementoSaldo' is possibly 'null'"). Se ele for nulo em algum momento, a chamada à propriedade textContent terá um problema, pois essa não é uma propriedade disponível no tipo nulo.

Para resolver nosso código, precisamos assegurar que o que será atribuído à constante elementoSaldo é de fato um elemento do HTML, e não null.

Nesse caso, podemos fazer uma checagem adicionando um bloco if: se elementoSaldo for um valor diferente de nulo, teremos a atribuição. Podemos colocar essa informação de forma explícita utilizando o sinal de ≠.

```JavaScript
if (elementoSaldo ≠ null) {
    elementoSaldo.textContent = saldo.toString();
}
```

Se tivermos certeza de que o elemento está presente, podemos adicionar as HTMLElement ao final da terceira linha de código, após o método querySelector(), para indicar que queremos a conversão do valor obtido em HTMLElement.

```JavaScript
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
```

Dessa forma, asseguramos que o valor atribuído a elementoSaldo será convertido.

Isso acontecerá em tempo de compilação do TypeScript, pois quando o código for executado, isso será feito como JavaScript.

O TypeScript exige que o código seja melhor estruturado e siga determinadas regras para que, ao executar a estrutura, a possibilidade de erros seja menor.

Isso não significa que não haverá nenhum erro no momento de execução do código, pois existem erros de tempo de execução de fato. Porém, através do TypeScript, reduzimos muito essa margem, afinal, ele checa todo tipo de problema que pode acontecer.

Dessa forma, teremos somente os problemas cuja natureza é acontecer em tempo de execução, como a pessoa usuária preencher o formulário com um valor aleatório não esperado, ou recebermos um dado de API ou banco de dados não esperado na estrutura do código, por exemplo.

Esses problemas não são possíveis de controlar via TypeScript de forma geral, mas os demais erros apontados a partir do momento que convertemos o código podem ser corrigidos.

Ajustes de tipagem com TypeScript  
A partir disso, faremos os ajustes necessários. Por exemplo: na linha de código 8, correspondente ao bloco de elementoFormulario, podemos adicionar as HTMLFormElement após o método querySelector(). Com isso, o TypeScript sabe que esse bloco se trata efetivamente de um formulário e corrige os demais problemas abaixo.

```JavaScript
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
```

Da linha 20 à 22, temos o problema mencionado anteriormente: ao digitar .value após os inputs, o IntelliSense não consegue nos ajudar, pois não sabe que tipo de elemento é inputTipoTransacao. Nesse caso, é atribuído aos inputs o type mais geral Element.

Então, após o método querySelector() da linha 16, na declaração do inputTipoTransacao, podemos indicar que o tipo é HTMLSelectElement, ou seja, um elemento HTML do tipo Select.

Da mesma forma, vamos indicar que as outras constantes são inputs, adicionando as HTMLInputElement ao final das linhas de código 17 e 18.

```JavaScript
const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;
```

Uma vez indicado que os elementos se tratam de HTMLSelectElement e HTMLInputElement, ao digitar .value na declaração das variáveis, é exibida essa opção de fato como uma propriedade disponível para esses elementos, pois agora o TypeScript sabe que tipo eles são.

Mais adiante no código, temos outro problema no bloco if da linha 24, sinalizando que haverá um problema na operação de soma, pois saldo é um número, e estamos tentando somá-lo a valor, que é uma string, pois o valor retornado de value é uma string.

Nesse caso, podemos indicar de forma direta o tipo dos valores das variáveis. A variável tipoTransacao, por exemplo, deve ser uma string; a variável valor precisa ser um número, ou seja, number; e a variável data precisa ser um objeto Date.

```JavaScript
let tipoTransacao: string = inputTipoTransacao.value;
let valor: number = inputValor.value;
let data: Date = inputData.value;
```

Feito isso, o TypeScript passa a reclamar outros problemas. Não podemos atribuir um valor do tipo string (value) a uma variável valor com o tipo indicado como number. Precisamos converter o value de alguma forma. Para isso, podemos digitar valueAsNumber, propriedade existente nos inputs do tipo number.

```JavaScript
let valor: number = inputValor.valueAsNumber;
```

No caso de data, onde também é retornada uma string, podemos satisfazer a exigência do TypeScript adicionando new Date(inputData.value). Com isso, indicamos que o valor inserido será de fato um Date.

```JavaScript
let data: Date = new Date(inputData.value);
```

Perceba que, nesse momento, temos um controle de qualidade muito maior no nosso código, devido ao uso do TypeScript.

A última verificação que precisamos fazer é de que, ao atribuir o saldo ao textContent do elemento na interface, conforme indicado na linha 33 do código, ele seja uma string. Para isso, basta adicionar .toString() após saldo para fazer a conversão de forma explícita.

```JavaScript
elementoSaldo.textContent = saldo.toString();
```

Compilação e teste  
Agora, ao retornar à aplicação no navegador, ela não estará mais funcionando, pois ela depende de um arquivo .js que foi transformado em .ts. Nesse caso, a aplicação importa um arquivo inexistente.

```JavaScript
<script src="js/bytebank.js"></script>
```

Dito isso, precisamos pedir para o TypeScript fazer a conversão do arquivo, interpretando o código e transformando-o em JavaScript.

Vamos até "Terminal > New Terminal" para abrir o novo terminal. Primeiramente, entraremos na pasta "js" usando o seguinte comando:

```JavaScript
cd js
```

Em seguida, vamos executar o comando abaixo para fazer a compilação do arquivo e gerar na pasta "js" um novo arquivo chamado bytebank.js.

```JavaScript
tsc bytebank.ts
```

Feito isso, ao retornar para a página no navegador, o código voltará a funcionar normalmente.

Precisamos lembrar de ajustar o bloco de novaTransacao, removendo as alterações feitas no vídeo anterior. O resultado obtido deve ser o seguinte:

```JavaScript
const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
}
```

Antes de iniciar o teste, vamos compilar mais uma vez o código, com os mesmos comandos utilizados anteriormente. Sempre que fizermos alterações no código em TypeScript, é importante lembrar que estamos alterando o arquivo .ts, então precisamos recompilar o arquivo para ser gerado o arquivo .js atualizado.

De volta à aplicação, preencheremos o formulário com os seguintes dados:

```JavaScript
Tipo de transação: "Depósito";
Valor: 200;
Data: 05/05/2023.
Concluída a transação, teremos o objeto na ferramenta DevTools:

data: Thu May 04 2023 21:00:00 GMT-0300 (Horário Padrão de Brasília) {}
tipoTransacao: "Depósito"
valor: 200
```

Note que a data é um objeto Date de fato e o valor é numérico, conforme indicado no código. Além disso, foi incluído o valor corretamente no campo de saldo, ou seja, não houve a concatenação como acontecia antes.

Vamos testar uma nova transação com os valores abaixo:

Tipo de transação: "Transferência";
Valor: 500;
Data: 12/04/2023.
Dessa forma, é subtraído normalmente o valor do saldo disponível na conta.

Conclusão  
Nossa aplicação está funcionando conforme esperado, com base na ajuda que o TypeScript nos deu, fornecendo os problemas antes do tempo de execução e garantindo a possibilidade de um código mais seguro para ser executado no ambiente final.

Porém, existem muito mais recursos do TypeScript disponíveis para termos uma estrutura de código mais segura para trabalhar. É isso que iremos explorar na próxima aula. Vem comigo!

## Aula 2 - Definindo Tipos

### Aula 2 -  - Vídeo 1
### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
