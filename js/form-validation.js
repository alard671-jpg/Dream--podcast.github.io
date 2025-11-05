// form-validation.js - validate contact form and submit via Formspree or fallback
(function(){
  const form = document.getElementById('contact-form');
  if(!form) return;

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = '';

    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    if(!name.value.trim() || !email.value.trim() || !message.value.trim()){
      status.textContent = 'الرجاء ملء جميع الحقول المطلوبة / Please fill all required fields';
      status.style.color = 'crimson';
      return;
    }

    // simple email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRe.test(email.value)){ 
      status.textContent = 'البريد الإلكتروني غير صالح / Invalid email';
      status.style.color = 'crimson';
      return;
    }

    // Submit via Fetch to Formspree (replace yourFormId in action attribute)
    const action = form.getAttribute('action') || '';
    if(action && action.includes('formspree.io')){
      status.textContent = 'جاري الإرسال... / Sending...';
      try{
        const formData = new FormData(form);
        const res = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        const json = await res.json();
        if(res.ok){
          status.textContent = 'تم الإرسال، شكراً لك! / Sent, thank you!';
          status.style.color = 'green';
          form.reset();
        } else {
          status.textContent = (json?.error || 'خطأ في الإرسال، حاول لاحقاً / Submission error');
          status.style.color = 'crimson';
        }
      } catch(err){
        status.textContent = 'تعذر الاتصال ب��لخادم / Could not reach server';
        status.style.color = 'crimson';
      }
    } else {
      // Fallback: mailto
      const mailto = `mailto:info@dreampodcast.org?subject=${encodeURIComponent('Contact from website: '+name.value)}&body=${encodeURIComponent(message.value + '\n\nEmail: '+email.value)}`;
      window.location.href = mailto;
    }
  });
})();