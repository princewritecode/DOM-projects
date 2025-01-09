let background = document.querySelector('#bg');

let onMouseMove = (e) =>
{
    let message = document.getElementById('message');
    message.textContent += 'hi';

    let dotdiv = document.createElement('div');
    dotdiv.className = 'dot';
    document.body.appendChild(dotdiv);
    dotdiv.style.top = `${e.clientY}px`;
    dotdiv.style.left = `${e.clientX}px`;

};

background.addEventListener('mousemove', onMouseMove);