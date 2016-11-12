function adding() {
  var addingone = document.getElementById("AddOne").value
  var addingtwo = document.getElementById("AddTwo").value
  var sum = +addingone + +addingtwo
  document.getElementById("AddSum").innerHTML = addingone + " + " + addingtwo + " = " + sum
}

function subtracting() {
  var MinusOne = document.getElementById("MinOne").value
  var MinusTwo = document.getElementById("MinTwo").value
  var diff = +MinusOne - +MinusTwo
  document.getElementById("MinDiff").innerHTML = MinusOne + " - " + MinusTwo + " = " + diff
}
