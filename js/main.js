let nav = document.querySelector('.navigation-wrap');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};

let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelectorAll('.navbar-collapse.collapse');
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.forEach(function (collapse) {
            collapse.classList.remove("show");
        });
    });
});
