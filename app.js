function fetchWiki() {
    return fetch('https://en.wikipedia.org/api/rest_v1/page/random/title')
        .then(response => response.json())
        .then(data => {
            const pageTitle = data.items[0].title;
            const linkWiki = 'https://en.wikipedia.org/wiki/' + pageTitle;

            const element = document.createElement('div');
            element.classList.add('wiki');
            element.innerHTML = `
            <ul>
                <a href="${linkWiki}">
                    <h1>${pageTitle}</h1>
                </a> 
            </ul>
            `;
            
            return element;
        });
}

function updateValue() {
    const rangeInput = document.getElementById("myRange");
    const value = rangeInput.value;
    console.log("valor:" + value);

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Limpar o conteúdo anterior

    const fetchPromises = [];
    for (let i = 0; i < value; i++) {
        fetchPromises.push(fetchWiki());
    }

    Promise.all(fetchPromises)
        .then(elements => {
            elements.forEach(element => {
                resultsContainer.appendChild(element);
            });
        })
        .catch(error => {
            console.error('error:', error);
        });
}

function showValue() {
    const rangeInput = document.getElementById("myRange");
    const value = rangeInput.value;
    document.getElementById("varhone").innerText = value;
}

