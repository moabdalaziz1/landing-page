/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

// main Variables
const ul = document.getElementById('navbar__list');
const sections = document.querySelectorAll('main section');
console.log(sections[0].getBoundingClientRect().y);

// build the navbar
for (let i = 0; i < sections.length; i++) {
  const li = document.createElement('li');
  // const anchor = document.createElement('a');
  // anchor.setAttribute('href', `#${sections[i].id}`);
  li.setAttribute('id', `#${sections[i].id}`);
  li.textContent = `Section ${i + 1}`;
  // li.appendChild(anchor);
  ul.appendChild(li);
}

// Scroll to anchor ID using scrollTO event
const scrollLinks = document.querySelectorAll('#navbar__list li');
// Loop over the navbar items and do magic!
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    // Scroll to the Section that clicked
    const id = e.currentTarget.getAttribute('id').slice(1);
    const sectionElement = document.getElementById(id);
    window.scrollBy({
      left: 0,
      top: sectionElement.getBoundingClientRect().y,
      behavior: 'smooth',
    });
  });
});

// Add class 'active' to section when near top of viewport
function addActiveClass() {
  for (let i = 0; i < sections.length; i++) {
    if (
      sections[i].getBoundingClientRect().y <= 150 &&
      sections[i].getBoundingClientRect().y >= -470
    ) {
      sections[i].classList.add('active');
      // Adding (active__item) class for the the navigation items
      scrollLinks[i].classList.add('active__item');
    } else {
      sections[i].classList.remove('active');
      // Removing (active__item) class for the the navigation items
      scrollLinks[i].classList.remove('active__item');
    }
  }
}
document.addEventListener('scroll', addActiveClass);
