let nota1, nota2, nota3;
let nome;

let result;

function calculaNota(x,y,z) {

    let result = 0;

    temp = parseFloat(x) + parseFloat(y) + parseFloat(x);

    result =   temp / 3;

    return result;
    
}

nome = prompt('Digite o nome do aluno: ');

nota1 = Number(prompt('Digite a primeira nota: '));
nota2 = Number(prompt('Digite a segunda nota: '));
nota3 = Number(prompt('Digite a terceira nota: '));


result = calculaNota(nota1, nota2, nota3)

console.log(`A media do ${nome} eh : ${result}!!`);