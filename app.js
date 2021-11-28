
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("title").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("title").style.fontSize = "35px";
  }
}

//This refers to the foodwaste tips to show and hide tips by changing max height.
var coll = document.getElementsByClassName('collapsible');
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var pizza = document.getElementById('pizza');
var burger = document.getElementById('burger');
var vegan = document.getElementById('vegan');
var asian = document.getElementById('asian');
var deli = document.getElementById('deli');
var salad = document.getElementById('salad');

var forni = document.getElementById('forni');
var flame = document.getElementById('flame');
var viva = document.getElementById('viva');
var marin = document.getElementById('marin');
var toastys = document.getElementById('toastys');
var saladBar = document.getElementById('saladBar');

var restDivs = []; //Array of all the restaurant images divs
restDivs.push(forni);
restDivs.push(flame);
restDivs.push(viva);
restDivs.push(marin);
restDivs.push(toastys);
restDivs.push(saladBar);

var j;

//When any button is clicked, show corresponding restaurant image by changing display to 'block'
//Also make its background color light green and all other's green.
pizza.addEventListener("click", function() {
  forni.style.display = "block";
  pizza.style.backgroundColor = "lightgreen";
  for (j = 0; j < 6; j++){
    if (restDivs[j] != forni){
      restDivs[j].style.display = "none";
      burger.style.backgroundColor = "green";
      vegan.style.backgroundColor = "green";
      asian.style.backgroundColor = "green";
      deli.style.backgroundColor = "green";
      salad.style.backgroundColor = "green";
    }
  }
});

burger.addEventListener("click", function() {
  flame.style.display = "block";
  burger.style.backgroundColor = "lightgreen";
  for (j = 0; j < 6; j++){
    if (restDivs[j] != flame){
      restDivs[j].style.display = "none";
      pizza.style.backgroundColor = "green";
      vegan.style.backgroundColor = "green";
      asian.style.backgroundColor = "green";
      deli.style.backgroundColor = "green";
      salad.style.backgroundColor = "green";
    }
  }
});

vegan.addEventListener("click", function() {
  viva.style.display = "block";
  vegan.style.backgroundColor = "lightgreen";
  for (j = 0; j < 6; j++){
    if (restDivs[j] != viva){
      restDivs[j].style.display = "none";
      pizza.style.backgroundColor = "green";
      burger.style.backgroundColor = "green";
      asian.style.backgroundColor = "green";
      deli.style.backgroundColor = "green";
      salad.style.backgroundColor = "green";
    }
  }
});

asian.addEventListener("click", function() {
  marin.style.display = "block";
  asian.style.backgroundColor = "lightgreen";
  for (j = 0; j < 6; j++){
    if (restDivs[j] != marin){
      restDivs[j].style.display = "none";
      burger.style.backgroundColor = "green";
      vegan.style.backgroundColor = "green";
      pizza.style.backgroundColor = "green";
      deli.style.backgroundColor = "green";
      salad.style.backgroundColor = "green";
    }
  }
});

deli.addEventListener("click", function() {
  toastys.style.display = "block";
  deli.style.backgroundColor = "lightgreen";
  for (j = 0; j < 6; j++){
    if (restDivs[j] != toastys){
      restDivs[j].style.display = "none";
      burger.style.backgroundColor = "green";
      vegan.style.backgroundColor = "green";
      asian.style.backgroundColor = "green";
      pizza.style.backgroundColor = "green";
      salad.style.backgroundColor = "green";
    }
  }
});

salad.addEventListener("click", function() {
  saladBar.style.display = "block";
  salad.style.backgroundColor = "lightgreen";
  for (j = 0; j < 6; j++){
    if (restDivs[j] != saladBar){
      restDivs[j].style.display = "none";
      burger.style.backgroundColor = "green";
      vegan.style.backgroundColor = "green";
      asian.style.backgroundColor = "green";
      deli.style.backgroundColor = "green";
      pizza.style.backgroundColor = "green";
    }
  }
});

//Menu using jQuery
//Credits: www.w3schools.com
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});
