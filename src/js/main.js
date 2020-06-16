$(document).ready(function () {
    $('.nav-home__burger').click(function (event) {
        $('.nav-home__burger,.nav-site').toggleClass('nav-home__burger--active');
        $('body').toggleClass('nav-site--none-scroll');
    });
});
