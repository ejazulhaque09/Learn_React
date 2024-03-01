import "./App.css";
import Video from "./components/Video";
import videoDB from "./data/data";
import PlayButton from "./components/PLayButton";
import { useState } from "react";
import AddVideo from "./components/AddVideo";

function App() {
  // props are nothing but arguments passed in the function
  // in js function can also be a variable name
  // function can be passed as props
  const[videos,setVideos] = useState(videoDB)

  function addVideos(video){
    setVideos([
        ...videos,
        {...video, key: videos.length+1}
      ]);
  }


  return (
    <div className="App" onClick={()=>console.log("App pe click hua hai")}>
      <AddVideo addVideos={addVideos}></AddVideo>
      {videos.map((video) => (
        <Video
          key={video.key}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        > 
          <PlayButton
            message="played"
            onPlay={() => console.log("playing",video.title)}
            onPause={() => console.log("paused",video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
      </div>
    </div>
  );
}
export default App;