import React from 'react'
import "../Components/CSS/NumbersPage.css"

const NumbersPage = () => {
  return (
    <div>
      <h1 id='NumbersPage-heading'>Lupin in Numbers</h1>
      <ul className='NumbersPage-list'>
        <li> <span>23000+</span>EMPLOYEES</li>
        <li><span>1000+</span>PRODUCTS</li>
        <li><span>100+</span>COUNTRIES</li>
        <li><span>15</span>GLOBAL FACILITIES</li>
        <li><span>7</span>R&D CENTERS</li>
      </ul>
    </div>
  )
}

export default NumbersPage