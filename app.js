// define variables
// contact data
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const city = document.querySelector('#city');
const street = document.querySelector('#street');
const postCode = document.querySelector('#postcode');
const phone = document.querySelector('#phone');
const contact = [firstName, lastName, city, street, postCode, phone];

// app data
const form = document.querySelector('#contact-form');
const contacts = document.querySelector('#contacts-table');

// define event listeners
// add contact to table - submit button
form.addEventListener('submit', addContact);

// project functions
// addContact
function addContact(e) {
    if (firstName.value === '') {
        alert("Add new contact data!")
    } else {
        console.log("Create contact");
        const person = new Person(firstName.value, lastName.value, city.value, street.value, postCode.value, phone.value);
        const ui = new UI();
        ui.addPersonToTable(person);
        e.preventDefault();
    }
}


