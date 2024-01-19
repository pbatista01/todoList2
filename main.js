const btnAdd = document.querySelector(".btn-add");
const todoList = document.querySelector(".todo-list");

btnAdd.addEventListener("click", addItemToList);


function addItemToList(){
  const itemContainer = document.createElement("div")
  itemContainer.classList.add("item-container");
    
   const item = document.createElement("div");
  item.classList.add("item-list");
 
  const input = document.querySelector(".list-item");
  
  const btnEliminar = document.createElement("a");
  btnEliminar.textContent = "X";
  btnEliminar.classList.add("btn-remove");
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
        item.parentNode.removeChild(item);
        btnEliminar.parentNode.removeChild(btnEliminar);
  }
 }
