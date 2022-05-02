import React, { useState, useRef } from 'react'

// HEADER
function Inlog(props) {
  // console.log('iniuser:', props.users[0].voornaam)
  const firstLetter = props.users[0].voornaam.charAt(0)

  // consosle.log('firletter:', firstLetter)

  const imgOne = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const givePosition = (e) => {
    const width = e.target.width
    const height = e.target.height
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
    const relX = Math.round((position.x * 1000) / width) / 10
    const relY = Math.round((position.y * 1000) / height) / 10

    console.log('position: ', relX, relY)
  }

  return (
    <div className="inlogWrapper">
      <h1>Inlog</h1>
      <div className="inlogHeader">
        <div>{firstLetter}</div>
        <div>{`${props.users[0].voornaam} ${props.users[0].achternaam}`}</div>
      </div>
      <img
        ref={imgOne}
        className="imageOne__img"
        src={process.env.PUBLIC_URL + `/img/${props.questions[props.questionNr].imageGroot}`}
        // window.location.origin
        alt={'hallo'}
        onClick={(e) => givePosition(e)}
      />
    </div>
  )
}

export default Inlog
