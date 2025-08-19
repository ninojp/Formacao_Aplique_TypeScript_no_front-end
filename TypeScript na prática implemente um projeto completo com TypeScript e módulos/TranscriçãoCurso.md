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

### Aula 2 - Reorganização dos arquivos - Vídeo 1

Transcrição  
Antes de nos aprofundarmos no TypeScript, vamos reorganizar a estrutura de pastas e arquivos do nosso projeto, assim, obteremos uma organização mais próxima da realidade, isto é, do que encontraremos no cotidiano de trabalho com projetos envolvendo TypeScript.

Temos uma pasta de projeto única, o byteban.ts com as pastas de CSS, imagens e scripts, onde está tanto o JavaScript compilado, quanto o arquivo de TypeScript, o indexHTML e os itens de requisito.

Porém, quando vamos trabalhar em um projeto real, a nossa organização é feita da seguinte maneira:

Uma pasta destinada à produção, ou seja, ao ambiente de produção, onde a aplicação será realmente rodada, o que vai realmente para o servidor para ser hospedado — no caso de projetos web;

Uma pasta de desenvolvimento, com arquivos que só interessam no momento de desenvolvimento do código, isto é, da escrita do código.

Por exemplo, o TypeScript não usa diretamente o browser. Quando criamos o nosso projeto, tivemos que compilar o código do TypeScript em JavaScript para, então, ele ser executado no navegador. O motivo é que o navegador não entende o TypeScript.

Esse arquivo só interessa a nós, pessoas desenvolvedoras, no momento de codificação. Ele é um arquivo que pertence ao ambiente de desenvolvimento apenas. No ambiente de produção, o que importa é o JavaScript gerado.

Então, vamos reorganizar a nossa estrutura de parsers e arquivos para que ela remeta à estrutura comumente utilizada no âmbito profissional.

No bytebank.ts, vamos criar uma pasta chamada dist e outra pasta chamada src, sendo que "dist" vem do inglês "distribution" (distribuição). É um nome comum em projetos web, bastante utilizado para nomear a pasta que representa o conjunto de arquivos que vai para o ambiente final.

Mas, o que vai para o ambiente final? O css, que já está pronto. Portanto, podemos movê-lo para a pasta dist. A pasta de images também vai para a pasta dist. Por fim, também moveremos o index.html. Essa estrutura de arquivos é o que de fato vai para o ambiente final.

Na pasta js, que ainda está fora da dist, temos somente o JavaScript que foi gerado pela nossa aplicação. É ele quem vai para o ambiente final, então, vamos mover a pasta js para dist.

Mas, o que nos interessa é que a pasta JavaScript, isto é, a pasta js, tenha apenas arquivos JavaScript. No momento, ela também contém o arquivo de TypeScript, typescript.ts, o que não é necessário. Reiterando, o ts só interessa ao ambiente de desenvolvimento, quando a aplicação é codificada.

O arquivo typescript.ts será movido para a pasta src, sendo que "src" vem do inglês "source" (fonte ou código fonte). O nome "src" é bastante comum para pastas de desenvolvimento de projetos.

Em vários frameworks como o React, existe uma pasta "src", onde ficam os códigos que realmente serão codificados. Essa pasta é de distribuição, onde estão os arquivos que são encaminhados para o ambiente final.

Então, fizemos a reorganização:

Na pasta src, ficará tudo que precisamos para realizar o desenvolvimento da nossa aplicação. Como trabalharemos apenas com TypeScript, precisamos só do código TypeScript.

Na pasta js, que está dentro da pasta dist, ficará todo o script gerado pelo TypeScript que criamos, além dos estilos, imagens e o index.html que é a nossa página.

A partir de agora, vamos começar a trabalhar apenas na pasta src, que é onde estará nossa lógica com TypeScript. Também pediremos ao nosso ambiente, o VSCode, que gere todo o código necessário e transporte para a pasta dist que, no caso, é todo o TypeScript compilado em JavaScript.

Para isso, temos que escrever o comando tsc e o nome do arquivo que desejamos compilar. Por exemplo, quando escrevemos tscbytebank.ts, o arquivo é compilado e o arquivo js correspondente é gerado.

Não é muito produtivo fazer isso o tempo inteiro, isto é, escrever o comando a toda hora para realizar a compilação. Além disso, quando ele compila, gera o arquivo no mesmo local em que o arquivo compilado está. Significa que se rodarmos o comando tscsrcbytebank.ts, um bytebank.js será gerado dentro da pasta ts. Nós não queremos isso.

Precisamos dar um passo a mais: temos toda a estrutura organizada e vamos configurar o TypeScript para o nosso projeto de modo que ele não só faça a compilação automática, como também coloque os arquivos compilados no local certo.

Esse é o próximo passo. Vamos lá!!

### Aula 2 - Configuração do tsconfig.json - Vídeo 2

Transcrição  
Terminamos o vídeo anterior com a seguinte tarefa:

Precisamos dar um passo a mais! Temos toda a estrutura organizada e vamos configurar o TypeScript para o nosso projeto de modo que ele não só faça a compilação automática, como também coloque os arquivos compilados no local certo.

Para realizarmos essa configuração, precisamos criar, na nossa pasta de projetos, um arquivo chamado "tsconfig". Ele fica no root do nosso projeto, isto é, na pasta principal e diz como o controlador do TypeScript deve se comportar na aplicação.

Estamos com o VSCode aberto no Terminal. Na lateral esquerda, fora das pastas dist e src, vamos criar um novo arquivo chamado tsconfig.json. Ele é um arquivo de configuração do TypeScript.

Passaremos, portanto, algumas configurações. Começando por compilerOptions (configurações do compilador) e teremos target com o valor ES2022. O target se refere a qual versão do JavaScript deve ser utilizada para compilar o JavaScript.

Podemos fazer um código TypeScript e pedir que ele seja compilado sempre em uma versão mais antiga, por exemplo, assim, asseguramos que nosso código rodará no IE (Internet Explorer), caso nosso projeto tenha esse tipo de requisito.

No nosso caso, pedimos a compilação pela versão mais recente no momento de gravação do curso, que é a "ES2022".

```JavaScript
{
    "compilerOptions": {
        "target": "ES2022",
    }
}
```

Também podemos definir o "ESNext" como valor, mas não é recomendável, pois ele tenta sempre trazer a versão mais recente do JavaScript e a possibilidade de haver recursos que não estão implementados em todos os navegadores, mesmo os mais recentes, é bastante grande.

Então, é sempre bom escolher uma versão mais segura ou a que estiver definida para o projeto!

Após o target, passaremos o outDir, que é o diretório de outputs, onde devemos colocar todos os arquivos que o TypeScript compilar. No caso, queremos que ele verifique a pasta ./dist e coloque tudo na pasta js/.

```JavaScript
{
    "compilerOptions": {
        "target": "ES2022",
        "outDir": "./dist/js/",
      
    }
}
```

Assim, tudo que for compilado no projeto deve ser encaminhado para essa pasta de destino. Após o outDir, passaremos o noEmitOnError: true. Significa que todas as vezes em que um erro for identificado, ele não deve gerar um arquivo .js na pasta de destino.

O arquivo .js correspondente só deve ser gerado uma vez que todos os erros encontrados tenham sido resolvidos. Por padrão, mesmo com erro, um arquivo é criado na pasta de destino.

No nosso caso, queremos garantir que o arquivo só seja gerado na pasta final se não existir erro algum sendo apontado pelo TypeScript. Por isso, usamos o noEmitOnError, ou seja, "não emita a geração do arquivo caso exista algum erro".

```JavaScript
{
    "compilerOptions": {
        "target": "ES2022",
        "outDir": "./dist/js/",
        "noEmitOnError": true
    }
}
```

Fora do compilerOptions, adicionaremos uma opção chamada include, que é um array, e passaremos as pastas onde ele deve procurar os arquivos TypeScript. No nosso caso, ele deve procurar todos os arquivos TypeScript para que eles sejam compilados dentro da pasta src, que é nossa pasta de desenvolvimento.

Então, colocaremos todos os arquivos TypeScript na pasta src, obedecendo uma estrutura correta que aprenderemos ao longo do curso, e o include vai sempre olhar todos os arquivos da pasta src, compilá-los e enviá-los para a pasta de destino, dist.js.

