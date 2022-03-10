import React, { useState, useEffect } from 'react'

// DROPS
function Drops(props) {
  const [photoClicked, setPhotoClicked] = useState(false)
  const [photonodeClicked, setPhotonodeClicked] = useState('1')

  const dropNodes = document.getElementsByClassName('dropItem')
  const dragNodes = document.getElementsByClassName('dragItem')

  const [goodPerQuestion, setGoodPerQuestion] = useState(0)

  useEffect(() => {
    // Bij start, als er nog niet geclicked is dan is er nog geen Node die veranderd moet worden.
    if (photonodeClicked === '1') {
    } else {
      photoClicked ? makePhoteBig() : makePhotoNormal()
    }
  })
  const clickHandler = (e, clicked) => {
    setPhotonodeClicked(e.target)
    setPhotoClicked(!photoClicked)
  }
  const makePhoteBig = (e) => {
    for (let i = 0; i < dropNodes.length; i++) {
      dropNodes[i].style.display = 'none'
    }
    console.log('photoNode:', photonodeClicked)
    photonodeClicked.parentNode.parentNode.style = 'grid-template-columns: repeat(1, 1fr);'
    photonodeClicked.parentNode.style = ' height: var(--dropWrapper-height);'
  }
  const makePhotoNormal = () => {
    for (let i = 0; i < dropNodes.length; i++) {
      dropNodes[i].style.display = 'grid'
    }
    photonodeClicked.parentNode.parentNode.style = 'none'
    photonodeClicked.parentNode.style = 'none'
  }

  const dragOverHandler = (e) => {
    e.preventDefault()
  }
  const dragLeaveHandler = (e) => {
    e.preventDefault()
  }
  const dropHandler = (e) => {
    e.preventDefault()
    console.log('dropItem: D_4..', e.target)
    console.log('dropWord: D_4..', e.target.parentNode.firstChild.innerHTML)
    console.log('dragNodeInnerHtml: D_4..', props.dragNode.current.innerHTML)

    // CORRECT DROP
    if (e.target.parentNode.firstChild.innerHTML === props.dragNode.current.innerHTML) {
      e.target.parentNode.childNodes[0].style = 'font-size: 5vw; background-color: var(--green-bg-color)'
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
    if (goodPerQuestion + 1 === props.questions[props.question].concepts.length) {
      props.getHoera(true)

      setTimeout(() => {
        props.getQuestion(props.question + 1)

        //RESET QUESTION
        setGoodPerQuestion(0)
        props.getHoera(false)
        props.dragNode.current = null
        for (let node of dropNodes) {
          node.childNodes[0].style = 'none'
        }
        for (let node of dragNodes) {
          node.style = 'none'
          node.draggable = true
        }
      }, 2000)
    }
  }
  console.log('qq.. DND', props.questions[props.question])
  return (
    <div className="dropWrapper">
      {props.questions[props.question].concepts.map((concept, conceptI) => (
        <div
          className="dropItem cat_img4"
          key={conceptI}
          onClick={(e) => {
            clickHandler(e)
          }}
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDrop={(e) => {
            dropHandler(e)
          }}
        >
          <div className="dropWord">{concept.word}</div>
          <img className="dropImage cat_img4" src={process.env.PUBLIC_URL + `/img/${concept.image}`} alt={concept.word} />
        </div>
      ))}
    </div>
  )
}

export default Drops
