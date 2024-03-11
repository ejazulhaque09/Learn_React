import Video from "./Video";
import PlayButton from "./PLayButton";
import VideosContext from "./context/VideosContext";
import { useContext } from "react";
function VideoList({editVideo}) {
  const videos = useContext(VideosContext)
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("playing", video.title, video.key)}
            onPause={() => console.log("paused", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}
export default VideoList;
