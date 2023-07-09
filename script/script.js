//menu tab-tab navigation

const tabAboutMe = document.querySelector('.wrapper-list');
const tabPortfolio = document.querySelector('.portfolio');
const tabContacts = document.querySelector('.contacts');

const showAboutMe = document.querySelector('.section-about-me');
const showPortfolio = document.querySelector('.section-portfolio');
const showContacts = document.querySelector('.section-contacts');

const activeMenu = document.querySelector('.section-main__list');

tabAboutMe.addEventListener('click', function () {
   showAboutMe.classList.add('show');
   showPortfolio.classList.remove('show');
   showContacts.classList.remove('show');
});

tabPortfolio.addEventListener('click', function () {
   showPortfolio.classList.add('show');
   showAboutMe.classList.remove('show');
   showContacts.classList.remove('show');

   init()
   rollSlider()
});

tabContacts.addEventListener('click', function () {
   showContacts.classList.add('show', 'active-animation');
   showAboutMe.classList.remove('show', 'active-animation');
   showPortfolio.classList.remove('show', 'active-animation');

});

//navigation highlight

const list = document.querySelectorAll('.wrapper-list');
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

   //swipe slider

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
};

//language change

let data = {
   english: {
      aboutmenav: 'About me',
      portfolionav: 'Portfolio',
      contactsnav: 'Contacts',
      downloadbtnlaptop: 'Download CV',
      aboutme: 'About me',
      discription: 'We can also support keyboard users with this technique, by adding a tabindex of 0 to make each span keyboard focusable, and using a CSS focus selector.This shows how flexible:: before and after can be, though for the most accessible experience a semantic disclosure widget created in some other way such as with details and summary elements is likely to be more appropriate',
      skills: 'Skills',
      portfolio: 'Portfolio',
      contact: 'Contacts',
      message: 'Send me message',
      downloadbtnmobile: 'Download CV',
   },
   russian: {
      aboutmenav: 'Обо мне',
      portfolionav: 'Портфолио',
      contactsnav: 'Контакты',
      downloadbtnlaptop: 'Скачать CV',
      aboutme: 'Обо мне',
      discription: 'Тот, кто прокрастинирует, аргументируя тем, что нужно просто  ещё собрать какие-то недостающие пазлы, получив необходимые знания и информацию — тот просто боится. Тот, кто много знает — часто имеет много страхов, потому что имеющиеся знания позволяют ему иметь шире картину мира, а значит и видеть больше поводов облажаться. Вместо того, чтобы ещё больше упиваться книгами и курсами.',
      skills: 'Навыки',
      portfolio: 'Портфолио',
      contact: 'Контакты',
      message: 'Отправить сообщение',
      downloadbtnmobile: 'Скачать CV',
   }
}

let langsSwitch = document.querySelector('.lang-switch');
let linkLang = document.querySelectorAll('.language');

let aboutMeNav = document.querySelector('.aboutmenav');
let portfolioNav = document.querySelector('.portfolionav');
let contactNav = document.querySelector('.contactsnav');
let downloadBtnLaptop = document.querySelector('.downloadbtnlaptop');
let aboutMe = document.querySelector('.aboutme');
let discription = document.querySelector('.discription');
let skills = document.querySelector('.skills');
let portfolioTitle = document.querySelector('.portfoliotitle');
let contact = document.querySelector('.contact');
let message = document.querySelector('.message');
let downloadBtnMobile = document.querySelector('.downloadbtnmobile');

linkLang.forEach(elem => {
   elem.addEventListener("click", () => {
      langsSwitch.querySelector('.select').classList.remove('select');
      elem.classList.add('select');

      let attr = elem.getAttribute("Language");

      aboutMeNav.textContent = data[attr].aboutmenav;
      portfolioNav.textContent = data[attr].portfolionav;
      contactNav.textContent = data[attr].contactsnav;
      downloadBtnLaptop.textContent = data[attr].downloadbtnlaptop;
      aboutMe.textContent = data[attr].aboutme;
      discription.textContent = data[attr].discription;
      skills.textContent = data[attr].skills;
      portfolioTitle.textContent = data[attr].portfolio;
      contact.textContent = data[attr].contact;
      message.textContent = data[attr].message;
      downloadBtnMobile.textContent = data[attr].downloadbtnmobile;
   })
});


