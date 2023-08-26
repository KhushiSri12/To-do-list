//we need to add tasks here
const taskList=document.getElementById("task-list");

function addTask(){
    const taskInput=document.getElementById("task_input");
    if(taskInput=== ''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=taskInput.value;
        taskList.appendChild(li);
        let span=document.createElement("span");//span is for remove task icon
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
        
    }
    taskInput.value=""; //to get blank input space everytime
    saveData();//saves data whenever any changes are there
}

//adding and removing logic
taskList.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//even after refreshing data will remain in browser
function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}

//showingthe saved data
function showData(){
    taskList.innerHTML=localStorage.getItem("data");
}
showData();