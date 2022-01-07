// CORE
import {useState, useCallback, forwardRef, useEffect} from "react";

// COMPONENTS
import Tile from "./Tile";

import Theme from "../styles/Theme";
import "../styles/Rail.css";

const Rail = forwardRef((props, ref) => {
    const [internalFocus, setInternalFocus] = useState(null);

    useEffect(() => {
        if (internalFocus !== null) {
            document.querySelector(`#tile_${internalFocus}>div`).focus();
        }
    }, [internalFocus]);

    const handleFocus = (e, focus) => {
        if (focus && e.target === ref.current) {
            setInternalFocus(0);
        } else if (!focus) {
            document.querySelector(`#tile_${internalFocus}>div`).blur();
        }
    };

    const handleKeyDown = useCallback((e) => {
        switch(e.key) {
            case "ArrowRight":
                setInternalFocus(Math.min(internalFocus + 1, props.data.length - 1));
                break;
            case "ArrowLeft":
                setInternalFocus(Math.max(internalFocus - 1, 0));
                break;
        }
    });

    const renderTiles = (props) => {
        return props.data.map((tileData, i) => (
            <div key={`tile_${i}`} id={`tile_${i}`} className="rail-tile">
                <Tile
                      focus={internalFocus === i}
                      title={tileData.title}
                      poster={tileData.poster}
                />
            </div>
        ));
    }

    return (
        <div ref={ref} tabIndex={-1} className="rail-main"
             onKeyDown={handleKeyDown}
             onFocus={(e) => handleFocus(e, true)}
             onBlur={(e) => handleFocus(e, false)}
        >
            {renderTiles(props)}
        </div>
    );
});

export default Rail;
