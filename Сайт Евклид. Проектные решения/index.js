// Menu

const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')

burger.addEventListener('click', function ()  {
  menu.classList.toggle('is-active')
  if (!menu.classList.contains('is-active')) {
    burger.setAttribute('aria-label', 'Закрыть меню');
  } else {
    burger.setAttribute('aria-label', 'Открыть меню');
  }
})


// Slider

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const swiperBullets = document.querySelectorAll('.swiper-pagination-bullet')
function setAttr() {
  swiperBullets.setAttribute('aria-label', 'Перейти на слайд {index}');
  }


// Tabs

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how-work__link').forEach(function(workLink) {
    workLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.how-work__tab').forEach(function(workTab) {
        workTab.classList.remove('how-work__tab-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how-work__tab-active')
      document.querySelectorAll('.how-work__link').forEach(function(workLink) {
        workLink.classList.remove('how-work__link--active')
      })
    })
  })
})

// Accordion


$( ".selector" ).accordion({
  header: "a"
});

var header = $( ".selector" ).accordion( "option", "header" );
$( ".selector" ).accordion( "option", "header", "a" );

