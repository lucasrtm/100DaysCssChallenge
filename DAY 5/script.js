function teste(event, value) {
    var top = event.target.offsetTop - 25
    var left = event.target.offsetLeft - 6 
    document.getElementById('balao').style.display = 'block'
    document.getElementById('balao').style.top = top + 'px'
    document.getElementById('balao').style.left = left + 'px'
    document.getElementById('balao').innerText = value
}

function teste2(event) {
    document.getElementById('balao').style.display = 'none'
}