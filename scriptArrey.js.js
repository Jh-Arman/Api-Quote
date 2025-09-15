const randomQuote = [
    'Quality is not an act,it is a habit',

    'Believe in yourself! Have Faith in your abilities!Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',

    'Life is 10% what happens to you and 90% how you react to it,',

    'If you are going through hell,keep going.',

    'Ever tried.Ever failed.No matter.Try Again.Fail again.Fail better.',

    'With the new day comes new strength and new thoughts.',
    
];
const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');

function autoquote (){
const qouteIndex = Math.floor(Math.random()*6);
//console.log(qouteIndex);
quoteElement.textContent = randomQuote[qouteIndex];


}
autoquote();
button.addEventListener('click',autoquote);