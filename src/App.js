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
  const[editableVideo,setEditableVideo] = useState(null)

  function addVideos(video){
    setVideos([
        ...videos,
        {...video, id: videos.length+1}
      ]);
  }
  function deleteVideo(id){
    setVideos(videos.filter(video=>video.id!==id))
    console.log(id);
  }
  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id))
  }

  function updateVideo(video){
    const index = videos.findIndex(v=>v.id===video.id)
    const newVideo = [...videos]
    newVideo.splice(index,1,video)
    setVideos(newVideo)
  }

  return (
    <div className="App">
      <AddVideo updateVideo={updateVideo}addVideos={addVideos} editableVideo = {editableVideo}></AddVideo>
      <VideoList deleteVideo = {deleteVideo} editVideo={editVideo} videos={videos}></VideoList>


      <div style={{ clear: "both" }}>
      </div>
    </div>
  );
}
export default App;