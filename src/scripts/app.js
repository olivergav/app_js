const url = 'http://api.nbp.pl/api/exchangerates/rates'
const urlAPI = 'http://localhost:3000/currencies'

const getDataFromAPI = async (code) => {
    const response = await fetch(`${url}/a/${code}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    });
    return response.json()
}
// getDataFromAPI('usd').then(console.log)

const getDataFromBackend = async (code) => {
    const request = await new Promise(async (resolve, reject) => {
        const response = await fetch(`${urlAPI}?code=${code}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",

            }
        });
        const data = await response.json();

        if (data.length){
            resolve(data);
        }
        reject('Something is no yes');
    })

    return request;
}

getDataFromBackend(`usd`).then(console.log)