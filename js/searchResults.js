const items = [
    // { name: 'uncharted', url: '' },
    // { name: 'unchartedLostLegcy', url: '' },
    // { name: 'RachedandClank', url: '' },
    // { name: 'Diablo', url: '' },
    // { name: 'GodOfWar', url: '' },
    // { name: 'Horizon' , url: 'Horizon.html' },
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",

];

const params = new URLSearchParams(window.location.search);
const query = params.get('query') ? params.get('query').toLowerCase() : '';
const resultsCOntainer = document.getElementById('results');

const filteredItems = items.filter(item => item.toLowerCase().includes(query));

if (filteredItems.length > 0) {
    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        resultsCOntainer.appendChild(itemElement);
    })
} else {
    resultsCOntainer.textContent = 'Sorry, what you searched for cannot be found.'
}