'use strict'
import { pesquisaEstado } from "./api.js"

const mapa = document.querySelector('#svg')
const sigla = document.querySelector('#sigla')

const getEstados =({ target}) => {

    const estado = target.id.replace('BR-', '')
    console.log(estado)
}



mapa.addEventListener('click', getEstados)

const dadosEstados = async({ target }) => {
    const estado = target.id
    const dadosEstado = await pesquisaEstado(estado)
    console.log(dadosEstado.descricao)

}
mapa.addEventListener('click', dadosEstados)
