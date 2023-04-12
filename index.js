
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