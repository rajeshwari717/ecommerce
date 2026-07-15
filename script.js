// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
});

// ==========================
// ADD TO CART
// ==========================

let cart = 0;

const cartCount = document.getElementById("cart-count");

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        cartCount.innerHTML = cart;

        button.innerHTML = "✔ Added";

        button.style.background = "#28a745";

        button.disabled = true;

        showToast("Product Added to Cart");

    });

});

// ==========================
// SEARCH PRODUCTS
// ==========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const product = card.querySelector("h3").textContent.toLowerCase();

        if(product.includes(value)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

});

// ==========================
// TOAST MESSAGE
// ==========================

function showToast(message){

    const toast = document.createElement("div");

    toast.innerHTML = message;

    toast.style.position = "fixed";

    toast.style.bottom = "30px";

    toast.style.right = "30px";

    toast.style.background = "#222";

    toast.style.color = "white";

    toast.style.padding = "15px 25px";

    toast.style.borderRadius = "10px";

    toast.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

    toast.style.zIndex = "999";

    toast.style.animation = "fadeIn .5s";

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.remove();

    },2000);

}

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

const hiddenElements=document.querySelectorAll(".card,.review,.category");

hiddenElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

observer.observe(el);

});

// ==========================
// NAVBAR SHADOW
// ==========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 8px 20px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

}

});

// ==========================
// HERO BUTTON
// ==========================

const heroButton=document.querySelector(".hero button");

heroButton.addEventListener("click",()=>{

document.getElementById("products").scrollIntoView({

behavior:"smooth"

});

});

// ==========================
// NEWSLETTER BUTTON
// ==========================

const subscribe=document.querySelector(".newsletter button");

subscribe.addEventListener("click",()=>{

const email=document.querySelector(".newsletter input").value;

if(email===""){

alert("Please Enter Email");

}

else{

alert("Subscribed Successfully!");

document.querySelector(".newsletter input").value="";

}

});

// ==========================
// FLOATING EFFECT
// ==========================

setInterval(()=>{

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.style.transition=".3s";

});

},1000);

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

let circle=document.createElement("span");

circle.style.width="20px";

circle.style.height="20px";

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.6)";

circle.style.left=e.offsetX+"px";

circle.style.top=e.offsetY+"px";

circle.style.transform="translate(-50%,-50%)";

circle.style.animation="ripple .6s linear";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// ==========================
// CSS ANIMATION
// ==========================

const style=document.createElement("style");

style.innerHTML=`

button{

position:relative;

overflow:hidden;

}

@keyframes ripple{

from{

width:0;

height:0;

opacity:1;

}

to{

width:300px;

height:300px;

opacity:0;

}

}

@keyframes fadeIn{

from{

opacity:0;

transform:translateY(30px);

}

to{

opacity:1;

transform:translateY(0);

}

}

`;

document.head.appendChild(style);