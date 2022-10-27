import React from 'react'
import "../Stylesheets/Spinner.css"
const Spinner = () => {
  return (
    <div className="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
  )
}

export default Spinner
