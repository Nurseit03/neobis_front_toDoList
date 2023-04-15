//Запрашивает имя пользователя
function recursivePrompt() {
  let userName = prompt("Как вас зовут?");
    
    if (userName === null || userName === "") {
      recursivePrompt();
    } else {
      changeUserName(userName);
    }
  }

  function changeUserName(userName){
    document.getElementById("user__name").textContent = userName;
}
  recursivePrompt();



function addTask() {
  const category = document.querySelector('input[name="purpose"]:checked');     // Получаем значение выбранной категории

  if (category === null) {                         // Проверяем, что хотя бы одна категория выбрана                       
    alert('Please select a category');
    return;
  }

  const input = document.getElementById("input__text");
  const text = document.getElementById("input__text").value.trim(); 
  if (text.length === 0) {                                     // Проверяем на пустоту строки
    input.style.border = "1px solid red";
  } else {
    input.style.border = "initial";
    const taskList = document.getElementById("task__list");
    const newTask = document.createElement("div");
    newTask.className = "task__list__item";
    newTask.innerHTML = text;

    const taskButtons = document.createElement("div");
    taskButtons.className = "task__buttons";

    const taskEdit = document.createElement("button");        //Создаем EDIT кнопку
    taskEdit.classList.add("task__button__edit");
    taskEdit.innerHTML = "Edit";
    taskButtons.appendChild(taskEdit);
    taskEdit.onclick = function () {
            const taskItem = this.parentNode.parentNode;           
            const taskText = taskItem.firstChild;   
          
            //Создаем INPUT для ввода нового текста задания
            const taskInput = document.createElement("input");
            taskInput.type = "text";
            taskInput.className = "task__input";
            taskInput.value = taskText.textContent;
            taskItem.insertBefore(taskInput, taskText);
            taskItem.removeChild(taskText);
          
            //Создание кнопки SAVE
            const taskSave = document.createElement("button");
            taskSave.className = "task__button__save";
            taskSave.innerHTML = "Save";
            taskEdit.replaceWith(taskSave);
          
            // Добавляем обработчик событий для кнопки SAVE
            taskSave.onclick = function () {
              const newText = taskInput.value.trim();
              if (newText !== "") {
                // Заменяем на новый текст
                const newTaskText = document.createElement("div");
                newTaskText.textContent = newText;
                taskItem.insertBefore(newTaskText, taskInput);
                taskItem.removeChild(taskInput);
                taskSave.replaceWith(taskEdit);
              }
            };
    };

    const taskRemove = document.createElement("button");       //Создаем REMOVE кнопку
    taskRemove.classList.add("task__button__remove");
    taskRemove.innerHTML = "Remove";
    taskRemove.onclick = function () {
      const taskItem = this.parentNode.parentNode;             // ищем родительский элемент списка задач
      taskList.removeChild(taskItem);
    };
    taskButtons.appendChild(taskRemove);

    newTask.appendChild(taskButtons);

    const pickBusiness = document.getElementById("pick__category__business");
    const pickPersonal = document.getElementById("pick__category__personal");

    if (pickBusiness.checked) {                                 // соответствующий цвет задачи
      newTask.classList.add("task__list__item--business");
    } else if (pickPersonal.checked) {
      newTask.classList.add("task__list__item--personal");
    }

    taskList.appendChild(newTask);
    input.value = "";                                           // очищаем INPUT 
    
  }
}





