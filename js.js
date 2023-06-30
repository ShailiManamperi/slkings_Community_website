//==================== scroll reveal ===============//
ScrollReveal({
    // reset: true,
    distance: '180px',
    duration: 3000,
    delay:300
});

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('#button-content', { origin: 'bottom' });
ScrollReveal().reveal('#text-one', { origin: 'left' });
ScrollReveal().reveal('#text-two', { origin: 'right' });