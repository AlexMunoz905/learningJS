function adding() {
  var addingone = document.getElementById("AddOne").value
  var addingtwo = document.getElementById("AddTwo").value
  var sum = +addingone + +addingtwo
  document.getElementById("AnsDiv").innerHTML = addingone + " + " + addingtwo + " = " + sum
}
function subtracting() {
  var MinusOne = document.getElementById("AddOne").value
  var MinusTwo = document.getElementById("AddTwo").value
  var diff = +MinusOne - +MinusTwo
  document.getElementById("AnsDiv").innerHTML = MinusOne + " - " + MinusTwo + " = " + diff
}
