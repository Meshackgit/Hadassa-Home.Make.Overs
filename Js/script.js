const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
});

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})); 

$(document).ready(function() {
  $("#mpesa").click(function(){
    alert("Thank You For Your Consideration To Support Empress Hadassa Home Make Overs.Our Help Line Is 0742673508.Thanks Again!");
  });
});

$(document).ready(function(){
  $("#Book").click(function(){
    alert("Hello!!! Welcome To Empress Hadassa Services,We are Really Pleased To serve you.To get access to our services,Please call or text this number:0742673508, To give a clear description of how you want your service done.You can also send us an email of what you want done for you at: meshmwangi828@gmail.com");
  });
});


