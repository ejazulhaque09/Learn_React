import {useEffect, useRef, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "./hooks/VideoDispatch";

const initalState = {
  time: "2 year ago",
  channel: "LearnWhatMatters",
  verified: true,
  title: "",
  views: "",
};
function AddVideo({ editableVideo }) {
  const [video, setVideo] = useState(initalState);
  const dispatch = useVideoDispatch();
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initalState);
  }
  function handleChange(e) {
    e.stopPropagation();
    // console.log(e.target.name, e.target.value);
    setVideo({
      ...video,
      [e.target.name]: e.target.value, //[] is used so that firstly inside vlaue is evaluated then works as a key
    });
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
    // inputRef.current.placeholder=""
    inputRef.current.focus();
    // "type here".split("").forEach((char,i)=>{
    //   setTimeout(()=>{
    //     console.log(char)
    //     inputRef.current.placeholder = inputRef.current.placeholder+char;
    //   },200*i)
    // })
  }, [editableVideo]);

  return (
    <>
      <form>
        <input
        ref ={inputRef}
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
        <button onClick={handleSubmit}>
          {editableVideo ? "Edit" : "Add"} Video
        </button>
      </form>
    </>
  );
}
export default AddVideo;
