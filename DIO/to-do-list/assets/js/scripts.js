const form = document.getElementById('task-form'); //Cria constante do formulario pegando o form inteiro
const taskList = document.getElementById('tasks'); //Cria uma constante com o container onde vai ficar as infos adicionadas

//Função ao clicar no botão tipo submit, irá executar
form.onsubmit = function (e) {
	e.preventDefault(); 
	const inputField = document.getElementById('task-input').value; //Cria constante com o valor ja do input
	addTask(inputField); //Chama a função para adicionar
	form.reset();//Reseta o formulário
}

function addTask(description) {
    const div = document.createElement('div'); //Cria a div do container onde irá ter a info adicionada
    const checkbox = document.createElement('input');//O input onde irá selecional
    const label = document.createElement('label');//A escrita
    const textName = document.createTextNode(description);//Cria um texto de acordo com o que foi escrito e adiciona a constante

    checkbox.setAttribute('type','checkbox');//Altera o tipo do input
    checkbox.setAttribute('name', description);//Atribui o nome do input de acordo com o que foi escrito
    checkbox.setAttribute('id', description);//Atribui o ID do input de acordo com o que foi escrito.

    label.setAttribute('for', description);//Cria o vinculo com o input de acordo com o que foi escrito.
    label.appendChild(textName);//Adiciona o texto criado.

    div.classList.add('task-item');//Cria a classe no container onde irá ter as infos adicionadas
    div.appendChild(checkbox);//adiciona a tag de acordo com as informações anteriores
    div.appendChild(label);//adiciona a tag de acordo com as informações anteriores

    taskList.appendChild(div);//cria a div onde irá ter o conteudo.

}

