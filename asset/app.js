const navSlide = () => {
    const burger = document.querySelector(".icon-burger");
    const navLinks = document.querySelectorAll(".nav-links li")


    burger.addEventListener("click", () =>{
       

        //animation links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation ="";
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        
        
    });

};

navSlide();