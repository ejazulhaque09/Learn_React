import "./App.css";
import videoDB from "./data/data";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./components/context/ThemeContex";
import VideosContext from "./components/context/VideosContext";
import VideoDispatchContext from "./components/context/VideoDispatchContext";
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
  // const themeContext = useContext(ThemeContext);
  const [mode, SetMode] = useState("darkMode");

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }
  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div
            className={`App ${mode}`}
            onClick={() => {
              console.log("App");
            }}
          >
            <button
              onClick={() =>
                SetMode(mode === "darkMode" ? "lightMode" : "darkMode")
              }
            >
              Mode
            </button>
            <AddVideo editableVideo={editableVideo}></AddVideo>
            <VideoList editVideo={editVideo}></VideoList>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}
export default App;
