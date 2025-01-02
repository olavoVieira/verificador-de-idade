function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formularioAno = document.querySelector('#txtano')
    let resultado = document.querySelector('#resultado')

    if (Number(formularioAno.value) == 0 || Number(formularioAno.value) > ano){
        window.alert('[ERRO] Data incorreta!!!')
    }
    else {
        let formularioSex = document.getElementsByName('txtradio')
        let idade = ano - Number(formularioAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        if (formularioSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 2){
                //Bebê
                img.setAttribute('src', 'imagem/bebeHomem.png')
            }
            else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'imagem/menino.png')
            }
            else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagem/rapaz.png')
            }
            else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'imagem/homem.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'imagem/idoso.png')
            }
        }
        else if (formularioSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 2){
                //Bebê
                img.setAttribute('src', 'imagem/bebeMulher.png')
            }
            else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'imagem/menina.png')
            }
            else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagem/moça.png')
            }
            else if (idade < 60) {
                //Alduto
                img.setAttribute('src', 'imagem/mulher.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'imagem/idosa.png')
            }
        }

        resultado.innerHTML = `<p>${genero} com ${idade} anos!</p>`
        resultado.appendChild(img)
    }
}