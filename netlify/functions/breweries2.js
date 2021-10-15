const fetch = require('node-fetch');

// getBrewery = async function () {
//     const breweries = `https://api.openbrewerydb.org/breweries?by_city=denver&per_page=50`

//     const response = await fetch(breweries)
//     const data = await response.json()

//     return {
//         statusCode: 200,
//         body: JSON.stringify(data)
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const fetchBtn = document.getElementById('fetch-btn')
//     const responseText = document.getElementById('response-output')

//     fetchBtn.addEventListener('click', async () => {
//       const response = await fetch('/.netlify/functions/breweries')
//       .then(response => response.json())
//       console.log('response,', response)
//       console.log(response[0])
//       responseText.innerText = JSON.stringify(response)
//     })
//   })