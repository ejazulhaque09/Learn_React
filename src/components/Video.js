import './Video.css';
function Video({ title,views,time, channel }) {
  return (
    <>
    <div className="container">
      <div className="pic">
        <img
          src="https://placekitten.com/640/360

"
          alt="/"
        />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
    </>
  );
}
export default Video;
