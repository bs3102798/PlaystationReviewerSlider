const items = [
    { name: 'uncharted', url: '../searchHtml/uncharted.html' },
    { name: 'unchartedLostLegcy', url: '../searchHtml/unchartedLostLegcy.html' },
    { name: 'RachedandClank', url: '../searchHtml/Ratched&CLank.html' },
    { name: 'Diablo', url: '../searchHtml/Diablo.html' },
    { name: 'GodOfWar', url: '' },


    { name: 'Horizon', url: '../searchHtml/Horizon.html' },

];

const params = new URLSearchParams(window.location.search);
const query = params.get('query').toLowerCase();
const resultsCOntainer = document.getElementById('results');

//const filteredItems = items.filter(item => item.toLowerCase().includes(query));

const matchingItem = items.find(item => item.name.toLowerCase() === query)

if (matchingItem) {
    window.location.href = matchingItem.url
}
//      {
//     filteredItems.forEach(item => {
//         const itemElement = document.createElement('div');
//         itemElement.textContent = item;
//         resultsCOntainer.appendChild(itemElement);
//     })
// }
else {
    resultsCOntainer.textContent = 'Sorry, what you searched for cannot be found.'
}