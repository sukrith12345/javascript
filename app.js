  function sub() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);

    var sub = a - b;

    document.getElementById("result").innerText = "Result: " + sub;
  }
