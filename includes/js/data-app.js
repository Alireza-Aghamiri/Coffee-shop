let subscription = ["1001"];
let nameCustomer = ["علیرضا"];
let family = ["آقامیری"];
let number = ["09386803608"];
let address = ["تهران-تجریش-خ نیاوران-پ208"];
let inputName = document.getElementById("name-customer");
let inputFamily = document.getElementById("family-customer");
let inputNumber = document.getElementById("number-customer");
let prodouct = document.getElementById("prodouct-coffee");
let inputAddress = document.getElementById("address-customer");
let codeOrder = document.querySelector("input.code-order");
let searchCustomer = document.querySelector(".search-customer-order");
let saveOrderButton = document.querySelector(".save-order");
let saveOrder = [];
let searchResultOrder = 0;
let trSend = document.querySelector("table.table-send");
let tableList = document.querySelector("table.table-list");
let row = 0;
let rowRegistration = 1;
let message = document.querySelector("div.message")
let close = document.querySelector("div.message svg");
let btn = document.querySelector("div.message button");
let p_message = document.querySelector("div.message p");
let saveRegistration = document.querySelector(".save-registration");
let cod=0;
// event search order
searchCustomer.addEventListener("click", searchCustomerInData);

// function
function searchCustomerInData() {
    let index = codeOrder.value;
    searchResultOrder = index - 1001;
    searchOrder(searchResultOrder);
}
function searchOrder(a) {
    inputName.value = nameCustomer[a];
    inputFamily.value = family[a];
    inputNumber.value = number[a];
    inputAddress.value = address[a];
}

// event save order
saveOrderButton.addEventListener("click", saveDataOrder);

// function
function saveDataOrder() {
    if (inputName.value > "" && inputFamily.value > "" && inputNumber.value > "" && inputAddress.value > "" && codeOrder.value > "" && prodouct.value > "") {
        row = row + 1;
        let tr = document.createElement("tr");
        trSend.appendChild(tr);

        let td_a = document.createElement("td");
        tr.appendChild(td_a);
        td_a.textContent = row;

        let td_b = document.createElement("td");
        tr.appendChild(td_b);
        td_b.textContent = codeOrder.value;

        let td_c = document.createElement("td");
        tr.appendChild(td_c);
        td_c.textContent = inputName.value;

        let td_d = document.createElement("td");
        tr.appendChild(td_d);
        td_d.textContent = inputFamily.value;

        let td_e = document.createElement("td");
        tr.appendChild(td_e);
        td_e.textContent = prodouct.value;

        let td_f = document.createElement("td");
        tr.appendChild(td_f);
        td_f.textContent = "درحال انجام";

        let td_g = document.createElement("td");
        tr.appendChild(td_g);
        let button_a = document.createElement("button");
        td_g.appendChild(button_a);
        button_a.innerHTML = "انجام درخواست";

        inputName.value = "";
        inputFamily.value = "";
        inputNumber.value = "";
        inputAddress.value = "";
        codeOrder.value = "";
        prodouct.value = "";

        button_a.addEventListener("click", prodouctMessage);
        function prodouctMessage() {
            if (td_f.textContent == "درحال انجام") {
                td_f.textContent = "تحویل سفارش";
                message.classList.toggle("unshow");
                p_message.textContent = "تحویل کالا با موفقیت ثبت گردید.";
            }
            else {
                message.classList.toggle("unshow");
                p_message.textContent = "تحویل سفارش قبلا ثبت گردیده است.";
            }
        }
        message.classList.toggle("unshow");
        p_message.textContent = "اطلاعات فرم سفارش ثبت شد.";
    }
    else {
        message.classList.toggle("unshow");
        p_message.textContent = "لطفا تمامی فیلد های فرم را تکمیل فرمایید."
    }
}

// event message
close.addEventListener("click", closeMessege);
btn.addEventListener("click", closeMessege);

function closeMessege() {
    message.classList.toggle("unshow");
}

// event save registration
saveRegistration.addEventListener("click", save_form_registration);

// function
function save_form_registration() {
    let nameRegistration = document.querySelector("div.main div.registration-box input.name-registration");
    let familyRegistration = document.querySelector("div.main div.registration-box input.family-registration");
    let numberRegistration = document.querySelector("div.main div.registration-box input.number-registration");
    let addressRegistration = document.querySelector("div.main div.registration-box input.address-registration");
    if (nameRegistration > "" && familyRegistration > "" && numberRegistration > "" && addressRegistration > "") {
        rowRegistration = rowRegistration + 1;
        cod++;
        let subscription_cod = cod + 1001;
        let tr = document.createElement("tr");
        tableList.appendChild(tr);

        let td_h = document.createElement("td");
        tr.appendChild(td_h);
        td_h.textContent = rowRegistration;

        let td_i = document.createElement("td");
        tr.appendChild(td_i);
        td_i.textContent = subscription_cod;
        subscription.push(subscription_cod);


        let td_j = document.createElement("td");
        tr.appendChild(td_j);
        td_j.textContent = nameRegistration.value;
        nameCustomer.push(nameRegistration.value);

        let td_k = document.createElement("td");
        tr.appendChild(td_k);
        td_k.textContent = familyRegistration.value;
        family.push(familyRegistration.value);

        let td_l = document.createElement("td");
        tr.appendChild(td_l);
        td_l.textContent = numberRegistration.value;
        number.push(numberRegistration.value);

        let td_n = document.createElement("td");
        tr.appendChild(td_n);
        td_n.textContent = addressRegistration.value;
        address.push(addressRegistration.value);

        nameRegistration.value="";
        familyRegistration.value="";
        numberRegistration.value="";
        addressRegistration.value="";

        message.classList.toggle("unshow");
        p_message.textContent = "ثبت اطلاعات مشتری با موفقیت انجام گردید.";

    }
}
