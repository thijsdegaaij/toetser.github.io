import React, { useState, useRef } from 'react'

import { DndContext, useDraggable } from '@dnd-kit/core'
import { MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'

import DNDHeader from './DNDHeader'

import DropOne from './DropOne'
import DropMultiple from './DropMultiple'
import Draggables from './Draggables'
import DropsFourPictures from './DropsFourPictures'

function Dnd_img4(props) {
  // const [category, setGategory] = useState(questions[question].category)
  // setGategory(questions[question].category)

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

      dropNode.childNodes[0].style = 'font-size: 5vw; background-color: var(--green-bg-color)'

      props.getPosNumber(props.posNumber + 1)

      setGoodPerQuestion(goodPerQuestion + 1)
      dropNode.style.borderColor = 'white'

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
          if (props.cat_img1) {
            node.style.borderColor = 'red'
          }
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
  const [dragNode, setDragNode] = useState(null)

  const handleDragOver = (event) => {
    const { active, over } = event
    const dropN = over === null && !props.cat_img1 ? null : document.getElementById(over.data.current)
    setDropNode(over === null && !props.cat_img1 ? null : document.getElementById(over.data.current))
    // necessary, otherwist crash if leave dragOver
    if (dropN === null && !props.cat_img1) {
      dropNode.style.borderColor = 'white'
    } else {
      dropN.style.borderColor = 'lightblue'
    }
    if (dropNode !== null && !props.cat_img1) {
      dropNode.style.borderColor = 'white'
    }
  }
  const handleDragMove = (event) => {
    const { active } = event
    setDragNode(document.getElementById(active.id))
    const dragN = document.getElementById(active.id)
    console.log('dragN', dragN)
    dragN.style.backgroundColor = 'var(--blue-bg-colorLight)'
    // increases to the right:
    // dragN.style.width = '120%'
  }

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd} onDragOver={handleDragOver} sensors={sensors}>
        <DropMultiple key="drops" id="drops" conceptsOfQ={props.conceptsOfQ}></DropMultiple>
        <Draggables key="drags" conceptsOfQ={props.conceptsOfQ} />
      </DndContext>
    </div>
  )
}

export default Dnd_img4
