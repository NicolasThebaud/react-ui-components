// CORE
import {createRef} from "react";
import {useNavigate} from "react-router-dom";

// COMPONENTS
import Button from "./components/Button";
import Input from "./components/Input";
import Tile from "./components/Tile";
import ProgressBar from "./components/ProgressBar";

// STYLES
import Theme from "./styles/Theme";
import './App.css';
import ProgressTile from "./components/ProgressTile";

function App() {
    const navigate = useNavigate();
    const tileRef = createRef();

    return (
        <div className="App">
            <Button
                label="focus tile"
                style={Theme.btnRound}
                bg={Theme.black}
                font={{color: Theme.white, size: Theme.h2}}
                onClick={() => tileRef.current.focus()}
            />
            <Button
                label="goto /rails"
                style={Theme.btnSquare}
                bg={Theme.white}
                font={{color: Theme.black, size: Theme.h2}}
                onClick={() => navigate("/rails")}
            />

            <div style={{height: "50px"}}></div>
            <Input/>

            <div style={{height: "50px"}}></div>
            <Tile
                ref={tileRef}
                tileFormat={Theme.SMALL_TILE}
                fontSize={18}
                title="base tile"
                poster="http://static-cdn.tv.sfr.net/wcsstore/CanalTvodStore/images/catalog/5/6/4/CTV_MOVIE_68465_src_2p3.jpg?w=300"
            />

            <div style={{height: "50px"}}></div>
            <ProgressBar
                width={300}
                progress={50}
                color={Theme.green}/>

            <div style={{height: "50px"}}></div>
            <ProgressTile
                tileFormat={Theme.SMALL_TILE}
                fontSize={18}
                title="base tile"
                poster="http://static-cdn.tv.sfr.net/wcsstore/CanalTvodStore/images/catalog/5/6/4/CTV_MOVIE_68465_src_2p3.jpg?w=300"
            />
        </div>
    );
}

export default App;
