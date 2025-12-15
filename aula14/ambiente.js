/*
EXERCÍCIO 14 - Uso do FOR

Use o for quando você sabe (ou controla) quantas vezes o código deve se repetir.
Ele é ideal para:
    contagens, 
    percorrer listas/arrays e repetições com início,
    condição e incremento bem definidos.

Regra Prática:
    Você sabe quantas vezes vai repetir? → use for
    Depende de uma condição externa?     → use while
    Tem que rodar pelo menos uma vez?    → use do...while
*/ 

//Código while
console.log('Usando While')
var c = 1
while (c <= 5) {
    console.log(`Passo ${c}`)
    c++
}  
console.log('Fim do código')
console.log('') // pular linha no terminal


//Código Do-While
console.log('Usando Do-While')
var c = 1
do  {
    console.log(c)
    c++
} while (c <=5)
console.log('Fim do código')
console.log('') // pular linha no terminal

//Código em For
console.log('Usando For')
for(var c = 1; c <= 5; c++){
    console.log(c)
}
console.log('Fim do código')
console.log('') // pular linha no terminal