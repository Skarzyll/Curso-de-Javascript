const id = document.getElementById('adviceid')
const text = document.getElementById('advicetext')
const btn = document.getElementById('btn')

btn?.addEventListener("click", function(){
    change()
})

window.onload = change

function change() {
    /* fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        id.textContent = data.id;
        text.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    }); */

    const advice = new XMLHttpRequest();

    advice.onload = function(){
        const data = JSON.parse(advice.responseText)
        const ad = data.slip

        id.textContent = ad.id
        text.textContent = ad.advice
    }

    advice.open("GET", "https://api.adviceslip.com/advice")
    advice.send();
}

