// Creating variables for the elements (inputbox,listcontainer)
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

// Define the function (add task )
function addTask(){
    // if input box is empty then show this alert
    if(inputBox.value===''){
        alert("You must write something")
    }
    else{
// once we will add anything then do this : 

// storing the element in this li variable 
        let li=document.createElement("li");
        // whatever text we will add in the input field that will be added in this li 
        li.innerHTML=inputBox.value;
        // display li 
        listContainer.appendChild(li);

        // add cross icon 
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value="";
    saveData();
}

// click function
// if we clicked on li it should add the checked class name
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // if the clicked target elemnt is span then it will delete the parent that is li element
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save the data in the local storage so that we can see our data anytime 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    
}
// Display the data
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();