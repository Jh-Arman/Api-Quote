const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');

const urlApi = 'https://api.api-ninjas.com/v1/quotes';
const keyApi = 'ZrBNGJ7RBCEZ6OiGNEArbA==9DdHeqZ5sDBSNADw';
const getQuote = ()=> {
    fetch(urlApi,{
        headers: { 'X-Api-Key':keyApi,},
    }).then(data => data.json()).then(item=>{
        //console.log(item[0]);
        quoteElement.textContent = item[0].quote;
        authorElement.textContent = item[0].author;
    });
};
getQuote();
button.addEventListener('click',getQuote);