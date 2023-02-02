import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";

const Contacts = () => {
    const [contacts, setContacts] = useState([
        {
            fullname: "zurnaci",
            phone_number: 23947234,
        },       
        {
            fullname: "kemalettin",
            phone_number: 313131,
        },
        {
            fullname: "namik",
            phone_number: 81247985,
        },

 
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div>
            Contacts
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
};

export default Contacts;
