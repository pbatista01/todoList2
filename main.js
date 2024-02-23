const btnAdd = document.querySelector(".btn-add");
const todoList = document.querySelector(".todo-list");
const modeIcon = document.querySelector(".mode-icon");

btnAdd.addEventListener("click", addItemToList);
modeIcon.addEventListener("click", toggleMode);

function addItemToList(){
  const itemContainer = document.createElement("div")
  itemContainer.classList.add("item-container");
    
   const item = document.createElement("div");
  item.classList.add("item-list");
 
  const input = document.querySelector(".list-item");
  
  const btnEliminar = document.createElement("a");
  
  btnEliminar.classList.add("btn-remove");
  
  const iconTrash = document.createElement("i");
  
  iconTrash.classList.add("fa-solid");
  
  iconTrash.classList.add("fa-trash");
  
  
  btnEliminar.appendChild(iconTrash);
  
  btnEliminar.onclick = function() {
        eraseATodo(item, btnEliminar);
      };
  
  
 if(input.value===""){
    alert("Ingrese informacion!");
    input.focus();
  }else{
     itemContainer.appendChild(item);
  itemContainer.appendChild(btnEliminar);
  todoList.appendChild(itemContainer);
    item.textContent = input.value;
    input.value="";
  }
}

function eraseATodo(item, btnEliminar){
  if(item && item.parentNode && btnEliminar && btnEliminar.parentNode){
         item.classList.add("removed-item");
         btnEliminar.classList.add("removed-item");
    setTimeout(() => {
      item.parentNode.removeChild(item); 
      btnEliminar.parentNode.removeChild(btnEliminar);
    },1000);   
        
  }
 }

function toggleMode(modeIcon){
  const container = document.querySelector(".container");
  const body = document.body;
  const button = document.querySelector("button");
  container.classList.toggle("light-mode");
  body.classList.toggle("light-mode");
  modeIcon.className ="fa";
  
  modeIcon.classList.toggle("fa-sun");
  button.clasasList.toggle("light-mode");
}

