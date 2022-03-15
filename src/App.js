import React from 'react'
import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'

// import { Draggable } from './componentsDndKit/Draggable'
// import { Droppable } from './componentsDndKit/Droppable'
import Draggable from './componentsDndKit/Draggable'
import Droppable from './componentsDndKit/Droppable'

function App() {
  const containers = ['A', 'B', 'C']
  const [parent, setParent] = useState(null)
  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : 'Drop here'}
        </Droppable>
      ))}
    </DndContext>
  )

  function handleDragEnd(event) {
    const { over } = event

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null)
  }
}

export default App
