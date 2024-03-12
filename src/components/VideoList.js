import Video from "./Video";
import PlayButton from "./PLayButton";
import useVideos from "./hooks/Videos";
function VideoList({editVideo}) {
  const videos = useVideos();
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
