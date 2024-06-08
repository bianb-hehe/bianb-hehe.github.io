'use strict';

hexo.extend.tag.register('rating', function(args, content) {
  return `
    <div class="rating">
      <span class="star" data-value="5">&#9733;</span>
      <span class="star" data-value="4">&#9733;</span>
      <span class="star" data-value="3">&#9733;</span>
      <span class="star" data-value="2">&#9733;</span>
      <span class="star" data-value="1">&#9733;</span>
    </div>
    <p id="rating-value">Rating: <span id="rating-score">0</span></p>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const stars = document.querySelectorAll('.star');
        const ratingScore = document.getElementById('rating-score');

        stars.forEach(star => {
          star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            ratingScore.textContent = value;

            stars.forEach(s => {
              s.classList.remove('selected');
              if (s.getAttribute('data-value') <= value) {
                s.classList.add('selected');
              }
            });
          });
        });
      });
    </script>
  `;
});
