function mouseOver(event, value) {
    const balloon = document.getElementById('balloon')
    const top = event.target.offsetTop - 25;
    const left = event.target.offsetLeft - 6;
    balloon.style.display = 'block';
    balloon.style.top = top + 'px';
    balloon.style.left = left + 'px';
    balloon.innerText = value;
}

function mouseOut() {
    document.getElementById('balloon').style.display = 'none';
}