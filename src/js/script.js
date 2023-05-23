const themeButton = document.getElementById('theme-button');
    const body = document.querySelector('body');

    themeButton.addEventListener('click', () => {
      console.log("ola");
      body.classList.toggle('theme-dark');
      body.classList.toggle('theme-light');
    });