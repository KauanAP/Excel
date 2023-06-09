const desfazer = document.createElement('img');
const refazer = document.createElement('img');
//
//
//
const topoTodo = document.getElementById("topoTodo");
const menuSuperior = document.getElementById("menuSuperior");
let menuItens = [];
let itemSelect = null;
let items = [desfazer, refazer]
const mSS = menuSuperiorSelect();
//
const menuFuncionalidades = document.getElementById("menuFuncionalidades");
const funcionalidadesPrincipais = document.getElementById("funcionalidadesPrincipais");
const funcionalidadesExtras = document.getElementById("funcionalidadesExtras");
//
menuFuncionalidades.style.background = 'white';
menuFuncionalidades.style.width = '100%';
menuFuncionalidades.style.height = '150px';
menuFuncionalidades.style.margin = '15px';
menuFuncionalidades.style.borderRadius = '5px';
//
const conteudoPrincipal = document.getElementById("conteudoPrincipal");
let inputs = []
let tabela = document.createElement('table')
let todosTr = []
let todosTh = []
let todosTd = []
conteudoPrincipal.appendChild(tabela)
//
//
for (let i = 0; i < 13; i++) {
    menuItens.push(menuSuperior.children[i]);
    console.log(menuItens[i]);
}
//
//
function menuSuperiorSelect() {
    return function(option) {
        menuItens[option].style.borderBottom = 'solid 2px rgb(69, 120, 151)';
        if (itemSelect === null || itemSelect === option) {
            itemSelect = option;
        }
        else {
            for (let a = 0; a < items.length; a++) {
                items[a].style.position = 'relative'
                items[a].style.zIndex = -1
            }
            menuItens[itemSelect].style.borderBottom = 'none';
            itemSelect = option;
        }
        choose(option);

    }
}
//
function choose(c) {
    switch(c) {
        case 1:
            home();
            break;
    }
}
//
function home() {
    for (let a = 0; a < items.length; a++) {
        items[a].style.position = 'relative'
        items[a].style.zIndex = 0
    }
    desfazer.src = 'img/desfazer.png';
    refazer.src = 'img/refazer.png'
    console.log(desfazer);
    menuFuncionalidades.appendChild(desfazer);
    menuFuncionalidades.appendChild(refazer);
    desfazer.style.width = '20px';
    desfazer.style.height = 'auto';
    refazer.style.width = '20px';
    refazer.style.height = 'auto';
}
//
//
function rodarInformaçõesBasicas() {
    for (let l = 0; l < 40; l++) {
        linha = l + 1
        todosTr.push(document.createElement('tr'))
        tabela.appendChild(todosTr[l])
        for (let c = 0; c < 26; c++) {
            coluna = c + 1
            if (l === 0) {
                todosTh.push(document.createElement('th'))
                todosTr[l].appendChild(todosTr[c])
            }
            let identidade = String.fromCharCode(64 + coluna) + linha
            todosTd[identidade] = document.createElement('td')
            todosTr[l].appendChild(todosTd[identidade])
            inputs[identidade] = document.createElement('input')
            inputs[identidade].id = identidade
            todosTd[identidade].appendChild(inputs[identidade])
            console.log(identidade, inputs[identidade], inputs[identidade].id, todosTd[identidade])
        }
    }
    console.log[inputs.length, inputs]
}

rodarInformaçõesBasicas()

fetch('https://api-excel.kauanreinox.repl.co/')
    .then((res) => {
        console.log('oioi funcionou', res)
    })
    .catch(error => console.log('oi deu erro', error))