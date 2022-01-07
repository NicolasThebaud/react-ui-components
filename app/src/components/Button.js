import Theme from "../styles/Theme";
import "../styles/Button.css";

export default function Button(props) {

    const getStyleFromProps = (props) => {
        const isRound = props.style === Theme.btnRound;
        const size = (props.font || {}).size;

        const styles = {
            background: props.bg,
            color: (props.font || {}).color,
            fontSize: `${size}px`,
            padding: `${size / 2}px ${size}px`
        };

        if (isRound) {
            styles.borderRadius = size;
        }

        return styles;
    };

    return (
        <div className="button">
            <button
                style={getStyleFromProps(props)}
                className={`btn btn-${props.style}`}
                onClick={props.onClick}
            >
                {props.label || ""}
            </button>
        </div>
    );
}
