// requerir paquete 
const fs=require('fs');
const {crearArchivo}=require('./Helpers/Multiplicar')
console.clear();


const [,,arg3='base =7']=process.argv;
const[,base]=arg3.split('=');
//arreglo para separar en 3
//console.log(process.argv);
// como podemos recibir archivos de la consola 
console.log(base);
crearArchivo(base)
.then(nombreArchivo=>console.log(nombreArchivo,'creado'))
.catch(err=>console.log(err))
