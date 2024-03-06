import "./PlayButton.css"
import { useState } from "react";
function PlayButton ({message,children,onPlay,onPause}) {
    const [playing,setPlaying] = useState(false); // don't use this approach

    function handleClick(e){
        // console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();
        setPlaying(!playing);
    }
    return(
        <button onClick={handleClick}>{children} : {playing ? '⏸️' : '▶️'} </button> // Event handler function
    )
}
export default PlayButton;   