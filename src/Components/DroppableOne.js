import React, { useState, useRef } from 'react'
import CanvasLines from './CanvasLines'

// DROPS
function Drops(props) {
  const dropNodes = document.getElementsByClassName('dropItem')
  const dragNodes = document.getElementsByClassName('dragItem')
  // console.log('dragnodes..', dragNodes)

  const [goodPerQuestion, setGoodPerQuestion] = useState(0)

  const dragOverHandler = (e) => {
    e.preventDefault()
  }
  const dragLeaveHandler = (e) => {
    e.preventDefault()
  }

  const dropHandler = (e) => {
    e.preventDefault()
    console.log('dropItem:', e.target)
    console.log('dropWord:', e.target.firstChild.innerHTML)
    console.log('dragNodeInnerHtml:', props.dragNode.current.innerHTML)

    // CORRECT DROP
    if (e.target.firstChild.innerHTML === props.dragNode.current.innerHTML) {
      e.target.childNodes[0].style = 'font-size: 5vw; background-color: var(--green-bg-color)'
      e.target.style.backgroundColor = 'var(--green-bg-color'
      props.dragNode.current.style = 'background-color: var(--green-bg-color); cursor: default'
      props.dragNode.current.draggable = false

      props.getPosNumber(props.posNumber + 1)
      setGoodPerQuestion(goodPerQuestion + 1)
    }
    // WRONG DROP
    else {
      props.dragNode.current.style.backgroundColor = 'var(--red-bg-color)'
      props.getNegNumber(props.negNumber - 1)
    }
    // ALL DROPPED
    if (goodPerQuestion + 1 === props.questions[props.question].conceptsOfQ.length) {
      props.getHoera(true)

      setTimeout(() => {
        props.getQuestion(props.question + 1)

        //RESET QUESTION
        setGoodPerQuestion(0)
        props.getHoera(false)
        props.dragNode.current = null
        for (let node of dropNodes) {
          // console.log('node:', node)
          //drpWord
          node.childNodes[0].style = 'font-size: 0px; background-color: null'
          //dropItem
          node.style.backgroundColor = null
        }
        for (let node of dragNodes) {
          node.style = 'cursur: pointer; color: black'
          node.draggable = true
        }
      }, 2000)
    }
  }

  // const styleCanvas = (concept) => {
  //   background-image: process.env.PUBLIC_URL + `/img/${props.questions[props.question].imageGroot}`
  // }
  // const imgUrl = process.env.PUBLIC_URL + `/img/${props.questions[props.question].imageGroot}`
  // console.log('imgUrl; DROP1 ', imgUrl)

  const imageOne = useRef(null)
  const dropWrapper = useRef(null)

  const [imgOneHeight, setImgOneHeight] = useState(300)
  const [imgOneWidth, setImgOneWidth] = useState(350)
  const [dropWrapperHeight, setDropWrapperHeight] = useState(800)
  const [dropWrapperWidth, setDropWrapperWidth] = useState(800)

  setTimeout(() => {
    setImgOneWidth(imageOne.current && imageOne.current.clientWidth)
    setImgOneHeight(imageOne.current && imageOne.current.clientHeight)
    setDropWrapperHeight(dropWrapper.current && dropWrapper.current.clientHeight)
    setDropWrapperWidth(dropWrapper.current && dropWrapper.current.clientWidth)
  }, 10)

  // console.log('4', imgOneHeight, dropWrapperHeight)
  const styleDropItem = (concept) => {
    return {
      left: (concept.X_c * imgOneWidth) / 100 + (dropWrapperWidth - imgOneWidth) / 2,
      top: (concept.Y_c * imgOneHeight) / 100 + (dropWrapperHeight - imgOneHeight) / 2,
    }
  }

  return (
    <div className="dropWrapper" ref={dropWrapper}>
      <div className="imageOne cat_img1">
        <img
          className="imageOne__img"
          id="imageOne_img"
          ref={imageOne}
          src={process.env.PUBLIC_URL + `/img/${props.questions[props.question].imageGroot}`}
          alt={props.question.title}
        />
        {/* <canvas src={process.env.PUBLIC_URL + `/img/${props.questions[props.question].imageGroot}`} /> */}
        <CanvasLines
          imgOneWidth={imgOneWidth}
          imgOneHeight={imgOneHeight}
          dropWrapperHeight={dropWrapperHeight}
          dropWrapperWidth={dropWrapperWidth}
          questions={props.questions}
          question={props.question}
        ></CanvasLines>
      </div>

      {props.questions[props.question].conceptsOfQ.map((concept, conceptI) => (
        <div
          className="dropItem cat_img1"
          key={conceptI}
          style={styleDropItem(concept)}
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDrop={(e) => {
            dropHandler(e)
          }}
        >
          <div className="dropWord">{concept.word}</div>
        </div>
      ))}
    </div>
  )
}

export default Drops
