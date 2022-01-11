// CORE
import {forwardRef, useState} from "react";

import Theme from "../styles/Theme";
import "../styles/Tile.css";

const Tile = forwardRef((props, ref) => {
    const [internalfocus, setInternalFocus] = useState(false);

    const handleFocus = (e, focus) => {
        /* prevent Tile from being focus if parent rail isn't focused itself
            in which case event will bubble up to rail */
        if (e.target.parentElement === document.activeElement) {
            setInternalFocus(focus);
        }
    };

    return (
        <div ref={ref} tabIndex={-1} className="tile-main"
             onFocus={e => handleFocus(e, true)}
             onBlur={e => handleFocus(e, false)}
             style={{width: props.tileFormat[0], height: props.tileFormat[1] + props.fontSize + 10}}
        >
            <img className="tile-img" src={props.poster}
                 style={{outlineColor: (internalfocus || props.focus) ? Theme.green : "transparent"}}/>
            <div className="tile-title"
                 style={{
                     top: `${props.tileFormat[1] + 10}px`,
                     fontSize: `${props.fontSize}px`,
                     color: Theme.green,
                     opacity: (internalfocus || props.focus) ? 1 : 0
                }}>
                {props.title}
            </div>

            {props.children}
        </div>
    );
});

export default Tile;
