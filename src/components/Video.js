import "./Video.css";
function Video({
  title,
  views,
  time,
  channel = "coder Dost",
  verified,
  children,
}) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://placekitten.com/640/360" alt="/" />
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
