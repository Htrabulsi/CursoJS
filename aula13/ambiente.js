// Apertar F8 para rodar o código no terminal do node.js.


// Aula 13 - Estruturas de Repetição - while e do-while
/* Estrutura de repetição em loop usando while, com teste logico no início.
A condição é testada antes de executar o bloco.
Se a condição já for falsa, o bloco não executa nenhuma vez.

Quando usar:
Quando não há garantia de que o código precise rodar ao menos uma vez
Quando a execução depende totalmente da condição inicial
*/

console.log('Contagem de 1 a 6 usando while:')
var c = 1
while (c <= 6) {
    console.log(`Passos ${c}`)  
    c++
}  
console.log('Fim do 1º exemplo: While!')
console.log("") // Apenas para pular linha no terminal


/* Estrutura de repetição em loop usando do-while. com teste lógico no final.
O bloco executa pelo menos uma vez, pois a condição só é testada depois.

Quando usar:
Quando o código precisa rodar ao menos uma vez
Muito comum em:
    Menus
    Leitura de dados do usuário
    Validação de entrada
*/
console.log('Contagem de 1 a 6 usando do-while:')
var d = 1
do {
    console.log(`Passos ${d}`)
    d++
} while (d <= 6)
console.log('Fim do 2º exemplo: Do-While!')
console.log(""); // Apenas para pular linha no terminal

