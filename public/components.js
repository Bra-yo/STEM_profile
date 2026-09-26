/* ==========================================================================
   Shared header + footer, injected into every page's #site-header /
   #site-footer placeholder. Keeping this in one file means the nav and
   footer only need to be edited once instead of in 8 separate HTML files.
   Must run (via a plain <script> tag, not deferred) AFTER both placeholder
   elements exist in the DOM and BEFORE script.js, so script.js's
   DOMContentLoaded handler finds a fully-formed navbar/footer to attach to.
   ========================================================================== */

(function () {
  var HEADER_HTML =
    '<nav class="navbar">' +
      '<div class="nav-container">' +
        '<div class="nav-logo">' +
          '<div class="logo-social-container">' +
            '<h2><a href="index.html" style="color:inherit">Shallom Sila</a></h2>' +
            '<div class="social-icons">' +
              '<a href="https://www.linkedin.com/in/shallom-sila-aa6277300/" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>' +
              '<a href="https://www.facebook.com/profile.php?id=100082965705064" target="_blank" rel="noopener" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook"></i></a>' +
              '<a href="https://x.com/shallommsila" target="_blank" rel="noopener" class="social-icon" aria-label="Twitter/X"><i class="fab fa-twitter"></i></a>' +
              '<a href="https://www.instagram.com/shallomsila/" target="_blank" rel="noopener" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<ul class="nav-menu">' +
          '<li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>' +
          '<li class="nav-item"><a href="vision.html" class="nav-link">Vision</a></li>' +
          '<li class="nav-item"><a href="mission.html" class="nav-link">Mission</a></li>' +
          '<li class="nav-item"><a href="about.html" class="nav-link">About</a></li>' +
          '<li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>' +
          '<li class="nav-item"><a href="learn-more.html" class="nav-link">Learn More</a></li>' +
          '<li class="nav-item"><a href="partner.html" class="nav-link">Partner</a></li>' +
          '<li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>' +
        '</ul>' +
        '<button type="button" class="hamburger" aria-label="Toggle menu" aria-expanded="false">' +
          '<span class="bar"></span><span class="bar"></span><span class="bar"></span>' +
        '</button>' +
      '</div>' +
    '</nav>';

  var FOOTER_HTML =
    '<footer class="footer">' +
      '<div class="container">' +
        '<div class="footer-content">' +
          '<div class="footer-section">' +
            '<h3>Shallom Sila</h3>' +
            '<p>Empowering the next generation through STEM, innovation, and leadership development.</p>' +
            '<div class="social-links">' +
              '<a href="https://www.facebook.com/profile.php?id=100082965705064" target="_blank" rel="noopener" class="social-link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
              '<a href="https://x.com/shallommsila" target="_blank" rel="noopener" class="social-link" aria-label="Twitter/X"><i class="fab fa-twitter"></i></a>' +
              '<a href="https://www.linkedin.com/in/shallom-sila-aa6277300/" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>' +
              '<a href="https://www.instagram.com/shallomsila/" target="_blank" rel="noopener" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-section">' +
            '<h4>Quick Links</h4>' +
            '<ul>' +
              '<li><a href="index.html">Home</a></li>' +
              '<li><a href="about.html">About Us</a></li>' +
              '<li><a href="vision.html">Our Vision</a></li>' +
              '<li><a href="mission.html">Our Mission</a></li>' +
              '<li><a href="blog.html">Blog</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-section">' +
            '<h4>Programs</h4>' +
            '<ul>' +
              '<li><a href="learn-more.html#robotics-coding">Robotics &amp; Coding</a></li>' +
              '<li><a href="learn-more.html#cbc-cbe-stem">CBC/CBE STEM Pathway Expert Consultancy</a></li>' +
              '<li><a href="learn-more.html#ai-emerging-technologies">AI &amp; Emerging Technologies</a></li>' +
              '<li><a href="learn-more.html#digital-learning">Digital Learning &amp; Educational Innovation</a></li>' +
              '<li><a href="learn-more.html#leadership-mentorship">Leadership, Mentorship &amp; Capacity Building</a></li>' +
              '<li><a href="learn-more.html#values-purpose">Values, Purpose &amp; Public Engagement</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-section">' +
            '<h4>Contact</h4>' +
            '<ul>' +
              '<li><a href="contact.html">Get in Touch</a></li>' +
              '<li><a href="partner.html">Partner With Us</a></li>' +
              '<li><a href="mailto:info@shallomsila.org">info@shallomsila.org</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<p>&copy; <span id="footerYear"></span> Shallom Sila Initiative. All rights reserved.</p>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var headerSlot = document.getElementById('site-header');
  var footerSlot = document.getElementById('site-footer');

  if (headerSlot) headerSlot.innerHTML = HEADER_HTML;
  if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;

  var yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mark the nav link matching the current page as active.
  var path = window.location.pathname.split('/').pop();
  if (path === '') path = 'index.html';

  var links = document.querySelectorAll('.nav-link');
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute('href');
    if (href === path) {
      links[i].classList.add('active');
    }
  }
})();
