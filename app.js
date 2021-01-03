function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if(t< 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) +b;
    }

    requestAnimationFrame(animation);

    console.log("clicked");
}

var btnAbout = document.querySelector('.btn-about');

btnAbout.addEventListener('click', function() {
    smoothScroll('.about-section', 500);
});

var btnskills = document.querySelector('.btn-skills');

btnskills.addEventListener('click', function() {
    smoothScroll('.skills-section', 500);
});

var btnContact = document.querySelector('.btn-contact');

btnContact.addEventListener('click', function() {
    smoothScroll('.contact-section', 500);
});