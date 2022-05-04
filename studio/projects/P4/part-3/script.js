function showKeyCode(e) {
    var letter = e.keyCode;
 
    if (letter != 32) {
      var audio = new Audio(e.keyCode + ".wav");
      audio.play();
    } else {
      document.getElementById("TextBox1").value = "";
    }
  }