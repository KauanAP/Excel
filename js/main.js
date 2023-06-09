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
const nomeDasCelulas = document.createElement('input')
nomeDasCelulas.id = 'celulaName'
conteudoPrincipal.appendChild(nomeDasCelulas)
//
let inputInfo = null
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

    for (let l = 0; l < 41; l++) {
        linha = l + 1
        todosTr.push(document.createElement('tr'))
        tabela.appendChild(todosTr[l])
        for (let c = 0; c < 27; c++) {
            coluna = c + 1
            if (l > 0 & c == 0) {
                todosTh[l] = document.createElement('th')
                todosTh[l].innerHTML = l
                todosTh[l].class = 'linhasCelula'
                todosTr[l].appendChild(todosTh[l])
                console.log(todosTh[l].class)
            }
            if (l === 0) {
                if (c == 0) {
                    console.log('marca tudo')
                    let colunaName = String.fromCharCode(64 + c)
                    todosTh[colunaName] = document.createElement('th')
                    todosTh[colunaName].innerHTML = ''
                    console.log(todosTh[colunaName])
                    todosTr[l].appendChild(todosTh[colunaName])
                }
                else {
                    let colunaName = String.fromCharCode(64 + c)
                    todosTh[colunaName] = document.createElement('th')
                    todosTh[colunaName].innerHTML = String.fromCharCode(64 + c)
                    console.log(todosTh[colunaName])
                    todosTr[l].appendChild(todosTh[colunaName])
                }
                
            }
            if ((l > 0) & (c > 0 & c < 27)) {
                debugger
                let identidade = String.fromCharCode(64 + c) + l
                todosTd[identidade] = document.createElement('td')
                todosTr[l].appendChild(todosTd[identidade])
                inputs[identidade] = document.createElement('input')
                inputs[identidade].id = identidade
                todosTd[identidade].appendChild(inputs[identidade])
            }
        }
    }
    console.log[inputs.length, inputs]
}
//
rodarInformaçõesBasicas()
//
//
tabela.addEventListener('click',(event) => {
    debugger
    console.log(Boolean(inputs[event.target.id]))
    if (Boolean(inputs[event.target.id]) == true) {
        console.log(Boolean(inputs[event.target.id]))
        retirarSelecao(checkFinal)
        nomeDasCelulas.value = event.target.id
    }
    if (event.target.textContent > 0 & event.target.textContent < 41) {
        selecionarColuna(event.target.textContent, 'line')
    }
    else {
        if (todosTh[event.target.textContent]) {
            selecionarColuna(event.target.textContent, 'column')
        }
    }
})
//
tabela.addEventListener('keydown', () => {
    if (Boolean(inputs[event.target.id]) == true) {

    }
})

let controleExecucaoColumn = 'none'
let controleExecucaoLine = 'none'
let checkFinal = 'none'

function selecionarColuna(clSelect, type) {
    console.log(clSelect)
    if (type == 'column') {
        for (let column = 0; column < 40; column++) {
            if (column == 39) {
                controleExecucaoColumn = clSelect
                checkFinal = 'column'
            }
            if (checkFinal === 'line') {
                //
                retirarSelecao(clSelect)
            }
            if (controleExecucaoColumn != clSelect & controleExecucaoColumn != 'none') {
                
                todosTh[controleExecucaoColumn].style.background = 'rgb(235, 235, 235)'
                inputs[controleExecucaoColumn + (column + 1)].style.background = 'rgb(255, 255, 255)'
                todosTd[controleExecucaoColumn + (column + 1)].style.background = 'none'
            }
            if (column == 0) {
                todosTh[event.target.textContent].style.background = 'rgba(0, 150, 200, 0.3)'
            }
            if (column == 2) {
                console.log(clSelect + (column - 1))
                inputs[clSelect + (column - 1)].style.background = 'rgb(255, 255, 255)'
                debugger
                inputs[clSelect + (column - 1)].focus()
            }
            console.log(clSelect + (column + 1))
            inputs[clSelect + (column + 1)].style.background = 'rgba(140, 220, 255, 0.8)'
            todosTd[clSelect + (column + 1)].style.background = 'rgba(0, 60, 140, 0.8)'
        }
    }
    if (type == 'line') {
        for (let line = 0; line < 26; line++) {
            if (line == 25) {
                controleExecucaoLine = clSelect
                checkFinal = 'line'
            }
            if (checkFinal === 'column') {
                debugger
                retirarSelecao(clSelect)
                //
            }
            if (controleExecucaoLine != clSelect & controleExecucaoLine != 'none') {
                debugger
                todosTh[controleExecucaoLine].style.background = 'rgb(235, 235, 235)'
                inputs[String.fromCharCode(64 + (line + 1)) + controleExecucaoLine].style.background = 'rgb(255, 255, 255)'
                todosTd[String.fromCharCode(64 + (line + 1)) + controleExecucaoLine].style.background = 'none'
            }
            if (line == 0) {
                todosTh[event.target.textContent].style.background = 'rgba(0, 150, 200, 0.3)'

            }
            if (line == 2) {
                console.log(String.fromCharCode(64 + (line - 1)))
                inputs[String.fromCharCode(64 + (line - 1)) + clSelect].style.background = 'rgb(255, 255, 255)'
                inputs[String.fromCharCode(64 + (line - 1)) + clSelect].focus()
            }
            console.log(String.fromCharCode(64 + (line + 1)) + clSelect)
            inputs[String.fromCharCode(64 + (line + 1)) + clSelect].style.background = 'rgba(140, 220, 255, 0.8)'
            todosTd[String.fromCharCode(64 + (line + 1)) + clSelect].style.background = 'rgba(0, 60, 140, 0.8)'
        }
    }
}
//
//
function retirarSelecao(type) {
    if (checkFinal === 'line') {
        for (let line = 0; line < 26; line++) {
            if (type === String.fromCharCode(65 + line)) {
                console.log('nothing')
            }
            else {
                todosTh[controleExecucaoLine].style.background = 'rgb(235, 235, 235)'
                inputs[String.fromCharCode(64 + (line + 1)) + controleExecucaoLine].style.background = 'rgb(255, 255, 255)'
                todosTd[String.fromCharCode(64 + (line + 1)) + controleExecucaoLine].style.background = 'none'
            }
        }
    }

    if (checkFinal === 'column') {
        for (let column = 0; column < 40; column++) {
            if (type == column + 1) {
                console.log('nothing')
            }
            else {
                todosTh[controleExecucaoColumn].style.background = 'rgb(235, 235, 235)'
                inputs[controleExecucaoColumn + (column + 1)].style.background = 'rgb(255, 255, 255)'
                todosTd[controleExecucaoColumn + (column + 1)].style.background = 'none'
            }
        }
    }
}
//
async function apiExcel() {
    const returnApiExcel = await fetch('https://api-excel.kauanreinox.repl.co/')
    console.log(returnApiExcel)
}
