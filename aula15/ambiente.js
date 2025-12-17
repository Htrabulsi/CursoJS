/*   Estudo de Vetores (arrays)
console.log(num)   Mostra os elementos do arrays; linha 14
num.sort()         Embaralha os elementos do arrays; linha 16
num.push()         Insere o elemento na última posição; linha 13
num.length         Mostra quantos elementos tem no vetor - array; ex.linha 15
num.[vetor]        Mostra o valor que está no vetor [0], que é o primeiro - ex. linha 17
num.indexOf(valor) Mostra em qual vetor está o valor especificado - ex. linha 18


*/
let num = [5, 8, 2, 9, 3]
num.sort()
num.push(7)                                       
console.log(`Nosso vetor é o ${num}`)             
console.log(`O vetor tem ${num.length} posições`) 
console.log(`Agora ele vão embaralhar: ${num.sort()}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){      // O valor -1 surge quando o valor não é encontrado pelo indexOf
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}


