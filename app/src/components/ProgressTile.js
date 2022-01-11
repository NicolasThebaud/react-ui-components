// CORE
import {useState} from "react";

// COMPONENTS
import Tile from "./Tile";
import ProgressBar from "./ProgressBar";

import Theme from "../styles/Theme";
import "../styles/ProgressTile.css";

export default function ProgressTile(props) {
    const [internalfocus, setInternalFocus] = useState(false);

    const handleFocus = (focus) => {
        setInternalFocus(focus);
    };

    return (
        <div className="ptile-main"
             onFocus={() => handleFocus(true)}
             onBlur={() => handleFocus(false)}
        >
            <Tile title={props.title} poster={props.poster} >
                <ProgressBar
                    focus={internalfocus}
                    progress={50}
                    color={Theme.green} />
            </Tile>
        </div>
    )
}
