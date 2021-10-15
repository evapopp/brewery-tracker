const fetch = require('node-fetch')

exports.handler = async function (event) {
    const city = event.queryStringParameters.city;
    const breweries = `https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=50`

    const response = await fetch(breweries)
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}


