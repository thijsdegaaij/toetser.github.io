import React from 'react'

// HEADER
function DNDHeader(props) {
  const percentage =
    props.posNumber - props.negNumber === 0
      ? 0
      : Math.floor((props.posNumber * 100) / (props.posNumber - props.negNumber))
  const firstLetter = props.users[0].voornaam.charAt(0)

  const onClickMenu = () => {
    props.getMenuShow(props.menuShow)
  }

  return (
    <div className="headWrapper">
      {/* VRAAG */}
      <div className="title">{props.questions[props.questionNr].title}</div>

      <div className="nonTitle">
        <div className="points">
          {/* PERCENTAGE */}
          <div className="percentage">{percentage}%</div>
          <div className="posNumber">{props.posNumber}</div>
          <div className="negNumber">{props.negNumber}</div>
        </div>
        {/* INLOG BUTTON */}
        <div
          className={`inlogIcon ${props.inlogShow}`}
          onClick={() => props.getInlogShow(props.inlogShow)}
        >
          <div>{firstLetter}</div>
        </div>
        {/* MENU BUTTON */}
        <div
          className={`menuIcon ${props.menuShow}`}
          onClick={() => props.getMenuShow(props.menuShow)}
        >
          &#9776;
        </div>
      </div>
    </div>
  )
}

export default DNDHeader
