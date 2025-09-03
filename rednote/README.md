    document.addEventListener('click', async () => {
        let list = [...document.querySelector('div[customer-type="0"]').firstElementChild.children].map(a => a.querySelector('a').href).join('\n')
        list +='\n'
        await navigator.clipboard.writeText('hello world');
        await navigator.clipboard.writeText(list);
        console.log(list)
    });
