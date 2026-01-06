import React, { useState } from 'react'
import Pre_test from './components/Pre_test'
import Post_test from './components/Post_test'
import ReactPlayer from 'react-player'
//import sqlVideo from '../assets/sql.mp4'

const App = () => {

  let [stage, setStage] = useState("pre")

  return (
    <div> 
      {stage === "pre" && (
        <Pre_test onFinish={() => setStage("video")} />
      )}
      
      {stage === "video" && (
        <div className='video' style={{ display: "flex", justifyContent: "center" }}> 
          <ReactPlayer
              width="650px"
              height="550px"
              controls
              src='src/assets/sql.mp4'
              //url={sqlVideo}
              onReady = {() => console.log("onReady callback")}
              onStart = {() => console.log("onStart callback")}
              onPause = {() => console.log("onPause callback")}
              onEnded = {() => setStage("post") && console.log("onEnded callback")}
              onError = {() => console.log("onError callback")}
          />
        </div>    
      )}

      {stage === "post" && (
        <Post_test/> 
      )}

    </div>
    
  )
}

export default App