addEventListener("scroll", function(){
var navbar= document.querySelector("nav")
  navbar.classList.toggle("nav-scroll", window.scrollY>0);
 })
 window.addEventListener("scroll", reveal);
 function reveal(){
  var reveals= document.querySelectorAll(".reveal");
  for (var i =0; i<reveals.length; i++){
    var windowHeight= window.innerHeight;
    var revealtop= reveals[i].getBoundingClientRect().top;
    var revealpoint= 150;
    if(revealtop< windowHeight- revealpoint){
      reveals[i].classList.add("active")
    }
 }}
 window.onload= function(){
  var home= document.getElementById("home")
  home.classList.add("home")
}
 function removeClass(){
  var home= document.getElementById("home")
  home.classList.remove("home")

 }
 function OpenProduct() {
var name = document.getElementById("name").innerText;
var price = document.getElementById("price").innerText;
var imageSrc = document.getElementById("image").src;
var special= `Gold Edition, 4k Quality, 220 fps+`
window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
}
 function gta4() {
var name = document.getElementById("4name").innerText;
var price = document.getElementById("4price").innerText;
var imageSrc = document.getElementById("4image").src;
var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
}
function forza() {
  var name = document.getElementById("forzaname").innerText;
  var price = document.getElementById("forzaprice").innerText;
  var imageSrc = document.getElementById("forzaimg").src;
  var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
  window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
  }
function cod() {
    var name = document.getElementById("codname").innerText;
    var price = document.getElementById("codprice").innerText;
    var imageSrc = document.getElementById("codimg").src;
    var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
    window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
    } 
function pc() {
      var name = document.getElementById("pcname").innerText;
      var price = document.getElementById("pcprice").innerText;
      var imageSrc = document.getElementById("pcimg").src;
      var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
      window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
      }
function xbox() {
        var name = document.getElementById("xname").innerText;
        var price = document.getElementById("xprice").innerText;
        var imageSrc = document.getElementById("ximg").src;
        var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
        window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
        }
function chist() {
        var name = document.getElementById("chistname").innerText;
        var price = document.getElementById("chistprice").innerText;
        var imageSrc = document.getElementById("chistimg").src;
        var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
        window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
          }   
function headphone() {
       var name = document.getElementById("hname").innerText;
       var price = document.getElementById("hprice").innerText;
       var imageSrc = document.getElementById("himg").src;
       var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
       window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
            } 
            function pokemon() {
              var name = document.getElementById("namepoke").innerText;
              var price = document.getElementById("pricepoke").innerText;
              var imageSrc = document.getElementById("imgpoke").src;
              var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
              window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
                }
                function iman() {
                  var name = document.getElementById("nameim").innerText;
                  var price = document.getElementById("priceim").innerText;
                  var imageSrc = document.getElementById("imgim").src;
                  var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
                  window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
                    }
                function hulk() {
                      var name = document.getElementById("namehulk").innerText;
                      var price = document.getElementById("pricehulk").innerText;
                      var imageSrc = document.getElementById("imghulk").src;
                      var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
                      window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");
                        }
              function coder() {
                          var name = document.getElementById("namecoder").innerText;
                          var price = document.getElementById("pricecoder").innerText;
                          var imageSrc = document.getElementById("imgcoder").src;
                          var special= `Windows Compatibility, 5 Year Warranty,  Special Edition , 20% Discount`
                          window.open(`product.html?name=${name}&price=${price}&imageSrc=${imageSrc}&special=${special}`, "_blank");

                            } 
                                                                                                     
function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
