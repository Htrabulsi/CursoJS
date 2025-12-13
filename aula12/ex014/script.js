function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9 // para testes, pode alterar o valor manualmente
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/foto_manha.jpg'
        document.body.style.background = '#e2cd9f'
        document.body.style.color = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/foto_tarde.jpg'
        document.body.style.background = '#b9846f' 
        document.body.style.color = '#b9846f'   
    } else {
        // BOA NOITE!
        img.src = 'imagens/foto_noite.jpg'
        document.body.style.background = '#515154'
        document.body.style.color = '#515154'
    }
}