```JavaScript
{
    "compilerOptions": {
        "target": "ES2022",
        "outDir": "./dist/js/",
        "noEmitOnError": true
    },
    "include": [
        "./src/**/*"
    ]
}
```

Configuramos o tsconfig.json, ou seja, demos as diretrizes de como o TypeScript Compiler deve se comportar no projeto e, agora, faremos um teste! No bytebank.ts, vamos adicionar um código qualquer, por exemplo, um alert("Testando compilação do TS");.

```JavaScript
let saldo 3000;

alert("Testando compalação do TS-);
const elementosaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo ≠ null) {
    elementoSaldo.textContent saldo.toString();
}

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTML FormElement;
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!elementoFormulario.checkvalidity()) {
         alert("Por favor, preencha todos os campos da transação!");
return;
```

Vamos abrir o Terminal. Basta acessar "View > Terminal" ou usar a tecla de atalho correspondente ao seu sistema operacional. Estamos na pasta bytebank.ts. Antes, sempre passávamos tsc seguido do nome do arquivo. Mas, isso dá muito trabalho. Vamos ter que ficar criando vários arquivos ts ao longo do curso. Não dá para ficar compilando um por um.

O TypeScript Compiler tem um recurso chamado watch, um "ouvidor", "acompanhador" ou algo do tipo, que fica monitorando os arquivos .ts e todas as vezes em que eles tiverem alguma alteração, compila automaticamente. Então, escreveremos:

```JavaScript
tsc -w
```

Found 0 errors. Watching for file changes.

Com isso, o watch fica monitorando a pasta src, porque verificou o tsconfig.json e encontrou as configurações. Todas as vezes em que algum arquivo .ts for modificado, ele gera um arquivo correspondente .js na pasta de destino.

Vamos abrir o index.html no "Live Server" (Botão direito do mouse e "Open with Live Server"). Aparecerá uma mensagem de aviso "Testando compilação do TS" e podemos apertar "Ok". Ele já identificou a primeira modificação.

Se trocarmos a frase do alert() para Outra frase aqui e retornarmos à página e dermos um refresh (atualizar) aparecerá o mesmo alerta indicando a mudança de frase para "Outra frase aqui".

Então, sempre que há uma alteração nos arquivos .ts, automaticamente o arquivo JavaScript correspondente é gerado, assim, não precisamos ficar escrevendo comandos de compilação o tempo inteiro. Feito o teste, podemos remover o alert().

Agora nosso ambiente está bem mais profissional e podemos começar a focar em escrever a lógica necessária para a aplicação rodar, além de explorar um pouco mais os recursos do TypeScript. Vamos lá?!

### Aula 2 - Tipos primitivos - Vídeo 3

Transcrição  
Para aproveitarmos o TypeScript ao máximo, vamos conhecer um pouco da estrutura de tipos, como elas trabalham e qual a vantagem em utilizarmos essa estrutura de tipos estáticos que a linguagem nos proporciona.

Na pasta src, que é a nossa pasta de desenvolvimento, vamos criar um segundo arquivo para explorarmos esses recursos do TypeScript. O nosso arquivo vai se chamar typescript.ts.

No index.html da nossa pasta dist, nós importaremos esse arquivo typescript.ts. Teremos uma exploração conceitual do TypeScript.

```JavaScript
// Código omitido. 
                       </div>
                        <time class="data">27/08</time>
                    </div>
                </div>
            </div>
        </aside>
    </main>
        <script src="js/bytebank.js"></script>
        <script src="js/typescript.js"></script>
</body>
</html>
```

Em seguida, abrindo o Terminal, perceberemos o watcher está em ação:

[16:02:23] File change detected. Startimg incremental compilation...

[16:02:23] Found 0 errors. Watching for file changes.

Então, todas as vezes em que criamos e modificamos um arquivo, o arquivo correspondente é gerado na pasta final. Importado o TypeScript, podemos explorar alguns recursos básicos dele.

Na pasta typescript.ts, vamos criar uma variável chamada saldo e atribuir a ela o valor 3000.

```JavaScript
let saldo = 3000; 
```

Quando escrevemos isso, o TypeScript nos avisa que há um problema.

Aparentemente, não há nada de errado em atribuir o valor 3000 a uma variável chamada saldo no arquivo novo, mas, o TypeScript já percebeu que há dois arquivos .ts no projeto e o index.html importa os dois: `<script src="js/bytebank.js"></script> e <script src="js/typescript.js"></script>`.

Além disso, o TypeScript percebeu que no bytebank.ts, existe uma variável chamada saldo e que uma variável com let não pode ser declarada:

Cannot redeclare block-scoped variable 'saldo'. (Não é possível declarar uma variável de bloco chamada 'saldo')

Então, precisamos declarar com nome diferente, por exemplo, "saldo2". Do contrário, teremos conflito entre as duas variáveis. Se tivéssemos utilizando JavaScript, esse tipo de erro seria identificado apenas no momento em que executássemos o código no navegador.

Trocando saldo por valor, já resolvemos o conflito.

```JavaScript
let valor = 3000; 
```

Agora, quando colocamos o mouse em cima da variável valor, notamos que o TypeScript atribui a ela o tipo number, que é um dos tipos básicos da linguagem. Mas, por que ele inferou que esse é o tipo dela? Por causa do valor. Atribuímos o número 3000 à variável valor, logo, se passamos um número, o tipo é numérico.

Se passarmos valor e adicionarmos uma string chamada "Cachorro", o TypeScript apontará um problema no código.

```JavaScript
let valor = 3000;
valor = "Cachorro";
```

Embora no JavaScript seja possível trocar os valores de variáveis de forma livre, porque se trata de uma linguagem de tipagem dinâmica, o TypeScript adiciona na linguagem JavaScript a tipagem estática, ou seja, precisamos declarar e seguir os tipos associados às variáveis, às funções e a tudo que for criado no código.

Como ele assumiu que na declaração da variável, o valor era numérico, vai garantir que o valor da variável sempre seja numérico. Nesse caso, estamos tentando atribuir uma string a uma variável numérica, por isso, aparecerá o alerta:

Type 'string' iso not assignable to type 'number'. (O tipo texto não é atribuível ao tipo número)

Mesmo que não tenhamos declarado de forma explícita que o tipo da variável valor é número, o TypeScript inferiu isso por conta do valor inicial da declaração da variável.

Uma boa prática é definir os tipos das nossas variáveis e funções, isto é, declarar a variável e seu tipo.

```JavaScript
let valor: number = 300; 
```

Essa variável é numérica, portanto, o TypeScript vai garantir que ela sempre receba um valor numérico ao longo de toda a aplicação. O mesmo vale para uma variável de tipo string.

```JavaScript
let nome: string = ""; 
```

Portanto, declaramos o tipo string e garantimos que a variável nome sempre receberá um valor textual. O mesmo vale para outros valores mais básicos, por exemplo, isPago, variável para representar se algo foi pago ou não. Ela será booleana, com valor inicial "falso".

```JavaScript
let isPago: boolean = false; 
```

Esses são os tipos básicos da linguagem:

```JavaScript
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false; 
```

O TypeScript garante que qualquer tentativa de atribuição de valor a essas variáveis será correspondente ao tipo que elas têm. O controle está feito, mas, e se quiseremos criar uma variável que receba qualquer valor?

Existe um tipo no TypeScript chamado any que significa "qualquer coisa". Com ele, é possível recuperar o comportamento padrão do JavaScript que é fazer com que uma variável aceite qualquer coisa.

```JavaScript
let qualquer: any = ""; 
```

Portanto, o tipo any explicita no nosso código que a variável pode receber qualquer valor. Isso significa que variável pode ter desde um objeto até um tipo mais primitivo, como uma string, um numérico ou um booleano. Se precisarmos, de fato, ter uma variável com essa flexibilidade no código, podemos utilizar o tipo any.

Assim, exploramos os valores mais básicos da linguagem com os quais podemos trabalhar:

```JavaScript
let valor: number = 3000; 
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22; 
```

É sempre recomendável explicitar esses valores para obtermos um controle de tipagem, assim ele ficará bem mais evidente para a pessoa desenvolvedora.

