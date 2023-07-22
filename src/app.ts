import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.getElementById("type") as HTMLSelectElement;
const tofrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

// list template 
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul)

form.addEventListener("submit", (e: Event): void => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value === "Invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, "end")

})