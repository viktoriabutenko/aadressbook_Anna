// define variables

// app data html elements
const form = document.querySelector('#contact-form');
const contacts = document.querySelector('#contacts-table');

// define event listeners
// add contact to table - submit button
form.addEventListener('submit', addContact);
// delete contact from table - link click
contacts.addEventListener('click', deleteContact);

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

    //create new LS object
    const ls = new LS()

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
    }
    e.preventDefault();
}

// deleteContact
function deleteContact(e) {
    // create new ui object
    const ui = new UI();
    // delete contact
    ui.deletePersonFromTable (e.target);
    // set alert
    ui.alertMessage("Person contact is deleted", "ok");
    e.preventDefault();
}


