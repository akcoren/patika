import { useState } from "react";

const InputExample = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    
    const [form,setForm] = useState({name: "", surname: ""})

    const onChangeInput = (event) => {
        
        console.log(event)
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <br />
            Please enter a name:
            <br />
            <input value={name} onChange={(event)=>setName(event.target.value)}  />
            <br />
            Please enter a surname:
            <br />
            <input value={surname} onChange={(event)=>setSurname(event.target.value)}  />
            <br />
            {name} {surname}

            <hr />
            Please enter a name:
            <br />
            <input name="name" value={form.name} onChange={onChangeInput}  />
            <br />
            Please enter a surname:
            <br />
            <input name="surname" value={form.surname} onChange={onChangeInput}  />
            <br />
            {form.name} {form.surname}
            
        </div>
    );
};

export default InputExample;
