const url = 'http://api.nbp.pl/api/exchangerates/rates'

const getDataFromAPI = async (code) => {
    const response = await fetch(`${url}/a/${code}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    });

    return response.json()
}

getDataFromAPI('usd').then(console.log)