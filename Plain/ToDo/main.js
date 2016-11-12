function AddTodo() {
  var div1 = document.getElementById("div1");
  var input = document.getElementById("InputBar");
  var inputV = document.getElementById("InputBar").value;
  var para = document.createElement("p");
  var t = document.createTextNode(inputV);

  para.appendChild(t)
  document.body.appendChild(para);
}
