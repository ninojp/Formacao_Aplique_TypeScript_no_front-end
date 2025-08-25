// interface Tarefa {
//     descricao: string;
//     concluida: boolean;
// };
// //-----------------------------
// interface EstadoAplicacao {
//     tarefas: Tarefa[];
//     tarefaSelecionada: Tarefa | null;
// };
// //-----------------------------
// let estadoInicial: EstadoAplicacao = {
//     tarefas: [
//         {
//             descricao: 'Tarefa concluída',
//             concluida: true
//         },
//         {
//             descricao: 'Tarefa pendente 1',
//             concluida: false
//         },
//         {
//             descricao: 'Tarefa pendente 2',
//             concluida: false
//         }
//     ],
//     tarefaSelecionada: null,
//     // editando: false
// };
// //=====================================================================================
// const selecionarTarefa = (estado:EstadoAplicacao, tarefa:Tarefa):EstadoAplicacao => {
//     return {
//         ...estado,
//         tarefaSelecionada: tarefa === estado.tarefaSelecionada ? null : tarefa
//     }
// }
// //=====================================================================================
// const adicionarTarefa = (estado:EstadoAplicacao, tarefa:Tarefa):EstadoAplicacao => {
//     return {
//         ...estado,
//         tarefas: [...estado.tarefas, tarefa]
//     }
// }
// //=====================================================================================
// const atualizarUI = () => {
//     const taskIconSvg = `
//         <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="12" cy="12" r="12" fill="#FFF" />
//             <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E" />
//         </svg>`;
//     //-----------------------------------------------------------------------------------------------------
//     const ulTarefas = document.querySelector<HTMLUListElement>('.app__section-task-list');
//     if (ulTarefas) {
//         //O uso? poderia dar erro, pois estamos ESCREVENDO dentro do <ul>
//         ulTarefas.innerHTML = '';
//     };
//     //-----------------------------------------------------------------------------------------------------
//     const textarea = document.querySelector<HTMLTextAreaElement>('.app__form-textarea');
//     //-----------------------------------------------------------------------------------------------------
//     const formAdicionarTarefa = document.querySelector<HTMLFormElement>('.app__form-add-task');
//     //O uso!(exclamação), foi para dizer(AFIRMAR!) ao TypeScript que o elemento existe, ou seja, não é nulo. 
//     formAdicionarTarefa!.onsubmit = (evento) => {
//         evento.preventDefault();
//         const descricao = textarea!.value;
//         estadoInicial = adicionarTarefa(estadoInicial, {
//             descricao,
//             concluida: false
//         });
//         atualizarUI();
//     };
//     //-----------------------------------------------------------------------------------------------------
//     const btnAdicionarTarefa = document.querySelector<HTMLButtonElement>('.app__button--add-task');
//     if (!btnAdicionarTarefa) {
//         throw Error("Caro colega, o elemento btnAdicionarTarefa não foi encontrado. Favor rever.");
//     };
//     btnAdicionarTarefa.onclick = () => {
//         formAdicionarTarefa?.classList.toggle('hidden');
//     };
//     //----------------------------------------------------
//     estadoInicial.tarefas.forEach(tarefa => {
//         const li = document.createElement('li');
//         li.classList.add('app__section-task-list-item');
//         //----------------------------------------------
//         const svgIcon = document.createElement('svg');
//         svgIcon.innerHTML = taskIconSvg;
//         li.appendChild(svgIcon);
//         //---------------------------------------------
//         const paragraph = document.createElement('p');
//         paragraph.classList.add('app__section-task-list-item-description');
//         paragraph.textContent = tarefa.descricao;
//         li.appendChild(paragraph);
//         //----------------------------------------------
//         const button = document.createElement('button');
//         button.classList.add('app_button-edit');
//         //-------------------------------------------------
//         const editIcon = document.createElement('img');
//         editIcon.setAttribute('src', './imagens/edit.png');
//         button.appendChild(editIcon);
//         li.appendChild(button);
//         //----------------------
//         if (tarefa.concluida) {
//             button.setAttribute('disabled', 'true');
//             li.classList.add('app__section-task-list-item-complete');
//         };
//         //------------------------------------------
//         li.addEventListener('click', () => {
//             console.log("A tarefa foi clicada: ", tarefa);
            
//             estadoInicial = selecionarTarefa(estadoInicial, tarefa);
//             atualizarUI();
//         });
//         //------------------------------------------------------------------------
//         ulTarefas?.appendChild(li);//Aqui o uso? é recomendado, pois estamos LENDO
//     });
// };
// atualizarUI();
