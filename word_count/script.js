const result = document.querySelector('#result');
const input = document.querySelector('input');
const check = document.querySelector('#check');
check.addEventListener('click', () =>
{
    let count = 0;
    for (let i of input.value)
    {
        if (i !== ' ')
        {
            count += 1;
        }
    }

    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = count;
    input.value = ' ';
    localStorage.setItem('wordcount', count);

});

