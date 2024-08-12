const items = [
    { name: ['m', 'mature', 'mature game'], url: '../searchHtml/MatureGames.html' },
    { name: ['t', 'teen', 'teen game'], url: '../searchHtml/TforTeenGames.html' },
    { name: ['e', 'everyone', 'e for everyone'], url: '../searchHtml/EforEveryone.html' }






];

const params = new URLSearchParams(window.location.search);
const query = params.get('query').toLowerCase();
const resultsCOntainer = document.getElementById('results');

//const filteredItems = items.filter(item => item.toLowerCase().includes(query));

const matchingItem = items.find(item => item.name.some(alias => alias.toLowerCase() === query)

)

if (matchingItem) {
    window.location.href = matchingItem.url
}

else {
    resultsCOntainer.textContent = 'Sorry, what you searched for cannot be found.'
}

