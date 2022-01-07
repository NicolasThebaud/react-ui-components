// CORE
import { useState } from "react";

// STYLE
import Theme from "../styles/Theme";
import "../styles/ProgressBar.css";

export default function ProgressBar (props) {

    return (
        <div className="pbar-main" style={{width: `${props.width}px`}}>
            <div className="pbar-progress"
                 style={{background: props.color, width: `${(props.width * props.progress) / 100}px`}}
            >
            </div>
        </div>
    );
};
