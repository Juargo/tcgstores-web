let API_URL = "http://localhost:3001"

if(process.env.REACT_APP_ENV==="development"){
    API_URL = "http://localhost:3001"
}

if(process.env.REACT_APP_ENV==="production"){
    API_URL = "API"
}

export {API_URL}