console.log('Bienvenido a la consola!');

const sections = document.querySelectorAll(".section");
const sectionTitles = document.querySelectorAll(".section-title");

var animating;

sectionTitles.forEach((title, i)=>{
  sectionTitles[i].addEventListener('click',()=>{
    if(animating) return false;
    animating = true;
    sections.forEach((section, i)=>{
      sections[i].classList.remove("active");
    });
    sections[i].classList.add("active");
    setTimeout(()=> animating = false, 500);
  });
});