Esses são os tipos primitivos, isto é, os tipos mais básicos da linguagem. Vamos entender como criar tipos mais complexos, propiciando ao nosso código uma robustez que não encontramos com tanta facilidade no JavaScript. Até lá!!

### Aula 2 - Arrays e type alias - Vídeo 4

Transcrição  
Anteriormente, falamos dos tipos primitivos, number, string, boolean. Agora, vamos falar sobre o array, que é um tipo mais complexo.

Para criarmos arrays no JavaScript, podemos atribuir uma lista vazia à variável ou constante que determinamos.

```JavaScript
// Arrays
const lista = []; 
```

Ao fazermos isso no TypeScript, ele implicitamente identifica que essa lista é de "qualquer coisa". Passando o mouse em lista, aparecerá uma mensagem indicando "const lista: any[]", portanto, lista é um array de qualquer tipo.

Podemos escrever lista.push() e fazer um push de diversos valores, por exemplo, "Jhonathan", "Cachorro", 22, true e até mesmo outro array, [], e o TypeScript aceitará normalmente, porque entende que essa lista pode conter qualquer tipo de valor.

```JavaScript
// Arrays
const lista = [];
lista.push("Jhonathan", "Cachorro", 22, true, [])
```

Pode acontecer de querermos garantir que a lista seja de números, strings ou booleanos, ou seja, obtermos um controle maior sobre o tipo de dado que pode ser inserido em determinada lista.

É possível acrescentar esse controle maior, deixando nosso código bem mais interessante. Por exemplo, passamos const lista e definimos o tipo number seguido de duplo colchete:

```JavaScript
// Arrays
const lista: number[] = [];
lista.push("Jhonathan", "Cachorro", 22, true, [])
```

Com isso, o nosso código começou a apresentar alguns problemas, já que estamos fazendo o push() de um valor string para uma lista de números. O alerta do TypeScript é:

Argument of type 'string' is not assignable to parameter os type 'number'. (O argumento do tipo string não é atribuível ao parâmetro do tipo numérico)

Com isso, está garantindo que a lista só pode conter valores numéricos. Então, se trocarmos Jhonathan por 13, o TypeScript aceita o parâmetro e passa o alerta para ao próximo: "Cachorro". Vamos trocar para 22.5. Em seguida, aparece um booleano, true, e vamos substituí-lo por 89. Por fim, um array que é um objeto, e vamos substituí-lo por 1.58.

```JavaScript
// Tipos primitivos 

let valor: number = 3000; 
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22; 

// Arrays 

const lista: number[] = [];
lista.push(13, 22.5, 22, 89, 1.58);
```

Está tudo certo! Perceba como o TypeScript aumenta a precisão do nosso código. No JavaScript, só identificaríamos esse tipo de detalhe no momento de execução no navegador, quando os erros aparecem no console.

Nesse caso o erro nem apareceria no console, pois, por natureza, o JavaScript aceita valores de qualquer tipo em listas. Por isso, é bom ter o controle em tempo de compilação antes de colocarmos o nosso código em produção. Nós utilizaremos bastante esse tipo de recurso ao longo do curso, porque teremos que criar listas específicas no nosso código.

Agora, vamos estudar os Tipos Personalizados ou Type Alias que é a possibilidade de criar um tipo nosso. No código anterior, do bytebank.ts, criamos um objeto para gerarmos uma transação.

```JavaScript
const novaTransacao = { 
         tipoTransacao: tipoTransacao,
         valor: valor,
         data: data, 
        }

    console.log(novaTransacao);
        elementoFormulario.reset();
```

Este é o nosso objeto contendo as propriedades necessárias. Porém, nada garante que esse objeto tenha propriedades com outros nomes ou mesmo propriedades a mais, em relação ao que foi documentado. Lembrando que a documentação dos requisitos diz que uma nova transação precisa sempre e somente os dados: tipo, valor e data da transação.

O objeto, por ser um valor maleável no JavaScript permite criar valores livremente. Então, se criamos um tipo personalizado, conseguimos ter um controle maior do código. Vamos criar uma transação de exemplo.

```JavaScript
// Tipos Personalizados (Type Alias) 

const novaTransacao = {
    tipoTransacao: "", 
        data: new Date(),
        valor: 0
}
```

Criamos uma transação que é um objeto com: tipoTransacao como string;data, que será um new Date(); e valor, que será um valor numérico, por exemplo, 0 (zero).

Nada garante que essa estrutura será mantida. Não existe nada no nosso código que faça isso. Então, vamos declarar um tipo que define a estrutura que uma transação precisa ter. Vamos criar um type Transacao com: um tipoTransacao, que é uma string; data, que é um tipo Date; e valor, que é um tipo numérico, number.

```JavaScript
// Tipos Personalizados (Type Alias) 
type Transacao = {
   tipoTransacao: string;
     data: Date;
     valor: number;
}

const novaTransacao = {
    tipoTransacao: "", 
        data: new Date(),
        valor: 0
}
```

Assim, estamos explicitando o que uma transação precisa ter. Agora, se dissermos que o objeto novaTransacao é do tipo Transacao - tipo que acabamos de criar - garantiremos que a estrutura do objeto seguirá exatamente o que foi definido.

```JavaScript
// Tipos Personalizados (Type Alias) 
type Transacao = {
   tipoTransacao: string;
     data: Date;
     valor: number;
}

const novaTransacao: Transacao = {
    tipoTransacao: "", 
        data: new Date(),
        valor: 0
}
```

Então, se escrevermos errado o nome de alguma propriedade, por exemplo, valorrs, o TypeScript mostrará um alerta de que a propriedade não existe. Se passarmos uma propriedade para além das especificadas, por exemplo, valorSecundario, o TypeScript gera o mesmo alerta.

Relembrando que está especificado nos requisitos que a nossa transação deve ter somente três dados: tipoTransacao, data e valor. O TypeScript fará com que isso seja respeitado. Todas as vezes em que declararmos a nossa variável com o tipo customizado, o TypeScript fará com que todas as regras declaradas nesse tipo sejam cumpridas.

Por exemplo, o tipoTransacao foi declarado como string, se passarmos um número, o TypeScript também gera um alerta. Isso aumenta a segurança do código e faz com que sua estrutura respeite com muito mais precisão os requisitos do nosso projeto.

Nós utilizaremos esse recurso no nosso projeto para declararmos as transações. Ainda precisamos discutir um item: o controle de valores fixos dentro do nosso código, que realizamos através de enums. Vamos conhecer esse recurso do TypeScript!!

### Aula 2 - Enums - Vídeo 5

Transcrição  
Conhecemos o type alias e a definição de tipos personalizados no TypeScript. Agora, vamos estudar os enums.

As enumerações ou enums são conjuntos de valores fixos que definimos no nosso código, tornando mais fácil identificar valores na escrita desse código. Em um primeiro momento, essa descrição pode parecer meio confusa, mas, com a parte prática, ficará mais fácil compreender como esse recurso pode ser aplicado.

Nos nossos requisitos, Requisitos.txt, está especificado que cada transação deve conter três valores fixos muito bem definidos: Depósito; Transferência; e Pagamento de Boleto.

```Markdown
* Cada transação realizada no sistema deve possuir SOMENTE as seguintes informações:

  1) Data da Transação (Date)
  2) Tipo de Transação (Depósito, Transferência, Pagamento de Boleto)
  3) Valor da Transação (valor maior que zero)
 
* Sempre que a transação for do tipo DEPÓSITO, o valor da transação deve ser adicionado ao saldo da conta.

* Sempre que a transação for do tipo TRANSFERÊNCIA OU PAGAMENTO DE BOLETO, o valor da transação deve ser subtraído do saldo da conta.

* O saldo deve sempre ser atualizado na tela da aplicação a cada transação realizada.
```

Precisamos garantir que a string adicionada ao tipo de transação seja um dos três valores,"Depósito, Transferência ou Pagamento de Boleto". Não pode ser "gato", "cachorro" ou "pagamento de conta".

```JavaScript
// Tipos Personalizados (Type Alias) 
type Transacao = {
     tipoTransacao: string;
     data: Date;
     valor: number;
}

const novaTransacao: Transacao = {
       tipoTransacao: "", 
        data: new Date(),
        valor: 0
}
```

