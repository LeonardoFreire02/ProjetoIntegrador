/* Caixa de buscar*/

const texto = document.getElementById('busca')
const buscar = document.getElementById('buscar')

buscar.onclick = fazerBusca

function fazerBusca() {
    if(texto.value == '') {
        alert ('Nada foi digitado no campo de busca. Tente novamente.')
        texto.focus()
        return
    }

    else {
        alert ('O que você procura não foi encontrado. Tente novamente.')
        texto.value = ''
        texto.focus()
        return
    }
}