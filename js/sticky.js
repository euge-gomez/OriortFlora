window.onscroll = function() {myFunction()};
      
      const navbar = document.getElementById("navbar");
      const btnWa = document.getElementById("btnWa");
      const btnBack = document.getElementById("btnBack");
      const sticky = navbar.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
          btnWa.style.top = "56px";
          btnBack.classList.remove("d-none");
        } else {
          navbar.classList.remove("sticky");
          btnWa.style.top = "172px";
          btnBack.classList.add("d-none");
        }
      }