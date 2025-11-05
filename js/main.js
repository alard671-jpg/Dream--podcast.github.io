// main.js - clock, language switch, scroll hiding
(function(){
  // Clock
  const timeEl = document.getElementById('time');
  const dateEl = document.getElementById('date');
  function updateClock(){
    const now = new Date();
    if(timeEl) timeEl.innerText = now.toLocaleTimeString(undefined, { hour12:false });
    if(dateEl) dateEl.innerText = now.toLocaleDateString(undefined, { weekday:'long', year:'numeric', month:'short', day:'numeric' });
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Hide clock on scroll down, show on scroll up
  const clock = document.getElementById('clock-widget');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.pageYOffset || document.documentElement.scrollTop;
    if (!clock) return;
    if (current > lastScroll + 60) clock.classList.add('hidden');
    else if (current < lastScroll - 60) clock.classList.remove('hidden');
    lastScroll = current;
  });

  // Language switch - swaps text for elements that have data-en attributes
  function setLanguage(lang){
    const root = document.documentElement;
    if(lang === 'en'){
      root.lang = 'en';
      root.dir = 'ltr';
      document.body.classList.remove('ar'); document.body.classList.add('en');
    } else {
      root.lang = 'ar';
      root.dir = 'rtl';
      document.body.classList.remove('en'); document.body.classList.add('ar');
    }

    document.querySelectorAll('[data-en]').forEach(el => {
      if(lang === 'en'){
        // store Arabic version if not stored
        if(!el.dataset.ar) el.dataset.ar = el.innerHTML;
        el.innerHTML = el.dataset.en;
      } else {
        if(el.dataset.ar) el.innerHTML = el.dataset.ar;
      }
    });

    // update active buttons visually
    document.querySelectorAll('.lang-switch button').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      // set hidden language inputs if any
      document.querySelectorAll('input[name="_language"]').forEach(i => i.value = lang);
    });
  });

  // set default (page-level HTML lang decides initial)
  setLanguage(document.documentElement.lang || 'ar');

  // inject current year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;
})();