Mas, exigir que a pessoa que programa tenha certeza que o valor atribuído será um dos três especificados é bastante complicado. Alguém pode, por exemplo, escrever "Transferência" com a primeira letra em minúsculo: "transferência". Outra pessoa talvez esqueça o acento circunflexo: "Transferencia".

Precisamos padronizar a maneira como esses valores serão implementados no tipoTransacao. Além disso, podemos usar o IntelliSense, uma ajuda do Visual Studio Code para sabermos como passar os valores. Como o tipoTransacao é uma string, ele aceita qualquer tipo de texto, não há uma IntelliSense para escrevermos uma string correta.

As enumerações criam um conjunto de valores fixos no código que estabelecem padrões de atribuição desses valores, assim, conseguimos ter IntelliSense, isto é, ajuda do Visual Studio Code para atribuirmos valores corretamente ao longo do nosso código.

Mas, como declaramos uma enum? Logo abaixo do type alias, vamos chamar enum TipoTransacao.

```JavaScript
// Tipos Personalizados (Type Alias) 
type Transacao = {
     tipoTransacao: string;
     data: Date;
     valor: number;
}

// Enum
enum TipoTransacao {

}

const novaTransacao: Transacao = {
        tipoTransacao: "", 
        data: new Date(),
        valor: 0
}
```

Então, temos uma enumeração e podemos definir chaves que identificam os valores que elas representam. Por exemplo, podemos declarar que:

DEPOSITO corresponde a "Depósito";

TRANSFERENCIA corresponde a Transferência;

PAGAMENTO_BOLETO corresponde a "Pagamento de Boleto".

```JavaScript
// Tipos Personalizados (Type Alias) 
type Transacao = {
     tipoTransacao: string;
     data: Date;
     valor: number;
}

// Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
        TRANSFERENCIA = "Transferência",
        PAGAMENTO_BOLETO = "Pagamento de Boleto"

}

const novaTransacao: Transacao = {
        tipoTransacao: "", 
        data: new Date(),
        valor: 0
}
```

Assim, estamos centralizando na enum chaves e valores que ela representa. Os valores estarão centralizados, isto é, tudo está declarado dentro da enum, em todos os lugares nos quais pegarmos esses valores no código por meio da enum, teremos a certeza de que se trata do valor correto.

No type Transacao, ao invés de definirmos o tipoTransacao como string, vamos definí-lo como TipoTransacao. Ou seja, ele tem que receber um valor válido e declarado dentro da enum, caso contrário, aparecerá um alerta. Isso acontece com tipoTransacao:

```JavaScript
// código omitido. 

}

const novaTransacao: Transacao = {
        tipoTransacao: "", 
        data: new Date(),
        valor: 0
}
```

O alerta é:

Type " " is not assignable to type 'TipoTransacao'.

Significa que uma string vazia não é atribuível à propriedade 'tipoTransacao', porque o tipo dela é do tipo enum, ou seja, representa o TipoTransacao. Portanto, em tipoTransacao só pode haver um valor que exista dentro da enum.

Para atribuir esse valor, basta utilizar o próprio enum, por exemplo, TipoTransacao.DEPOSITO.

```JavaScript
// código omitido. 

}

const novaTransacao: Transacao = {
        tipoTransacao: TipoTransacao.DEPOSITO, 
        data: new Date(),
        valor: 0
}
```

Neste caso, contamos com a ajuda do IntelliSense. Não precisamos nos preocupar em saber se "transferência" tem acento ou não, se "depósito" deve começar com letra maiúscula ou minúscula ou se "pagamento de boleto" tem espaço entre as palavras. Basta utilizar a ajuda da enum para assegurar que o valor correto será atribuído à propriedade do objeto.

A enum serve para exercer um controle centralizado de valores fixos da aplicação e para assegurar que o valor correto está ocorrendo nas várias partes da aplicação.

Estudamos muitos conteúdos! Conhecemos todos os recursos de tipagem que o TypeScritpt oferece e, agora, aprenderemos a transportá-los para a nossa aplicação no bytebank. Vamos lá?!

### Aula 2 - Configurações do tsconfig.json - Exercício

O arquivo tsconfig.json permite a customização do comportamento que o compilador do TypeScript deverá ter em um determinado projeto.

Sabendo-se disso, que comportamento o compilador terá em nosso projeto ao configurarmos a opção “noEmitOnError” com o valor true?

Alternativa correta  
Com essa configuração o compilador irá gerar os arquivos .js correspondentes apenas se nenhum erro de compilação for detectado no código desses arquivos.

> Manter essa opção ativa faz com que a geração de códigos JavaScript com erros em produção diminua muito.

### Aula 2 - O que aprendemos?

Durante esta segunda aula, exploramos os seguintes tópicos:

- Conhecemos o arquivo tsconfig.json e sua função em um projeto.
- Aprendemos as vantagens de trabalhar com tipos definidos.
- Exploramos a criação de tipos personalizados usando Type Alias e também a criação de Arrays tipados no TypeScript.
- Aprendemos o conceito e a aplicabilidade das Enums.

Com isso, estamos prontos para seguir em frente para a próxima aula!

## Aula 3 - Aplicando o TypeScript

### Aula 3 - Projeto da aula anterior

