document.addEventListener("DOMContentLoaded", function () {
    // Select all thumbnail images and the main image to display the clicked one
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("displayed-image");

    // Loop through each thumbnail and add a click event listener
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", handleThumbnailClick);
    });

    // Function to handle the click event on a thumbnail
    function handleThumbnailClick() {
        // Change the main image to the clicked thumbnail's image
        changeMainImage(this);
        
        // Highlight the clicked thumbnail by adding the 'active' class
        highlightThumbnail(this);
    }

    // Function to update the main image source
    function changeMainImage(thumbnail) {
        const mainImage = document.getElementById("displayed-image");
        mainImage.src = thumbnail.src; // Set the source of the main image to the clicked thumbnail's source
    }

    // Function to highlight the clicked thumbnail by adding the 'active' class
    function highlightThumbnail(thumbnail) {
        // Remove 'active' class from all thumbnails
        const thumbnails = document.querySelectorAll(".thumbnail");
        thumbnails.forEach(img => img.classList.remove("active"));
        
        // Add 'active' class to the clicked thumbnail
        thumbnail.classList.add("active");
    }
});
// for products details
document.addEventListener("DOMContentLoaded", function () {
    // Color selection
    document.querySelectorAll(".color-option").forEach(color => {
        color.addEventListener("click", function () {
            document.querySelectorAll(".color-option").forEach(c => c.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Size selection
    document.querySelectorAll(".size-option").forEach(size => {
        size.addEventListener("click", function () {
            document.querySelectorAll(".size-option").forEach(s => s.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Quantity buttons
    let quantity = 1;
    document.getElementById("decrease").addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            document.getElementById("quantity").textContent = quantity;
        }
    });
    document.getElementById("increase").addEventListener("click", function () {
        quantity++;
        document.getElementById("quantity").textContent = quantity;
    });
});
//------reviews tab---
//tab-content and product-content
const tabBtn = document.querySelectorAll('.tab-button');
const productContent = document.querySelectorAll('.product-content');

tabBtn.forEach(button=>{
    button.addEventListener('click',function(){
        const tabList = this.getAttribute("data-tab");
        tabBtn.forEach(buttonBtn=>buttonBtn.classList.remove('active'));
        productContent.forEach(product=>product.classList.remove('active'));
        document.getElementById(tabList).classList.add('active');
        this.classList.add('active');
    
    })
})
       //hover for latest
const Btn = document.querySelector('.latest');  
const hover = document.querySelector('.latest-hover');
Btn.addEventListener('click',()=>{
    if(hover.classList.contains('latest')){
        hover.classList.remove('latest');
    }else{
        hover.classList.add('latest');
    }
}) ;
window.addEventListener('click',function(e){
    if(e.target === hover){
        hover.style.display = 'none';
    }
})
//for prroduct content faq
const faqContainer = document.querySelectorAll('.faq-container');
const faqQuestion = document.querySelector('faq-question');
const faqAnswer = document.querySelector('answer');
faqContainer.forEach(container=>{
    container.addEventListener('click', function(){
        this.classList.toggle(('active'));
    })
});
