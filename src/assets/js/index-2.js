document.addEventListener("DOMContentLoaded", (event) => {
    // HEADER NAV IN MOBILE
    if (document.querySelector(".tt-2-header-nav")) {
        const ulSidebar = document.querySelector(".ul-sidebar");
        const ulSidebarOpener = document.querySelector(".tt-2-header-sidebar-opener");
        const ulSidebarCloser = document.querySelector(".ul-sidebar-closer");
        const ulMobileMenuContent = document.querySelector(".to-go-to-sidebar-in-mobile");
        const ulHeaderNavMobileWrapper = document.querySelector(".ul-sidebar-header-nav-wrapper");
        const ulHeaderNavOgWrapper = document.querySelector(".tt-2-header-nav-wrapper");

        function updateMenuPosition() {
            if (window.innerWidth < 992) {
                ulHeaderNavMobileWrapper.appendChild(ulMobileMenuContent);
            }

            if (window.innerWidth >= 992) {
                ulHeaderNavOgWrapper.appendChild(ulMobileMenuContent);
            }
        }

        updateMenuPosition();

        window.addEventListener("resize", () => {
            updateMenuPosition();
        });

        ulSidebarOpener.addEventListener("click", () => {
            ulSidebar.classList.add("active");
        });

        ulSidebarCloser.addEventListener("click", () => {
            ulSidebar.classList.remove("active");
        });


        // menu dropdown/submenu in mobile
        const ulHeaderNavMobile = document.querySelector(".tt-2-header-nav");
        const ulHeaderNavMobileItems = ulHeaderNavMobile.querySelectorAll(".has-submenu");
        ulHeaderNavMobileItems.forEach((item) => {
            if (window.innerWidth < 992) {
                item.addEventListener("click", () => {
                    item.classList.toggle("active");
                });
            }
        });
    }

    // header search
    const ulHeaderSearchOpener = document.querySelector(".tt-2-header-search-btn");
    const ulHeaderSearchCloser = document.querySelector(".ul-search-closer");
    if (ulHeaderSearchOpener) {
        ulHeaderSearchOpener.addEventListener("click", () => {
            document.querySelector(".ul-search-form-wrapper").classList.add("active");
            console.log("dddddddd");

        });
    }

    if (ulHeaderSearchCloser) {
        ulHeaderSearchCloser.addEventListener("click", () => {
            document.querySelector(".ul-search-form-wrapper").classList.remove("active");
        });
    }
    // header search

    // sticky header
    const ulHeader = document.querySelector(".to-be-sticky");
    if (ulHeader) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                ulHeader.classList.add("sticky");
            } else {
                ulHeader.classList.remove("sticky");
            }
        });
    }


    // INDEX-2 BANNER SLIDER
    new Swiper(".tt-2-banner-slider", {
        slidesPerView: 1,
        // autoplay: true,
        speed: 900,
        loop: true,
        navigation: {
            prevEl: ".tt-2-banner-slider-nav .prev",
            nextEl: ".tt-2-banner-slider-nav .next",
        },
    });

    new WOW().init();

    new Swiper(".tt-2-top-10-slider", {
        slidesPerView: 4,
        spaceBetween: 27,
        navigation: {
            prevEl: ".tt-2-top-10-slider-nav .prev",
            nextEl: ".tt-2-top-10-slider-nav .next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
            }
        }
    });


    new Swiper(".tt-2-trending-movies-slider", {
        effect: "coverflow",
        spaceBetween: 25,
        // grabCursor: true,
        autoplay: true,
        centeredSlides: true,
        // slidesPerView: 3.02,
        // coverflowEffect: {
        //     rotate: 80,
        //     stretch: 0,
        //     // depth: 180,
        //     depth: 100,
        //     modifier: 3,
        //     slideShadows: false,
        // },

        slidesPerView: 'auto',
        loop: true,
        // coverflowEffect: {
        //     rotate: 45,    // rotation angle
        //     stretch: 0,     // spacing between slides
        //     depth: 250,     // depth for 3D
        //     modifier: 1,    // multiplier for effect
        //     slideShadows: false,
        // },


        coverflowEffect: {
            rotate: 50,       // Stronger rotation
            stretch: 0,       // Keep tight
            depth: 300,       // 3D depth
            modifier: 1,
            slideShadows: false,
            scale: 1        // This is key: side slides are smaller
        },
    });


    // upcoming movies slider
    new Swiper(".tt-2-upcoming-movies-slider", {
        slidesPerView: 5.45,
        // slidesPerView: 4.7,
        loop: true,
        freeMode: true,
        spaceBetween: 27,
        navigation: {
            nextEl: ".tt-2-upcoming-movies-slider-nav .next",
            prevEl: ".tt-2-upcoming-movies-slider-nav .prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5.10,
            },
            1600: {
                slidesPerView: 5.25,
            },
            1800: {
                slidesPerView: 5.45,
            }
        }
    });


    // web series slider
    new Swiper(".tt-2-web-series-slider", {
        slidesPerView: 4.1,
        spaceBetween: 27,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 2
            },
            992: {
                spaceBetween: 20,
                slidesPerView: 2.4
            },
            1200: {
                spaceBetween: 20,
                slidesPerView: 3.1
            },
            1400: {
                slidesPerView: 3.4
            },
            1600: {
                slidesPerView: 4.1
            }
        }
    })
});