Caso queira começar daqui, você pode [acessar o projeto da aula anterior](https://github.com/alura-cursos/formacao-typescript-projeto-curso01/tree/aula-2) neste link. Se preferir baixar diretamente, acesse este [link para o download do arquivo zip](https://github.com/alura-cursos/formacao-typescript-projeto-curso01/archive/refs/heads/aula-2.zip).

### Aula 3 - Reorganização de arquivos - Vídeo 1

Transcrição  
Anteriormente, conhecemos e escrevemos códigos para explorar as estruturas e recursos que o TypeScript adiciona à linguagem JavaScript. Contudo, corrigimos os erros pelo Visual Studio e por isso não testamos o código ainda.

Vamos fazer isso, adicionando um console.log() no final do arquivo typescript.ts. Entre os parênteses, pediremos para que ele exiba o objeto novaTransacao do tipo customizado Transacao.

```JavaScript
// Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(13, 22.5, 22, 89, 1.58);

// Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}

// Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
}

console.log(novaTransacao);
```

Vamos abrir o terminal acessando a barra de menus superior, selecionando "View > Terminal" ou simplesmente pressionando "Ctrl+'".

No trecho inferior do programa, acessaremos esse terminal e verificaremos se o compilador do TypeScript está rodando por meio do comando abaixo.

```JavaScript
tsc -w
```

Após a execução, ele compilará os arquivos TS. Vamos salvar o arquivo e retornar à nossa aplicação por meio do navegador. Em seu interior, abriremos a aba de ferramentas da pessoa desenvolvedora com F12 e verificaremos o seu retorno clicando em "Object" para expandir seu conteúdo.

```JavaScript
Object
    data: Mon Jun 12 2023 15:21:20 GMT-0300 (Horário Padrão de Brasília) {}
    tipoTransacao "Pagamento de Boleto"
    valor: 0
[[Prototype]]: Object
```

Nele, vemos a transação adicionada como exemplo no arquivo TypeScript, no formato de um objeto do tipo data. O tipoTransacao retorna a string correspondente ao que definimos nas enums e o valor da transação é 0.

Voltando ao VS Code, se adicionarmos no bloco novaTransacao um blablabla que foge do padrão definido, o TypeScript sublinha em vermelho, indicando que esse valor é inválido — afinal, não existe uma propriedade blablabla para o objeto tipado como Transacao.

```JavaScript
// Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(13, 22.5, 22, 89, 1.58);

// Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}

// Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
        blablabla
}

console.log(novaTransacao);
```

Definimos no arquivo tsconfig.ts que não deverá haver geração do arquivo TS se nosso código contiver erros. Por isso, ele não gerou o código com erro no diretório "dist" de publicação e nosso código continua funcionando no navegador.

Isso é muito importante: O código que roda no navegador e levamos à produção é aquele publicado na pasta "dist". Com esse controle, o TypeScript diminui a possibilidade de haver erros no código que irá para a produção. Esse detalhe é crucial no desenvolvimento de aplicações grandes que recebem várias influências.

Apesar disso, há alguns tipos de erro que o TypeScript não é capaz de identificar como, por exemplo, erros de ambiente de execução.

Resumindo, ele nos avisa visualmente sobre erros para que sejam corrigidos e não permite que códigos com erro sejam gerados e executados.

Abordamos anteriormente a necessidade de implementar nossos conhecimentos de TypeScript para o código final. Antes disso, vamos reorganizar o código.

Se acessarmos o arquivo bytebank.ts, veremos que o todo o conteúdo está concentrado nele. Vamos começar a reorganização acessando o explorador lateral e criando dois arquivos dentro da pasta "src":

nova-transacao-component.ts, que receberá o código TypeScript para controle de novas transações;
e saldo-component.ts que receberá o código do saldo.
Voltando ao arquivo bytebank.ts, selecionaremos e recortaremos a const elementoFormulario e todo o bloco elementoFormulario.addEventListener() que possui o evento de submit() do formulário.

Vamos colar essse conteúdo no arquivo nova-transacao-component.ts.

```JavaScript
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == "Depósito") {
        saldo += valor;
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert("Tipo de Transação é inválido!");
        return;
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };

    console.log(novaTransacao);
    elementoFormulario.reset();
});
```

Com isso, o arquivo terá a lógica necessária para o componente de formulário de novas transações funcionar.

O restante do código corresponde ao saldo. Vamos recortá-lo de bytebank.ts e colá-lo no arquivo saldo-component.ts.

```JavaScript
let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
```

Vamos acessar o explorador e realizar duas operações. Dentro da pasta "src", deletaremos os arquivos bytebank.ts e typescript.ts. Em seguida, por meio da rota de pastas "dist > js", acessaremos o arquivo index.html para importar os dois arquivos criados.

Em seu interior, desceremos ao final do arquivo e buscaremos as linhas de <script>, dentro das quais alteraremos os nomes "bytebank.js" e "typescript.js" pelo nome dos dois novos arquivos

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
        <!-- Código omitido -->
</head>
<body>
    <!-- Código omitido -->
    <main class="container-padding flex">
            <!-- Código omitido -->
        </main>
        <script src="js/saldo-component.js"></script>
        <script src="js/nova-transacao-component.js"></script>
</body>
</html>
```

Vamos fechar as guias dos arquivos TS abertos, mantendo somente o HTML. Voltando ao explorador, na pasta "dist", podemos deletar a pasta "js" por completo.

Vamos abrir novamente os dois arquivos TS. No interior de cada um, pressionaremos "Enter" abaixo de qualquer bloco e salvaremos o código apenas para solicitar ao compilador do TypeScript que gere uma pasta "js" atualizada, contendo esses dois arquivos.

Com isso, iniciamos a separação de responsabilidades. Cada arquivo possui um código de controle específico.

Nos resta adicionar os componentes novos que aprendemos com o Typescript. A seguir, faremos isso e continuaremos a melhorar nosso código.

### Aula 3 - Uso do Type Alias e Enums - Vídeo 2

Transcrição  
Após separar os códigos em dois componentes e arquivos distintos importando-os no código HTML, faremos um teste no navegador para verificar se a aplicação continua funcionando.

Na tela de nova transação, faremos um depósito de 300 reais com a data 12/04/2023 e clicaremos em "Concluir transação". Após o clique, veremos que o saldo foi atualizado corretamente e exibe o valor de 3300 reais.

Faremos uma transferência de 150 com a data 20/05/2023 e clicar no mesmo botão. Com isso, veremos que o saldo exibe agora o valor de 3150 reais. Constatamos que tudo funciona mesmo após a refatoração.

Vamos aplicar os recursos do TypeScript que conhecemos. O primeiro deles será o tipo Transacao que definirá a estrutura do que uma transação precisará ter para atingir os requisitos definidos.

Criando o tipo Transacao  
Voltando ao VS Code, no explorador, criaremos o arquivo Transacao.ts dentro da pasta "src". Em seu interior, definiremos somente o tipo Transacao, adicionando um type Transacao = {}.

Como boa prática, devemos criar um arquivo específico para cada tipo ou enum.

Entre suas chaves, a Transacao possuirá uma estrutura com o tipoTransacao tipado como string inicialmente (posteriormente definiremos o tipo correto).

Abaixo deste, adicionaremos um valor com o tipo number e uma data do tipo Date.

```JavaScript
type Transacao = {
    tipoTransacao: string;
    valor: number;
    data: Date;
}
```

Vamos acessar o arquivo nova-transacao-component.ts e buscar o bloco const novaTransacao no qual criamos o objeto que representará a nova transação. Vamos defini-lo como Transacao para que deixe de ser um objeto livre. Assim, ele seguirá a estrutura do tipo definido em Transacao.ts.

```JavaScript
const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
}
```

Quando se tratava de um objeto puro e comum do JavaScript, este bloco aceitava a adição de um blablabla: 'valor qualquer'. A partir do momento que o definimos com o tipo Transacao, o TypeScript restringe a sua estrutura para que siga a definição do seu tipo. Isso aumenta a solidez do código para evitar surpresas.

Se voltarmos ao navegador e atualizarmos a página, não veremos nada novo na aba "Console" pertencente à aba de inspeção. Se realizarmos um depósito de 300 reais na data 12/04/1991 e clicar no botão "Concluir transação", veremos que a transação foi computada e o código continua funcionando mesmo sem importar o arquivo Transacao.js no código de distribuição.

Isso de deve ao seguinte fato: o arquivo JS está vazio.

A criação do arquivo Transacao.ts com o type Transacao gerou um arquivo JS vazio? Sim, pois o JavaScript Vanilla, executado por padrão no navegador, não é capaz de declarar tipos — não existe um type em seu sistema.

Este type é exclusivo do JavaScript e existe para controlar internamente a estrutura dos objetos criados para que sigam a definição criada em seu tipo. Dessa forma, o arquivo JS não faz falta.

Contudo, é importante definir os tipos no momento de desenvolver a aplicação para controlar o padrão dos objetos definido no TypeScript, mesmo que o arquivo resultante esteja vazio.

Definindo o tipoTransacao  
Precisamos definir o tipoTransacao. Anteriormente, vimos que o tipo das transações são fixos e definidos por meio de enums.

Por meio do explorador, dentro da pasta "src", criaremos o arquivo TipoTransacao.ts com "T" maiúsculo. Em seu interior, criaremos uma enum TipoTransacao também com letras maiúsculas, junto a um bloco de chaves.

Entre as chaves, definiremos os valores abaixo, um por linha, separados por vírgula:

```JavaScript
DEPOSITO = "Depósito";
TRANSFERENCIA= "Transferência";
PAGAMENTO_BOLETO = "Pagamento de Boleto"
enum TipoTransacao  {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto"
}
```

Voltando ao arquivo Transacao.ts, substituiremos o tipo de transação de string para TipoTransacao no interior do objeto que representa a transação.

```JavaScript
type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
}
```

Voltando ao arquivo nova-transacao-component.ts, veremos que ocorrerá um erro em todas as ocorrências de tipoTransacao, já que estamos recebendo uma string. Vamos para a linha que declara a tipoTransacao e alterar o seu tipo de string para TipoTransacao.

À sua direita, o valor do inputTipoTransacao recebe um value do tipo string, portanto, converteremos essa string em TipoTransacao adicionando à sua direita um as TipoTransacao.

```JavaScript
let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
```

Com isso, informamos que a input proveniente do TipoTransacao deve ser uma das definidas no TipoTransacao para seguir a estrutura de tipagem.

Vamos voltar ao navegador e realizar o teste de funcionamento, realizando um depósito de 300 na data 12/04/2023 e pressionando "Concluir transação". Veremos na aba "Console" que a estrutura do objeto tipoTransacao foi exibida, enquanto na aplicação o saldo foi atualizado corretamente.

Faremos uma transferência de 500 reais na data 20/06/2023 e clicaremos no botão de conclusão, verificando no Console que a operação foi registrada com sucesso.

Concluímos que a aplicação está funcionando corretamente. Contudo, voltando ao VS Code, veremos que há um if com o tipoTransacao que compara com strings definidas diretamente no código.

Se lembrarmos bem, ao escrever "transferência" com "T" minúsculo, por exemplo, um erro será apontado pois será diferente do definido na tipagem. Para evitar surpresas relacionadas a formas incorretas de escrita, vamos acessar a enum do tipoTransacao e substituir as strings diretas pelo valor da enum.

```JavaScript
if (tipoTransacao == TipoTransacao.DEPOSITO) {
    saldo += valor;
} else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
    saldo -= valor;
} else {
    alert("Tipo de Transação é inválido!");
    return;
}
```

Com isso, nosso código segue a estrutura definida na tipagem. Vamos acessar o arquivo TipoTransacao.js por meio do navegador e verificar que uma função com valores definidos de retorno foi gerada.

```JavaScript
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Depósito";
    TipoTransacao["TRANSFERENCIA"] = "Transferência";
    TipoTransacao["PAGAMENTO BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
```

Embora tudo esteja funcionando, é interessante importar os arquivos Transacao.js e TipoTransacao.js nos <script>s do index.html para seguir o padrão em que importamos todos os arquivos JS, com ou sem código. Vamos acessá-lo e realizar essa tarefa.

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
        <!-- Código omitido -->
</head>
<body>
    <!-- Código omitido -->
    <main class="container-padding flex">
            <!-- Código omitido -->
        </main>
                <script src="js/Transacao.js"></script>
                <script src="js/TipoTransacao.js"></script>
        <script src="js/saldo-component.js"></script>
        <script src="js/nova-transacao-component.js"></script>
</body>
</html>
```

Posteriormente, refatoraremos esse código para organizá-lo melhor.

Voltaremos ao navegador para verificar novamente se tudo está certo, realizando operações de depósito e transferência com valores e datas aleatórias. Veremos que tudo funciona, mesmo com o nosso código refatorado.

A seguir, continuaremos com as melhorias. Precisamos transformar os valores numéricos em moeda e exibir a data de acesso no bloco de saldo.

### Aula 3 - Formatação de Moeda e Data - Vídeo 3

Transcrição  
Utilizamos tipos customizados por meio do Type Alias e da Enum. Agora, precisamos aplicar duas coisas:

- A exibição da data de acesso
- Formatar o valor exibido no saldo para moeda
- No que tange a data de acesso, vamos exibi-la abaixo das boas-vindas à pessoa usuária e corresponderá à data corrente do computador.

Convertendo o saldo para moeda brasileira  
Para realizar a conversão em moeda, utilizaremos o método toLocaleString() do JavaScript que fará este processo automaticamente.

Para isso, voltaremos ao arquivo saldo-component.ts, onde temos o elementoSaldo que exibe o saldo na tela. Atualmente, este é exibido em valor numérico, portanto, como boa prática, vamos explicitar o tipo de let saldo como number.

```JavaScript
let saldo: number = 3000;
```

Na linha elementoSaldo.textContent = saldo.toString() transformamos o valor do saldo em string e pedimos a sua exibição. Neste caso, queremos que ele formate o valor numérico em uma string específica com o formato de moeda. Para isso, substituiremos o toString() por toLocaleString().

Entre os parênteses, informaremos os parâmetros:

Um pt-br entre aspas duplas para seguir o padrão brasileiro de formatação;
Um objeto de configuração representado por um par de chaves, cujo interior receberá os valores currency: 'BRL' e style: currency.
Em style, solicitamos que a formatação ocorra no estilo de moeda. Já em currency, definimos que será utilizada a moeda brasileira.

```JavaScript
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo ≠ null) {
  elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}
```

Voltando ao navegador, veremos que o valor do saldo aparece na tela no formato moeda e no padrão brasileiro (R$ 3.000,00).

Entretanto, se realizarmos uma transação nessa tela, o valor voltará a ser numérico. Por que isso ocorre?

No arquivo nova-transacao-component.ts, temos o comando elementoSaldo.textContent = saldo,toString() que recolhe o saldo atualizado gerado no if acima dele e o exibe em formato de string, sem a formatação atual.

Vamos substituir o toString() novamente por toLocaleString() informando os mesmos parâmetros.

```JavaScript
elementoSaldo.textContent = saldo.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
```

Voltando ao navegador, se realizarmos uma transação de depósito, veremos que a exibição do saldo foi atualizada, mas continua com a formatação em moeda.

Exibindo a data corrente
Para exibir a data corrente do computador na aplicação, acessaremos o arquivo index.html para descobrir qual elemento exibe essa data. Neste caso, buscaremos a `<section>` denominada block-saldo.

Em seu interior, temos o `<h2>` com o texto "Olá, Joana!". Abaixo dele, temos a tag `<time>` exibindo a data de acesso.

Acessando o arquivo saldo-component.ts, responsável por controlar aquela parte do código, criaremos abaixo da const elemento Saldo uma const elementoDataAcesso que receberá a busca do elemento time no block.saldo do document por meio de um document.querySelector("block-saldo time").

Além disso, ele transformará este elemento em um HTMLElement por meio de um as HTMLElement.

Abaixo desta linha, há um if, abaixo do qual criaremos outro que checará se o elementoDataAcesso é diferente de nulo. Caso seja, o elementoDataAcesso.textContent receberá a data atual fornecida pelo sistema através de um dataAcesso que será formatado por meio do .toLocaleDateString() com parâmetros pt-br entre aspas duplas.

Acima do elementoDataAcesso.textContent, criaremos essa const dataAcesso do tipo Date que receberá um new Date().

```JavaScript
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoSaldo ≠ null) {
    // Código omitido
}

if (elementoDataAcesso null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = dataAcesso.toLocaleDateString("pt-br");
}
```

Se mantivermos o "pt-br" como único parâmetro de toLocaleString(), a data será retornada com o formato padrão do Brasil, ou seja, dia/mês/ano (DD/MM/AAAA). Se voltarmos ao navegador, veremos abaixo de "Olá, Joana!" a data "12/06/2023", momento de gravação deste vídeo.

À direita de "pt-br", informaremos um objeto de configuração representado por um par de chaves, assim como feito na formatação do saldo. Entre as chaves, informaremos as opções abaixo, uma por linha:

- Um weekday no formato "long";
- Um day no formato "2-digit";
- Um month no formato "2-digit";
- Um year no formato "numeric".

O weekday refere-se à exibição do nome daquele dia da semana. O formato long configura essa exibição para o formato extenso. As opções day e month referem-se ao dia e mês. Ambas usarão o formato de dois dígitos. Já o year refere-se ao ano e será retornado em valor numérico.

```JavaScript
if (elementoDataAcesso null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = dataAcesso.toLocaleDateString("pt-br" {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
```

Após esse processo, voltaremos ao navegador e veremos a data no formato "segunda-feira, 12/06/2023".

Formatamos a data e os valores numéricos. Entretanto, a exibição de datas e valores em moeda não se restringirão ao saldo. Na aba de extrato, localizada no canto direito, também temos valores monetários. Esta seção também receberá uma data referente a cada transação realizada, mas desta vez, no formato dia e mês.

Visto isso, precisaremos utilizar não somente o comando de formatação em vários locais, como também opções de formatação diferentes. Ao invés de digitar esse código em cada local de exibição, podemos centralizá-lo em um único lugar, tornando a manutenção do código mais fácil.

Faremos isso a seguir, por meio de funções.

### Aula 3 - Utilizando funções de formatação em TypeScript - Execício

Você é um desenvolvedor de software do Bytebank Banco Digital e está trabalhando na implementação de um sistema que interage com a API do banco para fornecer informações referentes a saldos e transações de clientes. Uma das suas tarefas é criar funções para formatar a moeda e a data das transações. Para essa tarefa, você utiliza o seguinte código base:

```JavaScript
function formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }

    return data.toLocaleDateString("pt-br");
}
```

Utilizando a função formatarMoeda e a função formatarData no código base, considere a situação em que você precisa imprimir na tela a seguinte frase: "Ontem, 23/10, foi transferido o valor de R$ 500,00.". Para atingir essa formatação, quais os argumentos corretos para as funções mencionadas?

Resposta:  
formatarMoeda(500); e formatarData(new Date("2023-10-23"), FormatoData.DIA_MES);

> Essa opção utiliza corretamente a função formatarMoeda passando o valor 500 como argumento e a função formatarData passando a data "2023-10-23" e o formato 'DIA_MES'.

### Aula 3 - Code Reuse com Funções - Vídeo 4

Transcrição  
Formatamos o saldo e a data que exibimos na tela. Contudo, vimos que é necessário centralizar esse código, pois vamos utilizá-lo de formas diferentes em outros locais da aplicação.

Para facilitar a manutenção posterior caso haja crescimento da aplicação, é importante efetuar essa refatoração.

Centralizando o código de formatação  
Voltando ao explorador do VS Code, criaremos o arquivo formatters.ts dentro da pasta "src", onde "formatters" é um nome muito comum para arquivos de formatação de valores em aplicações.

Em seu interior, criaremos a função formatarMoeda() que receberá entre parênteses um valor que deverá ser number. Essa função retornará uma string correspondente ao valor formatado em moeda.

Entre o bloco de chaves da string, adicionaremos um return com o valor, no qual aplicaremos a formatação .toLocaleString() que conhecemos, com os parâmetros pt-br entre aspas duplas e { style: "currency", currency: "BRL" }.

```JavaScript
function formatarMoeda(valor: number) : string {
    return valor.toLocaleString("pt-br" { style: "currency", currency: "BRL" });
}
```

Abaixo dessa função, criaremos outra denominada formatarData() que receberá entre parênteses a data a ser formatada do tipo Date. Essa função também retornará uma string.

Entre o bloco de chaves da string, adicionaremos um return com a data e a formatação .toLocaleDateString() com os parâmetros pt-br entre aspas duplas e um bloco de chaves com as opções weekday: "long", day: "2-digit", month: "2-digit" e year: "numeric".

```JavaScript
function formatarMoeda (valor: number): string {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function formatarData(data: Date): string {
    return data.toLocaleDateString("pt-br", {
weekday: "long",
day: "2-digit",
month: "2-digit",
year: "numeric"
});
```

Se tivéssemos que escrever estes blocos toda vez que precisássemos da formatação, teríamos muito trabalho.

Após criarmos os dois formatadores, voltaremos ao arquivo saldo-component.ts e, ao invés de escrever todo o código de formatação, utilizaremos a função formatarData() informando entre parênteses a dataAcesso.

Chamaremos essa nova função em todos os locais nos quais precisamos formatar a data.

No primeiro if, correspondente ao saldo, faremos o mesmo. Substituiremos o retorno de elementoSaldo.textContent para a função formatarMoeda() informando entre parênteses o saldo a ser formatado.

```JavaScript
if (elementoSaldo ≠ null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}

if (elementoDataAcesso ≠ null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}
```

Acessando o arquivo nova-transacao-component.ts, faremos o mesmo na linha elementoSaldo.textContent, localizada abaixo do if. Vamos substituir o conteúdo que ela recebe por formatarMoeda(saldo).

```JavaScript
if (tipoTransacao == TipoTransacao.DEPOSITO) {
    // Código omitido
}

elementoSaldo.textContent = formatarMoeda(saldo);
```

Voltaremos ao navegador e, se testarmos a aplicação agora, veremos um erro no console.

Uncaught ReferenceError: formatarMoeda is not defined

Isso ocorre porque criamos as funções somente no TypeScript. Resta importar os arquivos que possuem essas funções no index.html — neste caso, importaremos o formatters.js que foi gerado pelo formatters.ts. Para isso, adicionaremos um novo <script> acima do primeiro.

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
        <!-- Código omitido -->
</head>
<body>
    <!-- Código omitido -->
    <main class="container-padding flex">
            <!-- Código omitido -->
        </main>
                <script src="js/formatters.js"></script>
        <script src="js/Transacao.js"></script>
        <script src="js/TipoTransacao.js"></script>
        <script src="js/saldo-component.js"></script>
        <script src="js/nova-transacao-component.js"></script>
</body>
</html>
```

Voltando ao navegador, veremos que não há mais erros e tudo funciona. Se realizarmos um depósito ou pagamento para teste, veremos atualizações no saldo em formato de moeda.

Centralizamos o código de formatação de valores de moeda e de data, permitindo que ele seja reutilizado em várias partes do nosso código. Contudo, precisamos criar uma variação na formatação de data.

Neste momento, temos o padrão "dia da semana + dia/mês/ano" na exibição da data de acesso. Todavia, o padrão de exibição no extrato é "dia/mês".

Portanto, embora a formatação de moeda seja a mesma em todo lugar, a data precisará variar de acordo com nossa necessidade.

A seguir, vamos implementar essa variação.

### Aula 3 - Enum para formatos de datas - Vídeo 5

Transcrição  
No momento de formatar a data, precisamos informar qual formato de data queremos.

Na função formatarData, além da data precisamos passar o formato que queremos aplicar nessa data. Porque dependendo da necessidade podemos precisar de um formato diferente.

Para isso, precisamos definir quais formatos nossa aplicação pode ter. Vamos definir um padrão da mesma maneira que definimos os tipos de transação. Assim nosso código ficará mais claro em relação aos tipos de formatação disponíveis para serem utilizados.

Caso seja necessário expandir isso, podemos expandir essas opções atualizando o código onde for necessário.

No formatarData precisaremos passar um formato.

```JavaScript
function formatarData(data: Date, formato): string {
// código omitido
```

Mas como definir esse formato?

Vamos definir uma enum com formatos de data disponíveis para usarmos na nossa aplicação.

Dentro da pasta "src", vamos criar um arquivo chamado FormatoData.ts.

Dica: ao criar um tipo ou enum é uma boa prática seguirmos esse formato de nomenclatura, primeira letra maiúscula e palavras seguintes com inicial maiúscula. É o chamado Pascal Case.

No arquivo FormatoData.ts teremos o seguinte código:

```JavaScript
enum FormatoData {
  PADRAO = "DD/MM/AAAA",
  DIA_SEMANA_DIA_MES_ANO = "DIA_SEMANA, DD/MM/AAAA",
  DIA_MES = "DD/MM"

}
```

Voltando ao formatters.ts, vamos informar que o formato deve seguir o FormatoData. E o valor padrão será FormatoData.PADRAO.

```JavaScript
function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string {
  return data.toLocaleDateString("pt-br", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
   });
}
```

Então, se não for informado um formato específico, ele vai aplicar o formato padrão.

Agora, precisamos atualizar nosso código para referenciar cada um desses tipos.

Colocaremos uma condicional para informar que, se o formato definido for FormatoData.DIA_SEMANA_DIA_MES_ANO vai retornar o que já retorna atualmente. E se o formato for FormatoData.DIA_MES, teremos um return data.toLocaleDateString("pt-br", {day: "2-digit", month: "2-digit"}.

E não for nenhum dos dois, será retornado data.toLocaleDateString("pt-br"), que é o formato padrão.

```JavaScript
function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string {
 if (formato == FormatoData.DIA_SEMANA_DIA_MES_ANO) {
  return data.toLocaleDateString("pt-br", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
   });
  }
  else if (formato == FormatoData.DIA_MES) {
     return data.toLocaleDateString("pt-br", {day: "2-digit", month: "2-digit"});
}

 return data.toLocaleDateString("pt-br");
}
```

Feito isso, vamos para o index.html para importar nossa enum. Criaremos uma nova linha de tag script:

```html
<script src="js/FormatoData.js"></script>
```

No arquivo saldo-component.ts, como não estamos indicando nenhum formato específico no formatarData, ele está pegando o formato padrão.

Mas, podemos informar que o formato deve ser FormatoData.DIA_SEMANA_DIA_MES_ANO.

Ao verificarmos no navegador, ele está exibindo a formatação solicitada para a exibição de datas no bloco de saldo:

segunda-feira, 12/06/2023

Conclusão  
Fizemos a nossa atualização de formatação. Agora, vamos explorar alguns problemas que nosso código ainda possui. Está tudo funcionando, mas no próximo vídeo saberemos como podemos melhorar o nosso código e verificar quais falhas ele ainda possui.

### Aula 3 - Problemas do código - Vídeo 6

Transcrição  
Nosso código está funcionando, implementamos tudo em TypeScript, colocamos os tipos específicos, etc.

Mas nosso código ainda tem algumas falhas a serem resolvidas. Falhas que têm mais a ver com o modo como organizamos nosso código.

A primeira coisa é um problema de ordenação. Como nosso código está sendo implementado de uma forma mais antiga, comparado aos novos padrões, estamos implementando a importação dos arquivos JS diretamente no HTML e de forma explícita.

```html
<script src="js/FormatoData.js"></script>
<script src="js/formatters.js"></script>
<script src="js/Transacao.js"></script>
<script src="js/TipoTransacao.js"></script>
<script src="js/saldo-component.js"></script>
<script src="js/nova-transacao-component.js"></script>
```

Porém, esse tipo de abordagem tem um problema: a ordenação.

Se mudarmos a ordem desse código e colocar, por exemplo, o saldo-component.js como primeiro código a ser importado, a aplicação vai parar de funcionar. Vai acontecer um erro de referência.

Se acessarmos console do navegador com "F12", veremos a mensagem:

Uncaught ReferenceError: formatarMoeda is not defined a saldo-component.js:5:5

Mas como assim não achou o formatarMoeda? Como assim o formatarMoeda não está definido no código sendo que importamos o formatters que é onde está a função formatarMoeda?

Ele não achou porque uma página HTML é executada de cima para baixo. Então, à medida que os arquivos JavaScript são carregados, eles são executados imediatamente.

No momento em que o navegador capturou e carregou o arquivo saldo-component.js e o executou, ele já leu que para atualizar o elemento saldo seria preciso chamar a função formatarMoeda.

Mas a função formatarMoeda no momento da execução da linha 13 ainda não existe. Ela vai existir só quando o navegador ler a linha 15, `<script src="js/formatters.js"></script>`, que ainda não foi executada. Mas quando ela for executada tudo que está definido no arquivo formatters será carregado em memória.

Então, do jeito que está agora podemos ter esse tipo de problema. Com isso, precisarímos ter cuidado com a ordem em que esses arquivos são escritos no código index, o que é muito complicado em projetos muito grandes.

Esse é o primeiro problema.

O segundo problema, é que não está claro de onde estão vindo algumas partes do código. Por exemplo, o formatarMoeda. Sabemos que existe uma função formatarMoeda, mas no código não está claro de onde está vindo essa função.

Claro que o VS Code e outros editores de código têm atalhos que podemos usar para saber onde a função está sendo definida. Mas o ideal seria que o código fosse mais descritivo e informasse de qual arquivo estamos importando essa função. Para melhorar a legibilidade do código e entendermos rapidamente como ele está funcionando. Sem ficarmos adivinhando ou utilizando os recursos do VS Code para descobrir onde está cada coisa.

O terceiro problema é o conflito de variáveis. Vamos imaginar, por exemplo, que estamos com uma aplicação muito maior e na sua equipe terão várias pessoas programadoras utilizando e fazendo manutenção no mesmo código que você.

E há momentos em que vamos precisar nomear variáveis com nomes que outros arquivos podem ter. Não podemos ficar criando variações tipo saldo2, saldo3, saldo4, etc. Só para não ter conflitos de variáveis.

De alguma forma, precisamos ter o código isolado dos demais. Para que possamos ter a liberdade de colocar nomes comuns de variáveis sem ter que fazer malabarismos em relação aos nomes na estrutura do código.

Outro ponto de atenção é em relação à separação clara de responsabilidades.

Temos o saldo-component que é o responsável por gerenciar tudo que tem a ver com saldo.

Mas, no nova-transacao-component, a cada transação feita também precisamos atualizar o saldo. Mas não é responsabilidade do nova-transacao-component modificar coisas que tem a ver com o saldo. A responsabilidade dele é apenas gerar novas transações. Então, ele está com mais responsabilidade do que deveria.

O certo é, de alguma maneira, o código do nova-transacao-component pedir para o saldo-component atualizar o saldo na interface, porque é responsabilidade dele fazer isso.

A forma mais moderna para resolver esses problemas é utilizar módulos do ECMAScript 6, é o que faremos na próxima aula!

### Aula 3 - Importação dos arquivos JS no HTML - Exercício

Vimos durante esta aula, alguns exemplos de problemas que podem ocorrer ao realizarmos a importação de vários arquivos .js diretamente na página HTML por meio do uso de várias tags `<script>`.

Com isso em mente, qual o principal problema que pode ocorrer ao não termos atenção à ordem em que realizamos as importações dos scripts necessários à aplicação?

Resposta:  
A ordem de importação dos arquivos .js na página HTML, se feita de forma desatenta, pode influenciar na capacidade do programa encontrar os recursos dos quais depende. Se ao importar um arquivo qualquer este dependender de recursos de um outro que não tenha sido importado e carregado antes dele gerará um erro de Referência, em que o recurso buscado não pode ser encontrado.

> A ordem de importação influencia na capacidade de diferentes partes do código da aplicação encontrarem os recursos dos quais dependem. Se um determinado arquivo .js for carregado sem que o arquivo no qual o recurso de que ele precisa para ser executado tenha sido carregado antes fará com que a aplicação gere um erro de Referência (ReferenceError) informando o desenvolvedor que o recurso requerido não pode ser encontrado. Esse é outro problema que é solucionado por meio do uso de módulos.

### Aula 3 - Faça como eu fiz: exibindo transações formatadas

Você está desenvolvendo uma aplicação para o Bytebank Banco Digital e precisa exibir as informações de transações, como seu valor e a data da transação. Para melhorar a experiência do usuário, você deve formatar corretamente os valores monetários em reais (BRL) e as datas de acordo com os formatos pré-definidos: Padrão (dd/MM/yyyy) ou Dia da Semana, Dia, Mês e Ano.

Utilizando a base de código TypeScript fornecida, crie uma função que recebe o valor da transação e a data, e retorna as informações formatadas em uma única string, no formato: "Data Formatada - Valor Formatado". Para isso, você precisará chamar as funções formatarMoeda e formatarData já fornecidas.

Código TypeScript:

```JavaScript
function formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }

    return data.toLocaleDateString("pt-br");
}
```

Títulos sugeridos para o exercício:

- Exibindo Transações Formatadas
- Formatação de Moedas e Datas
- Apresentação de Transações Bancárias

Opinião do instrutor

```JavaScript
enum FormatoData {
    PADRAO,
    DIA_SEMANA_DIA_MES_ANO,
    DIA_MES
}

