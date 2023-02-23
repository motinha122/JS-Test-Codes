function criaObjeto() {
    let obj = {};
    return obj;
}

let pessoa1 = criaObjeto();
let pessoa2 = criaObjeto();

pessoa1.nome = 'Xamp';
pessoa2.nome = 'Son';

// console.log(pessoa1);
// console.log(pessoa2);

function fabricarPessoa(nome,sobrenome){
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;

    function nomeCompleto(){
        return `${pessoa.nome} ${pessoa.sobrenome}`;
    }

    pessoa.nomeCompleto = nomeCompleto;
    
    return pessoa;
} 

let pessoa3 = fabricarPessoa('Xamp','Son');

console.log(pessoa3);
console.log(pessoa3.nomeCompleto());