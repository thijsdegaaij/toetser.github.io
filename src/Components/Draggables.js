import React from 'react'
import { useDraggable } from '@dnd-kit/core'

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: props.concept.word,
  })
  const style = transform
    ? {
        // to move
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        // no border on button (button is recommanded)
        borderWidth: '0px',
      }
    : { borderWidth: '0px' }

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className={'dragItem'} id={props.conceptI + 1}>
      {props.concept ? props.concept.word : null}
    </button>
  )
}

function Draggables(props) {
  return (
    <section className="dragWrapper">
      {props.conceptsOfQ.map((concept, conceptI) => (
        <Draggable id={conceptI + 1} key={conceptI} concept={concept} conceptI={conceptI}></Draggable>
      ))}
    </section>
  )
}

export default Draggables
