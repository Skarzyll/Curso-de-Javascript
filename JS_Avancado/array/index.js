/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

/* const newarray = array.map(item => {
    if (item % 2 == 0) {
        return item * 2
    } else {
        return item * 10 
    }
}) */

/* const newarray = array
.filter(item => item % 2 != 0) //Filtrar itens que NAO SAO divisiveis por 2 ou seja, impares
.map(item => item * 10) //Mapear ou retornar os itens impares mutiplicados por 10
*/

//const newarray = array.some(item => typeof item == 'String') //Se um elemento no array eh string
//const newarray = array.every(item => typeof item == 'number') // se todos sao numbers

//const newarray = array.find(item => item % 2 == 0) //Retornar o PRIMEIRO item par
//const newarray = array.findIndex(item => item % 2 == 0) //Retornar o INDICE do PRIMEIRO item par

/* const expoent = array.reduce((acc, item) => {
    return acc * item
}, 1)

console.log(expoent); */

function a (...arguments) {
    return arguments.reduce((a, b) => a += b )
}

console.log(a(1, 2, 3, 4));
