const search = document.querySelector('#search');
const links = document.querySelectorAll('.photo-wrap a');

search.addEventListener('keyup', function() {
  links.forEach(link  => {
    if (link.getAttribute('title').toLowerCase().indexOf(search.value.toLowerCase()) > -1) {
      link.parentElement.style.display = '';
    } else {
      link.parentElement.style.display = 'none';
    }
  });
});
