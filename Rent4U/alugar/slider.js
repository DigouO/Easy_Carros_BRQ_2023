window.onload = slider(1);

var num = 1;

function slider(n) {
  document.getElementById("images").style.backgroundImage =
    "url(../../assets/images/slide" + n + ".jpg)";
}
function back() {
  if (num > 1) {
    num--;
    slider(num);
  } else {
    num = 3;
    slider(3);
  }
}
function next() {
  if (num < 3) {
    num++;
    slider(num);
  } else {
    num = 1;
    slider(1);
  }
}
