(()=>{'use strict';const menu=document.querySelector('.th-toggle'),nav=document.querySelector('#th-nav');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});document.querySelectorAll('.th-drop>button').forEach(b=>b.addEventListener('click',()=>{const open=b.parentElement.classList.toggle('open');b.setAttribute('aria-expanded',String(open))}));document.querySelectorAll('#th-nav a').forEach(a=>{if(new URL(a.href).pathname===location.pathname)a.setAttribute('aria-current','page')});document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.th-drop.open').forEach(d=>{d.classList.remove('open');d.querySelector('button').setAttribute('aria-expanded','false')});nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');document.activeElement?.blur()}});document.querySelectorAll('.th-gallery').forEach(g=>{const main=g.querySelector('.th-gallery-main img');
const mainButton=g.querySelector('.th-gallery-main');
const thumbs=Array.from(g.querySelectorAll('.th-thumbnails button'));
const stage=document.createElement('div');stage.className='th-gallery-stage';
mainButton.before(stage);stage.append(mainButton);
function arrow(direction,label){const b=document.createElement('button');b.type='button';b.className='th-gallery-arrow th-gallery-'+direction;b.setAttribute('aria-label',label);b.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+(direction==='prev'?'M15 4L7 12l8 8':'M9 4l8 8-8 8')+'"/></svg>';stage.append(b);return b;}
const previous=arrow('prev','Fotografia anterior'),next=arrow('next','Fotografia seguinte');
let current=0;
function select(index){
 current=Math.max(0,Math.min(index,thumbs.length-1));
 main.src=thumbs[current].querySelector('img').src;
 thumbs.forEach((b,i)=>{b.classList.toggle('selected',i===current);b.setAttribute('aria-pressed',String(i===current))});
 previous.hidden=current===0;next.hidden=current===thumbs.length-1;
 const strip=g.querySelector('.th-thumbnails'),active=thumbs[current];
 if(active.offsetLeft<strip.scrollLeft)strip.scrollLeft=active.offsetLeft;
 else if(active.offsetLeft+active.offsetWidth>strip.scrollLeft+strip.clientWidth)strip.scrollLeft=active.offsetLeft+active.offsetWidth-strip.clientWidth;
}
thumbs.forEach((b,i)=>b.addEventListener('click',()=>select(i)));
previous.addEventListener('click',()=>{select(current-1);if(previous.hidden)next.focus()});
next.addEventListener('click',()=>{select(current+1);if(next.hidden)previous.focus()});
g.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();select(current+(e.key==='ArrowRight'?1:-1))}});
select(0);
g.querySelector('.th-gallery-main').addEventListener('click',()=>{const overlay=document.createElement('div');overlay.className='th-lightbox';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','Fotografia do projeto');const image=document.createElement('img');image.src=main.src;image.alt=main.alt;const close=document.createElement('button');close.textContent='×';close.setAttribute('aria-label','Fechar fotografia');overlay.append(image,close);document.body.append(overlay);const prior=document.activeElement,overflow=document.body.style.overflow;document.body.style.overflow='hidden';function done(){overlay.remove();document.body.style.overflow=overflow;document.removeEventListener('keydown',key);prior?.focus()}function key(e){if(e.key==='Escape')done();if(e.key==='Tab'){e.preventDefault();close.focus()}}close.onclick=done;overlay.onclick=e=>{if(e.target===overlay)done()};document.addEventListener('keydown',key);close.focus()})})})();
