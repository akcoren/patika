const Garbage = () => {


    const name = "zurna"
    const item = "zurnaItem"
    const isLoggedIn = true;
  


    return (
        <div>
            <h1>Hello!</h1>
            <p className="xyz">lorem ipsun sit dolor amet</p>

            <label htmlFor="myinput">
                Name
                <input id="myinput" />
            </label>

            <h1>{name}</h1>
            <h1>{`Backtick power ${item} here!`}</h1>

            <h2>conditional rendering</h2>
            <h2>
                {isLoggedIn &&
                    `This is rendered conditionally, condition: ${isLoggedIn}`}
            </h2>
            <h2>
                {!isLoggedIn &&
                    `This is rendered conditionally, inverse condition: ${!isLoggedIn}`}
            </h2>
            <h2>
                {!isLoggedIn
                    ? `This is rendered conditionally, inverse condition: ${!isLoggedIn}`
                    : `Zurna`}
            </h2>
            <h3>{item}</h3>
        </div>
    );
};

export default Garbage;
