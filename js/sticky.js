window.onscroll = function() {myFunction()};
      
      var navbar = document.getElementById("navbar");
      var btnWa = document.getElementById("btnWa");
      var sticky = navbar.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
          btnWa.style.top = "56px"
        } else {
          navbar.classList.remove("sticky");
          btnWa.style.top = "172px"
        }
      }