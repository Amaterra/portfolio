//menu tab-tab navigation

const tabAboutMe = document.querySelector('.wrapper-list');
const tabPortfolio = document.querySelector('.portfolio');
const tabContacts = document.querySelector('.contacts');
const tabSkills = document.querySelector('.skills');

const showAboutMe = document.querySelector('.section-about-me');
const showPortfolio = document.querySelector('.section-portfolio');
const showContacts = document.querySelector('.section-contacts');
const showSkills = document.querySelector('.section-skills');

const activeMenu = document.querySelector('.section-main__list');

tabAboutMe.addEventListener('click', function () {
   showAboutMe.classList.add('show');
   showPortfolio.classList.remove('show');
   showContacts.classList.remove('show');
   showSkills.classList.remove('show');
});

tabPortfolio.addEventListener('click', function () {
   showPortfolio.classList.add('show');
   showAboutMe.classList.remove('show');
   showContacts.classList.remove('show');
   showSkills.classList.remove('show');
   init()
   rollSlider()
});

tabContacts.addEventListener('click', function () {
   showContacts.classList.add('show');
   showAboutMe.classList.remove('show');
   showPortfolio.classList.remove('show');
   showSkills.classList.remove('show');
});

tabSkills.addEventListener('click', function () {
   showSkills.classList.add('show');
   showAboutMe.classList.remove('show');
   showPortfolio.classList.remove('show');
   showContacts.classList.remove('show');
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
      skillsnav: 'Skills',
      portfolionav: 'Portfolio',
      contactsnav: 'Contacts',
      downloadbtnlaptop: 'Download CV',
      aboutme: 'About me',
      skillstitle: 'Skills',
      portfolio: 'Portfolio',
      contact: 'Contacts',
      message: 'Send me message',
      downloadbtnmobile: 'Download CV',
      stack: 'Technology stack:',
      tools: 'Tools:',
      paragraphone: 'Hello, my name is Olesia, and I am a beginner front-end developer. I have been self-learning since 2022. I moved to Moldova for permanent residence from Russia in 2021. ',
      paragraphtwo: 'I am at the beginning of my journey, so I am eager to learn a lot and conquer new heights. Previous work experiences have helped me develop skills such as fast learning, adaptability, teamwork, effective communication, and presenting information concisely and understandably.',
      paragraphthree: 'I aspire to grow in the IT field and am confident in my ability to become a valuable team member.',
   },
   russian: {
      aboutmenav: 'Обо мне',
      skillsnav: 'Навыки',
      portfolionav: 'Портфолио',
      contactsnav: 'Контакты',
      downloadbtnlaptop: 'Скачать CV',
      aboutme: 'Обо мне',
      skillstitle: 'Навыки',
      portfolio: 'Портфолио',
      contact: 'Контакты',
      message: 'Отправить сообщение',
      downloadbtnmobile: 'Скачать CV',
      stack: 'Стек технологий:',
      tools: 'Инструменты:',
      paragraphone: 'Привет, меня зовут Олеся, и я начинающий front-end разработчик. Самостоятельно обучаюсь с 2022 года. Переехала в Молдову на постоянное место жительства из России в 2021 году.',
      paragraphtwo: 'Я нахожусь в начале своего пути, поэтому готова много учиться и покорять новые вершины. Предыдущие места работы помогли мне развить навыки быстрого обучения, адаптации к новым условиям, работы в коллективе, а также умение коммуницировать и доносить информацию доступным языком.',
      paragraphthree: 'Я стремлюсь к развитию в IT-сфере и уверена в своей способности стать ценным участником команды.',
   }
}

let langsSwitch = document.querySelector('.lang-switch');
let linkLang = document.querySelectorAll('.language');
let aboutMeNav = document.querySelector('.aboutmenav');
let portfolioNav = document.querySelector('.portfolionav');
let contactNav = document.querySelector('.contactsnav');
let skillsNav = document.querySelector('.skillsnav');
let downloadBtnLaptop = document.querySelector('.downloadbtnlaptop');
let aboutMe = document.querySelector('.aboutme');
let skills = document.querySelector('.skillstitle');
let portfolioTitle = document.querySelector('.portfoliotitle');
let contact = document.querySelector('.contact');
let message = document.querySelector('.message');
let downloadBtnMobile = document.querySelector('.downloadbtnmobile');
let paragraphOne = document.querySelector('.paragraphone');
let paragraphTwo = document.querySelector('.paragraphtwo');
let paragraphThree = document.querySelector('.paragraphthree');
let stack = document.querySelector('.stack');
let tools = document.querySelector('.tools');

linkLang.forEach(elem => {
   elem.addEventListener("click", () => {
      langsSwitch.querySelector('.select').classList.remove('select');
      elem.classList.add('select');

      let attr = elem.getAttribute("hreflang");

      aboutMeNav.textContent = data[attr].aboutmenav;
      skillsNav.textContent = data[attr].skillsnav;
      portfolioNav.textContent = data[attr].portfolionav;
      contactNav.textContent = data[attr].contactsnav;
      downloadBtnLaptop.textContent = data[attr].downloadbtnlaptop;
      aboutMe.textContent = data[attr].aboutme;
      skills.textContent = data[attr].skillstitle;
      portfolioTitle.textContent = data[attr].portfolio;
      contact.textContent = data[attr].contact;
      message.textContent = data[attr].message;
      downloadBtnMobile.textContent = data[attr].downloadbtnmobile;
      paragraphOne.textContent = data[attr].paragraphone;
      paragraphTwo.textContent = data[attr].paragraphtwo;
      paragraphThree.textContent = data[attr].paragraphthree;
      stack.textContent = data[attr].stack;
      tools.textContent = data[attr].tools;
   })
});