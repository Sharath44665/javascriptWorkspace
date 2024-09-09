//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

// use browser

const url = 'https://www.course-api.com/react-tours-project'

// console.log(fetch(url)) //  Promise { <pending> }

fetch(url)
    .then((resp) => resp.json() )
    .then((data) => console.log(data)) // prints json data /api data
    .catch((err) => console.log(err))
