const popup = document.querySelector('.popup')

function showKeyCode(e) {
    var letter = e.keyCode;
 
    if (letter != 32) {
      var audio = new Audio(e.keyCode + ".wav");
      audio.play();
    } else {
      document.getElementById("TextBox1").value = "";
    }
  }

function showPopup() {
  popup.style.display = 'flex'
  popup.className = 'popup active'
}

function hidePopup() {
  popup.style.display = 'none'
  popup.className = 'popup'
}