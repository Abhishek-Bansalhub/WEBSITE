const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('closeDisclaimer')?.addEventListener('click',()=>document.getElementById('disclaimer').remove());
document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  const subject=encodeURIComponent(`Legal enquiry — ${f.get('matter')}`);
  const body=encodeURIComponent(`Name: ${f.get('name')}\nContact: ${f.get('contact')}\nMatter: ${f.get('matter')}\n\nDescription:\n${f.get('message')}`);
  window.location.href=`mailto:contact@raiassociates.in?subject=${subject}&body=${body}`;
});