const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

  
burger.addEventListener('click', ()=> {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links

    navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation ='';       
            } else{
                link.style.animation = 'navLinkFade 0.5 ease fowards $(index / 7 + 0'
        }

    });
    //Burger Animation
    burger.classList.toggle('toggle');
});

        

}


navSlide();


mainImg = document.getElementById('mainImg');

thumb1 = document.getElementById('thumb1');
thumb1Src = document.getElementById('thumb1').src;
thumb2 = document.getElementById('thumb2');
thumb2Src = document.getElementById('thumb2').src;
thumb3 = document.getElementById('thumb3');
thumb3Src = document.getElementById('thumb3').src;
thumb4 = document.getElementById('thumb4');
thumb4Src = document.getElementById('thumb4').src;
thumb5 = document.getElementById('thumb5');
thumb5Src = document.getElementById('thumb5').src;
thumb6 = document.getElementById('thumb6');
thumb6Src = document.getElementById('thumb6').src;


thumb1.addEventListener("click", function(){
    mainImg.src=thumb1Src
})

thumb2.addEventListener("click", function(){
    mainImg.src=thumb1Src
})

thumb3.addEventListener("click", function(){
    mainImg.src=thumb1Src
})

thumb4.addEventListener("click", function(){
    mainImg.src=thumb1Src
})

thumb5.addEventListener("click", function(){
    mainImg.src=thumb1Src
})

thumb6.addEventListener("click", function(){
    mainImg.src=thumb1Src
})