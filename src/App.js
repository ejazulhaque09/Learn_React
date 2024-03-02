import "./App.css";
import videoDB from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

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
    <div className="App">
      <AddVideo addVideos={addVideos}></AddVideo>
      <VideoList videos={videos}></VideoList>


      <div style={{ clear: "both" }}>
      </div>
    </div>
  );
}
export default App;