// CEL: stworzyć generyczna generyczna metode pobierania danych ze Swagger API

export const fetchData = async (url) => {
    // podstawowa funkcja JS do pobierania danych
    const response = await fetch(url);
    return response.json();
}

// const dataTests = {
//  "title": "string",
//  "note": "string",
//  "author": "string"
// }



export const sendData = async (url, data, methodParam = "POST") => {

    return new Promise(async (resolve, reject) => {
    const options = {
        method: methodParam,
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, options);
    //return response.json();
    if(response.status === 200) {
        resolve(response.json())
    } else {
        const json = await response.json()
        reject(json.message)
    }
})
}

// sendData(url, [], "DELETE") //usunięcie danych
// sendData(url, data); // wysyłanie danych

// użyj url localhost:3333/api/todo