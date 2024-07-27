// slideShow
let slideShow = document.querySelectorAll("div.slideshow div.poster img");
let buttonRight = document.querySelector("header div.slideshow i.fa-caret-right");
let buttonLeft = document.querySelector("header div.slideshow i.fa-caret-left");
let cover = document.querySelector("header div.slideshow div.cover img");
let numberSlide = 0;

// nav
let burger = document.querySelector("div.slideshow div.nav-md div.hamburger-menu i");
let navigation = document.querySelector("div.slideshow div.dropdown");
let close = document.querySelector("div.slideshow div.dropdown div.close i");
let mask = document.querySelector("div.mask");

// slideShow caption
let captionClass = document.querySelector("header div.slideshow div.primary h2");

// advertising
let closeOrder = document.querySelector("div.advertising div.taking-orders div.order div.close-order svg");
let orderForm = document.querySelector("div.advertising div.taking-orders div.order");
let openOrder = document.querySelector("div.advertising div.taking-orders span");

// slideShow product
let buttonRightProduct=document.querySelector("div.btn-product .right");
let buttonLeftProduct=document.querySelector("div.btn-product .left");
let cards=document.querySelectorAll("div.main-content div.Second-products section div.card");
let moveproduct=0;
let translateX="";

// Event button slideshow
buttonRight.addEventListener("click", right);
buttonLeft.addEventListener("click", left);

// function button slideshow
function right() {
    if (numberSlide < slideShow.length && numberSlide > 0) {
        let a = numberSlide - 1;
        numberSlide = a;
        let src = slideShow[numberSlide].getAttribute("src");
        cover.setAttribute("src", src);
        captionSlideShow();
    }
    else {
        numberSlide = slideShow.length - 1;
        let src = slideShow[numberSlide].getAttribute("src");
        cover.setAttribute("src", src);
        captionSlideShow();
    }
}
function left() {
    if (numberSlide < slideShow.length - 1) {
        let a = numberSlide + 1;
        numberSlide = a;
        let src = slideShow[numberSlide].getAttribute("src");
        cover.setAttribute("src", src);
        captionSlideShow();
    }
    else {
        numberSlide = 0;
        let src = slideShow[numberSlide].getAttribute("src");
        cover.setAttribute("src", src);
        captionSlideShow();
    }
}

function captionSlideShow() {
    switch (numberSlide) {
        case 0:
            captionClass.classList.remove("caption-cover");
            captionClass.textContent = "یه فنجون قهوه داغ دقیقا همون چیزیه که بهش نیاز داری"
            break;
        case 1:
            captionClass.classList.add("caption-cover");
            captionClass.textContent = "هرچیزی که در مورد قهوه باید بدونی"
            break;
        case 2:
            captionClass.classList.remove("caption-cover");
            captionClass.textContent = "روزتو با یه فنجون قهوه خوب شروع کن"
            break;
    }
}
// Event navigation
burger.addEventListener("click", nav);
close.addEventListener("click", closeNavigation);
mask.addEventListener("click", closeNavigation);

// function navigation
function nav() {
    navigation.classList.add("show");
    mask.classList.add("display");
}
function closeNavigation() {
    navigation.classList.remove("show");
    mask.classList.remove("display");
}

// Event advertising
closeOrder.addEventListener("click", closeForm);
openOrder.addEventListener("click", openForm);
mask.addEventListener("click", closeForm);

// function advertising
function openForm() {
    orderForm.classList.add("display");
    mask.classList.add("display");
}
function closeForm() {
    orderForm.classList.remove("display");
    mask.classList.remove("display");
}

// Event slideShow product
buttonRightProduct.addEventListener("click",previousProduct);
buttonLeftProduct.addEventListener("click",nextProduct);

// function slideShow product
function previousProduct() {
    if (moveproduct>0) {
        moveproduct-=100;
        translateX=`translateX(${moveproduct}%)`;
        for (const card of cards) {
            card.style.transform=translateX;
            console.log(card);
        }
    }
}
function nextProduct() {
    if (moveproduct<300) {
        moveproduct+=100;
        translateX=`translateX(${moveproduct}%)`;
        for (const card of cards) {
            card.style.transform=translateX;
            console.log(card);
        }
    }
}