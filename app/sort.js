const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordenarPrecos)

function ordenarPrecos() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirListaDeLivrosNaTela(livrosOrdenados)
}