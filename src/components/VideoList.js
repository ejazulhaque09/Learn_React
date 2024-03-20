import Video from "./Video";
import PlayButton from "./PLayButton";
import useVideos from "./hooks/Videos";
import axios from "axios";
import { useCallback, useEffect,useMemo} from "react";
import useVideoDispatch from "./hooks/VideoDispatch";
function VideoList({ editVideo }) {
  const url = "https://my.api.mockaroo.com/videos.json?key=964a9680";

  const videos = useVideos();
  const dispatch = useVideoDispatch();

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(url);
      console.log("get videos", res.data);
      dispatch({ type: "LOAD", payload: res.data });
    }
    getVideos();
  }, [dispatch]);
  const play = useCallback(() => console.log("Playing..."), []);
  const pause = useCallback(() => console.log("Paused..."), []);

  const memoButton = useMemo(
    () => (
      <PlayButton onPlay={play} onPause={pause}>
        Play
      </PlayButton>
    ),
    [pause, play]
  );
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
          {memoButton}
        </Video>
      ))}
      {/* <button onClick={handleClick}>Get Videos</button> */}
    </>
  );
}
export default VideoList;
