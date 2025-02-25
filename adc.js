const form = document.getElementById('agenda');
let registros = ''
form.addEventListener('submit', function(e) {
    e.preventDefault();

const inputNome = document.getElementById('nome');
const inputNumero = document.getElementById('numero');

let registro = `<tr>`
registro += `<td>${inputNome.value}</td>`
registro += `<td>${inputNumero.value}</td>`
registro += `</tr>`

const agendaTabela = document.querySelector('tbody')
agendaTabela.innerHTML = registro

inputNome.value = ''
inputNumero.value = ''


})