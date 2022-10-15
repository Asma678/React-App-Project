import React, { useState, useEffect } from "react"
import "./Carousel.css"

const Carousel = (props) => {
  const { children } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(5)

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }
  useEffect(() => {
    setLength(5)
  }, [children])

  return (
    <div className="carousel-container">
      <div className="cw">
        <button onClick={prev} className="left-arrow">
          &lt;
        </button>
        <div className="ccw">
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
          <div
            className="cc"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel