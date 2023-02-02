import { useState, useEffect } from "react";
import './styles.css'

import List from "./List";
import Form from "./Form";

const Contacts = () => {
    const [contacts, setContacts] = useState([
        {
            fullname: "Zurnaci",
            phone_number: 23947234,
        },       
        {
            fullname: "Kemalettin",
            phone_number: 313131,
        },
        {
            fullname: "Namik",
            phone_number: 81247985,
        },

 
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
};

export default Contacts;
