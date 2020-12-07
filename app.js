// define variables

// app data html elements
const form = document.querySelector('#contact-form');
const contacts = document.querySelector('#contacts-table');
const clearBtn = document.querySelector('#clear-contacts');
const filterInput = document.querySelector('#filter');

// define event listeners
// page reload event - get data from Local Storage
document.addEventListener('DOMContentLoaded', getContacts);
// add contact to table - submit button
form.addEventListener('submit', addContact);
// delete contact from table - link click
contacts.addEventListener('click', deleteContact);
// clear all contacts from table
clearBtn.addEventListener('click', clearContacts);
// filter contact from table
filterInput.addEventListener('keyup', filterContacts);


// project functions
// addContact
function addContact(e) {
    // contact data from form element
    const firstName = document.querySelector('#first_name').value;
    const lastName = document.querySelector('#last_name').value;
    const city = document.querySelector('#city').value;
    const street = document.querySelector('#street').value;
    const postCode = document.querySelector('#postcode').value;
    const phone = document.querySelector('#phone').value;

    // create new ui object
    const ui = new UI();

    // create new Local Storage object
    const ls = new LS();

    // control form data
    if (firstName === "" | lastName === "" | city === "" | street === "" | postCode === "" | phone === "") {
        ui.alertMessage("Add ALL new contact data!", "problem");
    } else {
        // create new person object with form data
        const person = new Person(firstName, lastName, city, street, postCode, phone);
        // add person object data to html table
        ui.addPersonToTable(person);
        // save person data to Local Storage
        ls.saveContact(person);
        ui.alertMessage("Added contact to address book!", "ok");
        // clear form inputs
        ui.clearInputs();
    }
    e.preventDefault();
}

// deleteContact
function deleteContact(e) {
    // create new ui object
    const ui = new UI();
    // create new Local Storage object
    const ls = new LS();
    // delete contact
    const deleteBtn = e.target;
    const firstname = deleteBtn.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    const lastname = deleteBtn.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    // delete from UI
    ui.deletePersonFromTable(e.target);
    // delete from LS
    const isDeleted = ls.deleteContact(firstname, lastname);
    // set alert
    if(isDeleted){
        ui.alertMessage("Person contact is deleted", "ok");
    } else {
        ui.alertMessage("Problem with deleting data", "problem");
    }
    e.preventDefault();
}

// getContacts
function getContacts() {
    // create new Local Storage object
    const ls = new LS();
    // create new ui object
    const ui = new UI();
    // get constacts from LS
    const persons = ls.getContacts();
    // get each contact from LS and transform to Person object
    persons.forEach(function (person) {
        const personData = new Person(
            person['firstName'],
            person['lastName'],
            person['city'],
            person['street'],
            person['postcode'],
            person['phone']);
        // create UI object for html table row
        ui.addPersonToTable(personData);
    });
}

// clearContacts
function clearContacts(e) {
    // create new ui object
    const ui = new UI();
    // clear contacts from UI
    ui.clearContacts();
    // create new Local Storage object
    const ls = new LS();
    // clear contacts from LS
    const isCleared = ls.clearContacts();
    if (isCleared) {
        // add alert about it
        ui.alertMessage("Contacts are cleared", "ok");
    } else {
        ui.alertMessage("Some problems, sorry", "problem");
    }

}

// filterContacts
function filterContacts(e) {
    const text = e.target.value.toLowerCase();
    for (i = 0; i < contacts.rows.length; i++) {
        const contactData = contacts.rows[i].outerText.toLowerCase();
        if (contactData.indexOf(text) != -1) {
            contacts.rows[i].style.display = '';
        } else {
            contacts.rows[i].style.display = 'none';
        }
    }
}