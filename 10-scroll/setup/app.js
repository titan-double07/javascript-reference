const c = console.log.bind(console);
const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.nav');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');


//show links dynamically(adding height dynamically)
navToggle.addEventListener('click', () => {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height =`${linksHeight}px`
  } else {
    linksContainer.style.height = 0;
  }
})
//fixed nav when scrolled
window.addEventListener('scroll', () => {
  const navHeight = navBar.getBoundingClientRect().height;
  (window.scrollY > navHeight) ? navBar.classList.add('fixed-nav')
    : navBar.classList.remove('fixed-nav')

})
//smooth scroll to inpage links
const scrollLinks = document.querySelectorAll('.scroll-link')

for (const links of scrollLinks) {
  links.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href')
    const page = document.querySelector(id)
    const navHeight = navBar.getBoundingClientRect().height
    const linkContainerHeight = linksContainer.getBoundingClientRect().height
    let position = page.offsetTop -navHeight
    const fixed = navBar.classList.contains('fixed-nav')
    if(!fixed) position=position-navHeight
    if(navHeight>82) position = position+linkContainerHeight 
    window.scroll(0, position)
linksContainer.style.height=0
  })
}

//dynamically add date to footer
const date = new Date().getFullYear();
document.querySelector('#date').innerHTML=date