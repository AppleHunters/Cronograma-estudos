document.querySelectorAll('aside').forEach(aside => {
  const ul = aside.querySelector('ul');

  aside.addEventListener('click', () => {
    if (ul.style.display === 'block') {
      ul.style.display = 'none';
    } else {
      ul.style.display = 'block';
    }
  });
});
