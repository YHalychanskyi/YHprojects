document.querySelector('.themes').addEventListener('change', (event) => {
    if (event.target.nodeName === 'INPUT') {
        document.documentElement.classList.remove('light','dark');
        document.documentElement.classList.add(event.target.value);
    }
});