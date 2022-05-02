import React, { useState, useRef } from 'react'

// HEADER
function CMSImage(props) {
  const imgOne = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [relX, setRelX] = useState(0)
  const [relY, setRelY] = useState(0)

  const givePosition = (e) => {
    const width = e.target.width
    const height = e.target.height
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
    const relX = Math.round((position.x * 1000) / width) / 10
    const relY = Math.round((position.y * 1000) / height) / 10
    setRelX(relX)
    setRelY(relY)

    console.log('position relative: ', relX, relY)
    console.log('position objext', position)
  }

  return (
    <div className="cms_image">
      <span>Dubbelclick mouse for pos:</span>{' '}
      <span>
        x: {relX}%, y: {relY}%
      </span>
      {/* <p>{position[0], position[1]}</p> */}
      <p></p>
      <img
        ref={imgOne}
        className=" imageOne__img"
        src={process.env.PUBLIC_URL + `/img/${props.questions[props.questionNr].imageGroot}`}
        // window.location.origin
        alt={'foto niet gevonden'}
        onClick={(e) => givePosition(e)}
      />
    </div>
  )
}

export default CMSImage
