const numeros = [1, 2, 3, 4, 5, 6]
var x = 0
var c = 0
var a = 1
while(c>5){
    if(numeros[x] < numeros[x+a]){
        x = x + a
    }
    else{
        a++
    }
    c++
}
console.log(numeros[x])
