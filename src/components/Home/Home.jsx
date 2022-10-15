import React from "react"
import LatestAll from "./LatestAll"
import LatestOne from "./LatestOne"
import Main from "./Main"

const Home = () => {
  return (
    <div className="mainContainer">
      <Main />
      <LatestAll />
      <LatestOne />
    </div>
  )
}

export default Home