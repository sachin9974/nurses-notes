const menu=document.getElementById('menu');
const nav=document.getElementById('nav');

menu.addEventListener('click',()=>nav.classList.toggle('open'));

nav.querySelectorAll('a').forEach(a=>
  a.addEventListener('click',()=>nav.classList.remove('open'))
);

const search=document.getElementById('search');
const cards=[...document.querySelectorAll('.subject')];
const empty=document.getElementById('empty');

search.addEventListener('input',()=>{
  const q=search.value.trim().toLowerCase();
  let shown=0;

  cards.forEach(card=>{
    const match=(card.innerText+' '+card.dataset.search)
      .toLowerCase().includes(q);

    card.hidden=!match;
    if(match) shown++;
  });

  empty.hidden=shown!==0;
});

