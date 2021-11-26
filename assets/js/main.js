
const responsive ={

}
jQuery(document).ready(function ($) {
    "use strict";
    // TESTIMONIALS CAROUSEL HOOKS
    $('#clients-testimonials').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1

            },
            550: {
                items: 2

            },
            750: {
                items: 2

            },
            1024: {
                items: 3

            }
        }
    });

});
//check to see if windows is top if not then display button
      $(window).scroll(function(){
          if($(this).scrollTop() > 100){
              $('#scrolltotopbtn').fadeIn();
          } else {
              $('#scrolltotopbtn').fadeOut();
          }
      });
//click event to scroll to top
      const scrolltotopbtn = document.querySelector("#scrolltotopbtn");
scrolltotopbtn.addEventListener("click", function () {
  
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});
//Readmore toggle button
   function readMore(){

    const dots = document.getElementById("dots");
    const moretext = document.getElementById("moretext");
    const btn = document.getElementById("read-more-btn");
  
        if(dots.style.display == "none"){
              dots.style.display = "inline";
              moretext.style.display = "none";
              btn.innerHTML= "Read More";
        }else{
              dots.style.display = "none";
              moretext.style.display = "inline";
              btn.innerHTML= "Read Less";
        };
   };
  //show popover
       $(document).ready(function(){
           $('[data-toggle]').popover({
                html: true,
                
           });
       });

    //form submission
    //    const footerbtn = document.getElementById('btn-footer');
    //    const error = document.getElementById('errorme');
    //    const email = document.getElementById('email').value;
    //    const success = document.getElementById('success');
    //    const signup = document.getElementById('signup');

    //    footerbtn.addEventListener('click', (e) => {
    //               e.preventDefault();
    //           if(this.email.value == null || this.email.value == ""){
    //               error.classList.add('error');
    //           } else {
    //             const fetchData = {
    //                 method: 'POST',
    //                 body: JSON.stringify({email: this.email.value, js: true}),
    //                 headers: {"Content-Type": "application/json" }
    //            }
    //            fetch('/subscribe', fetchData)
    //            .then(res =>{
    //                 if(res.ok){
    //                     //yaay
    //                 }else{
    //                  error.classList.add('error'); 
    //                 }
    //            })
    //      }
            

    //    })
           



