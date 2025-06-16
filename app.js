

// EJERSICIO 1
 // Crear un array de frutas y agregarle al final "UVA"

 const frutas =["manzana", "platano", "naranja"];

 console.log("el array original es de");

 frutas.push("uva");

 console.log("El array modificado es:" + frutas);

 // para eliminar el ultimo elemento utilizamos pop

 frutas.pop();

 console.log("el array despues de eliminar el ultimo elemento es :" + frutas);


 // EJERSICIO 2
 // Crear um array y multiplicarlo por 2 con .map()

 const numeros =[1,2,3,4,5];

 console.log("El arrar original es " + numeros);

 const numerosMultiplicados = numeros.map((num => {
    return num *2;
 }));

 console.log("El array modificado es " + numerosMultiplicados);