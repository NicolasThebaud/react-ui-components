// CORE
import {forwardRef, useState, useEffect} from "react";

import Theme from "../styles/Theme";
import "../styles/Tile.css";

const Tile = forwardRef((props, ref) => {
    const [focus, setFocus] = useState(false);

    const handleFocus = (focus) => {
        setFocus(focus);
    };

    return (
        <div ref={ref} tabIndex={-1} className="tile-main"
             onFocus={() => handleFocus(true)}
             onBlur={() => handleFocus(false)}
        >
            <img className="tile-img" src={props.poster}
                 style={{outlineColor: focus ? Theme.green : "transparent"}}/>
            <div className="tile-title"
                 style={{color: Theme.green, opacity: focus ? 1 : 0}}>
                {props.title}
            </div>
        </div>
    );
});

export default Tile;
