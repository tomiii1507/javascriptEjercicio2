const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//PIZZAS CON ID IMPAR//

// function mostrarpizzasImpares(array) {
//   let resultado = [];
//   array.forEach((pizza) => {
//     if (pizza.id % 2 !== 0) {
//       resultado.push(`La ${pizza.nombre} es impar y su id es el ${pizza.id}`);
//     }
//   });
//   console.log(resultado.join(", ") + ".");
// }
// mostrarpizzasImpares(pizzas);

const pizzaImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
const nombreyPrecio = [];
pizzaImpar.forEach((pizza) => {
  nombreyPrecio.push(`${pizza.nombre} ${pizza.precio}`);
});

console.log(`Las pizzas con id impar son: ${nombreyPrecio.join(", ") + "."}`);

//PIZZAS CON VALOR MENOR A $600//
console.log("Existe alguna pizza con valor menor a 600?");
function responderPregunta(array) {
  array.forEach((pizza) => {
    if (pizza.precio < 600) {
      console.log(
        `Si, la pizza con valor menor a $600 es la ${pizza.nombre} con un valor de $${pizza.precio}.`
      );
    }
  });
}
responderPregunta(pizzas);

//CADA PIZZA CON SU PRECIO//
function todaslasPizzas(array) {
  let pizzasconPrecio = [];
  array.forEach((pizza) => {
    pizzasconPrecio.push(
      `${pizza.nombre.charAt(0).toUpperCase() + pizza.nombre.slice(1)} $ ${
        pizza.precio
      }`
    );
  });
  console.log(
    `las pizzas que hay en el menu son: ${pizzasconPrecio.join(", ") + "."} `
  );
}
todaslasPizzas(pizzas);

function todoslosIngredientes(array) {
  // const ingredientes = [];
  array.forEach((pizza) => {
    console.log(
      `${pizza.nombre.charAt(0).toUpperCase() + pizza.nombre.slice(1)}: ${
        pizza.ingredientes + "."
      }`
    );
  });
}

todoslosIngredientes(pizzas);
