import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 259);
docTwo = new Payment("mario", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the mario website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => console.log(inv.amount, inv.client, inv.format()));
const form = document.querySelector(".new-item-form");
const type = document.getElementById("type");
const tofrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "Invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
