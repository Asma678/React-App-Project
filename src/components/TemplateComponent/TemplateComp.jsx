import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ContextData } from "../Context/ContextData"
import "./TemplateComp.css"
import imagenotfound from "../../gallery/notFound.jpg"
import { ContextTheme } from "../Context/ContextTheme"

export default function TemplateComp(props) {
  const { Start, End, Heading } = props
  const [DataContext] = useContext(ContextData)
  const [showLoad, setShowLoad] = useState(false)
  const [darkMode] = useContext(ContextTheme)

  return (
    <div className="mainContainer">
      <div className="TempC">
        <div>
          <div className="TempH">
            <h1>{Heading}</h1>
          </div>
          <div className="TempC1">
            {DataContext.map((item) => {
              return item.id >= Start && item.id < End ? (
                <div
                  className="LatestA"
                  key={Math.floor(Math.random() * 1000000)}
                >
                  <Link to={`/article/${item.id}`} className="link">
                    <img src={item.src} alt={item.alt} />
                  </Link>
                  <div className="LatestOneText">
                    <Link to={`/article/${item.id}`} className="link">
                      <h2>{item.title}</h2>
                    </Link>
                    <p>{item.details}</p>
                    <p>{item.info}</p>
                  </div>
                </div>
              ) : null
            })}
            {!showLoad ? (
              <button
                className={` loadContainer ${darkMode ? "Dark" : "Light2"}`}
                onClick={() => setShowLoad(!showLoad)}
              >
                <span className="loadMoreSpan">&nbsp;</span>
                LOAD MORE
              </button>
            ) : null}
            {showLoad
              ? DataContext.map((item) => {
                  return item.id === End ? (
                    <div
                      className="LatestA"
                      key={Math.floor(Math.random() * 1000000)}
                    >
                      <Link to={`/article/${item.id}`} className="link">
                        <img src={item.src} alt={item.alt} />
                      </Link>
                      <div className="LatestT">
                        <Link to={`/article/${item.id}`} className="link">
                          <h2>{item.title}</h2>
                        </Link>
                        <p>{item.details}</p>
                        <p>{item.info}</p>
                      </div>
                    </div>
                  ) : null
                })
              : null}
          </div>
        </div>
        <div className="topAd">
          <div className="topPosts">
            <div className="latestHeader">
              <h1>Top Posts</h1>
              <hr />
            </div>
            {DataContext.map((item) => {
              return item.id === 1 ? (
                <div
                  className="topOneArticle"
                  key={Math.floor(Math.random() * 1000000)}
                >
                  <Link to={`/article/${item.id}`} className="link">
                    <img src={item.src} alt={item.alt} />
                  </Link>
                  <div className="topArticlesText">
                    <div>
                      <Link to={`/article/${item.id}`} className="link">
                        <h2>{item.title}</h2>
                      </Link>
                      <p>{item.info}</p>
                    </div>
                    <div className="topListNum">{item.id}</div>
                  </div>
                </div>
              ) : null
            })}
            {DataContext.map((item) => {
              return item.id >= 2 && item.id <= 4 ? (
                <div
                  className="topArticle"
                  key={Math.floor(Math.random() * 1000000)}
                >
                  <Link to={`/article/${item.id}`} className="link">
                    <img src={item.src} alt={item.alt} />
                  </Link>
                  <div className="topArticlesText">
                    <div className="topArticlesInfo">
                      <Link to={`/article/${item.id}`} className="link">
                        <h4>{item.title}</h4>
                      </Link>
                      <p>{item.info}</p>
                    </div>
                    <div className="topListNum">{item.id}</div>
                  </div>
                </div>
              ) : null
            })}
          </div>
          <div className="pageAd">
            <a
              href="https://sitechecker.pro/wp-content/uploads/2017/12/semrush-404-page-not-found.png"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imagenotfound} alt="pic not found" className="touristImg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}