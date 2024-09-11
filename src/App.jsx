import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [isBanned, setIsBanned] = useState(false);

    return (
        <>
            <span>{isBanned ? "Вы забанены" : "Вы разбанены"}</span>
            <br />
            {isBanned ? (
                <button onClick={() => setIsBanned(false)}>Разбанить</button>
            ) : (
                <button onClick={() => setIsBanned(true)}>Забанить</button>
            )}
        </>
    );
}

export default App;
