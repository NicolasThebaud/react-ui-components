// CORE
import {useState, useCallback, forwardRef} from "react";

// COMPONENTS
import Tile from "./Tile";

// STYLES
import "../styles/Rail.css";

const Rail = forwardRef((props, ref) => {
    const [internalFocus, setInternalFocus] = useState(null);

    const handleFocus = (e, focus) => {
        setInternalFocus(focus ? 0 : null);
    };

    const handleKeyDown = useCallback((e) => {
        let index;
        let direction;

        if (e.key === "ArrowRight") {
            index = Math.min(internalFocus + 1, props.data.length - 1);
            direction = 1;
            setInternalFocus(index);
        } else if (e.key === "ArrowLeft") {
            index = Math.max(internalFocus - 1, 0);
            direction = 0;
            setInternalFocus(index);
        } else {
            return;
        }

        const tileRect = ref.current.querySelector(`.tile_${index}`).getBoundingClientRect();
        const halfTile = tileRect.left + (props.tileFormat[0] / 2);
        const railX = ref.current.getBoundingClientRect().left;
        const threshold = 960;
        const maxWidth = tileRect.width * props.data.length;

        if ((halfTile > threshold && direction === 1)
            || (halfTile < threshold && direction === 0)) {
            const maxRight = Math.max(threshold - halfTile + railX, 1920 - maxWidth);
            ref.current.style.left = `${Math.min(0, maxRight)}px`;
        }
    });

    const renderTiles = (props) => {
        return props.data.map((tileData, i) => (
            <div key={`tile_${i}`} className={`tile_${i} rail-tile`}>
                <Tile
                    focus={internalFocus === i}
                    title={tileData.title}
                    poster={tileData.poster}
                    tileFormat={props.tileFormat}
                    fontSize={props.fontSize}
                />
            </div>
        ));
    }

    return (
        <div ref={ref} tabIndex={-1} className="rail-main" style={props.style}
             onKeyDown={handleKeyDown}
             onFocus={(e) => handleFocus(e, true)}
             onBlur={(e) => handleFocus(e, false)}
        >
            {renderTiles(props)}
        </div>
    );
});

export default Rail;
