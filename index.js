const nav = document.querySelector('.nav-box');
const navIcon = document.querySelector('.nav__icon');
const navList = document.querySelector('.nav__list');
const header = document.querySelector('.header');
const fadeInElements = document.querySelectorAll('.fade');
const slideParagraph = document.querySelectorAll('a.element__link');
const rotateEl = document.querySelectorAll('.rotateEl');
const servicesFeature = document.querySelectorAll('.services__feature');


const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const ind =  document.querySelectorAll('.indicator');
const carItem = document.querySelectorAll('.carousel-item');

const carouselBtnPrev = document.querySelector('.carousel-control-prev');
const carouselBtnNext = document.querySelector('.carousel-control-next');


/////////////////////////////////////////////////////
///////////////////ANIMATIONS


slideParagraph.forEach(el =>{
    el.addEventListener('click', function(){
      el.nextElementSibling.classList.toggle('display');
      
    })
})


/////////////////////////////NAV BAR///////////////////////////////
const navOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const navObserver = new IntersectionObserver(
    function(
        entries,
        navObserver
    ){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                nav.classList.add('scrolled');
            }else {
                nav.classList.remove('scrolled')
            }
           
        })
    },
    navOptions);
    navObserver.observe(header);



    navIcon.addEventListener('click', function(){
        navList.classList.toggle('slideIn')
    })


    //////////////////////////////////////////
    /////////ELEMENTS WITH FADE IN EFFECTS


    const fadeOptions = {
        rootMargin: "-50px"
    }


    const fadeElObserver = new IntersectionObserver(
        function(
            entries,
            fadeElObserver
        ){
            entries.forEach(entry => {
                if(entry.isIntersecting){
                   entry.target.classList.add('fade-in')
         
                }
            })
        },
       fadeOptions)

       fadeInElements.forEach(el => {
        fadeElObserver.observe(el)
       })

    //////////////////////////////////////////////////////////////
    /////////DIFFERENT TIME FOR FADE-IN
   const differentElOptions = {
        rootMargin: "250px 0px"
    }


    const differentElObserver = new IntersectionObserver(
        function(
            entries,
            differentElObserver
        ){
         
       
            entries.forEach((entry, index) => {
               if(entry.isIntersecting){
                 
                  entry.target.style.animation = `comingIn 1.5s ease-in ${index / 6 + .3}s`
                  entry.target.style.opacity = '1'
                  entry.target.style.transform = 'translateY(0)' 
               }
              
            })
          
        },
        differentElOptions)

        servicesFeature.forEach(el => {
        differentElObserver.observe(el)
       })



    //////////////////////////////////////////////////////////////
    /////////ROTATING ANIMATION
    const rotateOptions = {
        rootMargin: "-200px 0px"
    }   

    
    const rotateElObserver = new IntersectionObserver(
        function(
            entries,
            rotateElObserver
        ){
            entries.forEach(entry => {
                if(entry.isIntersecting){
                   entry.target.classList.add('rotate')
         
                }
            })
        },
       rotateOptions)

       rotateEl.forEach(el => {
           rotateElObserver.observe(el)
       })


      


    /////////////////////////////////////////////////////////
    ////////FEATURES



   //carousel slider
   ind.forEach(el => {

    var currentInd =  el.getAttribute('data-slide-to');

       el.addEventListener('click', function(){
          ind.forEach(el => {
              el.classList.remove('active')
          })

          carItem.forEach(el => {
              el.classList.remove('active')
          })
          el.classList.add('active');
          carItem[currentInd].classList.add('active')

       })
   })

   
   carouselBtnPrev.addEventListener('click', () => {
       var activeSlide = document.querySelector('.active')
       var slideIndex = activeSlide.getAttribute('data-slide-to');
       if (slideIndex != 0){
           slideIndex--;
       }else{
           slideIndex = 2;
       }

    ind.forEach(el => {
        el.classList.remove('active')
    })

    carItem.forEach(el => {
        el.classList.remove('active')
    })

       carItem[slideIndex].classList.add('active');
       ind[slideIndex].classList.add('active');
   })

   
   carouselBtnNext.addEventListener('click', () => {
       var activeSlide = document.querySelector('.active')
       var slideIndex = activeSlide.getAttribute('data-slide-to');
       if (slideIndex != 2){
           slideIndex++;
       }else{
           slideIndex = 0;
       }

    ind.forEach(el => {
        el.classList.remove('active')
    })

    carItem.forEach(el => {
        el.classList.remove('active')
    })

       carItem[slideIndex].classList.add('active');
       ind[slideIndex].classList.add('active');
   })


//second slider
       nextBtn.addEventListener('click', function(){
        var currentImg = document.querySelector('.slider-active')
        var nextImg = currentImg.nextElementSibling;
     
      
       
        if(nextImg){
         currentImg.classList.remove('slider-active');
         currentImg.style.zIndex = -10;
         nextImg.classList.add('slider-active');
         nextImg.style.zIndex = 10;
        }
    })

    prevBtn.addEventListener('click', function(){
     var currentImg = document.querySelector('.slider-active')
     var prevImg = currentImg.previousElementSibling;
     
   
    
     if(prevImg){
      currentImg.classList.remove('slider-active');
      currentImg.style.zIndex = -10;
      prevImg.classList.add('slider-active');
      prevImg.style.zIndex = 10;
      console.log('changed');
     }
 })

///////////////////////
///Counters 
const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        var count = +counter.innerText;
        var inc = 1;

        if(counter.classList.contains("parallax-counter")){
           var parallaxOutline = counter.parentElement.previousElementSibling;
           

           setInterval(() =>{
            if(counter.innerText < target){
                inc++;
                counter.innerText = inc;
                parallaxOutline.style.strokeDashoffset = (300 - inc * 3 ) + "%";
            }
        },300)

        }else{

        setInterval(() =>{
            if(counter.innerText < target){
                inc++;
                counter.innerText = inc;
            }
        },100)
    }
     
    }
  
   updateCount()

})

/*
   "start": "npm-run-all --parallel devserver watch:sass",
    "compile:sass": "node-sass sass/main.scss css/style.comp.css",
    "concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css",
    "prefix:css": "postcss --use autoprefixer -b \"last 10 versions\" css/style.comp.css -o css/style.prefix.css",
    "compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",
    "build:css": "npm-run-all compile:sass prefix:css compress:css"

    */