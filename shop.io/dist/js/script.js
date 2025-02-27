let dropdown = document.querySelector('.dropdown');
let dropdownText = document.querySelector('.dropdown-text');
let dropdownHover = document.querySelector('.dropdown-hover');
let menuBtn = document.querySelector('.menu-btn');
let burger = document.querySelector('.menu-btn_burger');
//toggle dropdown
function toggleMenu(){
    dropdown.classList.toggle('active');
}
dropdown.addEventListener('click',toggleMenu);
//menu toggle
let showMenu = false;
menuBtn.addEventListener("click",function(){
    if(!showMenu){
        burger.classList.add('open');
        showMenu = true;
    }else{
        burger.classList.remove('open');
        showMenu = false;
    }
})
console.log(burger.classList.contains('open'));
//menu dropdown
let navToggle = document.querySelector('.menu-btn');
let links = document.querySelector('.links');
navToggle.addEventListener("click",function(){
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }else{
        links.classList.add('show-links');
    }
})
//review
const ratingStar = document.querySelector('.star');
const comment = document.querySelector('.comment');
const name = document.querySelector('.name');
const btn = document.querySelector('#comment-btn');

let comments = [
    {comment:"i really enjoy is app to my satisfaction", name:'Mike Abddul'},
    {comment:"just simply the best of all thanks for amazing experience", name:'Wale Barns'},
    {comment:"such a darling a i really need to come back all the time ", name:'Lory Tanye'},
    {comment:"wow! just wow! thanks to the developer so easy to explore", name:'Mumu Me'},
];
 btn.addEventListener('click',()=>{
    let random =Math.floor(Math.random() * comments.length);
    comment.innerText = comments[random].comment;
    name.innerText = comments[random].name;

 })