import "./Video.css";
function Video({
  title,
  views,
  time,
  channel = "LearnWhatMatters",
  verified,
  children,
  id,
  deleteVideo,
  editVideo,
}) {
  return (
    <>
      <div className="container">
        <button className = "close"onClick={()=>deleteVideo(id)}>X</button>
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
