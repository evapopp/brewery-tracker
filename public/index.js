let i = 0;
const fetchBtn = document.getElementById('fetch-btn')
const responseText = document.getElementById('response-output')
const cardContainerEl = document.querySelector('.card-container');
const breweryEl = document.querySelector('.selectedBrew');
const brewNameEl = document.querySelector('.breweryName');
const brewStreetEl = document.querySelector('.breweryStreet');
const brewNumberEl = document.querySelector('.breweryNumber');
const brewWebsiteEl = document.querySelector('.breweryWebsite');    
const enjoyEl = document.querySelector('.enjoy');  

document.addEventListener('DOMContentLoaded', () => {
    fetchBtn.addEventListener('click', async () => {
        const city = document.getElementById('city-name');
        const response = await fetch(`/.netlify/functions/breweries?city=${city.value}`)
        .then(response => response.json())
        listBreweries(response);
    })
})

function listBreweries(response) {
    function buildBrewList(brew){
        const brewNameList = document.createElement('div');
        brewNameList.classList.add('brew.id');
        
        const brewName = brew.name;
        const brewStreet = brew.street;
        const brewCity = brew.city;
        const brewState = brew.state;
        const brewNumber = brew.phone;
        const brewWebsite = brew.website_url;

        brewNameList.innerHTML = brewName
        cardContainerEl.append(brewNameList);

        brewNameList.addEventListener('click', async (event) => {
            const test = await event;
            cardContainerEl.remove();

            brewNameEl.innerHTML = brewName;
            brewStreetEl.innerHTML = brewStreet + ' ' + brewCity + ', ' + brewState;
            brewNumberEl.innerHTML = brewNumber;
            brewWebsiteEl.innerHTML = brewWebsite;
            brewWebsiteEl.setAttribute('href', `${brewWebsite}`);
            enjoyEl.innerHTML = `Hope you enjoy the brews at ${brewName}!`;
        });
    }

    for (i=0; i < response.length; i++) {
        buildBrewList(response[i])
    }
}





