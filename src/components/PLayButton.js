import "./PlayButton.css"
import { useContext, useState } from "react";
import ThemeContext from "./context/ThemeContex";
function PlayButton ({message,children,onPlay,onPause}) {
    const theme = useContext(ThemeContext)

    const [playing,setPlaying] = useState(false); // don't use this approach

    function handleClick(e){
        // console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();
        setPlaying(!playing);
    }
    return(
        <button className={theme} onClick={handleClick}>{children} : {playing ? '⏸️' : '▶️'} </button> // Event handler function
    )
}
export default PlayButton;   