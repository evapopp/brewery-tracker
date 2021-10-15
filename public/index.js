let i = 0;
const fetchBtn = document.getElementById('fetch-btn')
const responseText = document.getElementById('response-output')
const cardContainerEl = document.querySelector('.card-container');


document.addEventListener('DOMContentLoaded', () => {


    fetchBtn.addEventListener('click', async () => {
      const response = await fetch('/.netlify/functions/breweries')
      .then(response => response.json())
    //   console.log('response', response)
    //   console.log(response[0].name)
    //   for(i=0; i < response.length; i++) {
    //       brewName = response[i].name
    //     console.log('in for loop', brewName)
        // responseText.innerText = brewName;
    // }
    //   console.log(brewName)
        createBrewCard(response);
        //  responseText.innerText = JSON.stringify(response)
    })
})

function createBrewCard(response) {
    function buildCard(brew){
        const brewNameEl = document.createElement('div');
        brewNameEl.classList.add('cardHeader');
        console.log(brew);
        console.log(brew.name)
        const brewName = brew.name;
        brewNameEl.innerHTML = brewName
        console.log(brewNameEl)
        // addCardEl(brew.name, brewNameEl);
        cardContainerEl.append(brewNameEl);
    }
    for (i=0; i < response.length; i++) {
        buildCard(response[i])
    }
}

// function addCardEl(brewyName, brewNameEl){

// }

