import React from 'react'
import { useDroppable } from '@dnd-kit/core'

function Droppable(props) {
  // Properties of useDroppable; find at dnd-kit useDroppable
  const { setNodeRef, isOver } = useDroppable({
    id: props.id,
    data: props.concept.word,
  })
  const style = {
    // backgroundColor: isOver ? 'lightblue' : undefined,
    // werkt niet bij unmounted opbject, of zoiets
    // border: isOver ? 'red' : null,
    // borderWidth: isOver ? '4px' : null,
    // borderStyle: isOver ? 'solid' : null,
  }

  return (
    <div ref={setNodeRef} style={style} className="dropItem cat_img4" id={props.concept.word}>
      <div className="dropWord">{props.concept.word}</div>
      <div className={isOver ? 'dropPlus' : 'dropPlusInvisible'}>+</div>
      <img
        className="dropImage cat_img4"
        src={process.env.PUBLIC_URL + `/img/${props.concept.image}`}
        alt={props.concept.word}
      />
    </div>
  )
}

function DND_img4_drop(props) {
  return (
    <section className="dropWrapper">
      {props.conceptsOfQ.map((concept, conceptI) => (
        <Droppable
          id={conceptI + 1}
          key={conceptI}
          concept={concept}
          correct={props.correct}
        ></Droppable>
      ))}
    </section>
  )
}

export default DND_img4_drop
