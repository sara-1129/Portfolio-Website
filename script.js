// Particles.js configuration
$(document).ready(function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#6a5acd"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": true
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6a5acd",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            }
        }
    });
});

//Theme toggle functionality
$(document).ready(function () {
    const themeToggle = $('#themeToggle');
    const body = $('body');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    $('body').attr('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme);


    themeToggle.on('click', function () {
        const currentTheme = body.attr('data-bs-theme');
        const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        body.attr('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.find('i');
        if (theme === 'dark') {
            icon.removeClass('fa-sun').addClass('fa-moon');
        }
        else {
            icon.removeClass('fa-moon').addClass('fa-sun');
        }
    }

});
