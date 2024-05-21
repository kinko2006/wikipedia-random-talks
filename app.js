function fetchRandomTalk() {
    fetch('https://pt.wikipedia.org/api/rest_v1/page/random/title')
    .then(response => response.json())
    .then(data => {
        const pageTitle = data.items[0].title;
        const resultElement = document.createElement('li');
        resultElement.textContent = pageTitle;
        document.getElementById('results').appendChild(resultElement);
    })
    .catch(error => console.error('error:', error));
}

function updateValue() {
    var rangeInput = document.getElementById("myRange");
    var value = rangeInput.value;
    console.log("valor:" + value)
    for (let i = 0; i < value; i++) {
        fetchRandomTalk();
    }
}

updateValue();


