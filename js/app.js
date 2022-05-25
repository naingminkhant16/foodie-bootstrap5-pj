let header = document.querySelector('.header');
let scroll_to_top_btn = document.querySelector('.scroll-to-top-btn');
let headerControl = new Waypoint({
    element: document.getElementById('about'),
    handler: function (direction) {
        if (direction == 'down') {
            header.classList.add('shadow');
            header.classList.add("animate__slideInDown");
            scroll_to_top_btn.classList.remove('d-none');
        } else {
            header.classList.remove('shadow');
            header.classList.remove("animate__slideInDown");
            scroll_to_top_btn.classList.add('d-none');
        };
    },
    offset: '75%'
})
//scroll reveal
ScrollReveal().reveal(".content ", {
    distance: '650%',
    origin: 'left',
    duration: 1000,
    interval: 200,
    opacity: null,
    delay: 375,
    reset: true
});