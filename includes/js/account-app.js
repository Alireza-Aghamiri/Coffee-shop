let sidebarMenu = document.querySelector(".sidebar-menu");
let sidebarMenuName = document.querySelector(".sidebar-menu-name");
let order = document.querySelector(".order");
let orderName = document.querySelector(".order-name"); 
let orderBox = document.querySelector("div.order-box");
let registrationName = document.querySelector(".registration-name");
let registration = document.querySelector(".registration");
let registrationBox = document.querySelector("div.registration-box");
let send = document.querySelector(".send");
let sendName = document.querySelector(".send-name");
let sendBox = document.querySelector("div.send-box");
let list = document.querySelector(".list");
let listName = document.querySelector(".list-name");
let listBox = document.querySelector("div.list-box");
let setting = document.querySelector(".setting");
let settingName = document.querySelector(".setting-name");
let main = document.querySelector(".main");
let icon = document.querySelector(".icon");
let sidebar=document.querySelector(".sidebar");
let nav=document.querySelector("div.sidebar div.nav");
let mainContent=document.querySelector("div.main-content");

// Event sidebarMenu
sidebarMenu.addEventListener("click", runSidebarMenu);
sidebarMenuName.addEventListener("click", runSidebarMenu);

// function
function runSidebarMenu() {
    mainContent.classList.toggle("mini-sidebar-menu");
    sidebar.classList.toggle("mini-sidebar");
    nav.classList.toggle("unshow");
}

// Event order
order.addEventListener("click", showOrder);
orderName.addEventListener("click", showOrder);

// function
function showOrder() {
    unShow();
    orderBox.classList.add("show");
    order.classList.add("selected");
}

// Event registration
registration.addEventListener("click", showRegistration);
registrationName.addEventListener("click", showRegistration);

// function
function showRegistration() {
    unShow();
    registrationBox.classList.add("show");
    registration.classList.add("selected");
}

// Event send
send.addEventListener("click", showSend);
sendName.addEventListener("click", showSend);

// function
function showSend() {
    unShow();
    sendBox.classList.add("show");
    send.classList.add("selected");
}

// Event list
list.addEventListener("click", showList);
listName.addEventListener("click", showList);

// function
function showList() {
    unShow();
    listBox.classList.add("show");
    list.classList.add("selected");
}

// Event setting
setting.addEventListener("click", runSetting);
settingName.addEventListener("click", runSetting);

// function
function runSetting() {
    unShow();
    setting.classList.add("selected");
}

// unshow function
function unShow() {
    for (let i = 0; i < main.children.length; i++) {
        main.children[i].classList.remove("show");
    }
    for (let i = 0; i < icon.children.length; i++) {
        icon.children[i].classList.remove("selected");
    }
}