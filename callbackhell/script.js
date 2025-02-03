// setTimeout(() =>
// {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() =>
//     {
//         document.body.style.backgroundColor = 'yellow';

//         setTimeout(() => { document.body.style.backgroundColor = 'green'; }, 1000);


//     }, 1000);
// }, 1000);


// let delayedColorChange = (newColor, delay, doNext) =>
// {
//     setTimeout(
//         () =>
//         {
//             document.body.style.backgroundColor = newColor;
//             doNext();
//         }, delay
//     );
// };
// delayedColorChange('blue', 3000, () => { console.log('inside callback'); });

const fakeRequestCallBack = (url, success, failure) =>
{
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() =>
    {
        if (delay > 4000)
        {
            failure();
        }
        else
        {
            success();
        }
    }, delay);
};

fakeRequestCallBack(
    'random.com',
    function ()
    {
        console.log('page 1 request success');
        fakeRequestCallBack('random.com/page2',
            function ()
            {
                console.log('page 2 reqeust sent');
            },
            function ()
            {
                console.log('page 2 request failed');
            });
    }, function () { console.log('failed'); });

