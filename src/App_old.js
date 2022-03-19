import './App.css'
import React, { useState } from 'react'

import initialQuestions from './initialData'
import initialUsers from './initialUsers'

import DragNDrop from './Components/DragNDrop'
import Menu from './Components/Menu'
import Inlog from './Components/Inlog'

function App() {
  const questions = initialQuestions
  const [question, setQuestion] = useState(0)
  const [inlogShow, setInlogShow] = useState(false)
  const [menuShow, setmenuShow] = useState(false)
  const category = questions[question].category
  console.log('category App..', category)

  function getInlogShowParent(props) {
    setInlogShow(!props)
    menuShow ? setmenuShow(false) : setmenuShow(false)
  }
  function getmenuShowParent(props) {
    setmenuShow(!props)
    inlogShow ? setInlogShow(false) : setInlogShow(false)
  }
  function getQuestionParent(props) {
    setQuestion(props)
  }
  console.log('question; App..', question)
  console.log('inlogshow: App..', inlogShow)
  console.log('menushow: App..', menuShow)
  // const [question, setQuestion] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Inlog users={initialUsers} inlogShow={inlogShow} questions={questions} question={question} />
        <Menu menuShow={menuShow} />
        <DragNDrop
          questions={questions}
          question={question}
          getQuestion={getQuestionParent}
          getInlogShow={getInlogShowParent}
          inlogShow={inlogShow}
          getMenuShow={getmenuShowParent}
          menuShow={menuShow}
          category={category}
        />
      </header>
    </div>
  )
}

export default App
