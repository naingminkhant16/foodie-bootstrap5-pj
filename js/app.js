let header = document.querySelector('.header');
let headerControl = new Waypoint({
    element: document.getElementById('about'),
    handler: function (direction) {
        // notify(this.element.id + ' triggers at ' + this.triggerPoint)
        if (direction == 'down') {
            header.classList.add('shadow');
            header.classList.add("animate__slideInDown");
        } else {
            header.classList.remove('shadow');
            header.classList.remove("animate__slideInDown");
        };
    },
    offset: '75%'
})