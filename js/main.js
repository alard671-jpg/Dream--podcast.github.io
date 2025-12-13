// Main JS for Dream Podcast site

(function(){
  'use strict';

  function setUpPlayer(){
    const btn = document.getElementById('play-btn');
    const player = document.getElementById('live-player');
    const iframe = player.querySelector('iframe');

    function togglePlayer(){
      const isVisible = player.classList.toggle('visible');
      player.setAttribute('aria-hidden', String(!isVisible));
      btn.setAttribute('aria-expanded', String(isVisible));

      if(isVisible){
        if(iframe && (!iframe.getAttribute('src') || iframe.getAttribute('src') === 'about:blank')){
          iframe.setAttribute('src', 'https://zeno.fm/player/dream-podcast');
        }
        player.scrollIntoView({behavior:'smooth', block:'center'});
      } else {
        if(iframe) iframe.setAttribute('src','about:blank');
        window.scrollTo({top:0,behavior:'smooth'});
      }
    }

    btn.addEventListener('click', togglePlayer);
  }

  function initTickers(){
    document.querySelectorAll('.ticker-content').forEach(function(el){
      // ensure initial padding for smooth start
      el.style.paddingLeft = '100%';

      // pause animation on hover/focus for accessibility
      el.addEventListener('mouseenter', function(){ el.style.animationPlayState = 'paused'; });
      el.addEventListener('mouseleave', function(){ el.style.animationPlayState = ''; });
      el.addEventListener('focusin', function(){ el.style.animationPlayState = 'paused'; });
      el.addEventListener('focusout', function(){ el.style.animationPlayState = ''; });
    });
  }

  window.addEventListener('load', function(){
    setUpPlayer();
    initTickers();
  });

})();
