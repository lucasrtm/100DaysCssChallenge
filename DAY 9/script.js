

function criargota(){
    var aleatorio = Math.ceil(Math.random()*(25-45)+45);
    var tamanho = aleatorio + 'px';
    var img = document.createElement('img');
    img.src = 'gota.png'
    img.className = 'gota'
    img.style.width = tamanho
    img.style.width = tamanho
    img.style.left = Math.ceil(Math.random()*(0-400)+400) + 'px'
    img.style.transitionDelay = Math.ceil(Math.random()*(1-3)+3) + 's'
    img.style.opacity = Math.random()
    $('#pai')[0].appendChild(img)
}
setInterval(function(){criargota()},70)
// criargota()
// criargota()
// criargota()
// criargota()
// criargota()
// criargota()
// criargota()
// criargota()

    var teste = document.createElement('style')
    teste.type = 'text/css'
    teste.sheet.insertRule()
