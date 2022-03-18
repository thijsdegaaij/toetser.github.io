import React, { useState, useRef } from 'react'

import { DndContext, useDraggable } from '@dnd-kit/core'
import { MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'

import DNDHeader from './DNDHeader'

import DropOne from './DropOne'
import DroppableMultiple from './DroppableMultiple'
import Draggables from './Draggables'
import DropsFourPictures from './DropsFourPictures'

function DndContainer(props) {
  // const [category, setGategory] = useState(questions[question].category)
  // setGategory(questions[question].category)

  const [negNumber, setNegNumber] = useState(0)
  const [posNumber, setPosNumber] = useState(0)
  const [goodPerQuestion, setGoodPerQuestion] = useState(0)
  const [hoera, setHoera] = useState(false)

  const goBack = () => {
    props.getQuestion(props.question - 1)
  }
  const goFurther = () => {
    props.getQuestion(props.question + 1)
  }

  // DND-KIT
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 0,
    },
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 0,
      tolerance: 5,
    },
  })
  const sensors = useSensors(mouseSensor, touchSensor)

  const handleDragEnd = (event) => {
    const { active, over } = event
    const dropNode = document.getElementById(over.data.current)
    const dragNode = document.getElementById(active.id)

    const dropNodesWords = document.getElementsByClassName('dropWord')
    const dragNodes = document.getElementsByClassName('dragItem')
    // console.log('dragEnd active: ', active)
    // console.log('dragEnd over: ', over.data.current)
    // console.log('dragEnd dropNode: ', dropNode.childNodes[0])
    // console.log('dragEnd dragNode: ', dragNode)

    // CORRECT DROP
    if (active && over && active.data.current === over.data.current) {
      // DROP
      // two times ternery, cannot do it in one ternery statement
      props.category === 'cat_img1'
        ? (dropNode.style.backgroundColor = 'var(--green-bg-color)')
        : (dropNode.childNodes[0].style = 'font-size: 5vw; background-color: var(--green-bg-color)')
      props.category === 'cat_img1'
        ? (dropNode.childNodes[0].style.fontSize = '5vw')
        : (dropNode.childNodes[0].style = 'font-size: 5vw; background-color: var(--green-bg-color)')
      setPosNumber(posNumber + 1)
      setGoodPerQuestion(goodPerQuestion + 1)

      // DRAG
      dragNode.style.backgroundColor = 'var(--green-bg-color)'
      dragNode.style.cursor = 'default'
      dragNode.draggable = 'false'
    }
    // WRONG DROP
    else {
      // DRAG
      dragNode.style.backgroundColor = 'var(--red-bg-color)'
      setNegNumber(negNumber - 1)
    }
    // ALL CORRECT DROPPED: HOERA
    if (goodPerQuestion + 1 === props.questions[props.question].concepts.length) {
      setHoera(true)

      // TO NEXT QUESTION
      setTimeout(() => {
        props.getQuestion(props.question + 1)

        //RESET QUESTION
        setGoodPerQuestion(0)
        setHoera(false)

        // dragNode = null
        for (let node of dropNodesWords) {
          node.style = 'none'
          node.parentNode.style.backgroundColor = 'rgba(250, 250, 250, 0.7)'
        }
        for (let node of dragNodes) {
          node.style = 'none'
          node.style.borderWidth = '0px'
          node.draggable = true
        }
      }, 2000)
    }
  }

  return (
    <div>
      <DNDHeader
        questions={props.questions}
        question={props.question}
        hoera={hoera}
        posNumber={posNumber}
        negNumber={negNumber}
        getInlogShow={props.getInlogShow}
        inlogShow={props.inlogShow}
        getmenuShow={props.getmenuShow}
        menuShow={props.menuShow}
      />

      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        {/* CHOOSE CATEGORY */}
        {props.category === 'cat_img1' ? (
          <DropOne key="dropKey" id="dropId" concepts={props.concepts} questions={props.questions} question={props.question} />
        ) : (
          <DroppableMultiple key="drops" id="drops" concepts={props.concepts}></DroppableMultiple>
        )}

        <Draggables key={'drags'} concepts={props.concepts} />
      </DndContext>

      <div className="buttons">
        <button onClick={goBack}>terug</button>
        <button onClick={goFurther}>verder</button>
      </div>
    </div>
  )
}

export default DndContainer
