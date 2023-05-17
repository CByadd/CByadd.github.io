const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask(){
    if(inputBox.value === ''){
        alert("you must write something");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savetData();
}


listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classlist.toggle("checked");
        savetData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savetData();
    }
}, false);


inputBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { //13 is the code for enter
      event.preventDefault();
      addtask();}
    });

function savetData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();