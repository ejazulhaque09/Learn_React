import "./App.css";
import videoDB from "./data/data";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  // props are nothing but arguments passed in the function
  // in js function can also be a variable name
  // function can be passed as props

  const [editableVideo, setEditableVideo] = useState(null);
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;
      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <div className="App">
      <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
      <VideoList
        dispatch={dispatch}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>

      <div style={{ clear: "both" }}></div>
    </div>
  );
}
export default App;
