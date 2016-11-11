function login() {
  var PwdInput = document.getElementById("pwd").value
  pins = ["munozalex", "munoz", "888974"]
  var privatepage = "<a href='secret/secret.html'>Secret Page</a>"

  if (PwdInput == pins[0] || PwdInput == pins[1] || PwdInput == pins[2]) {
    document.getElementById("debug").innerHTML = privatepage
  } else {
    document.getElementById("debug").innerHTML = "Password Wrong"
  }
}
