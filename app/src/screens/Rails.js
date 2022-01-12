// CORE
import {createRef} from "react";

// COMPONENTS
import Rail from "../components/Rail";

// STYLES
import Theme from "../styles/Theme";
import '../App.css';

function Rails() {
    const railRef = createRef();
    const railRef2 = createRef();

    const poster = "http://static-cdn.tv.sfr.net/wcsstore/CanalTvodStore/images/catalog/5/6/4/CTV_MOVIE_68465_src_2p3.jpg?w=300";
    const railData = [
        {title: "rail 1", poster},
        {title: "rail 2", poster},
        {title: "rail 3", poster},
        {title: "rail 4", poster},
        {title: "rail 5", poster},
        {title: "rail 6", poster},
        {title: "rail 7", poster},
        {title: "rail 8", poster},
        {title: "rail 9", poster},
    ];
    const extraData = [
        {title: "rail 10", poster},
        {title: "rail 11", poster},
        {title: "rail 12", poster},
        {title: "rail 13", poster},
        {title: "rail 14", poster},
        {title: "rail 15", poster},
        {title: "rail 16", poster},
        {title: "rail 17", poster},
        {title: "rail 18", poster},
        {title: "rail 19", poster},
    ];

    return (
        <div className="Rails">
            <Rail ref={railRef} data={railData} tileFormat={Theme.BIG_TILE} fontSize={32}/>

            <Rail ref={railRef2} data={railData.concat(extraData)} tileFormat={Theme.SMALL_TILE} fontSize={18} style={{top: "600px"}}/>
        </div>
    );
}

export default Rails;
