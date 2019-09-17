
//Modal Buttons
//Get modal element
window.onload = function() {
  var btn = document.getElementsByClassName("button");
  for (var i = 0; i < btn.length; i++) {
    var thisBtn = btn[i];
    thisBtn.addEventListener("click", function(){
      var modal = document.getElementById(this.dataset.modal);
      $(modal).fadeIn(1000);
  }, false);
  }
//Close Button
  var btn = document.getElementsByClassName("closeBtn");
  for (var i = 0; i < btn.length; i++) {
    var thisBtn = btn[i];
    thisBtn.addEventListener("click", function(){
      var modal = document.getElementById(this.dataset.modal);
      $(modal).fadeOut(1000);
  }, false);
  }

//Outside Click
var modal1 = document.getElementById('introModal');
var modal2 = document.getElementById('aboutModal');
var modal3 = document.getElementById('resumeModal');
var modal4 = document.getElementById('contactModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    $(modal1).fadeOut(1000);
  }
  if (event.target == modal2) {
    $(modal2).fadeOut(1000);
  }
  if (event.target == modal3) {
    $(modal3).fadeOut(1000);
  }
  if (event.target == modal4) {
    $(modal4).fadeOut(1000);
  }
}
}

// Typewriter ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 1000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 8);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 200;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
 
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

//Parallax

window.addEventListener('scroll', function(e) {
  let target = document.querySelectorAll('.scroll')
  let index = 0
  const length = target.length 
  
  for( index; index < length; index++ ) {
    let positionY = window.pageYOffset * parseFloat( target[index].dataset.ratey )
    let positionX = window.pageYOffset * parseFloat( target[index].dataset.ratex )
    
    
    target[index].style.transform = 'translate3d(' + positionX +'px,' + positionY + 'px, 0px)'
  }
})


