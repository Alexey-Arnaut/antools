function navigation() {

    const header = document.querySelector('.header');
    const link = document.querySelector('.link');
    const menu = document.querySelector('.header__menu');
    const html = document.querySelector('html');

    link.addEventListener('click', event => {
        event.preventDefault();

        const href = link.getAttribute('href');

        document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        menu.classList.remove('header__menu--active');
        header.classList.remove('header--active');
        html.style.overflow = 'visible';
    });

    window.addEventListener('scroll', () => {
        if (pageYOffset > 100) {
            header.classList.add('header--sticky');
        } else {
            header.classList.remove('header--sticky');
        };
    });

    menu.addEventListener('click', () => {
        menu.classList.toggle('header__menu--active');
        header.classList.toggle('header--active');

        if (menu.classList.contains('header__menu--active')) {
            html.style.overflow = 'hidden';
        } else {
            html.style.overflow = 'visible';
        };
    });
};

function slider() {
    const buttonPrev = document.querySelector('.arrow-prev');
    const buttonNext = document.querySelector('.arrow-next');
    const sliderLine = document.querySelector('.newcomer__slider-line');
    const dots = document.querySelectorAll('.newcomer__slider-dot');
    const itemWidth = document.querySelector('.newcomer__slider-item').offsetWidth;
    let count = 0;

    function activeDot() {
        for (let dot of dots) {
            dot.classList.remove('newcomer__slider-dot--active')
        }
        dots[count].classList.add('newcomer__slider-dot--active')
    }

    function currentSlide() {
        sliderLine.style.left = -count * itemWidth + "px";
    }

    buttonPrev.addEventListener('click', () => {

        --count;

        if (count < 0) {
            count = 2
        }

        activeDot();
        currentSlide()
    });

    buttonNext.addEventListener('click', () => {
        ++count;

        if (count > 2) {
            count = 0
        }

        activeDot();
        currentSlide()
    });

    dots.forEach(dot => {
        dot.addEventListener('click', event => {
            let slideId = dot.getAttribute('data-slide');
            let currentItem = document.querySelector(slideId);

            if (dots[0] == event.currentTarget) {
                count = 0;
            } else if (dots[1] == event.currentTarget) {
                count = 1;
            } else if (dots[2] == event.currentTarget) {
                count = 2;
            }

            dots.forEach(SliderDot => {
                SliderDot.classList.remove('newcomer__slider-dot--active');
            });
            dot.classList.add('newcomer__slider-dot--active');

            sliderLine.style.left = -currentItem.offsetLeft + 'px';
        });
    });
};

navigation();
slider();