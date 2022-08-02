let exportAuth;
let exportQuote;
quoteEl = document.querySelector("#quoteID");
buttonEl = document.querySelector("#genQuote");

const peace = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '66c5031d7dmsh6222d1ecb434a4ep12152cjsnde6bf39940b5',
		'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
	},
	body: '{"pageSize":25,"page":10,"topic":"peace"}'
};

const trust = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '66c5031d7dmsh6222d1ecb434a4ep12152cjsnde6bf39940b5',
        'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
    },
    body: '{"pageSize":25,"page":10,"topic":"trust"}'
};

const time = {
    method: 'POST',
       headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '66c5031d7dmsh6222d1ecb434a4ep12152cjsnde6bf39940b5',
        'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
    },
    body: '{"pageSize":25,"page":10,"topic":"time"}'
};

const hope = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '66c5031d7dmsh6222d1ecb434a4ep12152cjsnde6bf39940b5',
        'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
    },
    body: '{"pageSize":25,"page":10,"topic":"hope"}'
};
const positive = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '66c5031d7dmsh6222d1ecb434a4ep12152cjsnde6bf39940b5',
        'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
    },
    body: '{"pageSize":25,"page":10,"topic":"positive"}'
};


let peaceQ = async () => {

    const response = await fetch('https://quotel-quotes.p.rapidapi.com/topic', peace)
	return response.json();

}

let trustQ = async () => {
    const response = await fetch('https://quotel-quotes.p.rapidapi.com/topic', trust)
    return response.json();

    
}
 
let positiveQ = async () => {
    const response = await fetch('https://quotel-quotes.p.rapidapi.com/topic', positive);
    return response.json();


  
}

let timeQ = async () => {
    const response = await fetch('https://quotel-quotes.p.rapidapi.com/topic', time)
    return response.json();

}
    
let hopeQ = async () => {
    const response = await fetch('https://quotel-quotes.p.rapidapi.com/topic', hope)
    return response.json();

}

function getRandomQuote() {
    return Math.floor(Math.random() * 25);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let quotesArray = [peaceQ, trustQ, positiveQ, hopeQ, timeQ];
let getQuoteType = () => {
    let quoteType = quotesArray[getRandomInt(5)]();
    return quoteType;
}
let getQuote = async () => {
    let quotesArr = await getQuoteType();
    let randomQuote = quotesArr[getRandomQuote()];
    quoteEl.textContent = randomQuote.quote;
}

buttonEl.addEventListener("click", getQuote);

