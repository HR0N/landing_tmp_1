const MENU_ICON_ID = "menuIcon";
const MENU_ID = "menu";

const ACTIVE_MENU_ICON_CLASS = "menu__icon--active";
const ACTIVE_MENU_CLASS = "menu--active";

const closeMenu = () => {
    const menuIcon = document.getElementById(MENU_ICON_ID);
    const menu = document.getElementById(MENU_ID);

    menuIcon.classList.remove(ACTIVE_MENU_ICON_CLASS);
    menu.classList.remove(ACTIVE_MENU_CLASS);
};

const toggleMenu = () => {
    const menuIcon = document.getElementById(MENU_ICON_ID);
    const menu = document.getElementById(MENU_ID);

    menuIcon.classList.toggle(ACTIVE_MENU_ICON_CLASS);
    menu.classList.toggle(ACTIVE_MENU_CLASS);
};

(function ($) {
    "use strict";

    /////////////////////////////////////////////
    // button Up
    /////////////////////////////////////////////
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) $("a#move_up").fadeIn(200);
            else $("a#move_up").fadeOut(400);
        });
        $("a#move_up").click(function () {
            $("body,html").animate(
                {
                    scrollTop: 0,
                },
                800
            );
            return false;
        });
    });

    /////////////////////////////////////////////
    // Scroll
    /////////////////////////////////////////////

    $(document).ready(function () {
        $(".scroll").on("click", function (event) {
            event.preventDefault();
            closeMenu();

            var id = $(this).attr("href"),
                top = $(id).offset().top;
            $("body,html").animate({ scrollTop: top - 100 }, 1000);
        });
    });
})(jQuery);

document.getElementById(MENU_ICON_ID).addEventListener("click", function (e) {
    e.preventDefault();
    toggleMenu();
});
