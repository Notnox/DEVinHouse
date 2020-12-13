const lista = document.querySelector('#livro')
const listaSemRank = document.querySelector('#semRank')
const h2 = document.createElement('h2')
const h3 = document.createElement('h3')
const h4 = document.createElement('h4')

const livros = [
    {titulo: 'Livro 1', vendas: 800},
    {titulo: 'Livro 2', vendas: 120},
    {titulo: 'Livro 3', vendas: 700},
    {titulo: 'Livro 4', vendas: 2000},
    {titulo: 'Livro 5', vendas: 258},
    {titulo: 'Livro 6', vendas: 950},
    {titulo: 'Livro 7', vendas: 7536},
    {titulo: 'Livro 8', vendas: 90},
]

const rankLivros = livros.sort((a, b) => {
    if (a.vendas < b.vendas) return 1;
    if (a.vendas > b.vendas) return -1;
    return 0;
}) 

const exibirRank = (rank1, rank2, rank3, ...rest) => {
    
    h2.innerHTML = `1° - ${rank1.titulo} com ${rank1.vendas} copias vendidas.`
    h3.innerHTML = `2° - ${rank2.titulo} com ${rank2.vendas} copias vendidas.`
    h4.innerHTML = `3° - ${rank3.titulo} com ${rank3.vendas} copias vendidas.`
    
    lista.appendChild(h2)
    lista.appendChild(h3)
    lista.appendChild(h4)

    rest.forEach((elem) => {
        const h5 = document.createElement('h5')
        h5.innerHTML = `Título: ${elem.titulo} com ${elem.vendas} copias vendidas`
        listaSemRank.appendChild(h5)
    })
}

exibirRank(...rankLivros)