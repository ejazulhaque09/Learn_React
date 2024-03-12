import { useContext } from "react";
import "./Video.css";
import ThemeContext from "./context/ThemeContex";
import useVideoDispatch from "./hooks/VideoDispatch";
function Video({
  title,
  views,
  time,
  channel = "LearnWhatMatters",
  verified,
  children,
  id,
  editVideo,
}) {
  const theme = useContext(ThemeContext)
  const dispatch = useVideoDispatch();
  return (
    <>
      <div className={`container ${theme}`}>
        <button className = "close"onClick={()=>dispatch({ type: "DELETE", payload: id })}>X</button>
        <button className = "edit"onClick={()=>editVideo(id)}>Edit</button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="GoToChannel" />
        </div>
        <div className="title">{title}</div>
        {/* <div className="channel">{channel} {verified ?'✅': null}</div> */}
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
export default Video;
