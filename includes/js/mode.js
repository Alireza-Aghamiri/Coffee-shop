// settint
let openSetting = document.querySelector(".main-content .menu-setting .icon");
let menuSetting = document.querySelector(".main-content .menu-setting");
let mode = document.querySelector(".mode i");
let body = document.body;
let p = document.querySelectorAll("p");
let buttonProduct = document.querySelectorAll(".button");
let contents = document.querySelectorAll(".content");
let logos = document.querySelectorAll(".main-logo");
let flag = true;

// Event setting
openSetting.addEventListener("click", openMenuSetting);
mode.addEventListener("click", theme);

// function setting
function openMenuSetting() {
    openSetting.classList.toggle("open-menu");
    menuSetting.classList.toggle("open-menu-setting");
}
function theme() {
    iconMode();
    bodyAndContent();
    setButton();
    changeLogo();
}
function iconMode() {
    mode.classList.toggle("fa-sun");
    mode.classList.toggle("fa-moon");
}
function bodyAndContent() {
    body.classList.toggle("background-night");
    for (const content of contents) {
        content.classList.toggle("setContentTheme")
    }
}
function setButton() {
    for (const button of buttonProduct) {
        button.classList.toggle("style-button-night");
    }
}
function changeLogo() {
    if (flag) {
        for (const logo of logos) {
            logo.setAttribute("src", "images/icon/2.png");
            flag = false;
        }
    }
    else {
        for (const logo of logos) {
            logo.setAttribute("src", "images/icon/1.svg");
            flag = true;
        }
    }
}

// ------------------FontFace-----------------
let vazir = document.querySelector(".menu-setting p.vazir");
let vazirBold = document.querySelector(".menu-setting p.vazir-bold");
let parastoo = document.querySelector(".menu-setting p.parastoo");
let yekan = document.querySelector(".menu-setting p.yekan");
let iranianSans = document.querySelector(".menu-setting p.iranianSans");


// EVENT
vazir.addEventListener("click", chantFontToVazir);
vazirBold.addEventListener("click", chantFontToVazirBold);
parastoo.addEventListener("click", chantFontToParastoo);
yekan.addEventListener("click", chantFontToYekan);
iranianSans.addEventListener("click", chantFontToIranianSans);

function chantFontToVazir() {
    for (const content of contents) {
        fontNon()
        content.classList.add("vazir");
    }
}
function chantFontToVazirBold() {
    fontNon()
    for (const content of contents) {
        content.classList.add("vazir-bold");
    }
}
function chantFontToParastoo() {
    fontNon()
    for (const content of contents) {
        content.classList.add("parastoo");
    }
}
function chantFontToYekan() {
    fontNon()
    for (const content of contents) {
        content.classList.add("yekan");
    }
}
function chantFontToIranianSans() {
    fontNon()
    for (const content of contents) {
        content.classList.add("iranianSans");
    }
}

function fontNon() {
    for (const content of contents) {
        content.classList.remove("vazir");
        content.classList.remove("vazir-bold");
        content.classList.remove("parastoo");
        content.classList.remove("yekan");
        content.classList.remove("iranianSans");
    }
}