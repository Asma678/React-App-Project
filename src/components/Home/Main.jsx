import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextData } from "../Context/ContextData"
import Article from "./Article"

const Main = () => {
  const [dataContext] = useContext(ContextData)
  return (
    <div className="container">
      {dataContext
        .filter((item) => item.id === 26)
        .map((item) => {
          return (
            <div className="mainArticle1" key={Math.random()}>
              <Link to={`/article/${item.id}`} className="link">
                <img src={item.src} alt={item.alt} />
              </Link>
              <div className="mainArticle1Text">
                <Link to={`/article/${item.id}`} className="link">
                  <h2 className="mainArticle1Heading">{item.title}</h2>
                </Link>
                <small>{item.info}</small>
              </div>
            </div>
          )
        })}

      <Article />
    </div>
  )
}

export default Main