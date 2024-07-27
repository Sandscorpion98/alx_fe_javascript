

let storedQuotes = window.localStorage.getItem('quotes');

const quotes = storedQuotes ? JSON.parse(storedQuotes) : [
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

    window.sessionStorage.setItem('lastQuote', JSON.stringify(quote));
}

function displayLastQuote() {
    const lastQuote = JSON.parse(window.sessionStorage.getItem('lastQuote'));

    if (lastQuote) {
        const quoteDisplay = document.getElementById("quoteDisplay");
        quoteDisplay.innerHTML = '';

        const display = document.createElement("p");
        const quoteText = document.createTextNode(`"${lastQuote.text}" - ${lastQuote.category}`);
        display.appendChild(quoteText);
        quoteDisplay.appendChild(display);
    }
}

function addQuote(){

    const newQuoteText = document.getElementById("newQuoteText").value;

    const newQuoteCategory = document.getElementById("newQuoteCategory").value;

    if (newQuoteText && newQuoteCategory) {
        quotes.push({text : newQuoteText, category : newQuoteCategory});

        window.localStorage.setItem('quotes', JSON.stringify(quotes));

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

function importFile() {
    const importFileContainer = document.getElementById("importFileContainer");
    importFileContainer.innerHTML = "";

    const importFileInput = document.createElement("input");
    importFileInput.setAttribute("type", "file");
    importFileInput.setAttribute("id", "importFile");
    importFileInput.setAttribute("accept", ".json");

    importFileInput.addEventListener("change", importFromJsonFile);

    importFileContainer.appendChild(importFileInput);
}

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        const importedQuotes = JSON.parse(event.target.result);
        quotes.push(...importedQuotes);
        window.localStorage.setItem('quotes', JSON.stringify(quotes));
        alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
}

function exportQuotes() {
    const quotesBlob = new Blob([JSON.stringify(quotes, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(quotesBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up after download
}

const newQuote = document.getElementById('newQuote');

document.getElementById('exportQuotes').addEventListener("click", exportQuotes);

newQuote.addEventListener("click", showRandomQuote);

createAddQuoteForm();

displayLastQuote();

importFile();