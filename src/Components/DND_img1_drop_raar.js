import React, { useState, useRef, useEffect } from 'react'
import CanvasLines from './CanvasLines'
import { useDroppable } from '@dnd-kit/core'

function Droppable(props) {
  // Properties of useDroppable; find at dnd-kit useDroppable
  const { setNodeRef } = useDroppable({
    id: props.id,
    data: props.concept.word,
  })

  const [styleDropItem, setStyleDropItem] = useState(null)

  if (props.imgW !== '101') {
    setStyleDropItem(
      {
        left: props.imgW,
        top: (props.concept.Y_c * props.imgH) / 100 + (props.dwH - props.imgH) / 2,
      },
      []
    )
  }

  // console.log(
  //   'xxx',
  //   props.concept.word,
  //   (props.concept.X_c * props.imgW) / 100 + (props.dwW - props.imgW) / 2
  // )
  console.log('props.img:', props.concept.word, props.imgW, props.imgH)
  console.log('props.dr:', props.concept.word, props.dwW, props.dwH)
  console.log('styleDropItem:', props.concept.word, styleDropItem)

  return (
    <div
      ref={setNodeRef}
      className="dropItem cat_img1"
      key={props.conceptI}
      id={props.concept.word}
      style={styleDropItem}
    >
      <div className="dropWord">{props.concept.word}</div>
    </div>
  )
}

function DND_img1_drop(props) {
  const imageOne = useRef(null)
  const dropWrapper = useRef(null)

  const [imgW, setImgW] = useState(101)
  const [imgH, setImgH] = useState(201)
  const [dwW, setDrW] = useState(100)
  const [dwH, setDwH] = useState(200)

  const getWH = (target) => {
    // console.log('target.target.clientWidth:', target.target.clientWidth)

    setImgW(target.target.clientWidth)
    setImgH(target.target.clientHeight)
  }
  const getWH_dw = (target) => {
    // console.log('target.target.clientWidth:', target.target.clientWidth)
    setDrW(target.target.clientWidth)
    setDwH(target.target.clientHeight)
  }

  // left: (props.concept.X_c * props.imgW) / 100 + (props.dwW - props.imgW) / 2,
  // top: (props.concept.Y_c * props.imgH) / 100 + (props.dwH - props.imgH) / 2,
  // const dummy = 1
  // const left = (dummy * imgW) / 100 + (dwW - imgW) / 2
  // const top = (dummy * props.imgH) / 100 + (props.dwH - props.imgH) / 2
  // console.log('left', left)

  // console.log('imageOne', imgW, imgH)
  // console.log('dropWrapper', dwW, dwH)

  return (
    <div ref={dropWrapper} className="dropWrapper_cat_img1" onLoad={getWH_dw}>
      <div className="imageOne cat_img1">
        <img
          onLoad={getWH}
          className="imageOne__img"
          id="imageOne_img"
          ref={imageOne}
          src={process.env.PUBLIC_URL + `/img/${props.questionData.imageGroot}`}
          alt={props.questionData.title}
        />

        <CanvasLines
          imgW={imgW}
          imgH={imgH}
          dwH={dwH}
          dwW={dwW}
          questions={props.questions}
          questionNr={props.questionNr}
          questionData={props.questionData}
        ></CanvasLines>
      </div>

      {props.conceptsOfQ.map((concept, conceptI) => (
        <Droppable
          id={conceptI + 1}
          key={conceptI}
          concept={concept}
          conceptI={conceptI}
          imgW={imgW}
          imgH={imgH}
          dwH={dwH}
          dwW={dwW}
        />
      ))}
    </div>
  )
}

export default DND_img1_drop

// function styleDropItem(concept) {
//   return {
//     left: (concept.X_c * imgW) / 100 + (dwW - imgW) / 2,
//     top: (concept.Y_c * imgH) / 100 + (dwH - imgH) / 2,
//   }
// }
// CONSOLES
// console.log('concept:', props.conceptsOfQ[0])
// console.log('height of imageOne and dropWrapper', imgH, dwH)
// console.log('height of imgW and dwW', imgW, dwW)

/* <canvas src={process.env.PUBLIC_URL + `/img/${props.questions[props.questionNr].imageGroot}`} /> */

// const [left, setLeft] = useState(300)
// const [top, setTop] = useState(300)
// setLeft(
//   (props.concept.X_c * props.imgW) / 100 + (props.dwW - props.imgW) / 2
// )
// setTop(
//   (props.concept.Y_c * props.imgH) / 100 +
//     (props.dwH - props.imgH) / 2
// )

// const left =
//   (props.concept.X_c * props.imgW) / 100 + (props.dwW - props.imgW) / 2
// const top =
//   (props.concept.Y_c * props.imgH) / 100 +
//   (props.dwH - props.imgH) / 2

// console.log('left:', )
// console.log()
// styleDropItem(props.concept)
