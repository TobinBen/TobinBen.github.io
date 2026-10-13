const storiesEl=document.getElementById('stories');const buttons=[...document.querySelectorAll('.filter')];
function renderStories(filter='all'){
 const list=window.STORIES.filter(s=>filter==='all'||s.publication===filter);
 storiesEl.replaceChildren();
 list.forEach((s,i)=>{
  const article=document.createElement('article');article.className='story'+(s.featured&&filter==='all'?' story-featured':'');
  const meta=document.createElement('div');meta.className='story-meta';
  const pub=document.createElement('span');pub.textContent=s.publication;const tag=document.createElement('span');tag.textContent=s.tag;meta.append(pub,tag);
  const title=document.createElement('h3');title.textContent=s.title;
  const desc=document.createElement('p');desc.textContent=s.description;
  const link=document.createElement('a');link.href=s.url;link.target='_blank';link.rel='noopener noreferrer';link.className='story-link';link.textContent=s.linkType+' ↗';link.setAttribute('aria-label',s.linkType+': '+s.title);
  const num=document.createElement('span');num.className='story-num';num.textContent=String(i+1).padStart(2,'0');
  article.append(meta,title,desc,link,num);storiesEl.append(article);
 });
}
buttons.forEach(button=>button.addEventListener('click',()=>{buttons.forEach(b=>{const on=b===button;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});renderStories(button.dataset.filter)}));
document.getElementById('year').textContent=new Date().getFullYear();renderStories();
