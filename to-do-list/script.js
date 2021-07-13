//capturando os elementos do html
const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

//array de objetos
let lists = []

newListForm.addEventListener('submit', function(e) {
    e.preventDefault() //toda vez que rola um submit, a página atualiza e preciso evitar esse comportamento para não perder os dados da lista
    const listName = newListInput.value
    if (listName === null || listName === '') return

    const list = createList(listName)
    newListInput.value = null //após passar um valor, limpa o campo e se prepara para receber outro
    lists.push(list) //empurra o item para o final da lista

    render()
})


function render() {
    clearElement(listContainer)
    lists.forEach(function(list) {
        const item = document.createElement('li') //criou o elemento
        item.classList.add('item') //colocou uma class nele
        item.innerText = list.name //indicou que ele vai receber
        listContainer.appendChild(item) //joga o elemento recem criado dentro de uma div mãe
    })
}


function createList(name) {
    return {
        id: Date.now().toString,
        name: name
    }
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()