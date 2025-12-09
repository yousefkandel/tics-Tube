document.addEventListener("DOMContentLoaded", (event) => {
    "use strict";

    // notification popup
    const notificationPopup = document.querySelector(".tt-notification-popup");
    const ttNotificationPopupToggler = document.querySelector(".tt-notification-popup-toggler");
    ttNotificationPopupToggler.addEventListener("click", (e) => {
        e.stopPropagation();
        notificationPopup.classList.toggle("active");
    });

    // user dropdown
    const userDropdown = document.querySelector(".tt-user-dropdown");
    const userDropdownTogglers = document.querySelectorAll(".tt-user-dropdown-toggler");
    userDropdownTogglers.forEach(userDropdownToggler => {
        userDropdownToggler.addEventListener("click", (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle("active");
        });
    });
});