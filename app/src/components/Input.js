// CORE
import { useState } from "react";

import Theme from "../styles/Theme";
import "../styles/Input.css";


export default function Input(props) {
    const [active, setActive] = useState(false);

    return (
        <div className="input-main">
            <input type="text" placeholder="placeholder"
                   className="input"
                   style={{borderColor: active ? Theme.green : Theme.black}}
                   onFocus={() => setActive(true)}
                   onBlur={() => setActive(false)}
            />
        </div>
    );
}
