

const quotes = [
    { text: 'The secret to life is to love who you are.', category: 'Life' },
    { text: 'Look for opportunities in every change in your life.', category: 'Opportunity' },
    { text: 'Persist while others are quitting.', category: 'Persistence' },
    { text: 'and so on.', category: 'Misc' }
];

// console.log(quotes.length);


function showRandomQuote(){

    const index = Math.floor(Math.random() * quotes.length);

    const quoteDisplay = document.getElementById("quoteDisplay");

    quoteDisplay.innerHTML = '';

    const quote = quotes[index];

    const display = document.createElement("p");
    
    const randomQuotes = document.createTextNode(`"${quote.text}" - ${quote.category}`);
    
    display.appendChild(randomQuotes);

    quoteDisplay.appendChild(display);
}

function addQuote(){

    const newQuoteText = document.getElementById("newQuoteText").value;

    const newQuoteCategory = document.getElementById("newQuoteCategory").value;

    if (newQuoteText && newQuoteCategory) {
        quotes.push({text : newQuoteText, category : newQuoteCategory});

        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';
    }

}


const newQuote = document.getElementById('newQuote');

newQuote.addEventListener("click", showRandomQuote);
