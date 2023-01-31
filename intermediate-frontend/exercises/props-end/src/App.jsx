import "./App.css";
import User from "./components/User";

function App() {
    const friends = [
        { id: 1, name: "Ahmet" },
        { id: 2, name: "Tayfun" },
        { id: 3, name: "Gokhan" },
    ];

    return (
        <>
            <User
                name="Zurna"
                surname="Seven"
                isLoggedIn={true}
                age={29}
                friends={friends}
                address={{
                    title: "Cankaya/Ankara",
                    zip: 34755,
                }}
            />
        </>
    );
}

export default App;
