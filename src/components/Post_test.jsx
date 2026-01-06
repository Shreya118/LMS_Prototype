import React, { useRef, useState } from 'react'
import "./Pre_test.css"
import data from '../assets/data'

const Post_test = () => {
  
  let [index, setIndex] = useState(0)
  let [lock, setLock] = useState(false)
  let [score, setScore] = useState(0)
  let [result, setResult] = useState(false)

  const [questions] = useState(() =>
    [...data].sort(() => Math.random() - 0.5).slice(0, 3)
  )

const question = questions[index]


  let Option1 = useRef(null)
  let Option2 = useRef(null)
  let Option3 = useRef(null)
  let Option4 = useRef(null)

  let option_array = [Option1, Option2, Option3, Option4]


  const checkAns = (e, ans) => {
    if(lock===false) {
      if (question.answer===ans) {
          e.target.classList.add("correct")
          setLock(true)
          setScore(prev=>prev+1)
      }
      else{
          e.target.classList.add("wrong")
          setLock(true)
          option_array[question.answer-1].current.classList.add("correct")
      }
    }
  }

  
  const next = () => {
    if(lock===true) {
      if(index === 2) {
        setResult(true)
        return 0;
      }
      if (lock && index < data.length - 1) {
        setIndex(prev => prev + 1)
        setLock(false)
      }
      option_array.map((option) => {
        option.current.classList.remove("wrong")
        option.current.classList.remove("correct")
        return null
      })
    }
  }


  return (
    <div className='container'>
        <h1>Hello Students</h1>
        <div>
            <h2>Based on the video you watched you will be given a test</h2>
            <h2>Answer the below Post-test on the topic "SQL Queries"</h2>
        </div>

        <hr/>
        <br/>

        {result?<></>:<>
        <div>
          <h2>{index+1}. {question.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => {checkAns(e,1)}}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => {checkAns(e,2)}}>{question.option2}</li>
            <li ref={Option3} onClick={(e) => {checkAns(e,3)}}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => {checkAns(e,4)}}>{question.option4}</li>
          </ul>
          <button onClick={next}>Next</button>

          <div className='index'>{index+1} 0f 3</div>
        </div>
        </>}

        {result && (
          <>
            <h2>You Scored {score} out of 3</h2>
            <h1>Thank You</h1>
          </>
        )}

    </div>
  )
}

export default Post_test