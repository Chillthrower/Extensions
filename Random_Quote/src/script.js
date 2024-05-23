document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(quoteData => {
            const quoteText = quoteData.content;
            const quoteElement = document.getElementById('quoteElement');
            quoteElement.innerHTML = quoteText;
        })
        .catch(error => console.error('Error fetching the quote:', error));
});
