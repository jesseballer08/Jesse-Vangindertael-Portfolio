// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is clicked (useful on mobile)
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// Custom play button for project videos
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.project-video').forEach(function (wrap) {
    var video = wrap.querySelector('video');
    var playBtn = wrap.querySelector('.video-play');
    if (!video || !playBtn) return;

    playBtn.addEventListener('click', function () {
      video.setAttribute('controls', '');
      video.play();
    });

    video.addEventListener('play', function () {
      wrap.classList.add('is-playing');
    });
    video.addEventListener('pause', function () {
      wrap.classList.remove('is-playing');
    });
    video.addEventListener('ended', function () {
      wrap.classList.remove('is-playing');
      video.removeAttribute('controls');
    });
  });
});
