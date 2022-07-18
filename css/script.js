$("#business").on('click', function () {

  $('.sq-bsn').append("<div class='border-div'></div>")
  $('.bsn').append("<div class='border-div-radius'></div>")

  var myTimeout = setTimeout(fadeout, 2000);
  function fadeout() {

    $('.border-div').css('opacity', '0');
    $('.border-div-radius').css('opacity', '0');
  }
});

$("#itStrategy").on('click', function () {
  $('.sq-str').append("<div class='border-div'></div>")
  $('.rnd-str').append("<div class='border-div-radius'></div>")

  var myTimeout = setTimeout(fadeout, 2000);
  function fadeout() {
    $('.border-div').css('opacity', '0');
    $('.border-div-radius').css('opacity', '0');
  }
});

$("#existingSoftware").on('click', function () {
  $('.rnd-sq').append("<div class='border-div'></div>")
  $('.rnd-imp').append("<div class='border-div-radius'></div>")
  $('.rnd-sq').css('offest-position', 'top', '100px')
  var myTimeout = setTimeout(fadeout, 2000);
  function fadeout() {
    $('.border-div').css('opacity', '0');
    $('.border-div-radius').css('opacity', '0');

  }
});

$("#customSoftware").on('click',function () {
  $('.sq-custSoft').append("<div class='border-div'></div>")
  $('.rnd-custSoft').append("<div class='border-div-radius'></div>")

  var myTimeout = setTimeout(fadeout, 2000);
  function fadeout() {
    $('.border-div').css('opacity', '0');
    $('.border-div-radius').css('opacity', '0');
  }
});

$("#softwareIntegration").on('click', function () {
  $('.sq-soft').append("<div class='border-div'></div>")
  $('.rnd-soft').append("<div class='border-div-radius'></div>")

  var myTimeout = setTimeout(fadeout, 2000);
  function fadeout() {
    $('.border-div').css('opacity', '0');
    $('.border-div-radius').css('opacity', '0');
  }
});

$("#softwareModernization").on('click', function () {
  $('.sq-modern').append("<div class='border-div'></div>")
  $('.rnd-modern').append("<div class='border-div-radius'></div>")

  var myTimeout = setTimeout(fadeout, 2000);
  function fadeout() {
    $('.border-div').css('opacity', '0');
    $('.border-div-radius').css('opacity', '0');
  }
});

$("#appDevelopment").on('click', function () {
  $('.sq-app').append("<div class='border-div'></div>")
  $('.rnd-app').append("<div class='border-div-radius'></div>")

  var myTimeout = setTimeout(fadeout, 2000);
  function fadeout() {
    $('.border-div').css('opacity', '0');
    $('.border-div-radius').css('opacity', '0');
  }
});

$("#systemIntegration").on('click', function () {
  $('.sq-syst').append("<div class='border-div'></div>")
  $('.rnd-syst').append("<div class='border-div-radius'></div>")

  var myTimeout = setTimeout(fadeout, 2000);
  function fadeout() {
    $('.border-div').css('opacity', '0');
    $('.border-div-radius').css('opacity', '0');
  }
});

$("#fullStack").on('click', function () {
  $('.sq-full').append("<div class='border-div'></div>")
  $('.rnd-full').append("<div class='border-div-radius'></div>")

  var myTimeout = setTimeout(fadeout, 2000);
  function fadeout() {
    $('.border-div').css('opacity', '0');
    $('.border-div-radius').css('opacity', '0');
  }
});


let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

