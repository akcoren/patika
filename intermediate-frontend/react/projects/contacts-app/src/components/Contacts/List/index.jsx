import { useState } from "react";

const List = ({ contacts }) => {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLowerCase());
        });

    });

    console.log(filtered)

    return (
        <div>
            <input
                placeholder="Filter Contact"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
            <ul className="list">
                {filtered.map((contact, index) => {
                    return (
                        <li key={index}>
                            <span>
                            {contact.fullname}
                                </span>
                                <span>
                                {contact.phone_number}

                                </span>
                        </li>
                    );
                })}
            </ul>
            <p>Total number of contacts: {filtered.length}</p>
        </div>
    );
};

export default List;