function formatarInformacoes(valor: number, data: Date, formatoData: FormatoData): string {
    const dataFormatada = formatarData(data, formatoData);
    const valorFormatado = formatarMoeda(valor);
    return `${dataFormatada} - ${valorFormatado}`;
}
```

A função formatarInformacoes recebe três parâmetros: valor (number) que representa o valor da transação, data (Date) que representa a data da transação e formatoData (FormatoData) que indica o formato desejado para a data.

A função chama a função formatarData passando a data e o formato desejado para obter a data formatada.

A função chama a função formatarMoeda passando o valor para obter o valor formatado em moeda.

A função retorna uma string concatenando a data formatada, o caractere "-" e o valor formatado, conforme o formato solicitado: "Data Formatada - Valor Formatado".

Dessa forma, ao chamar a função formatarInformacoes com os valores desejados, você obterá as informações formatadas em uma única string, conforme especificado.

### Aula 3 - O que aprendemos?

Ao longo desta terceira aula exploramos os seguintes tópicos:

- Reorganizamos a estrutura de arquivos do projeto;
- Aplicamos os conceitos apresentados e explorados na aula 2;
- Realizamos a formatação de moedas e data nos formatos necessários;
- Analisamos os problemas que ainda persistem na aplicação e que podem ser resolvidos por meio dos módulos.
- Sendo assim, podemos seguir para a próxima aula!

Sigamos! :)

## Aula 4 - 

### Aula 4 -  - Vídeo 1
### Aula 4 -  - Vídeo 2
### Aula 4 -  - Vídeo 3
### Aula 4 -  - Vídeo 4
### Aula 4 -  - Vídeo 5
### Aula 4 -  - Vídeo 6
### Aula 4 -  - Vídeo 7
