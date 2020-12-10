let input = prompt("Input student ID", "");
let elem = document.body;

for(var i = 0; i < elem.children.length; i++){
    if(elem.children[i].getAttribute('data-student-id') == input){
        elem.children[i].style.backgroundColor = "green";
        break;
    }
    console.log(elem.children[i]);
}