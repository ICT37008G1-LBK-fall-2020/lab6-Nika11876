function addToList() {
  var list = document.body.querySelector("#student-list");

  while(true) {
    var input = prompt("Input student name", "");
    var li = document.createElement("li");
    
    if (input.length === 0) {
      break;
    } else {
      li.innerHTML = input;
      list.appendChild(li);
    }
  }
}

addToList();
