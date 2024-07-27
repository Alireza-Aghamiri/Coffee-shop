let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let i = 0;
let span = document.querySelector("span");
let p = document.querySelector("p");
btn.addEventListener("click", addToDo);


function addToDo() {
    if (input.value !== "") {
        let li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
        i++;
        span.textContent = i;
        p.classList.replace("text-danger", "text-muted");
        p.textContent = "آفرین عزیزم کارهات رو با دقت وارد کن";
        input.value = "";
        input.focus();
        let lis = document.querySelectorAll("li");
        for (let li of lis) {
            li.addEventListener("click", done)
        }
    }
    else {
        p.textContent = "لطفا مثل آدم متن رو پر کن"
        p.classList.replace("text-muted", "text-danger")
    }
}

function done() {
    this.classList.toggle("done")
}


input.addEventListener("keyup", enterKey);

function enterKey(harchi) {
    if (harchi.code == "Enter") {
        addToDo()
    }
}