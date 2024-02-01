$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});
window.scrollTo({ top: 900, behavior: 'smooth' })

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);

const event1Checkbox = document.getElementById('event1');
const event2Checkbox = document.getElementById('event2');
const event3Checkbox = document.getElementById('event3');

// Event handlers for the checkboxes
event1Checkbox.addEventListener('change', function() {
  if (event1Checkbox.checked) {
    console.log('Event 1 is checked');
    // Do something when Event 1 is checked
  } else {
    console.log('Event 1 is unchecked');
    // Do something when Event 1 is unchecked
  }
});

event2Checkbox.addEventListener('change', function() {
  if (event2Checkbox.checked) {
    console.log('Event 2 is checked');
    // Do something when Event 2 is checked
  } else {
    console.log('Event 2 is unchecked');
    // Do something when Event 2 is unchecked
  }
});

event3Checkbox.addEventListener('change', function() {
  if (event3Checkbox.checked) {
    console.log('Event 3 is checked');
    // Do something when Event 3 is checked
  } else {
    console.log('Event 3 is unchecked');
    // Do something when Event 3 is unchecked
  }
});




