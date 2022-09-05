var metros = 0
const opcion = {text:''} 
switch(metros){
    case metros<=1000: opcion.text = 'La Mejor Opcion es caminar';
    break;
    case metros <= 10000: opcion.text = 'La Mejor Opcion es ir en Bicicleta';
    break;
    case metros <= 30000: opcion.text = 'La Mejor Opcion es el Colectivo';
    break;
    case metros <= 100000: opcion.text = 'La Mejor Opcion es el Auto';
    break;
    case metros > 100000: opcion.text = 'La Mejor Opcion es un Avion';
    break;
}
console.log(opcion.text);
