import React, { useState, useRef } from 'react'
import DropsOnePicture from './DropsOnePicture'
import DropsFourPictures from './DropsFourPictures'

// HEADER
function DNDHeader(props) {
  const percentage = props.posNumber - props.negNumber === 0 ? 0 : Math.floor((props.posNumber * 100) / (props.posNumber - props.negNumber))

  const onClickInlog = () => {
    props.getInlogShow(props.inlogShow)
  }
  const onClickMenu = () => {
    props.getmenuShow(props.menuShow)
  }

  return (
    <div className="headWrapper">
      <div className={props.hoera ? 'hoera title' : 'title'}>{props.questions[props.question].title}</div>
      <div className="nonTitle">
        <div className="points">
          <div className="percentage">{percentage}%</div>
          <div className="posNumber">{props.posNumber}</div>
          <div className="negNumber">{props.negNumber}</div>
        </div>
        <div className={`inlogIcon ${props.inlogShow}`} onClick={onClickInlog}>
          T
        </div>
        <div className={`menuIcon ${props.menuShow}`} onClick={onClickMenu}>
          {' '}
          &#9776;
        </div>
      </div>
    </div>
  )
}

// DRAGS ANTWOORDEN
function Drags(props) {
  const dragStartHandler = (e) => {
    props.getDragNode(e.target)
  }

  return (
    <div className="dragWrapper">
      {props.questions[props.question].concepts
        // probleem is dat hij steeds update en de orde daarmee verstoort.
        // .sort((a, b) => 0.5 - Math.random())
        .map((concept, conceptI) => (
          <div
            className={'dragItem'}
            key={conceptI}
            concept={concept}
            draggable
            onDragStart={(e) => {
              dragStartHandler(e)
            }}
          >
            {concept.word}
          </div>
        ))}
    </div>
  )
}

// ALLES
function DragNDrop(props) {
  // const [category, setGategory] = useState(questions[question].category)
  // setGategory(questions[question].category)
  const [negNumber, setNegNumber] = useState(0)
  const [posNumber, setPosNumber] = useState(0)
  const [hoera, setHoera] = useState(false)
  const dragNode = useRef()

  const getNegNumberParent = (props) => {
    setNegNumber(props)
  }
  const getPosNumberParent = (props) => {
    setPosNumber(props)
  }
  const getDragNodeParent = (props) => {
    dragNode.current = props
  }
  const getHoeraParent = (props) => {
    setHoera(props)
  }

  const goBack = () => {
    props.getQuestion(props.question - 1)
  }
  const goFurther = () => {
    props.getQuestion(props.question + 1)
  }

  console.log('question; DND..', props.question)

  return (
    <div className="questionWrapper">
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
      {/* {props.category === 'cat_img1' ? (
        <DropsOnePicture
          questions={props.questions}
          question={props.question}
          getQuestion={props.getQuestion}
          dragNode={dragNode}
          negNumber={negNumber}
          getNegNumber={getNegNumberParent}
          posNumber={posNumber}
          getPosNumber={getPosNumberParent}
          hoera={hoera}
          getHoera={getHoeraParent}
          category={props.ategory}
        />
      ) : (
        <DropsFourPictures
          questions={props.questions}
          question={props.question}
          getQuestion={props.getQuestion}
          dragNode={dragNode}
          negNumber={negNumber}
          getNegNumber={getNegNumberParent}
          posNumber={posNumber}
          getPosNumber={getPosNumberParent}
          hoera={hoera}
          getHoera={getHoeraParent}
          category={props.category}
        />
      )} */}

      <Drags questions={props.questions} question={props.question} getDragNode={getDragNodeParent} />

      <div className="buttons">
        <button onClick={goBack}>terug</button>
        <button onClick={goFurther}>verder</button>
      </div>
    </div>
  )
}

export default DragNDrop
