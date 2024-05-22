function fetchRandomTalk() {
    fetch('https://en.wikipedia.org/api/rest_v1/page/random/title')
    .then(response => response.json())
    .then(data => {
        const pageTitle = data.items[0].title;
        const resultElement = document.createElement('li');
        resultElement.textContent = pageTitle;
        document.getElementById('results').appendChild(resultElement);
        var linkWiki = 'https://pt.wikipedia.org/wiki/' + pageTitle;
    const objj = Object.assign(document.getElementById('results'), {
    innerHTML: '<a href=${linkWiki}></a>'});
            
    })
    .catch(error => console.error('error:', error));
}

function asdasfa() {
    

}


function showValue(){
    var rangeInput = document.getElementById("myRange");
    var value = rangeInput.value;
    document.getElementById("varhone").innerText = value;
}

function updateValue() {
     var rangeInput = document.getElementById("myRange");
     var value = rangeInput.value;
     console.log("valor:" + value)
     
    for (let i = 0; i < value; i++) {
        fetchRandomTalk();

    }
}
