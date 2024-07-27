

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


function createAddQuoteForm() {

    const formDiv = document.getElementById("addQuoteForm");

    const textInput = document.createElement("input");

    textInput.setAttribute("type", "text");
    textInput.setAttribute("id", "newQuoteText");
    textInput.setAttribute("placeholder", "Quote text");

    const categoryInput = document.createElement("input");
    categoryInput.setAttribute("type", "text");
    categoryInput.setAttribute("id", "newQuoteCategory");
    categoryInput.setAttribute("placeholder", "Quote category");

    const addButton = document.createElement("button");
    addButton.setAttribute("id", "addQuoteButton");
    addButton.textContent = "Add Quote";

    formDiv.appendChild(textInput);
    formDiv.appendChild(categoryInput);
    formDiv.appendChild(addButton);

    addButton.addEventListener("click", addQuote);
}


const newQuote = document.getElementById('newQuote');

newQuote.addEventListener("click", showRandomQuote);

createAddQuoteForm();