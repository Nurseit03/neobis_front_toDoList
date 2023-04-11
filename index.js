function changeUserName(){
    document.getElementById("user__name").textContent = userName;
}
function recursivePrompt() {
    let userName = prompt("Как вас зовут?");
    
    if (userName === null || userName === "") {
      recursivePrompt();
    } else {
      changeUserName();
    }
  }
  
  recursivePrompt();