const swiper = new Swiper('.swiper', {
    // Optional parameters
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 8,
        loop: false,

        breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
        slidesPerView: 2,
        spaceBetween: 30
        },
        // when window width is >= 640px
        1024: {
        slidesPerView: 3,
        spaceBetween: 10
        },

        1444: {
        slidesPerView: 5,
        spaceBetween: 10
        }
    }
});