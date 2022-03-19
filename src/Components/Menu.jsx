import React from 'react'

// HEADER
function Menu (props) {
  
  return (  
    <div  className={`menuWrapper ${props.menuShow}`} >
      <h1>Menu</h1>
      <h3>Kies vak:</h3>
      <ul>
      <li>Groene Productie</li>
      <li>Groene vormgeving en verkoop</li>
      <li>Groene verstedelijking</li>

      </ul>
      
    </div>
    ) 

  }

  export default Menu