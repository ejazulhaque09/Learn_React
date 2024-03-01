import { useState } from "react";
import "./AddVideo.css";
function AddVideo({addVideos}) {
  const [video, setVideo] = useState({
    time: "2 year ago",
    channel: "LearnWhatMatters",
    verified: true,
  });

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    // console.log(video);
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
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
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
