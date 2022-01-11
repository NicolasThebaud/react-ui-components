// STYLE
import Theme from "../styles/Theme";
import "../styles/ProgressBar.css";

export default function ProgressBar (props) {

    return (
        <div className="pbar-main"
             style={{width: `${props.width}px`}}>
            <div className="pbar-progress"
                 style={{background: props.focus ? props.color : Theme.white, width: `${props.progress}%`}}>
            </div>
        </div>
    );
};
