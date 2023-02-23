const users = [
  { nome: "Joao", mail: "joao@js.com", fone: 9999999, endereco: "rua 2" },
  { nome: "Pedro", mail: "pedro@js.com", fone: 77777777, endereco: "rua 1" },
];

const users2 = users.map((user, i) => {
  const obj = { id: i, ...user };
  return obj;
});

console.log(users2);

const users3 = users.map((user, i) => ({ id: i, ...user }));

console.log(users3)