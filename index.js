



const elements = document.querySelectorAll('.photo, .info');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('photo')) {
        entry.target.classList.add('showright');
      } else if (entry.target.classList.contains('info')) {
        entry.target.classList.add('showleft');
      }
    } else {
      entry.target.classList.remove('showright');
      entry.target.classList.remove('showleft');
    }
  });
});

elements.forEach(element => observer.observe(element));
