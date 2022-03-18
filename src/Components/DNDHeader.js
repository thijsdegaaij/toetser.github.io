import React from 'react'

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
      {/* VRAAG */}
      <div className={props.hoera ? 'hoera title' : 'title'}>{props.questions[props.question].title}</div>

      <div className="nonTitle">
        <div className="points">
          {/* PERCENTAGE */}
          <div className="percentage">{percentage}%</div>
          <div className="posNumber">{props.posNumber}</div>
          <div className="negNumber">{props.negNumber}</div>
        </div>
        {/* INLOG BUTTON */}
        <div className={`inlogIcon ${props.inlogShow}`} onClick={onClickInlog}></div>
        {/* MENU BUTTON */}
        <div className={`menuIcon ${props.menuShow}`} onClick={onClickMenu}>
          {' '}
          &#9776;
        </div>
      </div>
    </div>
  )
}

export default DNDHeader
