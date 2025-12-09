document.addEventListener("DOMContentLoaded", (event) => {

    // sidebar collapse js
    const sideBarCollapsableElements = document.querySelectorAll(".to-collapse");
    const sideBarCollapsBtn = document.querySelector(".tt-sidebar-collapse-btn");
    const sideBar = document.querySelector(".tt-sidebar");
    sideBarCollapsBtn.addEventListener("click", () => {
        sideBarCollapsableElements.forEach((sideBarCollapsableElement) => {
            sideBarCollapsableElement.classList.toggle("d-none");
        });
        sideBar.classList.toggle("sidebar-collapsed");
    });

    // sidebar in mobile
    const ttSidebarOpener = document.querySelector(".tt-sidebar-toggler");
    ttSidebarOpener.addEventListener("click", () => {
        sideBar.classList.toggle("active");
    });

    // sidebar dropdown
    const sidebarNavDropdowns = document.querySelectorAll(".tt-sidebar-nav-dropdown");
    sidebarNavDropdowns.forEach(sidebarNavDropdown => {
        sidebarNavDropdown.addEventListener("click", () => {
            sidebarNavDropdown.classList.toggle("active");
        })
    });

    // header pages dropdown
    const ttHeaderPagesDropdownToggler = document.querySelector(".tt-header-pages-dropdown");
    const ttHeaderPagesDropdownMenuWrapper = document.querySelector(".tt-header-pages-dropdown-menu-wrapper");
    ttHeaderPagesDropdownToggler.addEventListener("click", () => {
        ttHeaderPagesDropdownMenuWrapper.classList.toggle("active");
        ttHeaderPagesDropdownToggler.classList.toggle("active");
    });


    // upload video modal
    const ttUploadVideoModalOpeners = document.querySelectorAll(".tt-upload-video-modal-opener");
    const ttUploadVideoModal = document.querySelector(".tt-upload-video-modal");
    const ttOverlay = document.querySelector(".tt-overlay");

    ttUploadVideoModalOpeners.forEach(ttUploadVideoModalOpener => {
        ttUploadVideoModalOpener.addEventListener("click", () => {
            ttUploadVideoModal.classList.add("active");
            document.body.classList.add("position-fixed");
            ttOverlay.classList.add("active");
        });
    })
    const ttUploadVideoModalClose = document.querySelector(".tt-upload-video-modal-close");
    ttUploadVideoModalClose.addEventListener("click", () => {
        ttUploadVideoModal.classList.remove("active");
        document.body.classList.remove("position-fixed");
        ttOverlay.classList.remove("active");
    });


    // banner slider
    new Swiper(".tt-hero-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        // speed: 500,
        loop: true,
        pagination: {
            el: ".tt-hero-slider-pagination",
            clickable: true,
        },
    });

    // shorts slider
    new Swiper(".tt-shorts", {
        slidesPerView: "auto",
        spaceBetween: 15,
        navigation: {
            nextEl: "#tt-shorts-slider-nav",
        }
    });

    // trending videos slider
    new Swiper(".tt-trending-videos-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: "#tt-trending-videos-slider-nav",
        }
    });

    // live slider
    new Swiper(".tt-live-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: "#tt-live-slider-nav",
        }
    });

    // latest videos slider
    new Swiper(".tt-latest-movies-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: "#tt-latest-movies-slider-nav",
        }
    });

    // exclusive slider
    new Swiper(".tt-exclusive-videos-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: "#tt-exclusive-videos-slider-nav",
        }
    });

    // recommended slider
    new Swiper(".tt-recommended-movies-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: "#tt-recommended-movies-slider-nav",
        }
    });

    // mobile search bar
    const searchBtn = document.querySelector(".tt-mobile-search-btn");
    searchBtn.addEventListener("click", () => {
        document.querySelector(".tt-header__search").classList.toggle("active");
    });

    // categories in mobile device
    const ttCategoriesMobileContainer = document.querySelector(".tt-categories-mobile-container");
    const ttCategoriesOgContainer = document.querySelector(".tt-categories-og-container");
    const ttCategories = document.querySelector(".tt-categories");
    if (ttCategories) {
        if (window.innerWidth < 768) {
            ttCategoriesMobileContainer.appendChild(ttCategories);
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth < 768) {
                ttCategoriesMobileContainer.appendChild(ttCategories);
            } else {
                ttCategoriesOgContainer.appendChild(ttCategories);
            }
        });
    }


    // dark moda toggle
    // const darkModeToggler = document.querySelector(".tt-dark-mode-toggler");
    // const logos = document.querySelectorAll(".header-logo");
    // darkModeToggler.addEventListener("click", () => {
    //     document.body.classList.toggle("dark-mode");
    //     logos.forEach(logo => {
    //         if (logo.src.includes('assets/img/logo.svg')) {
    //             logo.src = 'assets/img/logo-white.svg';
    //         } else {
    //             logo.src = 'assets/img/logo.svg';
    //         }
    //     });
    // });

    // team slider 
    new Swiper(".tt-team-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".tt-team-slider-nav .next",
            prevEl: ".tt-team-slider-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            }
        }
    });

    // testimonial slider
    new Swiper(".tt-testimonial-slider", {
        slidesPerView: 2.5,
        spaceBetween: 20,
        navigation: {
            nextEl: ".tt-testimonial-slider-nav .next",
            prevEl: ".tt-testimonial-slider-nav .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.5,
            }
        }
    });


    // INDEX-2 BANNER SLIDER
    new Swiper(".tt-2-banner-slider", {
        slidesPerView: 1,
        autoplay: true,
        // speed: 500,
        loop: true,
        navigation: {
            prevEl: ".tt-2-banner-slider-nav .prev",
            nextEl: ".tt-2-banner-slider-nav .next",
        },
    });
});
