// Reveals the timeline fill once it scrolls into view. No-op if reduced motion is preferred
// (CSS handles the reduced-motion override), and fails silently if IntersectionObserver
// is unavailable.
document.addEventListener('DOMContentLoaded', function () {
  var track = document.querySelector('.timeline-track');
  if (!track || !('IntersectionObserver' in window)) {
    if (track) track.classList.add('in-view');
    return;
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        track.classList.add('in-view');
        obs.disconnect();
      }
    });
  }, { threshold: 0.4 });
  obs.observe(track);
});
