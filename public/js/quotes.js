let exportAuth;
let exportQuote;
quoteEl = document.querySelector("");//placeholder
addFavButton = document.querySelector('');
authorEl = document.querySelector("");//placeholder
buttonEl = document.querySelector("");//placeholder

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


let peaceQ = () => {

    fetch('https://quotel-quotes.p.rapidapi.com/topic', peace)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    return response;

}

let trustQ = () => {
    fetch('https://quotel-quotes.p.rapidapi.com/topic', trust)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    return response;

    
}
 
let positiveQ = () => {
    fetch('https://quotel-quotes.p.rapidapi.com/topic', positive)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    return response;

  
}

let timeQ = () => {
    fetch('https://quotel-quotes.p.rapidapi.com/topic', time)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    return response;

}
    
let hopeQ = () => {
    fetch('https://quotel-quotes.p.rapidapi.com/topic', hope)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    return response;

}

function getRandomQuote() {
    return Math.floor(Math.random() * 25);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let quotesArray = [peaceQ, trustQ, positiveQ, hopeQ, timeQ];
let getQuoteType = () => {
    let quoteType = quotesArray(getRandomInt(5));
    return quoteType;
}
let getQuote = () => {
    let quotesArr = getQuoteType;
    let randomQuote = quotesArr(getRandomQuote);
    return randomQuote;
}

let getProperties = (steve, mary, joseph) => {
    mary = steve.quote;
    joseph = steve.name;
}


const addFav = async (event) => {
    event.preventDefault();
  
    const author = document.querySelector('').value.trim(); //placeholder
    const quote = document.querySelector('').value.trim(); //placeholder
    
  
    if (author && quote) {
      const response = await fetch('/api/favorites/add', { //placeholder
        method: 'POST',
        body: JSON.stringify({ author, quote }),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    else {
        alert('Failed to add quote');
    }
  };
  
document.addEventListener('click', addFav); //placeholder

buttonEl.addEventListener("click", function () {
    getProperties(getQuote, exportQuote, exportAuth);
    quoteEl.value = exportQuote;
    authorEl.value = exportAuth;
});

//items.properties.name.description
//items.properties.quote.description

//topics 
//time
//positive
//trust
//peace
//hope
