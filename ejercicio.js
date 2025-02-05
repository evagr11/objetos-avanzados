//const lista = ["manzana", "pera", "platano", "cereza"]

/* utilizando metodos de lista y funciones, devuelve un string que capitalice 
cada palabra y luego las junte en un string
pej:
ManzanaPeraPlatanoCereza
*/
const lista = ["manzana", "pera", "platano", "cereza"]
let resultado = '';

lista.forEach(palabra => {
  resultado += palabra.charAt(0).toUpperCase() + palabra.slice(1);
});

console.log(resultado); 


//const string = "hola mundo"
/* utilizando metodos de lista y strings, devuelve el anterior string alternando
entre minusculas y mayusculas
pej:
hOlA mUnDo
*/
const string = "hola mundo";
let resultado1 = '';
let mayuscula = false; 

string.split('').forEach((letra) => {
  if (mayuscula) {
    resultado1 += letra.toUpperCase(); // Mayúscula
  } else {
    resultado1 += letra.toLowerCase(); // Minúscula
  }
  mayuscula = !mayuscula; 
});

console.log(resultado1); 

// EXTRA: Haz algo interesante con metodos de strings, arrays, numeros, whatever
