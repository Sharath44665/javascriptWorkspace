//  Javascript Nuggets
// Fetch Errors
// Only throws an error if cannot resolve.  
// Error Response still a response (400-500)

const url = 'https://www.course-api.com/react-tours-projects' // added s in the end

const getTours  = async () => {
    try {
        const response = await fetch(url)           
        // console.log(response)
        // console.log(response.ok)// false 
        if (response.ok === false){
            // to write this code, comment line 18, 19
            msgTxt = `you got error, response code "${response.status}", response text: "${response.statusText}"`;
            throw new Error(msgTxt)
        }
        const jsonData = await response.json()
        console.log(jsonData);
    } catch (error) {
        console.log(error)                  
    }
}   

const myBtn = document.querySelector(".btn");
myBtn.addEventListener('click', getTours())


