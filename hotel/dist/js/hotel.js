const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn_burger');
const homeNavph = document.querySelector('.homeph');
const navPh = document.querySelector('.navph-link');
let showMenu = false;
menuBtn.addEventListener('click',toggleMenu);
function toggleMenu(){
    if(!showMenu){
        burger.classList.add('open');
        homeNavph.classList.add('open');
        navPh.classList.add('open');
        showMenu = true;
    }else{
        burger.classList.remove('open');
        homeNavph.classList.remove('open');
        navPh.classList.remove('open');
        showMenu = false;
    }
}
//testimony//
const testimonials = document.querySelectorAll('.testimonial');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

// Function to update the active testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});
//function for room
function viewRoomDetails(roomType) {
  alert(`Details for ${roomType} will be displayed here.`);
}
//doubble room 
function scrollLefts() {
  const container = document.getElementById('OriamoProducts');
  container.scrollLeft -= 200;
}

function scrollRights() {
  const container = document.getElementById('OriamoProducts');
  container.scrollLeft += 200;
}
//Twin room 
function scrollLeft() {
  const container = document.getElementById('twinRooms');
  container.scrollLeft -= 200;
}

function scrollRight() {
  const container = document.getElementById('twinRooms');
  container.scrollLeft += 200;
}
//for room ph
function scrolLefts(){
  document.getElementById('doubleRoom').scrollLeft += 200;
}
function scrolRights(){
  document.getElementById('doubleRoom').scrollLeft -= 200;
}