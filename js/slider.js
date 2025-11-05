// slider.js - tiny, used for future sliders (basic carousel)
(function(){
  // Very small helper to enable simple sliding behavior for any .carousel container
  function initSimpleCarousel(selector){
    const containers = document.querySelectorAll(selector);
    containers.forEach(c => {
      const items = c.querySelectorAll('.slide');
      if(items.length <= 1) return;
      let idx = 0;
      function show(i){
        items.forEach((it, j) => it.style.display = (j===i ? 'block' : 'none'));
      }
      show(0);
      // auto-advance
      setInterval(() => {
        idx = (idx + 1) % items.length;
        show(idx);
      }, 5000);
    });
  }

  // init on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initSimpleCarousel('.simple-carousel');
  });
})();