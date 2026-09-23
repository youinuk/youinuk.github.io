const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded);});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus();}});}
for(const button of document.querySelectorAll('[data-video-id]')){
 button.addEventListener('click',()=>{
  const id=button.dataset.videoId;
  if(!/^[\w-]{11}$/.test(id))return;
  const frame=document.createElement('iframe');
  frame.src=`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  frame.title=button.dataset.title;
  frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen=true;
  frame.referrerPolicy='strict-origin-when-cross-origin';
  button.replaceWith(frame);frame.focus();
 });
}
for(const img of document.querySelectorAll('.play-button img')){img.addEventListener('error',()=>{img.hidden=true;});if(img.complete&&img.naturalWidth===0)img.hidden=true;}
