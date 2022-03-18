import React, { useState } from 'react'

import './App.css'
import initialQuestions from './initialData'
import initialUsers from './initialUsers'
import Inlog from './Components/Inlog'
import Menu from './Components/Menu'
import DndContainer from './Components/DND'

function App() {
  // QUESTIONS
  const questions = initialQuestions

  // QUESTION
  const [question, setQuestion] = useState(0)
  function getQuestionParent(props) {
    setQuestion(props)
  }
  const questionData = questions[question]

  // SHORTCUTS
  const category = questions[question].category
  const concepts = questions[question].concepts

  // INLOG
  const [inlogShow, setInlogShow] = useState(false)
  function getInlogShowParent(props) {
    setInlogShow(!props)
    menuShow ? setmenuShow(false) : setmenuShow(false)
  }

  // MENU
  const [menuShow, setmenuShow] = useState(false)
  function getmenuShowParent(props) {
    setmenuShow(!props)
    inlogShow ? setInlogShow(false) : setInlogShow(false)
  }

  console.log('question; App:', question)
  console.log('category App:', category)
  console.log('concepts App:', questionData)
  console.log('concepts App:', concepts)
  // console.log('inlogshow: App:.', inlogShow)
  // console.log('menushow: App:', menuShow)

  return (
    <div className="App">
      <header className="App-header">
        <Inlog users={initialUsers} inlogShow={inlogShow} questions={questions} question={question} />
        <Menu menuShow={menuShow} />
        <DndContainer
          questions={questions}
          question={question}
          getQuestion={getQuestionParent}
          category={category}
          concepts={concepts}
          inlogShow={inlogShow}
          getInlogShow={getInlogShowParent}
          menuShow={menuShow}
          getmenuShow={getmenuShowParent}
        />
      </header>
    </div>
  )
}

export default App
