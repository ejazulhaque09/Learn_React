import Video from "./Video";
import PlayButton from "./PLayButton";
import useVideos from "./hooks/Videos";
import axios from 'axios'
import { useEffect} from "react";
import useVideoDispatch from "./hooks/VideoDispatch";
function VideoList({editVideo}) {
  const url = "https://my.api.mockaroo.com/videos.json?key=964a9680";

  const videos = useVideos();
  const dispatch = useVideoDispatch();


  
  useEffect(()=>{
    async function getVideos(){
      const res = await axios.get(url);
      console.log("get videos",res.data)
      dispatch({type:'LOAD', payload:res.data})
    }
    getVideos();
  },[dispatch]);
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
      {/* <button onClick={handleClick}>Get Videos</button> */}
    </>
  );
}
export default VideoList;
