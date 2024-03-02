import { useState } from "react";
import "./AddVideo.css";

const initalState = {
    time: "2 year ago",
    channel: "LearnWhatMatters",
    verified: true,
    title:'',
    views: ''
}
function AddVideo({addVideos}) {
  const [video, setVideo] = useState(initalState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initalState);
  } 
  function handleChange(e) {
    e.stopPropagation();
    // console.log(e.target.name, e.target.value);
    setVideo({...video,
      [e.target.name]: e.target.value  //[] is used so that firstly inside vlaue is evaluated then works as a key
    })
  }
  return ( 
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}

        />
        <button
          onClick={handleSubmit}

        >
          Add Video
        </button>
      </form>
    </>
  );
}
export default AddVideo;