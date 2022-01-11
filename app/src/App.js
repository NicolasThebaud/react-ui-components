// CORE
import {createRef} from "react";

// COMPONENTS
import Button from "./components/Button";
import Input from "./components/Input";
import Tile from "./components/Tile";
import ProgressBar from "./components/ProgressBar";
import Rail from "./components/Rail";

// STYLES
import Theme from "./styles/Theme";
import './App.css';
import ProgressTile from "./components/ProgressTile";

function App() {
    const tileRef = createRef();
    const railRef = createRef();

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

    return (
        <div className="App">
            {/*<Button
                label="focus tile"
                style={Theme.btnRound}
                bg={Theme.black}
                font={{color: Theme.white, size: Theme.h2}}
                onClick={() => tileRef.current.focus()}
            />
            <Button
                label="focus rail"
                style={Theme.btnSquare}
                bg={Theme.white}
                font={{color: Theme.black, size: Theme.h2}}
                onClick={() => railRef.current.focus()}
            />

            <div style={{height: "50px"}}></div>
            <Input/>

            <div style={{height: "50px"}}></div>
            <Tile
                ref={tileRef}
                title="base tile"
                poster="http://static-cdn.tv.sfr.net/wcsstore/CanalTvodStore/images/catalog/5/6/4/CTV_MOVIE_68465_src_2p3.jpg?w=300"
            />

            <div style={{height: "50px"}}></div>
            <ProgressBar
                width={300}
                progress={50}
                color={Theme.green}/>

            <div style={{height: "50px"}}></div>*/}
            <Rail ref={railRef} data={railData} tileFormat={Theme.BIG_TILE} fontSize={32}/>

            {/*<div style={{height: "50px"}}></div>
            <ProgressTile
                title="base tile"
                poster="http://static-cdn.tv.sfr.net/wcsstore/CanalTvodStore/images/catalog/5/6/4/CTV_MOVIE_68465_src_2p3.jpg?w=300"
            />*/}
        </div>
    );
}

export default App;
