const output = document.getElementById('output');

document.querySelector('form').addEventListener('submit', (e) =>
{
    output.textContent = `a submit event is fired ${e.timeStamp}`;
    e.preventDefault();
});

