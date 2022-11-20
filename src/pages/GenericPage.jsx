import React from 'react'
import MoviesContainer from '../components/MoviesContainer'

const configuration = {
  language: "es",
  kindOfPage: "trending",
  
}

function GenericPage() {
  return (
    <div className={`genericPage`}>
      <div className={`title-container`}>
        <div className={`text-box`}>
          <h1 className={`text`}>Popular</h1>
        </div>
        <div className={`btn-box`}>
          <button className={`button`}>
            <span>i</span>
          </button>
        </div>
      </div>

      {/* <categoriesComponent> */}

      <MoviesContainer />
    </div>
  )
}

export default GenericPage