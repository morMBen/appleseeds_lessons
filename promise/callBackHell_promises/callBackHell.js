const div = document.querySelector('div');
div.addEventListener('click', (e) => {
  const el = e.target;
  setTimeout(() => {
    el.classList.add('red');
    setTimeout(() => {
      el.classList.add('circle');
      setTimeout(() => {
        el.classList.remove('red');
        setTimeout(() => {
          el.classList.remove('circle');
          setTimeout(() => {
            el.classList.add('purple');
            setTimeout(() => {
              el.classList.add('rotate');
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 300);
  }, 1000);
});
