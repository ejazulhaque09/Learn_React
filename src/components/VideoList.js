import Video from "./Video";
import PlayButton from "./PLayButton";
function VideoList({ videos,deleteVideo,editVideo}) {
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
          deleteVideo={deleteVideo}
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
