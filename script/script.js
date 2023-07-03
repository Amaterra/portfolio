//переключение меню

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

//подстветка навигации

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

//Slider

if (window.screen.width <= 900) {

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
}

//validation

document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);
      formData.append('file', formFile.files[0]);

      if (error === 0) {
         let response = await fetch('send-mail.php', {
            method: 'POST',
            body: formData
         });
         if (response.ok) {
            let result = await response.json();
            alert(result.message);
            form.reset();

            console.log('ok');
         }

      } else {
         console.log('crash');
      }
   }

   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);

         if (input.classList.contains('_email')) {
            if (emailTest(input)) {
               formAddError(input);
               error++;
            }
         } else {
            if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }

   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }

   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }

   function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }

   const formFile = document.getElementById('formFile');

   formFile.addEventListener('change', () => {
      uploadFile(form.files[0]);
   })

});


/* ANIMATION */

