import React from 'react'
import { memo } from 'react'
import { useDraggable } from '@dnd-kit/core'

export function Draggable(props) {
  // console.log('overData 2:', props.overData)
  // console.log('xxxx', props.overData)

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: props.concept.word,
    disabled: props.concept.word === props.overData && !props.droppableNode ? true : false,
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
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={'dragItem'}
      id={props.conceptI + 1}
      // draggable="false"
    >
      {props.concept ? props.concept.word : null}
    </button>
  )
}

function Draggables(props) {
  return (
    // zou array willen met random volgorde, maar door rerenders, verandert de array tijdens het drag en droppen

    <section className="dragWrapper">
      {props.conceptsOfQ
        // .sort(() => Math.random() - 0.5)
        .map((concept, conceptI) => (
          <Draggable
            id={conceptI + 1}
            key={conceptI}
            concept={concept}
            conceptI={conceptI}
            droppableNode={props.droppableNode}
            overData={props.overData}
          ></Draggable>
        ))}
    </section>
  )
}

export default memo(Draggables)
