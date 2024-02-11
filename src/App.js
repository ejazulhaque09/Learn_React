import Video from './components/Video'
import './App.css';
function App() {   // props are nothing but arguments passed in the function
  return (
    <div className='App'>
      <div>Videos</div>
      <Video title="React JS Tutorial" views = "1M" time = "1 year ago" channel = "LearnWhatMatters"/>
      <Video title="Node JS Tutorial" views = "10M" time = "1 month ago" channel = "LearnWhatMatters"/>
      <Video title="Mongo DB Tutorial" views = "1.5M" time = "6 month ago" channel = "LearnWhatMatters"/>
    </div>
  );  
}

export default App;

