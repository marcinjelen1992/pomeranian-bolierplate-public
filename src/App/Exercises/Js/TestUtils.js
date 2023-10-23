export function sum(a, b) {
    if(a === undefined || b === undefined) {
        return null
    }
    return a + b;
  }
  // if jest zabezpieczeniem żeby zwracało null przy braku podstawienia liczb zamiast zwracać NaN

  export function fetchData() {
    return Promise.resolve({"data":"Data from the server"})
  }

  export function fetchError() {
    return Promise.reject({"data":"Data from the server"})
  }