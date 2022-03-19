import React, { useState, useRef } from 'react'

import { DndContext, useDraggable } from '@dnd-kit/core'
import { MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'

import DropOne from './DropOne'
import Draggables from './Draggables'

function Dnd_img1(props) {
  // const [category, setGategory] = useState(questions[question].category)
  // setGategory(questions[question].category)

  const [negNumber, setNegNumber] = useState(0)
  const [posNumber, setPosNumber] = useState(0)
  const [goodPerQuestion, setGoodPerQuestion] = useState(0)
  const [hoera, setHoera] = useState(false)

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
    if (active && over) {
    }
    const dropNode = over === null ? null : document.getElementById(over.data.current)
    const dragNode = document.getElementById(active.id)

    const dropNodesWords = document.getElementsByClassName('dropWord')
    const dragNodes = document.getElementsByClassName('dragItem')
    // console.log('dragEnd active: ', active)
    console.log('dragEnd over: ', over)
    // console.log('dragEnd dropNode: ', dropNode.childNodes[0])
    // console.log('dragEnd dragNode: ', dragNode)

    // CORRECT DROP
    if (active && over && active.data.current === over.data.current) {
      // DROP
      // two times ternery, cannot do it in one ternery statement

      dropNode.style.backgroundColor = 'var(--green-bg-color)'
      dropNode.childNodes[0].style.fontSize = '5vw'

      props.getPosNumber(props.posNumber + 1)
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
      props.getNegNumber(props.negNumber - 1)
    }
    // ALL CORRECT DROPPED: HOERA
    if (goodPerQuestion + 1 === props.conceptsOfQ.length) {
      props.getHoera(true)

      // TO NEXT QUESTION
      setTimeout(() => {
        props.getQuestion(props.question + 1)

        //RESET QUESTION
        setGoodPerQuestion(0)
        props.getHoera(false)

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

  const [dropNode, setDropNode] = useState(null)

  const handleDragOver = (event) => {
    const { over } = event
    const dropN = over === null && !props.cat_img1 ? null : document.getElementById(over.data.current)
    setDropNode(over === null && !props.cat_img1 ? null : document.getElementById(over.data.current))
    // necessary, otherwist crash if leave dragOver
    if (dropN === null) {
      dropNode.style.backgroundColor = 'var(--white-bg-colorImg1)'
    } else if (dropN.style.backgroundColor === 'var(--green-bg-color') {
      dropN.style.backgroundColor = 'var(--green-bg-color'
    } else {
      dropN.style.backgroundColor = 'var(--blue-bg-colorLight'
    }
    if (dropNode !== null) {
      dropNode.style.backgroundColor = 'var(--white-bg-colorImg1)'
    }
  }

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <DropOne key="dropKey" id="dropId" conceptsOfQ={props.conceptsOfQ} questions={props.questions} question={props.question} />
        <Draggables key={'drags'} conceptsOfQ={props.conceptsOfQ} />
      </DndContext>
    </div>
  )
}

export default Dnd_img1
