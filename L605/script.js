var students = [
  { FirstName: "დავით", LastName: "წულუკიძე", PersonalNumber: "123" },
  { FirstName: "მიხილ", LastName: "კაპანაძე", PersonalNumber: "124" },
  { FirstName: "სოფო", LastName: "დოღონაძე", PersonalNumber: "125" },
];

function displayStudentsTable(studentList) {
  var container = document.body.querySelector("#student-list");
  var keys = Object.keys(studentList[0]);
  var table = document.createElement("table");
  var trh = document.createElement("tr");

  container.appendChild(table);
  table.append(trh);
  for (var i = 0; i < keys.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = keys[i];
    trh.appendChild(th);
  }
  for (var i = 0; i < studentList.length; i++) {
    var trd = document.createElement("tr");
    table.append(trd);
    for (var j = 0; j < keys.length; j++) {
      var td = document.createElement("td");
      td.innerHTML = studentList[i][keys[j]];
      trd.appendChild(td);
    }
  }
}

displayStudentsTable(students);
