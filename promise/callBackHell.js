const div = document.querySelector('div');

div.addEventListener('click', (e) => {
  const el = e.currentTarget;
  setTimeout(() => {
    el.classList.add('circle');
    setTimeout(() => {
      el.classList.add('red');
      setTimeout(() => {
        el.classList.remove('circle');
        setTimeout(() => {
          el.classList.remove('red');
          setTimeout(() => {
            el.classList.add('purple');
            setTimeout(() => el.classList.add('rotate'), 1000);
          }, 1000);
        }, 500);
      }, 300);
    }, 500);
  }, 1000);
});
