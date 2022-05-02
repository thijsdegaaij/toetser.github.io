import React, { useState } from 'react'

import DNDHeader from './DNDHeader'

import Dnd_img1 from './DND_img1'
import Dnd_img4 from './DND_img4'

function DndContainer(props) {
  const [posNumber, setPosNumber] = useState(0)
  const [negNumber, setNegNumber] = useState(0)

  const getPosNumberParent = (posNumber) => {
    setPosNumber(posNumber)
  }
  const getNegNumber = (negNumber) => {
    setNegNumber(negNumber)
  }
  const getHoeraParent = (props) => {
    setHoera(props)
  }

  const [hoera, setHoera] = useState(false)

  const goBack = () => {
    props.getQuestion(props.questionNr - 1)
  }
  const goFurther = () => {
    props.getQuestion(props.questionNr + 1)
  }

  return (
    <div className={hoera ? 'hoera dndcontainer ' : 'dndcontainer'}>
      <DNDHeader
        users={props.users}
        questions={props.questions}
        questionNr={props.questionNr}
        hoera={hoera}
        posNumber={posNumber}
        negNumber={negNumber}
        getInlogShow={props.getInlogShow}
        inlogShow={props.inlogShow}
        getMenuShow={props.getMenuShow}
        menuShow={props.menuShow}
      />

      {props.category === 'cat_img1' ? (
        <Dnd_img1
          key="dropKey1"
          id="dropId1"
          conceptsOfQ={props.conceptsOfQ}
          questions={props.questions}
          questionNr={props.questionNr}
          getQuestion={props.getQuestion}
          questionData={props.questionData}
          posNumber={posNumber}
          getPosNumber={getPosNumberParent}
          negNumber={negNumber}
          getNegNumber={getNegNumber}
          hoera={hoera}
          getHoera={getHoeraParent}
        />
      ) : (
        <Dnd_img4
          key="dropsKey4"
          id="drops4"
          conceptsOfQ={props.conceptsOfQ}
          questions={props.questions}
          questionNr={props.questionNr}
          getQuestion={props.getQuestion}
          questionData={props.questionData}
          posNumber={posNumber}
          getPosNumber={getPosNumberParent}
          negNumber={negNumber}
          getNegNumber={getNegNumber}
          hoera={hoera}
          getHoera={getHoeraParent}
        />
      )}

      <div className="buttons">
        <button onClick={props.questionNr > 0 ? goBack : null}>terug</button>
        <button onClick={goFurther}>verder</button>
        <button onClick={() => props.getCmsShow(props.cmsShow)}>cms</button>
      </div>
    </div>
  )
}

export default DndContainer
