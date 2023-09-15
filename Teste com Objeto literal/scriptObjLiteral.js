let cliente;
let listaClientes = Array();

function enviar() {


    let nome = document.getElementById('inTFnome').value;

    let sobrenome = document.getElementById('inTFSobrenome').value;

    let pastel = document.getElementById('inTFPastel').value;

    cliente = {
        nome,
        sobrenome,
        pastel

    }

    cadastrar(cliente);

    document.getElementById('inTFnome').value = '';
    document.getElementById('inTFSobrenome').value = '';
    document.getElementById('inTFPastel').value = '';
}
function exibir() {

    listaClientes.forEach((cliente) => document.getElementById('taListaClientes').value += cliente.nome
        + ' com pastel preferido de ' + cliente.pastel + '\n');

    //   console.log(listaClientes[1].nome);

}



function cadastrar(cliente) {
    listaClientes.push(cliente);
}