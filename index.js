//Запрашивает имя пользователя
// function recursivePrompt() {
//   let userName = prompt("Как вас зовут?");
    
//     if (userName === null || userName === "") {
//       recursivePrompt();
//     } else {
//       changeUserName(userName);
//     }
//   }

//   function changeUserName(userName){
//     document.getElementById("user__name").textContent = userName;
// }
//   recursivePrompt();

//Добавляет задачу 
function addTask(){
  const input=document.getElementById("input__text");
  const text = document.getElementById("input__text").value;    //получаем значение из поля ввода задачи
  if(text.trim().length === 0){                                 //проверка если поле Input пустое
    input.style.border="1px solid red";
  }
  else{
    input.style.border="initial";
    const taskList=document.getElementById("task__list");
    const newTask= document.createElement('div');
    newTask.className="task__list__item";      
    newTask.innerHTML=text;
    
    const taskEdit=document.createElement('button');
    taskEdit.className="task__button__edit";
    taskEdit.innerHTML="Edit";
    const taskRemove=document.createElement('button');
    taskRemove.className="task__button__remove";
    taskRemove.innerHTML="Remove";

    taskList.append(newTask);
    newTask.append(taskEdit);
    newTask.append(taskRemove);
  }

}

