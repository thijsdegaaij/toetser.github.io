import React, { useState } from 'react'

import './App.css'
import initialQuestions from './initialData'
import initialUsers from './initialUsers'
import Inlog from './Components/Inlog'
import Menu from './Components/Menu'
import CMSImage from './Components/CMS_image'
import DNDContainer from './Components/DNDContainer'

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
  const conceptsOfQ = questions[question].conceptsOfQ

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
  // CCMS
  const [cmsShow, setCmsShow] = useState(false)
  function getCmsShowParent(props) {
    setCmsShow(!props)
  }

  console.log('question; App:', question)
  console.log('category App:', category)
  console.log('questionData App:', questionData)
  console.log('conceptsOfQ App:', conceptsOfQ)
  // console.log('inlogshow: App:.', inlogShow)
  // console.log('menushow: App:', menuShow)

  return (
    <div className="App">
      <header className="App-header">
        {inlogShow ? <Inlog users={initialUsers} questions={questions} question={question} /> : null}
        {menuShow ? <Menu /> : null}
        {cmsShow ? <CMSImage questions={questions} question={question} /> : null}
        <DNDContainer
          users={initialUsers}
          questions={questions}
          question={question}
          getQuestion={getQuestionParent}
          category={category}
          conceptsOfQ={conceptsOfQ}
          inlogShow={inlogShow}
          getInlogShow={getInlogShowParent}
          menuShow={menuShow}
          getMenuShow={getmenuShowParent}
          cmsShow={cmsShow}
          getCmsShow={getCmsShowParent}
        />
      </header>
    </div>
  )
}

export default App
