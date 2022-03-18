import React, { useState, useRef } from 'react'
import CanvasLines from './CanvasLines'
import { useDroppable } from '@dnd-kit/core'

function Droppable(props) {
  // Properties of useDroppable; find at dnd-kit useDroppable
  const { setNodeRef } = useDroppable({
    id: props.id,
    data: props.concept.word,
  })

  return (
    <div ref={setNodeRef} className="dropItem cat_img1" key={props.conceptI} id={props.concept.word} style={props.styleDropItem(props.concept)}>
      <div className="dropWord">{props.concept.word}</div>
    </div>
  )
}

function DropOne(props) {
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
  }, 30)

  const styleDropItem = (concept) => {
    return {
      left: (concept.X_c * imgOneWidth) / 100 + (dropWrapperWidth - imgOneWidth) / 2,
      top: (concept.Y_c * imgOneHeight) / 100 + (dropWrapperHeight - imgOneHeight) / 2,
    }
  }
  // CONSOLES
  // console.log('concept:', props.concepts[0])
  console.log('height of imageOne and dropWrapper', imgOneHeight, dropWrapperHeight)
  console.log('height of imgOneWidth and dropWrapperWidth', imgOneWidth, dropWrapperWidth)

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

      {props.questions[props.question].concepts.map((concept, conceptI) => (
        <Droppable id={conceptI + 1} key={conceptI} concept={concept} conceptI={conceptI} styleDropItem={styleDropItem}>
          {' '}
        </Droppable>
      ))}
    </div>
  )
}

export default DropOne
