window.addEventListener("scroll", () => {
    const mainNav = document.querySelector(".main-header__navbar");
    mainNav.classList.toggle("active", window.scrollY > 0);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonials-section__testimonial');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateTestimonials() {
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.remove('active');
            if (index === currentIndex) {
                testimonial.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonials();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonials();
    });

    // Initialize the first testimonial as active
    updateTestimonials();
});
