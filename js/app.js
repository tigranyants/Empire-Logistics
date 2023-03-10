let counts = setInterval(counter, 15);
let upto = 0;

function counter() {
  var count = document.getElementById("200");
  count.innerHTML = ++upto;
  if (upto === 200) {
    clearInterval(counts);
  }
}

let counts1 = setInterval(counter1, 10);
let upto1 = 0;

function counter1() {
  var count1 = document.getElementById("300");
  count1.innerHTML = ++upto1;
  if (upto1 === 300) {
    clearInterval(counts1);
  }
}

let counts3 = setInterval(counter3, 100);
let upto3 = 0;

function counter3() {
  var count3 = document.getElementById("15");
  count3.innerHTML = ++upto3;
  if (upto3 === 15) {
    clearInterval(counts3);
  }
}

//!! HEADER ONSCROLL CHANGE COLOR
window.addEventListener("scroll", checkScroll);

var header = document.getElementById("header");

function checkScroll() {
  let scrollPos = window.scrollY;

  if (scrollPos > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

// !!

// !! PARALLAX
$(document).ready(function () {
  $('section[data-type="background"]').each(function () {
    var $bgobj = $(this); // создаем объект
    $(window).scroll(function () {
      var yPos = -(window.scrollY / $bgobj.data("speed")); // вычисляем коэффициент
      // Присваиваем значение background-position
      var coords = "center " + yPos + "px";
      // Создаем эффект Parallax Scrolling
      $bgobj.css({ backgroundPosition: coords });
    });
  });

  // !!

  //  !!Adaptive box
  var height = $(".services__item").width();
  $(".services__item").css("height", height);
  // !!

  //  !!Adaptive box
  if ($(window).width() <= "480") {
    var height = $(".news__body").height();
    var height1 = height;
    $(".parallax__2").css("height", height1);
  }
  // !!

  // !!BURGER
  $("#icon").click(function () {
    $(".header__nav").toggleClass("active");
    $("#icon").toggleClass("active");
    $("#body").toggleClass("active");
  });
  //  !!

  // !!DROPDOWN
  $(".dropdown").click(function () {
    $(".dropdown__content").slideToggle();
    $(".dropdown__icon").toggleClass("active");
  });
});

// !!
