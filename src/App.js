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
  const [questionNr, setQuestionNr] = useState(0)
  function getQuestionParent(props) {
    setQuestionNr(props)
  }
  const questionData = questions[questionNr]

  // SHORTCUTS
  const category = questions[questionNr].category
  const conceptsOfQ = questions[questionNr].conceptsOfQ

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

  console.log('questionNr; App:', questionNr)
  console.log('category App:', category)
  console.log('questionData App:', questionData)
  console.log('conceptsOfQ App:', conceptsOfQ)
  // console.log('inlogshow: App:.', inlogShow)
  // console.log('menushow: App:', menuShow)

  return (
    <div className="App">
      <header className="App-header">
        {inlogShow ? (
          <Inlog users={initialUsers} questions={questions} questionNr={questionNr} />
        ) : null}
        {menuShow ? <Menu /> : null}
        {cmsShow ? <CMSImage questions={questions} questionNr={questionNr} /> : null}
        <DNDContainer
          users={initialUsers}
          questions={questions}
          questionNr={questionNr}
          getQuestion={getQuestionParent}
          questionData={questionData}
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
