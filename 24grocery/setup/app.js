// ****** SELECT ITEMS **********
const alertContent = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const grocerylist = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option

let editElement;
let editFlag = false;
let editID="";

// ****** EVENT LISTENERS **********
// submit form 
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
// load items
window.addEventListener("DOMContentLoaded", setupItems);


// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString(); // cheating: just creating unique ids using date time

    // if (value){
    //     console.log("true, not empty")                       
    // }

    if (value && !editFlag){
        // console.log("insert")
        createListItems(id, value)
        // show alert
        displayAlert(`${value} added !`, "success");    
        // show container 
        container.classList.add("show-container");

        addToLocalStorage(id, value);
        setBacktoDefault();

    }
    else if (value && editFlag){  
        editElement.innerHTML = value;
        displayAlert(`${value} changed !`, "success");
        // edit local storage 
        editLocalStorage(editID, value);

        setBacktoDefault();

        // console.log("editing")
    }
    else {
        displayAlert("Please enter something", "danger");
    }

}

//deleteItem
function deleteItem(e){
    const myelement = e.currentTarget.parentElement.parentElement;
    const id = myelement.dataset.id;
    // console.log(myelement);
    grocerylist.removeChild(myelement);
    if (grocerylist.children.length === 0){
        container.classList.remove("show-container");
    }

    displayAlert("removed !", "danger");
    setBacktoDefault();

    // remove from local storage
    removeFromLocalStorage(id);
}

// editItem
function editItem(e){
    const myelement = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // console.log(editElement )
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = myelement.dataset.id;
    submitBtn.textContent= "edit";
       

}

// clear items
function clearItems(e){
    const items = document.querySelectorAll(".grocery-item");

    if (items.length > 0){
        items.forEach(function(item){
            grocerylist.removeChild(item);
        });                     
    }
    container.classList.remove("show-container");
    displayAlert("cleared...", "danger");
    setBacktoDefault();
    localStorage.removeItem('groceryList');
}

function displayAlert(alertText, action){
    alertContent.textContent = alertText;
    alertContent.classList.add(`alert-${action}`);

    // remove alert

    setTimeout(function() {
        alertContent.textContent = "";
        alertContent.classList.remove(`alert-${action}`);
    }, 2000);
}
// set back to default 
function setBacktoDefault(){
    grocery.value = "";
    editFlag = false;
    editID= ""
    submitBtn.textContent = "submit"

}

// ****** LOCAL STORAGE **********
function editLocalStorage(editID, newValue){
    let items = getFromLocalStorage();
    items = items.map(function(myitem){
        if (myitem.id === editID){
            myitem.value = newValue
        }
        return myitem;
    });                             

    localStorage.setItem("groceryList", JSON.stringify(items));
                        
}               
function removeFromLocalStorage(id){
    let items = getFromLocalStorage();
    items = items.filter(function(item){
        if (item.id !== id){
            return item;
        }

    }); 
    localStorage.setItem("groceryList", JSON.stringify(items));

}
function addToLocalStorage(id, value){
    const grocery = {id: id, value: value};
    // console.log(grocery)
    // let items = localStorage.getItem("grocerylist"); // if empty returns null

    let items = getFromLocalStorage();
    items.push(grocery);
    localStorage.setItem("groceryList", JSON.stringify(items));
    // console.log(items);
}

function getFromLocalStorage(){
    return localStorage.getItem("groceryList")?JSON.parse(localStorage.getItem("groceryList")):[];
}


// availalble by default in js: local storage api --> inspect -> application -> local storage

/*
// set item
localStorage.setItem("orange", JSON.stringify(["green", "orangish"]));
// getting the item
var allOrages = JSON.parse(localStorage.getItem("orange"));
console.log(allOrages); 
// remove from storage
localStorage.removeItem("orange");  
*/    

// ****** SETUP ITEMS **********
function setupItems(e){
    let items = getFromLocalStorage();
    if (items.length > 0){
        items.forEach(function(item){
            createListItems(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItems(id, value ){
    // create element
    const element = document.createElement("article");
    // add class
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id");
    attr.value= id;
    element.setAttributeNode(attr)
    // console.log(element )
    element.innerHTML=`<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn"> 
            <i class="fas fa-trash"></i>
          </button>
        </div>`

    // now we have access to delete and edit button 
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");

    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);
        // append child
    grocerylist.append(element);
}