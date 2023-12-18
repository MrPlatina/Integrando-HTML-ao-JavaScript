const h = document.getElementById('h');
const title = document.createElement('h1');
title.textContent = 'Título';
h.appendChild(title);

const m = document.getElementById('m');

const h2Element = document.createElement('h2');
h2Element.textContent = 'Título';

const pElement = document.createElement('p');
pElement.textContent = 'Conteúdo';

m.appendChild(h2Element);
m.appendChild(pElement);
