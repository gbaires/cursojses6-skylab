// REST -> para pegar resto de propriedades

const usuario = {
	nome: 'Diego',
	idade: 23,
	empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

console.log(resto);

const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
	return params.reduce((total, next) => total + next);
}

function soma2(a, b, ...params) {
	return params;
}

console.log(soma(1, 3));
console.log(soma2(1, 3, 4, 4, 6, 9, 13));
