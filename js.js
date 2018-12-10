function myfunc()
{
  var m = ["green","yellow","red","orange","white","maroon","Lime"];
  var x = Math.floor(Math.random()*7);
  document.querySelector("body").style.background=m[x];
}
function func2()
{
  alert("Welcome!!");
}
function func3()
{
  var button = document.querySelector('.button2');

button.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
}
function func4()
{
  var dots = document.getElementById("dots");
 var moreText = document.getElementById("more");
 var btnText = document.getElementById("myBtn");

 if (dots.style.display === "none") {
   dots.style.display = "inline";
   btnText.innerHTML = "Read more";
   moreText.style.display = "none";
 } else {
   dots.style.display = "none";
   btnText.innerHTML = "Read less";
   moreText.style.display = "inline";
 }
}

$(document).ready(function() {
  $('.btn-blob').click(function() {
    $(this).toggleClass('blob');
  });
});
