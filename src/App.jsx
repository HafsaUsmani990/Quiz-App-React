import { useState } from 'react'
import QuesBox from './components/QuesBox'
import './index.css'

function App() {
  const [currentques, setCurrentques] = useState(0)
  const [quizfinished, setQuizfinished] = useState(false)
  const [score, setScore] = useState(0)

  const questions = [
    {
  question: "What command is used to create a new React app?",
  options: ["npx create-react-app", "npm install react", "react-new-app"],
  answer: "npx create-react-app"
},
{
  question: "Which hook is used for side effects in React?",
  options: ["useState", "useEffect", "useContext"],
  answer: "useEffect"
},
{
  question: "What does JSX stand for?",
  options: ["JavaScript XML", "Java Syntax Extension", "JSON XML"],
  answer: "JavaScript XML"
},
{
  question: "Which company developed React?",
  options: ["Google", "Facebook", "Microsoft"],
  answer: "Facebook"
},
{
  question: "What is used to style React components?",
  options: ["CSS", "Tailwind", "Both"],
  answer: "Both"
}]

  return (

      <div className='bg-[#ff595e] min-h-screen flex justify-center items-center'>
        <div className='bg-[#FFCA3A] flex flex-col justify-center items-center p-15 gap-6 rounded-2xl w-100 shadow-xl/30'>
        <h1 className='text-4xl font-bold'>Quiz App React</h1>

        {quizfinished ? (
          <div className='text-lg font-medium'
          >Quiz Finished! Your score is {score}/5</div>
        ) : (
          <>
          <QuesBox
          question={questions[currentques].question}
          options={questions[currentques].options}
          answer={questions[currentques].answer}
          setScore={setScore}
        />

        <div className='flex flex-row justify-between w-75 mt-4'>
        <button
        className='bg-sky-600 px-4 py-2 rounded-2xl shadow-xl
        hover:bg-sky-600 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500 active:bg-sky-700'
        onClick={()=> {
          if(currentques > 0){
            setCurrentques(currentques - 1)
          }
        }}
        >{"<"}Previous</button>

        <button
        className='bg-sky-600 px-4 py-2 rounded-2xl shadow-xl
        hover:bg-sky-600 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500 active:bg-sky-700'
          onClick={() => {
            if (currentques + 1 < questions.length) {
              setCurrentques(currentques + 1)
            } else {
              setQuizfinished(true)
            }
          }}
        >Next{">"}</button>
        </div>
          </>
        )}
        </div>
      </div>
  )
}

export default App
