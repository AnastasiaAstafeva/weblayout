(function () {
    //бургер
    let burgerBtn = document.querySelector('.burger-btn');
    let burger = document.querySelector('.burger-window');
    burgerBtn.addEventListener('click', ()=> {
        burgerBtn.classList.toggle('burger-btn-open');
        burger.classList.toggle('visualiy-hidden');
    })

    //эфир 
    const playersBtn = document.querySelector('.header-players-mobile__btn');
    const header = document.querySelector('.header-nav-two');
    window.addEventListener('resize', move);

    function move(){
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewport_width <= 714) {
            header.classList.add('visualiy-hidden');
        }
    }

    move();

    playersBtn.addEventListener('click', ()=> {
        header.classList.toggle('visualiy-hidden');
    })
    

    //поиск
    let searcBtn = document.querySelector('.header-search');
    let searchInput = document.querySelector('.search-input');
    let searchNav = document.querySelectorAll('.nav__item-search'); 
    searcBtn.addEventListener('click', () => {
        searchInput.classList.toggle('visualiy-hidden');
        for (let i = 0; i < searchNav.length; i++) {
            searchNav[i].classList.toggle('visualiy-transparent');
        }
        searcBtn.classList.toggle('searsh-open');
    });

    //еще подкасты
    let podcastBtn = document.querySelector('.podcast-open');
    let podcast = document.querySelectorAll('.podcast');

    podcastBtn.addEventListener('click', () => {
        for (let i = 0; i < podcast.length; i++) {
            podcast[i].classList.remove('visualiy-hidden');
            podcastBtn.classList.add('visualiy-hidden');
        }
    });

    //селект
    const element = document.querySelectorAll('select');
    for (i = 0; i < element.length; i++) {
        const choices = new Choices(element[i], {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        });
    };

    //аккордеон
    $( "#accordion" ).accordion({
        header: "a",
        active: false,
        collapsible: false,
        autoHeight: true,
        heightStyle:"content",
        refresh: true,
    });

    let link = document.querySelectorAll('.people__link');
    let card = document.querySelectorAll('.people-card');
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click', () => {
            let = document.querySelectorAll('.people__link');
            for (let i = 0; i < link.length; i++) {
                link[i].classList.remove('link-is-active');
            }
            link[i].classList.add('link-is-active');
            let path = link[i].dataset.path;
            for (let i = 0; i < card.length; i++) {
                card[i].classList.remove('card-is-active');
                if (card[i].dataset.path === path) {
                    card[i].classList.add('card-is-active');
                }
            }
        })
    }

    //Swiper
    const swiper = new Swiper('.swiper', {
        speed: 400,
        

        breakpoints: {
            // when window width is >= 320px
            300: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1100: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            1275: {
                spaceBetween: 30,
                slidesPerView: 4,
            }



        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //Валидация
    const validation = new window.JustValidate('.form');
    validation
        .addField('#name', [
            {
              rule: 'minLength',
              value: 3,
              errorMessage: 'Ошибка',
            },
            {
                rule: 'maxLength',
                value: 30,
                errorMessage: 'Ошибка',
            },
            {
                rule: 'required',
                errorMessage: 'Введитe имя',
            },
        ])
        .addField('#email', [
            {
              rule: 'required',
              errorMessage: 'Введитe Email',
            },
            {
              rule: 'email',
              errorMessage: 'Некорректный Email',
        },
    ]);
})();
