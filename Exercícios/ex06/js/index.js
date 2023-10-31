var divdin = document.getElementById('din')

divdin.addEventListener('click', clickdin)
divdin.addEventListener('mouseenter', mouseenterdin)
divdin.addEventListener('mouseout', mouseoutdin)
divdin.addEventListener('dblclick', dblclickdin)

function clickdin() {
    divdin.style.backgroundColor = 'black'
    divdin.style.color = 'white'
}

function dblclickdin() {
    divdin.style.backgroundColor = 'white'
    divdin.style.color = 'black'
}

function mouseenterdin() {
    divdin.style.backgroundColor = '#00000094'
}

function mouseoutdin() {
    divdin.style.backgroundColor = 'azure'
    divdin.style.color = 'black'
}