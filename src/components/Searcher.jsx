import React from 'react'

function Searcher() {
  return (
    <div className={`search-container`}>
      <div className={`input-box`}>
        <input className={`input`} type="text" placeholder='Search'/>
        <span className={`logo`}>i</span>
      </div>
    </div>
  )
}

export default Searcher