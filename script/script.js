//menu tab-tab

const tabAboutMe = document.querySelector('.about-me');
const tabPortfolio = document.querySelector('.portfolio');
const tabContacts = document.querySelector('.contacts');

const showAboutMe = document.querySelector('.section-about-me');
const showPortfolio = document.querySelector('.section-portfolio');
const showContacts = document.querySelector('.section-contacts');

const activeMenu = document.querySelector('.section-main__list');

tabAboutMe.addEventListener('click', function () {
   showAboutMe.classList.add('show', 'active-animation');
   showPortfolio.classList.remove('show', 'active-animation');
   showContacts.classList.remove('show', 'active-animation');
});

tabPortfolio.addEventListener('click', function () {
   showPortfolio.classList.add('show', 'active-animation');
   showAboutMe.classList.remove('show', 'active-animation');
   showContacts.classList.remove('show'), 'active-animation';


   init()
   rollSlider()
});

tabContacts.addEventListener('click', function () {
   showContacts.classList.add('show', 'active-animation');
   showAboutMe.classList.remove('show', 'active-animation');
   showPortfolio.classList.remove('show', 'active-animation');

});

//navigation highlight

const list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
   list[i].onclick = function () {
      if (active = this.parentNode.querySelector('.active')) {
         active.classList.remove('active');
         this.classList.add('active');
      }
      else
         this.classList.add('active');
   }
}

//slider

if (window.screen.width <= 700) {

   const sliderCard = document.querySelectorAll('.slider-card');
   const sliderLine = document.querySelector('.slider-line');
   let count = 0;
   let width;

   function init() {
      width = document.querySelector('.slider').offsetWidth;
      sliderLine.style.width = width * sliderCard.length + 'px';
      sliderCard.forEach(item => {
         item.style.width = width + 'px';
         item.style.height = 'auto';
      });
      rollSlider()

   }
   window.addEventListener('resize', init);
   init();

   const buttonNext = document.querySelector('.button-arrow-right');

   buttonNext.addEventListener('click', function () {
      count++;
      if (count >= sliderCard.length) {
         count = 0;

      }
      rollSlider()
   });

   const buttonPrev = document.querySelector('.button-arrow-left');

   buttonPrev.addEventListener('click', function () {
      count--;
      if (count < 0) {
         count = sliderCard.length - 1;

      }
      rollSlider()
   });

   function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
   }

   //swipe

   function nextSwipe() {
      count++;
      if (count >= sliderCard.length) {
         count = 0;
      }
      rollSlider()

      function rollSlider() {
         sliderLine.style.transform = 'translate(-' + count * width + 'px)';
      }
   }

   function prevSwipe() {

      count--;
      if (count < 0) {
         count = sliderCard.length - 1;
      }
      rollSlider()

      function rollSlider() {
         sliderLine.style.transform = 'translate(-' + count * width + 'px)';
      }
   }

   document.addEventListener('touchstart', handleTouchStart, false);
   document.addEventListener('touchmove', handleTouchMove, false);

   let x1 = null;
   let y1 = null;

   function handleTouchStart(event) {
      const firstTouch = event.touches[0];
      x1 = firstTouch.clientX;
      y1 = firstTouch.clientY;

      console.log('tab-tab-tab');
   }

   function handleTouchMove(event) {
      if (!x1 || !y1) {
         return false;
      }
      let x2 = event.touches[0].clientX;
      let y2 = event.touches[0].clientY;

      let xDiff = x2 - x1;
      let yDiff = y2 - y1;


      if (Math.abs(xDiff) > Math.abs(yDiff)) {
         if (xDiff > 0) {
            prevSwipe();

         }
         else {
            nextSwipe();
         };
      }
      x1 = null;
      y1 = null;
   }
}




