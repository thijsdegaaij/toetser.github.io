import React, { useState, useRef } from 'react'

import { DndContext, useDraggable } from '@dnd-kit/core'
import { MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'

import DNDHeader from './DNDHeader'

import Dnd_img1 from './DND_img1'
import Dnd_img4 from './DND_img4'

import DropOne from './DropOne'
import DropMultiple from './DropMultiple'
import Draggables from './Draggables'
import DropsFourPictures from './DropsFourPictures'

function DndContainer(props) {
  // const [category, setGategory] = useState(questions[question].category)
  // setGategory(questions[question].category)

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

  const [goodPerQuestion, setGoodPerQuestion] = useState(0)
  const [hoera, setHoera] = useState(false)

  const goBack = () => {
    props.getQuestion(props.question - 1)
  }
  const goFurther = () => {
    props.getQuestion(props.question + 1)
  }

  return (
    <div className={hoera ? 'hoera dndcontainer ' : 'dndcontainer'}>
      <DNDHeader
        users={props.users}
        questions={props.questions}
        question={props.question}
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
          question={props.question}
          getQuestion={props.getQuestion}
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
          question={props.question}
          getQuestion={props.getQuestion}
          posNumber={posNumber}
          getPosNumber={getPosNumberParent}
          negNumber={negNumber}
          getNegNumber={getNegNumber}
          hoera={hoera}
          getHoera={getHoeraParent}
        />
      )}

      <div className="buttons">
        <button onClick={props.question > 0 ? goBack : null}>terug</button>
        <button onClick={goFurther}>verder</button>
        <button onClick={() => props.getCmsShow(props.cmsShow)}>cms</button>
      </div>
    </div>
  )
}

export default DndContainer
