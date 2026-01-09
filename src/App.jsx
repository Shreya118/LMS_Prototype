import React, { useState } from 'react'
import Pre_test from './components/Pre_test'
import Post_test from './components/Post_test'
import Video from './components/video'
//import sqlVideo from '../assets/sql.mp4'

const App = () => {

  const [stage, setStage] = useState("pre")

  return (
    <div> 
      {stage === "pre" && (
        <Pre_test onFinish={() => setStage("video")} />
      )}
      
      {stage === "video" && (
        <Video onFinish={() => setStage("post")} />
      )}

      {stage === "post" && (
        <Post_test/> 
      )}

    </div>
    
  )
}

export default App