class LS {
    saveContact(person){
        // get person data from Local Storage
        let persons;
        // if data not exists
        if (localStorage.getItem('persons') === null){
            persons = [];
        } else {
            // data is exists
            // get them from Local Storage
            persons = JSON.parse(localStorage.getItem('persons'));
        }
        persons.push(person);
        localStorage.setItem('persons', JSON.stringify(persons));
    }

    getContacts () {
        // get person data from Local Storage
        let persons;
        // if data not exists
        if (localStorage.getItem('persons') === null){
            persons = [];
        } else {
            // data is exists
            // get them from Local Storage
            persons = JSON.parse(localStorage.getItem('persons'));
        }
        return persons;
    }
}