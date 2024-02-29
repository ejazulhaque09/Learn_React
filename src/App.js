import "./App.css";
import Video from "./components/Video";
import videoDB from "./data/data";
import PlayButton from "./components/PLayButton";
import Counter from "./components/Counter"
import { useState } from "react";

function App() {
  // props are nothing but arguments passed in the function
  // in js function can also be a variable name
  // function can be passed as props

  const[videos,setVideos] = useState(videoDB)
  return (
    <div className="App" onClick={()=>console.log("App")}>
      <div>
        <button onClick={()=>{ 
          setVideos([...videos,{key:videos.length+1, 
            title: "Demo DB Tutorial",
            views: "1M", 
            time: "2 year ago",
            channel: "LearnWhatMatters",
            verified: true,
          }]);
        }}>Add Video</button>
      </div>
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
        {/* <PlayButton
          message="played"
          onPlay={() => console.log("play")}
          onPause={() => console.log("pause")}
        >
          play
        </PlayButton> */}
        {/* <PlayButton message="paused" onClick={()=>alert("paused")}>pause</PlayButton> */}
      </div>
      <Counter></Counter>
    </div>
  );
}
export default App;
