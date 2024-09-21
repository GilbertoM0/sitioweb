/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

            //Para que cuando pase el mouse por arriba haga zoom AL FINAL
            document.getElementById("zooma").onmouseover = function() {
                var zoom = document.getElementById("zooma").style.transform = "scale(1.2)";
                }
                document.getElementById("zooma").onmouseout = function() {
                    var zoom = document.getElementById("zooma").style.transform = "scale(1)";
                    }

            document.getElementById("zoomb").onmouseover = function() {
                var zoom = document.getElementById("zoomb").style.transform = "scale(1.2)";
                }
                document.getElementById("zoomb").onmouseout = function() {
                    var zoom = document.getElementById("zoomb").style.transform = "scale(1)";
                    }
                    
            document.getElementById("zoomc").onmouseover = function() {
                var zoom = document.getElementById("zoomc").style.transform = "scale(1.2)";
                }
                document.getElementById("zoomc").onmouseout = function() {
                    var zoom = document.getElementById("zoomc").style.transform = "scale(1)";
                    }