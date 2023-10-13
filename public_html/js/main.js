const adviceNumber = document.querySelector('#advice-number');
const adviceQuote = document.querySelector('#advice-quote');
const apiLink = 'https://api.adviceslip.com/advice';

function fetchAPI(){
    fetch(apiLink) .then(data => {
        return data.json()
    }) .then(res => {
        generateQuote(res);
    }) .catch(error => {
        console.error(error);
    })
}

function generateQuote(res) {
    adviceNumber.innerHTML = res.slip.id;
    adviceQuote.innerHTML = res.slip.advice;
}