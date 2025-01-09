const img = document.querySelector('img');
const p = document.querySelector('p');
img.addEventListener('click', () =>
{
    p.textContent = 'clicked on the cat image';
});