import { useState, useEffect } from 'react'

function QuesBox({ question, options, answer, setScore }) {
  const [answered, setAnswered] = useState(false)

  // reset answered when question changes
  useEffect(() => {
    setAnswered(false)
  }, [question])

  return (
    <div className='flex flex-col gap-6 items-center'>
      <h2 className='bg-[#8AC926] p-4 rounded-2xl text-2xl font-medium break-words'>{question}</h2>

      <ul className='flex flex-col gap-2 w-full'>
        {options.map((option) => (
          <li key={option}>
            <button
              className='w-full bg-[#6A4C93] p-2 text-lg rounded-2xl text-white hover:bg-purple-700 active:bg-purple-900'
              disabled={answered}
              onClick={() => {
                if (!answered) {
                  if (option === answer) setScore(prev => prev + 1)
                  setAnswered(true)
                }
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuesBox