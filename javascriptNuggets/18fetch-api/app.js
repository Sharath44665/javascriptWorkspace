//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

// improved = use browser 

const url = 'https://www.course-api.com/react-tours-project'


const getJsonData = async () => {
    try {
        const resp = await fetch(url)
        const jsonData = await resp.json()
        // console.log(jsonData);  // prints json data
        return jsonData;
    }
    catch(err){
        console.log(err)
    }
}

console.log(getJsonData()); // Promise {<pending>}

