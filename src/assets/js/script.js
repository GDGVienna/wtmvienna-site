// src/assets/js/script.js
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
  });

  // Countdown Logic for WTM Conference 2026
  const countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    const targetDate = new Date("March 14, 2026 09:00:00").getTime();

    const interval = setInterval(function () {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "<div class='countdown-number'>It's Time!</div>";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days < 10 ? '0' + days : days;
      document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
      document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
      document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
  }
});
