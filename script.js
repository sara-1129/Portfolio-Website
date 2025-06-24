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

    //update the theme
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

//Smooth scrolling for anchor links
    $(document).ready(function(){
    $('a[href^="#"]').on('click',function(event){
        event.preventDefault();
        const targetId = $(this).attr('href');  
        if(targetId === '#') return;
        const targetElement = $(targetId);
        if(targetElement.length) {  
            window.scrollTo({
                top: targetElement.offset().top - 80,  
                behavior: 'smooth'
            });
        }

        // Close mobile menu if open
        const navbarCollapse = $('.navbar-collapse');
        if(navbarCollapse.hasClass('show')) {
            navbarCollapse.collapse('hide');
        }
    });
});


//Adding animation to hero section element
$(document).ready(function(){
    const heroTitle = $('.hero-title')
const heroSubtitle = $('.hero-subtitle');
const heroText = $('.hero-text');
const heroButtons = $('.hero-buttons');

if(heroTitle) {
    setTimeout(function() {
        heroTitle.addClass('animate_animated', 'animate_fadeInDown');
    }, 300);
}
 if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.classList.add('animate__animated', 'animate__fadeIn');
        }, 800);
    }

    if (heroText) {
        setTimeout(() => {
            heroText.classList.add('animate__animated', 'animate__fadeIn');
        }, 1300);
    }

    if (heroButtons) {
        setTimeout(() => {
            heroButtons.classList.add('animate__animated', 'animate__fadeIn');
        }, 1800);
    }
});


//typewriter effect for hero subtitle
$(document).ready(function() {
  const $textElement = $('.hero-subtitle');
  const titles = [
    "Frontend Developer",
    "DSA Enthusiast", 
    "Problem Solver",
    "Aspiring Software Engineer"
  ];
  
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const deleteSpeed = 50;
  const pauseBetween = 1000;
  
  function typeWriter() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      // Deleting phase
      $textElement.text(currentTitle.substring(0, charIndex - 1));
      charIndex--;
    } else {
      // Typing phase
      $textElement.text(currentTitle.substring(0, charIndex + 1));
      charIndex++;
    }
    
    // Determine speed
    let speed = isDeleting ? deleteSpeed : typingSpeed;
    
    // Check if current title is complete
    if (!isDeleting && charIndex === currentTitle.length) {
      // Pause at end of typing
      speed = pauseBetween;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Switch to next title after deleting
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      // Short pause before typing next title
      speed = 400;
    }
    
    setTimeout(typeWriter, speed);
  }
  
  // Start the typewriter effect after a short delay
  setTimeout(typeWriter, 1000);
});




//Back to Top Button
$(document).ready(function() {
    const backToTop = $('#backToTop');
    
    // Show/hide button on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTop.addClass('active');
        } else {
            backToTop.removeClass('active');
        }
    });
    
    // Smooth scroll to top
    backToTop.on('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });
});


//Animation for progress bars
$(document).ready(function() {
    const progressBars = $('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = $(bar).attr('data-width');
                $(bar).css('width', targetWidth + '%');
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    progressBars.each(function() {
        observer.observe(this);
    });
});

// Contact form 
$(document).ready(function(){
    const contactForm = $('#contactForm');
    contactForm.on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };
        
        // Validate form data
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields.');
            return;
        }
        
        
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message!');
        
        // Reset the form
        contactForm[0].reset();
    });
});

//Animate element on scroll
$(document).ready(function() {
    $(window).on('scroll', function() {
        const elements = $('.skill-card, .project-card, .fact-item, .hobby-item');
        elements.each(function() {
            const elementPosition = $(this).offset().top;
            const scrollPosition = $(window).scrollTop();
            const windowHeight = $(window).height();
            
            if (elementPosition < scrollPosition + windowHeight - 100) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    });
    
    // Trigger the scroll event once on page load to check initial positions
    $(window).trigger('scroll');
});


//Project filter functionality

$(document).ready(function() {
    const $filterButtons = $('.filter-btn');
    const $projectItems = $('.project-item');

    $filterButtons.on('click', function() {
        // Update active button
        $filterButtons.removeClass('active');
        $(this).addClass('active');

        const filterValue = $(this).data('filter');

        // Filter projects
        $projectItems.each(function() {
            const $item = $(this);
            if (filterValue === 'all' || $item.data('category').includes(filterValue)) {
                $item.css('display', 'block');
            } else {
                $item.css('display', 'none');
            }
        });
    });
});


// Initialize Bootstrap tooltips
$(document).ready(function() {
    $('[data-bs-toggle="tooltip"]').tooltip();
});


//Update the current year in the footer
$(document).ready(function() {
    const currentYear = new Date().getFullYear();
    $('#currentYear').text(currentYear);
});